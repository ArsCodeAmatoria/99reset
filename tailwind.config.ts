import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        card: "#111113",
        border: "#27272A",
        text: "#F8FAFC",
        textDim: "#D1D5DB",
        accent: "#E11D48",
        success: "#10B981",
        warn: "#FACC15",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-serif)", "Georgia", "serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        button: "0.875rem",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
