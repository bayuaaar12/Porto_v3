import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: "#FAFAF6",
          dark: "#141416",
          cardLight: "#FFFFFF",
          cardDark: "#1E1E22",
        },
        highlighter: {
          yellow: "#FDE68A",
          pink: "#FBCFE8",
          green: "#BBF7D0",
          blue: "#BFDBFE",
          orange: "#FED7AA",
        },
      },
      fontFamily: {
        handwriting: ["var(--font-kalam)", "var(--font-architects)", "cursive"],
        heading: ["var(--font-kalam)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        doodle: "4px 4px 0px 0px #000000",
        "doodle-lg": "6px 6px 0px 0px #000000",
        "doodle-sm": "2px 2px 0px 0px #000000",
        "doodle-dark": "4px 4px 0px 0px #FFFFFF",
        "doodle-dark-lg": "6px 6px 0px 0px #FFFFFF",
        "doodle-dark-sm": "2px 2px 0px 0px #FFFFFF",
        "doodle-yellow": "4px 4px 0px 0px #FDE68A",
        "doodle-pink": "4px 4px 0px 0px #FBCFE8",
      },
      borderRadius: {
        sketch: "255px 15px 225px 15px/15px 225px 15px 255px",
        "sketch-2": "20px 255px 20px 255px/255px 20px 255px 20px",
        "sketch-sm": "12px 180px 10px 160px/150px 12px 140px 10px",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        spinSlow: "spin 12s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
