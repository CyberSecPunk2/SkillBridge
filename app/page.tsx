import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-slate-800">

        <Link href="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:scale-105 transition">
            SkillBridge
          </h1>
        </Link>

        <div className="flex gap-8 text-lg">

          <Link
            href="/careers"
            className="hover:text-cyan-300 hover:scale-110 transition"
          >
            Careers
          </Link>

          <Link
            href="/roadmaps"
            className="hover:text-cyan-300 hover:scale-110 transition"
          >
            Roadmaps
          </Link>

          <Link
            href="/connect"
            className="hover:text-cyan-300 hover:scale-110 transition"
          >
            Connect
          </Link>

          <Link
            href="/advisor"
            className="hover:text-cyan-300 hover:scale-110 transition"
          >
            AI Advisor
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[85vh] text-center px-6">

        <div className="mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300">
          🚀 AI Powered Career Guidance Platform
        </div>

        <h1 className="text-7xl font-extrabold leading-tight">
          Build Your
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Dream Career
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-slate-300">
          Discover career paths, follow structured learning roadmaps,
          connect with opportunities, and receive personalized AI-powered
          guidance tailored to your interests.
        </p>

        <div className="flex gap-5 mt-10">

          <Link href="/careers">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition font-semibold shadow-lg shadow-blue-500/30">
              Explore Careers
            </button>
          </Link>

          <Link href="/advisor">
            <button className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold">
              Try AI Advisor
            </button>
          </Link>

        </div>

      </section>

    </main>
  );
}