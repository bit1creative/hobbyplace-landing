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
    },
  },
  plugins: [],
};
export default config;
