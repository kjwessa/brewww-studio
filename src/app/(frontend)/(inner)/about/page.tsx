import { AboutHeroSection } from "./AboutHeroSection";
import Image from "next/image";
import { AboutOffsetImageSection } from "./AboutOffsetImageSection";
import { AboutWhySection } from "./AboutWhySection";

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutOffsetImageSection />

      <section className="bg-brand-dark-bg text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 max-w-3xl text-4xl font-bold">
            Brewww: Where Creativity Meets Strategic Execution
          </h2>
          <p className="mb-4 max-w-3xl text-lg">
            At Brewww, we believe that exceptional work is born from a
            harmonious blend of strategic thinking and creative expression. Our
            process begins with a deep dive into your objectives, challenges,
            and target audience, allowing us to craft a tailored approach that
            resonates with your brand's essence. We meticulously analyze social
            behaviors, industry trends, and data-driven insights to inform our
            creative concepts, ensuring they are not only visually captivating
            but also strategically sound.
          </p>
          <p className="mb-4 max-w-3xl text-lg">
            Our multidisciplinary team seamlessly integrates strategy, design,
            and technology, fostering a collaborative environment where ideas
            flourish and innovative solutions take shape. We don't just create
            campaigns; we weave together a holistic narrative that connects with
            your audience on multiple levels, amplifying your brand's reach and
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
      </section>

      <section className="relative bg-brand-dark-bg px-24 py-36 font-light text-white">
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
            <h2 className="min-/images/brewww-eight.jpeg-[0vw] mb-8">
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
      </section>

      <section className="h-full w-full bg-brand-dark-bg pl-0 pr-28 text-white">
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
      </section>

      <section className="bg-brand-dark-bg px-6 py-12 font-light text-white md:px-24 md:py-48">
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

      <section className="cursor-none border-t-2 border-solid border-t-neutral-100/[0.23] bg-brand-dark-bg text-[1.38rem] font-light leading-7 text-zinc-100">
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
            realm. Whether you're a startup, an established business, or a
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
            <Image
              className="h-auto w-28 max-w-full lg:w-28"
              src="https://showandtell.agency/stars.svg"
              width={100}
              height={100}
              alt="Stars"
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

      <AboutWhySection />

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
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/images/brewww-eight.jpeg"
                  alt="Kevin Wessa"
                  width={440}
                  height={248}
                />
              </span>
              <div className="text-sm uppercase text-stone-500">
                <span className="text-white">Kevin Wessa,</span> Founder and CEO
                of Brewww
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

      <section className="bg-white pt-16 text-black">
        <div className="border-b-2 border-solid border-black">
          <div className="m-auto w-[95vw] max-w-[95vw]">
            <div className="m-auto flex min-h-[calc(240px)] max-w-[56.25rem] flex-col flex-wrap content-center items-center justify-center py-20 text-center">
              <h1 className="mb-8 text-display-large leading-none">
                Honest Folks Doing Honest Work
              </h1>
              <h3 className="mb-8 text-[2.38rem] leading-none">
                Our strategy remains: work hard, create lasting relationships,
                and deliver the very best quality work.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-solid border-black bg-white text-black">
        <div className="flex basis-full justify-between px-12 py-24">
          <div className="flex basis-[47%] content-center items-center justify-center text-center">
            <div>
              <h3 className="mb-8 text-[2.38rem] leading-none">
                Let's not forget about people.
              </h3>
              <p className="mb-8 text-xl">
                We know how to design and build for the web, how to talk about
                lead-gen and build for conversions and so on. But we also
                understand something just as vital – we're not creating for
                robots, but people.
              </p>
              <p className="mb-8 text-xl">
                We bring a human-centered approach to our work by bringing
                through elements of delight and humanity.
              </p>
              <p className="mb-8 text-xl">
                Nothing makes us happier than when we can partner with our
                clients to bring more beauty into the world.
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
                  {/* Image stack */}
                  {/* ... (image stack code remains unchanged) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-min w-full flex-col content-center items-center justify-center gap-10 bg-white px-6 py-20 text-xs text-black">
        <div className="relative h-auto w-full">
          <div className="relative grid h-auto auto-rows-[minmax(0px,_1fr)] grid-cols-[146px_146px_146px_146px_146px_146px_146px_146px] grid-rows-[21.13rem] justify-start gap-8">
            <div
              className="relative flex h-min w-full content-center items-center justify-center gap-[0.63rem] self-start justify-self-start text-lg"
              style={{ gridColumnEnd: "span 3" }}
            >
              <div className="relative flex h-min flex-grow content-center items-center justify-start gap-[0.38rem]">
                <div className="flex h-auto w-auto flex-col justify-start font-medium">
                  <p>●</p>
                </div>
                <div className="flex h-auto w-auto flex-col justify-start">
                  <p>ST/01</p>
                </div>
              </div>
              <div className="relative flex h-min flex-grow content-center items-center justify-start">
                <div className="flex h-auto w-auto flex-col justify-start">
                  <p>How it started</p>
                </div>
              </div>
            </div>
            <div
              className="relative flex h-full w-full flex-col content-start items-start justify-center self-start justify-self-start text-[3.50rem] leading-none"
              style={{ gridColumnEnd: "span 5" }}
            >
              <div
                className="flex h-auto w-full flex-col justify-start"
                style={{ wordBreak: "break-word" }}
              >
                <h2>
                  Like our ancestors in days of old, we're building our own
                  tribe of passionate visionaries unafraid of sharing their
                  ideas and culture with the world.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid h-min w-full auto-rows-min grid-cols-[repeat(8,_minmax(1px,_1fr))] grid-rows-[repeat(1,_min-content)] justify-center gap-8 min-[810px]:p-8">
          <div
            className="relative flex h-min w-full content-center items-center justify-start self-start justify-self-start min-[810px]:items-start min-[810px]:pb-0 min-[810px]:pl-0 min-[810px]:pr-8 min-[810px]:pt-0"
            style={{ gridColumnEnd: "span 3", gridRowStart: "1" }}
          >
            <div
              className="relative h-96 rounded-xl min-[810px]:h-72"
              style={{ flexGrow: "0.7" }}
            >
              <div className="rounded-xl">
                <Image
                  className="h-96 w-80 rounded-xl object-cover"
                  src="https://framerusercontent.com/images/h4avZwD33gi1xDttcLVC1zjWvBA.jpg"
                  fill
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div
            className="relative col-start-auto flex h-auto w-full flex-col content-start items-start justify-start gap-10 self-start justify-self-start min-[810px]:col-start-auto"
            style={{ gridColumnEnd: "span 5", gridRowStart: "1" }}
          >
            <div className="relative w-full rounded-xl">
              <div className="rounded-xl">
                <Image
                  className="h-96 w-full rounded-xl object-cover"
                  src="https://framerusercontent.com/images/mg9Dkmv1bZMO6mM2tX4EUwkcR7A.jpg"
                  fill
                  alt="Placeholder"
                />
              </div>
            </div>
            <div className="flex h-min w-full flex-col content-start items-start justify-center gap-6 text-lg">
              <div
                className="flex h-auto w-full flex-col justify-start"
                style={{ wordBreak: "break-word" }}
              >
                <p>More than a studio, we're your long-term ally.</p>
              </div>
              <div
                className="flex h-auto w-full flex-col justify-start"
                style={{ wordBreak: "break-word" }}
              >
                <p>
                  <span className="text-neutral-400">
                    We specialize in human-centered design where technology
                    serves humanity, not the other way around. This not only
                    elevates your brand but also solves real-world problems.{" "}
                  </span>
                  <br />
                  <br />
                  <span className="text-neutral-400">
                    We see ourselves as your long-term partner – working closely
                    with you for true collaboration, from initial concept to
                    final product. This way, we're invested in your success.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container mx-auto">
          <div className="flex h-min w-full flex-row content-start items-start justify-start gap-6 overflow-hidden py-20 text-xs text-gray-900 min-[810px]:flex-col">
            <div
              className="flex h-min w-0 content-center items-center justify-start overflow-hidden text-lg min-[810px]:w-full"
              style={{
                flexGrow: "2",
              }}
            >
              <div className="flex h-auto w-auto flex-col justify-start">
                <p className="leading-relaxed">01</p>
              </div>
            </div>
            <div
              className="flex h-min w-0 flex-col content-start items-start justify-start overflow-hidden text-[5.50rem] leading-normal min-[810px]:w-full"
              style={{
                flexGrow: "10",
              }}
            >
              <div className="flex h-min w-full flex-wrap content-center items-center justify-start overflow-hidden">
                <h1 className="leading-relaxed">
                  We believe in the power of quality, direct and honest
                  communication.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container mx-auto">
          <div className="flex h-min w-full flex-row content-start items-start justify-start gap-6 overflow-hidden py-20 text-xs text-gray-900 min-[810px]:flex-col">
            <div
              className="flex h-min w-0 content-center items-center justify-start overflow-hidden text-lg min-[810px]:w-full"
              style={{
                flexGrow: "2",
              }}
            >
              <div className="flex h-auto w-auto flex-col justify-start">
                <p className="leading-relaxed">02</p>
              </div>
            </div>
            <div
              className="flex h-min w-0 flex-col content-start items-start justify-start overflow-hidden text-[5.50rem] leading-normal min-[810px]:w-full"
              style={{
                flexGrow: "10",
              }}
            >
              <div className="flex h-min w-full flex-wrap content-center items-center justify-start overflow-hidden">
                <h1 className="leading-relaxed">
                  Cultivating an environment where
                  <span className="rotate-15 inline-block transform rounded-full bg-black px-3 py-1 leading-relaxed text-white">
                    empathy
                  </span>
                  and understanding thrive.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container mx-auto">
          <div className="relative flex h-min w-full max-w-[90.00rem] flex-col content-start items-start justify-center gap-20 px-6 py-20 text-xs">
            <div className="relative h-auto w-full text-lg">
              <div className="relative grid h-auto auto-rows-min grid-cols-[146px_146px_146px_146px_146px_146px_146px_146px] grid-rows-[repeat(1,_min-content)] justify-start gap-8 pb-6">
                <div
                  className="relative flex h-min w-full content-center items-center justify-center gap-[0.63rem] self-start justify-self-start overflow-visible"
                  style={{
                    gridColumnEnd: "span 3",
                  }}
                >
                  <div className="relative flex h-min flex-grow content-center items-center justify-start gap-[0.38rem]">
                    <div className="absolute bottom-0 left-0 top-0 flex h-auto w-auto flex-col justify-start font-medium">
                      <p>●</p>
                    </div>
                    <div className="absolute bottom-0 left-0 top-0 flex h-auto w-auto flex-col justify-start">
                      <p>ST/04</p>
                    </div>
                  </div>
                  <div className="relative flex h-min flex-grow content-center items-center justify-start overflow-visible">
                    <div className="absolute bottom-0 left-0 top-0 flex h-auto w-auto flex-col justify-start">
                      <p>Our principles</p>
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex h-auto w-full flex-col content-end items-end justify-center self-start justify-self-start"
                  style={{
                    gridColumnEnd: "span 5",
                  }}
                >
                  <div className="absolute bottom-0 left-0 top-0 flex h-auto w-auto flex-col justify-start">
                    <p className="text-right">
                      <a
                        className="text-neutral-700"
                        href="https://smalltribe.studio/./contact"
                      >
                        Let's work together
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid h-min w-full auto-rows-min grid-cols-[repeat(3,_minmax(1px,_1fr))] grid-rows-[repeat(2,_min-content)] justify-start gap-8">
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>01</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Excellence</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      We aim to design excellent digital products and
                      experiences for you, in order to let your business
                      succeed. We don't play it safe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>02</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Partnership</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      No time tracking, no timesheets, no headcount. We believe
                      that trust is a fundamental part of a good partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>03</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Collaboration</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      Good work is a collaborative effort. The project will
                      require your input, expertise, and support at a number of
                      stages. Be prepared!
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>04</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Transparency</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      We don't work in isolation. Our work and progress is
                      transparent from the beginning. We'll inform you about
                      different stages and when to review and feedback our work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>05</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Play Offense</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      We aim to work asynchronously whenever possible and
                      appropriate. Our goal is to document & communicate our
                      work and process while respecting your time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-auto self-start justify-self-start">
                <div className="flex h-auto flex-col content-start items-start justify-start gap-4 py-6">
                  <div className="flex h-auto w-auto flex-col justify-start text-lg">
                    <p>06</p>
                  </div>
                  <div
                    className="h-1 w-full"
                    style={{
                      imageRendering: "pixelated",
                    }}
                  >
                    <svg
                      className="h-1 w-96"
                      fill="rgb(0, 0, 0)"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 1452 3"
                    >
                      <use fill="rgb(0, 0, 0)" href="#svg1270455_160" />
                    </svg>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>Craft</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start text-lg opacity-[0.35]"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <p>
                      Prototypes over slides. We work hands-on while providing a
                      well-documented process and communicating our rationales
                      and decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[80vh] flex-col justify-between bg-white p-9 text-[2.75rem] leading-none text-stone-950">
        <div className="absolute bottom-[830.13rem] left-0 right-0 top-[-3.13rem] z-[-1] bg-[linear-gradient(198.91deg,_rgb(255,_255,_255)_64.12%,_rgb(250,_246,_249)_72.26%,_rgb(251,_234,_248)_81.42%,_rgb(252,_213,_245)_89.56%,_rgb(254,_185,_241)_98.72%,_rgb(255,_173,_239)_101.78%)]" />
        <div className="text-7xl">
          <h1 className="max-w-4xl">
            It's our pursuit to eradicate mediocrity from this world. And that
            makes 'becoming obsolete' our ultimate goal.
          </h1>
        </div>
        <div className="flex items-end justify-between text-[1.38rem] leading-7">
          <div>
            <p className="text-xl">
              <strong className="text-neutral-400">Latest insight: </strong>
              <em className="cursor-pointer italic">
                Elevating brands: Strategies for market leadership
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[75vh] overflow-hidden text-stone-950">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.25&w=2200 550w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.5&w=2200 1100w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.75&w=2200 1650w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200 2200w" />
            <img
              className="h-full w-full object-cover"
              src="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200"
              alt="Stuurmen office interior"
            />
          </picture>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-8xl font-bold uppercase text-white">
            Kill off the Average
          </h2>
        </div>
      </section>

      <section className="bg-white py-24 text-[1.38rem] leading-7 text-stone-950">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="mb-16 w-full">
              <h2 className="max-w-3xl text-7xl">
                Mediocrity does not stand a chance with us
              </h2>
            </div>
            <div className="mt-8 w-full lg:w-1/2 lg:pr-16">
              <div className="mb-12 text-[1.63rem] leading-8">
                <p className="text-xl">
                  Customers come and go. Many products barely meet expectations.
                  Most brand promises are never kept. Mediocrity is everywhere
                  and fatal to business success. But industry leaders are never
                  mediocre. Never.
                  <br />
                  <br />
                  We set high standards for ourselves and our clients. We are
                  driven by the need to unleash full potential and get the most
                  out of every situation. With top-notch branding, we do justice
                  to our mantra: 'Kill off the average™'. Mediocrity is way too
                  boring.
                </p>
              </div>
              <div className="mt-16 text-xl">
                <strong className="font-bold">The label premium</strong>
                <p className="mt-4">
                  We work exclusively with companies that are keen to become or
                  remain a leader within their industry. Companies that dare to
                  swim against the current. Companies that are perfectly aware
                  of the fact that the bar can always be set higher, and so are
                  willing to do whatever it takes to take their business to the
                  next level. In short: companies that are worthy of the label
                  premium.
                </p>
              </div>
            </div>
            <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-16">
              <div className="aspect-w-16 aspect-h-9" style={{ height: "70%" }}>
                <Image
                  className="h-full w-full object-cover"
                  src="https://www.datocms-assets.com/63464/1661347408-stuurmen-office-interior.jpg?auto=format&h=1080&w=1920"
                  alt="Stuurmen office interior"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-[1.38rem] leading-7 text-white">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/3 pb-[30.88rem]">
              <h2 className="text-[3.38rem] leading-none">Core values</h2>
            </div>
            <div className="relative flex w-2/3 flex-col">
              <div className="relative mb-4 h-[57.11rem]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://www.datocms-assets.com/63464/1661347918-stuurmen-visual-2.png?auto=format&h=965&w=760"
                    alt="Think before you ink"
                    fill
                  />
                </div>
                <div className="relative flex h-full flex-col justify-end bg-black bg-opacity-50 p-16 text-stone-50">
                  <h3 className="mb-6 text-4xl">Think before you ink</h3>
                  <p className="text-[1.63rem] leading-8">
                    Dive deep, consider all the relevant factors, and weigh the
                    potential consequences of your actions before committing to
                    a course of action. This will help you make smarter and more
                    effective decisions, and increases the chances of reaching
                    the desired outcome.
                  </p>
                </div>
              </div>
              <div className="relative mb-4 h-[57.11rem]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://www.datocms-assets.com/63464/1661347908-stuurmen-visual-1.png?auto=format&h=965&w=760"
                    alt="No guts, no glory"
                    fill
                  />
                </div>
                <div className="relative flex h-full flex-col justify-end bg-black bg-opacity-50 p-16 text-stone-50">
                  <h3 className="mb-6 text-4xl">No guts, no glory</h3>
                  <p className="text-[1.63rem] leading-8">
                    Take charge and make things happen by being confident and
                    bold. This can be intimidating, but it is also the key to
                    achieving your goals and realising your full potential.
                    Embrace your power and responsibility, and take the reins
                    with courage and determination.
                  </p>
                </div>
              </div>
              <div className="relative mb-4 h-[57.11rem]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://www.datocms-assets.com/63464/1661347903-stuurmen-visual-4.png?auto=format&h=965&w=760"
                    alt="No bullshit bingo"
                    fill
                  />
                </div>
                <div className="relative flex h-full flex-col justify-end bg-black bg-opacity-50 p-16 text-stone-50">
                  <h3 className="mb-6 text-4xl">No bullshit bingo</h3>
                  <p className="text-[1.63rem] leading-8">
                    Honesty is essential for building and maintaining trust.
                    Don't waste time or energy on pretence, and cut to the chase
                    instead. Speak your mind, and be sincere but direct, even if
                    the message is uncomfortable.
                  </p>
                </div>
              </div>
              <div className="relative mb-4 h-[57.11rem]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://www.datocms-assets.com/63464/1661347890-stuurmen-visual-3.png?auto=format&h=965&w=760"
                    alt="A touch of wit"
                    fill
                  />
                </div>
                <div className="relative flex h-full flex-col justify-end bg-black bg-opacity-50 p-16 text-stone-50">
                  <h3 className="mb-6 text-4xl">A touch of wit</h3>
                  <p className="text-[1.63rem] leading-8">
                    Come up with creative solutions to complex problems. Do you
                    have a sense of humour? Don't waste it. Use it in a subtle
                    and entertaining way to make things memorable and engaging.
                  </p>
                </div>
              </div>
              <div className="relative h-[57.11rem]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://www.datocms-assets.com/63464/1661347872-stuurmen-visual-5.png?auto=format&h=965&w=760"
                    alt="Lead by example"
                    fill
                  />
                </div>
                <div className="relative flex h-full flex-col justify-end bg-black bg-opacity-50 p-16 text-stone-50">
                  <h3 className="mb-6 text-4xl">Lead by example</h3>
                  <p className="text-[1.63rem] leading-8">
                    Embody the behaviours and values that you expect from
                    others. Have respect for others' time and be punctual.
                    Practise clear communication and take responsibility for
                    mistakes and work to rectify them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
