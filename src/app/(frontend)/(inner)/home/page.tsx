import { StaticNoise } from "@components/Static/index";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <StaticNoise>
        <section className="bg-brand-black flex min-h-[90vh] items-center justify-center text-white">
          <div className="container mx-auto px-4 py-8 md:px-6">
            <h1 className="mx-auto mb-6 max-w-5xl text-center text-[7.2vw] font-bold leading-[0.9] tracking-tighter">
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
      </StaticNoise>
      <section className="bg-brand-black flex min-h-[90vh] items-center justify-center text-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h1 className="mx-auto mb-6 max-w-5xl text-center text-[7.2vw] font-bold leading-[0.9] tracking-tighter">
            While AI is busy hallucinating,
            <span className="text-brand-gold">
              {" "}
              we're crafting kinetic brands
            </span>
            <span className="opacity-50">.</span>
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
      <section className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 py-16 sm:py-24 md:py-32">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                From fast-growing startups to experienced companies, we deliver
                functional design, high-quality code and well-thought strategy
                to increase your odds of success in the digital world.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-8">
            <div
              className="col-start-3 col-end-4 row-start-2 row-end-3 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-zinc-900 p-6"
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
              className="col-start-1 col-end-2 row-start-1 row-end-2 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-zinc-900 p-6"
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
              className="col-start-3 col-end-4 row-start-1 row-end-2 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-zinc-900 p-6"
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
              className="col-start-2 col-end-3 row-start-2 row-end-3 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-zinc-900 p-6"
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
              className="col-start-2 col-end-3 row-start-3 row-end-4 flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-zinc-900 p-6"
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

      <section className="bg-neutral-900 text-white">
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
      <div>
        <div className="relative content-stretch items-start justify-start bg-neutral-900 px-24 py-48 font-light text-white">
          <div className="relative m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start">
            <div className="relative grid h-[40.63rem] auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[minmax(auto,.25fr)_auto_auto_auto_auto_auto_minmax(auto,.25fr)] gap-4">
              <div className="relative z-10 col-start-1 col-end-6 row-start-1 row-end-4 self-center">
                <div className="overflow-hidden text-[3.63rem] leading-none">
                  <h2 className="min-h-[0vw]">
                    We focus on results. Its that{" "}
                    <strong className="font-extrabold">simple</strong>.
                  </h2>
                </div>
                <div className="my-8 pr-28">
                  Our goal is not just to make pretty websites. Our goal is to
                  find creative solutions to complex problems and deliver
                  engaging products with real results.{" "}
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
      </div>
      <div className="relative h-[80vh] w-full bg-neutral-900 text-white">
        <Image
          src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{
            objectPosition: "50% 30%",
          }}
        />
      </div>
      <div>
        <div>
          <div className="content-stretch items-start justify-start bg-neutral-900 px-4 py-8 font-light text-white sm:px-8 sm:py-10 md:px-16 lg:px-24">
            <div className="m-auto flex w-full max-w-[62.50rem] flex-grow flex-col items-stretch justify-center gap-2 self-start">
              <div className="overflow-hidden font-bold uppercase">
                <div className="flex flex-col items-start">
                  <div className="pb-2 text-center sm:pb-3">
                    <span className="text-orange-400">/</span> Featured insights
                  </div>
                </div>
              </div>
              <div className="overflow-visible text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[3.63rem] lg:leading-tight">
                <div className="flex flex-col items-start">
                  <h2 className="min-h-[0vw] pb-2">
                    Branding, tech, and business{" "}
                    <strong className="font-extrabold">insights.</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative content-stretch items-start justify-start bg-neutral-900 px-4 py-8 font-light text-white sm:px-8 sm:py-12 md:px-16 md:py-16 lg:px-24 lg:py-24">
          <div className="relative m-auto flex w-full max-w-[100.00rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start font-bold">
            <div className="m-auto grid auto-cols-fr grid-cols-[.5fr_1fr_1fr_1fr_1fr_.5fr_.5fr_1fr_1fr_1fr_1fr_.5fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-4 sm:gap-6 md:gap-8">
              <div
                className="relative col-start-1 col-end-6 row-start-1 row-end-5"
                style={{ gridArea: "1/1/5/6" }}
              >
                <div className="auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto]">
                  <a
                    className="inline-block max-w-full"
                    href="/insights/project-launch-ies-national-sustainable-lighting-by-design"
                  >
                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                      <Image
                        alt="IES National Sustainable Lighting by Design"
                        className="object-cover"
                        src="/ies-mark.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative flex items-stretch justify-start pb-3 pt-5">
                      <div className="relative">
                        <div className="ml-auto">Branding</div>
                        <div className="absolute bottom-[0.25rem] left-0 right-0 top-auto z-[-2] h-1 bg-orange-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <h4 className="min-h-[0vw] text-4xl">
                        Project Launch: IES National - Sustainable Lighting by
                        Design
                      </h4>
                      <div className="absolute bottom-[-0.50rem] left-0 right-0 top-auto h-0.5 w-96 bg-orange-400" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="relative col-start-7 col-end-12 row-start-2 row-end-6"
                style={{ gridArea: "2/7/6/12" }}
              >
                <div className="auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto]">
                  <a
                    className="inline-block max-w-full"
                    href="/insights/the-importance-of-a-mobile-friendly-website-and-how-to-test-yours"
                  >
                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                      <Image
                        alt="Mobile-friendly website importance"
                        className="object-cover"
                        src="/5f629a4559811072bbfe7192_mobile-friendly-hero.1920.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative flex items-stretch justify-start pb-3 pt-5">
                      <div className="relative">
                        <div className="ml-auto">Web</div>
                        <div className="absolute bottom-[0.25rem] left-0 right-0 top-auto z-[-2] h-1 bg-orange-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <h4 className="min-h-[0vw] text-4xl">
                        The Importance of a Mobile-Friendly Website (and How to
                        Test Yours)
                      </h4>
                      <div className="absolute bottom-[-0.50rem] left-0 right-0 top-auto h-0.5 w-96 bg-orange-400" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="relative col-start-2 col-end-7 row-start-7"
                style={{ gridArea: "7/2/11/7", gridRowEnd: "11" }}
              >
                <div className="auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto]">
                  <a
                    className="inline-block max-w-full"
                    href="/insights/what-are-the-differences-between-branding-and-marketing"
                  >
                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                      <Image
                        alt="Branding vs Marketing"
                        className="object-cover"
                        src="/5f4ae76042e3d8ce344a2b23_mountain-and-couch.1920.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative flex items-stretch justify-start pb-3 pt-5">
                      <div className="relative">
                        <div className="ml-auto">Branding</div>
                        <div className="absolute bottom-[0.25rem] left-0 right-0 top-auto z-[-2] h-1 bg-orange-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <h4 className="min-h-[0vw] text-4xl">
                        What Are the Differences Between Branding and Marketing?
                      </h4>
                      <div className="absolute bottom-[-0.50rem] left-0 right-0 top-auto h-0.5 w-96 bg-orange-400" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="relative col-start-8 col-end-13"
                style={{
                  gridArea: "8/8/12/13",
                  gridRowEnd: "12",
                  gridRowStart: "8",
                }}
              >
                <div className="auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto]">
                  <a
                    className="inline-block max-w-full"
                    href="/insights/savoring-the-sweetness-meet-the-leadership-of-brewww"
                  >
                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                      <Image
                        alt="Brewww Leadership"
                        className="object-cover"
                        src="/bride-and-groom-smiling.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative flex items-stretch justify-start pb-3 pt-5">
                      <div className="relative">
                        <div className="ml-auto">Studio</div>
                        <div className="absolute bottom-[0.25rem] left-0 right-0 top-auto z-[-2] h-1 bg-orange-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <h4 className="min-h-[0vw] text-4xl">
                        Savoring the Sweetness: Meet the Leadership of Brewww
                      </h4>
                      <div className="absolute bottom-[-0.50rem] left-0 right-0 top-auto h-0.5 w-96 bg-orange-400" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative content-stretch items-start justify-start bg-white px-6 py-24 font-light text-neutral-900 sm:px-12 sm:py-36 md:px-24">
          <div className="relative m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start">
            <div className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-4">
              <div className="col-span-4 row-span-1 self-end overflow-hidden font-bold uppercase">
                <div className="flex flex-col items-start">
                  <div className="pb-5">
                    <span className="text-orange-400">/</span> What we do (and
                    Do Well)
                  </div>
                </div>
              </div>
              <div className="col-span-6 row-span-2 overflow-hidden text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[3.63rem]">
                <div className="flex flex-col items-start">
                  <h2 className="min-h-[0vw]">
                    Brewww is a creative studio that finds the places where{" "}
                    <strong className="font-extrabold">needs</strong>,{" "}
                    <strong className="font-extrabold">stories</strong>, and{" "}
                    <strong className="font-extrabold">technology</strong>{" "}
                    overlap.
                  </h2>
                </div>
              </div>
              <div className="col-start-1 col-end-3 row-start-5 row-end-7 overflow-hidden">
                <div className="flex flex-col items-start">
                  <h4 className="min-h-[0vw] text-lg">Branding</h4>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/brand-strategy"
                  >
                    <div className="uppercase text-neutral-900">
                      Brand Strategy
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/brand-identity"
                  >
                    <div className="uppercase text-neutral-900">
                      Brand Identity
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/brand-content"
                  >
                    <div className="uppercase text-neutral-900">
                      Brand Content
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                </div>
              </div>
              <div className="col-start-3 col-end-6 row-start-5 row-end-7 overflow-hidden">
                <div className="flex flex-col items-start">
                  <h4 className="min-h-[0vw] text-lg">Web</h4>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/web-design-and-ux"
                  >
                    <div className="uppercase text-neutral-900">
                      Web Design & UX
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/web-development"
                  >
                    <div className="uppercase text-neutral-900">
                      Web Development
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/seo-and-search"
                  >
                    <div className="uppercase text-neutral-900">
                      SEO & Search
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                </div>
              </div>
              <div className="col-start-5 col-end-6 row-end-7 overflow-hidden">
                <div className="flex flex-col items-start">
                  <h4 className="min-h-[0vw] text-lg">Creative</h4>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/graphic-design"
                  >
                    <div className="uppercase text-neutral-900">
                      Graphic Design
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/photography"
                  >
                    <div className="uppercase text-neutral-900">
                      Photography
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold text-white"
                    href="/capabilities/social-media-management"
                  >
                    <div className="uppercase text-neutral-900">
                      Social Media
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

          <a
            className="mt-8 inline-block items-center justify-center overflow-hidden rounded-full bg-stone-900 py-3 pl-6 pr-12 text-xl text-white min-[766px]:mt-10 min-[766px]:pb-3.5 min-[766px]:pl-8 min-[766px]:pr-8 min-[766px]:pt-3.5 min-[1025px]:mt-16"
            href=""
          >
            Let's Chat
          </a>
        </div>
      </section>

      <div>
        <div className="max-w-[100vw] overflow-x-hidden">
          <main>
            <div className="text-black">
              <div>
                <div className="rounded-tl-3xl rounded-tr-3xl bg-[#D2B48C]">
                  <section className="rounded-3xl bg-[#D2B48C]">
                    <div className="grid grid-cols-[371.75px_743.5px_371.75px] grid-rows-[12.25rem] gap-10 py-28">
                      <div />

                      <div className="flex flex-col justify-center px-8 text-center">
                        <div className="text-5xl">
                          <p>
                            We <span className="inline-block">challenge</span>{" "}
                            what creative <em className="italic">can do</em>,
                            and{" "}
                          </p>
                          <div className="underline">brands</div>{" "}
                          <em className="italic">can be.</em>
                          <p />
                        </div>

                        <a
                          className="items-center justify-center rounded-full bg-stone-900 py-4 pl-8 pr-12 text-lg text-white"
                          href=""
                        >
                          Explore our work
                        </a>
                      </div>

                      <div className="flex items-center justify-start">
                        <img
                          className="h-44 w-28"
                          src="https://www.robot-food.com/images/pen-jetpack.svg"
                        />
                      </div>
                    </div>
                  </section>
                  <div className="bg-white text-2xl">
                    <div className="container mx-auto px-4">
                      <div className="flex flex-wrap py-12">
                        <div className="flex w-full">
                          <div className="w-1/2 pr-6">
                            <p>
                              Ever noticed how the best ideas feel like common
                              sense?
                            </p>

                            <p>
                              They're effortlessly gettable, and disruptive in
                              the right way. The kind of disruption that
                              silences, rather than shouts.
                            </p>
                          </div>

                          <div className="w-1/2 pl-6">
                            <p>
                              Common sense is simple, but simple isn't easy. Ask
                              the right questions, and an idea can silence the
                              whole category.
                            </p>

                            <p>
                              When big plans need big ideas, we're your first,
                              last and best call.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="bg-white">
                    <div
                      className="grid grid-cols-[522.328px_522.328px_522.328px] grid-rows-[619.188px_618.5px] gap-[3.75rem]"
                      style={{
                        gridTemplateAreas: '"col1 col1 col2" "col3 col4 col4"',
                      }}
                    >
                      <div
                        style={{
                          gridColumn: "col1",
                          gridRow: "col1",
                        }}
                      >
                        <img
                          className="h-[38.70rem] w-[69.04rem] object-cover"
                          src="https://www.robot-food.com/images/About/about-1-2023.jpg"
                        />
                      </div>

                      <div
                        style={{
                          gridColumn: "col2",
                          gridRow: "col2",
                        }}
                      >
                        <img
                          className="h-[38.70rem] w-[32.65rem] object-cover"
                          src="https://www.robot-food.com/images/About/about-2-2023-editted.jpg"
                        />
                      </div>

                      <div
                        style={{
                          gridColumn: "col3",
                          gridRow: "col3",
                        }}
                      >
                        <img
                          className="h-[38.66rem] w-[32.65rem] object-cover"
                          src="https://www.robot-food.com/images/About/about-3-2023.jpg"
                        />
                      </div>

                      <div
                        style={{
                          gridColumn: "col4",
                          gridRow: "col4",
                        }}
                      >
                        <img
                          className="h-[38.66rem] w-[69.04rem] object-cover"
                          src="https://www.robot-food.com/images/About/about-4-2023.jpg"
                        />
                      </div>
                    </div>
                  </section>
                  <section className="rounded-3xl bg-white">
                    <div className="grid grid-cols-[371.75px_743.5px_371.75px] grid-rows-[10.25rem] gap-10 py-28">
                      <div />

                      <div className="flex flex-col justify-center px-8 text-center text-5xl">
                        <div>
                          <p>
                            We <em className="italic">build</em> brands.
                          </p>
                          <p>
                            We <em className="italic">elevate</em> brands.
                          </p>
                          <p>
                            We <em className="italic">connect</em> brands{" "}
                          </p>
                          <div className="underline">with people</div>
                          .
                          <br />
                          <p />
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="bg-white">
                    <div className="container mx-auto text-2xl">
                      <div className="flex flex-wrap py-12">
                        <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2">
                          <p className="mb-4">
                            What gets us out of bed in the morning? Being bold,
                            challenging convention and making an impact.
                          </p>
                          <p>
                            We don't validate ourselves by paying to enter
                            awards. Because we'd rather spend our time where it
                            really counts.
                          </p>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                          <p className="mb-4">
                            The success of your brand is all that matters.
                          </p>
                          <p>
                            In every part of the process, from brand positioning
                            to artwork rollout, we're just as invested as you
                            are. Your challenges are our challenges. Your wins
                            are our wins.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="bg-gray-100">
                    <div className="container mx-auto">
                      <div className="flex py-28">
                        <div className="w-1/3 pr-8">
                          <h2 className="text-[4.13rem] leading-none">
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
