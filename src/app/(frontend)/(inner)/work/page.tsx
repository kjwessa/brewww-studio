import Image from "next/image";
import Link from "next/link";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { WorkCard } from "@/components/WorkCard";

export default async function WorkPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "work",
    limit: 1000,
    sort: "title",
    where: {
      _status: { equals: "published" },
    },
  });

  return (
    <>
      <div className="bg-brand-dark-bg text-black">
        <section className="w-full pb-28 pt-20 lg:pb-32 lg:pt-36" id="filters">
          <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
            <div className="mb-7 w-full flex-wrap px-2 lg:mb-16 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
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
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/fashion/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Fashion
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        7
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/fitness-sport/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Fitness & Sport
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        2
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/education/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Education
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        3
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/health/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Health
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        5
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/property/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Property
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        8
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/corporate/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Corporate
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        6
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/food-drink/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Food & Drink
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        6
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/agency/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Agency
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        7
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/ecommerce/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        eCommerce
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        16
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/b2b/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        B2B
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        22
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/b2c/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        B2C
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        12
                      </div>
                    </a>
                  </li>
                  <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                    <a
                      className="inline-flex items-end"
                      href="https://madebyshape.co.uk/work/archive/"
                    >
                      <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
                        Archive
                      </div>
                      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
                        17
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="relative -mb-16 flex flex-wrap lg:-mb-28">
          <div className="absolute bottom-[886.63rem] left-0 right-[47.75rem] top-0 w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[0] && <WorkCard project={projects.docs[0]} />}
            </div>
          </div>
          <div className="absolute bottom-[868.13rem] left-[47.75rem] right-0 top-0 w-full px-2 md:mt-24 md:w-2/4 lg:mt-0 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-20 hidden w-full lg:flex">
              <div className="flex w-full justify-center">
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
                    Fantastic agency - MadeByShape built our new website and it
                    was a pain free experience! Would highly recommend.
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
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[1] && <WorkCard project={projects.docs[1]} />}
            </div>
          </div>
          <div className="absolute bottom-[839.50rem] left-0 right-[47.75rem] top-[47.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[2] && <WorkCard project={projects.docs[2]} />}
            </div>
          </div>
          <div className="absolute bottom-[821.00rem] left-[47.75rem] right-0 top-[65.63rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[3] && <WorkCard project={projects.docs[3]} />}
            </div>
          </div>
          <div className="absolute bottom-[790.13rem] left-0 right-[47.75rem] top-[94.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[4] && <WorkCard project={projects.docs[4]} />}
            </div>
          </div>
          <div className="absolute bottom-[774.00rem] left-[47.75rem] right-0 top-[112.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[5] && <WorkCard project={projects.docs[5]} />}
            </div>
          </div>
          <div className="absolute bottom-[743.00rem] left-0 right-[47.75rem] top-[143.63rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[6] && <WorkCard project={projects.docs[6]} />}
            </div>
          </div>
          <div className="absolute bottom-[726.88rem] left-[47.75rem] right-0 top-[159.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[7] && <WorkCard project={projects.docs[7]} />}
            </div>
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
          </div>
          <div className="absolute bottom-[679.75rem] left-[47.75rem] right-0 top-[206.88rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[8] && <WorkCard project={projects.docs[8]} />}
            </div>
          </div>
          <div className="absolute bottom-[632.88rem] left-0 right-[47.75rem] top-[253.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[9] && <WorkCard project={projects.docs[9]} />}
            </div>
          </div>
          <div className="absolute bottom-[630.38rem] left-[47.75rem] right-0 top-[254.00rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[10] && <WorkCard project={projects.docs[10]} />}
            </div>
          </div>
          <div className="absolute bottom-[585.75rem] left-0 right-[47.75rem] top-[300.88rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[11] && <WorkCard project={projects.docs[11]} />}
            </div>
          </div>
          <div className="absolute bottom-[583.25rem] left-[47.75rem] right-0 top-[303.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[12] && <WorkCard project={projects.docs[12]} />}
            </div>
          </div>
          <div className="absolute bottom-[538.63rem] left-0 right-[47.75rem] top-[348.00rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[13] && <WorkCard project={projects.docs[13]} />}
            </div>
          </div>
          <div className="absolute bottom-[536.25rem] left-[47.75rem] right-0 top-[350.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[14] && <WorkCard project={projects.docs[14]} />}
            </div>
          </div>
          <div className="absolute bottom-[491.63rem] left-0 right-[47.75rem] top-[395.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[15] && <WorkCard project={projects.docs[15]} />}
            </div>
          </div>
          <div className="absolute bottom-[444.50rem] left-0 right-[47.75rem] top-[442.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[16] && <WorkCard project={projects.docs[16]} />}
            </div>
          </div>
          <div className="absolute bottom-[442.00rem] left-[47.75rem] right-0 top-[444.63rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[17] && <WorkCard project={projects.docs[17]} />}
            </div>
          </div>
          <div className="absolute bottom-[397.38rem] left-0 right-[47.75rem] top-[489.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects.docs[18] && <WorkCard project={projects.docs[18]} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
