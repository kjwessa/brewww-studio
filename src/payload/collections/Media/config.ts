import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  //* Collection Fields
  fields: [
    {
      name: "title",
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
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title", "altText, url"],
  },
  access: {
    read: () => true,
  },
  upload: true,
};
