import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";
import { slugField } from "@/fields/slug";
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
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: true,
      admin: {
        description: "Add the tagline for the playground here.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      admin: {
        description: "Add the description for the playground here.",
      },
    },
    // TODO: make sure the slug locks after being published
    ...slugField(),
    {
      name: "publishedAt",
      type: "date",
      required: true,
      label: "Published Date",
      admin: {
        description:
          "The date the Play Case Study was published. This is used to sort the Play Case Studies.",
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "Content",
          fields: [
            {
              name: "imageMain",
              type: "upload",
              relationTo: "media",
              label: "Main Image",
              required: true,
              admin: {
                description: "Add the main image for the playground here.",
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
    defaultColumns: ["title", "tagline", "publishedAt", "updatedAt"],
    group: "Portfolio",
    listSearchableFields: ["title", "tagline", "description"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Playground",
    plural: "Playground",
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        if (
          doc.publishedAt &&
          typeof doc.publishedAt === "object" &&
          "$date" in doc.publishedAt
        ) {
          doc.publishedAt = new Date(doc.publishedAt.$date);
        }
        return doc;
      },
    ],
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};