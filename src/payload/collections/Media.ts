import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  //* Collection Fields
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

  //* Admin Settings
  access: {
    read: () => true,
  },
  upload: true,
};


