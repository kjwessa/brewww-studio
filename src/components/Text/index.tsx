import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utilities/cn";

// Text component following Material Design type scale from Tailwind config
const textVariants = cva(
  // Base styles with increased specificity
  '[&.text]:font-default [&.text]:tracking-tight',
  {
    variants: {
      level: {
        p: "", // Paragraph
        span: "", // Inline text
        div: "", // Block-level text
      },
      size: {
        // Body sizes with increased specificity
        "body-large": "[&.text]:text-body-large",
        "body-medium": "[&.text]:text-body-medium",
        "body-small": "[&.text]:text-body-small",

        // Label sizes with increased specificity
        "label-large": "[&.text]:text-label-large",
        "label-medium": "[&.text]:text-label-medium",
        "label-small": "[&.text]:text-label-small",
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
    compoundVariants: [
      {
        size: ["label-large", "label-medium", "label-small"],
        weight: "regular",
        className: "tracking-normal",
      },
    ],
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
      className={cn(
        'text',
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