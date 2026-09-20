"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  badgeBg: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    badgeBg: "bg-amber-400",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "Kotlin"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    badgeBg: "bg-blue-400",
    items: ["React.js", "Next.js", "Laravel", "Jetpack Compose", "OpenCV", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: "bg-emerald-400",
    items: ["MySQL", "Firebase", "Git", "RESTful APIs", "Docker", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 shrink-0">
            <span>🛠️</span>
            <span>Skills & Tech Stack</span>
          </h2>
          <div className="flex-1 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600"></div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIdx * 0.1 }}
              className="doodle-card p-5 bg-white dark:bg-[#1E1E22] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-dashed border-zinc-200 dark:border-zinc-700">
                  {category.icon}
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.items.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="px-2.5 py-1 bg-[#FAFAF6] dark:bg-zinc-900 border border-black dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] rounded-md inline-flex items-center gap-1.5 cursor-default select-none"
                    >
                      <span className={`w-2 h-2 rounded-full ${category.badgeBg} inline-block`}></span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
