import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800">

        <Link href="/">
          <h1 className="text-2xl font-bold hover:text-blue-400 transition">
            SkillBridge
          </h1>
        </Link>

        <div className="flex gap-6 text-lg">

          <Link
            href="/careers"
            className="hover:text-blue-400 transition"
          >
            Careers
          </Link>

          <Link
            href="/roadmaps"
            className="hover:text-blue-400 transition"
          >
            Roadmaps
          </Link>

          <Link
            href="/connect"
            className="hover:text-blue-400 transition"
          >
            Connect
          </Link>

          <Link
            href="/advisor"
            className="hover:text-blue-400 transition"
          >
            AI Advisor
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">

        <h2 className="text-6xl font-bold">
          Bridge Your Skills
          <br />
          To Your Dream Career
        </h2>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Explore careers, build skills, receive AI-powered guidance,
          and prepare for your future.
        </p>

        <Link href="/careers">
          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition">
            Explore Careers
          </button>
        </Link>

      </section>

    </main>
  );
}