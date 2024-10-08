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
        "display-large": "clamp(2.57rem, 1.552rem + 5.09vw, 6.13rem)",
        "display-medium": "clamp(2.28rem, 1.494rem + 3.93vw, 5.03rem)",
        "display-small": "clamp(2.03rem, 1.432rem + 2.99vw, 4.12rem)",
        "headline-large": "clamp(1.8rem, 1.348rem + 2.26vw, 3.38rem)",
        "headline-medium": "clamp(1.6rem, 1.266rem + 1.67vw, 2.77rem)",
        "headline-small": "clamp(1.42rem, 1.178rem + 1.21vw, 2.27rem)",
        "title-large": "clamp(1.27rem, 1.102rem + 0.84vw, 1.86rem)",
        "title-medium": "clamp(1.13rem, 1.018rem + 0.56vw, 1.52rem)",
        "title-small": "clamp(1rem, 0.928rem + 0.36vw, 1.25rem)",
        "body-large": "clamp(1.3rem, 1.24rem + 0.3vw, 1.51rem)",
        "body-main": "clamp(1rem, 0.986rem + 0.07vw, 1.05rem)",
        "body-small": "0.875rem",
        "label-large": "clamp(0.77rem, 0.782rem + -0.06vw, 0.73rem)",
        "label-medium": "clamp(0.67rem, 0.688rem + -0.09vw, 0.61rem)",
        "label-small": "clamp(0.59rem, 0.612rem + -0.11vw, 0.51rem)",
      },
      colors: {
        brand: {
          gold: "#f8ac43",
          "dark-bg": "#0A0A0A",
          "dark-surface": "#1D1D1D",
          "dark-text": "#E0E0E0",
          "light-bg": "#F5F5F5",
          "light-surface": "#FFFFFF",
          "light-text": "#333333",
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.brand.light.text"),
            h1: {
              color: theme("colors.brand.light.text"),
            },
            h2: {
              color: theme("colors.brand.light.text"),
            },
            h3: {
              color: theme("colors.brand.light.text"),
            },
            h4: {
              color: theme("colors.brand.light.text"),
            },
            h5: {
              color: theme("colors.brand.light.text"),
            },
            h6: {
              color: theme("colors.brand.light.text"),
            },
            a: {
              color: theme("colors.brand.light.text"),
            },
            strong: {
              color: theme("colors.brand.light.text"),
            },
            em: {
              color: theme("colors.brand.light.text"),
            },
            b: {
              color: theme("colors.brand.light.text"),
            },
            p: {
              color: theme("colors.brand.light.text"),
            },
            ul: {
              color: theme("colors.brand.light.text"),
            },
            ol: {
              color: theme("colors.brand.light.text"),
            },
          },
        },
        dark: {
          css: {
            "--tw-prose-headings": theme("colors.brand.dark.text"),
            h1: {
              color: theme("colors.brand.dark.text"),
            },
            h2: {
              color: theme("colors.brand.dark.text"),
            },
            h3: {
              color: theme("colors.brand.dark.text"),
            },
            h4: {
              color: theme("colors.brand.dark.text"),
            },
            h5: {
              color: theme("colors.brand.dark.text"),
            },
            h6: {
              color: theme("colors.brand.dark.text"),
            },
            a: {
              color: theme("colors.brand.dark.text"),
            },
            strong: {
              color: theme("colors.brand.dark.text"),
            },
            em: {
              color: theme("colors.brand.dark.text"),
            },
            b: {
              color: theme("colors.brand.dark.text"),
            },
            p: {
              color: theme("colors.brand.dark.text"),
            },
            ul: {
              color: theme("colors.brand.dark.text"),
            },
            ol: {
              color: theme("colors.brand.dark.text"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
