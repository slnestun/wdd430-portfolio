import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Temple Inn& Suites',
    description: 'A responsive website for a hotel, built with HTML, CSS , and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'http://heratech-systems.me/wdd230-final/'
  },
  {
    title: 'Meal Planner',
    description: 'A meal planning app that allows users to create and manage their weekly meal plans.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://meal-planner-bpe2.onrender.com/'
  },
  {
    title: 'Heratech Systems',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'Vite', 'express', 'Node.js', 'PostgreSQL'],
    link: 'https://heratech-frontend.vercel.app/'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
