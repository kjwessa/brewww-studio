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

interface CollectionConfig {
  endpoint: string
  prefix: string
  priority: number
}

interface CollectionData extends CollectionConfig {
  docs: Document[]
}

// Site-specific configuration
const config = {
  serverUrl: process.env.SITE_URL || 'https://brewww.studio',
  maxRetries: 3,
  retryDelay: 2000, // 2 seconds
  timeout: 55000, // Increased to 55 seconds (just under Next.js 60s limit)
  revalidate: 3600, // 1 hour revalidation time
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
    return ''
  }
}

// Helper function to fetch with retry logic
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = config.maxRetries
): Promise<Response | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), config.timeout)

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: {
        revalidate: config.revalidate // Use the same revalidation time as the sitemap
      }
    })

    clearTimeout(timeoutId)

    if (!response.ok && retries > 0) {
      console.warn(`Retrying fetch for ${url}, attempt ${config.maxRetries - retries + 1}`)
      await new Promise(resolve => setTimeout(resolve, config.retryDelay))
      return fetchWithRetry(url, options, retries - 1)
    }

    return response
  } catch (error) {
    if (retries > 0 && error instanceof Error && error.name !== 'AbortError') {
      console.warn(`Error fetching ${url}, retrying...`, error)
      await new Promise(resolve => setTimeout(resolve, config.retryDelay))
      return fetchWithRetry(url, options, retries - 1)
    }
    console.warn(`Failed to fetch ${url} after ${config.maxRetries} attempts`)
    return null
  }
}

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Static routes first since they're immediate
    ...config.staticRoutes.map(({ path, priority }): MetadataRoute.Sitemap[number] => ({
      url: formatUrl(config.serverUrl, path) || `${config.serverUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority,
    })),
  ]

  // Process collections sequentially to avoid connection pool exhaustion
  for (const [collectionName, collection] of Object.entries(config.collections)) {
    try {
      const apiUrl = formatUrl(
        config.serverUrl,
        `/api/${collection.endpoint}?where[_status][equals]=published&limit=100`
      )
      
      if (!apiUrl) continue

      console.log(`Fetching ${collectionName}...`)
      const startTime = Date.now()
      
      const response = await fetchWithRetry(
        apiUrl,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      )

      // If fetch fails, continue with next collection
      if (!response) {
        console.log(`Skipping ${collectionName} due to fetch failure`)
        continue
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch ${collectionName}: ${response.status}`)
      }

      const data = await response.json() as PayloadResponse<Document>
      if (!data?.docs || !Array.isArray(data.docs)) {
        throw new Error(`Invalid response format for ${collectionName}`)
      }

      const fetchTime = Date.now() - startTime
      console.log(`Fetched ${data.docs.length} items from ${collectionName} in ${fetchTime}ms`)
      
      // Add entries for this collection
      const entries = data.docs.map((doc): MetadataRoute.Sitemap[number] => ({
        url: formatUrl(config.serverUrl, `${collection.prefix}${doc?.slug || ''}`) || 
             `${config.serverUrl}${collection.prefix}${doc?.slug || ''}`,
        lastModified: new Date(doc?.updatedAt || Date.now()).toISOString(),
        changeFrequency: 'weekly',
        priority: collection.priority,
      }))

      sitemapEntries.push(...entries)
      console.log(`Added ${entries.length} entries from ${collectionName} to sitemap`)
    } catch (error) {
      console.error(`Error processing ${collectionName}:`, error)
      // Continue with other collections even if one fails
      continue
    }
  }

  return sitemapEntries
}
