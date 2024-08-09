import type { CollectionConfig } from "payload";

export const Work: CollectionConfig = {
  slug: "work",
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
      admin: { position: "sidebar" },
    },
  ],
};
