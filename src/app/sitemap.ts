import type { MetadataRoute } from 'next'

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

// Revalidate every 6 hours (21600 seconds)
export const revalidate = 21600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicContent = await Promise.all(
    Object.entries(config.collections).map(async ([_, collection]) => {
      try {
        const { docs } = await fetch(
          `${config.serverUrl}/api/${collection.endpoint}?where[_status][equals]=published&limit=0`,
          {
            // Use stale-while-revalidate caching
            next: {
              revalidate: 21600, // Cache for 6 hours
              tags: ['sitemap', `collection-${collection.endpoint}`], // Tag-based invalidation
            },
          },
        ).then((res) => res.json())
        return { docs, ...collection }
      } catch (error) {
        console.error(`Error fetching ${collection.endpoint}:`, error)
        return { docs: [], ...collection }
      }
    }),
  )

  const sitemapData: MetadataRoute.Sitemap = [
    // Static routes
    ...config.staticRoutes.map(({ path, priority }) => ({
      url: `${config.serverUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority,
    })),

    // Dynamic routes
    ...dynamicContent.flatMap(({ docs, prefix, priority }) =>
      docs.map((doc: any) => ({
        url: `${config.serverUrl}${prefix}${doc.slug}`,
        lastModified: new Date(doc.updatedAt).toISOString(),
        changeFrequency: 'weekly' as const,
        priority,
      })),
    ),
  ]

  return sitemapData
}
