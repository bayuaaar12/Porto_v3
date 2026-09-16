"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "Kotlin",
  "Laravel",
  "React.js",
  "Jetpack Compose",
  "OpenCV",
  "MySQL",
  "Firebase",
  "Git",
  "RESTful APIs",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 shrink-0">
            <span>🛠️</span>
            <span>Skills</span>
          </h2>
          <div className="flex-1 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600"></div>
        </div>

        {/* Skill Badge Grid Box Container */}
        <div className="doodle-card p-6 sm:p-8 bg-white dark:bg-[#1E1E22]">
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 font-bold">
            // Technical Toolkit & Frameworks
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                className="px-3 py-1.5 bg-white dark:bg-zinc-900 border border-black dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm font-mono font-bold shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] rounded-md inline-flex items-center gap-1.5 cursor-default select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
