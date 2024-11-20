import type { MetadataRoute } from "next";

// Site-specific configuration
const config = {
  serverUrl: process.env.SITE_URL || 'https://brewww.studio',
  // Add static routes with their configurations
  staticRoutes: [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/location", priority: 0.9 },
  ],
  // Dynamic content configuration
  collections: {
    pages: {
      endpoint: "pages",
      prefix: "/",
      priority: 0.8,
    },
    locations: {
      endpoint: "locations",
      prefix: "/location/",
      priority: 0.9,
    },
  },
} as const;

// Revalidate every 12 hours
export const revalidate = 43200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicContent = await Promise.all(
    Object.entries(config.collections).map(async ([_, collection]) => {
      try {
        const { docs } = await fetch(
          `${config.serverUrl}/api/${collection.endpoint}?where[_status][equals]=published&limit=0`,
          {
            cache: "no-store",
            next: {
              tags: ["sitemap"],
            },
          },
        ).then((res) => res.json());
        return { docs, ...collection };
      } catch (error) {
        return { docs: [], ...collection };
      }
    }),
  );

  const sitemapData: MetadataRoute.Sitemap = [
    // Static routes
    ...config.staticRoutes.map((route) => ({
      url: `${config.serverUrl}${route.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),

    // Dynamic content
    ...dynamicContent.flatMap(({ docs, prefix, priority }) =>
      docs.map((doc) => ({
        url: `${config.serverUrl}${prefix}${doc.slug}`,
        lastModified: new Date(doc.updatedAt).toISOString(),
        changeFrequency: "weekly" as const,
        priority,
      })),
    ),
  ];

  return sitemapData;
}
