import React from "react";

export default function MaliciousIOCDetection() {
  return (
    <section className="relative rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-10 overflow-hidden bg-[#161B22] border border-[#232b36]">
      {/* Video Section on the right */}
      <div className="flex-shrink-0 w-full md:w-[480px] md:h-[320px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
        <video
          src="/Video/malicious.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Feature Details */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight animate-fade-slide-up">
          Malicious <span className="text-[#00F078]">IOC Detection</span> &
          Validation
        </h2>
        <p className="text-gray-300 font-medium text-lg max-w-2xl animate-fade-slide-up animation-delay-100">
          Stop chasing{" "}
          <span className="text-[#00F078] font-semibold">false positives</span>.
          Our advanced validation engine uses multiple intelligence sources to
          provide
          <span className="text-[#00F078] font-semibold">
            {" "}
            accurate threat assessments
          </span>{" "}
          with <span className="text-[#00F078]">contextual risk scoring</span>.
        </p>

        {/* Accent Icon with Glow and pulse animation */}
        <div className="w-16 h-16 rounded-full bg-[#00F078] flex items-center justify-center text-4xl shadow-2xl drop-shadow-[0_0_32px_#00F07880] animate-pulse-slow">
          {/* Replace with a relevant SVG icon */}
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
              d="M22 12v10m0 0l5-5m-5 5l-5-5"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Subtle neon accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-50 pointer-events-none hidden md:block" />

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
