const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://brewww.studio'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  autoLastmod: true,
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/landing/*', '/theme/*'],
  generateIndexSitemap: false,
  generateSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
}
