export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <nav className="p-6 flex justify-between">
        <h1 className="text-2xl font-bold">
          SkillBridge
        </h1>

        <div className="space-x-6">
          <span>Careers</span>
          <span>Roadmaps</span>
          <span>Connect</span>
        </div>
      </nav>


      <section className="flex flex-col items-center justify-center h-[80vh] text-center">

        <h2 className="text-6xl font-bold">
          Bridge Your Skills <br/>
          To Your Dream Career
        </h2>


        <p className="mt-6 text-xl text-gray-300">
          Explore careers, build skills, and prepare for your future.
        </p>


        <button className="mt-10 bg-blue-600 px-8 py-4 rounded-xl">
          Explore Careers
        </button>

      </section>

    </main>
  );
}