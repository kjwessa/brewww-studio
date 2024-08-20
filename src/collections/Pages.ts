import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
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
      label: "Name",
      type: "text",
      required: true,
      admin: {
        description: "The internal name of the page",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
        description: "The slug goes here.",
      },
    },
    {
      name: "layout",
      type: "blocks",
      label: "Layout",
      required: false,
      blocks: [],
    },
  ],
};
