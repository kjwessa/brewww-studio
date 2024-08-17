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
        { name: "label", label: "Label", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
  ],
};
