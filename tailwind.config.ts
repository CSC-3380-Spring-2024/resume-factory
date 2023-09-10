import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 4px 50px -16px rgba(0, 0, 0, 0.25)",
      },

      colors: {
        accent: "#70384C",
        bg: "#FFFFFF",
        fg: "#000000",
        "fg-light": "#5B4D52",
        "bg-dark": "#F4F2F2",
        "bg-darker": "#EAE6E6",
        "bg-darkest": "#3D3437"
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
