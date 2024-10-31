import { Button, type ButtonProps } from "@/components/Button";
import { cn } from "@root/utilities/cn";
import Link from "next/link";
import React from "react";

import type { Page, Post } from "@/payload-types";

// Define the props for the CMSLink component
type CMSLinkType = {
  children?: React.ReactNode;
  className?: string;
  label?: string | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: "pages" | "posts";
    value: Page | Post | string | number;
  } | null;
  size?: ButtonProps["size"] | null;
  type?: "custom" | "reference" | null;
  url?: string | null;
};

// CMSLink component for rendering links with various options
export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props;

  // Determine the href based on the link type and reference
  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value.slug
      ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
          reference.value.slug
        }`
      : url;

  // If there's no href, don't render anything
  if (!href) return null;

  // Set props for opening in a new tab if specified
  const newTabProps = newTab
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};

  // Render a simple Link if no size is specified
  if (!sizeFromProps) {
    return (
      <Link className={cn(className)} href={href || url || ""} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    );
  }

  // Render a Button with a Link inside if size is specified
  return (
    <Button size={sizeFromProps}>
      <Link className={cn(className)} href={href || url || ""} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  );
};
