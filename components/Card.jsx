import React, { useState } from "react";
import { Sparkles, Loader2, Database } from "lucide-react";
import { askAI, savePrompt } from "@/lib/api";

const Card = ({ prompt, setPrompt, setPrompts, messages, setMessages }) => {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleRun = async () => {
    if (!prompt.trim()) return;

    const userMessage = { type: "user", text: prompt };

    setMessages([userMessage]);
    setPrompt("");

    try {
      setLoading(true);

      const res = await askAI(prompt);

      const aiMessage = { type: "ai", text: res.response };

      setMessages([userMessage, aiMessage]);
    }catch (err) {
  console.error(err);

  setMessages([
    userMessage,
    {
      type: "error",
      text: err.message, // Showing response
    },
  ]);
} finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true)
      const last = messages[messages.length - 1];
      const prev = messages[messages.length - 2];

      const saved = await savePrompt({
        prompt: prev?.text || "",
        response: last?.text || "",
      });

      setPrompts((prevPrompts) => [saved.data, ...prevPrompts]);
    } catch (err) {
      console.error("Save failed");
    } finally{
      setSaving(false)
    }
  };

  return (
    <div className="w-2xl flex flex-col rounded-2xl bg-slate-800/70 border border-slate-700/60 shadow-2xl shadow-black/40 backdrop-blur-sm h-[90vh] ml-[320px]">

      {/* Chat Area here*/}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar">
        {messages.length === 0 && (
          <div className="text-slate-500 italic text-sm">
            Start conversation...
          </div>
        )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-[70%] text-left px-4 py-2 rounded-xl text-sm border ${
            msg.type === "user"
              ? "ml-auto bg-violet-600 text-white border-violet-500"
              : msg.type === "error"
              ? "mr-auto bg-red-900/40 border-red-700 text-red-300"
              : "mr-auto bg-slate-900/70 border-slate-700 text-slate-200"
          }`}
        >
          {msg.text}
        </div>
      ))}

        {loading && (
          <div className="mr-auto flex justify-start items-center gap-2 text-slate-400 text-sm text-left">
            <Loader2 className="w-4 h-4 animate-spin" />
            Thinking...
          </div>
        )}
      </div>

      {/* Input box here*/}
      <div className="p-4 border-t border-slate-700/60 flex flex-col gap-3">
        <textarea
          className="w-full p-4 rounded-xl resize-none bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60"
          rows={2}
          placeholder="Ask me anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            disabled={messages.length < 2}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-slate-700 cursor-pointer disabled:opacity-40"
          >
            <Database className="w-4 h-4" />
            {saving?"Saving":"Save"}
          </button>

          <button
            onClick={handleRun}
            disabled={loading || !prompt.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-violet-600 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Send
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;