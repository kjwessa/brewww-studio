import AboutImageEight from "/public/images/brewww-eight.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section>
        <div className="relative content-stretch items-start justify-start bg-neutral-900 pb-80 pl-60 pr-24 pt-64 font-light text-white">
          <div className="grid-rows-auto grid-cols-[repeat(6, 1fr)] relative grid auto-cols-fr gap-4">
            <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-start self-start font-bold uppercase">
              <div className="pb-5">+ About Our Studio</div>
            </div>
            <div className="col-start-1 col-end-6 row-start-2 flex h-full w-full flex-col items-center justify-center self-stretch text-[3.13rem] leading-none">
              <h1 className="mx-0 my-3 min-h-[0vw]">
                We are Brewww Studio. We craft creative for the kind-hearted,
                the hustlers, and the visionaries.
              </h1>
            </div>
            <div className="relative col-start-2 col-end-6 row-start-4 row-end-6 h-[50vh] self-stretch overflow-hidden">
              <Image
                src="/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg"
                width={1000}
                height={1000}
                alt="Studio Image"
                className="h-[120%] w-full object-cover"
                style={{
                  objectPosition: "50% 50%",
                }}
              />
            </div>
            <div className="relative col-start-1 col-end-2 row-start-4 row-end-5 flex h-full max-h-[9.38rem] min-h-[6.25rem] w-full items-end justify-start">
              <a
                className="relative inline-block h-full w-3 max-w-full self-end overflow-hidden"
                href=""
              >
                <div className="absolute left-[0.38rem] top-0 z-[1] h-full w-0 bg-white/[0.35]" />
                <div className="absolute left-[0.38rem] top-0 h-full w-0 bg-white" />
              </a>
            </div>
            <div className="col-start-3 col-end-6 row-start-5 row-end-7 flex h-full w-full flex-col items-center justify-end self-end text-xl">
              <p className="z-10 mb-8">
                Since day one, weve have focused on collaborative relationships,
                expansive creativity, and consistently delivering results.{" "}
                <strong className="font-extrabold">
                  Creative That Just Works
                </strong>{" "}
                - thats what sets us apart from everyone else.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="relative bg-gray-800 pb-12 pr-24 pt-4 text-white">
          <div className="relative -mt-36 mr-24 h-[75vh] overflow-hidden">
            <Image
              src="/5ed749f69d85623011204b14_marybielskiandkevinwessa-6.1920.jpg"
              width={1000}
              height={1000}
              alt="Intro Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="bg-gray-800 px-24 py-48 font-light text-white">
          <div className="m-auto max-w-[62.50rem]">
            <div className="grid grid-cols-6">
              <div className="col-start-2 col-end-6 flex flex-col items-start justify-center">
                <h2 className="pb-5 font-bold uppercase">
                  + Crafted with purpose
                </h2>
                <p className="mb-8 text-xl">
                  Envisioned in 2012, formalized in 2017, we are newly founded
                  and really grounded here in Pensacola, FL. Our team is small,
                  agile, and really selective about the clients we take on.{" "}
                  <strong className="font-extrabold">
                    Our name alludes to an artisanal approach that avoids the
                    instant and focuses on the lasting.
                  </strong>
                </p>
                <a
                  className="relative mb-1 inline-block max-w-full font-bold"
                  href="/services"
                >
                  <span className="uppercase">View Capabilities</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white">
        <div className="mx-auto mb-72 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 max-w-3xl text-4xl font-bold">
            Brewww: Where Creativity Meets Strategic Execution
          </h1>
          <p className="mb-4 max-w-3xl text-lg">
            At Brewww, we believe that exceptional work is born from a
            harmonious blend of strategic thinking and creative expression. Our
            process begins with a deep dive into your objectives, challenges,
            and target audience, allowing us to craft a tailored approach that
            resonates with your brands essence. We meticulously analyze social
            behaviors, industry trends, and data-driven insights to inform our
            creative concepts, ensuring they are not only visually captivating
            but also strategically sound.
          </p>
          <p className="mb-4 max-w-3xl text-lg">
            Our multidisciplinary team seamlessly integrates strategy, design,
            and technology, fostering a collaborative environment where ideas
            flourish and innovative solutions take shape. We do not just create
            campaigns; we weave together a holistic narrative that connects with
            your audience on multiple levels, amplifying your brands reach and
            impact.
          </p>
          <p className="mb-16 max-w-3xl text-lg">
            Throughout the creative process, we embrace an iterative mindset,
            constantly refining and problem-solving to deliver
            thought-provoking, dynamic, and relevant work that leaves a lasting
            impression. Our commitment to excellence drives us to push
            boundaries, challenge conventions, and craft experiences that
            captivate and inspire.
          </p>
        </div>
      </div>
      <div>
        <div className="relative cursor-none content-stretch items-start justify-start bg-neutral-900 px-24 py-36 font-light text-white">
          <div className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-4">
            <div className="col-start-3 col-end-6 row-start-1 row-end-2 flex h-full w-full flex-col items-end justify-start font-bold uppercase">
              <div className="pb-5">+ Our Values</div>
            </div>
            <div
              className="z-10 col-span-3 col-start-4 row-start-4 flex h-full w-full flex-col items-center justify-center self-stretch text-[2.63rem] leading-none"
              style={{
                justifySelf: "stretch",
              }}
            >
              <h2 className="mb-8 min-h-[0vw]">
                We are committed to treating everyone right, leaving our ego at
                the door, and truly partnering with our clients.
              </h2>
            </div>
            <div className="relative col-span-5 col-start-1 row-start-2 row-end-6 h-[75vh] self-stretch overflow-hidden">
              <Image
                src="/5f0ce068d8b392674335dbfe_DSC04489.1920.jpg"
                width={1000}
                height={1000}
                alt="Partner Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-full bg-neutral-900 pl-0 pr-28 text-white">
          <div className="flex h-screen w-full max-w-full overflow-visible">
            <Image
              src="/5f53f60a0033860407ff3718_ThebyWessa2020-6960.jpg"
              width={1000}
              height={1000}
              alt="Theby Wessa 2020"
              className="h-full w-full object-cover"
              style={{
                objectPosition: "50% 50%",
              }}
            />
          </div>
        </div>
      </div>
      <section className="bg-neutral-900 px-6 py-12 font-light text-white md:px-24 md:py-48">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
            <div className="flex flex-col items-center text-center">
              <div className="w-96 pb-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    alt="Kevin Wessa profile picture"
                    className="h-[37.5rem] w-full object-cover"
                    src="/5f53f8986ce296e3d5512d59_kevin-profile-pic.1920.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="pt-4">
                <p>Founder + Lead Engineer</p>
                <h3 className="mt-2 text-lg font-bold">Kevin Wessa</h3>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-96 pb-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    alt="Christine Wessa profile picture"
                    className="h-[37.5rem] w-full object-cover"
                    src="/5f53f783d20ccc4fe020678f_christine-profile-pic.1920.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="pt-4">
                <p>Founder + Lead Designer</p>
                <h3 className="mt-2 text-lg font-bold">Christine Wessa</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cursor-none border-t-2 border-solid border-t-neutral-100/[0.23] bg-black text-[1.38rem] font-light leading-7 text-zinc-100">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="float-left mr-5 mt-1 text-sm lg:mr-8 lg:mt-3 lg:min-w-[7.50rem]">
            BREWWW
          </div>
          <h2 className="text-[5.00rem] leading-none">
            We're a team of strategists, creatives and technical specialists,
            combining branding expertise, cutting-edge ux design and creative
            excellence to build <b>sophisticated</b> brands and experiences.
          </h2>
        </div>
      </section>
      <section className="overflow-hidden bg-black py-12 text-[1.38rem] font-light leading-7 text-white lg:pb-20 lg:pl-0 lg:pr-0 lg:pt-20">
        <div className="m-auto max-w-[72.50rem] px-5">
          <h2 className="mb-8 text-[3.38rem] leading-none lg:mb-10 lg:max-w-[56.06rem]">
            At the heart of our success is our team of experienced
            professionals, each bringing their unique expertise and creativity
            to the table. Our diverse team of creatives, strategists, and
            developers turn ideas into digital realities
          </h2>
          <div className="columns-2 gap-x-[3.75rem] text-xl opacity-[0.9585] lg:max-w-[51.25rem]">
            We're not just an agency; we're your partners in navigating the
            ever-evolving digital landscape. With over a decade of experience,
            we've honed our skills to become masters in the art of digital-first
            branding and the creation of cutting-edge web and digital products.
            Our commitment to excellence is the cornerstone of our success, and
            our goal is to make your brand stand out and thrive in the digital
            realm.Whether you're a startup, an established business, or a
            visionary entrepreneur, Brewww is here to empower your digital
            journey. Our dedication to purposeful innovation, creative
            excellence, and technical prowess ensures that your experience with
            us is nothing short of exceptional. Let us be the architects of your
            digital success, turning your vision into a digital reality.
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-zinc-100 pb-10 pt-8 text-[1.38rem] font-light leading-7 lg:pb-24 lg:pt-16">
        <div className="relative m-auto max-w-[72.50rem] px-5">
          <div className="mb-16 overflow-hidden border-t-2 border-solid border-t-black/[0.3] pt-3.5 text-sm uppercase">
            <div className="relative pl-4">
              <svg
                className="absolute left-0 top-0 h-3.5 w-3"
                fill="rgb(0, 0, 0)"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M496.398.001C495.423 280.462 276.399 509.551 0 526.59v2.027c266.073 16.404 478.978 229.308 495.385 495.382h2.027C514.455 747.605 743.541 528.58 1024 527.604 733.062 526.591 497.409 290.936 496.398.001z"
                  fill="rgb(0, 0, 0)"
                />
              </svg>
              CLIENT REVIEWS
            </div>
          </div>
          <div className="rounded-2xl bg-gray-200 px-8 pb-6 pt-8 text-neutral-900 opacity-[0.9437] lg:pb-12 lg:pl-16 lg:pr-16 lg:pt-12">
            <div className="m-auto h-auto overflow-hidden">
              <div className="flex h-full w-full items-start">
                <div className="h-auto w-full">
                  <blockquote className="text-[3.88rem] leading-none">
                    "We were impressed with their creativity, technical
                    capabilities, and great strategies - so a one stop shop. And
                    essentially, nice people delivering great work."
                  </blockquote>
                  <div className="mt-6 text-xl lg:mt-8">
                    Marketing Co-ordinator, Nickerson Seeds
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex">
              <button className="flex h-12 w-12 cursor-pointer items-start rounded-full bg-neutral-900 px-1.5 py-1">
                <svg
                  className="m-auto h-3.5 w-3.5"
                  fill="rgb(255, 255, 255)"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m149.96 547.433 335.788 335.788-57.264 57.264L-.001 512.001 428.484 83.516l57.264 57.264-325.67 325.672h863.921v80.983h-874.04z"
                    fill="rgb(255, 255, 255)"
                  />
                </svg>
              </button>
              <button className="flex h-12 w-12 cursor-pointer items-start rounded-full bg-neutral-900 px-1.5 py-1">
                <svg
                  className="m-auto h-3.5 w-3.5"
                  fill="rgb(255, 255, 255)"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m149.96 547.433 335.788 335.788-57.264 57.264L-.001 512.001 428.484 83.516l57.264 57.264-325.67 325.672h863.921v80.983h-874.04z"
                    fill="rgb(255, 255, 255)"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-7 flex gap-6 text-2xl lg:mt-12">
            <img
              className="h-auto w-28 max-w-full lg:w-28"
              src="https://showandtell.agency/stars.svg"
            />
            <span>
              Rated 4.6 Stars on{" "}
              <a className="underline" href="https://clutch.co/profile/">
                Clutch ›
              </a>
            </span>
          </div>
        </div>
      </section>

      <section className="flex h-screen w-full items-center justify-center bg-zinc-950 bg-[linear-gradient(rgba(8,_8,_8,_0.75),_rgba(8,_8,_8,_0.75))] text-[20.25rem] font-bold uppercase leading-none text-neutral-400">
        <h1 className="text-center text-white">
          <span className="block">All</span>
          <span className="-mt-16 block">About</span>
          <span className="-mt-16 block text-brand-gold">Brewww</span>
        </h1>
      </section>

      <section className="relative overflow-hidden bg-white pb-48 pt-24 font-medium text-black">
        <div className="relative m-auto w-full max-w-[120.00rem] flex-col px-8">
          <div className="relative m-auto flex max-h-[93.00rem] min-h-screen w-full max-w-[100.50rem] items-center justify-center py-96">
            <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <img
                className="inline-block h-[53.13rem] w-[53.13rem] max-w-full align-middle"
                src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefd27a2a77b43d7ab2f5_Logo%20Circle.svg"
                alt="Logo Circle"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[2]">
              <div className="absolute bottom-auto left-0 right-auto top-[10%] h-40 w-56 overflow-hidden min-[1920px]:w-96">
                <img
                  className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                  src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefce3986a75beb22168d_Image%2031.jpg"
                />
              </div>
              <div className="absolute bottom-auto left-[49%] right-auto top-0 h-40 w-56 overflow-hidden min-[1920px]:left-[53%] min-[1920px]:w-96">
                <img
                  className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                  src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefce4e70f0260f25587d_Image%2021.jpg"
                />
              </div>
              <div className="absolute bottom-auto left-auto right-0 top-[19%] h-40 w-56 overflow-hidden min-[1920px]:top-[38%] min-[1920px]:w-96">
                <img
                  className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                  src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefce3986a75beb2216bc_Image%2041.jpg"
                />
              </div>
              <div className="absolute bottom-auto left-auto right-[17%] top-[81%] h-40 w-56 overflow-hidden min-[1920px]:right-[10%] min-[1920px]:top-[79%] min-[1920px]:w-96">
                <img
                  className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                  src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefcf82adecd34ec59e3a_Image%2051.jpg"
                />
              </div>
              <div className="absolute bottom-auto left-[17%] right-auto top-[70%] h-40 w-56 overflow-hidden min-[1920px]:left-[7%] min-[1920px]:w-96">
                <img
                  className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                  src="https://cdn.prod.website-files.com/6495557c326b2d376ef99ea9/649aefce3986a75beb221691_Image%2061.jpg"
                />
              </div>
            </div>
            <div className="relative z-10 w-full max-w-[69.25rem] text-[6.25rem] leading-none">
              <h2>
                Ou<span className="text-black">r</span> mission — <br />
                to make the internet a beautiful place.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black py-24 text-lg text-stone-400 md:py-32 xl:py-40">
        <div className="container mx-auto px-4">
          <div className="relative xl:flex xl:justify-between">
            <p className="z-10 mb-5 text-sm uppercase text-neutral-500 xl:mt-2 xl:w-28">
              What we believe in
            </p>
            <div className="z-10 xl:flex xl:flex-col">
              <div className="xl:flex xl:flex-row xl:space-x-8">
                <h2 className="z-10 text-[3.50rem] uppercase leading-none text-stone-200 xl:mb-6">
                  Less talk, more rock.
                </h2>
                <div className="z-10 mt-6 xl:mt-0 xl:max-w-[45.00rem]">
                  Brewww Studio is a multidisciplinary creative studio crafting
                  branded experiences through design, motion, content and
                  storytelling. A small team with senior talent and a global
                  network of experts enables us to deliver results more rapidly
                  and with greater efficiency.
                </div>
              </div>
              <div className="mt-10 flex justify-between lg:mt-12">
                <div className="relative w-[calc(50%_-_10px)] lg:w-[calc(50%_-_3.57143vw)]">
                  <div className="relative w-full overflow-hidden bg-gray-950 pb-[107%]">
                    <div className="absolute left-0 top-0 h-full w-full">
                      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <img
                            className="absolute left-0 top-0 h-full w-full object-cover"
                            src="https://cdn.sanity.io/images/mccelfnn/production/0eb6fab5cd729c1bf1f87e3572a8c07ae93ac307-1160x1247.jpg?q=90&w=1160"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 z-10 -ml-3 lg:-ml-5 xl:-ml-6">
                    <h2 className="-mt-3.5 text-[3.50rem] uppercase leading-none text-stone-200">
                      Kevin Wessa
                    </h2>
                    <p className="mt-1 text-base">Founding Partner</p>
                  </div>
                </div>
                <div className="relative w-[calc(50%_-_10px)] lg:w-[calc(50%_-_3.57143vw)]">
                  <div className="relative w-full overflow-hidden bg-gray-950 pb-[107%]">
                    <div className="absolute left-0 top-0 h-full w-full">
                      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <img
                            className="absolute left-0 top-0 h-full w-full object-cover"
                            src="https://cdn.sanity.io/images/mccelfnn/production/ae09b9f39bc91381cfcfcd9fffc5cdd098b9d818-1160x1247.jpg?q=90&w=1160"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 z-10 -ml-3 lg:-ml-5 xl:-ml-6">
                    <h2 className="-mt-3.5 text-[3.50rem] uppercase leading-none text-stone-200">
                      Christine Wessa
                    </h2>
                    <p className="mt-1 text-base">Founding Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <article className="grid grid-cols-[103.906px_103.906px_103.906px_103.906px_103.906px_103.906px_103.906px_103.922px_103.906px_103.906px_103.906px_103.906px] grid-rows-[192px_auto_auto_auto_auto_76px] gap-x-10 gap-y-6">
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: "span 8",
            }}
          >
            <p>
              <span className="inline-block pr-9 text-sm uppercase text-stone-500">
                Hello!
              </span>
              Brewww is a branding and web design team. We've crafted custom
              solutions for leaders and dreamers like The Merry Beggars, IES
              National, Pietra Fitness,
              <a className="inline-block underline" href="">
                and more.
                <span className="cursor-pointer text-sm uppercase text-stone-500">
                  <span className="inline-block align-top">(our work)</span>
                </span>
              </a>
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: "span 5",
            }}
          >
            <p>
              Here since 2017, we believe in taking on challenges. In turn, we
              challenge ourselves and our partners, molding every idea into
              something exceptional.
            </p>
          </div>
          <div
            className="col-start-9"
            style={{
              gridColumnEnd: "span 2",
            }}
          >
            <figure>
              <span className="relative inline-block h-36 w-60 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27440%27%20height=%27248%27/%3e"
                />
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={AboutImageEight.src}
                  alt="Kevin Wessa"
                />
              </span>
              <div className="text-sm uppercase text-stone-500">
                <span className="text-white">Kevin Wessa,</span> Founder and CEO
                of Brewwww
              </div>
            </figure>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: "span 8",
            }}
          >
            <p>
              Our vision is not a convoluted puzzle. It's simple and honest:{" "}
              <span className="text-rose-600">We want to do top work.</span>{" "}
              Every strategy, every px in every design, every line of code, is
              something Brewww proudly{" "}
              <a className="inline-block underline" href="">
                stands behind.
                <span className="cursor-pointer text-sm uppercase text-stone-500">
                  <span className="inline-block align-top">
                    (Here's why{" "}
                    <svg
                      className="inline-block h-3 w-3 rotate-90"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                        fill="rgb(102, 102, 102)"
                        fillRule="evenodd"
                      />
                    </svg>
                    )
                  </span>
                </span>
              </a>{" "}
              And this is possible only thanks to our deep partnerships with our
              clients.
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: "span 8",
            }}
          >
            <p>
              We are{" "}
              <a className="inline-block underline" href="">
                curious individuals
                <span className="cursor-pointer text-sm uppercase text-stone-500">
                  <span className="inline-block align-top">
                    (Meet us{" "}
                    <svg
                      className="inline-block h-3 w-3 rotate-90"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                        fill="rgb(102, 102, 102)"
                        fillRule="evenodd"
                      />
                    </svg>
                    )
                  </span>
                </span>
              </a>{" "}
              that stay busy, and we like it that way. Transform a crazy idea
              into a product impossible to ignore? We're in. Provide guidance
              and structure while we're at it? That's what we do.
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: "span 8",
            }}
          >
            <p>
              Fearlessly going all in is what Brewww was built on. Our feet may
              be firmly on the ground today, but our restless resolve isn't
              going anywhere.
            </p>
          </div>
          <div
            className="col-start-3 text-sm font-bold uppercase"
            style={{
              gridColumnEnd: "span 8",
            }}
          >
            <div className="grid grid-flow-col grid-cols-[220px_220px] grid-rows-[3.75rem] justify-start gap-10">
              <a
                className="flex items-center justify-center rounded-sm bg-brand-gold px-5 text-black"
                href=""
              >
                <span className="flex cursor-pointer items-center justify-between">
                  Meet the team
                  <svg
                    className="ml-2 h-3 w-3 rotate-90"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                className="flex items-center justify-center rounded-sm border-2 border-solid border-zinc-800 px-5"
                href=""
              >
                <span className="flex cursor-pointer items-center justify-between">
                  What you can expect
                  <svg
                    className="ml-2 h-3 w-3 rotate-90"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>
      <div>
        <div className="h-full bg-stone-100 text-base opacity-[0.9999]">
          <a
            className="absolute bottom-[85.25rem] left-0 right-[93.00rem] top-0 z-[-1] text-black underline"
            href=""
          >
            Accessibility Screen-Reader Guide, Feedback, and Issue Reporting
          </a>
        </div>
          <div className="min-h-screen overflow-hidden">
            <main className="m-auto w-screen max-w-[100vw] bg-white text-black">
              <div className="pt-16">
                <div className="border-b-2 border-solid border-black">
                  <div className="m-auto w-[95vw] max-w-[95vw]">
                    <div className="m-auto flex min-h-[calc(240px)] max-w-[56.25rem] flex-col flex-wrap content-center items-center justify-center py-20 text-center">
                      <h1 className="mb-8 text-[5.00rem] leading-none">
                        Honest Folks Doing Honest Work
                      </h1>
                      <h3 className="mb-8 text-[2.38rem] leading-none">
                        Our strategy remains: work hard, create lasting
                        relationships, and deliver the very best quality work.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-solid border-black">
                  <div className="flex basis-full justify-between bg-orange-300 px-12 py-24">
                    <div className="basis-[47%]">
                      <div>
                        <div className="relative flex w-full items-center justify-center">
                          <div
                            className="relative flex h-full max-h-[31.25rem] min-h-[31.25rem] w-full max-w-[31.25rem]"
                            style={{
                              cursor:
                                'url("https://grainandmortar.com/wp-content/themes/gm/_assets/img/cursor-arrow.svg") 0 0, default',
                            }}
                          >
                            <div className="absolute bottom-0 left-0 top-0 z-[100] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_5.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[101] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/grain-and-mortar_office.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[102] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_3.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[103] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_12.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[104] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_6.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[105] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/grain-and-mortar_krug-park.jpg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex basis-[47%] content-center items-center justify-center text-center">
                      <div>
                        <h3 className="mb-8 text-[2.38rem] leading-none">
                          BFFs
                        </h3>
                        <p className="mb-8 text-xl">
                          Brewww Studio is a partnership that began between
                          Kevin and Christine Wessa in 2017 . Since then, we've
                          been fortunate enough to work on hundreds of projects
                          for clients in a wide variety of industries.
                        </p>
                        <span className="text-[11.25rem] leading-none">12</span>
                        <p className="mb-8 text-xl">years in the making.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-solid border-black">
                  <div className="flex basis-full justify-between px-12 py-24">
                    <div className="flex basis-[47%] content-center items-center justify-center text-center">
                      <div>
                        <h3 className="mb-8 text-[2.38rem] leading-none">
                          Let's not forget about people.
                        </h3>
                        <p className="mb-8 text-xl">
                          We know how to design and build for the web, how to
                          talk about lead-gen and build for conversions and so
                          on. But we also understand something just as vital –
                          we're not creating for robots, but people.
                        </p>
                        <p className="mb-8 text-xl">
                          We bring a human-centered approach to our work by
                          bringing through elements of delight and humanity.
                        </p>
                        <p className="mb-8 text-xl">
                          Nothing makes us happier than when we can partner with
                          our clients to bring more beauty into the world.
                        </p>
                      </div>
                    </div>
                    <div className="basis-[47%]">
                      <div>
                        <div className="relative flex w-full items-center justify-center">
                          <div
                            className="relative flex h-full max-h-[31.25rem] min-h-[31.25rem] w-full max-w-[31.25rem]"
                            style={{
                              cursor:
                                'url("https://grainandmortar.com/wp-content/themes/gm/_assets/img/cursor-arrow.svg") 0 0, default',
                            }}
                          >
                            <div className="absolute bottom-0 left-0 top-0 z-[100] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_11.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[101] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_7.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[102] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_4.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[103] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_1.jpg"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 top-0 z-[104] flex h-full w-full items-center justify-center text-center">
                              <img
                                className="h-auto w-full max-w-full rounded-sm"
                                src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/photo_stack/grain_mortar_team_2.jpg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-solid border-black bg-red-200">
                <div>
                  <div className="flex justify-center pt-24 text-[2.38rem] leading-none">
                    <h3>Real people with real feelings.</h3>
                  </div>
                  <div className="flex flex-wrap justify-between px-12 py-24">
                    <div className="flex basis-[48%] flex-col pb-20">
                      <img
                        className="h-auto w-[47.57rem] max-w-full pb-8"
                        src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/2022-Kristin-23.jpg"
                      />
                      <h3 className="mb-3 text-[2.38rem] leading-none">
                        Christine Wessa
                      </h3>
                      <h4 className="mb-3.5 font-semibold">
                        Partner and Operations Director
                      </h4>
                      <p className="mt-1 text-[1.38rem] leading-7">
                        Christine manages business development and studio
                        operations. Her strong organizational skills come in
                        handy internally and externally, allowing Brewww Studio
                        to run efficiently and ensuring client projects are
                        executed successfully.
                      </p>
                    </div>
                    <div className="flex basis-[48%] flex-col pb-20">
                      <img
                        className="h-auto w-[47.57rem] max-w-full pb-8"
                        src="https://grainandmortar.com/wp-content/themes/gm/_assets/additions/2022-Michael-10.jpg"
                      />
                      <h3 className="mb-3 text-[2.38rem] leading-none">
                        Kevin Wessa
                      </h3>
                      <h4 className="mb-3.5 font-semibold">
                        Partner and Creative Director
                      </h4>
                      <p className="mt-1 text-[1.38rem] leading-7">
                        Kevin works with clients on design and illustration. He
                        creates strategy for brands and executes it using his
                        diverse skills in brand design, print layout,
                        illustration, and digital design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
