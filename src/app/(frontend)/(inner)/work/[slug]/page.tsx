import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import RichText from "@/components/RichText/index";
import { notFound } from "next/navigation";
import { Work } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utilities/dateFormatter";
import AudioImageOne from "/public/images/audio-one.jpg";
import AudioImageTwo from "/public/images/audio-two.jpg";
import AudioImageThree from "/public/images/audio-three.jpg";
import AudioImageFour from "/public/images/audio-four.jpg";
import AudioImageFive from "/public/images/audio-five.jpg";
import AudioImageSix from "/public/images/audio-six.jpg";
import AudioImageSeven from "/public/images/audio-seven.jpg";
import AudioImageEight from "/public/images/audio-eight.jpg";
import { BeforeAfter } from "./BeforeAfter";
import { Service } from "@/payload-types";
import { ImageGrow } from "./HeroImageGrow";

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "work",
    limit: 1000,
    overrideAccess: false,
  });
  return (
    projects.docs?.map(({ slug }) => ({
      params: { slug },
    })) || []
  );
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams.slug) {
    notFound();
  }

  const project = await queryPostBySlug({ slug: resolvedParams.slug });
  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="w-full bg-brand-dark-bg pb-20 pt-40 text-black">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="relative flex w-full flex-wrap items-start justify-between">
            <div className="mb-2 hidden w-full px-2 text-white lg:mb-0 lg:flex lg:w-[37.5%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              {project.services && project.services.length > 0 && (
                <div className="mb-3 flex flex-wrap items-center lg:mb-20">
                  {project.services.map((service, index) => (
                    <div
                      key={index}
                      className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex"
                    >
                      {typeof service === "string" ? service : service.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full px-2 lg:w-[62.5%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="relative rounded-bl-3xl lg:pb-5 lg:pl-10 lg:pr-10 lg:pt-0">
                <div className="mb-3 flex items-center text-zinc-400 xl:mb-5">
                  <div className="font-light">
                    {project.projectYear || "Add Year"}
                  </div>
                  <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <div className="ml-3 font-light">{project.title}</div>
                </div>
                <h1 className="text-headline-medium leading-none text-white">
                  {project.tagline}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-bg">
        {" "}
        <ImageGrow
          imageSrc={
            typeof project.image === "string"
              ? project.image
              : project.image?.url || ""
          }
          altText="Project header image"
        />
      </section>

      <section className="bg-brand-dark-bg px-2 py-20 text-black sm:px-6 xl:px-12 min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60">
        <div className="relative flex flex-wrap items-start justify-between">
          <div className="relative flex w-full flex-wrap px-2 lg:mb-0 lg:w-[56.25%] lg:px-3 xl:px-4 min-[2100px]:w-2/4">
            <div className="order-1 text-5xl text-white">
              <h2 className="text-5xl text-white">
                <span className="mr-4 text-sm font-light">/ The Story</span>
                {project.storyTitle || "Add Story Title"}
              </h2>
            </div>
          </div>
          <div className="w-full px-2 lg:w-[43.75%] lg:px-3 xl:px-4">
            <div className="w-full text-lg font-light text-zinc-400 xl:pr-10">
              {project.storyContent ? (
                <RichText content={project.storyContent} enableProse={true} />
              ) : (
                <p className="mb-6">Add storyContent</p>
              )}
            </div>
            <div className="mt-6 flex w-full max-w-2xl flex-wrap justify-between pr-6 lg:mt-10 lg:pr-0 min-[2100px]:max-w-3xl">
              <div className="mb-3 pr-8 lg:mb-0">
                <div className="text-sm font-light text-neutral-400">
                  Client
                </div>
                <div className="text-2xl text-white">{project.title}</div>
              </div>
              <div className="mb-3 pr-8 lg:mb-0">
                <div className="text-sm font-light text-neutral-400">
                  Industry
                </div>
                <div className="text-2xl text-white">Craft Brewing</div>
              </div>
              <div className="pr-8 lg:mb-0">
                <div className="text-sm font-light text-neutral-400">
                  Duration
                </div>
                <div className="text-2xl text-white">16 Weeks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg px-2 py-16 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="flex w-full flex-wrap">
          <div className="w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="relative flex w-full cursor-pointer flex-wrap">
              <div className="absolute left-0 top-0 z-20 h-full w-full">
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold md:h-16 md:w-16">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M384 256L0 32v448l384-224z"
                        fill="rgb(0, 0, 0)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-3xl pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://player.vimeo.com/video/937680303?autoplay=1&loop=1&autopause=0&mute=1&controls=0&background=1"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-30 rounded-tl-3xl pl-4 pt-4">
                <svg
                  className="absolute bottom-0 left-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
                  fill="rgb(14, 15, 17)"
                  version="1.1"
                  viewBox="0 0 100 100"
                  x="0"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                    fill="rgb(14, 15, 17)"
                  />
                </svg>
                <svg
                  className="absolute right-0 top-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
                  fill="rgb(14, 15, 17)"
                  version="1.1"
                  viewBox="0 0 100 100"
                  x="0"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                    fill="rgb(14, 15, 17)"
                  />
                </svg>
                <div className="relative inline-flex items-center">
                  <div
                    className="inline-flex"
                    style={{
                      outlineOffset: "2px",
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                    }}
                  >
                    <div className="inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2 text-white">
                      <div className="inline-flex">Play video</div>
                    </div>
                    <div className="-ml-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
                  </div>
                  <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center text-white">
                    <div className="relative overflow-hidden">
                      <div>
                        <svg
                          className="h-3 w-3"
                          fill="rgb(255, 255, 255)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(255, 255, 255)"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-0 top-0">
                        <svg
                          className="h-3 w-3"
                          fill="rgb(255, 255, 255)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(255, 255, 255)"
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
      </section>

      <section className="bg-brand-dark-bg px-2 py-16 text-black sm:px-6 xl:px-12 min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60">
        <div className="-mb-5 flex w-full flex-wrap md:mb-0">
          <div className="mb-5 w-full px-2 md:mb-0 md:w-2/4 lg:px-3 xl:px-4">
            <div className="h-full rounded-3xl bg-zinc-900 px-20 py-16 sm:p-32 md:p-14 lg:p-16 min-[1450px]:p-28">
              <div className="relative w-full overflow-hidden pt-[49.75rem]">
                <picture className="absolute left-0 top-0 h-full w-full">
                  <img
                    className="h-auto w-full max-w-full rounded-3xl"
                    src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Iphone-iet.png?w=796&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621853026&s=0fb80b51ef27935992574b7067726454"
                    alt="iET iPhone"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="mb-5 w-full px-2 md:mb-0 md:w-2/4 lg:px-3 xl:px-4">
            <div className="h-full w-full overflow-hidden rounded-3xl bg-zinc-900">
              <picture>
                <img
                  className="h-full w-full max-w-full object-cover"
                  src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/poster-portrait.jpg?w=1080&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621853570&s=d61bb7d92d11c96f184a9192eb0ccdd3"
                  alt="iET Poster"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-dark-bg py-10 text-white lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
        <div className="px-2 sm:px-6 xl:px-12 min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="mb-5 w-full px-2 lg:mb-0 lg:w-[37.5%] lg:px-3 xl:w-[43.75%] xl:px-4">
              <h2 className="text-5xl text-white">
                <span className="mr-4 text-sm font-light">/ Creative</span>
                Catholic Identity, Beach Vibes
              </h2>
            </div>
            <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-2/4 lg:px-3 xl:px-4">
              <div className="w-full lg:pr-10">
                <p className="mb-6">
                  For Blessed Kettle Brewing, we crafted a unique brand identity
                  that embraces their Catholic roots while remaining accessible
                  to a broad audience. Our focus was on highlighting their
                  exceptional craft beers through a custom mark and innovative
                  styling. Faced with limited examples to draw from, we created
                  a design that captures a relaxed beach atmosphere, perfectly
                  balancing the brewery's faith-based foundation with a
                  welcoming, coastal aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="flex w-full flex-wrap px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="h-full w-full overflow-hidden rounded-3xl bg-zinc-900">
            <div className="relative w-full overflow-hidden pt-[66.00rem]">
              <picture className="absolute left-0 top-0 h-full w-full">
                <img
                  className="h-full w-full max-w-full object-cover"
                  src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Billboard.jpg?w=1920&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621853760&s=93dd3e38bf63aa5bbc8fc2177f457a2f"
                  alt="iET Billboard"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-950 py-10 text-black lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="mb-5 w-full px-2 lg:mb-0 lg:w-[37.5%] lg:pl-3 lg:pr-3 xl:w-[43.75%] xl:pl-4 xl:pr-4">
              <div className="mb-3 inline-flex w-auto items-center xl:absolute xl:left-[1.00rem] xl:top-[0.75rem] xl:mb-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Brand Identity</div>
              </div>
              <h2 className="indent-32 text-5xl text-white">
                Faith, Community, and Craft
              </h2>
            </div>
            <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="w-full lg:pr-10">
                <p className="mb-6">
                  For Blessed Kettle Brewing, we crafted a brand identity that
                  seamlessly blends their deep Catholic theology with an
                  accessible, welcoming aesthetic. The challenge was to create a
                  brand that resonates with the local Foley community while also
                  appealing to beach-going tourists. Our design incorporates
                  subtle religious symbolism with a laid-back, coastal vibe,
                  resulting in a unique identity that reflects the brewery's
                  values and attracts a diverse clientele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 py-10 lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
            <div>
              <div className="relative m-auto w-full overflow-hidden">
                <div className="relative flex h-full w-full">
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11.2-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939072&s=6f6247c65cf05a054fc81b79250655c3"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11.1-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939070&s=fd3a9391a4e405fb7c12a53fa9258392"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939068&s=625421548bb762f8c8eff067987afa30"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.3-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939066&s=3146f2ef76ffbc18ba63d5022d37c5ec"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.2-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939063&s=0c49ca88f6f333baf95f2b3e39adead6"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.1-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939061&s=8068951daf2819f732fad8127f58d05f"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[44.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939059&s=ce8281da9130414e34b25497975d04d7"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex w-full justify-center text-white">
                <div className="flex items-center">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950"
                    href=""
                  >
                    <svg
                      className="h-3 w-3 cursor-pointer"
                      fill="rgb(255, 255, 255)"
                      height="16"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7l45.2 45.3-22.6 22.6-89.4 89.4H448v64H125.3l89.4 89.4 22.5 22.6-45.2 45.3-22.6-22.6-144-144z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                  </a>

                  <a
                    className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950"
                    href=""
                  >
                    <svg
                      className="h-3 w-3 cursor-pointer"
                      fill="rgb(255, 255, 255)"
                      height="16"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M422.6 278.6l22.7-22.6-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6 89.4 89.4H0v64h322.7l-89.4 89.4-22.5 22.6 45.2 45.3 22.6-22.6 144-144z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-950 py-10 text-black lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="mb-5 w-full px-2 lg:mb-0 lg:w-[37.5%] lg:pl-3 lg:pr-3 xl:w-[43.75%] xl:pl-4 xl:pr-4">
              <div className="mb-3 inline-flex w-auto items-center xl:absolute xl:left-[1.00rem] xl:top-[0.75rem] xl:mb-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Craft</div>
              </div>
              <h2 className="indent-32 text-5xl text-white">
                Brand Direction with Purpose
              </h2>
            </div>
            <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="w-full lg:pr-10">
                <p className="mb-6">
                  To capture the essence of Blessed Kettle Brewing, a Foley, AL
                  microbrewery, we focused on their commitment to craft and
                  community. We developed a brand voice that speaks to their
                  local roots and artisanal approach. By introducing warm,
                  inviting visuals and a conversational tone, we've created a
                  digital presence that immerses visitors in the Blessed Kettle
                  experience, showcasing their dedication to quality brews and
                  local traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 py-10 lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
            <div>
              <div className="relative m-auto w-full overflow-hidden">
                <div className="relative flex h-full w-full">
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-6.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862260&s=02ff2f62f0eed704232325e9a82aa85e"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-6.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862260&s=02ff2f62f0eed704232325e9a82aa85e"
                            alt="iET iPhone"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-4.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862255&s=71717867d1f9651c7f99b5db5e428d82"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-4.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862255&s=71717867d1f9651c7f99b5db5e428d82"
                            alt="iET Poster"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-5.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862257&s=b95fb9939e8919a53721a3536760bf0c"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-5.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862257&s=b95fb9939e8919a53721a3536760bf0c"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-3.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862253&s=b0b226990cad5209e2c7837caf593d69"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-3.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862253&s=b0b226990cad5209e2c7837caf593d69"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-2.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862251&s=f17aecdbb70e62e73735efc367d4d51a"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-2.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862251&s=f17aecdbb70e62e73735efc367d4d51a"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full w-5/6 px-2 md:w-2/3 lg:pl-3 lg:pr-3 xl:w-2/4 xl:pl-4 xl:pr-4">
                    <div className="w-full">
                      <div className="relative w-full overflow-hidden pt-[33.75rem]">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-1.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862248&s=fe0fa50d4b15db9b3450973601b51599"
                            type="image/webp"
                          />
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/Ipad-1.png?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621862248&s=fe0fa50d4b15db9b3450973601b51599"
                            alt="iET Billboard"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex w-full justify-center text-white">
                <div className="flex items-center">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950"
                    href=""
                  >
                    <svg
                      className="h-3 w-3 cursor-pointer"
                      fill="rgb(255, 255, 255)"
                      height="16"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7l45.2 45.3-22.6 22.6-89.4 89.4H448v64H125.3l89.4 89.4 22.5 22.6-45.2 45.3-22.6-22.6-144-144z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                  </a>

                  <a
                    className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950"
                    href=""
                  >
                    <svg
                      className="h-3 w-3 cursor-pointer"
                      fill="rgb(255, 255, 255)"
                      height="16"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M422.6 278.6l22.7-22.6-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6 89.4 89.4H0v64h322.7l-89.4 89.4-22.5 22.6 45.2 45.3 22.6-22.6 144-144z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfter />

      <section className="w-full bg-neutral-950 py-10 text-black lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="mb-5 w-full px-2 lg:mb-0 lg:w-[37.5%] lg:pl-3 lg:pr-3 xl:w-[43.75%] xl:pl-4 xl:pr-4">
              <div className="mb-3 inline-flex w-auto items-center xl:absolute xl:left-[1.00rem] xl:top-[0.75rem] xl:mb-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Craft</div>
              </div>
              <h2 className="indent-32 text-5xl text-white">
                Tradition, Quality, and Local Flavor
              </h2>
            </div>
            <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="w-full lg:pr-10">
                <p className="mb-6">
                  Blessed Kettle Brewing, a microbrewery in Foley, AL, needed
                  assistance in developing a brand voice that resonates with
                  their local audience. We crafted content that not only
                  enhances their SEO but also clearly communicates their unique
                  brewing process and commitment to quality. The result is a
                  warm, inviting tone that sets them apart in the competitive
                  craft beer market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <h1 className="text-center text-[7rem] font-bold uppercase leading-none text-white">
          Original Audio Entertainment for the Whole Family
        </h1>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-[1fr_3fr] gap-5">
            <div className="col-start-1">
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-500">
                  <span>Quick Links</span>
                </h4>

                <ul className="space-y-4">
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#what-we-did"
                    >
                      What we did
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#highlights"
                    >
                      Highlights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#key-insights"
                    >
                      Key insights
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-start-2">
              <span className="text-sm uppercase text-stone-500">
                <sub>#AUDIOENTERTAINER</sub>
              </span>
              <div className="text-[1.75rem] leading-[2.5rem] text-white">
                Ready to elevate its digital presence, The Merry Beggars turned
                to Brewww for help with consolidating their full range of audio
                entertainment into a single platform. Today, it's the go-to
                destination for original stories and top-shelf audio
                productions, captivating millions of listeners worldwide and
                earning multiple industry accolades.
              </div>
              <div className="mt-8 leading-8">
                After a thorough partner selection process, Brewww was chosen to
                help The Merry Beggars become a leader in the audio
                entertainment industry. We developed a comprehensive digital
                platform that replaced several fragmented services, becoming the
                sole practical access point to The Merry Beggars' world of
                storytelling. We've since tackled multiple projects together,
                with our partnership continuing to flourish.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-end">
            <div className="mb-5 w-full max-w-[30.98rem]">
              <div className="relative h-72">
                <Image
                  src={AudioImageOne}
                  alt="Audio production studio equipment"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[47.09rem] self-start">
              <div className="relative h-[47.09rem]">
                <Image
                  src={AudioImageTwo}
                  alt="Voice actor recording in studio"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-row">
            <div className="w-1/2 pr-8">
              <div className="relative h-full">
                <Image
                  src={AudioImageThree}
                  alt="Audio production studio setup"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h1 className="mb-16 text-[6rem] font-bold uppercase leading-none text-white">
                What we did
              </h1>
              <div className="mt-8 text-[1.75rem] leading-8 text-white">
                <span className="mr-4 text-sm uppercase text-stone-500">
                  <sub>#AUDIOENTERTAINER</sub>
                </span>
                Brewww supported The Merry Beggars with a fully self-empowered
                team across design, web development, backend development and QA.
                We continue working closely with The Merry Beggars' product
                management to this day.
              </div>
              <div className="mt-16">
                <p className="mb-8">
                  <span>
                    — Web and backend development for The Merry Beggars platform
                    <br />
                    — Design and development of features used by all The Merry
                    Beggars digital products
                    <br />
                    — Cross-departmental collaboration
                    <br />— Ongoing support and post-launch optimization
                  </span>
                </p>

                <h4 className="mt-12 text-xs font-bold uppercase text-stone-500">
                  Links
                </h4>

                <p className="mt-4">
                  <a className="text-red-700 underline" href="#">
                    <span className="cursor-pointer">Website</span>
                  </a>
                  <br />
                  <a className="text-red-700 underline" href="#">
                    <span className="cursor-pointer">Mobile app</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-zinc-950">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee-reverse flex items-center">
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
          <div
            className="animate-marquee-reverse flex items-center"
            aria-hidden="true"
          >
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="container mx-auto px-4">
          <ul className="grid list-none grid-cols-[630.922px_374.844px_481.234px] grid-rows-[19.75rem] gap-5 text-neutral-400">
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  150K+
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Active app users in a few months post-release
                </span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  47
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Countries using app
                </span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  2x
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Winner of eMobility Excellence
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-start gap-24">
            <div className="w-3/5 pt-48">
              <div className="relative">
                <Image
                  className="h-auto w-full max-w-full object-cover"
                  src={AudioImageFive}
                  alt="Audio Image Five"
                  width={820}
                  height={1088}
                />
              </div>
            </div>
            <div className="w-2/5">
              <div>
                <Image
                  className="h-auto w-4/5 max-w-full object-contain"
                  src={AudioImageFour}
                  alt="Audio Image Four"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <h3 className="mr-4 whitespace-nowrap text-9xl font-bold uppercase text-stone-500">
                Key Insights
              </h3>
              <svg
                className="max-w-full text-brand-gold"
                fill="none"
                height="20"
                width="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-8 flex-1">
              <p className="my-4">
                <Link className="text-brand-gold underline" href="">
                  01. All-in-one native mobile app
                </Link>
                <br />
                <Link className="text-brand-gold underline" href="">
                  02. Matching TMB Audio quality
                </Link>
                <br />
                <Link className="text-brand-gold underline" href="">
                  03. Cross-team collaboration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pb-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="-rotate-90 transform text-[35rem] font-bold uppercase text-white opacity-10">
                01
              </div>
            </div>
            <div>
              <h1 className="mb-8 text-[6rem] font-bold uppercase leading-none text-white">
                All-in-one audio platform
              </h1>
              <h3 className="text-[1.75rem] font-semibold leading-8 text-white">
                Creating the ultimate entertainment experience
              </h3>
              <p className="mt-4">
                To make The Merry Beggars platform the ultimate audio
                entertainment destination, we first focused on user experience
                and content curation — to understand how to better engage and
                delight our listeners. We developed a range of features across
                the platform, including personalized recommendations, seamless
                playlist creation, podcast subscriptions, interactive
                storytelling experiences, community forums for fans, and
                exclusive behind-the-scenes content from our original
                productions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pt-20 text-neutral-400">
        <div
          className="container relative mx-auto px-0"
          style={{ aspectRatio: "3/2" }}
        >
          <Image
            src={AudioImageSeven}
            alt="Audio platform showcase"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-start-6 col-end-11">
              <h3 className="mb-8 text-[1.75rem] font-semibold leading-8 text-white">
                <b className="font-bold">
                  Specialized teams for each production
                </b>
              </h3>
              <p>
                Throughout our creative process, The Merry Beggars assigns
                specialized teams to each audio production, ensuring
                high-quality content and efficient storytelling. Our approach
                allows for faster development of new shows while maintaining our
                commitment to excellence. At any given time, we may have
                multiple teams working on various projects, from podcasts to
                audio dramas. Our writers, voice actors, sound designers, and
                producers collaborate seamlessly, often co-leading their
                respective productions from concept to final release. This
                structure enables us to consistently deliver engaging and
                innovative audio entertainment to our listeners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <div className="relative">
                <Image
                  src={AudioImageSix}
                  alt="Audio Image Six"
                  width={623}
                  height={623}
                  className="max-w-full"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="relative">
                <Image
                  src={AudioImageEight}
                  alt="Audio Image Eight"
                  width={384}
                  height={488}
                  className="max-w-full"
                />
              </div>
              <figure className="mt-8">
                <blockquote className="mt-4 italic">
                  I've worked in software development for 8 years, and I'd never
                  experienced a provider that always delivers such high quality
                  on time. Usually, if you have a large provider that brings all
                  types of people to the table, you can have someone who isn't
                  that good. However, we have nothing to complain about Brewww.
                </blockquote>
                <div className="mt-4 text-xs uppercase">
                  <div>
                    <span className="font-bold text-white">Peter Atkinson</span>
                    <span className="ml-2 text-stone-500">
                      President, The Merry Beggars
                    </span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pb-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="-rotate-90 transform text-[35rem] font-bold uppercase text-white opacity-10">
                02
              </div>
            </div>
            <div>
              <h1 className="mb-8 text-[6rem] font-bold uppercase leading-none text-white">
                Matching TMB Audio quality
              </h1>
              <h3 className="text-[1.75rem] font-semibold leading-8 text-white">
                Removing all decision fatigue
              </h3>
              <p className="mt-4">
                To elevate The Merry Beggars platform, we drew inspiration from
                industry leaders like Disney and Headspace, focusing on
                streamlining the user experience and eliminating decision
                fatigue. Our strategy centered on creating an intuitive
                interface that guides users effortlessly to their desired
                content. We implemented smart categorization, personalized
                recommendations, and a simplified navigation system, making it
                easier than ever for listeners to discover, enjoy, and share
                episodes. By reducing cognitive load and enhancing content
                accessibility, we transformed the platform into a seamless audio
                entertainment destination that keeps users engaged and coming
                back for more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-zinc-950 py-20 pl-12 text-neutral-400">
        <div className="animate-slider flex space-x-12">
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[59.63rem]">
              <Image
                src={AudioImageSeven}
                alt="Audio production studio"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[48.90rem]">
              <Image
                src={AudioImageEight}
                alt="Voice actor recording"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[48.90rem]">
              <Image
                src={AudioImageFour}
                alt="Sound mixing console"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[59.63rem]">
              <Image
                src={AudioImageTwo}
                alt="Podcast recording session"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[59.63rem]">
              <Image
                src={AudioImageFive}
                alt="Audio editing workstation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[48.90rem]">
              <Image
                src={AudioImageOne}
                alt="Microphone in recording booth"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="relative h-[59.63rem] w-[59.63rem]">
              <Image
                src={AudioImageFive}
                alt="Audio production team meeting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex cursor-grab justify-center bg-zinc-950 text-neutral-400">
          <span className="inline-block h-[2px] w-[100px] bg-stone-400" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
          <span className="inline-block h-[2px] w-[100px] bg-neutral-600" />
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-start-6 col-end-11">
              <h3 className="mb-8 text-[1.75rem] font-semibold leading-8 text-white">
                <b className="font-bold">Cross-team collaboration</b>
              </h3>
              <p>
                Our cross-team collaboration is a key strength that allows us to
                deliver high-quality audio productions efficiently. We have a
                dedicated team of writers, voice actors, sound designers, and
                producers who work together seamlessly to bring each production
                to life. This collaborative approach ensures that our shows are
                not only engaging but also consistent in quality and style.
                allows for faster development of new shows while maintaining our
                commitment to excellence. At any given time, we may have
                multiple teams working on various projects, from podcasts to
                audio dramas. Our writers, voice actors, sound designers, and
                producers collaborate seamlessly, often co-leading their
                respective productions from concept to final release. This
                structure enables us to consistently deliver engaging and
                innovative audio entertainment to our listeners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <div className="relative">
                <Image
                  src={AudioImageSix}
                  alt="Audio Image Six"
                  width={623}
                  height={623}
                  className="max-w-full"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="relative">
                <Image
                  src={AudioImageEight}
                  alt="Audio Image Eight"
                  width={384}
                  height={488}
                  className="max-w-full"
                />
              </div>
              <figure className="mt-8">
                <blockquote className="mt-4 italic">
                  I've worked in software development for 8 years, and I'd never
                  experienced a provider that always delivers such high quality
                  on time. Usually, if you have a large provider that brings all
                  types of people to the table, you can have someone who isn't
                  that good. However, we have nothing to complain about Brewww.
                </blockquote>
                <div className="mt-4 text-xs uppercase">
                  <div>
                    <span className="font-bold text-white">Peter Atkinson</span>
                    <span className="ml-2 text-stone-500">
                      President, The Merry Beggars
                    </span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 pb-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="-rotate-90 transform text-[35rem] font-bold uppercase text-white opacity-10">
                03
              </div>
            </div>
            <div>
              <h1 className="mb-8 text-[6rem] font-bold uppercase leading-none text-white">
                All-in-one audio platform
              </h1>
              <h3 className="text-[1.75rem] font-semibold leading-8 text-white">
                Creating the ultimate entertainment experience
              </h3>
              <p className="mt-4">
                To make The Merry Beggars platform the ultimate audio
                entertainment destination, we first focused on user experience
                and content curation — to understand how to better engage and
                delight our listeners. We developed a range of features across
                the platform, including personalized recommendations, seamless
                playlist creation, podcast subscriptions, interactive
                storytelling experiences, community forums for fans, and
                exclusive behind-the-scenes content from our original
                productions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative" style={{ aspectRatio: "1/1" }}>
              <Image
                src={AudioImageSix}
                alt="Audio Image Six"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative" style={{ aspectRatio: "1/1" }}>
              <Image
                src={AudioImageSix}
                alt="Audio Image Six"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-start-6 col-end-11">
              <h3 className="mb-8 text-[1.75rem] font-semibold leading-8 text-white">
                <b className="font-bold">Cross-team collaboration</b>
              </h3>
              <p>
                Our cross-team collaboration is a key strength that allows us to
                deliver high-quality audio productions efficiently. We have a
                dedicated team of writers, voice actors, sound designers, and
                producers who work together seamlessly to bring each production
                to life. This collaborative approach ensures that our shows are
                not only engaging but also consistent in quality and style.
                allows for faster development of new shows while maintaining our
                commitment to excellence. At any given time, we may have
                multiple teams working on various projects, from podcasts to
                audio dramas. Our writers, voice actors, sound designers, and
                producers collaborate seamlessly, often co-leading their
                respective productions from concept to final release. This
                structure enables us to consistently deliver engaging and
                innovative audio entertainment to our listeners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pt-20 text-neutral-400">
        <div
          className="container relative mx-auto px-0"
          style={{ aspectRatio: "3/2" }}
        >
          <Image
            src={AudioImageSeven}
            alt="Audio platform showcase"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </>
  );
}

async function queryPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<Work | null> {
  const payload = await getPayloadHMR({ config: configPromise });
  try {
    const result = await payload.find({
      collection: "work",
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    return result.docs[0] || null;
  } catch (error) {
    return null;
  }
}
