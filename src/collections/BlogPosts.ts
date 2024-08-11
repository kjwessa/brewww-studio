import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: false,
      admin: {
        description: "Add a cool name here",
      },
    },
    {
      name: "description",
      type: "text",
      label: "Meta Description",
      required: false,
      admin: {
        description: "Add a cool description here. ",
      },
    },
    {
      name: "imageMain",
      type: "upload",
      relationTo: "media",
      label: "Main Image",
      required: false,
      admin: {
        description: "Add a cool image here.",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: false,
      admin: {
        position: "sidebar",
        description: "Add the slug here",
      },
    },
    {
      name: "postedOn",
      type: "date",
      admin: {
        description: "Add a cool date here",
        position: "sidebar",
        date: {
          displayFormat: "dayAndTime",
        },
      },
    },
  ],
};
