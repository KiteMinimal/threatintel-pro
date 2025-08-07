import React from "react";

export default function SolutionOverview() {
  return (
    <section
      id="solution-overview"
      className="py-20 px-6 max-w-6xl mx-auto  rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-[#00F078] mb-12 text-center">
        Platform Capabilities & Integration Ecosystem
      </h2>

      {/* Overview Description */}
      <p className="text-gray-300 max-w-4xl mx-auto text-center mb-14 leading-relaxed text-lg">
        ThreatIntel Pro delivers advanced, real-time threat intelligence to
        empower cybersecurity teams with deep insights, automated detection, and
        comprehensive analysis. Our platform seamlessly integrates with your
        existing security infrastructure, enabling smooth workflows for incident
        response, threat hunting, and risk mitigation.
      </p>

      {/* Grid: Capabilities, Integrations, Workflow */}
      <div className="grid gap-14 md:grid-cols-3">
        {/* Capabilities */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Core Capabilities
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
            <li>
              Real-time data collection & enrichment from multiple global
              sources
            </li>
            <li>
              Automated IOC analysis and attribution with confidence scoring
            </li>
            <li>Deep forensic and behavioral threat analysis tools</li>
            <li>Customizable dashboards for actionable insights</li>
            <li>Advanced anomaly detection & alerting system</li>
          </ul>
        </div>

        {/* Integration Ecosystem */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Integration Ecosystem
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
            <li>Seamless connection with SIEM and SOAR platforms</li>
            <li>
              APIs for easy integration with firewalls, endpoint protection, and
              ticketing tools
            </li>
            <li>Support for STIX, TAXII, JSON, and CSV data formats</li>
            <li>Cloud-native architecture for scalability and reliability</li>
            <li>
              Flexible deployment across hybrid and multi-cloud environments
            </li>
          </ul>
        </div>

        {/* User Workflow */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            User Workflow Demonstration
          </h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 text-base">
            <li>
              <span className="font-semibold text-white">Collect</span> - Gather
              intelligence from open source, dark web, and internal sensors.
            </li>
            <li>
              <span className="font-semibold text-white">Analyze</span> -
              Correlate and enrich raw data with context and threat actor
              profiles.
            </li>
            <li>
              <span className="font-semibold text-white">Respond</span> -
              Deliver prioritized alerts and actionable insights for rapid
              mitigation.
            </li>
          </ol>
        </div>
      </div>

      {/* Optional Platform UI mockup or workflow illustration */}
      <div className="mt-16 flex justify-center">
        <img
          src="/solution-workflow.png" // Replace with your actual image/video
          alt="ThreatIntel Pro platform workflow demonstration"
          className="rounded-xl shadow-2xl border border-[#00F078]/50 max-w-full h-auto"
        />
      </div>
    </section>
  );
}
