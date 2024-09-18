import AboutImageEight from "/public/images/brewww-eight.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <>
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
      <div>
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
                href="https://brewwwllc.webflow.io/#start"
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
      </div>
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
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold">Clients</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <p className="text-xl">Azle Storage</p>
              <p className="text-xl">Bexar Collective</p>
              <p className="text-xl">Blessed Kettle Brewing</p>
              <p className="text-xl">Crafts with Tina</p>
              <p className="text-xl">Custom Texas Living</p>
              <p className="text-xl">Fem Catholic</p>
              <p className="text-xl">IES National</p>
              <p className="text-xl">Pietra Fitness</p>
              <p className="text-xl">Project Light Ministries</p>
              <p className="text-xl">South Rock Storage</p>
              <p className="text-xl">Specialty Ceilings</p>
              <p className="text-xl">St. Dominic</p>
              <p className="text-xl">St. John the Evangelist</p>
              <p className="text-xl">The Merry Beggars</p>
            </div>
          </div>
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
        <div
          className="h-full w-full cursor-none bg-neutral-900 pl-0 pr-28 text-white"
          id="div-1"
        >
          <div
            className="flex h-screen w-full max-w-full overflow-visible"
            id="div-2"
          >
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
      <section className="flex h-screen w-full items-center justify-center bg-zinc-950 bg-[linear-gradient(rgba(8,_8,_8,_0.75),_rgba(8,_8,_8,_0.75))] font-serif text-[20.25rem] font-bold uppercase leading-none text-neutral-400">
        <h1 className="text-center text-white">
          <span className="ghost-text block">All</span>
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
    </>
  );
}
