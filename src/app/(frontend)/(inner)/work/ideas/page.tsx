import Image from "next/image";
import Link from "next/link";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export default async function WorkPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "work",
    limit: 1000,
    sort: "title",
    where: {
      _status: { equals: "published" },
    },
  });

  return (
    <>
      <div>
        <div className="w-full text-neutral-900">
          <div className="m-auto flex min-h-screen w-full flex-col overflow-clip">
            <section className="relative bg-white min-[1000px]:pt-20 min-[1001px]:pt-28">
              <div className="m-auto w-[92%] min-[1600px]:pb-10 min-[1600px]:pt-20 min-[1920px]:pb-12 min-[1920px]:pt-28 min-[1921px]:max-w-[118.75rem] min-[1921px]:pb-12 min-[1921px]:pt-28">
                <div>
                  <h1 className="text-[10.00rem] uppercase leading-none">
                    Our work
                  </h1>

                  <div className="relative min-[1600px]:mt-16 min-[1920px]:mt-24 min-[1921px]:mt-24">
                    <ul className="list-none flex-wrap gap-[0.13rem] text-lg uppercase min-[671px]:flex min-[1600px]:mt-10 min-[1920px]:mt-12 min-[1921px]:mt-12">
                      <li className="list-item text-white">
                        <a
                          className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
                          href=""
                        >
                          <span className="cursor-pointer">Featured</span>
                        </a>
                      </li>

                      <li className="list-item">
                        <a
                          className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
                          href=""
                        >
                          <span className="cursor-pointer">
                            Websites
                            <sup className="inline-block align-super text-[0.63rem]">
                              18
                            </sup>
                          </span>
                        </a>
                      </li>

                      <li className="list-item">
                        <a
                          className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
                          href=""
                        >
                          <span className="cursor-pointer">
                            Shops
                            <sup className="inline-block align-super text-[0.63rem]">
                              15
                            </sup>
                          </span>
                        </a>
                      </li>

                      <li className="list-item">
                        <a
                          className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
                          href=""
                        >
                          <span className="cursor-pointer">
                            Web Apps
                            <sup className="inline-block align-super text-[0.63rem]">
                              6
                            </sup>
                          </span>
                        </a>
                      </li>
                    </ul>

                    <span className="absolute left-0 top-0 rounded-full bg-neutral-900" />
                  </div>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="relative mb-[-100vh]">
                <div className="bg-red-400 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
                  <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
                    <div className="md:pb-24 md:pt-24 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
                      <h3 className="text-[5.00rem] uppercase leading-none">
                        <a className="inline-block" href="">
                          Classic Driven
                        </a>
                      </h3>

                      <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
                        <p>
                          A website showcasing timeless craftsmanship while
                          serving as an effective marketing tool to guide
                          Classic Driven through their next chapter.
                        </p>
                      </div>

                      <a
                        className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                        href=""
                      >
                        <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                          View Project
                          <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                        </span>
                      </a>
                      {"                    "}
                    </div>

                    <div className="min-[769px]:w-[65.4737%]">
                      <a
                        className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
                        href=""
                      >
                        <img
                          className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
                          src="https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-1900x1100.jpg"
                        />
                        {"                        "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-300 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
                  <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
                    <div className="md:pb-16 md:pt-16 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
                      <h3 className="text-[5.00rem] uppercase leading-none">
                        <a className="inline-block" href="">
                          Rome Tile
                        </a>
                      </h3>

                      <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
                        <p>
                          A WooCommerce store where design, functionality, and
                          narrative converge to create a memorable brand
                          experience.
                        </p>
                      </div>

                      <a
                        className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                        href=""
                      >
                        <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                          View Project
                          <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                        </span>
                      </a>
                      {"                    "}
                    </div>

                    <div className="min-[769px]:w-[65.4737%]">
                      <a
                        className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
                        href=""
                      >
                        <img
                          className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
                          src="https://www.fhoke.com/wp-content/uploads/2024/01/ParisTile-Header-1900x1100.webp"
                        />
                        {"                        "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-300 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
                  <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
                    <div className="md:pb-24 md:pt-24 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
                      <h3 className="text-[5.00rem] uppercase leading-none">
                        <a className="inline-block" href="">
                          The Fabric Emporium
                        </a>
                      </h3>

                      <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
                        <p>
                          With a fresh website on the horizon, it was the ideal
                          moment for The Fabric Emporium to reimagine their logo
                          and visual identity.
                        </p>
                      </div>

                      <a
                        className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                        href=""
                      >
                        <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                          View Project
                          <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                        </span>
                      </a>
                      {"                    "}
                    </div>

                    <div className="min-[769px]:w-[65.4737%]">
                      <a
                        className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
                        href=""
                      >
                        <img
                          className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
                          src="https://www.fhoke.com/wp-content/uploads/2022/08/The-Millshop-Online-Header-1-1900x1100.jpg"
                        />
                        {"                        "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden bg-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
              <div className="m-auto w-[92%] uppercase min-[769px]:flex min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[118.75rem]">
                <div className="text-lg">
                  <h2 className="inline-block min-[671px]:pl-6 min-[769px]:mt-5">
                    Websites and brands
                  </h2>
                </div>

                <div className="text-[1.38rem] leading-7 md:mt-8 min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
                  <p>
                    <span className="inline-block overflow-hidden text-[7.50rem] leading-none">
                      Take a look at our most successful projects
                    </span>
                  </p>
                </div>
              </div>

              <div className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]">
                <div className="relative">
                  <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.docs.map((project, index) => {
                      const rowIndex = Math.floor(index / 2);
                      const isWide =
                        (rowIndex % 2 === 0 && index % 2 === 0) ||
                        (rowIndex % 2 === 1 && index % 2 === 1);

                      return (
                        <li
                          key={project.id}
                          className={`relative list-item h-full ${isWide ? "md:col-span-2" : ""} mb-8 flex h-full flex-col`}
                        >
                          <span className="absolute left-0 top-0 z-[2] w-full p-4 text-lg uppercase text-white md:p-6 lg:p-8">
                            <Link href="">Website</Link>
                          </span>
                          <Link
                            className="w-full flex-grow overflow-hidden"
                            href={`/work/${project.slug}`}
                          >
                            <div className="relative pt-[75%]">
                              <Image
                                className="cursor-pointer object-cover"
                                src={
                                  typeof project.image === "string"
                                    ? project.image
                                    : (project.image as { url: string })?.url ||
                                      ""
                                }
                                alt={project.title}
                                fill
                              />
                            </div>
                          </Link>
                          <div className="mt-4 flex flex-col justify-between min-[1025px]:mt-5">
                            <div className="flex-grow">
                              <h5 className="mb-2 text-xl font-semibold">
                                <Link className="inline-block" href="">
                                  {project.title}
                                </Link>
                              </h5>
                              <p className="mb-4 opacity-50">
                                {project.tagline}
                              </p>
                            </div>
                            <div className="text-lg uppercase">
                              <Link
                                className="relative inline-block overflow-hidden rounded-full bg-gray-200 px-4 py-2 text-center"
                                href={`/work/${project.slug}`}
                              >
                                <span className="relative cursor-pointer">
                                  View
                                  <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
