import { withPayload } from "@payloadcms/next/withPayload";

if (!process.env.CLOUDFLARE_ENDPOINT) {
  throw new Error(
    "CLOUDFLARE_ENDPOINT is not set in the environment variables",
  );
}

const cloudflareHostname = new URL(process.env.CLOUDFLARE_ENDPOINT).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", cloudflareHostname],
  },
};

export default withPayload(nextConfig);
