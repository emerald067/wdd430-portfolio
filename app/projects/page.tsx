import { Suspense } from "react";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects Overview</h1>

      <Suspense
        fallback={
          <input
            type="search"
            placeholder="Search projects..."
            disabled
            className="my-4 w-full rounded-md border border-gray-300 px-4 py-2"
          />
        }
      >
        <ProjectSearch />
      </Suspense>

      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectsContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function ProjectsContent({
  searchParams,
}: {
  searchParams: ProjectsPageProps["searchParams"];
}) {
  const params = await searchParams;

  const query = params.query ?? "";
  const pageNumber = Number(params.page) || 1;
  const currentPage = Math.max(1, pageNumber);

  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );

  const totalPages = await fetchProjectsPages(query);

  return (
    <>
      <Suspense fallback={<p>Loading pagination...</p>}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <article key={project.id} className="my-6">
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p>{project.description}</p>

            <p>
              Technologies: {project.technologies.join(", ")}
            </p>
          </article>
        ))
      )}
    </>
  );
}