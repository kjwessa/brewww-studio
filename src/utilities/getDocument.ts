import type { Config } from "src/payload-types";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { unstable_cache } from "next/cache";

type Collection = keyof Config["collections"];

/**
 * Fetches a single document from a Payload collection by its slug
 * @param collection - The name of the collection to query
 * @param slug - The slug of the document to find
 * @param depth - How many levels of relationships to populate (defaults to 0)
 * @returns The first matching document or undefined
 */
async function getDocument(collection: Collection, slug: string, depth = 0) {
  const payload = await getPayload({ config: configPromise });

  const page = await payload.find({
    collection,
    depth,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return page.docs[0];
}

/**
 * Creates a cached version of getDocument using Next.js unstable_cache
 * @param collection - The collection name to query
 * @param slug - The slug to look up
 * @returns A cached function that returns the document
 * 
 * The cache is tagged with `${collection}_${slug}` for targeted revalidation
 * Example tag: 'pages_about-us' or 'posts_my-first-post'
 */
export const getCachedDocument = (collection: Collection, slug: string) =>
  unstable_cache(
    async () => getDocument(collection, slug),
    [collection, slug],
    {
      tags: [`${collection}_${slug}`],
    },
  );
