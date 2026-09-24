"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Copy, Check, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "bayuanugrahramadan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Large Central Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="doodle-card p-8 sm:p-12 bg-white dark:bg-[#1E1E22] text-center relative overflow-hidden"
        >
          {/* Paper tape accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#BBF7D0] dark:bg-emerald-400 text-zinc-900 border border-black text-[11px] font-mono font-bold flex items-center justify-center shadow-xs transform rotate-1 uppercase tracking-wider">
            ★ Get In Touch ★
          </div>

          {/* Heading with green marker highlight on "rad!" */}
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-2 mb-4 leading-tight">
            Let&apos;s build something{" "}
            <span className="highlight-marker highlight-green px-1.5">
              rad!
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Currently looking for a software engineering internship — always up for a chat about code, coffee, or campus projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${email}`}
              className="doodle-btn px-6 py-3.5 bg-[#FDE68A] hover:bg-[#fcd34d] text-zinc-900 font-heading font-extrabold text-lg flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-5 h-5 stroke-[2.5]" />
              <span>Drop an Email</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="doodle-btn px-5 py-3.5 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-heading font-extrabold text-lg flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 stroke-[2.5] text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied! ✨</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 stroke-[2.5]" />
                  <span>Copy Address</span>
                </>
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/bayuanugrahramadan"
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn px-6 py-3.5 bg-[#BFDBFE] hover:bg-[#93c5fd] text-zinc-900 font-heading font-extrabold text-lg flex items-center gap-2 cursor-pointer"
            >
              <Linkedin className="w-5 h-5 stroke-[2.5]" />
              <span>LinkedIn Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
