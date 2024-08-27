import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const Pages: CollectionConfig = {
  slug: "pages",

  //* Collection Fields
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      admin: {
        description: "The internal name of the page",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
        description: "The slug goes here.",
      },
    },
    {
      name: "layout",
      type: "blocks",
      label: "Layout",
      required: false,
      blocks: [],
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
    useAsTitle: "name",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
