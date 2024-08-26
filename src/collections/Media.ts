import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  fields: [
    {
      name: "name",
      type: "text",
      label: "File Name",
      required: false,
    },
    {
      name: "altText",
      type: "text",
      label: "Alt Text",
      required: false,
    },
  ],

  access: {
    read: () => true,
  },

  upload: true,
};
