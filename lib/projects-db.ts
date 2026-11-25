import { sql } from "@vercel/postgres";
const ITEMS_PER_PAGE = 6;

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export async function getProjects(
  type?: string | null
): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT *
      FROM projects
      WHERE type = ${type}
      ORDER BY id
    `;

    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    ORDER BY id
  `;

  return rows;
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE id = ${id}
  `;

  return rows[0] ?? null;
}


export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const searchQuery = query.trim().slice(0, 100);
  const searchPattern = `%${searchQuery}%`;

  const offset = (Math.max(1, currentPage) - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      ${searchQuery === ""}
      OR title ILIKE ${searchPattern}
      OR description ILIKE ${searchPattern}
      OR array_to_string(technologies, ' ') ILIKE ${searchPattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const searchQuery = query.trim().slice(0, 100);
  const searchPattern = `%${searchQuery}%`;

  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*)::int AS count
    FROM projects
    WHERE
      ${searchQuery === ""}
      OR title ILIKE ${searchPattern}
      OR description ILIKE ${searchPattern}
      OR array_to_string(technologies, ' ') ILIKE ${searchPattern}
  `;

  const totalProjects = rows[0].count;

  return Math.max(1, Math.ceil(totalProjects / ITEMS_PER_PAGE));
}