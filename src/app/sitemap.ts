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

type SitemapEntry = {
  url: string
  lastModified: string
  changeFrequency: 'weekly'
  priority: number
}

// Site-specific configuration
const config = {
  serverUrl: process.env.SITE_URL || 'https://brewww.studio',
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  timeout: 5000, // 5 seconds
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

// Helper function to fetch with retry logic
async function fetchWithRetry(
  url: string, 
  options: RequestInit, 
  retries: number = config.maxRetries
): Promise<Response> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), config.timeout)

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, config.retryDelay))
      return fetchWithRetry(url, options, retries - 1)
    }

    return response
  } catch (error) {
    if (retries > 0 && error instanceof Error && error.name !== 'AbortError') {
      await new Promise(resolve => setTimeout(resolve, config.retryDelay))
      return fetchWithRetry(url, options, retries - 1)
    }
    throw error
  }
}

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicContent = await Promise.all(
    Object.entries(config.collections).map(async ([_, collection]) => {
      try {
        const apiUrl = formatUrl(config.serverUrl, `/api/${collection.endpoint}?where[_status][equals]=published&limit=100`)
        if (!apiUrl) return { docs: [], ...collection }

        const response = await fetchWithRetry(
          apiUrl,
          {
            headers: {
              'Accept': 'application/json',
              'Cache-Control': 'no-cache',
            },
            next: {
              revalidate: 3600,
              tags: ['sitemap', `collection-${collection.endpoint}`],
            },
          }
        )

        if (!response.ok) {
          console.error(
            `Failed to fetch ${collection.endpoint}: ${response.status}`,
            `URL: ${apiUrl}`,
            await response.text()
          )
          return { docs: [], ...collection }
        }

        const data = await response.json() as PayloadResponse<Document>
        if (!data?.docs || !Array.isArray(data.docs)) {
          console.error(`Invalid response format for ${collection.endpoint}:`, data)
          return { docs: [], ...collection }
        }

        console.log(`Successfully fetched ${data.docs.length} items from ${collection.endpoint}`)
        return {
          docs: data.docs,
          ...collection,
        }
      } catch (error) {
        console.error(`Error fetching ${collection.endpoint}:`, error)
        return { docs: [], ...collection }
      }
    }),
  )

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Static routes
    ...config.staticRoutes.map(({ path, priority }): MetadataRoute.Sitemap[number] => {
      const url = formatUrl(config.serverUrl, path)
      if (!url) return {
        url: `${config.serverUrl}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority,
      }
      return {
        url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority,
      }
    }),

    // Dynamic routes
    ...dynamicContent.flatMap(
      ({ docs, prefix, priority }) =>
        (docs || []).map((doc: Document): MetadataRoute.Sitemap[number] => {
          const url = formatUrl(config.serverUrl, `${prefix}${doc?.slug || ''}`)
          return {
            url: url || `${config.serverUrl}${prefix}${doc?.slug || ''}`,
            lastModified: new Date(doc?.updatedAt || Date.now()).toISOString(),
            changeFrequency: 'weekly',
            priority,
          }
        })
    ),
  ]

  return sitemapEntries
}
