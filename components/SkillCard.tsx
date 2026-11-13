interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <section className="p-6 rounded-lg border bg-gray-50 shadow-sm">
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}