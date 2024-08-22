import type { CollectionConfig } from "payload";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const BlogPosts: CollectionConfig = {
  slug: "posts",

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "name",
              type: "text",
              label: "Post Title",
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
              name: "content",
              type: "richText",
              label: "Main Content",
              required: false,
            },
          ],
          label: "Content",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaTitleField({
              hasGenerateFn: true,
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
  ],
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Post",
    plural: "Posts",
  },
};
