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
    </>
  );
}
