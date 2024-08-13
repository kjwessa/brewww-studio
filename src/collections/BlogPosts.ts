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
      required: true,
      admin: {
        description: "Add a cool name here",
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
      name: "postedOn",
      type: "date",
      required: true,
      admin: {
        description: "Add a cool date here",
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
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
      name: "category",
      type: "relationship",
      relationTo: "categories",
      label: "Category",
      required: true,
      admin: {
        position: "sidebar",
        description: "Add the post category here. ",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "Main Content",
      required: false,
    },
  ],
};
