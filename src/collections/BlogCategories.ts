import type { CollectionConfig } from "payload";

export const BlogCategories: CollectionConfig = {
  slug: "categories",
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  fields: [
    { name: "name", type: "text", label: "Category Name", required: true },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
        description: "Add a cool slug here",
      },
    },
  ],
};
