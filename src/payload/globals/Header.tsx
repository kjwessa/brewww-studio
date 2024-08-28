import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",

  //* Global Fields
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "logo",
      required: true,
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

  //* Admin Settings
  access: {
    read: () => true,
  },
};
