import React from "react";

const industries = [
  {
    title: "Finance & Banking",
    desc: "Detect targeted attacks, phishing campaigns, and credential leaks specific to the financial sector. Ensure compliance with regulations like PCI DSS and GLBA through sector-focused threat intelligence.",
    compliance: ["PCI DSS", "GLBA", "SOX"],
    badge: "/finance-badge.svg",
  },
  {
    title: "Healthcare",
    desc: "Monitor for ransomware, PHI breaches, and medical device vulnerabilities. Satisfy HIPAA and HITECH requirements and protect patient trust with early detection and response.",
    compliance: ["HIPAA", "HITECH", "GDPR"],
    badge: "/healthcare-badge.svg",
  },
  {
    title: "Government",
    desc: "Surface espionage campaigns, APTs, and nation-state threats targeting government agencies. Aid in maintaining ISO 27001 and NIST CSF compliance through actionable insights.",
    compliance: ["NIST CSF", "FISMA", "ISO 27001"],
    badge: "/gov-badge.svg",
  },
  {
    title: "Retail & eCommerce",
    desc: "Prevent card theft, web skimming, and fraud attempts. Easily report and mitigate threats for PCI DSS and GDPR compliance.",
    compliance: ["PCI DSS", "GDPR"],
    badge: "/retail-badge.svg",
  },
];

export default function IndustrySolutions() {
  return (
    <section
      id="industry-solutions"
      className="py-20 px-6 max-w-7xl mx-auto  rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-[#00F078] mb-12 text-center">
        Sector-Specific Threat Intelligence
      </h2>
      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-14">
        ThreatIntel Pro delivers tailored intelligence and compliance peace of
        mind for every vertical. See how key industries benefit from our
        actionable insights and case-driven solutions.
      </p>

      {/* INDUSTRY GRID */}
      <div className="grid gap-10 md:grid-cols-2">
        {industries.map(({ title, desc, compliance, badge }, idx) => (
          <div
            key={title}
            className="bg-[#161B22] rounded-2xl p-8 shadow flex items-start gap-6 border border-[#232b36] hover:-translate-y-1 transition-transform duration-200"
          >
            <img
              src={badge}
              alt={`${title} sector`}
              className="w-14 h-14 rounded-full bg-[#232b36] p-2 border border-[#00F078]/20"
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 mb-3">{desc}</p>
              <div className="flex items-center gap-2 flex-wrap mt-2 mb-4">
                {compliance.map((item) => (
                  <span
                    key={item}
                    className="bg-[#00F078]/20 text-[#00F078] px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide border border-[#00F078]/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* Optional: Add industry-specific case study teaser */}
              <span className="text-[#00F078] text-sm font-medium underline cursor-pointer hover:opacity-80">
                View {title.split(" ")[0]} Case Study &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Case studies/recognition bar (optional) */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
        {/* Mockup customer logo/case badges - replace with actual logos if available */}
        <img
          src="/case-customer1.svg"
          alt="Customer 1"
          className="h-10 grayscale opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/case-customer2.svg"
          alt="Customer 2"
          className="h-10 grayscale opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/case-recognition1.svg"
          alt="Award"
          className="h-10 grayscale opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/case-recognition2.svg"
          alt="Certification"
          className="h-10 grayscale opacity-80 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
}
