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
        "display-large": "clamp(2.89rem, 1.47rem + 7.1vw, 9.31rem)",
        "display-medium": "clamp(2.57rem, 1.43rem + 5.7vw, 7.45rem)",
        "display-small": "clamp(2.28rem, 1.37rem + 4.55vw, 5.96rem)",
        "headline-large": "clamp(2.03rem, 1.31rem + 3.6vw, 4.77rem)",
        "headline-medium": "clamp(1.8rem, 1.24rem + 2.8vw, 3.81rem)",
        "headline-small": "clamp(1.6rem, 1.18rem + 2.1vw, 3.05rem)",
        "title-large": "clamp(1.42rem, 1.12rem + 1.5vw, 2.44rem)",
        "title-medium": "clamp(1.27rem, 1.07rem + 1vw, 1.95rem)",
        "title-small": "clamp(1.13rem, 1.03rem + 0.5vw, 1.56rem)",
        "body-large": "clamp(1.17rem, 1.09rem + 0.4vw, 1.48rem)",
        "body-medium": "clamp(1.07rem, 1.02rem + 0.25vw, 1.28rem)",
        "body-small": "clamp(0.98rem, 0.96rem + 0.1vw, 1.1rem)",
        "label-large": "clamp(0.9rem, 0.89rem + 0.05vw, 0.95rem)",
        "label-medium": "clamp(0.83rem, 0.83rem + -0.05vw, 0.82rem)",
        "label-small": "clamp(0.76rem, 0.77rem + -0.05vw, 0.71rem)",
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
