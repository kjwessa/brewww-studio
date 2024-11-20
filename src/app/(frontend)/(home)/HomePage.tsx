import { PortfolioCard } from "./PortfolioCard";

export default function HomePage() {
  return (
    <>
      <div>
        <div className="min-h-full text-sm text-zinc-800">
          <section className="absolute left-0 right-0 top-0 z-[3]">
            <div className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] border-b-2 border-solid border-b-white/[0.15]">
              <div className="flex justify-between border-r-2 border-solid border-r-white/[0.15] p-4">
                <a
                  className="inline-block max-w-full text-blue-700 underline"
                  href=""
                >
                  <img
                    className="inline-block h-5 w-auto max-w-full cursor-pointer align-middle"
                    src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66cdf718331a1c2297412f3e_Logo-White.png"
                  />
                </a>
                <div className="text-white">©2024</div>
              </div>
              <div className="items-center justify-between p-4 text-blue-700">
                <div className="flex justify-between">
                  <div className="flex justify-start gap-4">
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">Work</div>
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">About</div>
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">News</div>
                    </a>
                  </div>
                  <a
                    className="inline-block max-w-full overflow-hidden"
                    href=""
                  >
                    <div className="cursor-pointer text-white">Contact</div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="relative z-[3] flex h-[100svh] flex-col justify-between px-4 pb-4 pt-16">
              <h1 className="mx-0 my-3 text-[10.63rem] font-medium leading-none text-white">
                We craft brands beyond tomorrow.
              </h1>
              <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end text-white">
                  London / UK
                </div>
                <div className="col-start-4 row-start-1 row-end-2 text-white">
                  • A strategic social media and marketing studio with a common
                  vision of using social media to connect clients with their
                  audiences
                </div>
                <div
                  className="col-start-12 col-end-13 row-start-1 row-end-2 h-6 w-6 self-end justify-self-end overflow-hidden"
                  style={{
                    gridArea: "1 / 12 / 2 / 13",
                  }}
                >
                  <img
                    className="inline-block h-6 w-6 max-w-full align-middle"
                    src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66cdf5d728a66eec679815ec_Down-Arrow.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 top-0 z-[1] h-[100svh] w-full overflow-hidden">
              <div className="relative h-[100svh] w-full overflow-hidden text-white">
                <video
                  className='absolute bottom-[-85.13rem] left-[-105.38rem] right-[-105.38rem] top-[-85.13rem] z-[-100] m-auto inline-block h-full w-full bg-[url("https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-poster-00001.jpg")] bg-cover object-cover text-black'
                  style={{
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-transcode.mp4" />
                  <source src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-transcode.webm" />
                </video>
              </div>
              <div className="absolute bottom-0 left-0 top-0 z-[2] bg-black/[0.5]" />
            </div>
          </section>
          <section className="flex flex-col gap-24 bg-white py-24 text-sm text-black">
            <div className="container mx-auto grid grid-cols-12 gap-4">
              <h2 className="col-span-1">Meet Brewww Studio</h2>
              <p className="col-span-12 indent-[calc(25%_-_4px)] text-5xl font-medium">
                In a world obsessed with the next big thing, we're focused on
                crafting the next right thing. Our studio exists to transform
                bold visions into enduring brand realities.
              </p>
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-4">
              <p className="col-span-5 col-start-7 text-base font-normal">
                But it's not just about creating visually appealing designs. We
                believe in the power of strategic marketing to help businesses
                reach their goals. Our team of marketing experts will
                collaborate with you to develop tailored strategies that
                effectively communicate your unique value proposition, engage
                your audience, and drive conversions
                <br />
                <br />
                We take pride in delivering exceptional results that go beyond
                aesthetics, helping you achieve sustainable growth and business
                success
              </p>
            </div>
          </section>

          <section className="bg-white px-4 py-4 pb-48 text-black">
            <div className="mb-16">
              <div className="flex flex-col gap-8">
                <div className="border-b-2 border-solid border-b-black/[0.1] pb-3">
                  <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                    <h2 className="col-start-1 row-start-1 row-end-2 text-[12.75rem] font-medium leading-none text-black">
                      Work
                    </h2>
                    <div className="col-start-7 col-end-9 row-start-1 row-end-2 self-end text-black">
                      <div>(2014-2024)</div>
                    </div>
                    <a
                      className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block max-w-full self-end justify-self-end overflow-hidden text-blue-700"
                      href=""
                    >
                      <div className="cursor-pointer text-black">View All</div>
                      <div className="h-0 w-full cursor-pointer bg-black" />
                    </a>
                  </div>
                </div>
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start text-5xl font-medium text-black">
                  <div className="col-span-6 row-start-1 row-end-2">
                    We help brands grow and tell their stories to the world
                  </div>
                </div>
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-4 gap-y-16">
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
            </div>
          </section>

          <div>
            <div className="bg-white px-4 py-4 pb-48 text-sm text-zinc-800">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <h2 className="text-[12.75rem] font-medium leading-none text-black">
                  Service
                </h2>
                <section className="flex-col">
                  <div className="border-t-2 border-solid border-t-black/[0.1]">
                    <div className="py-6">
                      <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                        <div className="text-5xl font-medium text-black">
                          01
                        </div>
                        <div className="col-start-4 col-end-11 row-start-1 row-end-2 text-5xl font-medium text-black">
                          Visual Identity
                        </div>
                        <img
                          className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block h-8 w-8 max-w-full self-center justify-self-end align-middle"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d1955516c02b288d9f66e0_Plus%20Icon.svg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="pt-8">
                        <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-x-4 gap-y-12">
                          <div className="col-start-4 row-start-1 row-end-2 grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-4">
                            <img
                              className="inline-block h-40 w-full max-w-full align-middle"
                              src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
                            />
                            <img
                              className="inline-block h-40 w-full max-w-full align-middle"
                              src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-start-4 col-end-8 row-start-2 row-end-3 pb-32 pt-16"
                        style={{
                          gridArea: "2 / 4 / 3 / 8",
                        }}
                      >
                        <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-x-4 gap-y-12">
                          <div className="col-start-4 col-end-8 row-start-1 row-end-2 flex flex-col gap-2">
                            <div className="text-black">What we do</div>
                            <div className="h-0 w-full bg-black/[0.1]" />
                            <div className="text-black">
                              Our Visual Identity service is designed to help
                              creative agencies establish a strong and unique
                              brand identity. We work closely with our clients
                              to understand vision and values, and then create a
                              visual identity reflects their personality and
                              resonates with their target <br />
                              <br />
                              With our expertise, creative agencies can
                              confidently showcase their creativity and
                              professionalism to stand out in a competitive
                              market
                            </div>
                          </div>
                          <div
                            className="col-start-10 col-end-13 row-start-1 row-end-2 flex flex-col gap-2"
                            style={{
                              gridArea: "1 / 10 / 2 / 13",
                            }}
                          >
                            <div className="text-black">Tools</div>
                            <div>
                              <div className="flex items-center justify-between py-2">
                                <div className="text-black">
                                  Illustrative Style
                                </div>
                                <div className="h-1.5 w-1.5 rounded-2xl bg-black" />
                              </div>
                              <div className="flex items-center justify-between py-2">
                                <div className="text-black">Mascot</div>
                                <div className="h-1.5 w-1.5 rounded-2xl bg-black" />
                              </div>
                              <div className="flex items-center justify-between py-2">
                                <div className="text-black">Key Visual</div>
                                <div className="h-1.5 w-1.5 rounded-2xl bg-black" />
                              </div>
                              <div className="flex items-center justify-between py-2">
                                <div className="text-black">
                                  Retail or digital strategy
                                </div>
                                <div className="h-1.5 w-1.5 rounded-2xl bg-black" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-solid border-t-black/[0.1]">
                    <div className="py-6">
                      <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                        <div className="text-5xl font-medium text-black">
                          02
                        </div>
                        <div className="col-start-4 col-end-11 row-start-1 row-end-2 text-5xl font-medium text-black">
                          Strategy
                        </div>
                        <img
                          className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block h-8 w-8 max-w-full self-center justify-self-end align-middle"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d1955516c02b288d9f66e0_Plus%20Icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-solid border-t-black/[0.1]">
                    <div className="py-6">
                      <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                        <div className="text-5xl font-medium text-black">
                          03
                        </div>
                        <div className="col-start-4 col-end-11 row-start-1 row-end-2 text-5xl font-medium text-black">
                          Communication
                        </div>
                        <img
                          className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block h-8 w-8 max-w-full self-center justify-self-end align-middle"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d1955516c02b288d9f66e0_Plus%20Icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start justify-center overflow-hidden">
            <img
              className="inline-block h-[59.33rem] w-full max-w-full align-middle"
              src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201.webp"
              srcSet="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201-p-500.webp 500w, https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201-p-800.webp 800w, https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201-p-1080.webp 1080w, https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201-p-1600.webp 1600w, https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201.webp 1920w"
            />
          </div>
          <div className="px-4 py-4 pb-48">
            <div className="mb-16">
              <div className="flex flex-col gap-8">
                <div className="border-b-2 border-solid border-b-black/[0.1] pb-3">
                  <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                    <h2 className="col-start-1 row-start-1 row-end-2 text-[12.75rem] font-medium leading-none text-white">
                      News
                    </h2>
                    <a
                      className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block max-w-full self-end justify-self-end overflow-hidden text-blue-700"
                      href=""
                    >
                      <div className="cursor-pointer text-white">View All</div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                  </div>
                </div>
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start text-5xl font-medium text-white">
                  <div className="col-end-12 row-start-1 row-end-2">
                    Achieve narrative design excellence by infusing your story
                    with captivating visuals
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-solid border-t-black/[0.1]">
            <div className="px-4 pb-0 pt-4">
              <div className="flex flex-col gap-48">
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-x-4 gap-y-12">
                  <a
                    className="col-start-1 row-start-1 row-end-2 inline-block max-w-full text-blue-700 underline"
                    href=""
                  >
                    <img
                      className="inline-block h-5 w-auto max-w-full cursor-pointer align-middle"
                      src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d737725cf1eed63493121c_Logo%20Black.png"
                    />
                  </a>
                  <div className="col-end-7 row-start-1 row-end-2 flex flex-col items-start justify-start text-blue-700">
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-5xl font-medium text-white">
                        Work
                      </div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-5xl font-medium text-white">
                        About
                      </div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-5xl font-medium text-white">
                        News
                      </div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-5xl font-medium text-white">
                        Contact
                      </div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                  </div>
                  <div
                    className="col-start-10 col-end-13 row-start-1 row-end-2 flex flex-col gap-2"
                    style={{
                      gridArea: "1 / 10 / 2 / 13",
                    }}
                  >
                    <div className="text-white">Social</div>
                    <div className="text-blue-700">
                      <a
                        className="flex max-w-full items-center justify-between py-2"
                        href=""
                      >
                        <div className="cursor-pointer text-white blur-[0px]">
                          Instagram
                        </div>
                        <img
                          className="inline-block h-4 w-4 max-w-full cursor-pointer align-middle blur-[0px]"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d73da8c64d61796ed2fcd3_Link%20Arrow%20Black.svg"
                        />
                      </a>
                      <a
                        className="flex max-w-full items-center justify-between py-2"
                        href=""
                      >
                        <div className="cursor-pointer text-white blur-[0px]">
                          Facebook
                        </div>
                        <img
                          className="inline-block h-4 w-4 max-w-full cursor-pointer align-middle blur-[0px]"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d73da8c64d61796ed2fcd3_Link%20Arrow%20Black.svg"
                        />
                      </a>
                      <a
                        className="flex max-w-full items-center justify-between py-2"
                        href=""
                      >
                        <div className="cursor-pointer text-white blur-[0px]">
                          Tiktok
                        </div>
                        <img
                          className="inline-block h-4 w-4 max-w-full cursor-pointer align-middle blur-[0px]"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d73da8c64d61796ed2fcd3_Link%20Arrow%20Black.svg"
                        />
                      </a>
                      <a
                        className="flex max-w-full items-center justify-between py-2"
                        href=""
                      >
                        <div className="cursor-pointer text-white blur-[0px]">
                          Youtube
                        </div>
                        <img
                          className="inline-block h-4 w-4 max-w-full cursor-pointer align-middle blur-[0px]"
                          src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d73da8c64d61796ed2fcd3_Link%20Arrow%20Black.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start">
                  <div className="col-end-13 row-start-1 row-end-2 flex flex-col gap-2 justify-self-start">
                    <div className="text-white">
                      Interested in working with us?
                    </div>
                    <a
                      className="inline-block max-w-full overflow-hidden text-blue-700"
                      href=""
                    >
                      <div className="cursor-pointer text-[12.75rem] font-medium leading-none text-white">
                        Let's Chat
                      </div>
                      <div className="h-1 w-full cursor-pointer bg-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 py-4">
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                  <a
                    className="col-start-1 row-start-1 row-end-2 inline-block max-w-full justify-self-start overflow-hidden text-blue-700"
                    href=""
                  >
                    <div className="cursor-pointer text-white">
                      More Template
                    </div>
                    <div className="h-0 w-full cursor-pointer bg-white" />
                  </a>
                  <div className="col-start-4 col-end-8 row-start-1 row-end-2 flex gap-8 text-blue-700">
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">Webflow</div>
                      <div className="h-0 w-full cursor-pointer bg-white" />
                    </a>
                  </div>
                  <div className="col-end-13 row-start-1 row-end-2 justify-self-end text-white">
                    ©2024
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
