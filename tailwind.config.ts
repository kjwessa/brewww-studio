import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-dm-sans), "ui-sans-serif", "system-ui"`],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
