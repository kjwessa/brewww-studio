import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "logo",
      required: false,
    },
    {
      name: "nav",
      type: "array",
      label: "Navigation",
      fields: [
        { name: "label", label: "Label", type: "text", required: false },
        { name: "link", label: "Link", type: "text", required: false },
      ],
    },
    {
      name: "copyrightNotice",
      label: "Copyright Notice",
      type: "text",
      required: false,
      admin: {
        description: "Appears in the footer",
      },
    },
  ],
};
