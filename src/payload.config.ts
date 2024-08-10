import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

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

const S3_BUCKET = process.env.S3_BUCKET;
if (!S3_BUCKET) {
  throw new Error("S3_BUCKET environment variable is not defined");
}

const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID;
if (!S3_ACCESS_KEY_ID) {
  throw new Error("S3_ACCESS_KEY_ID environment variable is not defined");
}

const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
if (!S3_SECRET_ACCESS_KEY) {
  throw new Error("S3_SECRET_ACCESS_KEY environment variable is not defined");
}

const S3_REGION = process.env.S3_REGION;
if (!S3_REGION) {
  throw new Error("S3_REGION environment variable is not defined");
}

const S3_ENDPOINT = process.env.S3_ENDPOINT;
if (!S3_ENDPOINT) {
  throw new Error("S3_ENDPOINT environment variable is not defined");
}

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
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
      bucket: S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: S3_ACCESS_KEY_ID,
          secretAccessKey: S3_SECRET_ACCESS_KEY,
        },
        region: S3_REGION,
        endpoint: S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ],
});
