import React from "react";

export default function IOCANALYSIS() {
  return (
    <section className="relative rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center gap-10 overflow-hidden bg-[#141517b8] border border-[#232b36]">
      {/* Content Section */}
      <div className="flex-1">
        {/* Neon gradient heading with glow */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00F078]  mb-5 leading-tight">
          Deep Analysis & Enrichment of IOCs
        </h2>

        {/* Paragraph with highlighted key phrase */}
        <p className="text-gray-300 text-lg font-medium max-w-2xl mb-8 leading-relaxed">
          Transform suspicious indicators into{" "}
          <span className="text-[#00F078] font-semibold">
            actionable intelligence
          </span>{" "}
          in seconds. Our IOC reconnaissance engine provides comprehensive
          analysis with
          <span className="text-[#00F078] font-semibold">
            {" "}
            historical context
          </span>{" "}
          and
          <span className="text-[#00F078] font-semibold">
            {" "}
            threat actor attribution
          </span>
          .
        </p>

        {/* Neon glowing icon with slow pulse animation */}
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00F078] flex items-center justify-center text-5xl shadow-2xl drop-shadow-[0_0_40px_#00F078a0] animate-pulse-slow mx-auto md:mx-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 44 44"
            className="w-12 h-12 text-[#111]"
          >
            <circle
              cx="22"
              cy="22"
              r="20"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
            <path
              d="M14 30l16-16M14 16h16v14"
              className="stroke-[#111] stroke-2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex-shrink-0 w-full md:w-[520px] md:h-[360px] rounded-xl overflow-hidden shadow-xl border border-[#00F078]/40">
        <video
          src="/Video/IOCAnalysis.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Neon vertical accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-36 bg-[#00F078]/40 rounded-r-lg blur-xl opacity-80 pointer-events-none hidden md:block" />
    </section>
  );
}
