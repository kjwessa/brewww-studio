import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      admin: {
        description: "Add the name of the client here.",
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
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
    description: "Kind clients saying kind things.",
    defaultColumns: ["name", "callout", "author"],
    listSearchableFields: ["name", "callout", "author"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: "name",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
};
