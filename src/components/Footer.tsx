"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-[#FAFAF6]/80 dark:bg-[#141416]/80 backdrop-blur-xs font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-heading font-bold text-base text-zinc-800 dark:text-zinc-200">
          © {new Date().getFullYear()} Bayu — Crafted with Next.js & Tailwind
        </p>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bayuaaar12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 bg-white dark:bg-zinc-800 border border-black dark:border-white rounded-md hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
          >
            <Github className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
          </a>
          <a
            href="https://linkedin.com/in/bayuanugrahramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 bg-white dark:bg-zinc-800 border border-black dark:border-white rounded-md hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
          >
            <Linkedin className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
          </a>
          <a
            href="mailto:bayuanugrahramadan@gmail.com"
            aria-label="Email Contact"
            className="p-2 bg-white dark:bg-zinc-800 border border-black dark:border-white rounded-md hover:bg-amber-100 dark:hover:bg-zinc-700 transition-colors shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
          >
            <Mail className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 bg-[#FDE68A] dark:bg-amber-400 border border-black text-zinc-900 rounded-md hover:bg-[#fcd34d] transition-colors shadow-[2px_2px_0px_0px_#000] cursor-pointer ml-2"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
