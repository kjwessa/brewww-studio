import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { slugField } from "@/fields/slug";
import { revalidatePost } from "./hooks/revalidatePost";

import { seoTab } from "@/fields/seoFields";
import { generatePreviewPath } from "@root/utilities/generatePreviewPath";

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
                    enabledHeadingSizes: ["h2", "h3", "h4"],
                  }),
                  BlocksFeature({
                    blocks: [],
                  }),
                ],
              }),
              required: true,
            },
          ],
        },
        seoTab,
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    ...slugField(),
    {
      name: "publishedOn",
      type: "date",
      required: true,
      label: "Published On",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        "not started",
        "needs rewrite",
        "needs polish",
        "needs photos",
        "ready",
      ],
      defaultValue: "not started",
      label: "Status",
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "readTime",
      type: "number",
      required: true,
      label: "Read Time",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      type: "relationship",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "categories",
      required: true,
    },
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
  ],

  //* Admin Settings

  admin: {
    description:
      "Writing brings clarity. Writing is a way to make sense of the world.",
    defaultColumns: ["title", "status", "publishedOn", "updatedAt", "featured"],
    group: "Blog Posts",
    listSearchableFields: ["title"],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "posts",
        });

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "posts",
      });

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
    },

    pagination: {
      defaultLimit: 100,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },

  defaultSort: "-publishedOn",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
  hooks: {
    afterChange: [revalidatePost],
  },
};
