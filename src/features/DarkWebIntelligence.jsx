import React from "react";

export default function DarkWebIntelligence() {
  return (
    <section className="relative rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-10 overflow-hidden bg-[#141517b8] border border-[#232b36]">
      {/* Feature Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight animate-fade-slide-up">
          Dark Web <span className="text-[#00F078]">Intelligence</span>
        </h2>
        <p className="text-gray-300 font-medium text-lg max-w-2xl animate-fade-slide-up animation-delay-100">
          See what adversaries are planning{" "}
          <span className="text-[#00F078] font-semibold">
            before they strike
          </span>
          . Our dark web intelligence provides{" "}
          <span className="text-[#00F078] font-semibold">
            early warning of threats
          </span>
          ,
          <span className="text-[#00F078] font-semibold">
            {" "}
            compromised credentials
          </span>
          , and emerging attack campaigns.
        </p>
        {/* Accent Icon with Glow and pulse */}
        <div className="w-16 h-16 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880] animate-pulse-slow">
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
              d="M22 30c-4-3-8-7-8-12 0-4 4-6 8-6s8 2 8 6c0 5-4 9-8 12z"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Image Section on the right with hover scale */}
      <div className="flex-shrink-0 w-full md:w-[480px] md:h-[320px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img
          src="/darkWeb.png"
          alt="DarkWeb"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Neon vertical accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.5s ease forwards;
          opacity: 0;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-pulse-slow {
          animation: pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
