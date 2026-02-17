"use client";

import { motion } from "framer-motion";
import React from "react";

type EnergyBackgroundProps = {
  className?: string;
  intensity?: number; // 0.5 to 2 for subtle control
};

/**
 * EnergyBackground: layered gradient backdrop with slow parallax motion.
 * Designed to be subtle and performant (no heavy 3D).
 */
export default function EnergyBackground({ className = "", intensity = 1 }: EnergyBackgroundProps) {
  const scale = Math.max(0.5, Math.min(2, intensity));

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {/* Base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(31,191,102,0.10), transparent 60%)," +
            "radial-gradient(900px 500px at 80% 20%, rgba(242,167,102,0.06), transparent 55%)," +
            "radial-gradient(1000px 700px at 50% 80%, rgba(31,191,102,0.08), transparent 60%)",
        }}
      />

      {/* Soft moving bands suggesting energy flow */}
      <motion.div
        className="absolute -left-1/2 top-1/4 h-[40vh] w-[200vw]"
        style={{
          background:
            "linear-gradient(90deg, rgba(31,191,102,0) 0%, rgba(31,191,102,0.08) 40%, rgba(31,191,102,0.12) 50%, rgba(31,191,102,0.08) 60%, rgba(31,191,102,0) 100%)",
          filter: "blur(24px)",
        }}
        animate={{ x: [0, -40 * scale, 0] }}
        transition={{ duration: 28 / scale, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -left-1/2 top-[60%] h-[30vh] w-[200vw]"
        style={{
          background:
            "linear-gradient(90deg, rgba(242,167,102,0) 0%, rgba(242,167,102,0.06) 40%, rgba(242,167,102,0.08) 50%, rgba(242,167,102,0.06) 60%, rgba(242,167,102,0) 100%)",
          filter: "blur(22px)",
        }}
        animate={{ x: [0, 30 * scale, 0] }}
        transition={{ duration: 32 / scale, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint grid hint for industrial feel */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24px, rgba(255,255,255,0.04) 25px)," +
            "linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.04) 25px)",
          backgroundSize: "25px 25px",
        }}
      />
    </div>
  );
}
