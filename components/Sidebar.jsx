"use client";

import React from 'react';
import SidebarCard from './SidebarCard';
import { Plus } from 'lucide-react';

const Sidebar = ({ prompts, setPrompt, setMessages }) => {

  return (
    <div className='fixed top-0 left-0 h-full w-64 p-4 overflow-y-auto border-r border-slate-700/60 bg-slate-900 gap-1.5'>
      
      <div className="flex justify-end">
        <button
          className="inline-flex w-full justify-center my-6 items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-violet-600 hover:bg-violet-500 active:scale-95 shadow-lg cursor-pointer"
          onClick={() => {
            setPrompt("");
            setMessages([]);
          }}
        >
          <Plus className="w-4 h-4" />
          New chat
        </button>
      </div>

      <h2 className='text-white font-bold text-sm mb-1'>Recent chats</h2>

      {prompts.length === 0 && (
        <p className='text-slate-400'>No prompts found.</p>
      )}

      {prompts.map((item) => (
        <SidebarCard
          key={item._id}
          title={item.prompt}
          description={item.response}
          setPrompt={setPrompt}
          setMessages={setMessages}
        />
      ))}
    </div>
  );
};

export default Sidebar;