import { getServerSideSitemap } from 'next-sitemap'
import type { ISitemapField } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getAllSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://brewww.studio'

    const dateFallback = new Date().toISOString()

    // Important static pages that should always be in sitemap
    const staticPages: ISitemapField[] = [
      {
        loc: `${SITE_URL}/about`,
        lastmod: dateFallback,
        changefreq: 'daily',
        priority: 0.8,
      },
      {
        loc: `${SITE_URL}/contact`,
        lastmod: dateFallback,
        changefreq: 'daily',
        priority: 0.8,
      },
      {
        loc: `${SITE_URL}/journal`,
        lastmod: dateFallback,
        changefreq: 'daily',
        priority: 0.7,
      },
      {
        loc: `${SITE_URL}/location`,
        lastmod: dateFallback,
        changefreq: 'daily',
        priority: 0.7,
      },
    ]

    // Fetch all content types in parallel
    const [pages, posts, locations] = await Promise.all([
      payload.find({
        collection: 'pages',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          _status: {
            equals: 'published',
          },
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
      payload.find({
        collection: 'posts',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          _status: {
            equals: 'published',
          },
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
      payload.find({
        collection: 'locations',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          _status: {
            equals: 'published',
          },
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ])

    // Transform pages
    const pagesSitemap: ISitemapField[] = pages.docs
      ? pages.docs
          .filter((page) => Boolean(page?.slug))
          .map((page) => ({
            loc: page?.slug === 'home' ? `${SITE_URL}/` : `${SITE_URL}/${page?.slug}`,
            lastmod: page.updatedAt || dateFallback,
            changefreq: 'daily',
            priority: 0.7,
          }))
      : []

    // Transform posts
    const postsSitemap: ISitemapField[] = posts.docs
      ? posts.docs
          .filter((post) => Boolean(post?.slug))
          .map((post) => ({
            loc: `${SITE_URL}/journal/${post?.slug}`,
            lastmod: post.updatedAt || dateFallback,
            changefreq: 'daily',
            priority: 0.6,
          }))
      : []

    // Transform locations
    const locationsSitemap: ISitemapField[] = locations.docs
      ? locations.docs
          .filter((location) => Boolean(location?.slug))
          .map((location) => ({
            loc: `${SITE_URL}/location/${location?.slug}`,
            lastmod: location.updatedAt || dateFallback,
            changefreq: 'daily',
            priority: 0.7,
          }))
      : []

    // Combine all sitemaps, filtering out any duplicates that might exist in both static and dynamic pages
    const allUrls = [...staticPages, ...pagesSitemap, ...postsSitemap, ...locationsSitemap]
    const uniqueUrls = Array.from(new Map(allUrls.map((item) => [item.loc, item])).values())

    return uniqueUrls
  },
  ['sitemap'],
  {
    tags: ['sitemap'],
    revalidate: 3600, // Revalidate every hour
  },
)

export async function GET() {
  const sitemap = await getAllSitemap()
  return getServerSideSitemap(sitemap)
}
