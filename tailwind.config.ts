import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "3rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "6rem",
    //   },
    // },
    extend: {
      fontFamily: {
        sans: [`var(--font-dm-sans), "ui-sans-serif", "system-ui"`],
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        brand: {
          gold: "#f8ac43",
          black: "#060d0e",
          light: {
            bg: "#F5F5F5",
            surface: "#FFFFFF",
            text: "#333333",
          },
          dark: {
            bg: "#121212",
            surface: "#1E1E1E",
            text: "#E0E0E0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
