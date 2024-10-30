// Next Imports
import { Metadata } from "next";
import React, { cache } from "react";
import { draftMode } from "next/headers";

// Payload Imports
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import type { Page as PageType } from "@/payload-types";

// Block Imports
import { RenderBlocks } from "@/blocks/RenderBlocks";

// Utilities
import { generateMeta } from "@/utilities/generateMeta";
import { PayloadRedirects } from "@/components/PayloadRedirects";

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{ slug?: string }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "home" } = await paramsPromise;
  const url = "/" + slug;

  let page: PageType | null;

  page = await queryPageBySlug({
    slug,
  });

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  const { layout } = page;
  return (
    <article className="bg-blue-500">
      <PayloadRedirects disableNotFound url={url} />
      {/* <RenderBlocks blocks={layout} /> */}
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise;
  const page = await queryPageBySlug({
    slug,
  });

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const parsedSlug = decodeURIComponent(slug);
  const payload = await getPayloadHMR({ config: configPromise });

  const result = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  });

  return result.docs?.[0] || null;
});
