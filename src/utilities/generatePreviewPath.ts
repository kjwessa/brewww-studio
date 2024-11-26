import { CollectionSlug } from "payload";

/**
 * Maps collection slugs to their corresponding URL prefixes
 * Used to generate the correct preview paths for different content types
 */
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  // work: "/work",     // Work items are prefixed with /work
  // posts: "/journal", // Blog posts are prefixed with /journal
  // pages: "",         // Pages use their slug directly without a prefix
};

/**
 * Props for generating a preview path
 * @property collection - The collection type (work, posts, or pages)
 * @property slug - The document's slug/URL path
 */
type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
};

/**
 * Generates a preview URL for Payload CMS documents
 * 
 * @example
 * // Returns "/next/preview?slug=my-post&collection=posts&path=/journal/my-post"
 * generatePreviewPath({ collection: "posts", slug: "my-post" })
 * 
 * @param collection - The collection type (work, posts, or pages)
 * @param slug - The document's slug
 * @returns A preview URL with encoded parameters
 */
export const generatePreviewPath = ({ collection, slug }: Props) => {
  // Combine the collection prefix with the slug to create the full path
  const path = `${collectionPrefixMap[collection]}/${slug}`;

  // Parameters needed for the preview functionality
  const params = {
    slug,
    collection,
    path,
  };

  // Create URLSearchParams object for proper URL encoding
  const encodedParams = new URLSearchParams();

  // Add each parameter to the URLSearchParams object
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value);
  });

  // Return the complete preview URL
  return `/next/preview?${encodedParams.toString()}`;
};

