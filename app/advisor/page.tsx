"use client";

import { useState } from "react";

export default function Advisor() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/career", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-20">
      <h1 className="text-5xl font-bold">
        AI Career Advisor
      </h1>

      <p className="mt-4 text-gray-400">
        Powered by Gemini AI
      </p>

      <textarea
        rows={5}
        className="mt-10 w-full p-4 rounded bg-slate-800 border border-slate-600"
        placeholder="I enjoy coding, maths and solving problems..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="mt-5 bg-blue-600 px-8 py-3 rounded"
      >
        Generate Advice
      </button>

      <div className="mt-10 bg-slate-900 p-8 rounded-xl whitespace-pre-wrap">
        {loading ? "Generating..." : answer}
      </div>
    </main>
  );
}