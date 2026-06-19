import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Suggest suitable technology careers and provide a short roadmap for: ${prompt}`,
    });

    return Response.json({
      answer: response.text,
    });
  } catch (error) {
    return Response.json(
      { answer: "Error generating career advice." },
      { status: 500 }
    );
  }
}