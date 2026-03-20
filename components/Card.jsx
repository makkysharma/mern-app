import React from 'react'
import { useState } from "react";
import { Sparkles, Loader2, ClipboardType, MessageSquare, Database } from "lucide-react";
import { askAI, savePrompt } from "@/lib/api";

const Card = () => {
      const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    try {
      setLoading(true);
      const res = await getAIResponse(prompt);
      setResponse(res.response);
    } catch (err) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {};
  return (
    <>
          <div className="w-full max-w-lg flex flex-col gap-5 rounded-2xl p-6 bg-slate-800/70 border border-slate-700/60 shadow-2xl shadow-black/40 backdrop-blur-sm">

        {/* Prompt Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <ClipboardType className="w-3.5 h-3.5" />
            Your Prompt
          </label>
          <textarea
            className="w-full p-4 rounded-xl resize-none bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/50 transition-all duration-200 hover:border-slate-600"
            rows={4}
            placeholder="Ask me anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* Run Button */}
        <div className="flex justify-end">
          <button
            onClick={handleRun}
            disabled={loading || !prompt.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-violet-600 hover:bg-violet-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-900/40 hover:shadow-violet-800/50 transition-all duration-150"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Run Flow
              </>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/60" />

        {/* Response */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <MessageSquare className="w-3.5 h-3.5" />
            Response
          </label>
          <div
            className={`w-full p-4 rounded-xl min-h-[110px] text-sm border transition-all duration-200 ${
              response
                ? "bg-slate-900/70 border-slate-700 text-slate-200"
                : "bg-slate-900/40 border-slate-700/50 text-slate-500 italic"
            }`}
          >
            {response || "AI response will appear here..."}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={!response}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-slate-700 hover:bg-slate-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-600/50 hover:border-slate-500/60 shadow-md transition-all duration-150"
          >
            <Database className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>
      
    </>
  )
}

export default Card
