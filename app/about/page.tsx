import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-lg text-gray-600 mb-6">
        My name is Emerald Awoke. I am a Software Development
        student at BYU-Idaho, passionate about learning
        technology and building useful web applications.
      </p>

      <p className="text-lg text-gray-600 mb-8">
        I enjoy solving problems, exploring new technologies,
        and developing my skills in web and software development.
      </p>

      <h2 className="text-2xl font-bold mb-4">My Learning Journey</h2>

      <SkillCard
        title="Technologies I Am Learning"
        skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "C#", "SQL", "Python", "Git", "Node.js", "Express.js", "MongoDB", "REST APIs", "AWS", "Azure", "Tailwind CSS"]}
      />
    </main>
  );
}