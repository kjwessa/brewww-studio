import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
  },
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
};
