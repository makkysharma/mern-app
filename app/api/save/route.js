import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Prompt from "@/models/Prompt";

export async function POST(req) {
  try {
    console.log("API HIT");

    await connectDB();

    const body = await req.json();
    console.log("BODY:", body);

    const { prompt, response } = body;

    if (!prompt || !response) {
      return NextResponse.json(
        { error: "Missing prompt or response" },
        { status: 400 }
      );
    }

    const savedData = await Prompt.create({ prompt, response });

    return NextResponse.json({
      success: true,
      data: savedData,
    });
  } catch (error) {
    console.error("ERROR 👉", error); // THIS WILL SHOW REAL ISSUE

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}