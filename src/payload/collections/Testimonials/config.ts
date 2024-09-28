import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";

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
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
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
              label: "Full Testimonial",
              required: true,
              admin: {
                description: "Add the full testimonial content here. ",
              },
            },
          ],
        },
        {
          label: "Meta",
          fields: [
            {
              name: "brand",
              type: "relationship",
              relationTo: "brands",
              required: true,
              hasMany: false,
              unique: true,
              admin: {
                position: "sidebar",
                description: "Select the client that left the testimonial.",
              },
            },
            {
              name: "author",
              type: "text",
              label: "Testimonial Author",
              unique: true,
              required: true,
              admin: {
                description:
                  "Add the name of the person that left the testimonial",
              },
            },
          ],
        },
      ],
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
