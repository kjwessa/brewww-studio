import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "A marketing studio for the modern age.",
  images: [
    {
      url: process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/website-template-OG.webp`
        : "/website-template-OG.webp",
    },
  ],
  siteName: "Brewww Studio",
  title: "Brewww Studio",
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"],
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
