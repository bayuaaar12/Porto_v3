"use client";

import React from "react";
import { Coffee, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-[#FAFAF6]/80 dark:bg-[#141416]/80 backdrop-blur-xs text-center font-sans space-y-2">
      <div className="max-w-5xl mx-auto px-4">
        <p className="font-heading font-extrabold text-lg text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-1.5 flex-wrap">
          <span>Dibuat dengan ngoding dan kopi</span>
          <Coffee className="w-4 h-4 text-amber-600 inline" />
          <span>© 2026 Bayu.</span>
        </p>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 italic">
          (Tidak ada garis lurus yang disakiti dalam pembuatan situs ini)
        </p>
      </div>
    </footer>
  );
}
