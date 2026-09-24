"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeBg: string;
  credentialId?: string;
}

const certs: Certification[] = [
  {
    title: "Certified Data Analyst – Foundations Course",
    issuer: "Udemy",
    date: "Sept 2026",
    badgeBg: "bg-[#FDE68A] dark:bg-amber-400",
    credentialId: "UC-DATA-ANALYST",
  },
  {
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Nov 2024",
    badgeBg: "bg-[#BBF7D0] dark:bg-emerald-400",
    credentialId: "HR-SQL-BASIC",
  },
  {
    title: "English as Independent User (B-Level)",
    issuer: "BINUS/Beelingua",
    date: "May 2023",
    badgeBg: "bg-[#BFDBFE] dark:bg-blue-400",
    credentialId: "BINUS-ENG-B",
  },
  {
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding",
    date: "Nov 2024",
    badgeBg: "bg-[#FBCFE8] dark:bg-pink-400",
    credentialId: "DICODING-KOTLIN",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 relative">
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
              whileHover={{ y: -2 }}
              className="doodle-card p-4 sm:p-5 bg-white dark:bg-[#1E1E22] flex items-center justify-between gap-3 group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/40 border border-black dark:border-white rounded-lg shrink-0 mt-0.5 group-hover:rotate-6 transition-transform">
                  <Award className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-zinc-900 dark:text-zinc-100 leading-snug flex items-center gap-1.5">
                    <span>{cert.title}</span>
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        {cert.date}
                      </span>
                    </p>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-500 rounded text-[10px] font-mono font-bold">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`w-3.5 h-3.5 rounded-full ${cert.badgeBg} border-2 border-black dark:border-white shrink-0`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
