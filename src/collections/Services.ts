import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      admin: {
        description: "add a cool name here",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        description: "add a cool slug",
        position: "sidebar",
      },
    },
  ],
};
