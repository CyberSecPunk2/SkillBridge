"use client";

import Link from "next/link";
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-10">

      <Link href="/">
        <button className="mb-8 text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </button>
      </Link>

      <h1 className="text-5xl font-bold mb-4">
        AI Career Advisor
      </h1>

      <p className="text-slate-300 mb-10">
        Powered by Google Gemini AI.
      </p>

      <div className="max-w-4xl">

        <textarea
          rows={5}
          placeholder="Describe your interests, strengths and career goals..."
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600"
        />

        <button
          onClick={generate}
          className="mt-5 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
        >
          Generate Advice
        </button>

        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-8 whitespace-pre-wrap">
          {loading ? "Generating AI Career Guidance..." : answer}
        </div>

      </div>

    </main>
  );
}