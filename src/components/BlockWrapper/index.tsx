"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utilities/cn";

export type PaddingProps = {
  top?: "large" | "small" | "hero";
  bottom?: "large" | "small";
};

const blockWrapperVariants = cva("relative", {
  variants: {
    theme: {
      dark: "bg-base-1000",
      light: "bg-base-0",
    },
    paddingTop: {
      hero: "pt-[calc(2rem+var(--page-padding-top))]",
      large: "pt-32 md:pt-20",
      small: "pt-16 md:pt-10",
    },
    paddingBottom: {
      large: "pb-32 md:pb-20",
      small: "pb-16 md:pb-10",
    },
    hideBackground: {
      true: "bg-transparent",
    },
    setPadding: {
      true: "",
      false: "p-0",
    },
  },
  defaultVariants: {
    theme: "light",
    setPadding: true,
  },
});

type BlockWrapperProps = VariantProps<typeof blockWrapperVariants> & {
  className?: string;
  children: React.ReactNode;
  padding?: PaddingProps;
} & React.HTMLAttributes<HTMLDivElement>;

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
  className,
  children,
  theme,
  padding,
  setPadding = true,
  hideBackground,
  ...rest
}) => {
  return (
    <div
      className={cn(
        blockWrapperVariants({
          theme,
          paddingTop: padding?.top,
          paddingBottom: padding?.bottom,
          hideBackground,
          setPadding,
        }),
        className,
      )}
      {...rest}
      {...(theme ? { "data-theme": theme } : {})}
    >
      {children}
    </div>
  );
};
