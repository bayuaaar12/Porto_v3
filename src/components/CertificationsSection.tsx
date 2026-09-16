"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeBg: string;
}

const certs: Certification[] = [
  {
    title: "Certified Data Analyst – Foundations Course",
    issuer: "Udemy",
    date: "Sept 2026",
    badgeBg: "bg-[#FDE68A] dark:bg-amber-400",
  },
  {
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Nov 2024",
    badgeBg: "bg-[#BBF7D0] dark:bg-emerald-400",
  },
  {
    title: "English as Independent User (B-Level)",
    issuer: "BINUS/Beelingua",
    date: "May 2023",
    badgeBg: "bg-[#BFDBFE] dark:bg-blue-400",
  },
  {
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding",
    date: "Nov 2024",
    badgeBg: "bg-[#FBCFE8] dark:bg-pink-400",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 shrink-0">
            <span>📜</span>
            <span>Certifications</span>
          </h2>
          <div className="flex-1 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600"></div>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="doodle-card p-4 sm:p-5 bg-white dark:bg-[#1E1E22] flex items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/40 border border-black dark:border-white rounded-lg shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      {cert.date}
                    </span>
                  </p>
                </div>
              </div>

              <div
                className={`w-3 h-3 rounded-full ${cert.badgeBg} border border-black dark:border-white shrink-0`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
