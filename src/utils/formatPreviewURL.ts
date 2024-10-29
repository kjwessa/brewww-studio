import { generatePreviewPath } from "./generatePreviewPath";

export const formatPreviewURL = (collection: string, doc: any): string => {
  const path = generatePreviewPath({
    slug: typeof doc?.slug === "string" ? doc.slug : "",
    collection,
  });

  return `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?url=${path}&secret=${process.env.NEXT_PRIVATE_DRAFT_SECRET}`;
};
