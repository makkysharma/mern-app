"use client";

import { Bot } from "lucide-react";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="fixed top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-violet-600 opacity-10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-5 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="text-center text-white space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 shadow-lg shadow-violet-900/40 mb-2">
          <Bot className="w-7 h-7 text-violet-400" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          AI Flow App
        </h1>
        <p className="text-sm text-slate-400 font-medium">
          Type something and let the magic happen
        </p>
      </div>

      {/* Card */}
      <Card />


      {/* Footer */}
      <Footer />

    </div>
  );
}