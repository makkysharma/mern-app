export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Prompt from "@/models/Prompt";

export async function GET(req) {
  try {
    // Connecting to DB
    await connectDB();

    // Fetching latest 15 prompts sorted by creation time
    const latestPrompts = await Prompt.find({})
      .sort({ createdAt: -1 }) // descending order
      .limit(15);

    return NextResponse.json({ data: latestPrompts });
  } catch (error) {
    console.error("Failed to fetch prompts:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest prompts" },
      { status: 500 }
    );
  }
}