/**
 * @fileoverview Utility for generating preview URLs for Payload CMS collections.
 * Handles path generation and parameter encoding for the Next.js preview mode.
 */

import { CollectionSlug } from 'payload'

/**
 * Maps collection types to their URL prefixes.
 * - posts: Prefixed with '/posts'
 * - pages: No prefix (root-level URLs)
 */
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

/**
 * Parameters required for generating a preview path
 */
interface Props {
  /** The collection type (e.g., 'posts' or 'pages') */
  collection: keyof typeof collectionPrefixMap
  /** The slug of the content item */
  slug: string
}

/**
 * Generates a preview URL for Payload CMS content items.
 * Creates a Next.js preview URL with encoded parameters for accessing draft content.
 * 
 * @param {Props} options - The options for generating the preview path
 * @param {keyof typeof collectionPrefixMap} options.collection - Collection type
 * @param {string} options.slug - Content item slug
 * @returns {string} The complete preview URL with encoded parameters
 * 
 * @example
 * generatePreviewPath({ collection: 'posts', slug: 'my-blog-post' })
 * // Returns "/next/preview?slug=my-blog-post&collection=posts&path=/posts/my-blog-post"
 * 
 * generatePreviewPath({ collection: 'pages', slug: 'about' })
 * // Returns "/next/preview?slug=about&collection=pages&path=/about"
 */
export const generatePreviewPath = ({ collection, slug }: Props): string => {
  // Combine collection prefix with slug to create the full path
  const path = `${collectionPrefixMap[collection]}/${slug}`

  // Prepare parameters for the preview URL
  const params = {
    slug,
    collection,
    path,
  }

  // Encode parameters for URL-safe format
  const encodedParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `/next/preview?${encodedParams.toString()}`
}
