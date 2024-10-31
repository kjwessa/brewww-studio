// React Imports
import type { MetadataRoute } from "next";
import { unstable_cache } from "next/cache";

// Payload Imports
import payload from "payload";
import { getConfig } from "@/utilities/config";

async function fetchContent() {
  try {
    // Try to make a simple query to check if Payload is initialized
    await payload.find({
      collection: "posts",
      limit: 1,
    });
  } catch (error) {
    // If error occurs, initialize Payload
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      mongoURL: process.env.MONGODB_URI,
    });
  }

  const [posts, services] = await Promise.all([
    payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      limit: 1000,
    }),
    payload.find({
      collection: "services",
      where: {
        status: {
          equals: "published",
        },
      },
      limit: 1000,
    }),
  ]);

  return { posts, services };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = getConfig();
  const { siteUrl, isDevelopment } = config;

  // Don't generate sitemap in development
  if (isDevelopment) {
    return [];
  }

  const content = await unstable_cache(
    async () => fetchContent(),
    ["sitemap-content"],
    {
      revalidate: 3600,
      tags: ["sitemap"],
    },
  )();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Add dynamic content
  content.posts.docs.forEach((post) => {
    sitemap.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  content.services.docs.forEach((service) => {
    sitemap.push({
      url: `${siteUrl}/service/${service.slug}`,
      lastModified: new Date(service.updatedAt),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  });

  return sitemap;
}
