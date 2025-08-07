import React from "react";
import IOCANALYSIS from "./features/IOCANALYSIS";
import MaliciousIOCDetection from "./features/MaliciousIOCDetection";
import DarkWebIntelligence from "./features/DarkWebIntelligence";
import ATTACKMapping from "./features/ATTACKMapping";
import APTGroupIntelligence from "./features/APTGroupIntelligence";
import PasswordBreachIntelligence from "./features/PasswordBreachIntelligence";
import NeonSeparator from "./features/NeonSeparator";
import SwingAnimationStyle from "./features/SwingAnimationStyle";

export default function FeatureHighlights() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 space-y-12 font-myfont font-thin">
      <h2 className="text-4xl mb-10 font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Feature Highlights
      </h2>

      <div className="space-y-16">
        <NeonSeparator />
        <IOCANALYSIS />
        <NeonSeparator />
        <MaliciousIOCDetection />
        <NeonSeparator />
        <DarkWebIntelligence />
        <NeonSeparator />
        <ATTACKMapping />
        <APTGroupIntelligence />
        <PasswordBreachIntelligence />
        <SwingAnimationStyle />
      </div>
    </section>
  );
}
