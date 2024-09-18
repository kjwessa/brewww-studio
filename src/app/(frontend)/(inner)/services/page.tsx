import Image from "next/image";
import { LinkMain } from "@/app/components/LinkMain";

export default function ServicesPage() {
  return (
    <>
      <div className="relative flex bg-white text-stone-950">
        <h1 className="absolute bottom-0 left-0 right-[17.88rem] top-[23.75rem] z-[1] p-16 text-[5rem] leading-none text-white">
          <div className="max-w-4xl">
            <div>Creative storytelling for unbounded brands</div>
          </div>
        </h1>

        <div className="relative flex h-[50.46rem] w-full flex-grow items-end object-cover">
          <Image
            src="/images/Aldridge-02665.1200-p-1080.jpeg"
            alt="text"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <section className="bg-white px-8 py-20 text-stone-950">
        <div className="max-w-8xl container mx-auto">
          <h2 className="mb-16 text-4xl font-bold uppercase">
            <span className="mr-4 pb-4 text-base">Our Speciality</span>A
            Cleveland branding studio with a passion for thumb stopping visuals,
            compelling storytelling, and web that works for you.
          </h2>
        </div>
        <div className="max-w-8xl container mx-auto grid grid-cols-3 gap-8">
          <div>
            <h2 className="mb-3 text-3xl font-bold uppercase">Branding</h2>
            <div>
              <div className="relative h-32 w-full pb-[66%]">
                <Image
                  src="/images/branding-books.1920.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className="py-3 text-base">
              We distill your companys essence into a compelling visual and
              narrative identity. Our branding process goes beyond logos and
              color palettes—we create a kinetic brand experience that resonates
              with your audience and propels your business forward.
            </p>
            <LinkMain
              text="Learn More"
              link="/services/branding"
              size="medium"
            />
          </div>
          <div>
            <h2 className="mb-3 text-3xl font-bold uppercase">Websites</h2>
            <div>
              <div className="relative h-32 w-full pb-[66%]">
                <Image
                  src="/images/macbook-opening-lid.1920.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className="py-3 text-base">
              In the digital realm, we craft immersive online experiences that
              captivate and convert. Our websites are more than just pretty
              interfaces; theyre strategic tools designed to engage your
              audience and drive meaningful action.
            </p>
            <LinkMain
              text="Learn More"
              link="/services/websites"
              size="medium"
            />
          </div>
          <div>
            <h2 className="mb-3 text-3xl font-bold uppercase">Content</h2>
            <div>
              <div className="relative h-32 w-full pb-[66%]">
                <Image
                  src="/images/background-capabilities.1200.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className="py-3 text-base">
              We breathe life into your brand through powerful storytelling and
              captivating visuals. From illustrations to photography, we create
              content that not only speaks to your audience but moves them to
              action.
            </p>
            <LinkMain
              text="Learn More"
              link="/services/content"
              size="medium"
            />
          </div>
        </div>
      </section>
      <div className="bg-white text-stone-950">
        <div className="mx-auto w-full max-w-6xl px-8 py-24">
          <div className="text-2xl font-medium">Impact & Results</div>
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="">
              <div className="flex items-start text-6xl">
                3<span className="ml-3 mt-6 text-xl">m</span>
              </div>
              <div className="mb-12 text-lg">
                Brand strategy and site development of The Merry Beggars led to
                3 million downloads of their original audio entertainment
                podcast.
              </div>
            </div>
            <div className="">
              <div className="flex items-start text-6xl">
                10
                <span className="ml-3 mt-6 text-xl">x</span>
              </div>
              <div className="mb-12 text-lg">
                Brand strategy and development of Fem Catholic led to a grant
                for their initiative, ten times their original site investment.
              </div>
            </div>
            <div className="">
              <div className="flex items-start text-6xl">
                760
                <span className="ml-3 mt-6 text-xl">%</span>
              </div>
              <div className="mb-12 text-lg">
                Increase in online donations within 90 days after Joseph House
                site rebrand and website launch.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white px-16 py-32 text-center text-stone-950">
        <div className="mx-auto max-w-4xl">
          <div>
            <h2 className="text-4xl font-bold uppercase">
              "I would recommend using his services to anyone."
            </h2>
            <p className="whitespace-pre-line p-8">
              "Kevin created a website for me that is out of this world! I would
              recommend using his services to anyone. I literally expressed an
              idea and together we conceived a concrete plan and he created a
              stellar one of a kind website for me. Kevin Wessa is a man of
              integrity, artistic genius, and knows all the latest technology to
              create exactly what you're looking for plus more!"
            </p>
            <p className="text-base font-semibold">Fr. Jack Knight</p>
            <p className="text-base">Concrete Catholic</p>
          </div>
        </div>
      </section>
      <div className="bg-white text-stone-950">
        <div className="grid min-h-[40rem] grid-cols-2">
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Our Specialty</h2>
            <p>
              At Brewww Studio, every project is a journey to explore new
              creative frontiers. Partnering closely with our clients, we aim to
              design captivating visuals that make an immediate impact and leave
              a lasting legacy.
            </p>
          </div>
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/beer-delivery.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid min-h-[40rem] grid-cols-2">
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/broken-glass-light.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Your Growth</h2>
            <p>
              We are always looking ahead. As your dedicated digital design
              studio, we collaborate with you to tackle real-world challenges in
              a dynamic environment. From logo creation to comprehensive digital
              marketing campaigns, we implement diverse strategies that drive
              growth and ensure your brand thrives.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex max-w-6xl items-start justify-between bg-white px-8 py-12 text-stone-950">
          <div className="w-[calc(42%_-_12px)] text-4xl font-medium">
            <p>Design that makes a good impression and investment.</p>
          </div>
          <div className="mt-16 w-[calc(50%_-_12px)] text-xl">
            At Brewww Studio, ROI isnt optional—its essential. We create brand
            experiences that not only look good but drive real results. Our
            superior design nurtures relationships and delivers value, proven
            across industries like fitness, non-profits, media & entertainment,
            and e-commerce.
            <div className="mt-12">
              <p className="mt-5 font-medium text-neutral-800 opacity-60">
                5.0/5.0 Avg. Rating on{" "}
                <a className="underline" href="">
                  Facebook
                </a>
                {" and "}
                <a className="underline" href="">
                  Google
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="relative grid grid-cols-[105.50rem] grid-rows-[1155px_104px] items-center justify-items-center bg-zinc-950 text-center uppercase text-neutral-400">
          <span className="text-[13.00rem] font-bold leading-none text-white">
            <span>
              <span className="inline-block">
                <span className="inline-block">We build Software</span>
              </span>
              <br />
              <span className="inline-block">
                <span className="inline-block">
                  <svg
                    className="h-40 w-9"
                    fill="none"
                    height="96"
                    id="svg-1"
                    viewBox="0 0 23 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1538 92.6733C11.1716 79.7465 5.68047 64.9188 5.68047 48.095c0-9.4099 1.60947-17.9643 4.82843-25.4732 3.3136-7.5089 7.1952-13.97229 11.6449-19.29506L17.8935 0C5.9645 14.5426 0 30.5109 0 48.095 0 65.4891 5.9645 81.4574 17.8935 96l4.2603-3.3267Z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>
                  <div
                    className="inline-block align-middle text-black"
                    id="div-1"
                  >
                    <div className="grid-cols-[repeat(2,_1fr)] items-center gap-x-5">
                      <div
                        className="relative col-start-1"
                        style={{
                          gridColumnEnd: "span 2",
                        }}
                      >
                        <video className="h-24 w-40 object-contain">
                          <source
                            src="https://www.datocms-assets.com/57452/1639733929-services-cover-looper.mp4"
                            type="video/mp4"
                          />
                          <p className="text-sm">
                            Your browser does not support HTML5 video. Here is a{" "}
                            <a
                              className="inline-block underline"
                              href="https://www.datocms-assets.com/57452/1639733929-services-cover-looper.mp4"
                            >
                              link to the video
                            </a>
                            .
                          </p>
                        </video>
                      </div>
                    </div>
                  </div>
                  <svg
                    className="h-40 w-9"
                    fill="none"
                    height="96"
                    id="svg-2"
                    viewBox="0 0 23 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.84615 92.6733C11.8284 79.7465 17.3195 64.9188 17.3195 48.095c0-9.4099-1.6094-17.9643-4.8284-25.4732C9.17752 15.1129 5.29586 8.64951.84615 3.32674L5.10651 0C17.0355 14.5426 23 30.5109 23 48.095 23 65.4891 17.0355 81.4574 5.10651 96L.84615 92.6733Z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>{" "}
                  Solutions
                </span>
              </span>
            </span>
          </span>
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-20 pb-10 text-sm font-semibold text-white">
            <span>↓ Scroll to learn how</span>
            <span>
              <svg
                className="inline-block h-3 w-3"
                fill="none"
                height="12"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 0 .87252 3.89355 3.37008-2.13619-2.13615 3.37012L12 6l-3.89355.87252 2.13615 3.37008-3.37008-2.13615L6 12l-.87252-3.89355-3.37012 2.13615 2.13619-3.37008L0 6l3.89355-.87252-2.13619-3.37012 3.37012 2.13619L6 0Z"
                  fill="rgb(255, 255, 255)"
                />
              </svg>{" "}
              7 Services available
            </span>
          </div>
        </section>
      </div>

      <div>
        <div className="w-full text-neutral-900">
          <div className="m-auto flex min-h-screen w-full flex-col overflow-clip">
            <section className="bg-neutral-900 uppercase text-white min-[1000px]:pt-20 min-[1001px]:pt-28">
              <div className="m-auto w-[92%] min-[1600px]:pb-16 min-[1600px]:pt-20 min-[1920px]:pb-24 min-[1920px]:pt-28 min-[1921px]:max-w-[118.75rem] min-[1921px]:pb-24 min-[1921px]:pt-28">
                <div>
                  <h3 className="inline-block text-lg min-[671px]:pl-6">
                    Digital agency services
                  </h3>

                  <h2 className="text-[8rem] font-bold leading-none min-[769px]:mt-8">
                    Design and build services to help grow your business
                  </h2>
                  {"                                "}
                </div>
              </div>
            </section>

            <section className="bg-neutral-900 text-white min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
              <div className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]">
                <div className="flex flex-wrap">
                  <a
                    className="min-[1025px]:mr-14 min-[1025px]:w-96 min-[1025px]:pb-10"
                    href="https://www.fhoke.com/#section-2"
                  >
                    <p className="cursor-pointer text-[3.13rem] uppercase leading-none">
                      <span className="opacity-10">01</span>
                      Plan
                    </p>

                    <p className="cursor-pointer text-[1.38rem] leading-7 min-[1025px]:mt-8">
                      Building the foundations for a successful project
                    </p>
                  </a>

                  <a
                    className="min-[1025px]:mr-14 min-[1025px]:w-96 min-[1025px]:pb-10"
                    href="https://www.fhoke.com/#section-4"
                  >
                    <p className="cursor-pointer text-[3.13rem] uppercase leading-none">
                      <span className="opacity-10">02</span>
                      Design
                    </p>

                    <p className="cursor-pointer text-[1.38rem] leading-7 min-[1025px]:mt-8">
                      Concepts and visuals that achieve your commercial goals
                    </p>
                  </a>

                  <a
                    className="min-[1025px]:mr-14 min-[1025px]:w-96 min-[1025px]:pb-10"
                    href="https://www.fhoke.com/#section-6"
                  >
                    <p className="cursor-pointer text-[3.13rem] uppercase leading-none">
                      <span className="opacity-10">03</span>
                      Build
                    </p>

                    <p className="cursor-pointer text-[1.38rem] leading-7 min-[1025px]:mt-8">
                      Bespoke website development delivered with flair
                    </p>
                  </a>

                  <a
                    className="min-[1025px]:w-96 min-[1025px]:pb-10"
                    href="https://www.fhoke.com/#section-8"
                  >
                    <p className="cursor-pointer text-[3.13rem] uppercase leading-none">
                      <span className="opacity-10">04</span>
                      Grow
                    </p>

                    <p className="cursor-pointer text-[1.38rem] leading-7 min-[1025px]:mt-8">
                      We&apos;re on hand at every stage of your growth
                    </p>
                  </a>
                </div>
              </div>
            </section>

            <section
              className="relative bg-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-3"
            >
              <div
                className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]"
                id="div-9"
              >
                <div
                  className="text-[3.13rem] uppercase leading-none min-[769px]:w-96"
                  id="div-10"
                >
                  <p className="opacity-10">01</p>

                  <h2>
                    <span className="inline-block overflow-hidden">Plan</span>
                    {"                    "}
                  </h2>
                </div>

                <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
                  <div
                    className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12"
                    id="div-11"
                  >
                    <h2 className="text-[8.75rem] uppercase leading-none">
                      <span className="text-[7.50rem] leading-none">
                        <span className="inline-block overflow-hidden">
                          Building
                        </span>{" "}
                        <span className="inline-block overflow-hidden">
                          the
                        </span>{" "}
                        <span className="inline-block overflow-hidden">
                          foundations
                        </span>{" "}
                        <span className="inline-block overflow-hidden">
                          for
                        </span>{" "}
                        <span className="inline-block overflow-hidden">a</span>{" "}
                        <span className="inline-block overflow-hidden">
                          successful
                        </span>{" "}
                        <span className="inline-block overflow-hidden">
                          project
                        </span>
                      </span>
                    </h2>

                    <p className="text-4xl lg:mt-8 min-[1025px]:mt-12" id="p-5">
                      Since 2008, we’ve built and refined a robust process that
                      works. Guaranteed to put a smile on your face and reward
                      you with the results you’ve been looking for. Whatever the
                      project size or scope, our approach stays the same
                      wherever you are on your journey.
                    </p>
                  </div>

                  <ul className="list-none text-[1.38rem] leading-7">
                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-12"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-2"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>

                      <div
                        className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24"
                        id="div-12"
                      >
                        We’ll listen to your goals and get to know your
                        business. We’ll research your competitors, identify how
                        we can make an impact, and help solve your customer’s
                        needs. We work with you to refine your ideas and present
                        solutions to help you achieve your goals.
                      </div>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-13"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-3"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-14"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-4"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative overflow-hidden bg-white text-[1.38rem] leading-7 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-4"
            >
              <div
                className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]"
                id="div-13"
              >
                <div className="relative">
                  <ul
                    className="list-none flex-wrap min-[769px]:flex"
                    id="ul-2"
                  >
                    <li className="relative list-item min-[769px]:w-[48.2105%]">
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8"
                        id="span-5"
                      >
                        <a href="https://www.fhoke.com/project-category/websites/">
                          Websites
                        </a>
                        {"        "}
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/heritage-driven/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-916x1100.jpg"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-14"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/heritage-driven/"
                            >
                              Heritage Driven
                            </a>
                          </h5>

                          <p className="opacity-50">
                            Redefining an automotive icon.
                          </p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-15">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                            href="https://www.fhoke.com/projects/heritage-driven/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-6"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-7"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>

                    <li
                      className="relative list-item md:mt-10 md:mt-12 min-[769px]:ml-auto min-[769px]:w-[48.2105%]"
                      id="li-6"
                    >
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8"
                        id="span-8"
                      >
                        <a href="https://www.fhoke.com/project-category/websites/">
                          Websites
                        </a>
                        {"        "}
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/neck-of-the-woods-films/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2020/11/neck-of-the-woods-films-header-706x460.png 1x, https://www.fhoke.com/wp-content/uploads/2020/11/neck-of-the-woods-films-header-1412x920.png 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2020/11/neck-of-the-woods-films-header-916x1100.png"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-16"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/neck-of-the-woods-films/"
                            >
                              Neck of The Woods
                            </a>
                          </h5>

                          <p className="opacity-50">
                            A powerful story can change everything.
                          </p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-17">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                            href="https://www.fhoke.com/projects/neck-of-the-woods-films/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-9"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-10"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-5"
            >
              <div
                className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]"
                id="div-18"
              >
                <div
                  className="text-[3.13rem] uppercase leading-none min-[769px]:w-96"
                  id="div-19"
                >
                  <p className="opacity-10">02</p>

                  <h2></h2>
                </div>

                <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
                  <div
                    className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12"
                    id="div-20"
                  >
                    <h2 />

                    <p className="text-4xl lg:mt-8 min-[1025px]:mt-12" id="p-6">
                      Our digital products and websites are designed to look
                      great and work across all devices and platforms. Add
                      interactions and touchpoints to draw users through a
                      journey, and the result is a digital representation of
                      your business that will generate more leads.
                    </p>
                  </div>

                  <ul className="list-none text-[1.38rem] leading-7">
                    <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-15"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-zinc-800 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-11"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>

                      <div
                        className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24"
                        id="div-21"
                      >
                        A brand isn’t just about a logo. We take an identity and
                        create visuals that showcase your products and services
                        using the right messaging and materials. Working with
                        existing brands or helping start-ups, we work with you
                        to design everything from logos and stationery to icons
                        and illustrations. Once we’ve finished, your company
                        will look so fresh you’ll fall in love with it all over
                        again.
                        <a
                          className="relative inline-block overflow-hidden rounded-full bg-white text-center text-lg uppercase text-neutral-900 lg:mt-8 min-[1025px]:mt-9"
                          href="https://www.fhoke.com/services/branding/"
                          id="a-16"
                        >
                          <span
                            className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                            id="span-12"
                          >
                            More
                            <span
                              className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                              id="span-13"
                            />
                          </span>
                        </a>
                      </div>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                      >
                        <span className="relative cursor-pointer overflow-hidden rounded-full bg-zinc-800 min-[769px]:h-12 min-[769px]:w-12">
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden bg-neutral-900 text-[1.38rem] leading-7 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
              <div className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]">
                <div className="relative">
                  <ul className="list-none flex-wrap min-[769px]:flex">
                    <li className="relative list-item min-[769px]:w-[48.2105%]">
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8"
                        id="span-15"
                      >
                        Shops
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/combat-fuel/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-916x1100.jpg"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-23"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/combat-fuel/"
                            >
                              Combat Fuel
                            </a>
                          </h5>

                          <p className="opacity-50">
                            Giving supplements a shake-up.
                          </p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-24">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                            href="https://www.fhoke.com/projects/combat-fuel/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-16"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-17"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>

                    <li
                      className="relative list-item md:mt-12 min-[769px]:ml-auto min-[769px]:w-[48.2105%]"
                      id="li-7"
                    >
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8"
                        id="span-18"
                      >
                        Shops
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/xpert-workwear/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2022/10/Xpert-Header-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2022/10/Xpert-Header-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2022/10/Xpert-Header-916x1100.jpg"
                            alt="Xpert Workwear"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-25"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/xpert-workwear/"
                            >
                              Xpert Workwear
                            </a>
                          </h5>

                          <p className="opacity-50">Built to last.</p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-26">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                            href="https://www.fhoke.com/projects/xpert-workwear/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-19"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-20"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative bg-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-7"
            >
              <div
                className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]"
                id="div-27"
              >
                <div
                  className="text-[3.13rem] uppercase leading-none min-[769px]:w-96"
                  id="div-28"
                >
                  <p className="opacity-10">03</p>

                  <h2></h2>
                </div>

                <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
                  <div
                    className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12"
                    id="div-29"
                  >
                    <h2 />

                    <p className="text-4xl lg:mt-8 min-[1025px]:mt-12" id="p-7">
                      Working with industry-leading platforms to power systems
                      and websites, our developers are the experts in delivering
                      everything from simple to complex builds and extending
                      functionality where your business needs it.
                    </p>
                  </div>

                  <ul className="list-none text-[1.38rem] leading-7">
                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-18"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-21"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>

                      <div
                        className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24"
                        id="div-30"
                      >
                        Since 2008 we’ve been in love with WordPress and have
                        never looked back. We’re so confident in its abilities
                        we consider ourselves one of the leading WordPress
                        development teams in the UK and the world.
                        <a
                          className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-8 min-[1025px]:mt-9"
                          href="https://www.fhoke.com/services/wordpress/"
                          id="a-19"
                        >
                          <span
                            className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                            id="span-22"
                          >
                            More
                            <span
                              className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                              id="span-23"
                            />
                          </span>
                        </a>
                      </div>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-20"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-24"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-21"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-25"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-22"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-26"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-neutral-300">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-23"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-neutral-900 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-27"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative overflow-hidden bg-white text-[1.38rem] leading-7 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-8"
            >
              <div
                className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]"
                id="div-31"
              >
                <div className="relative">
                  <ul
                    className="list-none flex-wrap min-[769px]:flex"
                    id="ul-4"
                  >
                    <li className="relative list-item min-[769px]:w-[48.2105%]">
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8"
                        id="span-28"
                      >
                        <a href="https://www.fhoke.com/project-category/shops/">
                          Shops
                        </a>
                        {"        "}
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/the-millshop-online/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2022/08/The-Millshop-Online-Header-1-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2022/08/The-Millshop-Online-Header-1-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2022/08/The-Millshop-Online-Header-1-916x1100.jpg"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-32"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/the-millshop-online/"
                            >
                              The Millshop Online
                            </a>
                          </h5>

                          <p className="opacity-50">Freshen up your home.</p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-33">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                            href="https://www.fhoke.com/projects/the-millshop-online/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-29"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-30"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>

                    <li
                      className="relative list-item md:mt-12 min-[769px]:ml-auto min-[769px]:w-[48.2105%]"
                      id="li-8"
                    >
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8"
                        id="span-31"
                      >
                        <a href="https://www.fhoke.com/project-category/websites/">
                          Websites
                        </a>
                        {"        "}
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/new-legend/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2018/09/NL4x4-Banner-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2018/09/NL4x4-Banner-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2018/09/NL4x4-Banner-916x1100.jpg"
                            alt="New Legend 4x4"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-34"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/new-legend/"
                            >
                              New Legend 4×4
                            </a>
                          </h5>

                          <p className="opacity-50">True legends never die.</p>
                        </div>

                        <div className="ml-5 text-lg uppercase">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                            href="https://www.fhoke.com/projects/new-legend/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-32"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-33"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-9"
            >
              <div
                className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]"
                id="div-36"
              >
                <div
                  className="text-[3.13rem] uppercase leading-none min-[769px]:w-96"
                  id="div-37"
                >
                  <p className="opacity-10">04</p>

                  <h2></h2>
                </div>

                <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
                  <div
                    className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12"
                    id="div-38"
                  >
                    <h2 />

                    <p className="text-4xl lg:mt-8 min-[1025px]:mt-12" id="p-8">
                      Supporting the growth of your business, we can continue to
                      help breathe new life into other areas of your brand. We
                      revitalise identities and bring a focus to services and
                      products as they evolve.
                    </p>
                  </div>

                  <ul className="list-none text-[1.38rem] leading-7">
                    <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-24"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-zinc-800 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-34"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>

                      <div
                        className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24"
                        id="div-39"
                      >
                        We’re not just good at building websites; we’re also
                        great at building online apps to help your day-to-day
                        run more smoothly. We have experience creating proposal
                        tools, project management portals, and complex survey
                        systems. Got an idea, let us know.
                        <a
                          className="relative inline-block overflow-hidden rounded-full bg-white text-center text-lg uppercase text-neutral-900 lg:mt-8 min-[1025px]:mt-9"
                          href="https://www.fhoke.com/services/web-app-development/"
                          id="a-25"
                        >
                          <span
                            className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                            id="span-35"
                          >
                            More
                            <span
                              className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                              id="span-36"
                            />
                          </span>
                        </a>
                      </div>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-26"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-zinc-800 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-37"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>

                    <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                      <a
                        className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                        href="https://www.fhoke.com/#"
                        id="a-27"
                      >
                        <span
                          className="relative cursor-pointer overflow-hidden rounded-full bg-zinc-800 min-[769px]:h-12 min-[769px]:w-12"
                          id="span-38"
                        >
                          <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </svg>
                            {"                                        "}
                          </span>

                          <span className="absolute left-0 top-full flex h-full w-full items-center justify-center rounded-full bg-white">
                            <svg
                              className="h-auto w-2.5"
                              fill="rgb(0, 0, 0)"
                              viewBox="0 0 10 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m10,12v-2c-1.54,0-2.94.59-4,1.54V0s-2,0-2,0v11.54C2.94,10.59,1.54,10,0,10v2c2.21,0,4,1.79,4,4h2c0-2.21,1.79-4,4-4Z"
                                fill="rgb(29, 29, 27)"
                              />
                            </svg>
                            {"                                        "}
                          </span>
                        </span>

                        <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none"></h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="relative overflow-hidden bg-neutral-900 text-[1.38rem] leading-7 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
              id="section-10"
            >
              <div
                className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]"
                id="div-40"
              >
                <div className="relative">
                  <ul
                    className="list-none flex-wrap min-[769px]:flex"
                    id="ul-5"
                  >
                    <li className="relative list-item min-[769px]:w-[48.2105%]">
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8"
                        id="span-39"
                      >
                        Websites
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/hiconsumption/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2022/10/HiConsumption-Header-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2022/10/HiConsumption-Header-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2022/10/HiConsumption-Header-916x1100.jpg"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-41"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/hiconsumption/"
                            >
                              HICONSUMPTION
                            </a>
                          </h5>

                          <p className="opacity-50">
                            A modern day men’s lifestyle mag.
                          </p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-42">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                            href="https://www.fhoke.com/projects/hiconsumption/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-40"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-41"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>

                    <li
                      className="relative list-item md:mt-10 md:mt-12 min-[769px]:ml-auto min-[769px]:w-[48.2105%]"
                      id="li-9"
                    >
                      <span
                        className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8"
                        id="span-42"
                      >
                        Websites
                      </span>

                      <a
                        className="w-full overflow-hidden"
                        href="https://www.fhoke.com/projects/adige-design/"
                      >
                        <picture className="h-auto max-w-full cursor-pointer">
                          <source srcSet="https://www.fhoke.com/wp-content/uploads/2020/08/adige-header-706x460.jpg 1x, https://www.fhoke.com/wp-content/uploads/2020/08/adige-header-1412x920.jpg 2x" />
                          {"            "}
                          <img
                            className="h-auto w-full max-w-full"
                            src="https://www.fhoke.com/wp-content/uploads/2020/08/adige-header-916x1100.jpg"
                          />
                          {"        "}
                        </picture>
                      </a>

                      <div
                        className="flex justify-between min-[1025px]:mt-5"
                        id="div-43"
                      >
                        <div className="flex-grow">
                          <h5>
                            <a
                              className="inline-block"
                              href="https://www.fhoke.com/projects/adige-design/"
                            >
                              Adige Design
                            </a>
                          </h5>

                          <p className="opacity-50">
                            True masters of their craft.
                          </p>
                        </div>

                        <div className="ml-5 text-lg uppercase" id="div-44">
                          <a
                            className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                            href="https://www.fhoke.com/projects/adige-design/"
                          >
                            <span
                              className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                              id="span-43"
                            >
                              View
                              <span
                                className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5"
                                id="span-44"
                              />
                            </span>
                          </a>
                          {"        "}
                        </div>
                      </div>
                    </li>
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
