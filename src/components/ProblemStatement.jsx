// src/components/ProblemStatement.jsx
import React from "react";

export default function ProblemStatement() {
  return (
    <section
      id="problem-statement"
      className="py-20 px-6 max-w-5xl mx-auto bg-[#121721] rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-[#00F078] mb-8 text-center">
        Current Challenges in Threat Intelligence
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Organizations today face a rapidly evolving threat landscape that demands proactive and effective cybersecurity measures. However, many struggle with the 
        <span className="font-semibold text-white"> high cost and complexity </span> associated with current threat intelligence solutions. 
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Existing platforms often overwhelm security teams with <span className="font-semibold text-white">massive volumes of raw data</span> that require extensive manual analysis. This slows detection and response times, leaving critical gaps vulnerable to exploitation.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Moreover, the <span className="font-semibold text-white">time-sensitive nature</span> of modern cyber threats means delays in understanding and acting on intelligence can have serious consequences, including financial loss and reputational damage.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        There is a compelling need for a streamlined, intelligent platform that not only delivers real-time, actionable insights but also reduces the operational burden on security teams, enabling rapid and confident threat mitigation.
      </p>
    </section>
  );
}
