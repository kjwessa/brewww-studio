import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

/**
 * Fetches a single global document from Payload by its slug
 * @param slug - The slug of the global to find
 * @param depth - How many levels of relationships to populate (defaults to 0)
 * @returns The global document
 */
async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

/**
 * Creates a cached version of getGlobal using Next.js unstable_cache
 * @param slug - The global slug to look up
 * @param depth - How many levels of relationships to populate (defaults to 0)
 * @returns A cached function that returns the global document
 * 
 * The cache is tagged with `global_${slug}` for targeted revalidation
 * Example tag: 'global_header' or 'global_footer'
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(
    async () => getGlobal(slug, depth),
    [slug],
    {
      tags: [`global_${slug}`],
    }
  )
