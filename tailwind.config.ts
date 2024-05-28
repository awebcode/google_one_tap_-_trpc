import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffc82c",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }: any) {
      // Add your custom styles here
      addComponents({
        ".flexCenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
