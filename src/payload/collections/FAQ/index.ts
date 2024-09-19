import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const FAQ: CollectionConfig = {
  slug: "faq",

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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    description: "Frequently asked questions",
    group: "Service",
    useAsTitle: "title",
  },
  labels: {
    singular: "FAQ",
    plural: "FAQ",
  },
};
