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
      required: true,
    },

    {
      name: "copyrightNotice",
      label: "Copyright Notice",
      type: "text",
      required: true,
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
