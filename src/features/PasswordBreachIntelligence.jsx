// src/features/PasswordBreachIntelligence.jsx
import React from "react";

export default function PasswordBreachIntelligence() {
  return (
    <section className="rounded-2xl bg-[#161B22] p-10 shadow-lg border border-[#232b36] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
      {/* Accent Icon with Glow */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880]">
        {/* Optional SVG icon for 'password' or 'security' */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-10 h-10 text-[#111]">
          <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
          <rect x="14" y="20" width="16" height="10" rx="3" className="stroke-[#111] stroke-2" fill="none" />
          <circle cx="22" cy="25" r="2" className="stroke-[#111] stroke-2" fill="none" />
        </svg>
      </div>
      {/* Feature Content */}
      <div>
        <span className="block uppercase text-[#00F078] font-bold mb-2 tracking-widest">Feature 6</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          Password Breach Intelligence
        </h2>
        <p className="text-gray-300 mb-4 font-medium text-lg max-w-2xl">
          Protect your organization's digital identity. Monitor for exposed credentials across the web and take proactive action before accounts are compromised.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1 text-base">
          <li><span className="font-semibold text-white">Domain monitoring:</span> Scan corporate domains for exposed credentials</li>
          <li><span className="font-semibold text-white">Executive monitoring:</span> Track breaches for execs and VIPs</li>
          <li><span className="font-semibold text-white">Breach timeline:</span> Analyze breach events and assess impact</li>
          <li><span className="font-semibold text-white">Password policy intel:</span> Get actionable policy recommendations</li>
          <li><span className="font-semibold text-white">Identity integration:</span> Seamless connection to identity management systems</li>
        </ul>
      </div>
      {/* Neon accent bar for effect */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />
    </section>
  );
}
