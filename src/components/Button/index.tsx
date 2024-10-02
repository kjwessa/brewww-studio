"use client";

import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utilities/cn";
import Link from "next/link";
import { LinkType, Reference } from "../CMSLink/index.js";
import { Page as PayloadPage } from "@/payload-types";

// Import your icons here
// import { ArrowIcon, SearchIcon, GitHubIcon, PlusIcon, LoaderIcon } from "@/icons";

interface Page extends PayloadPage {
  breadcrumbs?: { url: string }[];
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  appearance?:
    | "default"
    | "text"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "null";
  href?: string;
  newTab?: boolean;
  icon?: "arrow" | "search" | "github" | "plus" | "loading";
  iconPosition?: "left" | "right";
  iconSize?: "large" | "medium" | "small";
  iconRotation?: number;
  label?: string;
  labelStyle?: "mono" | "regular";
  el?: "button" | "link" | "a" | "div";
  type?: LinkType | "submit" | "reset" | "button";
  reference?: Reference;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  htmlButtonType?: "button" | "submit" | "reset";
  url?: string;
  disabled?: boolean;
}

const icons: Record<string, React.ComponentType<any>> = {
  // arrow: ArrowIcon,
  // search: SearchIcon,
  // github: GitHubIcon,
  // plus: PlusIcon,
  // loading: LoaderIcon,
};

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
      variant,
      size,
      fullWidth,
      mobileFullWidth,
      icon,
      iconPosition = "right",
      iconSize = "medium",
      iconRotation,
      label,
      labelStyle = "mono",
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
    const Icon = icon ? icons[icon] : null;

    const content = (
      <>
        {iconPosition === "left" && Icon && (
          <Icon
            className={cn("mr-2", `icon-${iconSize}`)}
            style={
              iconRotation
                ? { transform: `rotate(${iconRotation}deg)` }
                : undefined
            }
          />
        )}
        {label && (
          <span className={cn(labelStyle === "mono" && "font-mono")}>
            {label}
          </span>
        )}
        {iconPosition === "right" && Icon && (
          <Icon
            className={cn("ml-2", `icon-${iconSize}`)}
            style={
              iconRotation
                ? { transform: `rotate(${iconRotation}deg)` }
                : undefined
            }
          />
        )}
      </>
    );

    if (el === "link") {
      return (
        <Link
          href={hrefValue}
          className={cn(
            buttonVariants({
              variant,
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
              variant,
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
            variant,
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
