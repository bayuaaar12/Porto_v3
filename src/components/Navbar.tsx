"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF6]/90 dark:bg-[#141416]/90 backdrop-blur-md border-b-2 border-dashed border-zinc-300 dark:border-zinc-700 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-2xl sm:text-3xl font-bold tracking-wide text-zinc-900 dark:text-zinc-100 flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-200">
            💻
          </span>
          <span className="relative">
            Bayu.
            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FDE68A] dark:bg-amber-400/80 -z-10 rounded transform -rotate-1"></span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-heading text-lg font-semibold">
          <button
            onClick={() => scrollTo("work")}
            className="text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-zinc-800 dark:after:bg-zinc-200 hover:after:w-full after:transition-all"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-zinc-800 dark:after:bg-zinc-200 hover:after:w-full after:transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-zinc-800 dark:after:bg-zinc-200 hover:after:w-full after:transition-all"
          >
            Skills
          </button>
          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 bg-[#FDE68A] hover:bg-[#fcd34d] text-zinc-900 border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] rounded-[14px_6px_12px_8px] font-heading font-bold text-lg cursor-pointer transition-colors"
          >
            Say Hi!
          </motion.button>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-900 dark:text-zinc-100 border-2 border-black dark:border-white rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E22] shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-[#FAFAF6] dark:bg-[#141416] px-6 py-4 space-y-4 font-heading text-xl font-bold"
          >
            <button
              onClick={() => scrollTo("work")}
              className="block w-full text-left py-2 text-zinc-800 dark:text-zinc-200"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left py-2 text-zinc-800 dark:text-zinc-200"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("skills")}
              className="block w-full text-left py-2 text-zinc-800 dark:text-zinc-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full text-center py-2.5 bg-[#FDE68A] text-zinc-900 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-xl font-bold"
            >
              Say Hi!
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
