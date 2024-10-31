import { CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: "/blog",
  pages: "",
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const prefix = collectionPrefixMap[collection] || "";
  const actualPath = prefix ? `${prefix}/${slug}` : `/${slug}`;

  const params = {
    slug,
    collection,
    path: actualPath,
  };

  const encodedParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value);
  });

  return `/next/preview?${encodedParams.toString()}`;
};
