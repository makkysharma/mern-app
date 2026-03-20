export const runtime = "nodejs";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    const state = mongoose.connection.readyState;

    let status = "unknown";
    if (state === 1) status = "connected";
    else if (state === 0) status = "disconnected";
    else if (state === 2) status = "connecting";
    else if (state === 3) status = "disconnecting";

    return NextResponse.json({
      dbState: state,
      status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}