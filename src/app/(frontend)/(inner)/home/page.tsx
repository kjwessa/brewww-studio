import Image from "next/image";
import { ImageGrow } from "./ImageGrow";
import Link from "next/link";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    sort: "-publishedOn",
  });
  return (
    <>
      <section className="flex min-h-[90vh] items-center justify-center bg-brand-dark-bg text-zinc-50">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h1 className="mx-auto mb-6 max-w-5xl text-center text-display-large font-bold leading-[0.9] tracking-tighter">
            <span className="opacity-50">If </span>
            good enough
            <span className="opacity-50">
              {" "}
              isn't working out, why not aim for{" "}
            </span>
            <span className="text-brand-gold">great</span>
            <span className="opacity-50">?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl opacity-70 md:text-2xl">
            We craft brand identities, websites that drive results, and
            compelling storytelling that showcase your full potential. Local
            feel, global reach.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-white/35" />
              <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 transform bg-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg text-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-12 py-16 sm:py-24 md:py-32">
              <div className="col-span-9 col-start-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                From fast-growing startups to experienced companies, we deliver
                functional design, high-quality code and well-thought strategy
                to increase your odds of success in the digital world.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg py-16 text-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-8">
            <div
              className="col-start-3 col-end-4 row-start-2 row-end-3 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6"
              style={{ gridArea: "2 / 3 / 3 / 4" }}
            >
              <div className="text-right text-[5.88rem] font-medium leading-none">
                <div>+26</div>
              </div>
              <div className="flex flex-col gap-[1.13rem]">
                <div className="text-5xl font-medium">Awards</div>
                <div className="text-base opacity-80">
                  <div>
                    Celebrating our commitment to excellence, innovation, and
                    the transformative power of outstanding design.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-start-1 col-end-2 row-start-1 row-end-2 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6"
              style={{ gridArea: "1 / 1 / 2 / 2" }}
            >
              <div className="text-right text-[5.88rem] font-medium leading-none">
                <div>2024</div>
              </div>
              <div className="flex flex-col gap-[1.13rem]">
                <div className="text-5xl font-medium">Years of experience</div>
                <div className="text-base opacity-80">
                  <div>
                    We elevated our design agency to new heights, embracing
                    cutting-edge trends and innovative practices
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-start-3 col-end-4 row-start-1 row-end-2 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6"
              style={{ gridArea: "1 / 3 / 2 / 4" }}
            >
              <div className="text-right text-[5.88rem] font-medium leading-none">
                <div>137%</div>
              </div>
              <div className="flex flex-col gap-[1.13rem]">
                <div className="text-5xl font-medium">Growth</div>
                <div className="text-base opacity-80">
                  <div>
                    The trust our clients place in our ability to deliver
                    exceptional design solutions.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-start-2 col-end-3 row-start-2 row-end-3 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6"
              style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <div className="text-right text-[5.88rem] font-medium leading-none">
                <div>+30</div>
              </div>
              <div className="flex flex-col gap-[1.13rem]">
                <div className="text-5xl font-medium">Clients</div>
                <div className="text-base opacity-80">
                  <div>
                    Bringing unique challenges that have enriched our creative
                    journey and expanded our industry impact.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-start-2 col-end-3 row-start-3 row-end-4 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6"
              style={{ gridArea: "3 / 2 / 4 / 3" }}
            >
              <div className="text-right text-[5.88rem] font-medium leading-none">
                <div>+56</div>
              </div>
              <div className="flex flex-col gap-[1.13rem]">
                <div className="text-5xl font-medium">Cases</div>
                <div className="text-base opacity-80">
                  <div>
                    Our diverse project experience showcases our ability to
                    tailor bespoke solutions that drive success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg text-zinc-50">
        <div className="py-16">
          <div className="relative grid auto-cols-fr grid-cols-[.75fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.75fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-4">
            <div
              className="relative col-start-1 row-start-1 h-screen w-full"
              style={{
                gridArea: "1/1/10/6",
                gridRowEnd: "10",
              }}
            >
              <Image
                src="/5ffde49e22ac4c70dd0e883e_DSCF6786.1920.jpg"
                alt="Background"
                fill
                className="object-cover opacity-[0.975112]"
                style={{
                  objectPosition: "50% 50%",
                }}
              />
            </div>
            <h6
              className="col-start-6 col-end-9 row-start-4 row-end-5 min-h-[0vw] self-end text-4xl"
              style={{
                gridArea: "4/6/5/9",
              }}
            >
              IES National
            </h6>
            <div
              className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
              style={{
                gridArea: "5/4/6/9",
              }}
            >
              <h2 className="mb-8 min-h-[0vw]">Sustainability by Design</h2>
            </div>
            <div
              className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
              style={{
                gridArea: "5/4/6/9",
              }}
            >
              <h2 className="z-10 mb-8 min-h-[0vw] overflow-visible">
                Sustainability by Design
              </h2>
            </div>
            <div
              className="col-start-8 col-end-10 p-5 font-bold"
              style={{
                gridArea: "8/8/9/10",
                gridRowEnd: "9",
                gridRowStart: "8",
              }}
            >
              <a
                className="relative inline-block max-w-full"
                href="/work/ies-national-pensacola-fl"
              >
                <div className="uppercase">View Project</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  <a
                    className="relative mb-1 inline-block max-w-full"
                    href="/capabilities"
                  >
                    <div className="uppercase" id="div-5">
                      View Capabilities
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
                  </a>
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

      <ImageGrow />

      <section className="relative bg-white pt-3 text-black">
        <div className="relative z-10 m-auto w-full max-w-[100.00rem] px-24 pt-24">
          <div className="flex flex-wrap px-24">
            <div className="-ml-3.5 w-full max-w-[91.6667%] basis-7/12">
              <p className="mb-6 uppercase">Our Blog</p>
              <h2 className="mb-28 text-[3.25rem] leading-none">
                News and Insights for the modern business.
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 top-0 z-0 w-[20%] bg-[#F9F9F9]" />
        <div className="m-auto w-full max-w-[100.00rem] px-24 text-black">
          <div className="flex flex-wrap px-24">
            <div className="relative w-full max-w-[50%] basis-1/2">
              <div className="-ml-24 mb-36 w-[33.44rem] pb-3">
                <Link className="relative mt-24" href="">
                  <div className="-ml-44 -mt-24 mb-5 overflow-hidden pl-44 pt-24">
                    <div className="relative h-[34.38rem] w-full bg-zinc-100">
                      <div className="absolute left-[-3.44rem] top-0 z-10 h-96 w-[36.88rem]">
                        <picture className="h-full w-full">
                          <img
                            className="h-96 w-full"
                            src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_033d26b5fd.png"
                            alt="Turn 10 project showcase"
                          />
                        </picture>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl uppercase">
                      <span className="text-sm">Turn 10</span>
                    </h3>
                    <h4 className="text-[2.13rem] leading-9">
                      Highly creative, animated website with 3D animation
                    </h4>
                  </div>
                </Link>
              </div>
              <div className="float-right mb-36 mr-24 w-[33.44rem] pb-3">
                <Link className="relative" href="">
                  <div className="-mt-24 mb-5 overflow-hidden pt-24">
                    <div className="relative h-[34.38rem] w-full bg-[#F9F9F9]">
                      <div className="absolute left-[8.13rem] top-[0.31rem] z-10 h-[40.31rem] w-96">
                        <picture className="h-full w-full">
                          <img
                            className="h-[44.64rem] w-full"
                            src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_82708bebb9.png"
                            alt="Fast Travel Games project showcase"
                          />
                        </picture>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl uppercase">
                      <span className="text-sm">Fast Travel Games</span>
                    </h3>
                    <h4 className="text-[2.13rem] leading-9">
                      Fun 3D & Three.js animated website with Headless CMS
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[50%] basis-1/2">
              <div className="mb-36 mt-28 w-[33.44rem] pb-3">
                <Link className="relative" href="">
                  <div className="-mt-24 mb-5 overflow-hidden pt-24">
                    <div className="relative h-[34.38rem] w-full bg-zinc-100">
                      <div className="absolute left-[-4.38rem] top-[-1.88rem] z-10 h-[40.94rem] w-[42.50rem]">
                        <picture className="h-full w-full">
                          <img
                            className="h-[37.53rem] w-full"
                            src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_611a814312.png"
                            alt="Studiotypes project showcase"
                          />
                        </picture>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl uppercase">
                      <span className="text-sm">Studiotypes</span>
                    </h3>
                    <h4 className="text-[2.13rem] leading-9">
                      3D animation led website with complex Blender models
                    </h4>
                  </div>
                </Link>
              </div>
              <div className="float-right -mr-24 mb-36 w-[33.44rem] pb-3">
                <Link className="relative" href="">
                  <div className="-ml-16 -mt-24 mb-5 overflow-hidden pl-16 pt-24">
                    <div className="relative h-[34.38rem] w-full bg-zinc-300">
                      <div className="absolute left-[-3.13rem] top-[-1.25rem] z-10 h-96 w-[37.50rem]">
                        <picture className="h-full w-full">
                          <img
                            className="h-[43.50rem] w-full"
                            src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_wizards_fade_sq_4612e05faf.png"
                            alt="Invoke Studios project showcase"
                          />
                        </picture>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl uppercase">
                      <span className="text-sm">Invoke Studios</span>
                    </h3>
                    <h4 className="text-[2.13rem] leading-9">
                      Branding & website for the Wizards of the Coast studio
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg text-zinc-50">
        <div className="container mx-auto px-4 py-24">
          <div className="mb-12">
            <div className="mb-2 font-bold uppercase">
              <span className="text-orange-400">/</span> Featured insights
            </div>
            <h2 className="text-2xl font-light leading-tight sm:text-3xl md:text-4xl lg:text-[3.63rem]">
              Branding, tech, and business{" "}
              <strong className="font-extrabold">insights.</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col">
              <a
                href="/insights/project-launch-ies-national-sustainable-lighting-by-design"
                className="group"
              >
                <div className="relative mb-4 h-96 w-full overflow-hidden rounded-md">
                  <Image
                    alt="IES National Sustainable Lighting by Design"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/ies-mark.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mb-2">
                  <span className="relative inline-block font-bold">
                    Branding
                    <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-orange-400 transition-all duration-300 group-hover:scale-x-100"></span>
                  </span>
                </div>
                <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                  Project Launch: IES National - Sustainable Lighting by Design
                </h4>
              </a>
            </div>

            <div className="flex flex-col">
              <a
                href="/insights/the-importance-of-a-mobile-friendly-website-and-how-to-test-yours"
                className="group"
              >
                <div className="relative mb-4 h-96 w-full overflow-hidden rounded-md">
                  <Image
                    alt="Mobile-friendly website importance"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/5f629a4559811072bbfe7192_mobile-friendly-hero.1920.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mb-2">
                  <span className="relative inline-block font-bold">
                    Web
                    <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-orange-400 transition-all duration-300 group-hover:scale-x-100"></span>
                  </span>
                </div>
                <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                  The Importance of a Mobile-Friendly Website (and How to Test
                  Yours)
                </h4>
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="/insights/what-are-the-differences-between-branding-and-marketing"
                className="group"
              >
                <div className="relative mb-4 h-96 w-full overflow-hidden rounded-md">
                  <Image
                    alt="Branding vs Marketing"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/5f4ae76042e3d8ce344a2b23_mountain-and-couch.1920.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mb-2">
                  <span className="relative inline-block font-bold">
                    Branding
                    <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-orange-400 transition-all duration-300 group-hover:scale-x-100"></span>
                  </span>
                </div>
                <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                  What Are the Differences Between Branding and Marketing?
                </h4>
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="/insights/savoring-the-sweetness-meet-the-leadership-of-brewww"
                className="group"
              >
                <div className="relative mb-4 h-96 w-full overflow-hidden rounded-md">
                  <Image
                    alt="Brewww Leadership"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/bride-and-groom-smiling.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mb-2">
                  <span className="relative inline-block font-bold">
                    Studio
                    <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-orange-400 transition-all duration-300 group-hover:scale-x-100"></span>
                  </span>
                </div>
                <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                  Savoring the Sweetness: Meet the Leadership of Brewww
                </h4>
              </a>
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

      <section className="bg-sky-50 pt-5 min-[766px]:pt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 py-12 text-center min-[766px]:pb-16 min-[766px]:pl-10 min-[766px]:pr-10 min-[766px]:pt-16 min-[1025px]:pb-20 min-[1025px]:pt-20">
          <div className="text-[3.5rem] leading-tight text-black">
            <p>
              Got a creative <em className="italic">challenge</em> we
            </p>
            <p>
              should <span className="underline">hear</span>?
            </p>
          </div>

          <Link
            href=""
            className="mt-8 inline-block items-center justify-center overflow-hidden rounded-full bg-stone-900 py-3 pl-6 pr-12 text-xl text-white min-[766px]:mt-10 min-[766px]:pb-3.5 min-[766px]:pl-8 min-[766px]:pr-8 min-[766px]:pt-3.5 min-[1025px]:mt-16"
          >
            Let's Chat
          </Link>
        </div>
      </section>

      <section className="text-black">
        <div className="bg-[#D2B48C]">
          <div className="grid grid-cols-[371.75px_743.5px_371.75px] grid-rows-[auto] gap-10 py-28">
            <div />

            <div className="flex flex-col justify-center px-8 text-center">
              <div className="mb-8 text-5xl">
                <p>
                  We <span className="inline-block">challenge</span> what
                  creative <span className="italic">can do</span>, and{" "}
                  <span className="underline">brands</span>{" "}
                  <span className="italic">can be.</span>
                </p>
              </div>

              <Link
                className="mt-6 inline-block items-center justify-center rounded-full bg-stone-900 py-4 pl-8 pr-12 text-lg text-white"
                href=""
              >
                Explore our work
              </Link>
            </div>

            <div className="flex items-center justify-start">
              <img
                className="h-44 w-28"
                src="https://www.robot-food.com/images/pen-jetpack.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container mx-auto px-4 py-24">
          <div className="mb-16 flex flex-wrap">
            <div className="mb-8 w-full pr-6 md:mb-0 md:w-1/2">
              <p className="mb-6 text-2xl">
                Ever noticed how the best ideas feel like common sense?
              </p>
              <p className="text-2xl">
                They're effortlessly gettable, and disruptive in the right way.
                The kind of disruption that silences, rather than shouts.
              </p>
            </div>
            <div className="w-full pl-6 md:w-1/2">
              <p className="mb-6 text-2xl">
                Common sense is simple, but simple isn't easy. Ask the right
                questions, and an idea can silence the whole category.
              </p>
              <p className="text-2xl">
                When big plans need big ideas, we're your first, last and best
                call.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 row-span-1">
            <img
              className="h-auto w-full object-cover"
              src="https://www.robot-food.com/images/About/about-1-2023.jpg"
              alt="About 1"
            />
          </div>
          <div>
            <img
              className="h-auto w-full object-cover"
              src="https://www.robot-food.com/images/About/about-2-2023-editted.jpg"
              alt="About 2"
            />
          </div>
          <div>
            <img
              className="h-auto w-full object-cover"
              src="https://www.robot-food.com/images/About/about-3-2023.jpg"
              alt="About 3"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              className="h-auto w-full object-cover"
              src="https://www.robot-food.com/images/About/about-4-2023.jpg"
              alt="About 4"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-3 gap-10 py-28">
          <div className="col-span-1" />

          <div className="col-span-1 flex flex-col justify-center text-center text-5xl text-black">
            <p>
              We <em>build</em> brands.
            </p>
            <p>
              We <em>elevate</em> brands.
            </p>
            <p>
              We <em>connect</em> brands
            </p>
            <p className="underline">with people.</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="container mx-auto text-2xl">
          <div className="flex flex-wrap py-24">
            <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2">
              <p className="mb-4">
                What gets us out of bed in the morning? Being bold, challenging
                convention and making an impact.
              </p>
              <p>
                We don't validate ourselves by paying to enter awards. Because
                we'd rather spend our time where it really counts.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <p className="mb-4">
                The success of your brand is all that matters.
              </p>
              <p>
                In every part of the process, from brand positioning to artwork
                rollout, we're just as invested as you are. Your challenges are
                our challenges. Your wins are our wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="flex py-28">
            <div className="w-1/3 pr-8">
              <h2 className="text-[4.13rem] leading-none text-black">
                Brands we partner with:
              </h2>
            </div>
            <div className="w-2/3">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-01.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-02.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-10.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-12.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-07.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-14.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/Client_Logos_197x144_v5-2023-302.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-21.svg"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 w-44"
                    src="https://www.robot-food.com/images/Client-Logos/_thumbnailFeatured/c-logos-20.svg"
                    alt="Brand logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-neutral-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-4">
            <div className="z-10 col-start-1 col-end-9 row-start-1 row-end-3 flex flex-col justify-center">
              <h3 className="mb-6 text-5xl font-thin leading-tight md:text-6xl lg:text-7xl">
                Results are everything.
                <br />
                It's that <span className="font-bold">simple</span>.
              </h3>
              <div className="max-w-lg">
                <p className="mb-4 text-base">
                  From award-winning websites to complex web experiences, we've
                  done it all. We've helped Games Studios use the web to hire,
                  acquire players, and access new markets.
                </p>
                <p className="mb-2 uppercase">
                  <a
                    href=""
                    className="transition-colors hover:text-brand-gold"
                  >
                    View Services
                  </a>
                </p>
              </div>
            </div>
            <div className="relative col-start-7 col-end-13 row-start-1 row-end-3 h-[50vh] overflow-hidden">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                id="video-1"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/hotwheelz_a7a9952e87.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute bottom-0 right-0 p-4 text-right">
                <p className="mb-1 text-[10rem] font-bold leading-none">50%</p>
                <p className="text-sm">
                  Increase in prospective <br />
                  employee engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[37.50rem] w-screen bg-white p-6 text-black min-[576px]:h-[33.13rem] min-[992px]:h-screen min-[992px]:min-h-[34.38rem] min-[992px]:p-12 min-[1200px]:min-h-[40.63rem] min-[1200px]:p-20 min-[1600px]:min-h-[46.88rem] min-[1600px]:p-24">
        <div className="relative h-full w-full overflow-hidden bg-gray-800 text-white">
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <video className="h-auto w-[55.31rem] max-w-[17.50rem] object-contain min-[576px]:max-w-[21.25rem] md:max-w-[31.06rem] min-[992px]:max-w-[37.63rem] min-[1200px]:max-w-[44.38rem] min-[1600px]:max-w-[55.31rem]">
                <source
                  src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/playground_games_d668388ab5.webm"
                  type="video/webm"
                />
                <source
                  src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/playground_games_ed3cb8c0ea.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <aside className="absolute bottom-[1.88rem] left-[1.88rem] z-[3] w-80 max-w-[14.38rem] md:bottom-[2.50rem] md:left-[2.50rem] md:w-[33%] md:max-w-[15.63rem] min-[992px]:bottom-[3.13rem] min-[992px]:left-[3.13rem] min-[992px]:w-96 min-[1600px]:bottom-[6.25rem] min-[1600px]:left-[6.25rem]">
              <h4 className="mb-1.5 text-4xl">Playground Games</h4>
              <p className="text-neutral-500">
                Scalable content managed website for the Microsoft games studio.
                <a className="text-black" href="https://1minus1.com/projects">
                  View projects
                </a>
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="relative bg-stone-50 py-36 text-[0.63rem] uppercase">
        <h1 className="m-auto grid w-full max-w-[96.90rem] grid-cols-[repeat(36,_minmax(0px,_1fr))] grid-rows-[220px_195px_195px] text-[16rem] leading-none text-black">
          <div
            className="col-start-12"
            style={{
              gridColumnEnd: "span 12",
            }}
          >
            TAKING
          </div>
          <div
            className="col-start-7"
            style={{
              gridColumnEnd: "span 12",
            }}
          >
            BRANDS
          </div>
          <div
            className="col-start-11"
            style={{
              gridColumnEnd: "span 12",
            }}
          >
            FURTHER
          </div>
        </h1>
        <div className="m-auto grid w-full max-w-[96.90rem] grid-cols-[repeat(36,_minmax(0px,_1fr))] text-lg font-medium text-black">
          <div
            className="absolute bottom-0 left-0 pb-20"
            style={{
              gridColumn: "2 / span 10",
            }}
          >
            <div className="w-32">
              <div>A digital</div>
              <div>first</div>
              <div>design studio</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone-50 py-36 text-black">
        <div className="mx-auto w-full max-w-[96.90rem] px-4">
          <div className="max-w-5xl">
            <p className="mb-8 text-7xl leading-none">
              Through strategy, innovation and creativity we take your brand on
              a journey of discovery and transformation creating emotional
              experiences that leave a lasting impression and drive behaviour.
            </p>
            <a
              className="border-3 relative mt-10 inline-flex h-16 items-center overflow-hidden rounded-full border-solid border-black bg-black px-10 text-xl font-medium text-stone-50 transition-colors hover:bg-stone-50 hover:text-black"
              href="https://outpost.design/about"
            >
              <span className="mr-4">About us</span>
              <svg
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 15 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02 0.535156L12.18 5.73516L0 5.73516L0 7.15516L12.24 7.15516L7.02 12.4152H9L14.92 6.47516L9 0.535156L7.02 0.535156Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="flex min-h-[88vh] flex-col justify-between bg-white text-[2.75rem] leading-none text-stone-950 lg:p-8">
        <div className="absolute left-0 right-0 top-[-100%] z-[-1] h-screen w-full bg-[linear-gradient(198.91deg,_rgb(255,_255,_255)_64.12%,_rgb(250,_246,_249)_72.26%,_rgb(251,_234,_248)_81.42%,_rgb(252,_213,_245)_89.56%,_rgb(254,_185,_241)_98.72%,_rgb(255,_173,_239)_101.78%)]" />
        <div className="text-7xl lg:w-[58.3333vw]">
          <h1 className="w-full">
            brewww is a branding agency with a history of building compelling
            brands for high-quality products and services.
          </h1>
        </div>
        <div className="overflow-hidden text-[1.38rem] leading-7">
          <div className="flex w-full lg:items-end lg:justify-between">
            <div className="lg:w-[33.3333vw]">
              <p className="text-xl">
                <strong className="text-neutral-400">Jobs</strong>:{" "}
                <em className="cursor-pointer italic">
                  brewww is looking for interns!
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
