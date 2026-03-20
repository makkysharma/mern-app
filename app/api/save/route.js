export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Prompt from "@/models/Prompt";

export async function POST(req) {
  try {
    await connectDB();

    const { prompt, response } = await req.json();

    const savedData = await Prompt.create({ prompt, response });

    return NextResponse.json({
      success: true,
      data: savedData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save data" },
      { status: 500 }
    );
  }
}