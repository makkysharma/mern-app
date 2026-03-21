"use client";

import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [prompts, setPrompts] = useState([]);
  const [messages, setMessages] = useState([]);


useEffect(() => {
  const fetchPrompts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`);
      const data = await res.json();
      if (data.data) {
        setPrompts(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    }
  };

  fetchPrompts();
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center gap-8 p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden w-full">

      <Sidebar 
        prompts={prompts}
        setPrompt={setPrompt}
        setMessages={setMessages}
      />
      <div className="text-center min-w-96">
        {/* Card */}
        <Card 
          prompt={prompt}
          setPrompt={setPrompt}
          setPrompts={setPrompts}
          messages={messages}
          setMessages={setMessages}
        />

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}