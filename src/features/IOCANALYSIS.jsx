// src/features/IOCANALYSIS.jsx
import React from "react";

export default function IOCANALYSIS() {
  return (
    <section className="rounded-2xl bg-[#161B22] p-10 shadow-lg border border-[#232b36] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
      {/* Accent Icon with Glow */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880]">
        {/* Optional: Replace with your own SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-10 h-10 text-[#111]">
          <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
          <path d="M14 30l16-16M14 16h16v14" className="stroke-[#111] stroke-2" fill="none" />
        </svg>
      </div>
      {/* Feature Content */}
      <div>
        <span className="block uppercase text-[#00F078] font-bold mb-2 tracking-widest">Feature 1</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          Deep Analysis & Enrichment of IOCs
        </h2>
        <p className="text-gray-300 mb-4 font-medium text-lg max-w-2xl">
          Transform suspicious indicators into actionable intelligence in seconds. Our IOC reconnaissance engine provides comprehensive analysis with historical context and threat actor attribution.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1 text-base">
          <li><span className="font-semibold text-white">Instant:</span> Analyze IPs, domains, file hashes, URLs</li>
          <li><span className="font-semibold text-white">History:</span> Reputation scoring & past analysis</li>
          <li><span className="font-semibold text-white">Mapping:</span> Relationship graphs between indicators</li>
          <li><span className="font-semibold text-white">Attribution:</span> Threat actor analysis with confidence scoring</li>
          <li><span className="font-semibold text-white">Flexible Export:</span> STIX, JSON, or CSV formats</li>
        </ul>
      </div>
      {/* Subtle neon effect accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />
    </section>
  );
}

