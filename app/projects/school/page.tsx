import { Suspense } from "react";
import { getProjects } from "@/lib/projects-db";

export default function SchoolProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">School Projects</h1>

      <Suspense fallback={<SchoolProjectsSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}

async function SchoolProjectList() {
  // Temporary delay to test component-level streaming
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const projects = await getProjects("school");

  return (
    <>
      {projects.map((project) => (
        <article key={project.id} className="my-6">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
        </article>
      ))}
    </>
  );
}

function SchoolProjectsSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-48 rounded bg-slate-200" />

      <div className="h-32 rounded-xl bg-slate-200" />

      <div className="h-32 rounded-xl bg-slate-200" />
    </div>
  );
}