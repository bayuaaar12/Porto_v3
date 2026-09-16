"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowDownRight, Sparkles, Code2 } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="pt-10 pb-16 md:pt-16 md:pb-24 relative overflow-hidden">
      {/* Background Floating Doodles */}
      <div className="absolute top-10 left-[5%] opacity-30 dark:opacity-20 pointer-events-none select-none hidden lg:block animate-float">
        <Sparkles className="w-8 h-8 text-amber-500" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Green Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#BBF7D0] text-zinc-900 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-[14px_4px_12px_6px] font-mono text-sm font-bold tracking-tight transform -rotate-1">
                Hello, World! 👋
              </span>
            </div>

            {/* Main Heading 2 lines */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-[1.15] tracking-tight">
              <div>
                I&apos;m{" "}
                <span className="highlight-marker highlight-yellow font-extrabold px-1">
                  Bayu.
                </span>
              </div>
              <div className="mt-2">
                I build{" "}
                <span className="highlight-marker highlight-pink font-extrabold px-1">
                  things that work.
                </span>
              </div>
            </h1>

            {/* Subheading */}
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Software Engineering student who learned to code by building things that couldn&apos;t afford to break — a hotel&apos;s network, a warung&apos;s checkout line, a city&apos;s public transit.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, rotate: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("work")}
                className="doodle-btn px-6 py-3.5 bg-[#FDE68A] hover:bg-[#fcd34d] text-zinc-900 text-lg font-heading font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, rotate: 1 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/bayuaaar12"
                target="_blank"
                rel="noopener noreferrer"
                className="doodle-btn px-6 py-3.5 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-lg font-heading font-bold flex items-center gap-2 cursor-pointer"
              >
                <Github className="w-5 h-5 stroke-[2.5]" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Paper Tape Decorative Accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-200/90 dark:bg-amber-300/80 border border-black/30 shadow-sm z-20 transform -rotate-2 flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-800">
                ★ SE Student ★
              </div>

              {/* Main Avatar Container */}
              <div className="doodle-card p-6 bg-white dark:bg-[#1E1E22] relative z-10 flex flex-col items-center text-center">
                {/* Avatar Frame / Polaroid Doodle Photo Slot */}
                <div className="w-48 h-52 sm:w-52 sm:h-56 rounded-2xl border-3 border-black dark:border-zinc-100 bg-[#BFDBFE] dark:bg-blue-900/40 p-1.5 relative overflow-hidden shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] flex items-center justify-center mb-4 group transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/profile.jpeg"
                    alt="Bayu"
                    className="w-full h-full object-cover object-[center_25%] rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Badge tags under avatar */}
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2.5 py-1 bg-[#FBCFE8] dark:bg-pink-900/60 text-zinc-900 dark:text-zinc-100 border border-black dark:border-white rounded-md text-xs font-mono font-bold">
                    🚀 Fullstack
                  </span>
                  <span className="px-2.5 py-1 bg-[#BBF7D0] dark:bg-emerald-900/60 text-zinc-900 dark:text-zinc-100 border border-black dark:border-white rounded-md text-xs font-mono font-bold">
                    📡 Network
                  </span>
                  <span className="px-2.5 py-1 bg-[#FDE68A] dark:bg-amber-900/60 text-zinc-900 dark:text-zinc-100 border border-black dark:border-white rounded-md text-xs font-mono font-bold">
                    🤖 AI / CV
                  </span>
                </div>

                {/* Handwritten Floating Notes */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 w-full flex items-center justify-center text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-blue-500" />
                    Problem Solver
                  </span>
                </div>
              </div>

              {/* Decorative Corner Sticky Note */}
              <div className="absolute -bottom-4 -right-2 bg-[#FDE68A] dark:bg-amber-400 text-zinc-900 border-2 border-black p-2.5 shadow-[3px_3px_0px_0px_#000] rounded-lg transform rotate-6 z-20 hidden sm:block">
                <p className="font-heading font-bold text-xs leading-none">
                  Open for Work! ⚡
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
