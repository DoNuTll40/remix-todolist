import type { Config } from 'tailwindcss'
import { mtConfig } from "@material-tailwind/react";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans Thai Looped", "serif"],
      'noto-thai': ["Noto Sans Thai Looped", "sans-serif"],
    },
  },
  plugins: [mtConfig],
} satisfies Config;

