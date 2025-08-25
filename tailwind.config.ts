import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: { accent: { DEFAULT: "#2563EB" } },
      boxShadow: {
        "inset-3d":
          "inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -4px 12px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")]
} satisfies Config;