import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from "@/payload-types";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/app/utils/RenderBlocks";

//* Function to generate static params for all pages except the index page
export async function generateStaticParams() {
  // Get the Payload CMS instance with Hot Module Replacement support
  const payload = await getPayloadHMR({ config: configPromise });

  // Query all non-draft pages from the 'pages' collection
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000, // Limit to 1000 pages
    overrideAccess: false,
  });

  // Filter out the home page and map the remaining pages to their slugs
  return pages.docs
    ?.filter((doc) => doc.slug !== "home") // Exclude the home page
    .map(({ slug }) => slug); // Return an array of slugs
}

export default async function Page({ params: { slug = "home" } }) {
  const url = "/" + slug;
  let page: PageType | null;
  page = await queryPageBySlug({ slug });

  if (!page) {
    return notFound();
  }

  const { layout } = page;

  return (
    <article className="bg-blue-500">
      <RenderBlocks blocks={page.layout} />
    </article>
  );
}

//* Function to query a page by its slug, wrapped in React's cache for performance
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // Decode the URL-encoded slug
  const parsedSlug = decodeURIComponent(slug);

  // Get the Payload CMS instance with Hot Module Replacement support
  const payload = await getPayloadHMR({ config: configPromise });

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
