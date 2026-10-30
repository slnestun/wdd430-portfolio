interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
      <p className="mt-1 text-sm text-gray-600">
        A technology I am learning and using in my projects.
      </p>
    </article>
  );
}
