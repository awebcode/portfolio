"use client";
// client-side code (e.g., in your React component)
import { MotionGlobalConfig } from "framer-motion";

export  const  disableAnimationsOnMobile = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    MotionGlobalConfig.skipAnimations = true;
  }
};

// Call the function when your app mounts



// Call the function when your app mounts
