import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

//* Import Plugins
import { s3Storage } from "@payloadcms/storage-s3";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

//* Import Collections
import { Users } from "./payload/collections/Users/index";
import { Media } from "./payload/collections/Media/index";
import { Work } from "./payload/collections/Work/index";
import { Clients } from "./payload/collections/Clients/index";
import { BlogPosts } from "./payload/collections/Posts/index";
import { BlogCategories } from "./payload/collections/Categories/index";
import { Services } from "./payload/collections/Services/index";
import { Testimonials } from "./payload/collections/Testimonials/index";
import { Location } from "./payload/collections/Locations/index";
import { Results } from "./payload/collections/Results/index";
import { Pages } from "./payload/collections/Pages/index";
import { Playground } from "./payload/collections/Playground/index";
import { Page, Post } from "src/payload-types";
//* Import Globals
import { Header } from "./payload/globals/Header";
import { Footer } from "./payload/globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateTitle: GenerateTitle<Page | Post> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Brewww Studio` : "Brewww Studio ";
};

const generateURL: GenerateURL<Page | Post> = ({ doc }) => {
  return doc?.slug
    ? `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
    : process.env.NEXT_PUBLIC_SERVER_URL!;
};

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
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
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
  editor: lexicalEditor({
    // features: ({ rootFeatures }) => {
    //   return [
    //     ...rootFeatures,
    //     BlocksFeature(),
    //     HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
    //   ];
    // },
  }),
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
      generateTitle,
      generateURL,
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
