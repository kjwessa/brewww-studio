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
        "display-large": "clamp(2.57rem, 1.348rem + 6.11vw, 6.8434rem)",
        "display-medium": "clamp(2.28rem, 1.398rem + 4.41vw, 5.3654rem)",
        "display-small": "clamp(2.03rem, 1.406rem + 3.12vw, 4.2128rem)",
        "headline-large": "clamp(1.8rem, 1.368rem + 2.16vw, 3.3104rem)",
        "headline-medium": "clamp(1.6rem, 1.316rem + 1.42vw, 2.5948rem)",
        "headline-small": "clamp(1.42rem, 1.242rem + 0.89vw, 2.0466rem)",
        "title-large": "clamp(1.27rem, 1.172rem + 0.49vw, 1.6106rem)",
        "title-medium": "clamp(1.13rem, 1.09rem + 0.2vw, 1.268rem)",
        "title-small": "clamp(1rem, 1rem + 0vw, 1rem)",
        "body-large": "clamp(1.14rem, 1.108rem + 0.16vw, 1.2504rem)",
        "body-main": "clamp(1.05rem, 1.05rem + 0vw, 1.05rem)",
        "body-small": "0.875rem",
        "label-large": "clamp(0.77rem, 0.78rem + -0.05vw, 0.733rem)",
        "label-medium": "clamp(0.67rem, 0.686rem + -0.08vw, 0.6148rem)",
        "label-small": "clamp(0.59rem, 0.612rem + -0.11vw, 0.5166rem)",
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
