import type { CollectionConfig } from "payload";
import { isAdmin } from "@access/isAdmin";
import { publishedOnly } from "@access/publishedOnly";

export const FAQ: CollectionConfig = {
  slug: "faq",

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Question",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      label: "Answer",
      required: true,
    },
  ],

  //* Admin Settings

  admin: {
    description: "Frequently asked questions",
    group: "Company",
    useAsTitle: "title",
  },
  labels: {
    singular: "FAQ",
    plural: "FAQ",
  },
};
