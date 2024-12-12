// Next Imports
import { Metadata } from 'next'
import React, { cache } from 'react'
import { draftMode } from 'next/headers'

// Payload Imports
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Page as PageType } from '@/payload-types'

// Block Imports
import { RenderBlocks } from '@/blocks/RenderBlocks'

// Utilities
import { generateMeta } from '@/utilities/generateMeta'
import { PayloadRedirects } from '@/components/PayloadRedirects'

// Generate static paths for all pages at build time
export async function generateStaticParams() {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    return []
  }

  // Initialize Payload CMS client
  const payload = await getPayload({ config: configPromise })

  // Fetch all published pages from the CMS
  const pages = await payload.find({
    collection: 'pages',
    draft: false, // Only get published pages
    limit: 1000, // Fetch up to 1000 pages
    overrideAccess: false, // Use default access control
  })

  // Transform page documents into path parameters
  const params = pages.docs
    ?.filter((doc) => {
      // Exclude the home page since it uses the root path
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      // Return slug parameter object for each page
      return { slug }
    })

  return params
}

// Type definition for page component props
type Args = {
  params: Promise<{ slug?: string }> // Slug parameter passed from dynamic route
}

// Main page component that handles dynamic routing based on slug parameter
export default async function Page({ params: paramsPromise }: Args) {
  // Extract slug from params, defaulting to 'home' if not provided
  const { slug = 'home' } = await paramsPromise
  // Construct the full URL path
  const url = '/' + slug

  // Declare page variable to store the fetched page data
  let page: PageType | null

  // Query the page data from Payload CMS using the slug
  page = await queryPageBySlug({
    slug,
  })

  // If no page is found, render the redirects component
  if (!page) {
    return <PayloadRedirects url={url} />
  }

  // Extract the layout blocks from the page data
  const { layout } = page
  return (
    <article className="bg-blue-500">
      {/* Handle any configured redirects, but don't show 404 */}
      <PayloadRedirects disableNotFound url={url} />
      {/* Render the page content blocks */}
      <RenderBlocks blocks={layout || []} />
    </article>
  )
}

// Generate metadata for the page based on the slug parameter
export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  // Extract slug from params, defaulting to 'home' if not provided
  const { slug = 'home' } = await paramsPromise

  // Query the page data using the slug
  const page = await queryPageBySlug({
    slug,
  })

  // Generate and return metadata using the page document
  return generateMeta({ doc: page })
}

// Cached function to query a page by its slug from the Payload CMS
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // Check if draft mode is enabled
  const { isEnabled: draft } = await draftMode()

  // Initialize Payload CMS client
  const payload = await getPayload({ config: configPromise })

  // Query the pages collection with specific parameters
  const result = await payload.find({
    collection: 'pages',
    draft, // Use draft version if draft mode is enabled
    limit: 1, // Only fetch one document
    overrideAccess: draft, // Override access control in draft mode
    where: {
      slug: {
        equals: slug, // Match the provided slug
      },
    },
  })

  // Return the first matching document or null if none found
  return result.docs?.[0] || null
})
