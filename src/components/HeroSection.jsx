// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Image before Hero Section */}
      
      <section
        id="hero"
        className=" min-h-screen flex flex-col justify-center items-center text-center px-6 py-20
                 bg-gradient-to-r from-[#101822] to-[#151c26] rounded-b-3xl shadow-xl pt-[96px]"
      >
        <img
        src="/cyber-security-concept-digital-art.jpg" 
        alt="Intro Banner"
        className="w-full object-center object-cover  h-[36vh] md:h-[44vh] lg:h-[52vh] max-h-[380px] mx-auto mb-16"
      />

        {/* Headline */}
        <h1 className="text-white font-normal text-5xl mb-10 tracking-tight max-w-8xl">
          Stay Ahead of 
          <br />
          
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Cyber Threats with{" "}
            {/* <br /> */}
            ThreatIntel Pro</span>
        </h1>

        {/* Subheadline / Value Proposition */}
        <p className="text-white font-semibold font-sans text-xl max-w-3xl mb-10">
          Advanced Threat Intelligence at Your Fingertips — From IOC Analysis to
          APT Tracking.
        </p>

        <p className="text-white  font-thin font-sans max-w-3xl mb-12 text-lg md:text-xl">
          Empower your security team with comprehensive threat intelligence that
          transforms raw indicators into actionable insights, helping you
          detect, analyze, and respond to cyber threats before they impact your
          organization.
        </p>

        {/* CTA Button */}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow px-2 py-1 mb-8">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-2 rounded-full outline-none text-black bg-transparent"
  />
  <button
    className="bg-[#00F078] text-[#101822] px-6 py-2 rounded-full font-bold text-base shadow hover:scale-105 transition-transform duration-300 ml-2"
  >
    Request a Demo
  </button>
</div>

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
          <img
            src="/logo1.svg"
            alt="Client 1"
            className="h-12 grayscale opacity-70 hover:opacity-100 transition"
          />
          <img
            src="/logo2.svg"
            alt="Client 2"
            className="h-12 grayscale opacity-70 hover:opacity-100 transition"
          />
          <img
            src="/logo3.svg"
            alt="Certification 1"
            className="h-12 grayscale opacity-70 hover:opacity-100 transition"
          />
          <img
            src="/logo4.svg"
            alt="Certification 2"
            className="h-12 grayscale opacity-70 hover:opacity-100 transition"
          />
        </div>
      </section>
    </>
  );
}
