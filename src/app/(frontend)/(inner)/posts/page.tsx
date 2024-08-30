import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    sort: "-publishedDate",
  });
  return (
    <div className="pb-24 pt-24">
      <div className="container mx-auto mb-16">
        <h1 className="text-3xl">Posts</h1>
        <div>
          {posts.docs.map((post: any) => {
            return (
              <Link href={`/posts/${post.slug}`} key={post.id}>
                <div className="mb-2">
                  <h2 className="text-3xl">{post.name}</h2>
                  <p>{post.slug}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
