module.exports = {
  siteUrl: "https://brewww.studio",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://brewww.studio/sitemap.xml"],
  },
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Exclude /dev from the sitemap
    if (path === "/dev") {
      return null;
    }

    // Default priority and change frequency
    let priority = 0.7;
    let changefreq = "daily";

    // Custom settings for specific pages
    if (path === "/") {
      priority = 0.8;
      changefreq = "daily";
    } else if (path === "/contact") {
      priority = 0.6;
      changefreq = "monthly";
    }

    // Return custom sitemap fields
    return {
      loc: path,
      changefreq,
      priority,
    };
  },
};
