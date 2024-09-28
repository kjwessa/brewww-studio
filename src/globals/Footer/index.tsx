import type { GlobalConfig } from "payload";
import { isAdmin } from "@access/isAdmin";
export const Footer: GlobalConfig = {
  slug: "footer",

  //* Admin Settings
  access: {
    read: () => true,
    update: isAdmin,
  },

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
};
