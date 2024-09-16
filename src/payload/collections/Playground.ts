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

export const Playground: CollectionConfig = {
  slug: "play",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the Playground case study here.",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: false,
      admin: { position: "sidebar" },
    },
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "Content",
          fields: [
            {
              name: "shortPitch",
              type: "text",
              label: "Tagline",
              required: false,
            },
            {
              name: "thumbnail",
              type: "upload",
              label: "Thumbnail",
              required: false,
              relationTo: "media",
              admin: {
                description:
                  "This image appears on the PlayCard thumbnail images.",
              },
            },
          ],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [
            {
              name: "relatedPlaygrounds",
              type: "relationship",
              label: "Related Playgrounds",
              admin: {
                position: "sidebar",
                description: "Add the related playgrounds here.",
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              relationTo: "play",
            },
          ],
        },
        {
          name: "seo",
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
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
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
    description: "Interior Brewww projects",
    defaultColumns: ["title", "updatedAt"],
    group: "Portfolio",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Playground",
    plural: "Playground",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
