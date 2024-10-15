import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Image from "next/image";

// TODO: add the animation to the logos

interface LogoItem {
  url: string;
}

const LogoItem = ({ logo }: { logo: string }) => {
  return (
    <div className="h-full w-full px-4">
      <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-3xl bg-neutral-950 lg:h-40 min-[2100px]:h-44">
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            className="px-4"
          />
        </div>
      </div>
    </div>
  );
};

export async function LogoSlider() {
  const payload = await getPayloadHMR({ config: configPromise });
  const brands = await payload.find({
    collection: "brands",
    limit: 100,
    where: {
      and: [
        {
          _status: {
            equals: "published",
          },
        },
        {
          logoLight: {
            exists: true,
          },
        },
      ],
    },
  });

  return (
    <section className="w-full bg-brand-dark-bg px-2 pb-20 text-black lg:pb-24 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 min-[1450px]:pb-32 min-[2100px]:pb-40">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="relative w-full overflow-hidden rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-zinc-900 py-20 lg:pb-24 lg:pt-24 min-[1450px]:pb-32 min-[1450px]:pt-32 min-[2100px]:pb-40 min-[2100px]:pt-40">
          <div>
            <div className="absolute left-0 top-0 h-12 w-[31.25%] bg-neutral-950 text-neutral-950 lg:h-20 lg:w-72">
              <svg
                className="absolute right-[0.13rem] top-0 h-10 w-10 lg:h-12 lg:w-12"
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
                className="absolute bottom-[0.13rem] left-0 h-10 w-10 lg:h-12 lg:w-12"
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
            </div>

            <div className="flex w-full flex-wrap px-2 sm:pl-6 sm:pr-6 lg:justify-end xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
              <div className="flex w-auto flex-col items-start px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">
                      Shameful Plug
                    </div>
                  </div>
                  <h2 className="mb-0 mt-3 max-w-2xl text-5xl text-white lg:mb-0 lg:mt-5 xl:max-w-3xl">
                    We work with start-up businesses through to global
                    organisations.
                  </h2>
                </div>
                <div className="mt-5 flex">
                  <div className="relative inline-flex items-center">
                    <a
                      className="inline-flex"
                      href=""
                      style={{
                        outlineOffset: "2px",
                      }}
                    >
                      <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                        <div className="inline-flex">Join them</div>
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
            <div
              className="mx-auto mt-10 w-full overflow-hidden text-white lg:mt-16"
              id="logo-grid"
            >
              <div className="flex h-full w-full" id="top-row">
                {brands.docs.slice(0, 8).map((brand) => (
                  <LogoItem key={brand.id} logo={brand.logoLight?.url || ""} />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 w-full overflow-hidden text-white lg:mt-8">
              <div className="flex h-full w-full" id="bottom-row">
                {brands.docs.slice(9, 18).map((brand) => (
                  <LogoItem key={brand.id} logo={brand.logoLight?.url || ""} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
