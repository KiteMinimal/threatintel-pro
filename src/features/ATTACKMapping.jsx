// src/features/ATTACKMapping.jsx
import React from "react";

export default function ATTACKMapping() {
  return (
    <section className="rounded-2xl bg-[#161B22] p-10 shadow-lg border border-[#232b36] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
      {/* Accent Icon with Glow */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880]">
        {/* Optional SVG: MITRE map/grid or network icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-10 h-10 text-[#111]">
          <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
          <rect x="12" y="12" width="20" height="20" rx="4" className="stroke-[#111] stroke-2" fill="none" />
          <path d="M12 22h20M22 12v20" className="stroke-[#111] stroke-2" fill="none" />
        </svg>
      </div>
      {/* Feature Content */}
      <div>
        <span className="block uppercase text-[#00F078] font-bold mb-2 tracking-widest">Feature 4</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          MITRE ATT&amp;CK Mapping &amp; Analysis
        </h2>
        <p className="text-gray-300 mb-4 font-medium text-lg max-w-2xl">
          Understand how attackers operate. Our MITRE ATT&amp;CK integration provides standardized threat classification and helps identify gaps in your security posture.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1 text-base">
          <li><span className="font-semibold text-white">Standardized reporting:</span> Classifies threats with the MITRE ATT&amp;CK framework</li>
          <li><span className="font-semibold text-white">Gap analysis:</span> Reveals weak points in your security controls</li>
          <li><span className="font-semibold text-white">Playbook generation:</span> Creates threat hunting guides instantly</li>
          <li><span className="font-semibold text-white">Compliance:</span> Ready for NIST, ISO 27001, and more</li>
          <li><span className="font-semibold text-white">TTP insights:</span> Analyzes adversary tactics, techniques, procedures</li>
        </ul>
      </div>
      {/* Subtle neon accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />
    </section>
  );
}
