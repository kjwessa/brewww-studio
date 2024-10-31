"use client";

import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { LinkType, Reference } from "../CMSLink/index.js";
import { Page as PayloadPage } from "@/payload-types";

interface Page extends PayloadPage {
  breadcrumbs?: { url: string }[];
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-brand-gold text-black hover:bg-brand-gold/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 text-base px-5 min-w-[9.88rem] ",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-16 rounded-md px-8 text-xl",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
      mobileFullWidth: {
        true: "w-full md:w-auto",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  newTab?: boolean;
  icon?: "arrow" | "search" | "plus" | "loading";
  iconPosition?: "left" | "right";
  label?: string;
  el?: "button" | "link" | "a";
  type?: LinkType | "submit" | "reset" | "button";
  reference?: Reference;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  htmlButtonType?: "button" | "submit" | "reset";
  url?: string;
  disabled?: boolean;
}

const generateHref = ({
  type,
  url,
  reference,
}: {
  type?: LinkType;
  url?: string;
  reference?: Reference;
}): string => {
  if ((type === "custom" || type === undefined) && url) {
    return url;
  }

  if (
    type === "reference" &&
    reference?.value &&
    typeof reference.value !== "string"
  ) {
    if (reference.relationTo === "pages") {
      const value = reference.value as Page;
      const breadcrumbs = value?.breadcrumbs;
      const hasBreadcrumbs =
        breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0;
      if (hasBreadcrumbs) {
        return breadcrumbs[breadcrumbs.length - 1]?.url as string;
      }
    }

    if (reference.relationTo === "posts") {
      return `/blog/${reference.value.slug}`;
    }

    if (reference.relationTo === "work") {
      return `/work/${reference.value.slug}`;
    }

    return `/${reference.relationTo}/${reference.value.slug}`;
  }

  return "";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent,
      size,
      fullWidth,
      mobileFullWidth,
      icon,
      iconPosition = "right",
      label,
      el = "button",
      href,
      newTab,
      type,
      reference,
      htmlButtonType = "button",
      url,
      disabled,
      ...props
    },
    ref,
  ) => {
    const hrefValue =
      href || generateHref({ type: type as LinkType, reference, url });

    const content = (
      <span className="flex h-full w-full cursor-pointer items-center justify-center">
        {label}
      </span>
    );

    if (el === "link") {
      return (
        <Link
          href={hrefValue}
          className={cn(
            buttonVariants({
              intent,
              size,
              fullWidth,
              mobileFullWidth,
              className,
            }),
          )}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </Link>
      );
    }

    if (el === "a") {
      return (
        <a
          className={cn(
            buttonVariants({
              intent,
              size,
              fullWidth,
              mobileFullWidth,
              className,
            }),
          )}
          href={hrefValue}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        className={cn(
          buttonVariants({
            intent,
            size,
            fullWidth,
            mobileFullWidth,
            className,
          }),
        )}
        ref={ref}
        type={(type as "submit" | "reset" | "button") || htmlButtonType}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
