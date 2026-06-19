import Link from "next/link";

const careers = [
  {
    title: "Software Engineer",
    desc: "Design and build applications, websites and software systems.",
  },
  {
    title: "Data Scientist",
    desc: "Analyze data and build intelligent prediction models.",
  },
  {
    title: "AI Engineer",
    desc: "Develop machine learning and generative AI solutions.",
  },
  {
    title: "Cybersecurity Analyst",
    desc: "Protect systems, networks and digital infrastructure.",
  },
  {
    title: "Cloud Engineer",
    desc: "Build scalable cloud-based platforms and services.",
  },
  {
    title: "Product Manager",
    desc: "Lead product strategy, planning and execution.",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-10">

      <Link href="/">
        <button className="mb-8 text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </button>
      </Link>

      <h1 className="text-5xl font-bold mb-4">
        Career Explorer
      </h1>

      <p className="text-slate-300 mb-10">
        Explore trending technology and professional career paths.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {careers.map((career) => (
          <div
            key={career.title}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-3">
              {career.title}
            </h2>

            <p className="text-slate-300">
              {career.desc}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}