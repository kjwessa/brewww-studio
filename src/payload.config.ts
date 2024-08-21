import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Work } from "./collections/Work";
import { Clients } from "./collections/Clients";
import { BlogPosts } from "./collections/BlogPosts";
import { BlogCategories } from "./collections/BlogCategories";
import { Services } from "./collections/Services";
import { Testimonials } from "./collections/Testimonials";
import { Location } from "./collections/Locations";
import { Results } from "./collections/Results";
import { Pages } from "./collections/Pages";
import { Header } from "./globals/Header";
import { Footer } from "./globals/Footer";
import { Playground } from "./collections/Playground";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Ensure required environment variables are defined
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;
if (!PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET environment variable is not defined");
}

const DATABASE_URI = process.env.DATABASE_URI;
if (!DATABASE_URI) {
  throw new Error("DATABASE_URI environment variable is not defined");
}

const CLOUDFLARE_BUCKET = process.env.CLOUDFLARE_BUCKET;
if (!CLOUDFLARE_BUCKET) {
  throw new Error("CLOUDFLARE_BUCKET environment variable is not defined");
}

const CLOUDFLARE_ACCESS_KEY_ID = process.env.CLOUDFLARE_ACCESS_KEY_ID;
if (!CLOUDFLARE_ACCESS_KEY_ID) {
  throw new Error(
    "CLOUDFLARE_ACCESS_KEY_ID environment variable is not defined",
  );
}

const CLOUDFLARE_SECRET_ACCESS_KEY = process.env.CLOUDFLARE_SECRET_ACCESS_KEY;
if (!CLOUDFLARE_SECRET_ACCESS_KEY) {
  throw new Error(
    "CLOUDFLARE_SECRET_ACCESS_KEY environment variable is not defined",
  );
}

const CLOUDFLARE_ENDPOINT = process.env.CLOUDFLARE_ENDPOINT;
if (!CLOUDFLARE_ENDPOINT) {
  throw new Error("CLOUDFLARE_ENDPOINT environment variable is not defined");
}

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Media,
    Pages,
    BlogPosts,
    BlogCategories,
    Work,
    Playground,
    Services,
    Clients,
    Testimonials,
    Location,
    Results,
    Users,
  ],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: "media",
        },
      },
      bucket: CLOUDFLARE_BUCKET,
      config: {
        credentials: {
          accessKeyId: CLOUDFLARE_ACCESS_KEY_ID,
          secretAccessKey: CLOUDFLARE_SECRET_ACCESS_KEY,
        },
        region: "auto",
        endpoint: CLOUDFLARE_ENDPOINT,
        forcePathStyle: true,
      },
    }),
    seoPlugin({
      collections: ["work"],
      uploadsCollection: "media",
      fieldOverrides: {
        title: { required: false },
        description: { required: false },
        image: { required: false },
      },
    }),
  ],
});
