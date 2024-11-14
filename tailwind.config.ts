import type { Config } from "tailwindcss";
import { mtConfig } from "@material-tailwind/react";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "ibm-thai": ["IBM Plex Sans Thai Looped", "sans-serif"],
      "noto-thai": ["Noto Sans Thai Looped", "sans-serif"],
    },
    keyframes: {
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      fadeInDown: "fadeInDown 0.25s ease-in-out forwards",
      spin: "spin 1s linear infinite", // Corrected animation name to 'spin' here
    },
  },
  plugins: [
    mtConfig({
      fonts: {
        sans: "IBM Plex Sans Thai Looped",
      },
    }),
  ],
} satisfies Config;
