import { Plugin } from 'payload'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
// import { Page, Post } from '@/payload-types'
import { s3Storage } from '@payloadcms/storage-s3'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

//* Import Hooks
import { revalidateRedirects } from '@/hooks/revalidateRedirects'

// const generateTitle: GenerateTitle<Page | Post> = ({ doc }: { doc: any }) => {
//   return doc?.title ? `${doc.title} | Brewww Studio` : 'Brewww Studio '
// }

// const generateURL: GenerateURL<Page | Post> = ({ doc }: { doc: any }) => {
//   if (!doc?.slug) return process.env.NEXT_PUBLIC_SERVER_URL!

//   // Add the /blog prefix for posts
//   if (doc.collection === 'posts') {
//     return `${process.env.NEXT_PUBLIC_SERVER_URL!}/blog/${doc.slug}`
//   }

//   return `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
// }

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  s3Storage({
    collections: {
      media: {
        prefix: 'media',
        disablePayloadAccessControl: true,
        generateFileURL: (file: { filename: string }) => {
          return `${process.env.CLOUDFLARE_PUBLIC_URL}/${file.filename}`
        },
      },
    },
    bucket: `${process.env.CLOUDFLARE_BUCKET}`,
    config: {
      credentials: {
        accessKeyId: `${process.env.CLOUDFLARE_ACCESS_KEY_ID}`,
        secretAccessKey: `${process.env.CLOUDFLARE_SECRET_ACCESS_KEY}`,
      },
      region: 'auto',
      endpoint: `${process.env.CLOUDFLARE_ENDPOINT}`,
      forcePathStyle: true,
    },
  }),

  seoPlugin({
    // generateTitle,
    // generateURL,
    uploadsCollection: 'media',
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
  }),
]
