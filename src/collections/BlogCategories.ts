import { CollectionConfig } from "payload";

export const BlogCategories: CollectionConfig = {
  slug: "categories",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", label: "Name", required: false },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: false,
      admin: {
        position: "sidebar",
        description: "Add a cool slug here",
      },
    },
  ],
};
