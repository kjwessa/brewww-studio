// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/preview/",
          "/*?preview=true",
          "/api-docs/",
          "/*.json$",
          "/*/_next/*",
          "/cdn-cgi/",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
    ],
    sitemap: "https://brewww.studio/sitemap.xml",
    host: "https://brewww.studio",
  };
}
