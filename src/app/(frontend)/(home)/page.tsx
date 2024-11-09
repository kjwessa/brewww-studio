import LandingFooter from "./LandingFooter";
import { PortfolioCard } from "./PortfolioCard";
import { ServiceAccordion } from "./ServiceAccordion";

export default function HomePage() {
  return (
    <>
      <div>
        <div className="min-h-full text-sm text-zinc-800">
          <section className="absolute left-0 right-0 top-0 z-[3]">
            <div className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] border-b-2 border-solid border-b-white/[0.15]">
              <div className="flex justify-between border-r-2 border-solid border-r-white/[0.15] p-4">
                <a
                  className="inline-block max-w-full text-blue-700 underline"
                  href=""
                >
                  <img
                    className="inline-block h-5 w-auto max-w-full cursor-pointer align-middle"
                    src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66cdf718331a1c2297412f3e_Logo-White.png"
                  />
                </a>
                <div className="text-white">©2024</div>
              </div>
              <div className="items-center justify-between p-4 text-blue-700">
                <div className="flex justify-between">
                  <div className="flex justify-start gap-4">
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">Work</div>
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">About</div>
                    </a>
                    <a
                      className="inline-block max-w-full overflow-hidden"
                      href=""
                    >
                      <div className="cursor-pointer text-white">News</div>
                    </a>
                  </div>
                  <a
                    className="inline-block max-w-full overflow-hidden"
                    href=""
                  >
                    <div className="cursor-pointer text-white">Contact</div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="relative z-[3] flex h-[100svh] flex-col justify-between px-4 pb-4 pt-16">
              <h1 className="mx-0 my-3 text-[10.63rem] font-medium leading-none text-white">
                We craft brands beyond tomorrow.
              </h1>
              <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end text-white">
                  London / UK
                </div>
                <div className="col-start-4 row-start-1 row-end-2 text-white">
                  • A strategic social media and marketing studio with a common
                  vision of using social media to connect clients with their
                  audiences
                </div>
                <div
                  className="col-start-12 col-end-13 row-start-1 row-end-2 h-6 w-6 self-end justify-self-end overflow-hidden"
                  style={{
                    gridArea: "1 / 12 / 2 / 13",
                  }}
                >
                  <img
                    className="inline-block h-6 w-6 max-w-full align-middle"
                    src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66cdf5d728a66eec679815ec_Down-Arrow.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 top-0 z-[1] h-[100svh] w-full overflow-hidden">
              <div className="relative h-[100svh] w-full overflow-hidden text-white">
                <video
                  className='absolute bottom-[-85.13rem] left-[-105.38rem] right-[-105.38rem] top-[-85.13rem] z-[-100] m-auto inline-block h-full w-full bg-[url("https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-poster-00001.jpg")] bg-cover object-cover text-black'
                  style={{
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-transcode.mp4" />
                  <source src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80%2F66d6c237377a44df6b2bcd7d_BG%20VIdeo-transcode.webm" />
                </video>
              </div>
              <div className="absolute bottom-0 left-0 top-0 z-[2] bg-black/[0.5]" />
            </div>
          </section>
          <section className="flex flex-col gap-24 bg-white py-24 text-sm text-black">
            <div className="container mx-auto grid grid-cols-12 gap-4">
              <h2 className="col-span-1">Meet Brewww Studio</h2>
              <p className="col-span-12 indent-[calc(25%_-_4px)] text-5xl font-medium">
                In a world obsessed with the next big thing, we're focused on
                crafting the next right thing. Our studio exists to transform
                bold visions into enduring brand realities.
              </p>
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-4">
              <p className="col-span-5 col-start-7 text-base font-normal">
                But it's not just about creating visually appealing designs. We
                believe in the power of strategic marketing to help businesses
                reach their goals. Our team of marketing experts will
                collaborate with you to develop tailored strategies that
                effectively communicate your unique value proposition, engage
                your audience, and drive conversions
                <br />
                <br />
                We take pride in delivering exceptional results that go beyond
                aesthetics, helping you achieve sustainable growth and business
                success
              </p>
            </div>
          </section>

          <section className="bg-white px-4 py-4 pb-48 text-black">
            <div className="mb-16">
              <div className="flex flex-col gap-8">
                <div className="border-b-2 border-solid border-b-black/[0.1] pb-3">
                  <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start gap-4">
                    <h2 className="col-start-1 row-start-1 row-end-2 text-[12.75rem] font-medium leading-none text-black">
                      Work
                    </h2>
                    <div className="col-start-7 col-end-9 row-start-1 row-end-2 self-end text-black">
                      <div>(2014-2024)</div>
                    </div>
                    <a
                      className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block max-w-full self-end justify-self-end overflow-hidden text-blue-700"
                      href=""
                    >
                      <div className="cursor-pointer text-black">View All</div>
                      <div className="h-0 w-full cursor-pointer bg-black" />
                    </a>
                  </div>
                </div>
                <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] content-start text-5xl font-medium text-black">
                  <div className="col-span-6 row-start-1 row-end-2">
                    We help brands grow and tell their stories to the world
                  </div>
                </div>
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-4 gap-y-16">
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
              <PortfolioCard
                href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
                imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
                title="Jimmy Wood Portfolio"
                category="Visual Identity"
              />
            </div>
          </section>

          <div>
            <div className="bg-white px-4 py-4 pb-48 text-sm text-zinc-800">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <h2 className="text-[12.75rem] font-medium leading-none text-black">
                  Services
                </h2>
                <section className="flex-col">
                  <ServiceAccordion
                    id="01"
                    serviceName="Branding"
                    description="Our Visual Identity service is designed to help creative agencies establish a strong and unique brand identity. We work closely with our clients to understand vision and values, and then create a visual identity reflects their personality and resonates with their target"
                    tools={[
                      "Illustrative Style",
                      "Mascot",
                      "Key Visual",
                      "Retail or digital strategy",
                    ]}
                    image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
                    image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
                  />
                  <ServiceAccordion
                    id="02"
                    serviceName="Web"
                    description="The strategy service of our creative studio is designed to help businesses develop and innovative strategies to achieve their goals. Our team of experts collaborates closely with clients to understand their unique needs and challenges conducting thorough market research and analysis to identify opportunities and potential obstacles"
                    tools={[
                      "Illustrative Style",
                      "Mascot",
                      "Key Visual",
                      "Retail or digital strategy",
                    ]}
                    image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
                    image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
                  />
                  <ServiceAccordion
                    id="03"
                    serviceName="Content"
                    description="We partner with founders who have a strong brand foundation and are ready to take the next steps to grow their ventures at speed. Working with the relevant performance marketing specialists, our acceleration framework is designed to scale businesses with new consumers without compromising in brand promises and positioning. We understand that effective communication is the key to success in today's fast-paced and competitive market. That's why our team of experts is here to provide you with comprehensive strategies and solutions that will elevate your brand's messaging and engage your customers in meaningful ways"
                    tools={[
                      "Illustrative Style",
                      "Mascot",
                      "Key Visual",
                      "Retail or digital strategy",
                    ]}
                    image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
                    image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
                  />
                </section>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start justify-center overflow-hidden">
            <img
              className="inline-block h-[59.33rem] w-full max-w-full align-middle"
              src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201.webp"
            />
          </div>
          <LandingFooter />
        </div>
      </div>
    </>
  );
}
