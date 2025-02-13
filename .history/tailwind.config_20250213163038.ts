import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import { Poppins } from "next/font/google";



export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: { 
      fontFamily: {
        poppins: ["var(--font-geist-sans)", Poppins],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
