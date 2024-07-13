const fs = require("fs");
const path = require("path");

function generateSitemap() {
  const baseUrl = "https://brewww.studio";
  const staticPages = ["/"];

  const pages = [...staticPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `,
      )
      .join("")}
  </urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully");
}

generateSitemap();
