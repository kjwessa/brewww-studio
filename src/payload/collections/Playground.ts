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
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name",
              required: true,
            },
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
      admin: { position: "sidebar" },
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
    defaultColumns: ["name", "updatedAt"],
    group: "Portfolio",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50],
    },
    useAsTitle: "name",
  },
  defaultSort: "name",
  labels: {
    singular: "Playground",
    plural: "Playgrounds",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
