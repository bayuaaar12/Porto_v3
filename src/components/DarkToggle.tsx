"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#FDE68A] dark:bg-amber-400 text-zinc-900 border-[2.5px] border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] rounded-[16px_6px_14px_8px] transition-colors flex items-center justify-center cursor-pointer group"
      title={theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6 stroke-[2.5] text-zinc-900 group-hover:rotate-12 transition-transform" />
      ) : (
        <Sun className="w-6 h-6 stroke-[2.5] text-zinc-900 group-hover:rotate-45 transition-transform" />
      )}
    </motion.button>
  );
}
