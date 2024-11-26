// import configPromise from '@payload-config'
// // Using getPayload instead of getPayloadHMR since we want to maintain
// // a single connection pool in production
// import { getPayload } from 'payload'
// import { unstable_cache } from 'next/cache'

// /**
//  * Fetches all redirects from the Payload CMS
//  * @param depth - The depth of relationships to populate (default: 1)
//  * @returns Array of redirect documents
//  */
// export async function getRedirects(depth = 1) {
//   // Initialize Payload with our config
//   // Note: getPayload maintains connection pooling unlike getPayloadHMR
//   const payload = await getPayload({ config: configPromise })

//   // Fetch all redirects without pagination
//   // This allows us to get all redirects in a single query
//   const { docs: redirects } = await payload.find({
//     collection: 'redirects',
//     depth,
//     limit: 0, // No limit to get all redirects
//     pagination: false,
//   })

//   return redirects
// }

// /**
//  * Returns a cached version of getRedirects using Next.js unstable_cache
//  * 
//  * Benefits:
//  * - Reduces database queries
//  * - Improves response times
//  * - Cache invalidates when 'redirects' tag is revalidated
//  * 
//  * @returns Cached function to get redirects
//  */
// export const getCachedRedirects = () =>
//   unstable_cache(
//     async () => getRedirects(),
//     ['redirects'], // Cache key
//     {
//       tags: ['redirects'], // For cache invalidation
//     }
//   )
