import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const BlogPosts: CollectionConfig = {
  slug: "posts",

  //* Collection Fields
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Post Title",
              required: true,
              admin: {
                description:
                  "The name of the article as it appears around the site.",
              },
            },
            {
              name: "imageMain",
              type: "upload",
              relationTo: "media",
              label: "Main Image",
              required: false,
              admin: {
                description:
                  "The main image of the article that appears on the page and in the list of posts.",
              },
            },
            {
              name: "content",
              type: "richText",
              label: "Main Content",
              required: false,
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
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
      name: "publishedDate",
      type: "date",
      required: true,
      label: "Published Date",
      admin: {
        description:
          "The date the article was published. This is used to sort the articles.",
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "readTime",
      type: "number",
      required: false,
      label: "Read Time",
      admin: {
        description:
          "The estimated time it takes to read the article in minutes.",
        position: "sidebar",
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
        description:
          "Add the post category here. This is used to group the articles.",
      },
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
    description:
      "Writing brings clarity. Writing is a way to make sense of the world.",
    defaultColumns: ["name", "publishedDate", "updatedAt"],
    group: "Blog Posts",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 100,
      limits: [25, 50, 100],
    },
    useAsTitle: "name",
  },
  defaultSort: "-publishedDate",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
