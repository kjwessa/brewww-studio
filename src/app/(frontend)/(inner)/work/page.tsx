import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { WorkCard } from "@/components/WorkCard";

export default async function WorkPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "work",
    limit: 1000,
    sort: "-updatedAt",
    where: {
      _status: { equals: "published" },
    },
  });

  return (
    <div className="bg-brand-dark-bg text-black">
      <section className="w-full pb-28 pt-20 lg:pb-32 lg:pt-36" id="filters">
        <div className="px-2 sm:px-6 xl:px-12 min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60">
          <div className="mb-7 w-full flex-wrap px-2 lg:mb-16 lg:px-3 xl:px-4">
            <div className="w-full lg:w-[93.75%]">
              <h1 className="mb-2 inline-flex w-auto items-center lg:absolute lg:left-[1.00rem] lg:top-[0.75rem] lg:mb-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Our Work</div>
              </h1>
              <ul className="flex list-none flex-wrap">
                <li className="mr-4 list-item lg:mr-10">
                  <a
                    className="inline-flex items-end"
                    href="https://madebyshape.co.uk/work/"
                  >
                    <div className="cursor-pointer indent-48 text-[3.25rem] lowercase leading-none text-white">
                      Explore all
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm text-neutral-400 lg:mb-2">
                      38
                    </div>
                  </a>
                </li>
                {/* Add other list items here */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 px-2 md:grid-cols-2 lg:px-3 xl:px-4">
        {projects.docs.map((project, index) => {
          const isTestimonial = index === 1;
          const isContactUs = index === 7;

          return (
            <div key={project.id} className="mb-16 lg:mb-28">
              {isTestimonial && (
                <div className="mb-20 hidden w-full justify-center lg:flex">
                  <div className="relative max-w-xl min-[2100px]:max-w-3xl">
                    <svg
                      className="absolute left-0 top-0 h-6 w-6 text-white"
                      fill="rgb(255, 255, 255)"
                      viewBox="0 0 17 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                    <h2 className="mb-5 indent-20 text-4xl text-white">
                      Fantastic agency - Brewww built our new website and it was
                      a pain free experience! Would highly recommend.
                    </h2>
                    <div className="flex items-end">
                      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-lime-300 text-2xl lg:h-12 lg:w-12">
                        <div className="mt-0">O</div>
                      </div>
                      <div className="ml-2 mr-0 lg:ml-3 lg:mr-0">
                        <div className="text-white">Olivia Dowie</div>
                        <div className="text-sm font-light text-zinc-400">
                          Riley studio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isContactUs && (
                <div className="mb-16 flex w-full flex-col items-center text-center lg:mb-28">
                  <h2 className="text-5xl text-white lg:mb-3">
                    You're still here?!
                  </h2>
                  <div className="mb-5 w-full text-lg font-light text-zinc-400">
                    <p className="mb-6">You must really like us...</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <a
                      className="inline-flex blur"
                      href="https://madebyshape.co.uk/contact/"
                      style={{
                        outlineOffset: "2px",
                        outlineStyle: "solid",
                        outlineWidth: "2px",
                      }}
                    >
                      <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                        <div className="inline-flex">Contact us</div>
                      </div>
                      <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300" />
                    </a>
                    <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
                      <div className="relative overflow-hidden">
                        <div>
                          <svg
                            className="h-3 w-3"
                            fill="rgb(1, 2, 2)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(1, 2, 2)"
                            />
                          </svg>
                        </div>
                        <div className="absolute left-0 top-0">
                          <svg
                            className="h-3 w-3"
                            fill="rgb(1, 2, 2)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(1, 2, 2)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <WorkCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
