// src/components/Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HeroSection from "./HeroSection";
import ProblemStatement from "./ProblemStatement";
import SolutionOverview from "./SolutionOverview";
import IndustrySolutions from "./IndustrySolutions";
import SocialProof from "./SocialProof";
import PricingPlans from "./PricingPlans";
import ResourcesSection from "./ResourcesSection";

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/problem-statement" element={<ProblemStatement />} />
      <Route path="/solution-overview" element={<SolutionOverview />} />
      <Route path="/industry-solutions" element={<IndustrySolutions />} />
      <Route path="/social-proof" element={<SocialProof />} />
      <Route path="/pricing-plans" element={<PricingPlans />} />
      <Route path="/resources" element={<ResourcesSection />} />
      {/* You can add a NotFound fallback route here if needed */}
    </Routes>
  );
}
