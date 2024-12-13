import { Section } from '@/components/layout/Section'

export function ContactHeroSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="bg-brand-dark-bg px-2 py-24 min-[1450px]:pr-20 min-[1450px]:pl-20 sm:pr-6 sm:pl-6 xl:pr-12 xl:pl-12">
        <div className="flex w-full justify-between border-b-2 border-solid border-neutral-700 pb-12 lg:pb-12">
          <div className="relative mb-10 w-[62.5%] px-2 min-[1450px]:w-[81.25%] lg:mb-0 lg:w-3/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="relative w-full">
              <h1 className="mb-3 inline-flex items-center lg:absolute lg:top-[1.00rem] lg:left-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Contact</div>
              </h1>
              <h2 className="text-display-large indent-48 leading-none text-white">
                Exhale. Help <br /> is here.
                <span className="inline-block w-4"></span>
                <a
                  className="bg-brand-gold relative inline-flex h-9 w-9 rounded-full indent-48 text-black md:h-16 md:w-16 lg:top-[0.75rem] lg:h-24 lg:w-24"
                  href=""
                >
                  <div className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center indent-48">
                    <svg
                      className="h-5 w-5 indent-48 min-[2100px]:h-16 min-[2100px]:w-16 md:h-6 md:w-6 lg:h-8 lg:w-8"
                      fill="rgb(1, 2, 2)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="indent-48"
                        d="M344 416h8V160h-16v228.7L53.7 106.3l-5.7-5.6L36.7 112l5.7 5.7L324.7 400H96v16h248z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
                </a>
              </h2>
            </div>
          </div>

          <div className="w-2/4 px-2 min-[1450px]:w-64 min-[2100px]:w-64 sm:w-1/3 md:w-1/4 lg:w-64 lg:pr-3 lg:pl-3 xl:w-64 xl:pr-4 xl:pl-4">
            <div className="bg-brand-dark-surface relative w-full overflow-hidden rounded-3xl pb-[155.556%]">
              {/* //TODO update intro video */}
              <video
                className="absolute top-0 left-0 z-10 h-full w-full max-w-full object-cover pb-1"
                src="https://youtube.com/shorts/1NLd_UCXomU?si=PVDmDaYEjiOyBs6B"
              />

              <a
                className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center"
                href=""
              >
                <div className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-end justify-end p-3 lg:p-5">
                  <div className="bg-brand-gold flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M384 256L0 32v448l384-224z" fill="rgb(0, 0, 0)" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
