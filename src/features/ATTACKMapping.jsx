import React from "react";

export default function ATTACKMapping() {
  return (
    <section className="relative rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-12 overflow-hidden bg-[#161B22] border border-[#232b36]">
      {/* Image Section on the right with glowing border and slide-in */}
      <div className="flex-shrink-0 w-full md:w-[480px] md:h-[320px] rounded-lg overflow-hidden shadow-[0_0_25px_#00F078aa] border border-[#00F078]/50 transform translate-x-8 opacity-0 animate-slide-in-right">
        <img
          src="/mitreAttack2.webp"
          alt="MitreAttack"
          className="w-full h-full object-fit rounded-lg"
        />
      </div>

      {/* Feature Content */}
      <div className="flex-1 flex flex-col justify-center space-y-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight relative pb-2">
          MITRE ATT&amp;CK Mapping &amp; Analysis
          <span className="absolute bottom-0 left-0 w-20 h-1 rounded-full bg-[#00F078] shadow-[0_0_12px_#00F078aa]" />
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl font-medium leading-relaxed">
          Understand how attackers operate. Our{" "}
          <span className="text-[#00F078] font-semibold">
            MITRE ATT&amp;CK integration
          </span>{" "}
          provides standardized threat classification and helps identify{" "}
          <span className="text-[#00F078] font-semibold">
            gaps in your security posture
          </span>
          .
        </p>

        {/* Accent Icon with scaling glow animation */}
        <div className="w-16 h-16 rounded-full bg-[#00F078] flex items-center justify-center shadow-lg drop-shadow-[0_0_36px_#00F078cc] animate-scale-pulse">
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
            <rect
              x="12"
              y="12"
              width="20"
              height="20"
              rx="4"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
            <path
              d="M12 22h20M22 12v20"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Neon vertical accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-36 bg-[#00F078]/30 rounded-r-lg blur-xl opacity-60 pointer-events-none hidden md:block" />

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease forwards;
        }
        @keyframes scalePulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 18px #00F078cc);
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 28px #00F078dd);
          }
        }
        .animate-scale-pulse {
          animation: scalePulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
