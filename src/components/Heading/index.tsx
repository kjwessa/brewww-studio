import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Type scale following Material Design (with fluid sizes)
const headingVariants = cva(
  // Base styles
  "font-default tracking-tight",
  {
    variants: {
      level: {
        h1: "", // Default heading level class
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
        p: "",
      },
      size: {
        // Display sizes
        "display-large": "text-display-large",
        "display-medium": "text-display-medium",
        "display-small": "text-display-small",

        // Headline sizes
        "headline-large": "text-headline-large",
        "headline-medium": "text-headline-medium",
        "headline-small": "text-headline-small",

        // Title sizes
        "title-large": "text-title-large",
        "title-medium": "text-title-medium",
        "title-small": "text-title-small",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      weight: {
        regular: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      align: "left",
      weight: "bold",
    },
    // Compound variants for specific combinations
    compoundVariants: [
      {
        size: ["display-large", "display-medium", "display-small"],
        weight: "regular",
        className: "font-normal tracking-tighter",
      },
    ],
  },
);

// Types for heading content
type HeadingContent = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  className?: string;
};

interface HeadingProps extends VariantProps<typeof headingVariants> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: string | HeadingContent[];
  uppercase?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = "h2",
  size = "headline-large",
  content,
  align,
  weight,

  className,
}) => {
  const Component = level;

  // Helper function to render rich text content
  const renderContent = () => {
    if (typeof content === "string") {
      return content;
    }

    return content.map((item, index) => {
      if (item.bold || item.italic) {
        return (
          <span
            key={index}
            className={twMerge(
              item.bold && "font-bold",
              item.italic && "italic",
              item.className,
            )}
          >
            {item.text}
          </span>
        );
      }
      return item.text;
    });
  };

  return (
    <Component
      className={twMerge(
        headingVariants({
          level,
          size,
          align,
          weight,
        }),
        "mx-auto",
        className,
      )}
    >
      {renderContent()}
    </Component>
  );
};
