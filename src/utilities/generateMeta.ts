import type { Metadata } from 'next'

import type { Page, Post } from '@/payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'

/**
 * Generates metadata for Next.js pages based on Payload CMS document data
 * @param args Object containing the Payload document (Page or Post)
 * @returns Next.js Metadata object
 */
export const generateMeta = async (args: { doc: Page }): Promise<Metadata> => {
  const { doc } = args || {}

  // Construct the full image URL if meta.image exists and has a URL
  // Prepends the SERVER_URL to make the image URL absolute
  const ogImage =
    doc?.meta?.image &&
    typeof doc.meta.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  // Generate the page title
  // If meta.title exists, append the site name, otherwise use default
  const title = doc?.meta?.title ? doc.meta.title + ' | Brewww Studio' : 'Brewww Studio'

  // Return Next.js metadata object
  return {
    // Set meta description from document
    description: doc?.meta?.description || undefined,

    // Generate OpenGraph metadata
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      // Include OpenGraph image if available
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      // Generate URL from slug array or fallback to root
      url: doc?.slug || '/',
    }),
    title,
  }
}
//TODO Add Posts back in later