import type { Metadata } from "next";

/**
 * Default OpenGraph metadata configuration
 * These values will be used if no custom values are provided
 */
const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "A marketing studio for the modern age.",
  images: [
    {
      // Constructs the full image URL using environment variable if available
      // Falls back to relative path if NEXT_PUBLIC_SERVER_URL is not set
      url: process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/website-template-OG.webp`
        : "/website-template-OG.webp",
    },
  ],
  siteName: "Brewww Studio",
  title: "Brewww Studio",
};

/**
 * Merges custom OpenGraph metadata with default values
 * @param og - Optional custom OpenGraph metadata to merge with defaults
 * @returns Combined OpenGraph metadata object with custom values taking precedence
 */
export const mergeOpenGraph = (
  og?: Metadata["openGraph"],
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph, // Spread default values as base
    ...og, // Spread custom values to override defaults
    // Explicitly handle images array - use custom images if provided, otherwise use default
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
