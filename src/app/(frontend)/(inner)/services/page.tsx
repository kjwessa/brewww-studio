import Image from "next/image";
import { LinkMain } from "@/app/components/LinkMain";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <section className="flex bg-white text-stone-950">
        <div className="relative flex h-[50.46rem] w-full">
          <Image
            src="/images/Aldridge-02665.1200-p-1080.jpeg"
            alt="text"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="flex w-full flex-col justify-end">
            <h1 className="relative z-10 p-16 text-[5rem] leading-none text-white">
              <div className="max-w-4xl">
                <div>Creative storytelling for unbounded brands</div>
              </div>
            </h1>
          </div>
        </div>
      </section>
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
      <section className="bg-white text-stone-950">
        <div className="mx-auto w-full max-w-6xl px-8 py-24">
          <h2 className="mb-12 text-4xl font-bold uppercase">
            IMPACT & RESULTS
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <div className="mb-6 flex items-start text-6xl">
                3<span className="ml-3 mt-6 text-xl">m</span>
              </div>
              <p className="mb-12 text-lg">
                Brand strategy and site development of The Merry Beggars led to
                3 million downloads of their original audio entertainment
                podcast.
              </p>
            </div>
            <div className="">
              <div className="mb-6 flex items-start text-6xl">
                10
                <span className="ml-3 mt-6 text-xl">x</span>
              </div>
              <p className="mb-12 text-lg">
                Brand strategy and development of Fem Catholic led to a grant
                for their initiative, ten times their original site investment.
              </p>
            </div>
            <div className="">
              <div className="mb-6 flex items-start text-6xl">
                760
                <span className="ml-3 mt-6 text-xl">%</span>
              </div>
              <p className="mb-12 text-lg">
                Increase in online donations within 90 days after Joseph House
                site rebrand and website launch.
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <section className="bg-white text-stone-950">
        <div className="grid min-h-[40rem] grid-cols-2">
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Our Specialty</h2>
            <p className="text-xl">
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
            <p className="text-xl">
              We are always looking ahead. As your dedicated digital design
              studio, we collaborate with you to tackle real-world challenges in
              a dynamic environment. From logo creation to comprehensive digital
              marketing campaigns, we implement diverse strategies that drive
              growth and ensure your brand thrives.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-24 text-stone-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="mb-8 w-full text-4xl font-medium md:mb-0 md:w-[42%]">
              <p>Design that makes a good impression and investment.</p>
            </div>
            <div className="w-full text-xl md:w-[50%]">
              At Brewww Studio, ROI isn't optional—it's essential. We create
              brand experiences that not only look good but drive real results.
              Our superior design nurtures relationships and delivers value,
              proven across industries like fitness, non-profits, media &
              entertainment, and e-commerce.
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
      </section>
      <section className="flex min-h-[75vh] items-center bg-neutral-900 py-32 text-white">
        <div className="container mx-auto px-4">
          <h3 className="mb-8 text-lg">Digital agency services</h3>

          <h2 className="mb-16 text-9xl font-bold uppercase">
            DESIGN AND BUILD SERVICES TO HELP GROW YOUR BUSINESS
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-4 text-5xl uppercase">
                <span className="mb-2 block opacity-10">01</span>
                <span className="font-black">PLAN</span>
              </p>
              <p className="text-xl">
                Building the foundations for a successful project
              </p>
            </div>

            <div>
              <p className="mb-4 text-5xl uppercase">
                <span className="mb-2 block opacity-10">02</span>
                <span className="font-black">DESIGN</span>
              </p>
              <p className="text-xl">
                Concepts and visuals that achieve your commercial goals
              </p>
            </div>

            <div>
              <p className="mb-4 text-5xl uppercase">
                <span className="mb-2 block opacity-10">03</span>
                <span className="font-black">BUILD</span>
              </p>
              <p className="text-xl">
                Bespoke website development delivered with flair
              </p>
            </div>

            <div>
              <p className="mb-4 text-5xl uppercase">
                <span className="mb-2 block opacity-10">04</span>
                <span className="font-black">GROW</span>
              </p>
              <p className="text-xl">
                We're on hand at every stage of your growth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white text-[1.38rem] leading-7 text-stone-950 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
        <div className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]">
          <div className="text-[3.13rem] uppercase leading-none min-[769px]:w-96">
            <p className="opacity-10">01</p>
            <h2>
              <span className="inline-block overflow-hidden">Plan</span>
            </h2>
          </div>

          <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
            <div className="min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12">
              <h2 className="text-[6rem] font-black uppercase leading-none">
                Building the foundations for a successful project
              </h2>
              <p className="lg:mt-8 min-[1025px]:mt-12">
                Since 2008, we've built and refined a robust process that works.
                Guaranteed to put a smile on your face and reward you with the
                results you've been looking for. Whatever the project size or
                scope, our approach stays the same wherever you are on your
                journey.
              </p>
            </div>
            <ul className="list-none text-[1.38rem] leading-7">
              <li className="list-item border-b-2 border-solid border-b-neutral-300">
                <a
                  className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                  href=""
                >
                  <h3 className="cursor-pointer text-[3.13rem] font-black uppercase leading-none">
                    Strategy
                  </h3>
                </a>

                <div className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  We'll listen to your goals and get to know your business.
                  We'll research your competitors, identify how we can make an
                  impact, and help solve your customer's needs. We work with you
                  to refine your ideas and present solutions to help you achieve
                  your goals.
                </div>
              </li>
              <li className="list-item border-b-2 border-solid border-b-neutral-300">
                <a
                  className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                  href=""
                >
                  <h3 className="cursor-pointer text-[3.13rem] font-black uppercase leading-none">
                    User Experience Design
                  </h3>
                </a>

                <div className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  How your visitors engage with the content on your website is
                  important to us. We'll wireframe your new website to map out a
                  straightforward user journey, from the very first impression,
                  to how they navigate the pages and content. This helps us to
                  design and develop a site that works hard for your brand
                  without frustrating your users.
                </div>
              </li>
              <li className="list-item border-b-2 border-solid border-b-neutral-300">
                <a
                  className="flex items-center gap-5 min-[769px]:pb-8 min-[769px]:pl-0 min-[769px]:pr-0 min-[769px]:pt-8"
                  href=""
                >
                  <h3 className="cursor-pointer text-[3.13rem] font-black uppercase leading-none">
                    Project Management
                  </h3>
                </a>

                <div className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  With over 15 years of experience running complex design and
                  build projects, we have established a solid process of
                  managing studio projects that teams on both sides oversee. Our
                  team will cut through the jargon and keep you updated at every
                  stage of the journey.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-auto w-[92%] pt-24 min-[1921px]:max-w-[118.75rem]">
          <div className="relative">
            <div className="mb-4 flex items-center">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
              <span className="text-md font-medium uppercase">
                Related Projects
              </span>
            </div>
            <ul className="list-none flex-wrap min-[769px]:flex">
              <li className="relative list-item min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8">
                  <Link href="">Websites</Link>
                </span>

                <Link className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-916x1100.jpg"
                      alt="Heritage Driven header image"
                    />
                  </picture>
                </Link>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <Link className="inline-block" href="">
                        Heritage Driven
                      </Link>
                    </h5>

                    <p className="opacity-50">Redefining an automotive icon.</p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <Link
                      className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                        View
                        <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="relative list-item min-[769px]:ml-auto min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8">
                  <Link href="">Websites</Link>
                </span>

                <Link className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2020/11/neck-of-the-woods-films-header-916x1100.png"
                      alt="Neck of The Woods Films header image"
                    />
                  </picture>
                </Link>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <Link className="inline-block" href="">
                        Neck of The Woods
                      </Link>
                    </h5>

                    <p className="opacity-50">
                      A powerful story can change everything.
                    </p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <Link
                      className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                        View
                        <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1925px]:pt-1.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-900 text-white min-[1600px]:py-20 min-[1920px]:py-28 min-[1921px]:py-28">
        <div className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]">
          <div className="text-[3.13rem] uppercase leading-none min-[769px]:w-96">
            <p className="opacity-10">02</p>
            <h2>Design</h2>
          </div>

          <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
            <div className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12">
              <h2 className="text-[6rem] font-black uppercase leading-none">
                Concepts and visuals that achieve your commercial goals
              </h2>
              <p className="text-4xl lg:mt-8 min-[1025px]:mt-12">
                Our digital products and websites are designed to look great and
                work across all devices and platforms. Add interactions and
                touchpoints to draw users through a journey, and the result is a
                digital representation of your business that will generate more
                leads.
              </p>
            </div>

            <ul className="list-none text-[1.38rem] leading-7">
              <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                <a className="flex items-center gap-5 min-[769px]:py-8" href="">
                  <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                    Branding + Identity
                  </h3>
                </a>
                <div className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  A brand isn't just about a logo. We take an identity and
                  create visuals that showcase your products and services using
                  the right messaging and materials. Working with existing
                  brands or helping start-ups, we work with you to design
                  everything from logos and stationery to icons and
                  illustrations. Once we've finished, your company will look so
                  fresh you'll fall in love with it all over again.
                </div>
              </li>
              <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                <a className="flex items-center gap-5 min-[769px]:py-8" href="">
                  <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                    Website Design
                  </h3>
                </a>
                <div className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  Obsessed with details, we create the assets your company needs
                  to build a best-in-breed brand. A valuable marketing tool, we
                  approach your website project with a focus on creativity,
                  usability, and conversions.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="m-auto w-[92%] pt-24 min-[1921px]:max-w-[118.75rem]">
          <div className="relative">
            <ul className="list-none flex-wrap min-[769px]:flex">
              <li className="relative list-item min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8">
                  <Link href="">Shops</Link>
                </span>

                <Link className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-916x1100.jpg"
                      alt="Combat Fuel header"
                    />
                  </picture>
                </Link>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <Link className="inline-block" href="">
                        Combat Fuel
                      </Link>
                    </h5>
                    <p className="opacity-50">Giving supplements a shake-up.</p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <Link
                      className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:p-1.5 min-[1025px]:p-1.5">
                        View
                        <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:p-1.5 min-[1025px]:p-1.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="relative list-item min-[769px]:ml-auto min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8">
                  Shops
                </span>

                <Link className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2022/10/Xpert-Header-916x1100.jpg"
                      alt="Xpert Workwear"
                    />
                  </picture>
                </Link>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <Link className="inline-block" href="">
                        Xpert Workwear
                      </Link>
                    </h5>
                    <p className="opacity-50">Built to last.</p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <Link
                      className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:p-1.5 min-[1025px]:p-1.5">
                        View
                        <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:p-1.5 min-[1025px]:p-1.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative bg-white text-[1.38rem] leading-7 text-neutral-900 min-[1600px]:py-20 min-[1920px]:py-28 min-[1921px]:py-28">
        <div className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]">
          <div className="min-[769px]:flex">
            <div className="text-[3.13rem] uppercase leading-none min-[769px]:w-96">
              <p className="opacity-10">03</p>
              <h2>Platforms</h2>
            </div>

            <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
              <div className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12">
                <h2 className="text-[6rem] font-black uppercase leading-none">
                  Bespoke website development delivered with flair
                </h2>
                <p className="lg:mt-8 min-[1025px]:mt-12">
                  Working with industry-leading platforms to power systems and
                  websites, our developers are the experts in delivering
                  everything from simple to complex builds and extending
                  functionality where your business needs it.
                </p>
              </div>

              <ul className="list-none">
                <li className="list-item border-b-2 border-solid border-b-neutral-300">
                  <a
                    className="flex items-center gap-5 min-[769px]:py-8"
                    href=""
                  >
                    <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                      Next.js
                    </h3>
                  </a>
                  <div className="border-t-2 border-solid border-neutral-900 pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                    We've embraced Next.js as our go-to React framework for
                    building modern web applications. Its powerful features like
                    server-side rendering, static site generation, and API
                    routes make it an excellent choice for creating fast,
                    scalable, and SEO-friendly websites. Our team has extensive
                    experience with Next.js, positioning us as one of the
                    leading Next.js development teams in the US.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-20">
            <ul className="list-none flex-wrap min-[769px]:flex">
              <li className="relative list-item min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8">
                  <a href="">Shops</a>
                </span>

                <a className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2022/08/The-Millshop-Online-Header-1-916x1100.jpg"
                      alt="The Millshop Online Header"
                    />
                  </picture>
                </a>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <a className="inline-block" href="">
                        The Millshop Online
                      </a>
                    </h5>
                    <p className="opacity-50">Freshen up your home.</p>
                  </div>
                  <div className="ml-5 text-lg uppercase">
                    <a
                      className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:p-1.5 min-[1025px]:p-1.5">
                        View
                      </span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="relative list-item min-[769px]:ml-auto min-[769px]:w-[48.2105%]">
                <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase text-white min-[1025px]:p-8">
                  <a href="">Websites</a>
                </span>

                <a className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <img
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2018/09/NL4x4-Banner-916x1100.jpg"
                      alt="New Legend 4x4"
                    />
                  </picture>
                </a>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="flex-grow">
                    <h5>
                      <a className="inline-block" href="">
                        New Legend 4×4
                      </a>
                    </h5>
                    <p className="opacity-50">True legends never die.</p>
                  </div>
                  <div className="ml-5 text-lg uppercase">
                    <a
                      className="relative inline-block overflow-hidden rounded-full bg-gray-200 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer lg:p-1.5 min-[1025px]:p-1.5">
                        View
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-900 text-white min-[1600px]:py-20 min-[1920px]:py-28 min-[1921px]:py-28">
        <div className="m-auto w-[92%] min-[769px]:flex min-[1921px]:max-w-[118.75rem]">
          <div className="text-[3.13rem] uppercase leading-none min-[769px]:w-96">
            <p className="opacity-10">04</p>
            <h2>Grow</h2>
          </div>

          <div className="min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
            <div className="text-4xl min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12">
              <h2 className="text-[6rem] font-black uppercase leading-none">
                Supporting the growth of your business
              </h2>

              <p className="text-4xl lg:mt-8 min-[1025px]:mt-12">
                Supporting the growth of your business, we can continue to help
                breathe new life into other areas of your brand. We revitalise
                identities and bring a focus to services and products as they
                evolve.
              </p>
            </div>

            <ul className="list-none text-[1.38rem] leading-7">
              <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                <a className="flex items-center gap-5 min-[769px]:py-8" href="">
                  <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                    Web Applications
                  </h3>
                </a>

                <div className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  We're not just good at building websites; we're also great at
                  building online apps to help your day-to-day run more
                  smoothly. We have experience creating proposal tools, project
                  management portals, and complex survey systems. Got an idea,
                  let us know.
                </div>
              </li>

              <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                <a className="flex items-center gap-5 min-[769px]:py-8" href="">
                  <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                    Digital Marketing
                  </h3>
                </a>
                <div className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  Our digital marketing strategies are designed to boost your
                  online presence and drive results. From SEO and content
                  marketing to social media campaigns, we help you reach your
                  target audience effectively.
                </div>
              </li>

              <li className="list-item border-b-2 border-solid border-b-white/[0.1]">
                <a className="flex items-center gap-5 min-[769px]:py-8" href="">
                  <h3 className="cursor-pointer text-[3.13rem] uppercase leading-none">
                    Ongoing Support
                  </h3>
                </a>
                <div className="border-t-2 border-solid border-white pt-8 min-[1600px]:pb-16 min-[1920px]:pb-24 min-[1921px]:pb-24">
                  We provide continuous support and maintenance for your digital
                  assets, ensuring they remain up-to-date, secure, and optimized
                  for performance.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <section className="relative overflow-hidden bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
            <div className="m-auto w-[92%] text-lg uppercase min-[1600px]:mb-10 min-[1920px]:mb-12 min-[1921px]:mb-12 min-[1921px]:max-w-[118.75rem]">
              <p className="inline-block min-[671px]:pl-6">Related Projects</p>
            </div>

            <div className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]">
              <div className="relative">
                <ul className="list-none flex-wrap min-[769px]:flex">
                  <li className="relative list-item min-[769px]:w-[48.2105%]">
                    <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8">
                      Websites
                    </span>
                    <Link className="w-full overflow-hidden" href="">
                      <picture className="h-auto max-w-full cursor-pointer">
                        <img
                          className="h-auto w-full max-w-full"
                          src="https://www.fhoke.com/wp-content/uploads/2022/10/HiConsumption-Header-916x1100.jpg"
                          alt="HiConsumption Header"
                        />
                      </picture>
                    </Link>

                    <div className="flex justify-between min-[1025px]:mt-5">
                      <div className="flex-grow">
                        <h5>
                          <Link className="inline-block" href="">
                            HICONSUMPTION
                          </Link>
                        </h5>

                        <p className="opacity-50">
                          A modern day men's lifestyle mag.
                        </p>
                      </div>

                      <div className="ml-5 text-lg uppercase">
                        <Link
                          className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                          href=""
                        >
                          <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                            View
                            <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="relative list-item min-[769px]:ml-auto min-[769px]:w-[48.2105%]">
                    <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8">
                      Websites
                    </span>
                    <Link className="w-full overflow-hidden" href="">
                      <picture className="h-auto max-w-full cursor-pointer">
                        <img
                          className="h-auto w-full max-w-full"
                          src="https://www.fhoke.com/wp-content/uploads/2020/08/adige-header-916x1100.jpg"
                          alt="Adige Design header"
                        />
                      </picture>
                    </Link>

                    <div className="flex justify-between min-[1025px]:mt-5">
                      <div className="flex-grow">
                        <h5>
                          <Link className="inline-block" href="">
                            Adige Design
                          </Link>
                        </h5>

                        <p className="opacity-50">
                          True masters of their craft.
                        </p>
                      </div>

                      <div className="ml-5 text-lg uppercase">
                        <Link
                          className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                          href=""
                        >
                          <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                            View
                            <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative grid grid-cols-[105.50rem] grid-rows-[1155px_104px] items-center justify-items-center bg-zinc-950 text-center uppercase text-neutral-400">
        <span className="text-[13.00rem] font-bold leading-none text-white">
          <span>
            <span className="inline-block">
              <span className="inline-block">We build Software</span>
            </span>
            <br />
            <span className="inline-block">
              <span className="inline-block">Solutions</span>
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
    </>
  );
}
