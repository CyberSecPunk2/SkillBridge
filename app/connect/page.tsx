"use client";

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
      alert("Suggestion added successfully!");
      setText("");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-20">
      <h1 className="text-5xl font-bold">Career Connect</h1>

      <p className="mt-5 text-gray-400">
        Powered by Supabase Backend
      </p>

        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter career suggestion..."
        className="mt-10 p-4 rounded bg-slate-800 text-white border border-slate-600 w-full"
        />  

      <button
        onClick={submit}
        className="mt-5 bg-blue-600 px-8 py-3 rounded"
      >
        Submit
      </button>
    </main>
  );
}