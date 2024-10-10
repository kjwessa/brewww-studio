import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { WorkCard } from "@/components/WorkCard";

export async function WorkGallery() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "work",
    limit: 4,
    sort: "-publishedOn",
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return (
    <section className="bg-brand-dark-bg py-16 text-black md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-2 md:mt-20 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[0] && <WorkCard project={projects.docs[0]} />}
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[1] && <WorkCard project={projects.docs[1]} />}
            </div>
            <div className="hidden w-full lg:flex">
              <div className="mb-10 flex w-full justify-center text-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="mb-5 text-5xl text-white">
                    Like what <br />
                    you see?
                  </h2>
                  <div className="relative inline-flex items-center">
                    <a
                      className="inline-flex"
                      href=""
                      style={{
                        outlineOffset: "2px",
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

                  <a className="flex w-full" href="">
                    <div className="relative w-full cursor-pointer overflow-hidden pt-14">
                      <picture className="absolute left-0 top-0 h-full w-full">
                        <source
                          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                          type="image/webp"
                        />

                        <img
                          className="mt-3 h-auto w-full max-w-full"
                          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                        />
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 hidden w-full justify-center lg:mb-20 lg:flex">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Our Work</div>
                </div>
                <h2 className="mb-0 mt-3 max-w-sm text-7xl text-white lg:mb-0 lg:mt-5 xl:max-w-md min-[2100px]:max-w-lg">
                  Take a look at our projects
                </h2>
              </div>
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[2] && <WorkCard project={projects.docs[2]} />}
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[3] && <WorkCard project={projects.docs[3]} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
