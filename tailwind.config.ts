import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#70384C",
        bg: "#FFFFFF",
        fg: "#000000",
        "fg-light": "#5B4D52",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-spline)"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
