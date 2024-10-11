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
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/sacha-lord/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Sacha-Lord/Phone-copy.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706708852&s=d9d8e7ae7575fb0012c3232f0bfe8cf0"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Sacha Lord</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Redefining Sacha Lord's visual narrative
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[726.88rem] left-[47.75rem] right-0 top-[159.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/mysa-skincare/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Photography
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Mysa/Mysa-Hand-Wash.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1602837667&s=c8bef7d1b4db1050e619a3bf0f3ed480"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Mysa Skincare</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Levelling up a natural skincare brand
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[679.88rem] left-0 right-[47.75rem] top-[190.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/studio-25/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Art Direction
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Studio-25/studio25-header.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1632321217&s=b176b5ced731cbaace3d8970948de3b2"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Studio 25</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Rebranding luxury dance facilities
                  </h2>
                </a>
              </div>
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
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/monday-clicks/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Monday-Clicks/Thumbnail-Square-2.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1683035994&s=3eea1b3fdeb1ed9060c4687db292407f"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2023</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Monday Clicks</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Crafting an SEO identity with impact
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[632.88rem] left-0 right-[47.75rem] top-[253.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/stoneletters/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Brand Repositioning
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Stoneletters/stoneletters-square-thumb-website.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1659618846&s=89c7f6ef1752472e73fe45c258ba011e"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2022</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Stoneletters</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Reimagining a letter carving studio
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[630.38rem] left-[47.75rem] right-0 top-[254.00rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/this-is-digital/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/This-is-Digital/This-is-digital-LOW-RES-1.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1641807231&s=3b32a42bc0da855dee467ea5d91d4d82"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2022</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">This is Digital</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Complete brand overhaul for a digital performance agency
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[585.75rem] left-0 right-[47.75rem] top-[300.88rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/millennium-care/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Art Direction
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Millennium-Care/pexels-andrea-piacquadio-3768131.jpeg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1673968782&s=28e9bb045a3afade6f61bc29a610b751"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2023</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Millennium Care</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Re-imagining the visual face of later life care
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[583.25rem] left-[47.75rem] right-0 top-[303.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/area/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Area/Area-Thumbnail1.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1675762779&s=5c25d6db2d1f9410ff9453f53f56435b"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2023</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Area</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Showcasing a common passion for the workplace
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[538.63rem] left-0 right-[47.75rem] top-[348.00rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/olgam-life/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800 text-black">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pb-[75%]">
                            <video className="absolute left-0 top-0 h-full w-full max-w-full object-cover">
                              <source
                                src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/olgam-thumbnail.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2023</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Olgam Life</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Disrupting the plasma donation space
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[536.25rem] left-[47.75rem] right-0 top-[350.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/sferacare/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Content Writing
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Sfera-Care/Embroidered-logo.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706717148&s=1cfd939b3362d7739d2d17cdf65a7705"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">SferaCare</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Embrace the next chapter of life with SferaCare
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[491.63rem] left-0 right-[47.75rem] top-[395.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/three-little-words/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Three-Little-Words/Three-little-words-lifestyle-4.jpeg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1627477367&s=05c5bdd3b1d932f4fd99f3c328138556"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Three Little Words</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Creative website build for cocktail bar
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[489.13rem] left-[47.75rem] right-0 top-[397.50rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/michild/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/MiChild/MiChild-3662648.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1606817406&s=0d0824a63b507398de03c928ef3601bf"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">MiChild</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Creating an inspiring learning environment
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[444.50rem] left-0 right-[47.75rem] top-[442.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/inside-out-contracts/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          SEO
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Support
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Inside-Out-Contracts/inside-out-contracts-madebyshape-thumb-2.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1597751657&s=354dc0d7e65acdfab2935c63e1494570"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Inside Out Contracts</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A digital arm for a London based business
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[442.00rem] left-[47.75rem] right-0 top-[444.63rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/prestige-drinks/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          eCommerce
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Prestige-Drinks/Prestige-Header.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1712823824&s=d110f11e93d4df599179aa89aaee62d7"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Prestige Drinks</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Crafting a personalised eCommerce experience
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[397.38rem] left-0 right-[47.75rem] top-[489.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/heard/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Brand Repositioning
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Illustration
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Heard/Billboard-min.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706881881&s=3c6062f5b56e74f6c057a61780488bb7"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Heard</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    The home of healthy hearing
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[395.00rem] left-[47.75rem] right-0 top-[491.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/ssp-health/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Content Writing
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/SSP-Health/7-copy_2024-02-08-134801_fgvk.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707400081&s=5be68ad7a4d9f76cc2a59041848bdecf"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">SSP Health</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Changing the face of GPs in the North West
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[348.00rem] left-0 right-[47.75rem] top-[536.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/odolls-collection/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Shopify
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/ODolls-Collection/odolls-madebyshaoe.jpeg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5062&fp-y=0.2593&dm=1619102694&s=35c67a45d9adf8550436202b52d8e1e7"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">ODolls Collection</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Shopify website for a fashion brand with global influences
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[347.88rem] left-[47.75rem] right-0 top-[538.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/idyll-home/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Shopify
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Idyll-Home/LIFESTYLE_MODULE-MOUSSE.jpeg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1619171556&s=421e0ba7698722c3a1331089c4a322af"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Idyll Home</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A quick turnaround Shopify store
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[298.63rem] left-0 right-[47.75rem] top-[585.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/boys-by-girls/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Boys-By-Girls/boys-by-girls-madebyshape-header-1.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1597751646&s=ddbf8ae45d5d39a11efe88c25dc7a924"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Boys By Girls</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Stunning imagery, honest stories, dressed in this season’s
                    look
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[298.50rem] left-[47.75rem] right-0 top-[585.88rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/iet/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          SEO
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Illustration
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Billboard.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621853760&s=09a5e7db6aec1241315f61f5265b1f06"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">iET</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Unique creative for a recruitment agency in Zurich
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[251.50rem] left-0 right-[47.75rem] top-[635.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/painters-world/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Painters-World/painters-world-lifestyle2.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1606754336&s=31f6d5a3bb1c18e9b35e0a2c65871aa1"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Painters World</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Craft Commerce store for a family-run business
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[251.38rem] left-[47.75rem] right-0 top-[635.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/njorun-active/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Njorun-Active/Njorun-Active-MadeByShape-thumb.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1597751597&s=474856f0fdaff96ca535de6acd7abb53"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Njorun Active</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    eCommerce for Womenswear fitness brand
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[202.13rem] left-0 right-[47.75rem] top-[682.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/charlie-horner/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800 text-black">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pb-[75%]">
                            <video className="absolute left-0 top-0 h-full w-full max-w-full object-cover">
                              <source
                                src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/charlie-horner-thumbnail.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Charlie Horner</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A Craft CMS website for a forward thinking interior designer
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[202.00rem] left-[47.75rem] right-0 top-[682.38rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/rosebud-preserves/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Support
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Rosebud-Preserves/rosebud-preserves-madebyshape-thumb.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1597751636&s=24ca07bccd5dc914abb73bab3157de8f"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Rosebud Preserves</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A new approach for a 30 year old Yorkshire business
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[143.63rem] left-0 right-[47.75rem] top-[731.63rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/pale-fox/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Shopify
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pb-[100%]">
                            <img
                              className="absolute left-0 top-0 z-10 h-full w-full max-w-full object-cover"
                              src="https://made-byshape.files.svdcdn.com/production/uploads/images/Projects/Pale-Fox/pale-fox_square.gif?dm=1652258851"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Pale Fox</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Shopify store for prosecco brand
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[152.63rem] left-[47.75rem] right-0 top-[731.75rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/missie-swimwear/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Art Direction
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Missie/missie-thumb.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1597751623&s=c2d394b6f9da39a486218558c6c3e55a"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2020</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Missie Swimwear</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A new luxury swimwear brand that started with nothing
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[105.50rem] left-[47.75rem] right-0 top-[781.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/kent/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Support
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Kent/Kent-Home-Purpose.jpeg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1630489428&s=cda782ac9e4a4fc150f03b07f2295ef6"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Kent</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    New website for a global energy brand
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[96.50rem] left-0 right-[47.75rem] top-[790.13rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/the-invisible-orthodontist/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/The-Invisible-Orthodontist/image-lifestyle.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1611760542&s=1b543b90bee8c982d9d9aa8e067ae8f3"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2021</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">
                      The Invisible Orthodontist
                    </div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Orthodontics doesn't have to be boring
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[58.38rem] left-[47.75rem] right-0 top-[828.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/skew-studio/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Support
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Skew/Skew-Studio.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1652354141&s=2dba07f5a1f2fba6527a3b5bcda7d5bc"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2022</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Skew Studio</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Disrupting the brand licensing space
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[49.50rem] left-0 right-[47.75rem] top-[837.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/time/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Branding
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          SEO
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Time/Time-Thumbnail.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1674121789&s=7c29ddd60e1b19a7702e0ceb761c8dd2"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2023</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Time</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    A fitness and nutrition start-up driven by science
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[11.38rem] left-[47.75rem] right-0 top-[875.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/go2/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
                      <svg
                        className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <svg
                        className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
                        fill="rgb(14, 15, 17)"
                        version="1.1"
                        viewBox="0 0 100 100"
                        x="0"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                      <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          Website
                        </div>
                        <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                          SEO
                        </div>
                        <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                          Brand Repositioning
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Go2/go2-thumbnail.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707299057&s=a3e4c0db9e08472a05fcc3ece9b5eeaf"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2024</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Go2</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Connecting teams across the world
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-[47.75rem] top-[884.25rem] w-full px-2 md:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-16 w-full lg:mb-28">
              <div className="relative w-full">
                <a
                  className="relative flex flex-col items-start"
                  href="https://madebyshape.co.uk/work/nufox/"
                >
                  <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
                    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800">
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full">
                          <div className="relative w-full overflow-hidden pt-[34.38rem]">
                            <picture className="absolute left-0 top-0 h-full w-full">
                              <source type="image/webp" />

                              <img
                                className="h-auto w-full max-w-full"
                                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/NUfox/Thumbnail-Square.png?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1652793551&s=18ac94dcd3804200a41ab70ae3938082"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
                    <div className="font-light">2022</div>
                    <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <div className="ml-3 font-light">Nufox</div>
                  </div>
                  <h2 className="cursor-pointer pr-10 text-4xl text-white">
                    Website for a custom rubber extrusions manufacturer
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full overflow-hidden text-[10.63rem] leading-none text-white">
          <div className="w-full pb-20 lg:pb-24 min-[1450px]:pb-32 min-[2100px]:pb-40">
            <div className="w-full">
              <div className="flex w-full">
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
                <div className="inline-flex w-auto px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                  <a
                    className="inline-flex"
                    href="https://madebyshape.co.uk/project-planner/"
                  >
                    <div className="cursor-pointer">Let's work together.</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-20 lg:pb-24 min-[1450px]:pb-32 min-[2100px]:pb-40">
          <div className="relative flex w-full flex-wrap justify-center lg:min-h-[40.00rem]">
            <div className="absolute left-[-2.50rem] top-[2.50rem] inline-flex w-[62.5%] md:w-[31.25%] lg:top-[-2.50rem] lg:w-1/4">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-72">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images-archive/Work/Billboard.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706015870&s=596895bd52732a5b8bb2b8f47063c514"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[2.50rem] top-[10.00rem] inline-flex w-2/4 md:left-[5.00rem] md:right-auto md:top-0 md:w-1/4 lg:left-[10.00rem] lg:top-[2.50rem] lg:w-1/4">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-60">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images-archive/Work/Homepage-1.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706016023&s=dfdee65cbb1e876272b2977886bbc3ec"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[7.00rem] left-[2.50rem] hidden w-[43.75%] md:flex md:w-[31.25%] lg:left-[5.00rem] lg:w-72">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-52">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Billboard-min.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706016463&s=b8d6443bda476a0c62674855654cc16e"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-2.50rem] right-[1.25rem] inline-flex w-[62.5%] md:left-[20.00rem] md:right-auto md:w-[37.5%] lg:w-1/4">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-72">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/10_4-copy.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706018272&s=08b05824106f32708a7a2c2694a84ea6"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5.00rem] right-[10.00rem] inline-flex w-[43.75%] md:right-[1.00rem] md:w-[31.25%] lg:right-[10.00rem] lg:w-72">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-52">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/BusinessCards-min.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706016629&s=fc524497bab15d3b8744df52b71d022c"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[2.00rem] top-[5.00rem] hidden w-[37.5%] md:right-[3.00rem] md:flex md:w-[37.5%] lg:right-[2.00rem] lg:w-72">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-44">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Homepage-2.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706018362&s=129e3093a34b5d8295fb66e286749850"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[1.25rem] top-[-2.50rem] inline-flex w-[37.5%] lg:right-[15.00rem] lg:w-1/4">
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800">
                  <div className="relative w-full overflow-hidden pt-60">
                    <picture className="absolute left-0 top-0 h-full w-full">
                      <source type="image/webp" />

                      <img
                        className="h-auto w-full max-w-full"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Homepage.jpg?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706018141&s=fc5fa609bf536d7218f9a18d2a4180e4"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center px-2 text-center lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="flex flex-col items-center text-[5.38rem] leading-none text-white">
                <h1>
                  Sexy stuff we’re <br />
                  working on right now
                </h1>
              </div>
              <div className="mt-6 w-full text-lg font-light text-zinc-400">
                <p className="mb-6">
                  Shhhh... sneak previews, don’t tell anyone
                </p>
              </div>
              <div className="relative mt-6 inline-flex items-center">
                <a
                  className="inline-flex blur"
                  href="https://madebyshape.co.uk/project-planner/"
                  style={{
                    outlineOffset: "2px",
                    outlineStyle: "solid",
                    outlineWidth: "2px",
                  }}
                >
                  <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                    <div className="inline-flex">Start your project</div>
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
        </div>
      </div>
    </>
  );
}
