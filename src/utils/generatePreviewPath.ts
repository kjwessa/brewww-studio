import { CollectionSlug } from "payload";

// TODO: Add the remaining collections

// Maps collection slugs to their corresponding URL prefixes
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: "/blog",
  work: "/work",
  team: "/team",
  services: "/services",
  pages: "", // No prefix for pages since they're at root level
};

// Props type for the generatePreviewPath function
type Props = {
  collection: keyof typeof collectionPrefixMap; // The collection type (e.g. 'posts', 'work')
  slug: string; // The slug of the specific document
};

/**
 * Generates a preview URL path for a given collection item
 * @param collection - The collection the item belongs to
 * @param slug - The slug of the specific item
 * @returns A preview URL with encoded parameters
 */
export const generatePreviewPath = ({ collection, slug }: Props) => {
  // Combine the collection prefix with the slug to create the full path
  const path = `${collectionPrefixMap[collection]}/${slug}`;

  // Create an object with all the parameters needed for the preview
  const params = {
    slug,
    collection,
    path,
  };

  // Create a URLSearchParams instance to properly encode the parameters
  const encodedParams = new URLSearchParams();

  // Add each parameter to the URLSearchParams instance
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value);
  });

  // Return the complete preview URL with encoded parameters
  return `/next/preview?${encodedParams.toString()}`;
};
