import type { MetadataRoute } from "next";

if (!process.env.SITE_URL) {
  throw new Error("SITE_URL environment variable is not defined");
}

// Site-specific configuration
const config = {
  serverUrl: process.env.SITE_URL,
  // Add static routes with their configurations
  staticRoutes: [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
  ],
  // Dynamic content configuration
  collections: {
    pages: {
      endpoint: "pages",
      prefix: "/",
      priority: 0.8,
    },
    // posts: {
    //   endpoint: "posts",
    //   prefix: "/journal/",
    //   priority: 1,
    // },
  },
} as const;

// Revalidate daily (every hour)
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Log when sitemap is generating
  console.log("Generating sitemap at:", new Date().toISOString());

  // Fetch all dynamic content in parallel
  const dynamicContent = await Promise.all(
    Object.entries(config.collections).map(async ([_, collection]) => {
      const { docs } = await fetch(
        `${config.serverUrl}/api/${collection.endpoint}?where[_status][equals]=published&limit=0`,
        {
          cache: "no-store", // Force fresh data
          next: {
            tags: ["sitemap"], // Add a tag for manual revalidation
          },
        },
      ).then((res) => res.json());
      return { docs, ...collection };
    }),
  );

  const sitemapData = [
    // Static routes
    ...config.staticRoutes.map((route) => ({
      url: `${config.serverUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),

    // Dynamic content
    ...dynamicContent.flatMap(({ docs, prefix, priority }) =>
      docs.map((doc) => ({
        changeFrequency: "monthly" as const,
        lastModified: doc.updatedAt,
        priority,
        url: `${config.serverUrl}${prefix}${doc.slug}`,
      })),
    ),
  ];

  // Log the generated sitemap data
  console.log(
    "Sitemap entries:",
    sitemapData.map((entry) => entry.url),
  );

  return sitemapData;
}
