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
