import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from "@/payload-types";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/blocks/RenderBlocks";

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
  let page: PageType | null;

  try {
    page = await queryPageBySlug({ slug });

    if (!page) {
      return notFound();
    }

    return (
      <article className="bg-blue-500">
        <RenderBlocks blocks={page.layout} />
      </article>
    );
  } catch (error) {
    return notFound();
  }
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug);

  try {
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

    if (result.docs?.[0]) {
      return result.docs[0];
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
});
