import React from "react";

export default function NeonSeparator({ className = "" }) {
  return (
    <div
      className={`w-full h-[3px] my-12 rounded-full bg-gradient-to-r from-[#00f078] via-[#44e3fa] to-[#a077ff] shadow-[0_0_12px_#00f07855] ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #00f078 0%, #44e3fa 50%, #a077ff 100%)",
      }}
      aria-hidden="true"
    />
  );
}
