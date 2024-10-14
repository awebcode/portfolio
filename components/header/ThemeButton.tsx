"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensure the theme loads correctly on the client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch on server render

  // Determine the next theme and its corresponding icon
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <motion.button
      className="flex items-center justify-center p-2 rounded-full  transition-colors hover:bg-gray-300 hover:bg-gray-300  hover:text-black"
      onClick={() => setTheme(nextTheme)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.3 }}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </motion.button>
  );
};

export default ThemeToggle;
