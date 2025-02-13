import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";



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
      colors: {
         "gradiant-bg":"linear-gradient(180deg, #FFFFFF 0%, #FEEBEC 51.14%)"
      },
     },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
