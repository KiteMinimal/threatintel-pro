import React from "react";

export default function APTGroupIntelligence() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center py-20 px-4 shadow-lg">
      {/* Full bg image */}
      <img
        src="/bgImage.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25"
        draggable={false}
      />

      {/* Creative glassmorphism overlay for text clarity */}
      <div className="relative z-10 bg-white backdrop-blur-md  p-8 max-w-2xl mx-auto shadow-xl border border-[#00F078]/10">
        <div className="relative z-10 bg-[#101822cc] backdrop-blur-md  p-10 max-w-2xl mx-auto shadow-xl border border-[#00F078]/10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#00F078] to-white bg-clip-text text-transparent drop-shadow-[0_0_18px_#00F07890] mb-5">
            APT Group <span className="text-white">Intelligence Hub</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-medium mb-7 drop-shadow">
            <span className="text-[#00F078] font-bold">
              Know your adversaries.
            </span>{" "}
            <br />
            Track APT groups targeting your industry with{" "}
            <span className="inline-block bg-[#00F07822] rounded px-2 text-white">
              detailed profiles
            </span>
            , campaign analysis, and{" "}
            <span className="text-[#00F078]">predictive intelligence</span> on
            future activities.
          </p>
          {/* Neon-glow icon */}
          <div className="flex justify-start">
            <div className="w-16 h-16 rounded-full bg-[#00F078] flex items-center justify-center shadow-2xl drop-shadow-[0_0_32px_#00F07880] animate-pulse-slow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 44"
                className="w-10 h-10 text-[#111]"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="20"
                  className="stroke-[#111] stroke-2"
                  fill="none"
                />
                <path
                  d="M17 22a5 5 0 1 0 10 0 5 5 0 1 0-10 0z"
                  className="stroke-[#111] stroke-2"
                  fill="none"
                />
                <path
                  d="M27 32l9-3m-9-13l9 3m-16 13l-9-3m9-13l-9 3"
                  className="stroke-[#111] stroke-2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: neon accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-40 bg-[#00f078]/30 rounded-r-lg blur-xl opacity-60 pointer-events-none z-10 hidden md:block" />
    </section>
  );
}
