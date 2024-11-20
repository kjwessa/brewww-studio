import Image from "next/image";
import Link from "next/link";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { ImageGrow } from "./ImageGrow/index";
import { HomeHeroSection } from "./HomeHeroSection/index";
import { WorkGridSection } from "./WorkGridSection/index";
import { BlogGridSection } from "./BlogGridSection/index";
import { ServicesSection } from "./ServicesSection/index";
import { HomeAboutSection } from "./HomeAboutSection";
import { HomeImpactSection } from "./HomeImpactSection";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedOn",
    where: {
      _status: {
        equals: "published",
      },
      featured: {
        equals: true,
      },
    },
  });

  const projects = await payload.find({
    collection: "work",
    limit: 4,
    sort: "-publishedOn",
    where: {
      _status: {
        equals: "published",
      },
      featured: {
        equals: true,
      },
    },
  });

  const services = await payload.find({
    collection: "services",
    limit: 1000,
  });

  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <WorkGridSection projects={projects.docs} />
      <ImageGrow />
      <ServicesSection services={services.docs} />
      <BlogGridSection posts={posts.docs} />
      <HomeImpactSection />
      <section className="bg-brand-dark-bg text-zinc-50">
        <div className="relative content-stretch items-start justify-start px-24 py-48 font-light">
          <div className="relative m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start">
            <div className="relative grid h-[40.63rem] auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[minmax(auto,.25fr)_auto_auto_auto_auto_auto_minmax(auto,.25fr)] gap-4">
              <div className="relative z-10 col-start-1 col-end-6 row-start-1 row-end-4 self-center">
                <div className="overflow-hidden text-[3.63rem] leading-none">
                  <h2 className="min-h-[0vw]">
                    We focus on results. It's that{" "}
                    <strong className="font-extrabold">simple</strong>.
                  </h2>
                </div>
                <div className="my-8 pr-28">
                  Our goal is not just to make pretty websites. Our goal is to
                  find creative solutions to complex problems and deliver
                  engaging products with real results.
                </div>
                <div className="overflow-hidden font-bold">
                  <Link
                    className="relative mb-1 inline-block max-w-full"
                    href="/capabilities"
                  >
                    <div className="uppercase" id="div-5">
                      View Capabilities
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
                  </Link>
                </div>
              </div>
              <div className="col-start-4 col-end-11 row-start-1 grid h-[37.50rem] w-full auto-cols-fr grid-cols-[.25fr_1fr_1fr_1fr_1fr_1fr_1fr_.25fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto] overflow-hidden">
                <div className="relative col-start-1 col-end-9 row-start-1 h-[37.50rem] w-full">
                  <Image
                    alt="Broken glass light"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/5efa9cb3a8fd7ff9d3b48a92_broken-glass-light.1920.jpg"
                  />
                </div>
                <div className="col-start-1 col-end-2 row-start-1 row-end-5 w-16" />
                <div className="col-start-8 col-end-9 row-start-5 w-16" />
              </div>
              <div className="z-10 col-start-6 col-end-12 row-start-1 row-end-4 grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-4">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end justify-self-end">
                  Joseph House
                  <br />‍
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-3 min-h-[0vw] self-center justify-self-end text-[8.38rem] font-bold leading-none">
                  760%
                  <br />‍
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-4 pl-5">
                  increase in online donations through their new website.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-24 font-light text-neutral-900 sm:px-12 sm:py-36 md:px-24">
        <div className="mx-auto max-w-[62.50rem]">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 mb-5">
              <span className="font-bold uppercase">
                <span className="text-orange-400">/</span> What we do (and Do
                Well)
              </span>
            </div>
            <h2 className="col-span-6 text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[3.63rem]">
              Brewww is a creative studio that finds the places where{" "}
              <strong className="font-extrabold">needs</strong>,{" "}
              <strong className="font-extrabold">stories</strong>, and{" "}
              <strong className="font-extrabold">technology</strong> overlap.
            </h2>
            <div className="col-span-2 flex flex-col">
              <h4 className="mb-2 text-lg">Branding</h4>
              <ul>
                <li>
                  <Link
                    href="/capabilities/brand-strategy"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/brand-identity"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/brand-content"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Brand Content
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col">
              <h4 className="mb-2 text-lg">Web</h4>
              <ul>
                <li>
                  <Link
                    href="/capabilities/web-design-and-ux"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Web Design & UX
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/web-development"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/seo-and-search"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    SEO & Search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col">
              <h4 className="mb-2 text-lg">Creative</h4>
              <ul>
                <li>
                  <Link
                    href="/capabilities/graphic-design"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/photography"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/social-media-management"
                    className="relative mb-2 inline-block font-bold uppercase text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[20px] after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
