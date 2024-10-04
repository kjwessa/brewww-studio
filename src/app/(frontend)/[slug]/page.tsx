import configPromise from "@/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from "@/payload-types";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/blocks/RenderBlocks";

//* Function to generate static params for all pages except the index page
export async function generateStaticParams() {
  console.log("Starting generateStaticParams");
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    console.log("Payload instance created");

    const pages = await payload.find({
      collection: "pages",
      draft: false,
      limit: 1000, // Limit to 1000 pages
      overrideAccess: false,
    });
    console.log(`Found ${pages.docs?.length} pages`);

    const slugs = pages.docs
      ?.filter((doc) => doc.slug !== "home") // Exclude the home page
      .map(({ slug }) => slug); // Return an array of slugs
    console.log(`Generated ${slugs.length} slugs`);

    return slugs;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Default export for the Page component
export default async function Page({ params }: { params: { slug?: string } }) {
  const { slug = "home" } = await params;
  console.log(`Rendering page for slug: ${slug}`);
  let page: PageType | null;

  try {
    page = await queryPageBySlug({ slug });
    console.log(`Page data fetched for slug: ${slug}`);

    if (!page) {
      console.log(`Page not found for slug: ${slug}`);
      return notFound();
    }

    return (
      <article className="bg-blue-500">
        {/* Render the layout blocks for the page */}
        <RenderBlocks blocks={page.layout} />
      </article>
    );
  } catch (error) {
    console.error(`Error rendering page for slug ${slug}:`, error);
    return notFound();
  }
}

//* Function to query a page by its slug, wrapped in React's cache for performance
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  console.log(`Querying page for slug: ${slug}`);
  const parsedSlug = decodeURIComponent(slug);
  console.log(`Parsed slug: ${parsedSlug}`);

  try {
    const payload = await getPayloadHMR({ config: configPromise });
    console.log("Payload instance created for query");

    const result = await payload.find({
      collection: "pages",
      limit: 1, // Limit to one result
      where: {
        slug: {
          equals: parsedSlug, // Match the exact slug
        },
      },
    });
    console.log(`Query result:`, result);

    if (result.docs?.[0]) {
      console.log(`Page found for slug: ${parsedSlug}`);
      return result.docs[0];
    } else {
      console.log(`No page found for slug: ${parsedSlug}`);
      return null;
    }
  } catch (error) {
    console.error(`Error querying page for slug ${parsedSlug}:`, error);
    throw error;
  }
});
