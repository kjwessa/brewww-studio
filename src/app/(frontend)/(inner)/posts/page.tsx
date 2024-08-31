import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
import Link from "next/link";
import configPromise from "@payload-config";
import { Media, Post } from "@/payload-types";

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const postsFeatured = await payload.find({
    collection: "posts",
    limit: 1000,
    sort: "-publishedDate",
  });

  return (
    <div>
      <section className="w-full overflow-hidden bg-zinc-900 pb-14 pt-44 text-lg text-white md:pb-16 md:pt-60 min-[1250px]:pb-16 min-[1250px]:pt-64 min-[1900px]:pt-80">
        <div className="m-6 md:ml-10 md:mr-10 min-[1250px]:ml-20 min-[1250px]:mr-20 min-[1550px]:ml-auto min-[1550px]:mr-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1900px]:max-w-screen-2xl min-[2048px]:ml-48 min-[2048px]:mr-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:ml-48 min-[2560px]:mr-48 min-[2560px]:max-w-[160.00rem] min-[2940px]:ml-auto min-[2940px]:mr-auto min-[2940px]:max-w-[160.00rem]">
          <h1 className="mb-6 text-[4.63rem] leading-none md:-ml-1 md:mb-7 min-[1250px]:-ml-1 min-[1900px]:-ml-1 min-[1900px]:mb-6">
            <span>
              <span>
                <span className="inline-block">Journal</span>
              </span>
            </span>
          </h1>
          <div className="mb-7 flex flex-col font-medium md:mb-6 md:flex-row md:items-end min-[1250px]:mb-16 min-[1250px]:items-start min-[1900px]:mb-16">
            <p className="mb-4 w-[84%] text-[1.75rem] leading-8 md:mb-0 md:w-[66%] min-[1250px]:w-4/5">
              News and insights on all things design by Brewww
            </p>
            <div
              className="ml-auto min-[1250px]:mt-1 min-[1900px]:mt-0"
              id="div-1"
            >
              <button className="mr-5 inline-flex h-8 w-8 cursor-pointer items-center justify-center opacity-20 md:mr-10 min-[1250px]:mr-8 min-[1250px]:h-10 min-[1250px]:w-10">
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 min-[1250px]:h-10 min-[1250px]:w-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="inline-flex h-8 w-8 cursor-pointer items-center justify-center min-[1250px]:h-10 min-[1250px]:w-10">
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 min-[1250px]:h-10 min-[1250px]:w-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex cursor-grab items-end text-blue-700">
            <div className="flex items-stretch">
              {postsFeatured.docs.map((post: Post, index: number) => {
                const imageMain = post.imageMain as Media | undefined;
                return (
                  <div key={index} className="relative overflow-hidden">
                    <Link href={`https://brewww.studio/journal/${post.slug}`}>
                      <div className="overflow-hidden">
                        <Image
                          src={imageMain?.url || ""}
                          alt={imageMain?.altText || ""}
                          width={3840}
                          height={2115}
                          className="h-auto w-full max-w-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-[1.00rem] left-[1.00rem] right-[1.00rem] z-[3] text-white md:bottom-[1.25rem] md:left-[1.25rem] md:right-[6.38rem] min-[1250px]:bottom-[1.38rem] min-[1250px]:left-[1.75rem] min-[1250px]:right-[22%] min-[1900px]:bottom-[1.75rem] min-[1900px]:left-[2.00rem] min-[1900px]:right-[41%]">
                        <span className="mb-2 font-medium"></span>
                        <p className="text-4xl">{post.name}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
