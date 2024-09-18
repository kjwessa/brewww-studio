import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="flex min-h-[90vh] items-center justify-center bg-brand-black text-white">
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
      <div>
        <section
          className="relative text-[1.38rem] leading-7 min-[650px]:mb-[40.00rem]"
          style={{
            fontKerning: "none",
          }}
        >
          <div className="m-auto flex w-full flex-col px-9 pb-12 min-[650px]:flex-row min-[650px]:items-end min-[650px]:justify-between min-[650px]:pb-24 min-[650px]:pl-24 min-[650px]:pr-24">
            <div className="order-last hidden w-full max-w-[56.50rem] items-end justify-between pb-4 min-[650px]:flex">
              <p className="w-full max-w-sm">
                From fast-growing brands to Fortune 50’s.
              </p>{" "}
              (Projects)
            </div>{" "}
            <h2 className="relative order-first -ml-0 h-3 w-full overflow-hidden pr-4 text-[15.50rem] font-bold uppercase leading-none">
              <div className="absolute top-0">
                <div className="inline-flex overflow-hidden pr-4">
                  <div className="inline-flex">W</div>
                  <div className="inline-flex">o</div>
                  <div className="inline-flex">r</div>
                  <div className="inline-flex">k</div>
                </div>
              </div>
            </h2>
          </div>{" "}
          <div className="grid grid-cols-[816.516px_816.531px] grid-rows-[61.00rem] gap-x-[1.13rem] gap-y-10 px-9 min-[650px]:pl-6 min-[650px]:pr-6">
            <article className="relative col-span-2" id="article-1">
              <a href="https://vucko.co/project/back-market-motion-identity">
                <div
                  className="relative mb-8 cursor-pointer overflow-hidden rounded-xl min-[650px]:mb-6"
                  style={{
                    maskImage:
                      "-webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0))",
                  }}
                >
                  <div className="relative">
                    <figure className="w-full overflow-hidden">
                      {"  "}
                      <picture className="absolute bottom-0 left-0 top-0">
                        <source
                          srcSet="https://www.datocms-assets.com/98180/1722635027-vucko_webassets_project-thumbnails_2x_backmarket_clear.jpg?fit=max&fm=webp&h=3000&w=2000"
                          type="image/webp"
                        />{" "}
                        <source
                          srcSet="https://www.datocms-assets.com/98180/1722635027-vucko_webassets_project-thumbnails_2x_backmarket_clear.jpg?fit=max&fm=jpg&h=1920&w=1920"
                          type="image/jpg"
                        />{" "}
                        <img
                          className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                          src="https://www.datocms-assets.com/98180/1722635027-vucko_webassets_project-thumbnails_2x_backmarket_clear.jpg"
                        />
                      </picture>
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
                <h2 className="cursor-pointer font-medium">Motion Identity</h2>{" "}
                <h3 className="cursor-pointer">(Back Market)</h3>
              </a>
            </article>
            <article className="relative col-span-2" id="article-2">
              <a href="https://vucko.co/project/wrapped-2023">
                <div
                  className="relative mb-8 cursor-pointer overflow-hidden rounded-xl min-[650px]:mb-6"
                  style={{
                    maskImage:
                      "-webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0))",
                  }}
                >
                  <div className="relative">
                    <figure className="w-full overflow-hidden">
                      {"  "}
                      <picture className="absolute bottom-0 left-0 top-0">
                        <source
                          srcSet="https://www.datocms-assets.com/98180/1713273448-vucko_webassets_project-thumbnails_2x_wrapped23.jpg?fit=max&fm=webp&h=3000&w=2000"
                          type="image/webp"
                        />{" "}
                        <source
                          srcSet="https://www.datocms-assets.com/98180/1713273448-vucko_webassets_project-thumbnails_2x_wrapped23.jpg?fit=max&fm=jpg&h=1920&w=1920"
                          type="image/jpg"
                        />{" "}
                        <img
                          className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                          src="https://www.datocms-assets.com/98180/1713273448-vucko_webassets_project-thumbnails_2x_wrapped23.jpg"
                        />
                      </picture>
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
                <h2 className="cursor-pointer font-medium">Wrapped 2023</h2>{" "}
                <h3 className="cursor-pointer">(Spotify)</h3>
              </a>
            </article>
          </div>
          {"  "}
          <div className="mt-32 grid grid-cols-[816.516px_816.531px] grid-rows-[5.25rem] gap-x-[1.13rem] px-9 text-[4.63rem] leading-none min-[650px]:mt-48 min-[650px]:pl-6 min-[650px]:pr-6">
            <div className="col-span-2 min-[650px]:col-start-2" id="div-1">
              <a
                className="inline-flex items-start"
                href="https://vucko.co/projects"
              >
                → See all projects
                <span className="hidden cursor-pointer text-[1.63rem] leading-8 min-[650px]:inline-flex">
                  (17)
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="flex min-h-[90vh] items-center justify-center bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h1 className="mx-auto mb-6 max-w-5xl text-center text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Some brands are content with silver. Others aim for{" "}
            <span className="text-amber-400">gold</span>.
          </h1>
          <div className="mt-10 flex justify-center">
            <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-white/35" />
              <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 transform bg-white" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <div
          className="relative grid auto-cols-fr grid-cols-[.75fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.75fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-4 bg-neutral-900 font-light text-white"
          id="div-1"
        >
          <div
            className="relative col-start-1 row-start-1 h-screen w-full"
            id="div-2"
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
              id="img-1"
              style={{
                objectPosition: "50% 50%",
              }}
            />
          </div>
          <h6
            className="col-start-6 col-end-9 row-start-4 row-end-5 min-h-[0vw] self-end text-4xl"
            id="h6-1"
            style={{
              gridArea: "4/6/5/9",
            }}
          >
            IES National
          </h6>
          <div
            className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
            id="div-4"
            style={{
              gridArea: "5/4/6/9",
            }}
          >
            <h2 className="mb-8 min-h-[0vw]" id="h2-1">
              Sustainability by Design
            </h2>
          </div>
          <div
            className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
            id="div-5"
            style={{
              gridArea: "5/4/6/9",
            }}
          >
            <h2 className="z-10 mb-8 min-h-[0vw] overflow-visible" id="h2-2">
              Sustainability by Design
            </h2>
          </div>
          <div
            className="col-start-8 col-end-10 p-5 font-bold"
            id="div-6"
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
              <div className="uppercase" id="div-7">
                View Project
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
            </a>
          </div>
        </div>
      </div>
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
    </>
  );
}
