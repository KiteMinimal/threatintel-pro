import React from "react";
import Iocanalysis from "./features/IOCANALYSIS";
import MaliciousIOCDetection from "./features/MaliciousIOCDetection";


export default function App() {
  return (
    <div className="bg-black min-h-screen font-montserrat">
      {/* Hero section */}
      <section className="text-center px-6 py-24 bg-gradient-to-r from-[#101822] to-[#151c26] rounded-b-3xl shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Stay Ahead of Cyber Threats with <span className="text-[#00F078]">ThreatIntel Pro</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Advanced Threat Intelligence at Your Fingertips — From IOC Analysis to APT Tracking.
        </p>
        <button className="bg-[#00F078] text-[#101822] font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition">
          Request a Demo
        </button>
      </section>

      {/* Each feature as a separate component */}
      <main className="max-w-7xl mx-auto px-4 py-16 grid gap-10">
        <Iocanalysis />
        <MaliciousIOCDetection />
      </main>
    </div>
  );
}
