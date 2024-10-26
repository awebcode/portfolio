"use client";
import React from "react";
import { motion } from "framer-motion";

const BgChangeLRTCenter = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.button
      className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg bg-gray-800"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Left Side Animation */}
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: hovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 w-1/2 bg-blue-500"
      />

      {/* Right Side Animation */}
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-y-0 right-0 w-1/2 bg-purple-500"
      />

      <span className="relative z-10">Hover Me</span>
    </motion.button>
  );
};

export default BgChangeLRTCenter;
