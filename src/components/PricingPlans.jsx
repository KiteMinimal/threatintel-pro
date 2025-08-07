// src/components/PricingPlans.jsx
import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    frequency: "per month",
    description: "Ideal for small teams and startups.",
    features: [
      "Up to 5 users",
      "Basic threat detection",
      "Email support",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    frequency: "per month",
    description: "Perfect for growing security teams.",
    features: [
      "Up to 25 users",
      "Real-time threat intelligence",
      "Priority email & chat support",
      "All integrations included",
      "Customizable dashboards",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    frequency: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations & SLAs",
      "Advanced analytics & reporting",
      "On-site training & support",
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section
      id="pricing-plans"
      className="py-20 px-6 max-w-7xl mx-auto bg-[#121721] rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-[#00F078] mb-12 text-center">
        Transparent Pricing & Plans
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-center mb-16 text-lg">
        Choose the plan that fits your organization’s needs — scalable, flexible, and transparent pricing to maximize your security ROI.
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {plans.map(({ name, price, frequency, description, features, popular }) => (
          <div
            key={name}
            className={`relative rounded-2xl p-8 shadow-lg border ${
              popular ? "border-[#00F078]" : "border-[#232b36]"
            } bg-[#161B22] flex flex-col`}
          >
            {popular && (
              <div className="absolute top-4 right-4 bg-[#00F078] text-[#101822] font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md tracking-wide">
                Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-400 mb-6">{description}</p>
            <div className="text-white text-4xl font-extrabold mb-1">{price}</div>
            {frequency && (
              <p className="text-[#00F078] font-semibold mb-8">{frequency}</p>
            )}

            <ul className="mb-8 space-y-3 flex-1">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-[#00F078] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto bg-[#00F078] text-[#101822] font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ${
                popular ? "hover:bg-green-500" : "hover:bg-green-600"
              }`}
            >
              {price === "Contact Us" ? "Contact Sales" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
