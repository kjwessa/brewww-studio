import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      admin: {
        description: "Add the title of the testimonial here.",
      },
    },
    {
      name: "callout",
      type: "textarea",
      label: "Callout",
      required: true,
      admin: {
        description: "Add a short excerpt of the testimonial here.",
      },
    },
    {
      name: "testimonial",
      type: "richText",
      label: "Testimonial",
      required: true,
      admin: {
        description: "Add the full testimonial content here. ",
      },
    },
    {
      name: "author",
      type: "text",
      label: "Testimonial Author",
      required: true,
      admin: {
        description: "Add the name of the person that left the testimonial",
      },
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      hasMany: false,
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
    description: "Kind clients saying kind things.",
    defaultColumns: ["title", "callout", "author"],
    group: "Portfolio",
    listSearchableFields: ["title", "callout", "author"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
