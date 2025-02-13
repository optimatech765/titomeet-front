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
      backgroundImage: {
        footer:"linear-gradient(180deg, #FEEBEC 0%, #FFFFFF 100%)",
        gradiantBg: "linear-gradient(180deg, #FFFFFF 0%, #FEEBEC 51.14%)",
        partner:"linear-gradient(180deg, #FEFCFC 0%, #F4953E 100%),linear-gradient(180deg, #FEFCFC 0%, #F8BF8B 99.8%, #F4953E 100%);"
      },
      colors: {
        "primary": "#EE3540",
        "secondary": "#F08621",
      },
    }
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
