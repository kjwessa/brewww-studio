import type { Field } from 'payload'

export const LandingHero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'landing',
      options: [
        {
          label: 'Landing Hero',
          value: 'landing',
        },
        // Future hero types can be added here:
        // {
        //   label: 'Blog Hero',
        //   value: 'blog',
        // },
      ],
      required: true,
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      label: 'Hero Title',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'landing',
      },
    },
    {
      name: 'locationText',
      type: 'text',
      required: true,
      label: 'Location Text',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'landing',
      },
    },
    {
      name: 'descriptionText',
      type: 'textarea',
      required: true,
      label: 'Description Text',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'landing',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hero Image',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'landing',
      },
    },
  ],
}
