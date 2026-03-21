import React from 'react';

const SidebarCard = ({ title, description, setPrompt, setMessages }) => {
  return (
    <div className="rounded-2xl p-3 px-3 bg-slate-800/70 border border-slate-700/60 shadow-2xl shadow-black/40 backdrop-blur-sm cursor-pointer mb-1.5"
    onClick={() => {
      setPrompt(title);

      setMessages([
        { type: "user", text: title },
        { type: "ai", text: description },
      ]);
    }}
    >
      <h3 className="text-sm font-semibold mb-1 text-slate-300 truncate">{title}</h3>
      <p className="text-slate-400 text-xs truncate">{description}</p>
    </div>
  );
};

export default SidebarCard;