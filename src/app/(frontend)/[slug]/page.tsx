import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from "@/payload-types";
import { notFound } from "next/navigation";

//* Function to generate static params for all pages except the index page
export async function generateStaticParams() {
  // Get the Payload CMS instance with Hot Module Replacement support
  const payload = await getPayloadHMR({ config });

  // Query all non-draft pages from the 'pages' collection
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000, // Limit to 1000 pages
  });

  // Filter out the home page and map the remaining pages to their slugs
  return pages.docs
    ?.filter((doc) => doc.slug !== "home") // Exclude the home page
    .map(({ slug }) => slug); // Return an array of slugs
}

export default async function Page({ params }: { params: { slug = "home" } }) {
  let page: PageType | null;
  page = await queryPageBySlug({ slug });

  if (!page) {
    return notFound();
  }

  return <article><Blocks blocks={page.layout} /></article>;
}

//* Function to query a page by its slug, wrapped in React's cache for performance
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // Decode the URL-encoded slug
  const parsedSlug = decodeURIComponent(slug);

  // Get the Payload CMS instance with Hot Module Replacement support
  const payload = await getPayloadHMR({ config });

  // Query the 'pages' collection for a page matching the slug
  const result = await payload.find({
    collection: "pages",
    limit: 1, // Limit to one result
    where: {
      slug: {
        equals: parsedSlug, // Match the exact slug
      },
    },
  });

  // Return the first matching page or null if not found
  return result.docs?.[0] || null;
});
