import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { Post } from "@/payload-types";
import { PostSlider } from "@/components/PostSlider";

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const postsFeatured = await payload.find<Post>({
    collection: "posts",
    limit: 10,
    sort: "-publishedDate",
  });

  return (
    <div>
      <section className="w-full overflow-hidden bg-zinc-900 pb-14 pt-44 text-lg text-white md:pb-16 md:pt-60 min-[1250px]:pb-16 min-[1250px]:pt-64 min-[1900px]:pt-80">
        <div className="mx-auto max-w-[87.50rem] px-6 md:px-10 lg:px-20">
          <h1 className="mb-6 text-[4.63rem] leading-none md:-ml-1 md:mb-7 min-[1250px]:-ml-1 min-[1900px]:-ml-1 min-[1900px]:mb-6">
            <span className="inline-block">Journal</span>
          </h1>
          <div className="mb-7 flex flex-col font-medium md:mb-6 md:flex-row md:items-end min-[1250px]:mb-16 min-[1250px]:items-start min-[1900px]:mb-16">
            <p className="mb-4 w-[84%] text-[1.75rem] leading-8 md:mb-0 md:w-[66%] min-[1250px]:w-4/5">
              News and insights on all things design by Brewww
            </p>
          </div>
          <div className="w-full overflow-visible">
            <PostSlider posts={postsFeatured.docs} />
          </div>
        </div>
      </section>
    </div>
  );
}
