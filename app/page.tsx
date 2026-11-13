import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Chamber of Commerce Website",
    description:
      "A website designed to connect local businesses with their community. It provides business information and a directory to help visitors discover local businesses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://emerald067.github.io/wdd231/chamber/",
  },
  {
    title: "Pawprint Valley - Pet Adoption Website",
    description:
      "A website for a fictional animal rescue organization. It helps visitors explore adoptable pets, learn about the adoption process, and discover ways to support the organization.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://emerald067.github.io/wdd231/final/",
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Emerald Awoke
        </h1>

        <p className="text-xl mb-4">
          Software Development Student
        </p>

        <p className="text-lg text-gray-600">
          Welcome to my portfolio. Here, you can explore some of
          the projects I have developed while learning web
          development and software development.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-6">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}