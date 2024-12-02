import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Page, Post, Location } from '@/payload-types'

type PayloadDocument = Page | Post | Location

// Site-specific configuration
const config = {
  serverUrl: process.env.SITE_URL || 'https://brewww.studio',
  // Add static routes with their configurations
  staticRoutes: [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/location', priority: 0.9 },
    { path: '/journal', priority: 0.9 },
  ],
  // Dynamic content configuration
  collections: {
    pages: {
      endpoint: 'pages',
      prefix: '/',
      priority: 0.8,
    },
    locations: {
      endpoint: 'locations',
      prefix: '/location/',
      priority: 0.9,
    },
    blogPosts: {
      endpoint: 'posts',
      prefix: '/journal/',
      priority: 0.8,
    },
  },
} as const

// Helper function to validate and format URLs
function formatUrl(base: string, path: string): string {
  try {
    const url = new URL(path, base)
    return url.toString()
  } catch (error) {
    console.error(`Invalid URL: ${base}${path}`, error)
    return ''
  }
}

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Initialize Payload
    const payload = await getPayload({
      config: configPromise,
    })

    // Fetch all dynamic content in parallel using Payload's direct access
    const dynamicContent = await Promise.all(
      Object.entries(config.collections).map(async ([_, collection]) => {
        try {
          const docs = await payload.find({
            collection: collection.endpoint,
            where: {
              and: [
                {
                  _status: {
                    equals: 'published',
                  },
                },
                {
                  slug: {
                    exists: true,
                  },
                },
              ],
            },
            limit: 100,
          })

          return {
            docs: docs.docs || [],
            ...collection,
          }
        } catch (error) {
          console.error(`Error fetching ${collection.endpoint}:`, error)
          return { docs: [], ...collection }
        }
      })
    )

    const sitemapEntries: MetadataRoute.Sitemap = [
      // Static routes
      ...config.staticRoutes.map(({ path, priority }) => ({
        url: formatUrl(config.serverUrl, path) || `${config.serverUrl}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority,
      })),

      // Dynamic routes
      ...dynamicContent.flatMap(({ docs, prefix, priority }) =>
        (docs || [])
          .filter((doc): doc is PayloadDocument & { slug: string } => 
            typeof doc?.slug === 'string' && doc.slug.length > 0
          )
          .map((doc) => ({
            url: formatUrl(config.serverUrl, `${prefix}${doc.slug}`) || 
                 `${config.serverUrl}${prefix}${doc.slug}`,
            lastModified: new Date(doc?.updatedAt || Date.now()).toISOString(),
            changeFrequency: 'weekly' as const,
            priority,
          }))
      ),
    ]

    return sitemapEntries
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return only static routes if there's an error
    return config.staticRoutes.map(({ path, priority }) => ({
      url: formatUrl(config.serverUrl, path) || `${config.serverUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority,
    }))
  }
}
