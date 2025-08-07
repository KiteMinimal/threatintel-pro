import React from "react";

export default function NeonGreenFooter() {
  return (
    <footer className=" text-white border shadow-[0_0_25px_#00F078aa] py-12 px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left section: About or tagline */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-bold mb-3 tracking-wide drop-shadow-lg text-[#5b9b7b]">
            Stay Cyber Resilient
          </h2>
          <p className="text-sm tracking-wide opacity-90">
            Empower your security journey with actionable insights and advanced
            training.
          </p>
        </div>

        {/* Center section: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8">
          <ul className="flex flex-col font-mono">
            <li>
              <a
                href="#"
                className="text-lg font-semibold hover:text-[#00ca65] transition-shadow duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-semibold hover:text-[#00ca65] transition-shadow duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-semibold hover:text-[#00ca65] transition-shadow duration-300"
              >
                Training Modules
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#"
                className="text-lg font-semibold hover:text-[#00ca65] transition-shadow duration-300"
              >
                Insights
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#"
                className="text-lg font-semibold hover:text-[#00ca65] transition-shadow duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right section: Contact & Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="text-sm opacity-90">Contact us:</div>
          <a
            href="mailto:support@cyberresilience.com"
            className="underline hover:text-[#00ca65] transition-colors"
          >
            support@cyberresilience.com
          </a>
          <div className="flex gap-6 mt-2">
            {/* Sample social icons with neon glow effect */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-2xl relative text-black hover:text-white transition-colors"
              style={{ textShadow: "0 0 10px #39FF14" }}
            >
              &#x1F426;
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-2xl relative text-black hover:text-white transition-colors"
              style={{ textShadow: "0 0 10px #39FF14" }}
            >
              &#128100;
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-2xl relative text-black hover:text-white transition-colors"
              style={{ textShadow: "0 0 10px #39FF14" }}
            >
              &#x1F4F1;
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border with subtle neon glow */}
      <div
        className="mt-12 border-t-2 border-[#39FF14] opacity-30"
        style={{ filter: "drop-shadow(0 0 5px #39FF14)" }}
      />
    </footer>
  );
}
