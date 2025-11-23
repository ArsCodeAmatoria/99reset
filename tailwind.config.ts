import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        border: "var(--border)",
        text: "var(--text)",
        textDim: "var(--text-dim)",
        accent: "var(--accent)",
        success: "var(--success)",
        warn: "var(--warn)",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-serif)", "Georgia", "serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        bagel: ["var(--font-bagel-fat)", "cursive"],
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
