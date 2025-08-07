import React from "react";

export default function PasswordBreachIntelligence() {
  return (
    <section className="relative min-h-[450px] md:min-h-[530px]  rounded-2xl shadow-lg overflow-hidden flex items-center py-16 px-4">
      {/* Full SVG/JPG background */}
      <img
        src="/svg/YourPassword123.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-contain z-0"
        draggable={false}
      />

      {/* Left-side glass overlay with creative, eye-catching styling */}
      <div className="relative z-10 md:ml-12 p-10 md:max-w-xl w-full  ">
        {/* Neon-glow icon */}
        <div className="mb-7">
          <div className="w-16 h-16 rounded-full bg-[#00F078] flex items-center justify-center shadow-2xl drop-shadow-[0_0_32px_#00F07880] animate-pulse-slow">
            {/* SVG icon for password/security */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="w-9 h-9 text-[#111]">
              <circle cx="22" cy="22" r="20" className="stroke-[#111] stroke-2" fill="none" />
              <rect x="14" y="20" width="16" height="10" rx="3" className="stroke-[#111] stroke-2" fill="none" />
              <circle cx="22" cy="25" r="2" className="stroke-[#111] stroke-2" fill="none" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#00F078] via-white to-[#00F078] bg-clip-text text-transparent drop-shadow-[0_0_18px_#00F07890] mb-5">
          Password Breach Intelligence
        </h2>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-4 drop-shadow">
          <span className="text-[#00F078]">Protect your organization's digital identity.</span>
          <br />
          Monitor for <span className="px-1 rounded bg-[#00F07822] text-white">exposed credentials</span> across the surface, deep, and dark web, and take
          action <span className="font-semibold text-[#00F078]">before</span> attackers compromise your critical accounts.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="bg-[#00F07830] text-[#00F078] px-3 py-1 rounded-full font-light text-xs shadow">Real-Time Alerts</span>
          <span className="bg-[#00F07830] text-[#00F078] px-3 py-1 rounded-full font-light text-xs shadow">Dark Web Monitoring</span>
          <span className="bg-[#00F07830] text-[#00F078] px-3 py-1 rounded-full font-light text-xs shadow">Instant Remediation</span>
        </div>
      </div>
      {/* Optional neon accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-40 bg-[#00F078]/40 rounded-r-lg blur-xl opacity-70 pointer-events-none z-10 hidden md:block" />
    </section>
  );
}
