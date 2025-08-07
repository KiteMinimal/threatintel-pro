import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import FeatureHighlights from "../FeatureHighlights";
import ProblemStatement from "./ProblemStatement";
import SolutionOverview from "./SolutionOverview";
import IndustrySolutions from "./IndustrySolutions";
import SocialProof from "./SocialProof";
import PricingPlans from "./PricingPlans";
import ResourcesSection from "./ResourcesSection";

// Combine Hero and FeatureHighlights into a HomePage
function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
    </>
  );
}

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/problem-statement" element={<ProblemStatement />} />
      <Route path="/solution-overview" element={<SolutionOverview />} />
      <Route path="/industry-solutions" element={<IndustrySolutions />} />
      <Route path="/social-proof" element={<SocialProof />} />
      <Route path="/pricing-plans" element={<PricingPlans />} />
      <Route path="/resources" element={<ResourcesSection />} />

      {/* Optional: catch-all 404 route */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
