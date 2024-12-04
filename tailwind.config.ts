import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          `var(--font-dm-sans), "ui-sans-serif", "system-ui", "sans-serif"`,
        ],
        mono: [
          `var(--font-bebas-neue), "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"`,
        ],
      },
      borderWidth: {
        6: "6px",
      },
      fontSize: {
        'display-large': 'var(--font-display-large)',
        'display-medium': 'var(--font-display-medium)',
        'display-small': 'var(--font-display-small)',
        'headline-large': 'var(--font-headline-large)',
        'headline-medium': 'var(--font-headline-medium)',
        'headline-small': 'var(--font-headline-small)',
        'title-large': 'var(--font-title-large)',
        'title-medium': 'var(--font-title-medium)',
        'title-small': 'var(--font-title-small)',
        'body-large': 'var(--font-body-large)',
        'body-medium': 'var(--font-body-medium)',
        'body-small': 'var(--font-body-small)',
        'label-large': 'var(--font-label-large)',
        'label-medium': 'var(--font-label-medium)',
        'label-small': 'var(--font-label-small)',
      },
      colors: {
        brand: {
          gold: "#f8ac43",
          "dark-bg": "#010101",
          "dark-surface": "#050609",
          "dark-text": "#E0E0E0",
          gunmetal: "#242e2e",
          "light-bg": "#F5F5F5",
          "light-surface": "#FFFFFF",
          "light-text": "#333333",
        },
      },
    },
  },
  plugins: [fluid],
};

export default config;
