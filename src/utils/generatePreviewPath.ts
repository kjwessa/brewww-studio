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
type GeneratePreviewPathProps = {
  slug: string;
  collection: string;
};

/**
 * Generates a preview URL path for a given collection item
 * @param collection - The collection the item belongs to
 * @param slug - The slug of the specific item
 * @returns A preview URL with encoded parameters
 */
export const generatePreviewPath = ({
  slug,
  collection,
}: GeneratePreviewPathProps): string => {
  if (collection === "pages") {
    return `/${slug}`;
  }

  return `/${collection}/${slug}`;
};
