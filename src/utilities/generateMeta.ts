import type { Metadata } from "next";

import type { Page, Post } from "@/payload-types";

import { mergeOpenGraph } from "./mergeOpenGraph";

export const generateMeta = async (args: {
  doc: Page | Post;
}): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage =
    typeof doc?.seo?.image === "object" &&
    doc.seo.image !== null &&
    "url" in doc.seo.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.seo.image.url}`;

  const title = doc?.seo?.title
    ? doc?.seo?.title + " | Brewww Studio"
    : "Brewww Studio";

  return {
    description: doc?.seo?.description || "",
    openGraph: mergeOpenGraph({
      description: doc?.seo?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
    }),
    title,
  };
};

//TODO consider renaming meta and seo for clarity and consistency across the project
