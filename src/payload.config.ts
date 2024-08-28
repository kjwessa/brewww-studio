import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

//* Import Plugins
import { s3Storage } from "@payloadcms/storage-s3";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

//* Import Collections
import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Work } from "./payload/collections/Work";
import { Clients } from "./payload/collections/Clients";
import { BlogPosts } from "./payload/collections/BlogPosts";
import { BlogCategories } from "./payload/collections/BlogCategories";
import { Services } from "./payload/collections/Services";
import { Testimonials } from "./payload/collections/Testimonials";
import { Location } from "./payload/collections/Locations";
import { Results } from "./payload/collections/Results";
import { Pages } from "./payload/collections/Pages";
import { Playground } from "./payload/collections/Playground";

//* Import Globals
import { Header } from "./payload/globals/Header";
import { Footer } from "./payload/globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

//* Ensure required environment variables are defined
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

//* Build Configuration
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
      uploadsCollection: "media",
      fieldOverrides: {
        title: { required: false },
        description: { required: false },
        image: { required: false },
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
