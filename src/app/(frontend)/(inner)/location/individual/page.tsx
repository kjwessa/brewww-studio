import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="w-full bg-brand-dark-bg pb-10 pt-20 text-black lg:pb-16 lg:pt-32 xl:pt-40">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="w-full px-2 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Web Design</div>
                </div>
                <h1 className="mb-0 mt-3 text-[4.25rem] leading-none text-white lg:mb-0 lg:mt-5 lg:pr-20">
                  A Web Design Studio in Penscaola, FL.
                </h1>
              </div>
            </div>
            <div className="mt-5 w-full px-2 text-lg font-light text-zinc-400 lg:mt-10 lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="w-full">
                <p className="mb-6">
                  Here at Brewww Studio, we offer honest advice, industry
                  experience, and a great portfolio of work.
                  <br />
                  <br />
                  UI/UX, wireframes, research and development — we understand
                  all areas of web design. We can take a start-up business with
                  nothing to a fully functioning brand online and offline. We
                  can revamp an existing website or take a successful brand to
                  the next level. Our talented and creative in-house{" "}
                  <a
                    className="rounded-md bg-zinc-800 px-1 py-1 text-white underline"
                    href=""
                  >
                    web design team in Pensacola
                  </a>{" "}
                  will work alongside you in collaboration to create a site that
                  reflects your brand, talks to your audience with meaning and
                  personality, and has great functionality across the latest
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="relative flex w-full flex-wrap px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="absolute top-0 z-20 rounded-br-3xl pb-4 pr-4 lg:pb-6 lg:pr-8">
            <svg
              className="absolute right-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
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
              className="absolute bottom-[0.13rem] left-0 h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
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
              <a
                className="inline-flex"
                href=""
                style={{
                  outlineOffset: "2px",
                  outlineStyle: "solid",
                  outlineWidth: "2px",
                }}
              >
                <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-800 px-5 py-2 text-white">
                  <div className="inline-flex">Tell me more</div>
                </div>
                <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-800" />
              </a>
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
          <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-zinc-900">
            <Image
              className="object-cover"
              src="/images/christine-sunset.1920.jpg"
              alt="People in Studio"
              fill
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-brand-dark-bg py-20 text-black lg:pb-24 lg:pt-24 min-[1450px]:pb-32 min-[1450px]:pt-32 min-[2100px]:pb-40 min-[2100px]:pt-40">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between">
            <div className="relative mb-10 w-full px-2 lg:mb-0 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 min-[1800px]:w-[62.5%]">
              <div className="flex flex-col items-start">
                <div className="inline-flex w-auto items-center lg:absolute lg:left-[1.00rem] lg:top-[1.75rem]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Web Design</div>
                </div>
                <h2 className="mb-5 mt-3 indent-48 text-6xl text-white lg:mb-0 lg:mt-5">
                  Are you a startup brand, well established company, in the UK
                  or worldwide? It doesn't matter. We work with a range of
                  clients.
                </h2>
                <div className="relative mb-0 mt-3 inline-flex items-center lg:mb-0 lg:mt-5">
                  <a
                    className="inline-flex"
                    href=""
                    style={{
                      outlineOffset: "2px",
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                    }}
                  >
                    <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                      <div className="inline-flex">About Brewww</div>
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
            <div className="w-full px-2 lg:w-1/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="mb-5 text-sm font-light text-neutral-400">
                Our Website Capabilities
              </div>
              <div className="w-full">
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Web Design</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">eCommerce</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">UX Design</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">
                      Responsive Design
                    </div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Wireframes</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="mt-0 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-neutral-950 min-[2100px]:h-6 min-[2100px]:w-6">
                      <svg
                        className="h-3 w-3 min-[2100px]:h-3.5 min-[2100px]:w-3.5"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Strategy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-dark-bg py-10">
        <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3 sm:pl-6 sm:pr-6 lg:grid-cols-5 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center bg-white">
              <span className="text-black">Logo 1</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center bg-white">
              <span className="text-black">Logo 2</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center bg-white">
              <span className="text-black">Logo 3</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center bg-white">
              <span className="text-black">Logo 4</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center bg-white">
              <span className="text-black">Logo 5</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
