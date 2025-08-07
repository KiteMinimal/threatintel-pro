// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20
                 bg-gradient-to-r from-[#101822] to-[#151c26] rounded-b-3xl shadow-xl"
    >
      {/* Headline */}
      <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl">
        Stay Ahead of Cyber Threats with <span className="text-[#00F078]">ThreatIntel Pro</span>
      </h1>

      {/* Subheadline / Value Proposition */}
      <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mb-10">
        Advanced Threat Intelligence at Your Fingertips — From IOC Analysis to APT Tracking.
      </p>

      <p className="text-gray-400 max-w-3xl mb-12 text-lg md:text-xl">
        Empower your security team with comprehensive threat intelligence that
        transforms raw indicators into actionable insights, helping you detect,
        analyze, and respond to cyber threats before they impact your organization.
      </p>

      {/* CTA Button */}
      <button
        className="bg-[#00F078] text-[#101822] px-8 py-4 rounded-full font-bold text-lg shadow-lg
                   hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-[#00F078]/50"
      >
        Request a Demo
      </button>

      {/* Optional: Hero Image or Video Placeholder */}
      {/* Replace with actual image/video as needed */}
      <div className="mt-16 w-full max-w-5xl">
        <img
          src="/hero-mockup.png" // Update this path to your actual hero image/video poster
          alt="ThreatIntel Pro platform interface"
          className="w-full rounded-xl shadow-2xl border border-[#00F078]/50"
        />
      </div>

      {/* Optional: Trust Indicators below Hero */}
      {/* Example logos / badges placeholder */}
      <div className="flex flex-wrap justify-center items-center mt-12 gap-10 max-w-4xl mx-auto">
        {/* Replace these with actual logos or certifications */}
        <img src="/logo1.svg" alt="Client 1" className="h-12 grayscale opacity-70 hover:opacity-100 transition" />
        <img src="/logo2.svg" alt="Client 2" className="h-12 grayscale opacity-70 hover:opacity-100 transition" />
        <img src="/logo3.svg" alt="Certification 1" className="h-12 grayscale opacity-70 hover:opacity-100 transition" />
        <img src="/logo4.svg" alt="Certification 2" className="h-12 grayscale opacity-70 hover:opacity-100 transition" />
      </div>
    </section>
  );
}
