"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Lock, Eye, X, Mail } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: "Web & POS" | "Mobile Apps" | "Fintech";
  tags: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  statusNote?: string;
  badgeColor: string;
  details?: {
    overview: string;
    highlights: string[];
  };
}

const projects: Project[] = [
  {
    title: "Kasir Pingkal — POS & Face Recognition System",
    description:
      "Built a point-of-sale system for my family's warung with a real-time face-recognition membership layer (hybrid ORB + DeepFace) — later became my undergraduate thesis research with full accuracy/precision evaluation.",
    category: "Web & POS",
    tags: ["Python", "Laravel", "OpenCV", "DeepFace", "MySQL"],
    githubUrl: "https://github.com/bayuaaar12/Kasir-Pingkal",
    badgeColor: "bg-[#FDE68A] dark:bg-amber-400",
  },
  {
    title: "Angkotin — Malang Public Transportation App",
    description:
      "Group project — built the Android front-end (route search, maps integration, live location) helping residents navigate Malang's public transit.",
    category: "Mobile Apps",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Google Maps SDK"],
    githubUrl: "https://github.com/bayuaaar12/Angkotin-Malang-Public-Transportation-App-",
    badgeColor: "bg-[#BFDBFE] dark:bg-blue-400",
  },
  {
    title: "Hotel Trisno — Hotel Profile Website",
    description:
      "Self-initiated website for my family's hotel — rooms, facilities, gallery, and direct WhatsApp booking, built solo end-to-end.",
    category: "Web & POS",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bayuaaar12/WebHotel",
    badgeColor: "bg-[#BBF7D0] dark:bg-emerald-400",
  },
  {
    title: "Investkan — Investment Crowdfunding Platform",
    description:
      "Fintech web app letting users discover and invest across sectors like F&B and Technology. Built with Laravel, featuring project listing, equity tracking, and secured investment workflows.",
    category: "Fintech",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    isPrivate: true,
    statusNote: "Private Repo — Available on Request",
    badgeColor: "bg-[#FBCFE8] dark:bg-pink-400",
    details: {
      overview: "Investkan is an investment crowdfunding platform designed to bridge retail investors with high-growth businesses in F&B and Technology.",
      highlights: [
        "Private Codebase (Source code & demo walkthrough available upon request)",
        "Laravel MVC architecture with dynamic investment catalog & progress tracking",
        "Role-based access control for investors, business owners, and admins",
        "Custom database schema design for transactions and pledge records"
      ]
    }
  },
];

const categories = ["All", "Web & POS", "Mobile Apps", "Fintech"] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 shrink-0">
              <span>🚀</span>
              <span>Selected Projects</span>
            </h2>
            <div className="hidden md:block w-24 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600"></div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border-2 transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#FDE68A] dark:bg-amber-400 text-zinc-900 border-black shadow-[2px_2px_0px_0px_#000]"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:border-black dark:hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="doodle-card p-6 bg-white dark:bg-[#1E1E22] flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  {/* Header & Tag Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <div
                      className={`w-3.5 h-3.5 rounded-full ${project.badgeColor} border-2 border-black dark:border-white shrink-0 mt-1.5`}
                    ></div>
                  </div>

                  {/* Project Description */}
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Section: Tags & GitHub / Request Link */}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 bg-white dark:bg-zinc-900 border border-zinc-900 dark:border-zinc-200 rounded-md text-xs font-mono text-zinc-800 dark:text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.githubUrl ? (
                    <div className="pt-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group/link"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Details</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-1 flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-400 text-amber-900 dark:text-amber-200 rounded text-xs font-mono font-bold">
                        <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Private Repo • Available on Request</span>
                      </span>
                      {project.details && (
                        <button
                          onClick={() => setSelectedModalProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 underline decoration-pink-400 underline-offset-4 hover:text-pink-600 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Overview / Demo</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Private Project Details & Request */}
        <AnimatePresence>
          {selectedModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="doodle-card p-6 sm:p-8 bg-white dark:bg-[#1E1E22] max-w-lg w-full relative space-y-5"
              >
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="absolute top-4 right-4 p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-lg border border-transparent hover:border-black dark:hover:border-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-300 border border-pink-400 rounded text-xs font-mono font-bold flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" /> Private Repository
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  {selectedModalProject.title}
                </h3>

                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  {selectedModalProject.details?.overview}
                </p>

                <div className="space-y-2 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                    {selectedModalProject.details?.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <a
                    href="mailto:bayuanugrahramadan@gmail.com?subject=Request%20Code%20Access%20-%20Investkan%20Project"
                    className="doodle-btn px-4 py-2.5 bg-[#FDE68A] hover:bg-[#fcd34d] text-zinc-900 text-xs font-heading font-extrabold flex items-center gap-2 cursor-pointer flex-1 justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Code / Demo</span>
                  </a>

                  <button
                    onClick={() => setSelectedModalProject(null)}
                    className="doodle-btn px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-heading font-bold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
