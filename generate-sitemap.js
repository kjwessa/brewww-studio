import fs from "fs";
import path from "path";

const pageConfig = {
  home: { changefreq: "weekly", priority: 1.0 },
};

function generateSitemap() {
  const baseUrl = "https://brewww.studio";
  const staticPages = [{ url: "/", config: pageConfig.home }];

  const pages = [...staticPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <changefreq>${page.config.changefreq}</changefreq>
        <priority>${page.config.priority}</priority>
      </url>
    `,
      )
      .join("")}
  </urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully");
}

generateSitemap();
