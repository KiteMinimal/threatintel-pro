import React from "react";

const swingAnimationStyle = `
  @keyframes swing {
    0% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(-10deg); }
  }
  @keyframes swingReverse {
    0% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    100% { transform: rotate(10deg); }
  }
  .animate-swing {
    animation: swing 2s infinite ease-in-out;
  }
  .animate-swing-reverse {
    animation: swingReverse 2s infinite ease-in-out;
  }
`;

export default function NeonGreenUI() {
  return (
    <>
      {/* Inject animation styles */}
      <style>{swingAnimationStyle}</style>

      <div className="relative flex flex-col items-center justify-center w-full max-w-10xl mx-auto my-8 px-6 h-[450px] bg-[#00f078d4] rounded-3xl text-center">
        
        {/* Left swinging thread hook */}
        <div className="absolute left-10 top-10 animate-swing origin-top">
          <svg width="21" height="100" viewBox="0 0 21 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Example hook shape */}
            <line x1="10" y1="0" x2="10" y2="100" stroke="black" strokeWidth="3" />
          </svg>
        </div>

        {/* Right swinging thread hook */}
        <div className="absolute right-10 top-10 animate-swing-reverse origin-top">
          <svg width="21" height="100" viewBox="0 0 21 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="0" x2="10" y2="100" stroke="black" strokeWidth="3" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-thin mb-4 max-w-[600px] leading-tight font-mono">
          Fast Track your Cyber Resilience Journey through Actionable Insights and Cyber Realm Training Modules
        </h1>

        <div className="flex justify-center items-center gap-4 bg-gray-200 rounded-full px-6 py-3 text-sm shadow-inner mx-auto max-w-[600px]">
          <span className="mx-2 text-xs font-serif">★ Advance Phishing Simulation</span>
          <span className="mx-2 text-xs font-serif">★ Intuitive training modules</span>
          <span className="mx-2 text-xs font-serif">★ Unmatched Insights</span>
        </div>

        <button
          className="mt-10 px-8 py-3 bg-gray-200 rounded-full font-semibold text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-green-200 hover:shadow-lg"
          type="button"
        >
          Get a demo &rarr;
        </button>
      </div>
    </>
  );
}
