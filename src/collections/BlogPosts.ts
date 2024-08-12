import { relationship } from "node_modules/payload/dist/fields/validations";
import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "posts",
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
      required: false,
      admin: {
        description: "Add a cool name here",
      },
    },
    {
      name: "seoDescription",
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
    {
      name: "seoKeywords",
      type: "text",
      label: "Keywords",
      required: false,
      admin: {
        description: "Add some cool keywords here",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      label: "Category",
      required: false,
    },
    {
      name: "content",
      type: "richText",
      label: "Main Content",
      required: false,
    },
  ],
};
