// src/features/APTGroupIntelligence.jsx
import React from "react";

export default function APTGroupIntelligence() {
  return (
    <section className="rounded-2xl bg-[#161B22] p-10 shadow-lg border border-[#232b36] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
      {/* Accent Icon with Glow */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880]">
        {/* Optional SVG icon for "APT group" or "analysis"—adjust as needed */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-10 h-10 text-[#111]">
          <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
          <path d="M17 22a5 5 0 1 0 10 0 5 5 0 1 0-10 0z" className="stroke-[#111] stroke-2" fill="none" />
          <path d="M27 32l9-3m-9-13l9 3m-16 13l-9-3m9-13l-9 3" className="stroke-[#111] stroke-2" fill="none" />
        </svg>
      </div>
      {/* Feature Content */}
      <div>
        <span className="block uppercase text-[#00F078] font-bold mb-2 tracking-widest">Feature 5</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          APT Group Intelligence Hub
        </h2>
        <p className="text-gray-300 mb-4 font-medium text-lg max-w-2xl">
          Know your adversaries. Track APT groups targeting your industry with detailed profiles, campaign analysis, and predictive intelligence on future activities.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1 text-base">
          <li><span className="font-semibold text-white">Industry targeting:</span> In-depth analysis of APTs focused on your sector</li>
          <li><span className="font-semibold text-white">Campaign tracking:</span> Visual timelines and evolution of attacks</li>
          <li><span className="font-semibold text-white">TTPs &amp; tools:</span> Map adversary tactics, tools, and infrastructure</li>
          <li><span className="font-semibold text-white">Geopolitical context:</span> Understand motivation and global relevance</li>
          <li><span className="font-semibold text-white">Profiles &amp; reports:</span> Get custom threat actor profiles and actionable reports</li>
        </ul>
      </div>
      {/* Neon accent bar for extra punch */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />
    </section>
  );
}
