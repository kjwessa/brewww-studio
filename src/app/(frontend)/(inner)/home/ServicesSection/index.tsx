import ServiceCard from "@/components/ServiceCard/index";
import { Service } from "@/payload-types";

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-brand-dark-bg p-2">
      <div className="w-full rounded-xl bg-zinc-900 py-20 text-black lg:pb-24 lg:pt-24 min-[1450px]:pb-32 min-[1450px]:pt-32 min-[2100px]:pb-40 min-[2100px]:pt-40">
        <div className="bg-zinc-900 px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="mb-10 flex w-full flex-wrap justify-between lg:mb-20">
            <div className="mb-2 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Our Expertise</div>
              </div>
            </div>
            <div className="flex w-full flex-wrap lg:w-[68.75%]">
              <div className="mb-5 w-full px-2 text-5xl text-white lg:mb-0 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:w-[62.5%] xl:pl-4 xl:pr-4">
                <h2 className="max-w-xl indent-32 min-[2100px]:max-w-2xl">
                  How we take your business to the next level
                </h2>
              </div>
              <div className="w-full px-2 sm:w-[62.5%] lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:w-[37.5%] xl:pl-4 xl:pr-4">
                <div className="mb-5 w-full text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    We are a digital marketing agency with expertise, and we're
                    on a mission to help you take the next step in your
                    business.
                  </p>
                </div>
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
                    <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                      <div className="inline-flex">See all services</div>
                    </div>
                    <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
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
          </div>
          <div className="flex w-full flex-wrap justify-between">
            <div className="order-1 mt-12 flex h-auto w-full px-2 lg:w-[31.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="sticky w-full self-end">
                <a
                  className="relative inline-flex w-auto items-center rounded-full py-1.5 pl-1.5 pr-8"
                  href=""
                >
                  <div className="absolute left-0 top-0 z-0 h-full w-full cursor-pointer rounded-full bg-neutral-950" />
                  <div className="relative mr-3 flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="rgb(255, 255, 255)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M384 256L0 32v448l384-224z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>

                    <picture>
                      <source
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                        type="image/webp"
                      />

                      <img
                        className="absolute left-0 top-0 z-0 h-full w-full max-w-full object-cover"
                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                        alt="Shape"
                      />
                    </picture>
                  </div>
                  <div className="cursor-pointer">
                    <div className="text-white">Hear from Andy</div>
                    <div className="font-light text-zinc-400">
                      Co-founder of Shape
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="order-2 w-full px-2 lg:w-[68.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
