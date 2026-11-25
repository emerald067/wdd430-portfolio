import { getProjects } from "@/lib/projects-db";

export default async function OpenSourcePage() {
  // Temporary delay for testing the loading skeleton
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const projects = await getProjects("opensource");

  return (
    <div>
      <h1 className="text-3xl font-bold">Open Source Projects</h1>

      {projects.map((project) => (
        <article key={project.id} className="my-6">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}