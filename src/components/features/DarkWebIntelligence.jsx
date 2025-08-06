// src/features/DarkWebIntelligence.jsx
import React from "react";

export default function DarkWebIntelligence() {
  return (
    <section className="rounded-2xl bg-[#161B22] p-10 shadow-lg border border-[#232b36] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
      {/* Accent Icon with Glow */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880]">
        {/* Optional SVG icon to represent 'dark web' or 'monitoring' */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-10 h-10 text-[#111]">
          <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
          <path d="M22 30c-4-3-8-7-8-12 0-4 4-6 8-6s8 2 8 6c0 5-4 9-8 12z" className="stroke-[#111] stroke-2" fill="none" />
        </svg>
      </div>
      {/* Feature Content */}
      <div>
        <span className="block uppercase text-[#00F078] font-bold mb-2 tracking-widest">Feature 3</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          Dark Web Intelligence
        </h2>
        <p className="text-gray-300 mb-4 font-medium text-lg max-w-2xl">
          See what adversaries are planning before they strike. Our dark web intelligence provides early warning of threats, compromised credentials, and emerging attack campaigns.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1 text-base">
          <li><span className="font-semibold text-white">Early warnings:</span> Spot threats and campaigns as they emerge</li>
          <li><span className="font-semibold text-white">Credential monitoring:</span> Instant alerts for compromised credentials</li>
          <li><span className="font-semibold text-white">Ransomware tracking:</span> Track ransomware groups and leak sites</li>
          <li><span className="font-semibold text-white">Forum surveillance:</span> Deep monitoring of underground forums</li>
          <li><span className="font-semibold text-white">Market intelligence:</span> Insights on cybercriminal marketplace activity</li>
        </ul>
      </div>
      {/* Subtle neon accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />
    </section>
  );
}
