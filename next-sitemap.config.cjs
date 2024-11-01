const payload = require("payload");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://brewww.studio",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: [
    "/api/*",
    "/admin/*",
    "/test",
    "/home",
    "/services",
    "/services/*",
    "/contact",
    "/blog",
    "/play",
    "/work",
    "/product",
    "/work/*",
    "/why-brewww",
    "/clients",
    "/styles",
    "/faq",
    "/location",
    "/location/*",
    "/proposal",
    "/team/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};
