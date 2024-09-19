import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",

  //* Global Fields
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "logo",
      required: false,
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

  //* Admin Settings
  access: {
    read: () => true,
  },
};
