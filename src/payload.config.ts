import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

//* Import Plugins
import { s3Storage } from "@payloadcms/storage-s3";
// import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
// import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

//* Import Collections
import { Users } from "./payload/collections/Users/config";
import { Media } from "./payload/collections/Media/config";
import { Work } from "./payload/collections/Work/config";
import { Clients } from "./payload/collections/Clients/config";
import { BlogPosts } from "./payload/collections/Posts/config";
import { BlogCategories } from "./payload/collections/Categories/config";
import { Services } from "./payload/collections/Services/config";
import { Testimonials } from "./payload/collections/Testimonials/config";
import { Location } from "./payload/collections/Locations/config";
import { Results } from "./payload/collections/Results/config";
import { Pages } from "./payload/collections/Pages/config";
import { Playground } from "./payload/collections/Play/config";
import { FAQ } from "./payload/collections/FAQ/config";
import { Page, Post } from "src/payload-types";

//* Import Globals
import { Header } from "./payload/globals/Header/index";
import { Footer } from "./payload/globals/Footer/index";

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
    FAQ,
    Clients,
    Testimonials,
    Location,
    Results,
    Users,
  ],
  globals: [Header, Footer],
  editor: lexicalEditor({}),
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
        [Media.url]: {
          disablePayloadAccessControl: true,
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
    // cloudStorage({
    //   collections: {
    //     media: {
    //       prefix: "media",
    //       adapter: s3Adapter({
    //         config: {
    //           credentials: {
    //             accessKeyId: CLOUDFLARE_ACCESS_KEY_ID,
    //             secretAccessKey: CLOUDFLARE_SECRET_ACCESS_KEY,
    //           },
    //           region: "auto",
    //           endpoint: CLOUDFLARE_ENDPOINT,
    //         },
    //         bucket: CLOUDFLARE_BUCKET,
    //       }),
    //     },
    //   },
    // }),
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
