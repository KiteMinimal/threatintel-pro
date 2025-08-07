// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navbar links excluding Features (since features are on home page)
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Problem Statement", to: "/problem-statement" },
    { label: "Solution Overview", to: "/solution-overview" },
    { label: "Industry Solutions", to: "/industry-solutions" },
    { label: "Social Proof", to: "/social-proof" },
    { label: "Pricing & Plans", to: "/pricing-plans" },
    { label: "Resources", to: "/resources" },
  ];

  return (
    <nav className="bg-[#101822] fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="text-[#00F078] font-extrabold text-2xl tracking-tight hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            ThreatIntel Pro
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#00F078]" : "text-gray-300 hover:text-[#00F078]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-[#00F078] focus:outline-none focus:ring-2 focus:ring-[#00F078] rounded"
            >
              {isOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger menu icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-[#101822] border-t border-[#00F078]/50 shadow-inner">
          <div className="px-6 pt-2 pb-4 space-y-1">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-semibold ${
                    isActive ? "text-[#00F078]" : "text-gray-300 hover:text-[#00F078]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
