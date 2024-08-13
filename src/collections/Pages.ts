import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
  ],
};
