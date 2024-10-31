import { z } from "zod";

const configSchema = z.object({
  siteUrl: z.string().url(),
  serverUrl: z.string().url(),
  isDevelopment: z.boolean(),
  isLive: z.boolean(),
});

export const getConfig = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  const config = {
    siteUrl: process.env.SITE_URL || "https://brewww.studio",
    serverUrl: isDevelopment
      ? process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"
      : process.env.SITE_URL || "https://brewww.studio",
    isDevelopment,
    isLive: process.env.NEXT_PUBLIC_IS_LIVE === "true",
  };

  return configSchema.parse(config);
};
