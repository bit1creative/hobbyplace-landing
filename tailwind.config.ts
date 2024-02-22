import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#010C11",
        "custom-gray": "#CDD0D2",
      },
      backgroundImage: {
        "home-page": "url('/images/background.png')",
      },
      backgroundSize: {
        "50%": "150%",
        "16": "4rem",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        unbounded: ["var(--font-unbounded)"],
      },
      fontSize: {
        "4xl": ["40px", "54px"],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
