export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getAIResponse } from "@/lib/openrouter";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const response = await getAIResponse(prompt);

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch AI response" },
      { status: 500 }
    );
  }
}