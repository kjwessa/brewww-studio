import type { Block } from "payload";

export const Cover: Block = {
  slug: "cover",
  //* Fields
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
    },
  ],
  //* Admin Settings
  labels: {
    singular: "Cover",
    plural: "Covers",
  },
};
