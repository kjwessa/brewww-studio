import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { slugField } from "@/fields/slug";
import { revalidatePost } from "./hooks/revalidatePost";
import { MediaBlock } from "@/blocks/MediaBlock/config";
import { Code } from "@/blocks/Code/config";
import { Banner } from "@/blocks/Banner/config";
import { CallToAction } from "@/blocks/CallToAction/config";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

import {
  BlocksFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const BlogPosts: CollectionConfig = {
  slug: "posts",

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Post Title",
      unique: true,
      required: true,
      admin: {
        description: "The title of the article as it appears around the site.",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Post Tagline",
      required: false,
      admin: {
        description:
          "The tagline of the article as it appears around the site.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Post Description",
      required: false,
      admin: {
        description:
          "The description of the article as it appears around the site.",
      },
    },
    {
      name: "imageMain",
      type: "upload",
      relationTo: "media",
      label: "Main Image",
      required: true,
      admin: {
        description:
          "The main image of the article that appears on the page and in the list of posts.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
              label: "Content",
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HeadingFeature({
                    enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
                  }),
                  BlocksFeature({
                    blocks: [MediaBlock, Banner, Code, CallToAction],
                  }),
                ],
              }),
              required: true,
            },
          ],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [
            {
              name: "relatedPosts",
              type: "relationship",
              admin: {
                position: "sidebar",
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              relationTo: "posts",
            },
            {
              name: "categories",
              type: "relationship",
              admin: {
                position: "sidebar",
                description:
                  "Add the post categories here. This is used to group the articles.",
              },
              hasMany: true,
              relationTo: "categories",
              required: true,
            },
            {
              name: "readTime",
              type: "number",
              required: true,
              label: "Read Time",
              admin: {
                description:
                  "The estimated time it takes to read the article in minutes. Every 200 words is approximately one minute.",
                position: "sidebar",
              },
            },
          ],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
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
          ],
        },
      ],
    },
    ...slugField(),
    {
      name: "publishedAt",
      type: "date",
      required: true,
      label: "Published At",
      admin: {
        description:
          "The date the article was published. This is used to sort the articles.",
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],

  //* Admin Settings

  admin: {
    description:
      "Writing brings clarity. Writing is a way to make sense of the world.",
    defaultColumns: ["title", "imageMain", "publishedAt", "updatedAt"],
    group: "Blog Posts",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 100,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },

  defaultSort: "-publishedAt",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  hooks: {
    afterChange: [revalidatePost],
  },
};
