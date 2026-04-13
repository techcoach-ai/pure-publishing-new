import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Mirror the CSS custom properties so Tailwind classes are available */
      colors: {
        "deep-indigo": "#1a1145",
        "indigo-mid": "#2d1b69",
        coral: "#ff6b6b",
        "coral-light": "#ff8a8a",
        "off-white": "#f8f9fc",
        teal: "#0ea5a0",
        "text-soft": "#4a4565",
        "text-muted": "#6b7280",
        "card-border": "#e5e7ef",
        "bg-alt": "#f8f9fc",
        "bg-alt2": "#f1f3f9",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
