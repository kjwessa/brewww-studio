import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",

  //* Global Fields
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
      required: false,
    },
    {
      name: "nav",
      type: "array",
      label: "Navigation",
      required: false,
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
