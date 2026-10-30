import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <SkillCard skill="HTML & CSS" />
          <SkillCard skill="JavaScript" />
          <SkillCard skill="TypeScript" />
          <SkillCard skill="Next.js" />
        </div>
      </section>
    </main>
  );
}
