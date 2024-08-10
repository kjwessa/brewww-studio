import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: false,
    },
  ],
};
