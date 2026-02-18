import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fdfbf7",
        beige: "#f5ecde",
        gold: "#b08d57",
        charcoal: "#3a342f"
      },
      boxShadow: {
        premium: "0 8px 30px rgba(103, 85, 58, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
