import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#FAFAF6] dark:bg-[#141416] text-zinc-900 dark:text-zinc-100">
      <div className="max-w-md w-full doodle-card p-8 bg-white dark:bg-[#1E1E22] text-center space-y-6 relative">
        {/* Paper tape accent */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#FBCFE8] dark:bg-pink-500 text-zinc-900 border border-black text-[11px] font-mono font-bold flex items-center justify-center transform -rotate-2 uppercase tracking-wider">
          ★ Page Not Found ★
        </div>

        <div className="pt-4 flex justify-center">
          <div className="w-20 h-20 bg-[#FDE68A] dark:bg-amber-400 border-3 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
            <Compass className="w-10 h-10 text-zinc-900 animate-spin-slow" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-6xl font-extrabold tracking-tight">404</h1>
          <h2 className="font-heading text-xl font-bold text-zinc-800 dark:text-zinc-200">
            Looks like you&apos;re lost in cyberspace!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm font-sans">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="doodle-btn px-6 py-3 bg-[#BBF7D0] hover:bg-[#86efac] text-zinc-900 font-heading font-extrabold text-base inline-flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
