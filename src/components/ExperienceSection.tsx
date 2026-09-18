"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Infrastructure & Support Intern",
    company: "The Alana Hotel and Conference Center",
    companyHighlightColor: "highlight-yellow",
    date: "Feb 2025 – Present",
    description: (
      <>
        Configured enterprise wireless access points across 20+ property zones, deployed structured cabling for building expansions while sustaining <strong className="font-bold underline decoration-amber-400 decoration-2">99.9% network uptime</strong>, and cut system downtime by <strong className="font-bold underline decoration-pink-400 decoration-2">25%</strong> through proactive monitoring.
      </>
    ),
    tags: ["Network Infrastructure", "IT Support", "Troubleshooting"],
    nodeColor: "bg-[#BFDBFE] dark:bg-blue-400",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title with Dashed Line */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 shrink-0">
            <span>💼</span>
            <span>Working Experience</span>
          </h2>
          <div className="flex-1 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600 ml-3 sm:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Colored Timeline Node Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full ${exp.nodeColor} border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] z-10 group-hover:scale-125 transition-transform duration-200`}
              ></div>

              {/* Experience Card */}
              <div className="doodle-card p-6 bg-white dark:bg-[#1E1E22] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-dashed border-zinc-200 dark:border-zinc-700 pb-3">
                  <div>
                    <h3 className="font-heading text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                      {exp.title}
                    </h3>
                    <p className="font-heading text-lg font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                      <span className={`highlight-marker ${exp.companyHighlightColor} px-1`}>
                        {exp.company}
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-800 dark:border-zinc-200 rounded-md font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 bg-white dark:bg-zinc-900 border border-zinc-900 dark:border-zinc-200 rounded-md text-xs font-mono text-zinc-800 dark:text-zinc-200"
                    >
                      {tag}
                    </span>
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
