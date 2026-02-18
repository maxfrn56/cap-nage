import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azur: "#a3daeb",
        "azur-dark": "#8bc4d4",
        indigo: "#1800ad",
        cyan: "#1d393b",
        cream: "#efe7dc",
      },
      fontFamily: {
        radley: ["var(--font-radley)", "Georgia", "serif"],
        raleway: ["var(--font-raleway)", "system-ui", "sans-serif"],
        klein: ["var(--font-klein)", "system-ui", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(24, 0, 173, 0.08)",
        "soft-hover": "0 8px 30px rgba(24, 0, 173, 0.12)",
      },
      keyframes: {
        waveMove: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-30px)" },
        },
      },
      animation: {
        "wave-move": "waveMove 4s ease-in-out infinite",
        "float-soft": "floatSoft 5s ease-in-out infinite",
        "marquee-from-right": "marqueeFromRight 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
