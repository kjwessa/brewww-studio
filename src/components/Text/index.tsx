import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Text component following Material Design type scale from Tailwind config
const textVariants = cva(
  // Base styles
  "font-default tracking-tight",
  {
    variants: {
      level: {
        p: "", // Paragraph
        span: "", // Inline text
        div: "", // Block-level text
      },
      size: {
        // Body sizes
        "body-large": "text-body-large",
        "body-medium": "text-body-medium",
        "body-small": "text-body-small",

        // Label sizes
        "label-large": "text-label-large",
        "label-medium": "text-label-medium",
        "label-small": "text-label-small",
      },
      weight: {
        regular: "font-normal",
        light: "font-light",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      level: "p",
      size: "body-medium",
      weight: "regular",
    },
  }
);

export interface TextProps extends React.HTMLAttributes<HTMLElement>, 
  VariantProps<typeof textVariants> {
  children?: React.ReactNode;
  className?: string;
  el?: "p" | "span" | "div";
}

export function Text({
  level,
  size,
  weight,
  children,
  className,
  el = "p",
  ...props
}: TextProps) {
  const Component = el;

  return (
    <Component
      className={twMerge(
        textVariants({ 
          level, 
          size, 
          weight 
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}