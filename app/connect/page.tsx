"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Connect() {

  const [text, setText] = useState("");

  async function submit() {

    const { error } = await supabase
      .from("career_suggestions")
      .insert({
        question: text,
      });

    if (error) {
      alert(error.message);
    } else {
      alert("Suggestion Added Successfully!");
      setText("");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-10">

      <Link href="/">
        <button className="mb-8 text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </button>
      </Link>

      <h1 className="text-5xl font-bold mb-4">
        Career Connect
      </h1>

      <p className="text-slate-300 mb-10">
        Share career opportunities, resources and suggestions.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-3xl">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter career suggestion..."
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 text-white"
        />

        <button
          onClick={submit}
          className="mt-5 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
        >
          Submit Suggestion
        </button>

      </div>

    </main>
  );
}