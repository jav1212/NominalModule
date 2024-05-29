import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/shared/ui/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/shared/ui/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/shared/ui/organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/shared/ui/templa/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/shared/ui/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0.2' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadein: 'fadein 1s ease-in-out', // Aumentamos la duración a 1 segundo y usamos ease-in-out
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
