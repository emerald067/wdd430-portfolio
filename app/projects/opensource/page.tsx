"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function OpenSourcePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects?type=opensource");
        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("Error fetching open-source projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p>Loading open-source projects...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Open Source Projects</h1>

      {projects.map((project) => (
        <article key={project.id} className="my-6">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}