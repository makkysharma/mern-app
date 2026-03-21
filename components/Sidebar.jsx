"use client";

import React, { useState, useEffect } from 'react';
import SidebarCard from './SidebarCard';

const Sidebar = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`);
        const data = await res.json();
        if (data.data) {
          setPrompts(data.data); // update state with latest prompts
        }
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  return (
    <div className='fixed top-0 left-0 h-full w-64 p-4 overflow-y-auto border-r border-slate-700/60 bg-slate-900 gap-1.5'>
      <h2 className='text-white font-bold text-lg mb-4'>Recent Prompts</h2>

      {loading && <p className='text-slate-400'>Loading...</p>}

      {!loading && prompts.length === 0 && (
        <p className='text-slate-400'>No prompts found.</p>
      )}

      {prompts.map((item) => (
        <SidebarCard
          key={item._id}
          title={item.prompt}
          description={item.response}
        />
      ))}
    </div>
  );
};

export default Sidebar;