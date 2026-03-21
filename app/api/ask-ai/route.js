export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getAIResponse } from "@/lib/openrouter";
import { rateLimiter } from "@/lib/rateLimiter";

export async function POST(req) {
  try {

    const ip = req.headers.get("x-forwarded-for") || "anonymous";

    // Rate limitimer
    const allowed = rateLimiter(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests (5/min). Try again later. " },
        { status: 429 }
      );
    }


    const { prompt } = await req.json();
    const response = await getAIResponse(prompt);

    return NextResponse.json({ response });
  } catch (error) {
  console.error("AI ERROR:", error);

  return NextResponse.json(
    { error: error.message || "Failed to fetch AI response" },
    { status: 500 }
  );
}
}