import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const postsFeatured = await payload.find({
    collection: "posts",
    limit: 1000,
    sort: "-publishedDate",
  });
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmargin-right: -8px !important;\n}\n}\n",
        }}
      />

      <section className="w-full overflow-hidden bg-zinc-900 pb-14 pt-44 text-lg text-white md:pb-16 md:pt-60 min-[1250px]:pb-16 min-[1250px]:pt-64 min-[1900px]:pt-80">
        <div className="m-6 md:ml-10 md:mr-10 min-[1250px]:ml-20 min-[1250px]:mr-20 min-[1550px]:ml-auto min-[1550px]:mr-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1900px]:max-w-screen-2xl min-[2048px]:ml-48 min-[2048px]:mr-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:ml-48 min-[2560px]:mr-48 min-[2560px]:max-w-[160.00rem] min-[2940px]:ml-auto min-[2940px]:mr-auto min-[2940px]:max-w-[160.00rem]">
          <h1 className="mb-6 text-[4.63rem] leading-none md:-ml-1 md:mb-7 min-[1250px]:-ml-1 min-[1900px]:-ml-1 min-[1900px]:mb-6">
            <span>
              <span>
                <span className="inline-block">Blog</span>
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
              <div className="relative overflow-hidden">
                <a
                  className="cursor-none"
                  href="https://brewww.studio/blog/webby-2024"
                >
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full max-w-full object-cover"
                      src="https://cdn.sanity.io/images/r115idoc/production/ae48049e4938741780e55fc1267ee89274043e44-3834x2115.png?w=3840&q=80&fit=clip&auto=format"
                      srcSet="https://cdn.sanity.io/images/r115idoc/production/ae48049e4938741780e55fc1267ee89274043e44-3834x2115.png?w=3840&q=80&fit=clip&auto=format 3840w"
                    />
                  </div>
                  <div className="absolute bottom-[1.00rem] left-[1.00rem] right-[1.00rem] z-[3] text-white md:bottom-[1.25rem] md:left-[1.25rem] md:right-[6.38rem] min-[1250px]:bottom-[1.38rem] min-[1250px]:left-[1.75rem] min-[1250px]:right-[22%] min-[1900px]:bottom-[1.75rem] min-[1900px]:left-[2.00rem] min-[1900px]:right-[41%]">
                    <span className="mb-2 font-medium">News</span>
                    <p className="text-4xl">
                      Bacon ipsum dolor amet short ribs brisket venison rump
                      drumstick
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative overflow-hidden">
                <a
                  className="cursor-none"
                  href="https://brewww.studio/blog/cafepay-news-digest"
                >
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full max-w-full object-cover"
                      src="https://cdn.sanity.io/images/r115idoc/production/5f49433a24b1c2e356e365f2f757c31d773e594c-2556x1410.png?w=3840&q=80&fit=clip&auto=format"
                      srcSet="https://cdn.sanity.io/images/r115idoc/production/5f49433a24b1c2e356e365f2f757c31d773e594c-2556x1410.png?w=3840&q=80&fit=clip&auto=format 3840w"
                    />
                  </div>
                  <div className="absolute bottom-[1.00rem] left-[1.00rem] right-[1.00rem] z-[3] text-white md:bottom-[1.25rem] md:left-[1.25rem] md:right-[6.38rem] min-[1250px]:bottom-[1.38rem] min-[1250px]:left-[1.75rem] min-[1250px]:right-[22%] min-[1900px]:bottom-[1.75rem] min-[1900px]:left-[2.00rem] min-[1900px]:right-[41%]">
                    <span className="mb-2 font-medium">News</span>
                    <p className="text-4xl">
                      Pig alcatra cow ribeye beef ribs sausage
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative overflow-hidden">
                <a
                  className="cursor-none"
                  href="https://brewww.studio/blog/improve-logo-design"
                >
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full max-w-full object-cover"
                      src="https://cdn.sanity.io/images/r115idoc/production/096c6ab58221245b3b4f19b61406896d4a6f9f0b-2400x1264.png?w=3840&q=80&fit=clip&auto=format"
                      srcSet="https://cdn.sanity.io/images/r115idoc/production/096c6ab58221245b3b4f19b61406896d4a6f9f0b-2400x1264.png?w=3840&q=80&fit=clip&auto=format 3840w"
                    />
                  </div>
                  <div className="absolute bottom-[1.00rem] left-[1.00rem] right-[1.00rem] z-[3] text-white md:bottom-[1.25rem] md:left-[1.25rem] md:right-[6.38rem] min-[1250px]:bottom-[1.38rem] min-[1250px]:left-[1.75rem] min-[1250px]:right-[22%] min-[1900px]:bottom-[1.75rem] min-[1900px]:left-[2.00rem] min-[1900px]:right-[41%]">
                    <span className="mb-2 font-medium">Branding</span>
                    <p className="text-4xl">
                      Porchetta pork belly meatball kevin venison
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative overflow-hidden">
                <a
                  className="cursor-none"
                  href="https://brewww.studio/blog/web-design-guide"
                >
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full max-w-full object-cover"
                      src="https://cdn.sanity.io/images/r115idoc/production/9ca839394f71b1aff720b4b343b77e50d4e2f7e6-2338x1238.png?w=3840&q=80&fit=clip&auto=format"
                      srcSet="https://cdn.sanity.io/images/r115idoc/production/9ca839394f71b1aff720b4b343b77e50d4e2f7e6-2338x1238.png?w=3840&q=80&fit=clip&auto=format 3840w"
                    />
                  </div>
                  <div className="absolute bottom-[1.00rem] left-[1.00rem] right-[1.00rem] z-[3] text-white md:bottom-[1.25rem] md:left-[1.25rem] md:right-[6.38rem] min-[1250px]:bottom-[1.38rem] min-[1250px]:left-[1.75rem] min-[1250px]:right-[22%] min-[1900px]:bottom-[1.75rem] min-[1900px]:left-[2.00rem] min-[1900px]:right-[41%]">
                    <span className="mb-2 font-medium">Web Design</span>
                    <p className="text-4xl">
                      Kielbasa porchetta shoulder ball tip burgdoggen shank
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
