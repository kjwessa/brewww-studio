import type { Block } from "payload";

export const MediaTest: Block = {
  slug: "media-test",
  fields: [
    {
      name: "text",
      type: "text",
      label: "Text",
      required: true,
    },
  ],
};
