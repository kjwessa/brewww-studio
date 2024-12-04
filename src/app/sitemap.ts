import type { MetadataRoute } from 'next'

// Define types for API responses
interface PayloadResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

interface Document {
  id: string
  slug: string
  updatedAt: string
  _status: 'draft' | 'published'
}

interface CollectionConfig {
  endpoint: string
  prefix: string
  priority: number
}

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
    team: {
      endpoint: 'team',
      prefix: '/team/',
      priority: 0.8,
    },
  } satisfies Record<string, CollectionConfig>,
} as const

// Helper function to validate and format URLs
function formatUrl(base: string, path: string): string {
  try {
    const url = new URL(path, base)
    return url.toString()
  } catch (error) {
    console.error(`Invalid URL: ${base}${path}`, error)
    return `${base}${path}`
  }
}

async function fetchCollection(collection: CollectionConfig): Promise<Document[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL || process.env.SITE_URL}/api/${collection.endpoint}?where[_status][equals]=published&limit=100`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    )

    if (!response.ok) {
      console.warn(`Failed to fetch ${collection.endpoint}: ${response.status}`)
      return []
    }

    const data = await response.json() as PayloadResponse<Document>
    return data.docs || []
  } catch (error) {
    console.warn(`Error fetching ${collection.endpoint}:`, error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Start with static routes
  const sitemapEntries: MetadataRoute.Sitemap = config.staticRoutes.map(({ path, priority }) => ({
    url: formatUrl(config.serverUrl, path),
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Skip dynamic routes only during local production builds
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
    return sitemapEntries
  }

  try {
    // Fetch all collections in parallel
    const collectionPromises = Object.entries(config.collections).map(async ([_, collection]) => {
      const docs = await fetchCollection(collection)
      return docs.map((doc): MetadataRoute.Sitemap[number] => ({
        url: formatUrl(config.serverUrl, `${collection.prefix}${doc.slug}`),
        lastModified: new Date(doc.updatedAt).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: collection.priority,
      }))
    })

    const collectionResults = await Promise.all(collectionPromises)
    collectionResults.forEach(entries => {
      sitemapEntries.push(...entries)
    })
  } catch (error) {
    console.error('Error processing dynamic routes:', error)
  }

  return sitemapEntries
}
