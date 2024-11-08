import type { Config } from 'tailwindcss'
import { mtConfig } from "@material-tailwind/react";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'ibm-thai': ["IBM Plex Sans Thai Looped", "sans-serif"],
      'noto-thai': ["Noto Sans Thai Looped", "sans-serif"],
    },
  },
  plugins: [mtConfig({
    fonts: {
      sans: "IBM Plex Sans Thai Looped"
    }
  })],
} satisfies Config;

