import { WorkCard } from "../WorkCard";

export function WorkSlider() {
  return (
    <>
      <section className="flex w-full flex-wrap bg-brand-dark-bg text-black">
        <div className="mb-10 flex w-full flex-wrap items-end justify-between px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="w-[87.5%] px-2 lg:w-auto lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Our Work</div>
              </div>
              <h2 className="mb-0 mt-3 max-w-md text-5xl text-white lg:mb-0 lg:mt-5 min-[2100px]:max-w-lg">
                Our favourite Web design Projects
              </h2>
            </div>
          </div>
          <div className="mt-3 w-full px-2 lg:mt-0 lg:w-auto lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="relative inline-flex items-center">
              <a
                className="inline-flex"
                href="#"
                style={{
                  outlineOffset: "2px",
                }}
              >
                <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                  <div className="inline-flex">View our work</div>
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
        <div className="w-full">
          <div className="relative m-auto h-auto w-full overflow-hidden">
            <div className="relative flex h-full w-full items-start">
              <div className="relative h-auto w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                <WorkCard />;
              </div>
              <div className="relative h-auto w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                <WorkCard />
              </div>
              <div className="relative h-auto w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                <WorkCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
