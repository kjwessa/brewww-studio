export default function IndividualPage() {
  return (
    <>
      <section className="w-full bg-neutral-900 text-white min-[1600px]:pb-16 min-[1600px]:pt-20 min-[1920px]:pb-24 min-[1920px]:pt-28 min-[1921px]:pb-24 min-[1921px]:pt-28">
        <div className="mx-auto w-full max-w-[118.75rem] px-[4%]">
          <h3 className="inline-block text-lg uppercase min-[671px]:pl-6">
            Beautifully bespoke websites
          </h3>
          <h2 className="text-[8.25rem] font-bold uppercase leading-none min-[769px]:mt-8">
            A leading Cleveland creative studio
          </h2>
          <p className="text-4xl min-[769px]:mt-12">
            Since 2017 we&apos;ve been in love with crafting beautiful web
            experiences and have never looked back. In fact, we&apos;re so
            confident in its abilities we consider ourselves a leading creative
            studio in Cleveland, Ohio, and even the world.
          </p>
          <div className="mt-8">
            <a
              className="relative inline-block overflow-hidden rounded-full bg-white text-center text-lg uppercase text-neutral-900"
              href=""
            >
              <span className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5">
                Let&apos;s Work Together
                <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-neutral-900 text-[1.38rem] leading-7 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
        <div className="m-auto w-[92%] max-w-[118.75rem]">
          <div className="relative">
            <ul className="flex list-none flex-wrap">
              {[
                {
                  type: "Websites",
                  title: "Heritage Driven",
                  description: "Redefining an automotive icon.",
                  imageSrc:
                    "https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-588x700.jpg",
                  width: "30.9474%",
                },
                {
                  type: "Shops",
                  title: "Combat Fuel",
                  description: "Giving supplements a shake-up.",
                  imageSrc:
                    "https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-1244x700.jpg",
                  width: "65.4737%",
                },
                {
                  type: "Websites",
                  title: "Neck of The Woods",
                  description: "A powerful story can change everything.",
                  imageSrc:
                    "https://www.fhoke.com/wp-content/uploads/2020/11/neck-of-the-woods-films-header-1244x700.png",
                  width: "65.4737%",
                },
                {
                  type: "Websites",
                  title: "Metal & Gas",
                  description: "Drive what they don't.",
                  imageSrc:
                    "https://www.fhoke.com/wp-content/uploads/2020/03/MetalandGas-Banner-588x700.jpg",
                  width: "30.9474%",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`relative list-item ${index > 0 ? "md:mt-10 md:mt-12 min-[769px]:mt-12 min-[769px]:mt-20 min-[769px]:mt-28" : ""} ${index % 2 !== 0 ? "min-[769px]:ml-auto" : ""} min-[769px]:w-[${item.width}]`}
                >
                  <span className="absolute left-0 top-0 z-[2] w-full text-lg uppercase min-[1025px]:p-8">
                    {item.type}
                  </span>

                  <a className="w-full overflow-hidden" href="">
                    <img
                      className="h-auto w-full max-w-full"
                      src={item.imageSrc}
                      alt={item.title}
                    />
                  </a>

                  <div className="flex justify-between min-[1025px]:mt-5">
                    <div className="flex-grow">
                      <h5>
                        <a className="inline-block" href="">
                          {item.title}
                        </a>
                      </h5>

                      <p className="opacity-50">{item.description}</p>
                    </div>

                    <div className="ml-5 text-lg uppercase">
                      <a
                        className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                        href=""
                      >
                        <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
                          View
                          <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-black sm:py-32">
        <div className="container mx-auto w-[92%] max-w-[77.75rem]">
          <h2 className="inline-block text-lg uppercase min-[671px]:pl-6">
            Powerful and scalable WordPress agency websites
          </h2>

          <p className="text-4xl lg:mt-8 min-[1025px]:mt-12">
            From interactive brochure sites and online stores to digital
            products that make your life easier, you can rely on WordPress to
            make your project a huge success. We'll plan, design, and deliver
            your website on time and within budget.
          </p>
        </div>
      </section>
      <div>
        <section
          className="bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="section-1"
        >
          <div
            className="m-auto w-[92%] min-[769px]:flex min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[118.75rem]"
            id="div-1"
          >
            <div className="min-[769px]:w-[65.4737%]">
              <h6
                className="inline-block text-lg uppercase min-[671px]:pl-6"
                id="h6-1"
              >
                How can we help?
              </h6>

              <h2 className="lg:mt-10 min-[1025px]:mt-16" id="h2-1" />
            </div>
          </div>

          <div
            className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]"
            id="div-2"
          >
            <ul className="ml-auto flex list-none flex-wrap lg:w-full min-[1025px]:w-[65.4737%]">
              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:mt-16 lg:w-[48.2105%] min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-1"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    Custom plugins + integrations
                  </span>
                </h2>
                From APIs to CRMs to payment gateways, we’ll help your WordPress
                site integrate with third parties your business relies on. We
                will reduce the reliance on unnecessary off-the-shelf plugins
                and build functions into the theme to speed everything up. We
                can also create custom WordPress plugins to solve your
                functionality needs.
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:ml-14 lg:mt-16 lg:w-[48.2105%] min-[1025px]:ml-20 min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-2"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    Page builder editor
                  </span>
                </h2>
                We’ll use a powerful content editor allowing you to build out
                new and beautiful pages without needing to recruit your own
                designer. That’s where you’ll start getting a real return on
                your investment. You’ll only need to call on us to bake in new
                functionality or content blocks to present copy and images
                differently.
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:mt-16 lg:w-[48.2105%] min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-3"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    WordPress hosting
                  </span>
                </h2>
                We’re not just experienced in building WordPress websites; we’re
                also experienced in hosting and maintaining them. Hosting with
                us ensures we can support any issue uninterrupted. With a fully
                managed, dedicated cloud infrastructure, your WordPress website
                will be hosted on one of the most reliable and secure options.
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:ml-14 lg:mt-16 lg:w-[48.2105%] min-[1025px]:ml-20 min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-4"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    WordPress monitoring
                  </span>
                </h2>
                Our WordPress agency team provides a responsive WordPress
                maintenance and reactive support service. We protect your
                website’s framework and plugins, ensuring they stay up-to-date
                to minimise potential downtime and ensure that any core updates
                made by WordPress or plugin developers remain working.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 768px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmargin-left: auto !important; margin-right: auto !important;\n}\n}\n@media (max-width: 670px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-2 {\nmargin-top: 30px !important;\n}\n#p-1 {\nmargin-top: 15px !important;\n}\n}\n",
          }}
        />

        <div className="bg-neutral-900 text-white min-[769px]:flex min-[769px]:items-center">
          <div className="overflow-hidden min-[769px]:w-[48.2105%]" id="div-1">
            <img
              className="h-auto w-full max-w-full"
              src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Intro-Tall.jpg"
            />
          </div>

          <div
            className="md:mt-10 min-[769px]:ml-auto lg:w-[48.2105%] min-[1025px]:w-[39.5789%]"
            id="div-2"
          >
            <div>
              <h3 className="text-[7.50rem] uppercase leading-none">
                <span className="text-[6.25rem] leading-none">
                  <span className="inline-block overflow-hidden">What</span>{" "}
                  <span className="inline-block overflow-hidden">is</span>{" "}
                  <span className="inline-block overflow-hidden">
                    WordPress
                  </span>
                </span>
              </h3>

              <p
                className="text-[1.38rem] leading-7 lg:mt-8 min-[1025px]:mt-12"
                id="p-1"
              >
                WordPress is an online, open-source website creation tool. In
                simple terms, WordPress is a tool that we lean on to manage and
                maintain a websites content. Brands like TechCrunch and Mashable
                use WordPress as do many other famous blogs, music sites, and
                Fortune 500 companies, so you’re in good company when choosing
                to use it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 670px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-top: 50px !important; padding-bottom: 50px !important;\n}\n#div-3 {\nmargin-top: 30px !important;\n}\n#p-1 {\nmargin-top: 15px !important;\n}\n}\n@media (max-width: 1920px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmax-width: 1670px !important;\n}\n}\n@media (max-width: 768px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-2 {\nmargin-left: auto !important; margin-right: auto !important;\n}\n}\n",
          }}
        />

        <section
          className="text-neutral-900 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="section-1"
        >
          <div
            className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]"
            id="div-1"
          >
            <div className="min-[769px]:flex min-[769px]:items-center">
              <div
                className="order-1 overflow-hidden min-[769px]:ml-auto min-[769px]:w-[48.2105%]"
                id="div-2"
              >
                <img
                  className="h-auto w-full max-w-full"
                  src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Slate-Tall.jpg"
                />
              </div>

              <div
                className="md:mt-10 lg:w-[48.2105%] min-[1025px]:w-[39.5789%]"
                id="div-3"
              >
                <div>
                  <h3 className="text-[7.50rem] uppercase leading-none">
                    <span className="text-[6.25rem] leading-none">
                      <span className="inline-block overflow-hidden">Why</span>{" "}
                      <span className="inline-block overflow-hidden">we</span>{" "}
                      <span className="inline-block overflow-hidden">like</span>{" "}
                      <span className="inline-block overflow-hidden">
                        WordPress
                      </span>
                    </span>
                  </h3>

                  <p
                    className="text-[1.38rem] leading-7 lg:mt-8 min-[1025px]:mt-12"
                    id="p-1"
                  >
                    Our team of WordPress developers are smart cookies. They’ve
                    created an intelligent WordPress framework that they’ve
                    named ‘Slate’. Slate helps them to build bespoke WordPress
                    websites quickly without relying on hundreds of plugins,
                    streamlining the set-up of your site. It allows them to
                    deliver your website in a shorter time and helps us to add
                    new functionality at a fraction of the price of a custom
                    CMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
        <div className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]">
          <div className="min-[769px]:flex min-[769px]:items-center">
            <div className="overflow-hidden min-[769px]:w-[48.2105%]">
              <img
                className="h-auto w-full max-w-full"
                src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Recap-Tall.jpg"
              />
            </div>

            <div className="md:mt-10 min-[769px]:ml-auto lg:w-[48.2105%] min-[1025px]:w-[39.5789%]">
              <div>
                <h3 className="text-[5.5rem] font-bold uppercase leading-none">
                  Building with WordPress
                </h3>

                <p className="text-[1.38rem] leading-7 lg:mt-8 min-[1025px]:mt-12">
                  WordPress started in 2003 and was designed for building
                  self-hosted blogs. While we still use it to power your blog,
                  it&apos;s now capable of managing every aspect of your
                  website. It&apos;s completely customisable, we can use it for
                  almost anything you throw at us.
                </p>

                <p className="text-[1.38rem] leading-7 lg:mt-8 min-[1025px]:mt-9">
                  We use WordPress to create everything from:
                </p>
              </div>

              <ul className="list-none flex-wrap text-lg min-[671px]:flex min-[1600px]:mt-8 min-[1920px]:mt-8 min-[1921px]:mt-8">
                <li className="relative list-item pl-7 min-[671px]:w-[48.2105%]">
                  Brochure Websites
                </li>

                <li className="relative list-item pl-7 min-[671px]:ml-auto min-[671px]:w-[48.2105%]">
                  Online Magazines
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  eCommerce Shops and Stores
                </li>

                <li className="relative list-item pl-7 min-[671px]:ml-auto min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Client Portals
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Online Proposal Systems
                </li>

                <li className="relative list-item pl-7 min-[671px]:ml-auto min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Microsites
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Membership Platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 670px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-top: 50px !important; padding-bottom: 50px !important;\n}\n#footer-1 {\nmargin-top: 50px !important;\n}\n}\n@media (max-width: 1920px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmax-width: 1670px !important;\n}\n}\n@media (max-width: 768px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-2 {\nwidth: 100% !important;\n}\n}\n",
          }}
        />

        <section
          className="text-neutral-900 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="section-1"
        >
          <div
            className="m-auto flex w-[92%] min-[1921px]:max-w-[118.75rem]"
            id="div-1"
          >
            <div className="m-auto w-[65.4737%]" id="div-2">
              <blockquote>
                <p className="text-[2.88rem] leading-none">
                  “Having been in the marketing game for over 20 years, I've
                  worked on many websites. Honestly, I've never produced one as
                  good as with Fhoke. Everything about dealing with them is
                  super professional, from their fab proposal, project
                  management, wireframes, and design through to launch and
                  go-live support. It's the service that sets them apart.”
                </p>

                <footer
                  className="text-lg lg:mt-8 min-[1025px]:mt-9 min-[1600px]:mt-16 min-[1920px]:mt-24 min-[1921px]:mt-24"
                  id="footer-1"
                >
                  <div className="mt-10">
                    <strong className="mb-1">Alex Knight</strong>

                    <span className="opacity-50">
                      Head of Marketing for Original Software
                    </span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 670px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-top: 50px !important; padding-bottom: 50px !important;\n}\n#div-1 {\nmargin-bottom: 50px !important;\n}\n#h2-1 {\npadding-left: 21px !important;\n}\n#h2-2 {\nmargin-top: 15px !important;\n}\n#p-1 {\nmargin-top: 15px !important;\n}\n#span-1 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-2 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#a-1 {\nmargin-top: 20px !important;\n}\n#span-3 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-4 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#div-2 {\nmargin-top: 50px !important;\n}\n#div-3 {\nwidth: 270vw !important;\n}\n#div-4 {\nwidth: 270vw !important;\n}\n#div-5 {\nwidth: 45vw !important;\n}\n#svg-1 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-6 {\nwidth: 45vw !important;\n}\n#svg-2 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-7 {\nwidth: 45vw !important;\n}\n#svg-3 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-8 {\nwidth: 45vw !important;\n}\n#svg-4 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-9 {\nwidth: 45vw !important;\n}\n#svg-5 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-10 {\nwidth: 45vw !important;\n}\n#svg-6 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-11 {\nwidth: 270vw !important;\n}\n#div-12 {\nwidth: 45vw !important;\n}\n#svg-7 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-13 {\nwidth: 45vw !important;\n}\n#svg-8 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-14 {\nwidth: 45vw !important;\n}\n#svg-9 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-15 {\nwidth: 45vw !important;\n}\n#svg-10 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-16 {\nwidth: 45vw !important;\n}\n#svg-11 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-17 {\nwidth: 45vw !important;\n}\n#svg-12 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-18 {\nwidth: 270vw !important;\n}\n#div-19 {\nwidth: 45vw !important;\n}\n#svg-13 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-20 {\nwidth: 45vw !important;\n}\n#svg-14 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-21 {\nwidth: 45vw !important;\n}\n#svg-15 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-22 {\nwidth: 45vw !important;\n}\n#svg-16 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-23 {\nwidth: 45vw !important;\n}\n#svg-17 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n#div-24 {\nwidth: 45vw !important;\n}\n#svg-18 {\nmax-width: 150px !important; max-height: 110px !important;\n}\n}\n@media (max-width: 1920px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmax-width: 1244px !important;\n}\n}\n",
          }}
        />

        <section
          className="relative bg-neutral-900 text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="section-1"
        >
          <div
            className="m-auto w-[92%] text-center uppercase min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[77.75rem]"
            id="div-1"
          >
            <div>
              <h2 className="inline-block text-lg min-[671px]:pl-6" id="h2-1">
                Looking for a London WordPress agency?
              </h2>

              <h2
                className="text-[8.75rem] leading-none lg:mt-10 min-[1025px]:mt-16"
                id="h2-2"
              >
                <span className="text-[7.50rem] leading-none">
                  <span className="inline-block overflow-hidden">We</span>{" "}
                  <span className="inline-block overflow-hidden">
                    understand
                  </span>{" "}
                  <span className="inline-block overflow-hidden">you</span>{" "}
                  <span className="inline-block overflow-hidden">and</span>{" "}
                  <span className="inline-block overflow-hidden">the</span>{" "}
                  <span className="inline-block overflow-hidden">space</span>{" "}
                  <span className="inline-block overflow-hidden">you</span>{" "}
                  <span className="inline-block overflow-hidden">play</span>{" "}
                  <span className="inline-block overflow-hidden">in</span>
                </span>
              </h2>

              <p
                className="text-[1.38rem] leading-7 lg:mt-8 min-[1025px]:mt-12"
                id="p-1"
              >
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-white text-lg text-neutral-900"
                  href="https://www.fhoke.com/contact/"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-1"
                  >
                    Contact Us
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-2"
                    />
                  </span>
                </a>{" "}
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-lg lg:mt-8 min-[1025px]:mt-9"
                  href="https://calendly.com/fhoke/15-minute-chat"
                  id="a-1"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-3"
                  >
                    Book A Call
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-neutral-900 lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-4"
                    />
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div
            className="min-[1600px]:mt-16 min-[1920px]:mt-24 min-[1921px]:mt-24"
            id="div-2"
          >
            <div className="overflow-hidden">
              <div
                className="flex md:w-[168vw] lg:w-[132vw] min-[1600px]:w-[120vw] min-[1601px]:w-[96vw]"
                id="div-3"
              >
                <div
                  className="flex md:w-[168vw] lg:w-[132vw] min-[1600px]:w-[120vw] min-[1601px]:w-[96vw]"
                  id="div-4"
                >
                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-5"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-1"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M16.50207,34.89088l6.87288,10.85497c.10911,.17232,.29886,.27677,.50282,.27677h12.59204c.469,0,.75371-.51724,.50282-.9135l-6.87288-10.85497c-.10911-.17232-.29886-.27677-.50282-.27677h-12.59204c-.469,0-.75371,.51724-.50282,.9135Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M34.43889,34.25415l-1.40019,2.21147,5.54823,8.76284c.23365,.36903,.77199,.36903,1.00564,0l6.5453-10.33759c.25089-.39625-.03382-.9135-.50282-.9135h-10.69334c-.20396,0-.39371,.10445-.50282,.27678Zm2.60316,6.05755l.80617-.39991,1.24153,.61584,1.24153-.61584,.80617,.39992-2.0477,3.23413-2.0477-3.23413h0Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M7.85296,46.02262h10.69334c.20396,0,.39371-.10445,.50282-.27677l1.40019-2.21147-5.54823-8.76284c-.23365-.36903-.77199-.36903-1.00564,0l-6.5453,10.33759c-.25089,.39625,.03382,.9135,.50282,.91349Zm8.593-6.33432l-.80619,.39991-1.24148-.61584-1.24153,.61584-.80619-.39991,2.0477-3.23413,2.04769,3.23413Zm-7.23215,4.95411l.01647,.05527h-.05146l.03498-.05527h.00001Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M51.02918,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M59.11241,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M66.35002,45.69276l-1.57004-11.35243c-.01004-.0726,.04636-.13734,.11965-.13734h1.74799c.06234,0,.11443,.04743,.12026,.10949l.71096,7.56825,.97854-7.57243c.00778-.06023,.05907-.10531,.1198-.10531h1.50699c.06081,0,.11214,.0452,.11982,.10552l.95935,7.52736,.74303-7.52396c.0061-.06181,.05809-.10892,.12021-.10892h1.75488c.07337,0,.1298,.06488,.11963,.13754l-1.58942,11.35243c-.00835,.05966-.05939,.10404-.11963,.10404h-1.79186c-.06077,0-.11208-.04515-.11981-.10543l-.95928-7.48216-.94016,7.48186c-.00759,.06041-.05896,.10573-.11985,.10573h-1.79141c-.06032,0-.11139-.0445-.11964-.10423Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M78.4409,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.1029c.06671,0,.12079,.05408,.12079,.12079v9.86274h2.18543c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.40913c-.06671,0-.12079-.05408-.12079-.12079h.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M84.36611,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M90.42017,42.17055v-4.08383c0-2.73941,1.14036-4.10934,3.4202-4.10934,.48112,0,.90947,.06333,1.28505,.18999,.37602,.12666,.69046,.30169,.94378,.5251s.46177,.49827,.62493,.82459,.28102,.68035,.35403,1.06252,.10951,.80305,.10951,1.26262v.11215c0,.06671-.05408,.12079-.12079,.12079h-1.99999c-.06671,0-.12079-.05408-.12079-.12079v-.24101c0-.20186-.00528-.37909-.01583-.53126-.01099-.1526-.03782-.32236-.08048-.50883-.0431-.18691-.10115-.34039-.17415-.46089-.073-.12006-.17811-.22077-.31532-.30257-.13765-.08136-.30081-.12226-.48992-.12226-.71685,0-1.07527,.57084-1.07527,1.7134v5.00474c0,1.13772,.35842,1.7068,1.07527,1.7068,.71289,0,1.06955-.59019,1.06955-1.77145v-1.41546h-1.20604c-.06671,0-.12079-.05408-.12079-.12079v-1.43927c0-.06671,.05408-.12079,.12079-.12079h3.42973c.06671,0,.12079,.05408,.12079,.12079v6.21072c0,.06671-.05408,.12079-.12079,.12079h-1.40518c-.05075,0-.09609-.03172-.11348-.0794l-.26701-.732c-.1979,.30917-.47892,.5594-.84394,.75027s-.7406,.28674-1.12717,.28674c-.41648,0-.79557-.07652-1.13684-.22869-.34127-.1526-.62273-.35447-.84394-.60558s-.4068-.54621-.55721-.88572c-.15041-.33907-.25771-.68606-.32192-1.04009-.06421-.35447-.09675-.71817-.09675-1.09198h-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.07028,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M105.27299,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.35577,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.3011c.77314,0,1.40951,.06993,1.90998,.20934,.50003,.13941,.8932,.36942,1.17862,.68914s.48332,.70321,.59239,1.14959c.10951,.44682,.16448,1.0159,.16448,1.7068v3.80061c0,.41208-.01275,.77182-.0387,1.07879-.02551,.30697-.07388,.60778-.14469,.902-.07124,.29378-.16756,.54313-.29026,.74675-.12226,.20406-.28014,.39405-.47321,.5704-.19307,.17591-.42615,.31532-.69882,.41867-.27267,.10291-.59283,.18251-.95961,.23836-.36722,.05585-.78941,.08356-1.2657,.08356h-2.27559c-.06671,0-.12079-.05408-.12078-.12079Zm2.43464-1.5218c.22341,0,.39976-.00308,.52818-.00968,.12886-.00616,.25771-.02243,.38657-.04838,.12886-.02551,.22341-.06113,.28366-.10599,.05981-.0453,.11566-.11083,.16712-.19658,.05189-.08576,.08488-.18779,.09983-.30609,.01539-.11786,.02287-.26475,.02287-.4411v-6.24141c0-.38217-.1139-.63549-.34171-.75995-.22737-.1249-.60954-.18911-1.14652-.1935v8.30268Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-6"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-2"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M40.70316,39.66053l3.42119-.55495,.00027,9.79219,6.34647-1.02945,.00009,3.0923-9.76765,1.5844-.00036-12.88449Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M50.81393,50.90501l5.01177-13.6975,3.2844-.53276,5.01249,12.07147-3.47256,.56328-.87254-2.17764-4.75552,.77139-.87235,2.46067-3.33571,.54108Zm7.93715-6.35534l-1.35152-3.37123-1.35125,3.80964,2.70277-.43841Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M71.84167,42.18179l-.00021-7.57609,3.42125-.55496,.00023,8.12582c.00008,2.93764-1.47098,5.1691-5.50808,5.82395-3.79757,.616-5.50828-1.09934-5.50836-4.03699l-.00023-8.12582,3.42131-.55497,.00021,7.57609c.00005,1.71796,1.00932,2.05239,2.08698,1.87758,1.07772-.17482,2.08696-.83667,2.08691-2.55463Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M81.6919,33.01179l4.37942,7.41548-.00023-8.12582,3.25017-.52721,.00036,12.88449-4.32788,.70202-4.44782-7.36995,.00023,8.09139-3.25023,.52722-.00036-12.88449,4.39634-.71313Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M100.25328,37.40528l3.23312,.62663c-.7184,2.89954-2.89087,4.96989-6.24366,5.51375-3.84894,.62433-6.50047-1.57404-6.50058-5.55957-.00011-3.96849,2.65127-7.04408,6.50021-7.66841,3.4041-.55218,5.57661,.88201,6.27808,3.44818l-3.33567,1.77805c-.35928-1.47072-1.40279-2.21196-2.94231-1.96224-1.74488,.28304-2.92518,1.72862-2.92512,3.8245,.00006,2.11304,1.18043,3.15843,2.92531,2.87539,1.57374-.25528,2.61721-1.33505,3.01063-2.87627Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M112.98105,35.75308l-4.78969,.77693,.00014,5.06784-3.42131,.55497-.00036-12.88449,3.42131-.55497,.00013,4.72435,4.78969-.77693-.00013-4.72435,3.42131-.55497,.00036,12.88449-3.42131,.55497-.00014-5.06784Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 20.57223 40.70384 32.85123 40.70396 36.28701 116.40252 24.00801 116.40252 20.57223"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M23.49565,42.11396c.00011,3.98553-2.7539,7.06073-6.50015,7.6684-3.76334,.61045-6.51756-1.57127-6.51767-5.5568-.00011-3.96849,2.75396-7.06074,6.5173-7.67118,3.74626-.60768,6.50041,1.59109,6.50052,5.55958Zm-9.4255,1.5289c.00006,2.11304,1.18043,3.15843,2.92525,2.8754,1.72774-.28025,2.90804-1.70856,2.90798-3.8216-.00006-2.09588-1.18043-3.15855-2.90817-2.87829-1.74482,.28303-2.92512,1.72861-2.92506,3.82449Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M33.1617,46.98825l-3.66086-4.40541-1.16322,1.4085,.00011,3.77941-3.42119,.55495-.00036-12.88449,3.42119-.55495,.00013,4.7415,4.29358-5.43798,4.34497-.70479-5.20014,6.30658,5.5426,6.52241-4.15681,.67427Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 43.71299 40.70384 55.99205 40.70396 59.42777 116.40252 47.14883 116.40252 43.71299"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 26.55783 10.47748 30.91171 10.47754 34.34749 37.31848 29.99361 37.31848 26.55783"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 49.74989 10.47814 54.10365 10.47826 57.53943 37.31848 53.18573 37.31848 49.74989"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-7"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-3"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <rect
                                className="h-20 w-32"
                                fill="none"
                                height="80"
                              />
                              <g fill="rgb(255, 255, 255)">
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M77.86354,24.84157l-5.53275-5.53275c-.05552-.05552-.13071-.08676-.20937-.08676h-2.85255v-2.85255c0-.07866-.03123-.15385-.08676-.20937l-5.53275-5.53275c-.11568-.11568-.30307-.11568-.41874,0l-5.53275,5.53275c-.05552,.05552-.08676,.13071-.08676,.20937v2.85255h-2.85255c-.07866,0-.15385,.03123-.20937,.08676l-5.53275,5.53275c-.11568,.11568-.11568,.30307,0,.41874l5.53275,5.53275c.05552,.05552,.13071,.08676,.20937,.08676h2.85255v2.85255c0,.07866,.03123,.15385,.08676,.20937l5.53275,5.53275c.05784,.05784,.13303,.08676,.20937,.08676s.15153-.02892,.20937-.08676l5.53275-5.53275c.05552-.05552,.08676-.13071,.08676-.20937v-2.85255h2.85255c.07866,0,.15385-.03123,.20937-.08676l5.53275-5.53275c.11568-.11568,.11568-.30307,0-.41874Zm-20.25242,3.60213h-1.96648l-3.3916-3.39275,3.3916-3.39275h1.96648v6.78551Zm9.22163,4.40202l-3.39275,3.39275-3.39275-3.39275v-5.74317l6.78551-1.66708v7.41026Zm0-9.84638l-6.78551,1.66708v-7.41026l3.39275-3.39275,3.39275,3.39275v5.74317Zm4.4026,5.44436h-1.96648v-6.78551h1.96648l3.3916,3.39275-3.3916,3.39275Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <g fill="rgb(255, 255, 255)">
                                    <path
                                      d="M24.02019,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M40.28546,56.41173c0,2.6863-1.74766,4.3684-4.6917,4.3684-2.92915,0-4.67532-1.6821-4.67532-4.3684v-7.10733c0-.21203,.17188-.38391,.38391-.38391h1.25399c.21203,0,.38391,.17188,.38391,.38391v6.92928c0,1.69959,1.00604,2.68948,2.70348,2.66961,1.4482-.01695,2.60355-1.22132,2.60355-2.66961v-6.92928c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v7.10733Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M49.35003,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06494c.21252,0,.38479,.17228,.38479,.38479v.94604c0,.21252-.17228,.38479-.38479,.38479h-3.01368Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M55.8922,59.85581v-1.12881c0-.27421,.27844-.46008,.53096-.35319,.74503,.31536,1.64457,.5684,2.57549,.59459,.42015,0,.82541-.03278,1.1651-.12962,.82541-.19443,1.32601-.61459,1.32601-1.24556,0-.92225-.66301-1.42435-2.44344-2.05532-2.13503-.75985-3.26736-1.66646-3.26736-3.55938,0-2.03819,1.69849-3.2681,4.06148-3.2681,1.03174,0,2.02716,.22899,2.72455,.48394,.15221,.05564,.25228,.19977,.25228,.36183v1.04283c0,.27333-.27481,.45596-.52896,.35537-.64989-.25721-1.49552-.4479-2.30335-.4479-1.32601,0-2.21549,.54977-2.21549,1.43999,0,.82541,.61384,1.37518,2.39427,2.02254,2.13503,.79263,3.30014,1.69849,3.30014,3.54299,0,2.03893-1.55248,3.2681-4.15832,3.2681-1.21006,0-2.35474-.2627-3.16124-.56331-.15148-.05646-.25213-.19935-.25213-.36101Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M78.52978,49.4345v10.75164c0,.21203-.17188,.38391-.38391,.38391h-1.17353c-.21203,0-.38391-.17188-.38391-.38391v-7.21595l-.46932,.45293c-.87671,1.03238-1.76595,2.0528-2.65676,3.07172-.20294,.23212-.56435,.23126-.76627-.00175l-2.66025-3.06997-.45293-.45293v7.21595c0,.21203-.17188,.38391-.38391,.38391h-1.18992c-.21203,0-.38391-.17188-.38391-.38391v-10.75191c0-.46905,.57771-.69184,.89265-.34425l4.5604,5.239,4.55886-5.23868c.31491-.34766,.8927-.12488,.8927,.3442Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M83.59992,60.18614v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M94.24747,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06582c.21203,0,.38391,.17188,.38391,.38391v.94781c0,.21203-.17188,.38391-.38391,.38391h-3.01456Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M108.13257,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                  </g>
                                </g>
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M36.50039,66.05403c-.26609-.13593-.68594-.30755-1.21811-.30755-.91634,0-1.53117,.66233-1.53117,1.51962s.61483,1.51936,1.51359,1.51936c.5676,0,.999-.16558,1.26509-.30151v.69172c-.17739,.1005-.66206,.29574-1.29474,.29574-1.28293,0-2.23496-.94599-2.23496-2.20531,0-1.25354,.95203-2.20531,2.2528-2.20531,.61483,0,1.07011,.20101,1.2475,.30151v.69172Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M40.42527,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M47.67911,68.17064c0,.7686-.61509,1.22389-1.51962,1.22389h-1.48394v-4.25684h1.34801c.86911,0,1.48997,.4196,1.48997,1.18243,0,.38417-.22489,.69749-.53821,.83945,.39624,.13593,.70379,.53821,.70379,1.01107Zm-1.64374-1.22389c.12412,0,.24824-.00577,.36055-.01784,.21885-.07085,.36082-.26582,.36082-.55552,0-.39624-.26609-.63871-.68594-.63871h-.67991v1.21208h.64448Zm-.64448,1.85052h.79826c.42563,0,.72714-.25401,.72714-.66206,0-.41986-.27186-.65629-.64448-.65629h-.88091v1.31835Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M50.15549,69.39452v-4.25684h.74499v4.25684h-.74499Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M57.06058,69.4596l-2.48923-2.54828c-.06508-.05904-.13593-.13016-.20678-.1892v2.6724h-.73318v-4.32192h.02362l2.4832,2.54224,.20704,.20101v-2.67817h.73291v4.32192h-.01758Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M63.46814,66.94098l-.16558-.16558v2.61913h-.71533v-4.32192h.01181l1.98068,2.19927,1.98068-2.19927h.01181v4.32192h-.70956v-2.61913l-.17135,.16558c-.36659,.4314-.73921,.8573-1.11157,1.28293l-1.11157-1.28293Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M70.7986,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M75.79386,67.27791l1.83872-2.14023h.89272l-1.53721,1.74399,1.56082,2.51285h-.84549l-1.21785-2.01611-.69172,.76257v1.25354h-.74499v-4.25684h.74499v2.14023Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M80.78913,69.39452v-4.25684h2.67817v.62664h-1.93318v1.17062h1.63771v.60906h-1.63771v1.22389h2.02188v.62664h-2.76687Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M87.42787,65.13769c.96357,0,1.57263,.48467,1.57263,1.35378,0,.62664-.3784,1.04072-.83945,1.20027l.92815,1.70279h-.79826l-.81584-1.57867h-.75076v1.57867h-.73318v-4.25684h1.4367Zm-.70352,.62664v1.44851h.74472c.47916,0,.78645-.25428,.78645-.72137,0-.47287-.31935-.72714-.82187-.72714h-.7093Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M91.32888,69.22894v-.72714c.30151,.15377,.70956,.29548,1.13519,.30728,.15377,0,.30151-.01181,.42589-.04723,.30151-.07085,.48467-.22462,.48467-.45528,0-.33694-.24247-.5201-.89272-.75076-.78041-.27789-1.19423-.60906-1.19423-1.30077,0-.74499,.6206-1.19423,1.48394-1.19423,.42563,0,.83368,.10628,1.08796,.21282v.69749c-.24247-.13593-.65052-.25401-1.03469-.25401-.48494,0-.81006,.20101-.81006,.52613,0,.30151,.22462,.50252,.87514,.73895,.78041,.2897,1.20604,.62087,1.20604,1.295,0,.74499-.5676,1.19423-1.51962,1.19423-.49071,0-.95177-.11835-1.2475-.24247Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-8"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-4"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="41.49239 42.33772 41.49239 23.06723 34.18556 23.06723 27.53451 32.64391 41.49239 42.33772"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="7.8094 56.75021 16.32958 56.75021 7.8094 48.23003 7.8094 56.75021"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="12.80523 40.89738 28.65807 56.75021 41.49239 56.75021 41.49239 51.09197 22.05151 31.6511 12.80523 40.89738"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="20.67291 23.06723 7.8094 23.06723 7.8094 37.89876 24.03272 26.42703 20.67291 23.06723"
                              />
                            </g>
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M52.8513,39.66878c0,.64645,0,1.15017,.02384,1.67687-.32635-.41063-.63681-.78693-.93875-1.15329l-3.59324-4.23828h-1.3281v8.52196h1.6272v-3.94712c0-.61864-.00624-1.13967-.03405-1.68481,.50343,.61751,.89959,1.09256,1.29007,1.54718l3.62503,4.21274h.95578v-8.64995h-1.62777v3.7147Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="61.64342 37.43059 61.64342 35.95408 56.32592 35.95408 56.32592 44.47604 61.64342 44.47604 61.64342 42.99952 57.96504 42.99952 57.96504 40.84874 61.03442 40.84874 61.03442 39.3955 57.96504 39.3955 57.96504 37.43059 61.64342 37.43059"
                              />
                              <path
                                d="M69.64962,38.96944l-.14545-.25161c-.55791-.97337-1.31958-1.42685-2.39682-1.42685-1.58634,0-2.73792,1.22963-2.73792,2.92409,0,1.66693,1.18677,2.92409,2.76119,2.92409,1.14534,0,1.87239-.41971,2.43087-1.40302l.14232-.2623,.21014,.13176,1.13172,.74975-.06924,.11862c-.87348,1.49581-2.14652,2.22286-3.89235,2.22286-2.58355,0-4.45878-1.88488-4.45878-4.48176,0-2.55489,1.91155-4.48176,4.44686-4.48176,1.76285,0,3.06541,.75713,3.87135,2.25039l.06413,.11834-1.35803,.86742Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M79.15558,35.95408h-2.01428l-1.99612,2.34091c-.47392,.5511-.91378,1.07553-1.40131,1.66324l.00738-.46767c.01078-.62914,.02157-1.26794,.02157-1.87977v-1.65672h-1.63912v8.52196h1.63912v-2.38008l1.07099-1.19217,2.4269,3.57224h1.99271l-3.32478-4.83167,3.21695-3.6903Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M87.21611,35.7333c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="47.01505 49.71309 49.74729 49.71309 49.74729 56.71199 51.39777 56.71199 51.39777 49.71309 54.13002 49.71309 54.13002 48.19003 47.01505 48.19003 47.01505 49.71309"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="60.25573 51.63145 56.5467 51.63145 56.5467 48.19003 54.90758 48.19003 54.90758 56.71199 56.5467 56.71199 56.5467 53.0847 60.25573 53.0847 60.25573 56.71199 61.89485 56.71199 61.89485 48.19003 60.25573 48.19003 60.25573 51.63145"
                              />
                              <path
                                d="M81.31175,52.55062c-.12373,.43305-.24973,.89845-.3814,1.41323-.09195-.28492-.18049-.56302-.26959-.8417l-1.61585-4.87395h-.86099l-1.41721,4.28652-.19638,.60786c-.08797,.27016-.17538,.54004-.26335,.81644-.1294-.4935-.26221-.96315-.38935-1.40699l-1.2038-4.36201h-1.77193l2.61533,8.54722,.03178,.10273h1.2231l1.41607-4.1889c.13451-.37629,.26165-.76649,.39275-1.17003l1.79577,5.35893h1.23445l2.64711-8.64995h-1.78328l-1.20323,4.36059Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M89.11064,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.11905,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M107.4645,48.19003h-2.54041v8.52196h2.54041c3.04668,0,4.86515-1.60592,4.86515-4.29589,0-2.72515-1.72766-4.22608-4.86515-4.22608Zm-.90129,1.51142h.77302c2.2799,0,3.29641,.83006,3.29641,2.69138,0,1.94192-1.01651,2.80773-3.29641,2.80773h-.77302v-5.49912Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.01356,55.03598l.06584,.11465c.69129,1.20806,1.66977,1.77051,3.07903,1.77051,1.66012,0,2.91217-1.10192,2.91217-2.5634,0-1.23587-.64418-1.98392-2.37525-2.75978-1.50234-.67937-1.65899-.93506-1.65899-1.35591,0-.50485,.42227-.8312,1.07553-.8312,.56416,0,.9677,.23071,1.3088,.74833l.17092,.243,1.27183-.89967-.06924-.11436c-.55962-.92825-1.48702-1.41891-2.6823-1.41891-1.61926,0-2.74984,.94414-2.74984,2.29608,0,1.19841,.67256,1.9649,2.32077,2.64484,1.44729,.61382,1.70212,.98217,1.70212,1.52902,0,.58658-.53237,1.02899-1.23842,1.02899-.73953,0-1.22196-.31244-1.6641-1.07837l-.1603-.27205-1.30856,.91822Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="69.0592 49.66655 69.0592 48.19003 63.7417 48.19003 63.7417 56.71199 69.0592 56.71199 69.0592 55.23548 65.38082 55.23548 65.38082 53.0847 68.4502 53.0847 68.4502 51.63145 65.38082 51.63145 65.38082 49.66655 69.0592 49.66655"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="93.02115 44.47604 93.02115 35.95408 98.33865 35.95408 98.33865 37.43059 94.66027 37.43059 94.66027 39.3955 97.72965 39.3955 97.72965 40.84874 94.66027 40.84874 94.66027 44.47604 93.02115 44.47604"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-9"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-5"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M47.41,28.38h3.32L41.31,51.79h-.73L33,32.83l-7.7,19h-.72L15.15,28.38h3.36l6.42,16.07L31.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M63.39,28.05a12.51,12.51,0,0,1,9,3.42A11.32,11.32,0,0,1,76,40a11.18,11.18,0,0,1-3.63,8.54A12.89,12.89,0,0,1,63.21,52a12.15,12.15,0,0,1-8.78-3.37,11.29,11.29,0,0,1-3.51-8.47,11.53,11.53,0,0,1,3.53-8.64A12.35,12.35,0,0,1,63.39,28.05Zm.13,3.17A9,9,0,0,0,57,33.72a8.52,8.52,0,0,0-2.58,6.39A8.35,8.35,0,0,0,57,46.38a9.59,9.59,0,0,0,13-.05A8.52,8.52,0,0,0,72.54,40a8.36,8.36,0,0,0-2.61-6.24A8.87,8.87,0,0,0,63.52,31.22Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M108.4,28.38h3.33l-9.42,23.41h-.73L94,32.83l-7.7,19h-.71l-9.4-23.41h3.37l6.42,16.07L92.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-10"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-6"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M101.88,49.54A5.29,5.29,0,0,0,101,47s-2.31-2.59-2.71-3a1.17,1.17,0,0,1-.09-1.44c.28-.23,1.17-.93,1-1.22s-.7-.32-1.86,0A2.09,2.09,0,0,1,95.78,41a4.74,4.74,0,0,0-1.92-4.38c-.65-.51-2.53-.71-4-.79a.56.56,0,0,1,.16-.1c-1.78-3.73-10.26-2.37-19.16-1S55.18,36,52.76,34.35a3.2,3.2,0,0,1-1.31-4s2-7,3.73-13.28-2.28-5.6-2.28-5.59c-3.78,0-5.73,3.07-5.78,2.74a2.34,2.34,0,0,0-2.42-2.74,4.52,4.52,0,0,0-3.5,1.58c.56-2-2.1-1.54-2-1.54-5.45,0-10.3.93-11.93,3.12s.56,4.71,1.4,4.76S30,19.06,30,18.5s-.47-.79-1.07-.79-1-.79-.94-.65c-1.39-2.47,3.5-4.06,3.59-4,5.69-1.17,5.27,1.3,5.27,1.3L32.25,30c-.54,1.86.51,1.86.51,1.86s.8.05,2,0,1.44-1.91,1.44-1.91,2.71-10.81,3.69-13.33,2.51-3.87,4-3.87.74,2,.74,2-4.05,14.68-4.38,15.89.19,1.17,1.73,1.12,1.63-.93,1.63-.93S46.05,22,46.84,18.32s3.31-5.36,4.75-5.46.89,1.87.89,1.87-3,11-4.43,16.45S52.9,36.91,57.28,37s12.26-.93,15.61-1.21,4.8.1,5.27,1.45a1.58,1.58,0,0,0,.22.43,36.32,36.32,0,0,1-.32,4.16c-.32,2.27.8,2.72,2.52,2.82a8.66,8.66,0,0,1,3.26.79,11.93,11.93,0,0,0,3.41.42c1.67.14,1.63-.79,1.63-.79l.36-1.5c.51,0,.69.19,1.36,1.08s2.24-.66,2.75-1,1,1.77,1,2.33.93.56,1.21.19a4.93,4.93,0,0,1,1.07-.84S97.92,47,98.9,48.61s.23,5.5.23,6.48.84.88.84.88a5,5,0,0,1,1.16,0c.84,0,.75-1.21.75-1.21S102,51,101.88,49.54Zm-17-4.94c-.56-.05-.33-.7-3-.7s-2.7-2-2.56-2.89c.09-.61.44-1.93.64-2.67a3,3,0,0,0,.57-.08,2.45,2.45,0,0,1,1.44.42c.24.19.84,0,1.59.1s1.81-.33,2.61,0,2,1.91,1.35,2.42a2.39,2.39,0,0,1-2.75-.65c-.42-.7-1-.75-1.31-.56a17,17,0,0,0-2.14,1.16c-.65.51,1.07.28,2-.14s.75-.09,1.54.75a6.17,6.17,0,0,0,1.73,1.06C86.06,43.7,85.31,44.64,84.87,44.6Zm8.29-6.06c-.42-.74-1.3-.23-1.91-.51A5.6,5.6,0,0,0,89,37.56c-.53,0-.31-.49.07-1,1.64.11,4.17.37,5,1A3,3,0,0,1,94.67,40h0A6,6,0,0,1,93.16,38.54Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M59.05,32.16a11.45,11.45,0,0,0,8.58-4.28c-.26,1.73-.07,3.47,1.77,3.76,2.12.35,4.25-.41,6.56-3.56.1,1.85.79,4,3.36,4.08.54,0,2.25.31,3.8-2.36.09,1.1.56,2.08,1.94,2.13,2.25.1,4.18-1.76,5.44-3.4-.11,1.45.06,3.31,1.59,3.39,2.52.14,4-1.25,4.15-2.23s-1.16-.56-1.44.14-1.84.93-1.44-.52S98,12.77,98,12.77s.61-1.17-.93-1.07-4.75-.42-4.1,1.07c0,0,1.63-.14,1.26,1.26s-2.9,10.76-3.37,12.53c-1.13,1.57-2.83,3.55-4.18,3.55-.09-.1-1.58.42-.75-2.52s2.33-7.36,2.33-7.36.8-1.49-.65-1.26A5.45,5.45,0,0,0,86,19.4a4.11,4.11,0,0,0-2.63-.85c-.19,0-5.41-.34-7.18,6.89a4.73,4.73,0,0,0-.14.86c-1,1.37-3.06,3.89-4.52,4-2,.14-.7-2.37-.51-3.49.1-.61,1.08-3.82,1.94-6.6.81.06,1.51.11,1.88.12,1.31.05.7.05,1.31-.84s0-.93,0-.93l-2.66,0c.48-1.54.84-2.67.84-2.67s.47-1.4-.56-1.4a2.31,2.31,0,0,0-2.28,1.16s-.43,1.24-1,2.9c-.84,0-1.51,0-1.77,0a1.2,1.2,0,0,0-1.16.93c-.18.31.64.33.64.33L70,20c-.66,2-1.39,4.19-1.8,5.59-5,6.57-10,5.87-10.3,2.51A9.31,9.31,0,0,1,58,25.81c3.6.42,7.63-1.48,7.8-4.42.19-3.17-3-2.79-3-2.84-3.12,0-7.27,2.38-8.29,7.83S59.05,32.2,59.05,32.16ZM78.81,27.5c.19-3.22,2.08-8,4.47-8.16,0,0,1.79-.49,1.41,2.69h0l-1.17,4.72a10,10,0,0,0-.32,1.42c-.69,1.18-1.71,2.54-2.81,2.54C80.16,30.62,78.62,30.71,78.81,27.5ZM60.17,20.74c.65-.56,3.45-2.42,3,1.07-.4,3-3.93,3-5,2.91A9.25,9.25,0,0,1,60.17,20.74Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M75,49.18s.79-1.49-.65-1.26a5.52,5.52,0,0,0-1.62.43,4.17,4.17,0,0,0-2.63-.85c-.18,0-5.4-.34-7.17,6.89,0-.23-1.45,6.58,3.17,6.72.53,0,2.24.31,3.79-2.36.1,1.1.57,2.08,1.94,2.13,2.61.11,4.78-2.39,6-4.14h0c1.82-1.8,2.83-6.27,2.88-5.75a8.67,8.67,0,0,0,2.38,4.42c.84,1,1.77,4.29-.28,4.38s-2.47-.28-3.22-1.91-1.68,1.17-2,1.26c.53,2.1,2.53,2.29,4.91,2.24a3.46,3.46,0,0,0,3.64-3.12,7,7,0,0,0-1.26-4.43,6.29,6.29,0,0,1-.93-4.2c.23-1.11.14-2.28-1.49-2.75s-1.78.94-1.82,1a20.73,20.73,0,0,1-3,7.67c-1.13,1.55-2.81,3.5-4.15,3.5-.09-.1-1.58.42-.74-2.52S75,49.18,75,49.18ZM67.19,59.66c-.23-.09-1.77,0-1.59-3.21s2.08-8,4.48-8.16c0,0,1.78-.48,1.4,2.69h0L70.31,55.7A9.9,9.9,0,0,0,70,57.13C69.31,58.3,68.28,59.66,67.19,59.66Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M96.75,62.36c-.37.56-10.86,5.17-25.21,1.63-5.55-1.37-9.71-2.33-13-2.9.2-.57.38-1.17.55-1.81,2.1-8.15,1.77-6.62,1.77-6.62s.37-1.35-.61-1.16a3.77,3.77,0,0,1-1.63.14c-.46-.1-.74.18-.88.65s-1.07,5.27-4,5.41c-2.55.12-3.41-5.24-2-9.81h0c8.07,0,11.7-2.54,12.12-5.2s-.93-3.91-5.87-3.5c-3.62.31-7.24,3.4-9.15,7.3a7.15,7.15,0,0,1-4-3c.3-.53.52-.93.64-1.12.68-1.06,3-2,1.54-3.51a2.2,2.2,0,0,0-3.07,0h0a2.85,2.85,0,0,0-1.64,2.44,6.78,6.78,0,0,0,1.13,3.17,24.2,24.2,0,0,1-1.77,2.59c-1.62-1.31-3.49-2.57-5.23-4l-.54-.47c2.23-1.41,5.3-3.66,5.9-4.89.84-1.72.09-4.43-4.2-4.33s-8.1,3.26-7.92,6.94A6.85,6.85,0,0,0,31.23,44c-8.87,4.62-5.74,8-5.74,8,4.34,4.43,10.12,1.45,12.91,0a5.39,5.39,0,0,0,1.08-.78c2.39,2.05,3.69,4.44,1.44,7.21-2.56,3.17-8.57.7-9,.33s-.51-.56-1.26-.14-.14.84-.23.88c4.66,3.27,14.17,2.29,15.38-3.77.71-3.54-1-5.92-3.45-8.06.57-.87,1.11-1.75,1.57-2.55a8.08,8.08,0,0,0,4.46,2.44A12.72,12.72,0,0,0,47.49,51c-.6,5.77,3.4,11,9.56,6.29-.09,0-.44,1.54-1.07,3.44a20.39,20.39,0,0,0-9.28.66c-5.41,1.77-3.92,7.36.65,7.87,4,.45,8.32-1.26,10.75-7.11,5,1.11,9.61,3.17,12.79,4.09,4.38,1.25,19,6.29,26.84-2.94,0,0,.66-.84.35-1.35S97.13,61.8,96.75,62.36ZM35.33,35.42c.74-.89,4.47-2.14,4.52,1.26,0,1.86-2.47,3.82-4.73,5.21C32.22,38.6,34.66,36.21,35.33,35.42ZM29.64,49.07A5.47,5.47,0,0,1,32,44.91a43.16,43.16,0,0,0,6.39,5.47l.11.08C34,54.3,29.73,51.54,29.64,49.07Zm15.12-9.19c.31.53.52,1.35.26,1.55a6,6,0,0,0-.64,1.23A2.48,2.48,0,0,1,44.76,39.88Zm14,.2C60,40,61.19,41,60,43.2c-1.06,2-3.8,3.71-8,3.7.14-.35.29-.7.46-1C54.9,41.06,57.47,40.13,58.72,40.08ZM52.25,67c-3,1.68-6.58,1.63-7-1.49,0,0,.19-4.28,7.14-4.15a25.82,25.82,0,0,1,3.26.3C54.85,63.86,53.72,66.2,52.25,67Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <div
                  className="flex md:w-[168vw] lg:w-[132vw] min-[1600px]:w-[120vw] min-[1601px]:w-[96vw]"
                  id="div-11"
                >
                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-12"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-7"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M16.50207,34.89088l6.87288,10.85497c.10911,.17232,.29886,.27677,.50282,.27677h12.59204c.469,0,.75371-.51724,.50282-.9135l-6.87288-10.85497c-.10911-.17232-.29886-.27677-.50282-.27677h-12.59204c-.469,0-.75371,.51724-.50282,.9135Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M34.43889,34.25415l-1.40019,2.21147,5.54823,8.76284c.23365,.36903,.77199,.36903,1.00564,0l6.5453-10.33759c.25089-.39625-.03382-.9135-.50282-.9135h-10.69334c-.20396,0-.39371,.10445-.50282,.27678Zm2.60316,6.05755l.80617-.39991,1.24153,.61584,1.24153-.61584,.80617,.39992-2.0477,3.23413-2.0477-3.23413h0Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M7.85296,46.02262h10.69334c.20396,0,.39371-.10445,.50282-.27677l1.40019-2.21147-5.54823-8.76284c-.23365-.36903-.77199-.36903-1.00564,0l-6.5453,10.33759c-.25089,.39625,.03382,.9135,.50282,.91349Zm8.593-6.33432l-.80619,.39991-1.24148-.61584-1.24153,.61584-.80619-.39991,2.0477-3.23413,2.04769,3.23413Zm-7.23215,4.95411l.01647,.05527h-.05146l.03498-.05527h.00001Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M51.02918,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M59.11241,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M66.35002,45.69276l-1.57004-11.35243c-.01004-.0726,.04636-.13734,.11965-.13734h1.74799c.06234,0,.11443,.04743,.12026,.10949l.71096,7.56825,.97854-7.57243c.00778-.06023,.05907-.10531,.1198-.10531h1.50699c.06081,0,.11214,.0452,.11982,.10552l.95935,7.52736,.74303-7.52396c.0061-.06181,.05809-.10892,.12021-.10892h1.75488c.07337,0,.1298,.06488,.11963,.13754l-1.58942,11.35243c-.00835,.05966-.05939,.10404-.11963,.10404h-1.79186c-.06077,0-.11208-.04515-.11981-.10543l-.95928-7.48216-.94016,7.48186c-.00759,.06041-.05896,.10573-.11985,.10573h-1.79141c-.06032,0-.11139-.0445-.11964-.10423Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M78.4409,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.1029c.06671,0,.12079,.05408,.12079,.12079v9.86274h2.18543c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.40913c-.06671,0-.12079-.05408-.12079-.12079h.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M84.36611,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M90.42017,42.17055v-4.08383c0-2.73941,1.14036-4.10934,3.4202-4.10934,.48112,0,.90947,.06333,1.28505,.18999,.37602,.12666,.69046,.30169,.94378,.5251s.46177,.49827,.62493,.82459,.28102,.68035,.35403,1.06252,.10951,.80305,.10951,1.26262v.11215c0,.06671-.05408,.12079-.12079,.12079h-1.99999c-.06671,0-.12079-.05408-.12079-.12079v-.24101c0-.20186-.00528-.37909-.01583-.53126-.01099-.1526-.03782-.32236-.08048-.50883-.0431-.18691-.10115-.34039-.17415-.46089-.073-.12006-.17811-.22077-.31532-.30257-.13765-.08136-.30081-.12226-.48992-.12226-.71685,0-1.07527,.57084-1.07527,1.7134v5.00474c0,1.13772,.35842,1.7068,1.07527,1.7068,.71289,0,1.06955-.59019,1.06955-1.77145v-1.41546h-1.20604c-.06671,0-.12079-.05408-.12079-.12079v-1.43927c0-.06671,.05408-.12079,.12079-.12079h3.42973c.06671,0,.12079,.05408,.12079,.12079v6.21072c0,.06671-.05408,.12079-.12079,.12079h-1.40518c-.05075,0-.09609-.03172-.11348-.0794l-.26701-.732c-.1979,.30917-.47892,.5594-.84394,.75027s-.7406,.28674-1.12717,.28674c-.41648,0-.79557-.07652-1.13684-.22869-.34127-.1526-.62273-.35447-.84394-.60558s-.4068-.54621-.55721-.88572c-.15041-.33907-.25771-.68606-.32192-1.04009-.06421-.35447-.09675-.71817-.09675-1.09198h-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.07028,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M105.27299,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.35577,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.3011c.77314,0,1.40951,.06993,1.90998,.20934,.50003,.13941,.8932,.36942,1.17862,.68914s.48332,.70321,.59239,1.14959c.10951,.44682,.16448,1.0159,.16448,1.7068v3.80061c0,.41208-.01275,.77182-.0387,1.07879-.02551,.30697-.07388,.60778-.14469,.902-.07124,.29378-.16756,.54313-.29026,.74675-.12226,.20406-.28014,.39405-.47321,.5704-.19307,.17591-.42615,.31532-.69882,.41867-.27267,.10291-.59283,.18251-.95961,.23836-.36722,.05585-.78941,.08356-1.2657,.08356h-2.27559c-.06671,0-.12079-.05408-.12078-.12079Zm2.43464-1.5218c.22341,0,.39976-.00308,.52818-.00968,.12886-.00616,.25771-.02243,.38657-.04838,.12886-.02551,.22341-.06113,.28366-.10599,.05981-.0453,.11566-.11083,.16712-.19658,.05189-.08576,.08488-.18779,.09983-.30609,.01539-.11786,.02287-.26475,.02287-.4411v-6.24141c0-.38217-.1139-.63549-.34171-.75995-.22737-.1249-.60954-.18911-1.14652-.1935v8.30268Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-13"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-8"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M40.70316,39.66053l3.42119-.55495,.00027,9.79219,6.34647-1.02945,.00009,3.0923-9.76765,1.5844-.00036-12.88449Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M50.81393,50.90501l5.01177-13.6975,3.2844-.53276,5.01249,12.07147-3.47256,.56328-.87254-2.17764-4.75552,.77139-.87235,2.46067-3.33571,.54108Zm7.93715-6.35534l-1.35152-3.37123-1.35125,3.80964,2.70277-.43841Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M71.84167,42.18179l-.00021-7.57609,3.42125-.55496,.00023,8.12582c.00008,2.93764-1.47098,5.1691-5.50808,5.82395-3.79757,.616-5.50828-1.09934-5.50836-4.03699l-.00023-8.12582,3.42131-.55497,.00021,7.57609c.00005,1.71796,1.00932,2.05239,2.08698,1.87758,1.07772-.17482,2.08696-.83667,2.08691-2.55463Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M81.6919,33.01179l4.37942,7.41548-.00023-8.12582,3.25017-.52721,.00036,12.88449-4.32788,.70202-4.44782-7.36995,.00023,8.09139-3.25023,.52722-.00036-12.88449,4.39634-.71313Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M100.25328,37.40528l3.23312,.62663c-.7184,2.89954-2.89087,4.96989-6.24366,5.51375-3.84894,.62433-6.50047-1.57404-6.50058-5.55957-.00011-3.96849,2.65127-7.04408,6.50021-7.66841,3.4041-.55218,5.57661,.88201,6.27808,3.44818l-3.33567,1.77805c-.35928-1.47072-1.40279-2.21196-2.94231-1.96224-1.74488,.28304-2.92518,1.72862-2.92512,3.8245,.00006,2.11304,1.18043,3.15843,2.92531,2.87539,1.57374-.25528,2.61721-1.33505,3.01063-2.87627Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M112.98105,35.75308l-4.78969,.77693,.00014,5.06784-3.42131,.55497-.00036-12.88449,3.42131-.55497,.00013,4.72435,4.78969-.77693-.00013-4.72435,3.42131-.55497,.00036,12.88449-3.42131,.55497-.00014-5.06784Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 20.57223 40.70384 32.85123 40.70396 36.28701 116.40252 24.00801 116.40252 20.57223"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M23.49565,42.11396c.00011,3.98553-2.7539,7.06073-6.50015,7.6684-3.76334,.61045-6.51756-1.57127-6.51767-5.5568-.00011-3.96849,2.75396-7.06074,6.5173-7.67118,3.74626-.60768,6.50041,1.59109,6.50052,5.55958Zm-9.4255,1.5289c.00006,2.11304,1.18043,3.15843,2.92525,2.8754,1.72774-.28025,2.90804-1.70856,2.90798-3.8216-.00006-2.09588-1.18043-3.15855-2.90817-2.87829-1.74482,.28303-2.92512,1.72861-2.92506,3.82449Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M33.1617,46.98825l-3.66086-4.40541-1.16322,1.4085,.00011,3.77941-3.42119,.55495-.00036-12.88449,3.42119-.55495,.00013,4.7415,4.29358-5.43798,4.34497-.70479-5.20014,6.30658,5.5426,6.52241-4.15681,.67427Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 43.71299 40.70384 55.99205 40.70396 59.42777 116.40252 47.14883 116.40252 43.71299"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 26.55783 10.47748 30.91171 10.47754 34.34749 37.31848 29.99361 37.31848 26.55783"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 49.74989 10.47814 54.10365 10.47826 57.53943 37.31848 53.18573 37.31848 49.74989"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-14"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-9"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <rect
                                className="h-20 w-32"
                                fill="none"
                                height="80"
                              />
                              <g fill="rgb(255, 255, 255)">
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M77.86354,24.84157l-5.53275-5.53275c-.05552-.05552-.13071-.08676-.20937-.08676h-2.85255v-2.85255c0-.07866-.03123-.15385-.08676-.20937l-5.53275-5.53275c-.11568-.11568-.30307-.11568-.41874,0l-5.53275,5.53275c-.05552,.05552-.08676,.13071-.08676,.20937v2.85255h-2.85255c-.07866,0-.15385,.03123-.20937,.08676l-5.53275,5.53275c-.11568,.11568-.11568,.30307,0,.41874l5.53275,5.53275c.05552,.05552,.13071,.08676,.20937,.08676h2.85255v2.85255c0,.07866,.03123,.15385,.08676,.20937l5.53275,5.53275c.05784,.05784,.13303,.08676,.20937,.08676s.15153-.02892,.20937-.08676l5.53275-5.53275c.05552-.05552,.08676-.13071,.08676-.20937v-2.85255h2.85255c.07866,0,.15385-.03123,.20937-.08676l5.53275-5.53275c.11568-.11568,.11568-.30307,0-.41874Zm-20.25242,3.60213h-1.96648l-3.3916-3.39275,3.3916-3.39275h1.96648v6.78551Zm9.22163,4.40202l-3.39275,3.39275-3.39275-3.39275v-5.74317l6.78551-1.66708v7.41026Zm0-9.84638l-6.78551,1.66708v-7.41026l3.39275-3.39275,3.39275,3.39275v5.74317Zm4.4026,5.44436h-1.96648v-6.78551h1.96648l3.3916,3.39275-3.3916,3.39275Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <g fill="rgb(255, 255, 255)">
                                    <path
                                      d="M24.02019,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M40.28546,56.41173c0,2.6863-1.74766,4.3684-4.6917,4.3684-2.92915,0-4.67532-1.6821-4.67532-4.3684v-7.10733c0-.21203,.17188-.38391,.38391-.38391h1.25399c.21203,0,.38391,.17188,.38391,.38391v6.92928c0,1.69959,1.00604,2.68948,2.70348,2.66961,1.4482-.01695,2.60355-1.22132,2.60355-2.66961v-6.92928c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v7.10733Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M49.35003,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06494c.21252,0,.38479,.17228,.38479,.38479v.94604c0,.21252-.17228,.38479-.38479,.38479h-3.01368Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M55.8922,59.85581v-1.12881c0-.27421,.27844-.46008,.53096-.35319,.74503,.31536,1.64457,.5684,2.57549,.59459,.42015,0,.82541-.03278,1.1651-.12962,.82541-.19443,1.32601-.61459,1.32601-1.24556,0-.92225-.66301-1.42435-2.44344-2.05532-2.13503-.75985-3.26736-1.66646-3.26736-3.55938,0-2.03819,1.69849-3.2681,4.06148-3.2681,1.03174,0,2.02716,.22899,2.72455,.48394,.15221,.05564,.25228,.19977,.25228,.36183v1.04283c0,.27333-.27481,.45596-.52896,.35537-.64989-.25721-1.49552-.4479-2.30335-.4479-1.32601,0-2.21549,.54977-2.21549,1.43999,0,.82541,.61384,1.37518,2.39427,2.02254,2.13503,.79263,3.30014,1.69849,3.30014,3.54299,0,2.03893-1.55248,3.2681-4.15832,3.2681-1.21006,0-2.35474-.2627-3.16124-.56331-.15148-.05646-.25213-.19935-.25213-.36101Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M78.52978,49.4345v10.75164c0,.21203-.17188,.38391-.38391,.38391h-1.17353c-.21203,0-.38391-.17188-.38391-.38391v-7.21595l-.46932,.45293c-.87671,1.03238-1.76595,2.0528-2.65676,3.07172-.20294,.23212-.56435,.23126-.76627-.00175l-2.66025-3.06997-.45293-.45293v7.21595c0,.21203-.17188,.38391-.38391,.38391h-1.18992c-.21203,0-.38391-.17188-.38391-.38391v-10.75191c0-.46905,.57771-.69184,.89265-.34425l4.5604,5.239,4.55886-5.23868c.31491-.34766,.8927-.12488,.8927,.3442Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M83.59992,60.18614v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M94.24747,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06582c.21203,0,.38391,.17188,.38391,.38391v.94781c0,.21203-.17188,.38391-.38391,.38391h-3.01456Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M108.13257,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                  </g>
                                </g>
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M36.50039,66.05403c-.26609-.13593-.68594-.30755-1.21811-.30755-.91634,0-1.53117,.66233-1.53117,1.51962s.61483,1.51936,1.51359,1.51936c.5676,0,.999-.16558,1.26509-.30151v.69172c-.17739,.1005-.66206,.29574-1.29474,.29574-1.28293,0-2.23496-.94599-2.23496-2.20531,0-1.25354,.95203-2.20531,2.2528-2.20531,.61483,0,1.07011,.20101,1.2475,.30151v.69172Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M40.42527,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M47.67911,68.17064c0,.7686-.61509,1.22389-1.51962,1.22389h-1.48394v-4.25684h1.34801c.86911,0,1.48997,.4196,1.48997,1.18243,0,.38417-.22489,.69749-.53821,.83945,.39624,.13593,.70379,.53821,.70379,1.01107Zm-1.64374-1.22389c.12412,0,.24824-.00577,.36055-.01784,.21885-.07085,.36082-.26582,.36082-.55552,0-.39624-.26609-.63871-.68594-.63871h-.67991v1.21208h.64448Zm-.64448,1.85052h.79826c.42563,0,.72714-.25401,.72714-.66206,0-.41986-.27186-.65629-.64448-.65629h-.88091v1.31835Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M50.15549,69.39452v-4.25684h.74499v4.25684h-.74499Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M57.06058,69.4596l-2.48923-2.54828c-.06508-.05904-.13593-.13016-.20678-.1892v2.6724h-.73318v-4.32192h.02362l2.4832,2.54224,.20704,.20101v-2.67817h.73291v4.32192h-.01758Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M63.46814,66.94098l-.16558-.16558v2.61913h-.71533v-4.32192h.01181l1.98068,2.19927,1.98068-2.19927h.01181v4.32192h-.70956v-2.61913l-.17135,.16558c-.36659,.4314-.73921,.8573-1.11157,1.28293l-1.11157-1.28293Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M70.7986,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M75.79386,67.27791l1.83872-2.14023h.89272l-1.53721,1.74399,1.56082,2.51285h-.84549l-1.21785-2.01611-.69172,.76257v1.25354h-.74499v-4.25684h.74499v2.14023Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M80.78913,69.39452v-4.25684h2.67817v.62664h-1.93318v1.17062h1.63771v.60906h-1.63771v1.22389h2.02188v.62664h-2.76687Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M87.42787,65.13769c.96357,0,1.57263,.48467,1.57263,1.35378,0,.62664-.3784,1.04072-.83945,1.20027l.92815,1.70279h-.79826l-.81584-1.57867h-.75076v1.57867h-.73318v-4.25684h1.4367Zm-.70352,.62664v1.44851h.74472c.47916,0,.78645-.25428,.78645-.72137,0-.47287-.31935-.72714-.82187-.72714h-.7093Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M91.32888,69.22894v-.72714c.30151,.15377,.70956,.29548,1.13519,.30728,.15377,0,.30151-.01181,.42589-.04723,.30151-.07085,.48467-.22462,.48467-.45528,0-.33694-.24247-.5201-.89272-.75076-.78041-.27789-1.19423-.60906-1.19423-1.30077,0-.74499,.6206-1.19423,1.48394-1.19423,.42563,0,.83368,.10628,1.08796,.21282v.69749c-.24247-.13593-.65052-.25401-1.03469-.25401-.48494,0-.81006,.20101-.81006,.52613,0,.30151,.22462,.50252,.87514,.73895,.78041,.2897,1.20604,.62087,1.20604,1.295,0,.74499-.5676,1.19423-1.51962,1.19423-.49071,0-.95177-.11835-1.2475-.24247Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-15"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-10"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="41.49239 42.33772 41.49239 23.06723 34.18556 23.06723 27.53451 32.64391 41.49239 42.33772"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="7.8094 56.75021 16.32958 56.75021 7.8094 48.23003 7.8094 56.75021"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="12.80523 40.89738 28.65807 56.75021 41.49239 56.75021 41.49239 51.09197 22.05151 31.6511 12.80523 40.89738"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="20.67291 23.06723 7.8094 23.06723 7.8094 37.89876 24.03272 26.42703 20.67291 23.06723"
                              />
                            </g>
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M52.8513,39.66878c0,.64645,0,1.15017,.02384,1.67687-.32635-.41063-.63681-.78693-.93875-1.15329l-3.59324-4.23828h-1.3281v8.52196h1.6272v-3.94712c0-.61864-.00624-1.13967-.03405-1.68481,.50343,.61751,.89959,1.09256,1.29007,1.54718l3.62503,4.21274h.95578v-8.64995h-1.62777v3.7147Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="61.64342 37.43059 61.64342 35.95408 56.32592 35.95408 56.32592 44.47604 61.64342 44.47604 61.64342 42.99952 57.96504 42.99952 57.96504 40.84874 61.03442 40.84874 61.03442 39.3955 57.96504 39.3955 57.96504 37.43059 61.64342 37.43059"
                              />
                              <path
                                d="M69.64962,38.96944l-.14545-.25161c-.55791-.97337-1.31958-1.42685-2.39682-1.42685-1.58634,0-2.73792,1.22963-2.73792,2.92409,0,1.66693,1.18677,2.92409,2.76119,2.92409,1.14534,0,1.87239-.41971,2.43087-1.40302l.14232-.2623,.21014,.13176,1.13172,.74975-.06924,.11862c-.87348,1.49581-2.14652,2.22286-3.89235,2.22286-2.58355,0-4.45878-1.88488-4.45878-4.48176,0-2.55489,1.91155-4.48176,4.44686-4.48176,1.76285,0,3.06541,.75713,3.87135,2.25039l.06413,.11834-1.35803,.86742Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M79.15558,35.95408h-2.01428l-1.99612,2.34091c-.47392,.5511-.91378,1.07553-1.40131,1.66324l.00738-.46767c.01078-.62914,.02157-1.26794,.02157-1.87977v-1.65672h-1.63912v8.52196h1.63912v-2.38008l1.07099-1.19217,2.4269,3.57224h1.99271l-3.32478-4.83167,3.21695-3.6903Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M87.21611,35.7333c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="47.01505 49.71309 49.74729 49.71309 49.74729 56.71199 51.39777 56.71199 51.39777 49.71309 54.13002 49.71309 54.13002 48.19003 47.01505 48.19003 47.01505 49.71309"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="60.25573 51.63145 56.5467 51.63145 56.5467 48.19003 54.90758 48.19003 54.90758 56.71199 56.5467 56.71199 56.5467 53.0847 60.25573 53.0847 60.25573 56.71199 61.89485 56.71199 61.89485 48.19003 60.25573 48.19003 60.25573 51.63145"
                              />
                              <path
                                d="M81.31175,52.55062c-.12373,.43305-.24973,.89845-.3814,1.41323-.09195-.28492-.18049-.56302-.26959-.8417l-1.61585-4.87395h-.86099l-1.41721,4.28652-.19638,.60786c-.08797,.27016-.17538,.54004-.26335,.81644-.1294-.4935-.26221-.96315-.38935-1.40699l-1.2038-4.36201h-1.77193l2.61533,8.54722,.03178,.10273h1.2231l1.41607-4.1889c.13451-.37629,.26165-.76649,.39275-1.17003l1.79577,5.35893h1.23445l2.64711-8.64995h-1.78328l-1.20323,4.36059Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M89.11064,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.11905,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M107.4645,48.19003h-2.54041v8.52196h2.54041c3.04668,0,4.86515-1.60592,4.86515-4.29589,0-2.72515-1.72766-4.22608-4.86515-4.22608Zm-.90129,1.51142h.77302c2.2799,0,3.29641,.83006,3.29641,2.69138,0,1.94192-1.01651,2.80773-3.29641,2.80773h-.77302v-5.49912Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.01356,55.03598l.06584,.11465c.69129,1.20806,1.66977,1.77051,3.07903,1.77051,1.66012,0,2.91217-1.10192,2.91217-2.5634,0-1.23587-.64418-1.98392-2.37525-2.75978-1.50234-.67937-1.65899-.93506-1.65899-1.35591,0-.50485,.42227-.8312,1.07553-.8312,.56416,0,.9677,.23071,1.3088,.74833l.17092,.243,1.27183-.89967-.06924-.11436c-.55962-.92825-1.48702-1.41891-2.6823-1.41891-1.61926,0-2.74984,.94414-2.74984,2.29608,0,1.19841,.67256,1.9649,2.32077,2.64484,1.44729,.61382,1.70212,.98217,1.70212,1.52902,0,.58658-.53237,1.02899-1.23842,1.02899-.73953,0-1.22196-.31244-1.6641-1.07837l-.1603-.27205-1.30856,.91822Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="69.0592 49.66655 69.0592 48.19003 63.7417 48.19003 63.7417 56.71199 69.0592 56.71199 69.0592 55.23548 65.38082 55.23548 65.38082 53.0847 68.4502 53.0847 68.4502 51.63145 65.38082 51.63145 65.38082 49.66655 69.0592 49.66655"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="93.02115 44.47604 93.02115 35.95408 98.33865 35.95408 98.33865 37.43059 94.66027 37.43059 94.66027 39.3955 97.72965 39.3955 97.72965 40.84874 94.66027 40.84874 94.66027 44.47604 93.02115 44.47604"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-16"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-11"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M47.41,28.38h3.32L41.31,51.79h-.73L33,32.83l-7.7,19h-.72L15.15,28.38h3.36l6.42,16.07L31.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M63.39,28.05a12.51,12.51,0,0,1,9,3.42A11.32,11.32,0,0,1,76,40a11.18,11.18,0,0,1-3.63,8.54A12.89,12.89,0,0,1,63.21,52a12.15,12.15,0,0,1-8.78-3.37,11.29,11.29,0,0,1-3.51-8.47,11.53,11.53,0,0,1,3.53-8.64A12.35,12.35,0,0,1,63.39,28.05Zm.13,3.17A9,9,0,0,0,57,33.72a8.52,8.52,0,0,0-2.58,6.39A8.35,8.35,0,0,0,57,46.38a9.59,9.59,0,0,0,13-.05A8.52,8.52,0,0,0,72.54,40a8.36,8.36,0,0,0-2.61-6.24A8.87,8.87,0,0,0,63.52,31.22Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M108.4,28.38h3.33l-9.42,23.41h-.73L94,32.83l-7.7,19h-.71l-9.4-23.41h3.37l6.42,16.07L92.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-17"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-12"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M101.88,49.54A5.29,5.29,0,0,0,101,47s-2.31-2.59-2.71-3a1.17,1.17,0,0,1-.09-1.44c.28-.23,1.17-.93,1-1.22s-.7-.32-1.86,0A2.09,2.09,0,0,1,95.78,41a4.74,4.74,0,0,0-1.92-4.38c-.65-.51-2.53-.71-4-.79a.56.56,0,0,1,.16-.1c-1.78-3.73-10.26-2.37-19.16-1S55.18,36,52.76,34.35a3.2,3.2,0,0,1-1.31-4s2-7,3.73-13.28-2.28-5.6-2.28-5.59c-3.78,0-5.73,3.07-5.78,2.74a2.34,2.34,0,0,0-2.42-2.74,4.52,4.52,0,0,0-3.5,1.58c.56-2-2.1-1.54-2-1.54-5.45,0-10.3.93-11.93,3.12s.56,4.71,1.4,4.76S30,19.06,30,18.5s-.47-.79-1.07-.79-1-.79-.94-.65c-1.39-2.47,3.5-4.06,3.59-4,5.69-1.17,5.27,1.3,5.27,1.3L32.25,30c-.54,1.86.51,1.86.51,1.86s.8.05,2,0,1.44-1.91,1.44-1.91,2.71-10.81,3.69-13.33,2.51-3.87,4-3.87.74,2,.74,2-4.05,14.68-4.38,15.89.19,1.17,1.73,1.12,1.63-.93,1.63-.93S46.05,22,46.84,18.32s3.31-5.36,4.75-5.46.89,1.87.89,1.87-3,11-4.43,16.45S52.9,36.91,57.28,37s12.26-.93,15.61-1.21,4.8.1,5.27,1.45a1.58,1.58,0,0,0,.22.43,36.32,36.32,0,0,1-.32,4.16c-.32,2.27.8,2.72,2.52,2.82a8.66,8.66,0,0,1,3.26.79,11.93,11.93,0,0,0,3.41.42c1.67.14,1.63-.79,1.63-.79l.36-1.5c.51,0,.69.19,1.36,1.08s2.24-.66,2.75-1,1,1.77,1,2.33.93.56,1.21.19a4.93,4.93,0,0,1,1.07-.84S97.92,47,98.9,48.61s.23,5.5.23,6.48.84.88.84.88a5,5,0,0,1,1.16,0c.84,0,.75-1.21.75-1.21S102,51,101.88,49.54Zm-17-4.94c-.56-.05-.33-.7-3-.7s-2.7-2-2.56-2.89c.09-.61.44-1.93.64-2.67a3,3,0,0,0,.57-.08,2.45,2.45,0,0,1,1.44.42c.24.19.84,0,1.59.1s1.81-.33,2.61,0,2,1.91,1.35,2.42a2.39,2.39,0,0,1-2.75-.65c-.42-.7-1-.75-1.31-.56a17,17,0,0,0-2.14,1.16c-.65.51,1.07.28,2-.14s.75-.09,1.54.75a6.17,6.17,0,0,0,1.73,1.06C86.06,43.7,85.31,44.64,84.87,44.6Zm8.29-6.06c-.42-.74-1.3-.23-1.91-.51A5.6,5.6,0,0,0,89,37.56c-.53,0-.31-.49.07-1,1.64.11,4.17.37,5,1A3,3,0,0,1,94.67,40h0A6,6,0,0,1,93.16,38.54Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M59.05,32.16a11.45,11.45,0,0,0,8.58-4.28c-.26,1.73-.07,3.47,1.77,3.76,2.12.35,4.25-.41,6.56-3.56.1,1.85.79,4,3.36,4.08.54,0,2.25.31,3.8-2.36.09,1.1.56,2.08,1.94,2.13,2.25.1,4.18-1.76,5.44-3.4-.11,1.45.06,3.31,1.59,3.39,2.52.14,4-1.25,4.15-2.23s-1.16-.56-1.44.14-1.84.93-1.44-.52S98,12.77,98,12.77s.61-1.17-.93-1.07-4.75-.42-4.1,1.07c0,0,1.63-.14,1.26,1.26s-2.9,10.76-3.37,12.53c-1.13,1.57-2.83,3.55-4.18,3.55-.09-.1-1.58.42-.75-2.52s2.33-7.36,2.33-7.36.8-1.49-.65-1.26A5.45,5.45,0,0,0,86,19.4a4.11,4.11,0,0,0-2.63-.85c-.19,0-5.41-.34-7.18,6.89a4.73,4.73,0,0,0-.14.86c-1,1.37-3.06,3.89-4.52,4-2,.14-.7-2.37-.51-3.49.1-.61,1.08-3.82,1.94-6.6.81.06,1.51.11,1.88.12,1.31.05.7.05,1.31-.84s0-.93,0-.93l-2.66,0c.48-1.54.84-2.67.84-2.67s.47-1.4-.56-1.4a2.31,2.31,0,0,0-2.28,1.16s-.43,1.24-1,2.9c-.84,0-1.51,0-1.77,0a1.2,1.2,0,0,0-1.16.93c-.18.31.64.33.64.33L70,20c-.66,2-1.39,4.19-1.8,5.59-5,6.57-10,5.87-10.3,2.51A9.31,9.31,0,0,1,58,25.81c3.6.42,7.63-1.48,7.8-4.42.19-3.17-3-2.79-3-2.84-3.12,0-7.27,2.38-8.29,7.83S59.05,32.2,59.05,32.16ZM78.81,27.5c.19-3.22,2.08-8,4.47-8.16,0,0,1.79-.49,1.41,2.69h0l-1.17,4.72a10,10,0,0,0-.32,1.42c-.69,1.18-1.71,2.54-2.81,2.54C80.16,30.62,78.62,30.71,78.81,27.5ZM60.17,20.74c.65-.56,3.45-2.42,3,1.07-.4,3-3.93,3-5,2.91A9.25,9.25,0,0,1,60.17,20.74Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M75,49.18s.79-1.49-.65-1.26a5.52,5.52,0,0,0-1.62.43,4.17,4.17,0,0,0-2.63-.85c-.18,0-5.4-.34-7.17,6.89,0-.23-1.45,6.58,3.17,6.72.53,0,2.24.31,3.79-2.36.1,1.1.57,2.08,1.94,2.13,2.61.11,4.78-2.39,6-4.14h0c1.82-1.8,2.83-6.27,2.88-5.75a8.67,8.67,0,0,0,2.38,4.42c.84,1,1.77,4.29-.28,4.38s-2.47-.28-3.22-1.91-1.68,1.17-2,1.26c.53,2.1,2.53,2.29,4.91,2.24a3.46,3.46,0,0,0,3.64-3.12,7,7,0,0,0-1.26-4.43,6.29,6.29,0,0,1-.93-4.2c.23-1.11.14-2.28-1.49-2.75s-1.78.94-1.82,1a20.73,20.73,0,0,1-3,7.67c-1.13,1.55-2.81,3.5-4.15,3.5-.09-.1-1.58.42-.74-2.52S75,49.18,75,49.18ZM67.19,59.66c-.23-.09-1.77,0-1.59-3.21s2.08-8,4.48-8.16c0,0,1.78-.48,1.4,2.69h0L70.31,55.7A9.9,9.9,0,0,0,70,57.13C69.31,58.3,68.28,59.66,67.19,59.66Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M96.75,62.36c-.37.56-10.86,5.17-25.21,1.63-5.55-1.37-9.71-2.33-13-2.9.2-.57.38-1.17.55-1.81,2.1-8.15,1.77-6.62,1.77-6.62s.37-1.35-.61-1.16a3.77,3.77,0,0,1-1.63.14c-.46-.1-.74.18-.88.65s-1.07,5.27-4,5.41c-2.55.12-3.41-5.24-2-9.81h0c8.07,0,11.7-2.54,12.12-5.2s-.93-3.91-5.87-3.5c-3.62.31-7.24,3.4-9.15,7.3a7.15,7.15,0,0,1-4-3c.3-.53.52-.93.64-1.12.68-1.06,3-2,1.54-3.51a2.2,2.2,0,0,0-3.07,0h0a2.85,2.85,0,0,0-1.64,2.44,6.78,6.78,0,0,0,1.13,3.17,24.2,24.2,0,0,1-1.77,2.59c-1.62-1.31-3.49-2.57-5.23-4l-.54-.47c2.23-1.41,5.3-3.66,5.9-4.89.84-1.72.09-4.43-4.2-4.33s-8.1,3.26-7.92,6.94A6.85,6.85,0,0,0,31.23,44c-8.87,4.62-5.74,8-5.74,8,4.34,4.43,10.12,1.45,12.91,0a5.39,5.39,0,0,0,1.08-.78c2.39,2.05,3.69,4.44,1.44,7.21-2.56,3.17-8.57.7-9,.33s-.51-.56-1.26-.14-.14.84-.23.88c4.66,3.27,14.17,2.29,15.38-3.77.71-3.54-1-5.92-3.45-8.06.57-.87,1.11-1.75,1.57-2.55a8.08,8.08,0,0,0,4.46,2.44A12.72,12.72,0,0,0,47.49,51c-.6,5.77,3.4,11,9.56,6.29-.09,0-.44,1.54-1.07,3.44a20.39,20.39,0,0,0-9.28.66c-5.41,1.77-3.92,7.36.65,7.87,4,.45,8.32-1.26,10.75-7.11,5,1.11,9.61,3.17,12.79,4.09,4.38,1.25,19,6.29,26.84-2.94,0,0,.66-.84.35-1.35S97.13,61.8,96.75,62.36ZM35.33,35.42c.74-.89,4.47-2.14,4.52,1.26,0,1.86-2.47,3.82-4.73,5.21C32.22,38.6,34.66,36.21,35.33,35.42ZM29.64,49.07A5.47,5.47,0,0,1,32,44.91a43.16,43.16,0,0,0,6.39,5.47l.11.08C34,54.3,29.73,51.54,29.64,49.07Zm15.12-9.19c.31.53.52,1.35.26,1.55a6,6,0,0,0-.64,1.23A2.48,2.48,0,0,1,44.76,39.88Zm14,.2C60,40,61.19,41,60,43.2c-1.06,2-3.8,3.71-8,3.7.14-.35.29-.7.46-1C54.9,41.06,57.47,40.13,58.72,40.08ZM52.25,67c-3,1.68-6.58,1.63-7-1.49,0,0,.19-4.28,7.14-4.15a25.82,25.82,0,0,1,3.26.3C54.85,63.86,53.72,66.2,52.25,67Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="flex md:w-[168vw] lg:w-[132vw] min-[1600px]:w-[120vw] min-[1601px]:w-[96vw]"
                  id="div-18"
                >
                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-19"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-13"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M16.50207,34.89088l6.87288,10.85497c.10911,.17232,.29886,.27677,.50282,.27677h12.59204c.469,0,.75371-.51724,.50282-.9135l-6.87288-10.85497c-.10911-.17232-.29886-.27677-.50282-.27677h-12.59204c-.469,0-.75371,.51724-.50282,.9135Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M34.43889,34.25415l-1.40019,2.21147,5.54823,8.76284c.23365,.36903,.77199,.36903,1.00564,0l6.5453-10.33759c.25089-.39625-.03382-.9135-.50282-.9135h-10.69334c-.20396,0-.39371,.10445-.50282,.27678Zm2.60316,6.05755l.80617-.39991,1.24153,.61584,1.24153-.61584,.80617,.39992-2.0477,3.23413-2.0477-3.23413h0Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M7.85296,46.02262h10.69334c.20396,0,.39371-.10445,.50282-.27677l1.40019-2.21147-5.54823-8.76284c-.23365-.36903-.77199-.36903-1.00564,0l-6.5453,10.33759c-.25089,.39625,.03382,.9135,.50282,.91349Zm8.593-6.33432l-.80619,.39991-1.24148-.61584-1.24153,.61584-.80619-.39991,2.0477-3.23413,2.04769,3.23413Zm-7.23215,4.95411l.01647,.05527h-.05146l.03498-.05527h.00001Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M51.02918,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M59.11241,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M66.35002,45.69276l-1.57004-11.35243c-.01004-.0726,.04636-.13734,.11965-.13734h1.74799c.06234,0,.11443,.04743,.12026,.10949l.71096,7.56825,.97854-7.57243c.00778-.06023,.05907-.10531,.1198-.10531h1.50699c.06081,0,.11214,.0452,.11982,.10552l.95935,7.52736,.74303-7.52396c.0061-.06181,.05809-.10892,.12021-.10892h1.75488c.07337,0,.1298,.06488,.11963,.13754l-1.58942,11.35243c-.00835,.05966-.05939,.10404-.11963,.10404h-1.79186c-.06077,0-.11208-.04515-.11981-.10543l-.95928-7.48216-.94016,7.48186c-.00759,.06041-.05896,.10573-.11985,.10573h-1.79141c-.06032,0-.11139-.0445-.11964-.10423Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M78.4409,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.1029c.06671,0,.12079,.05408,.12079,.12079v9.86274h2.18543c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.40913c-.06671,0-.12079-.05408-.12079-.12079h.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M84.36611,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M90.42017,42.17055v-4.08383c0-2.73941,1.14036-4.10934,3.4202-4.10934,.48112,0,.90947,.06333,1.28505,.18999,.37602,.12666,.69046,.30169,.94378,.5251s.46177,.49827,.62493,.82459,.28102,.68035,.35403,1.06252,.10951,.80305,.10951,1.26262v.11215c0,.06671-.05408,.12079-.12079,.12079h-1.99999c-.06671,0-.12079-.05408-.12079-.12079v-.24101c0-.20186-.00528-.37909-.01583-.53126-.01099-.1526-.03782-.32236-.08048-.50883-.0431-.18691-.10115-.34039-.17415-.46089-.073-.12006-.17811-.22077-.31532-.30257-.13765-.08136-.30081-.12226-.48992-.12226-.71685,0-1.07527,.57084-1.07527,1.7134v5.00474c0,1.13772,.35842,1.7068,1.07527,1.7068,.71289,0,1.06955-.59019,1.06955-1.77145v-1.41546h-1.20604c-.06671,0-.12079-.05408-.12079-.12079v-1.43927c0-.06671,.05408-.12079,.12079-.12079h3.42973c.06671,0,.12079,.05408,.12079,.12079v6.21072c0,.06671-.05408,.12079-.12079,.12079h-1.40518c-.05075,0-.09609-.03172-.11348-.0794l-.26701-.732c-.1979,.30917-.47892,.5594-.84394,.75027s-.7406,.28674-1.12717,.28674c-.41648,0-.79557-.07652-1.13684-.22869-.34127-.1526-.62273-.35447-.84394-.60558s-.4068-.54621-.55721-.88572c-.15041-.33907-.25771-.68606-.32192-1.04009-.06421-.35447-.09675-.71817-.09675-1.09198h-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.07028,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h4.59604c.06671,0,.12079,.05408,.12079,.12079v1.36846c0,.06671-.05408,.12079-.12079,.12079h-2.37234v3.55196h1.64406c.06671,0,.12079,.05408,.12079,.12079v1.40716c0,.06671-.05408,.12079-.12079,.12079h-1.64406v3.17277h2.37234c.06671,0,.12079,.05408,.12079,.12079v1.3689c0,.06671-.05408,.12079-.12079,.12079h-4.59604c-.06671,0-.12079-.05408-.12079-.12079v.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M105.27299,45.67622v-11.35903c0-.06671,.05408-.12079,.12079-.12079h1.48633c.04866,0,.09257,.0292,.11139,.07408l2.51352,5.99362v-5.9469c0-.06671,.05408-.12079,.12079-.12079h1.70358c.06671,0,.12079,.05408,.12079,.12079v11.35903c0,.06671-.05408,.12079-.12079,.12079h-1.42024c-.04961,0-.09417-.03033-.11237-.07647l-2.50783-6.35844v6.31412c0,.06671-.05408,.12079-.12079,.12079h-1.77438c-.06671,0-.12079-.05408-.12079-.12079v-.00002Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.35577,45.67622v-11.35243c0-.06671,.05408-.12079,.12079-.12079h2.3011c.77314,0,1.40951,.06993,1.90998,.20934,.50003,.13941,.8932,.36942,1.17862,.68914s.48332,.70321,.59239,1.14959c.10951,.44682,.16448,1.0159,.16448,1.7068v3.80061c0,.41208-.01275,.77182-.0387,1.07879-.02551,.30697-.07388,.60778-.14469,.902-.07124,.29378-.16756,.54313-.29026,.74675-.12226,.20406-.28014,.39405-.47321,.5704-.19307,.17591-.42615,.31532-.69882,.41867-.27267,.10291-.59283,.18251-.95961,.23836-.36722,.05585-.78941,.08356-1.2657,.08356h-2.27559c-.06671,0-.12079-.05408-.12078-.12079Zm2.43464-1.5218c.22341,0,.39976-.00308,.52818-.00968,.12886-.00616,.25771-.02243,.38657-.04838,.12886-.02551,.22341-.06113,.28366-.10599,.05981-.0453,.11566-.11083,.16712-.19658,.05189-.08576,.08488-.18779,.09983-.30609,.01539-.11786,.02287-.26475,.02287-.4411v-6.24141c0-.38217-.1139-.63549-.34171-.75995-.22737-.1249-.60954-.18911-1.14652-.1935v8.30268Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-20"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-14"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M40.70316,39.66053l3.42119-.55495,.00027,9.79219,6.34647-1.02945,.00009,3.0923-9.76765,1.5844-.00036-12.88449Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M50.81393,50.90501l5.01177-13.6975,3.2844-.53276,5.01249,12.07147-3.47256,.56328-.87254-2.17764-4.75552,.77139-.87235,2.46067-3.33571,.54108Zm7.93715-6.35534l-1.35152-3.37123-1.35125,3.80964,2.70277-.43841Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M71.84167,42.18179l-.00021-7.57609,3.42125-.55496,.00023,8.12582c.00008,2.93764-1.47098,5.1691-5.50808,5.82395-3.79757,.616-5.50828-1.09934-5.50836-4.03699l-.00023-8.12582,3.42131-.55497,.00021,7.57609c.00005,1.71796,1.00932,2.05239,2.08698,1.87758,1.07772-.17482,2.08696-.83667,2.08691-2.55463Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M81.6919,33.01179l4.37942,7.41548-.00023-8.12582,3.25017-.52721,.00036,12.88449-4.32788,.70202-4.44782-7.36995,.00023,8.09139-3.25023,.52722-.00036-12.88449,4.39634-.71313Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M100.25328,37.40528l3.23312,.62663c-.7184,2.89954-2.89087,4.96989-6.24366,5.51375-3.84894,.62433-6.50047-1.57404-6.50058-5.55957-.00011-3.96849,2.65127-7.04408,6.50021-7.66841,3.4041-.55218,5.57661,.88201,6.27808,3.44818l-3.33567,1.77805c-.35928-1.47072-1.40279-2.21196-2.94231-1.96224-1.74488,.28304-2.92518,1.72862-2.92512,3.8245,.00006,2.11304,1.18043,3.15843,2.92531,2.87539,1.57374-.25528,2.61721-1.33505,3.01063-2.87627Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M112.98105,35.75308l-4.78969,.77693,.00014,5.06784-3.42131,.55497-.00036-12.88449,3.42131-.55497,.00013,4.72435,4.78969-.77693-.00013-4.72435,3.42131-.55497,.00036,12.88449-3.42131,.55497-.00014-5.06784Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 20.57223 40.70384 32.85123 40.70396 36.28701 116.40252 24.00801 116.40252 20.57223"
                            />
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M23.49565,42.11396c.00011,3.98553-2.7539,7.06073-6.50015,7.6684-3.76334,.61045-6.51756-1.57127-6.51767-5.5568-.00011-3.96849,2.75396-7.06074,6.5173-7.67118,3.74626-.60768,6.50041,1.59109,6.50052,5.55958Zm-9.4255,1.5289c.00006,2.11304,1.18043,3.15843,2.92525,2.8754,1.72774-.28025,2.90804-1.70856,2.90798-3.8216-.00006-2.09588-1.18043-3.15855-2.90817-2.87829-1.74482,.28303-2.92512,1.72861-2.92506,3.82449Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M33.1617,46.98825l-3.66086-4.40541-1.16322,1.4085,.00011,3.77941-3.42119,.55495-.00036-12.88449,3.42119-.55495,.00013,4.7415,4.29358-5.43798,4.34497-.70479-5.20014,6.30658,5.5426,6.52241-4.15681,.67427Z"
                                fill="rgb(255, 255, 255)"
                              />
                            </g>
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="116.40252 43.71299 40.70384 55.99205 40.70396 59.42777 116.40252 47.14883 116.40252 43.71299"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 26.55783 10.47748 30.91171 10.47754 34.34749 37.31848 29.99361 37.31848 26.55783"
                            />
                            <polygon
                              fill="rgb(255, 255, 255)"
                              points="37.31848 49.74989 10.47814 54.10365 10.47826 57.53943 37.31848 53.18573 37.31848 49.74989"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-21"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-15"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <rect
                                className="h-20 w-32"
                                fill="none"
                                height="80"
                              />
                              <g fill="rgb(255, 255, 255)">
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M77.86354,24.84157l-5.53275-5.53275c-.05552-.05552-.13071-.08676-.20937-.08676h-2.85255v-2.85255c0-.07866-.03123-.15385-.08676-.20937l-5.53275-5.53275c-.11568-.11568-.30307-.11568-.41874,0l-5.53275,5.53275c-.05552,.05552-.08676,.13071-.08676,.20937v2.85255h-2.85255c-.07866,0-.15385,.03123-.20937,.08676l-5.53275,5.53275c-.11568,.11568-.11568,.30307,0,.41874l5.53275,5.53275c.05552,.05552,.13071,.08676,.20937,.08676h2.85255v2.85255c0,.07866,.03123,.15385,.08676,.20937l5.53275,5.53275c.05784,.05784,.13303,.08676,.20937,.08676s.15153-.02892,.20937-.08676l5.53275-5.53275c.05552-.05552,.08676-.13071,.08676-.20937v-2.85255h2.85255c.07866,0,.15385-.03123,.20937-.08676l5.53275-5.53275c.11568-.11568,.11568-.30307,0-.41874Zm-20.25242,3.60213h-1.96648l-3.3916-3.39275,3.3916-3.39275h1.96648v6.78551Zm9.22163,4.40202l-3.39275,3.39275-3.39275-3.39275v-5.74317l6.78551-1.66708v7.41026Zm0-9.84638l-6.78551,1.66708v-7.41026l3.39275-3.39275,3.39275,3.39275v5.74317Zm4.4026,5.44436h-1.96648v-6.78551h1.96648l3.3916,3.39275-3.3916,3.39275Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <g fill="rgb(255, 255, 255)">
                                    <path
                                      d="M24.02019,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M40.28546,56.41173c0,2.6863-1.74766,4.3684-4.6917,4.3684-2.92915,0-4.67532-1.6821-4.67532-4.3684v-7.10733c0-.21203,.17188-.38391,.38391-.38391h1.25399c.21203,0,.38391,.17188,.38391,.38391v6.92928c0,1.69959,1.00604,2.68948,2.70348,2.66961,1.4482-.01695,2.60355-1.22132,2.60355-2.66961v-6.92928c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v7.10733Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M49.35003,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06494c.21252,0,.38479,.17228,.38479,.38479v.94604c0,.21252-.17228,.38479-.38479,.38479h-3.01368Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M55.8922,59.85581v-1.12881c0-.27421,.27844-.46008,.53096-.35319,.74503,.31536,1.64457,.5684,2.57549,.59459,.42015,0,.82541-.03278,1.1651-.12962,.82541-.19443,1.32601-.61459,1.32601-1.24556,0-.92225-.66301-1.42435-2.44344-2.05532-2.13503-.75985-3.26736-1.66646-3.26736-3.55938,0-2.03819,1.69849-3.2681,4.06148-3.2681,1.03174,0,2.02716,.22899,2.72455,.48394,.15221,.05564,.25228,.19977,.25228,.36183v1.04283c0,.27333-.27481,.45596-.52896,.35537-.64989-.25721-1.49552-.4479-2.30335-.4479-1.32601,0-2.21549,.54977-2.21549,1.43999,0,.82541,.61384,1.37518,2.39427,2.02254,2.13503,.79263,3.30014,1.69849,3.30014,3.54299,0,2.03893-1.55248,3.2681-4.15832,3.2681-1.21006,0-2.35474-.2627-3.16124-.56331-.15148-.05646-.25213-.19935-.25213-.36101Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M78.52978,49.4345v10.75164c0,.21203-.17188,.38391-.38391,.38391h-1.17353c-.21203,0-.38391-.17188-.38391-.38391v-7.21595l-.46932,.45293c-.87671,1.03238-1.76595,2.0528-2.65676,3.07172-.20294,.23212-.56435,.23126-.76627-.00175l-2.66025-3.06997-.45293-.45293v7.21595c0,.21203-.17188,.38391-.38391,.38391h-1.18992c-.21203,0-.38391-.17188-.38391-.38391v-10.75191c0-.46905,.57771-.69184,.89265-.34425l4.5604,5.239,4.55886-5.23868c.31491-.34766,.8927-.12488,.8927,.3442Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M83.59992,60.18614v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M94.24747,50.63612v9.55002c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-9.55002h-3.01307c-.21203,0-.38391-.17188-.38391-.38391v-.94781c0-.21203,.17188-.38391,.38391-.38391h8.06582c.21203,0,.38391,.17188,.38391,.38391v.94781c0,.21203-.17188,.38391-.38391,.38391h-3.01456Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                    <path
                                      d="M108.13257,60.18614v-5.31129l-5.27426,1.29482v4.01648c0,.21203-.17188,.38391-.38391,.38391h-1.27038c-.21203,0-.38391-.17188-.38391-.38391v-10.88174c0-.21203,.17188-.38391,.38391-.38391h1.27038c.21203,0,.38391,.17188,.38391,.38391v5.0497l5.27426-1.29482v-3.75488c0-.21203,.17188-.38391,.38391-.38391h1.27187c.21203,0,.38391,.17188,.38391,.38391v10.88174c0,.21203-.17188,.38391-.38391,.38391h-1.27187c-.21203,0-.38391-.17188-.38391-.38391Z"
                                      fill="rgb(255, 255, 255)"
                                    />
                                  </g>
                                </g>
                                <g fill="rgb(255, 255, 255)">
                                  <path
                                    d="M36.50039,66.05403c-.26609-.13593-.68594-.30755-1.21811-.30755-.91634,0-1.53117,.66233-1.53117,1.51962s.61483,1.51936,1.51359,1.51936c.5676,0,.999-.16558,1.26509-.30151v.69172c-.17739,.1005-.66206,.29574-1.29474,.29574-1.28293,0-2.23496-.94599-2.23496-2.20531,0-1.25354,.95203-2.20531,2.2528-2.20531,.61483,0,1.07011,.20101,1.2475,.30151v.69172Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M40.42527,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M47.67911,68.17064c0,.7686-.61509,1.22389-1.51962,1.22389h-1.48394v-4.25684h1.34801c.86911,0,1.48997,.4196,1.48997,1.18243,0,.38417-.22489,.69749-.53821,.83945,.39624,.13593,.70379,.53821,.70379,1.01107Zm-1.64374-1.22389c.12412,0,.24824-.00577,.36055-.01784,.21885-.07085,.36082-.26582,.36082-.55552,0-.39624-.26609-.63871-.68594-.63871h-.67991v1.21208h.64448Zm-.64448,1.85052h.79826c.42563,0,.72714-.25401,.72714-.66206,0-.41986-.27186-.65629-.64448-.65629h-.88091v1.31835Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M50.15549,69.39452v-4.25684h.74499v4.25684h-.74499Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M57.06058,69.4596l-2.48923-2.54828c-.06508-.05904-.13593-.13016-.20678-.1892v2.6724h-.73318v-4.32192h.02362l2.4832,2.54224,.20704,.20101v-2.67817h.73291v4.32192h-.01758Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M63.46814,66.94098l-.16558-.16558v2.61913h-.71533v-4.32192h.01181l1.98068,2.19927,1.98068-2.19927h.01181v4.32192h-.70956v-2.61913l-.17135,.16558c-.36659,.4314-.73921,.8573-1.11157,1.28293l-1.11157-1.28293Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M70.7986,65.07261h.02362l2.01611,4.32192h-.78041l-.3784-.84549h-1.73821l-.3784,.84549h-.78067l2.01637-4.32192Zm.63845,2.92064c-.24247-.54398-.44348-1.02288-.62087-1.50755-.18316,.44321-.40201,.98719-.63267,1.50755h1.25354Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M75.79386,67.27791l1.83872-2.14023h.89272l-1.53721,1.74399,1.56082,2.51285h-.84549l-1.21785-2.01611-.69172,.76257v1.25354h-.74499v-4.25684h.74499v2.14023Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M80.78913,69.39452v-4.25684h2.67817v.62664h-1.93318v1.17062h1.63771v.60906h-1.63771v1.22389h2.02188v.62664h-2.76687Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M87.42787,65.13769c.96357,0,1.57263,.48467,1.57263,1.35378,0,.62664-.3784,1.04072-.83945,1.20027l.92815,1.70279h-.79826l-.81584-1.57867h-.75076v1.57867h-.73318v-4.25684h1.4367Zm-.70352,.62664v1.44851h.74472c.47916,0,.78645-.25428,.78645-.72137,0-.47287-.31935-.72714-.82187-.72714h-.7093Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                  <path
                                    d="M91.32888,69.22894v-.72714c.30151,.15377,.70956,.29548,1.13519,.30728,.15377,0,.30151-.01181,.42589-.04723,.30151-.07085,.48467-.22462,.48467-.45528,0-.33694-.24247-.5201-.89272-.75076-.78041-.27789-1.19423-.60906-1.19423-1.30077,0-.74499,.6206-1.19423,1.48394-1.19423,.42563,0,.83368,.10628,1.08796,.21282v.69749c-.24247-.13593-.65052-.25401-1.03469-.25401-.48494,0-.81006,.20101-.81006,.52613,0,.30151,.22462,.50252,.87514,.73895,.78041,.2897,1.20604,.62087,1.20604,1.295,0,.74499-.5676,1.19423-1.51962,1.19423-.49071,0-.95177-.11835-1.2475-.24247Z"
                                    fill="rgb(255, 255, 255)"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-22"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      height="80"
                      id="svg-16"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="rgb(255, 255, 255)" />
                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect className="h-20 w-32" fill="none" height="80" />
                          <g fill="rgb(255, 255, 255)">
                            <g fill="rgb(255, 255, 255)">
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="41.49239 42.33772 41.49239 23.06723 34.18556 23.06723 27.53451 32.64391 41.49239 42.33772"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="7.8094 56.75021 16.32958 56.75021 7.8094 48.23003 7.8094 56.75021"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="12.80523 40.89738 28.65807 56.75021 41.49239 56.75021 41.49239 51.09197 22.05151 31.6511 12.80523 40.89738"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="20.67291 23.06723 7.8094 23.06723 7.8094 37.89876 24.03272 26.42703 20.67291 23.06723"
                              />
                            </g>
                            <g fill="rgb(255, 255, 255)">
                              <path
                                d="M52.8513,39.66878c0,.64645,0,1.15017,.02384,1.67687-.32635-.41063-.63681-.78693-.93875-1.15329l-3.59324-4.23828h-1.3281v8.52196h1.6272v-3.94712c0-.61864-.00624-1.13967-.03405-1.68481,.50343,.61751,.89959,1.09256,1.29007,1.54718l3.62503,4.21274h.95578v-8.64995h-1.62777v3.7147Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="61.64342 37.43059 61.64342 35.95408 56.32592 35.95408 56.32592 44.47604 61.64342 44.47604 61.64342 42.99952 57.96504 42.99952 57.96504 40.84874 61.03442 40.84874 61.03442 39.3955 57.96504 39.3955 57.96504 37.43059 61.64342 37.43059"
                              />
                              <path
                                d="M69.64962,38.96944l-.14545-.25161c-.55791-.97337-1.31958-1.42685-2.39682-1.42685-1.58634,0-2.73792,1.22963-2.73792,2.92409,0,1.66693,1.18677,2.92409,2.76119,2.92409,1.14534,0,1.87239-.41971,2.43087-1.40302l.14232-.2623,.21014,.13176,1.13172,.74975-.06924,.11862c-.87348,1.49581-2.14652,2.22286-3.89235,2.22286-2.58355,0-4.45878-1.88488-4.45878-4.48176,0-2.55489,1.91155-4.48176,4.44686-4.48176,1.76285,0,3.06541,.75713,3.87135,2.25039l.06413,.11834-1.35803,.86742Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M79.15558,35.95408h-2.01428l-1.99612,2.34091c-.47392,.5511-.91378,1.07553-1.40131,1.66324l.00738-.46767c.01078-.62914,.02157-1.26794,.02157-1.87977v-1.65672h-1.63912v8.52196h1.63912v-2.38008l1.07099-1.19217,2.4269,3.57224h1.99271l-3.32478-4.83167,3.21695-3.6903Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M87.21611,35.7333c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="47.01505 49.71309 49.74729 49.71309 49.74729 56.71199 51.39777 56.71199 51.39777 49.71309 54.13002 49.71309 54.13002 48.19003 47.01505 48.19003 47.01505 49.71309"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="60.25573 51.63145 56.5467 51.63145 56.5467 48.19003 54.90758 48.19003 54.90758 56.71199 56.5467 56.71199 56.5467 53.0847 60.25573 53.0847 60.25573 56.71199 61.89485 56.71199 61.89485 48.19003 60.25573 48.19003 60.25573 51.63145"
                              />
                              <path
                                d="M81.31175,52.55062c-.12373,.43305-.24973,.89845-.3814,1.41323-.09195-.28492-.18049-.56302-.26959-.8417l-1.61585-4.87395h-.86099l-1.41721,4.28652-.19638,.60786c-.08797,.27016-.17538,.54004-.26335,.81644-.1294-.4935-.26221-.96315-.38935-1.40699l-1.2038-4.36201h-1.77193l2.61533,8.54722,.03178,.10273h1.2231l1.41607-4.1889c.13451-.37629,.26165-.76649,.39275-1.17003l1.79577,5.35893h1.23445l2.64711-8.64995h-1.78328l-1.20323,4.36059Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M89.11064,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M99.11905,47.96925c-2.65109,0-4.57513,1.88488-4.57513,4.48176,0,2.55489,1.96661,4.48176,4.57513,4.48176,2.60171,0,4.56321-1.92688,4.56321-4.48176,0-2.59689-1.91893-4.48176-4.56321-4.48176Zm0,7.40585c-1.63401,0-2.86619-1.25715-2.86619-2.92409,0-1.70099,1.2055-2.93572,2.86619-2.93572,1.65388,0,2.85428,1.23473,2.85428,2.93572,0,1.66693-1.22707,2.92409-2.85428,2.92409Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M107.4645,48.19003h-2.54041v8.52196h2.54041c3.04668,0,4.86515-1.60592,4.86515-4.29589,0-2.72515-1.72766-4.22608-4.86515-4.22608Zm-.90129,1.51142h.77302c2.2799,0,3.29641,.83006,3.29641,2.69138,0,1.94192-1.01651,2.80773-3.29641,2.80773h-.77302v-5.49912Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <path
                                d="M113.01356,55.03598l.06584,.11465c.69129,1.20806,1.66977,1.77051,3.07903,1.77051,1.66012,0,2.91217-1.10192,2.91217-2.5634,0-1.23587-.64418-1.98392-2.37525-2.75978-1.50234-.67937-1.65899-.93506-1.65899-1.35591,0-.50485,.42227-.8312,1.07553-.8312,.56416,0,.9677,.23071,1.3088,.74833l.17092,.243,1.27183-.89967-.06924-.11436c-.55962-.92825-1.48702-1.41891-2.6823-1.41891-1.61926,0-2.74984,.94414-2.74984,2.29608,0,1.19841,.67256,1.9649,2.32077,2.64484,1.44729,.61382,1.70212,.98217,1.70212,1.52902,0,.58658-.53237,1.02899-1.23842,1.02899-.73953,0-1.22196-.31244-1.6641-1.07837l-.1603-.27205-1.30856,.91822Z"
                                fill="rgb(255, 255, 255)"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="69.0592 49.66655 69.0592 48.19003 63.7417 48.19003 63.7417 56.71199 69.0592 56.71199 69.0592 55.23548 65.38082 55.23548 65.38082 53.0847 68.4502 53.0847 68.4502 51.63145 65.38082 51.63145 65.38082 49.66655 69.0592 49.66655"
                              />
                              <polygon
                                fill="rgb(255, 255, 255)"
                                points="93.02115 44.47604 93.02115 35.95408 98.33865 35.95408 98.33865 37.43059 94.66027 37.43059 94.66027 39.3955 97.72965 39.3955 97.72965 40.84874 94.66027 40.84874 94.66027 44.47604 93.02115 44.47604"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {
                      "                                                                 "
                    }
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-23"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-17"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M47.41,28.38h3.32L41.31,51.79h-.73L33,32.83l-7.7,19h-.72L15.15,28.38h3.36l6.42,16.07L31.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M63.39,28.05a12.51,12.51,0,0,1,9,3.42A11.32,11.32,0,0,1,76,40a11.18,11.18,0,0,1-3.63,8.54A12.89,12.89,0,0,1,63.21,52a12.15,12.15,0,0,1-8.78-3.37,11.29,11.29,0,0,1-3.51-8.47,11.53,11.53,0,0,1,3.53-8.64A12.35,12.35,0,0,1,63.39,28.05Zm.13,3.17A9,9,0,0,0,57,33.72a8.52,8.52,0,0,0-2.58,6.39A8.35,8.35,0,0,0,57,46.38a9.59,9.59,0,0,0,13-.05A8.52,8.52,0,0,0,72.54,40a8.36,8.36,0,0,0-2.61-6.24A8.87,8.87,0,0,0,63.52,31.22Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M108.4,28.38h3.33l-9.42,23.41h-.73L94,32.83l-7.7,19h-.71l-9.4-23.41h3.37l6.42,16.07L92.4,28.38h3.15l6.5,16.07Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div
                    className="flex items-center justify-center px-8 md:w-96 lg:w-96 min-[1600px]:w-96 min-[1601px]:w-72"
                    id="div-24"
                  >
                    <svg
                      className="h-auto w-full md:max-h-[6.88rem] md:max-w-[10.63rem] lg:max-h-[6.25rem] lg:max-w-[8.75rem] min-[1600px]:max-h-[6.25rem] min-[1600px]:max-w-[8.75rem] min-[1601px]:max-h-[8.13rem] min-[1601px]:max-w-[11.25rem]"
                      fill="rgb(0, 0, 0)"
                      id="svg-18"
                      viewBox="0 0 126.88 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs fill="rgb(255, 255, 255)"></defs>

                      <g fill="rgb(255, 255, 255)">
                        <g fill="rgb(255, 255, 255)">
                          <rect
                            className="h-20 w-32 opacity-20"
                            fill="none"
                            height="80"
                          />

                          <g fill="rgb(255, 255, 255)">
                            <path
                              d="M101.88,49.54A5.29,5.29,0,0,0,101,47s-2.31-2.59-2.71-3a1.17,1.17,0,0,1-.09-1.44c.28-.23,1.17-.93,1-1.22s-.7-.32-1.86,0A2.09,2.09,0,0,1,95.78,41a4.74,4.74,0,0,0-1.92-4.38c-.65-.51-2.53-.71-4-.79a.56.56,0,0,1,.16-.1c-1.78-3.73-10.26-2.37-19.16-1S55.18,36,52.76,34.35a3.2,3.2,0,0,1-1.31-4s2-7,3.73-13.28-2.28-5.6-2.28-5.59c-3.78,0-5.73,3.07-5.78,2.74a2.34,2.34,0,0,0-2.42-2.74,4.52,4.52,0,0,0-3.5,1.58c.56-2-2.1-1.54-2-1.54-5.45,0-10.3.93-11.93,3.12s.56,4.71,1.4,4.76S30,19.06,30,18.5s-.47-.79-1.07-.79-1-.79-.94-.65c-1.39-2.47,3.5-4.06,3.59-4,5.69-1.17,5.27,1.3,5.27,1.3L32.25,30c-.54,1.86.51,1.86.51,1.86s.8.05,2,0,1.44-1.91,1.44-1.91,2.71-10.81,3.69-13.33,2.51-3.87,4-3.87.74,2,.74,2-4.05,14.68-4.38,15.89.19,1.17,1.73,1.12,1.63-.93,1.63-.93S46.05,22,46.84,18.32s3.31-5.36,4.75-5.46.89,1.87.89,1.87-3,11-4.43,16.45S52.9,36.91,57.28,37s12.26-.93,15.61-1.21,4.8.1,5.27,1.45a1.58,1.58,0,0,0,.22.43,36.32,36.32,0,0,1-.32,4.16c-.32,2.27.8,2.72,2.52,2.82a8.66,8.66,0,0,1,3.26.79,11.93,11.93,0,0,0,3.41.42c1.67.14,1.63-.79,1.63-.79l.36-1.5c.51,0,.69.19,1.36,1.08s2.24-.66,2.75-1,1,1.77,1,2.33.93.56,1.21.19a4.93,4.93,0,0,1,1.07-.84S97.92,47,98.9,48.61s.23,5.5.23,6.48.84.88.84.88a5,5,0,0,1,1.16,0c.84,0,.75-1.21.75-1.21S102,51,101.88,49.54Zm-17-4.94c-.56-.05-.33-.7-3-.7s-2.7-2-2.56-2.89c.09-.61.44-1.93.64-2.67a3,3,0,0,0,.57-.08,2.45,2.45,0,0,1,1.44.42c.24.19.84,0,1.59.1s1.81-.33,2.61,0,2,1.91,1.35,2.42a2.39,2.39,0,0,1-2.75-.65c-.42-.7-1-.75-1.31-.56a17,17,0,0,0-2.14,1.16c-.65.51,1.07.28,2-.14s.75-.09,1.54.75a6.17,6.17,0,0,0,1.73,1.06C86.06,43.7,85.31,44.64,84.87,44.6Zm8.29-6.06c-.42-.74-1.3-.23-1.91-.51A5.6,5.6,0,0,0,89,37.56c-.53,0-.31-.49.07-1,1.64.11,4.17.37,5,1A3,3,0,0,1,94.67,40h0A6,6,0,0,1,93.16,38.54Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M59.05,32.16a11.45,11.45,0,0,0,8.58-4.28c-.26,1.73-.07,3.47,1.77,3.76,2.12.35,4.25-.41,6.56-3.56.1,1.85.79,4,3.36,4.08.54,0,2.25.31,3.8-2.36.09,1.1.56,2.08,1.94,2.13,2.25.1,4.18-1.76,5.44-3.4-.11,1.45.06,3.31,1.59,3.39,2.52.14,4-1.25,4.15-2.23s-1.16-.56-1.44.14-1.84.93-1.44-.52S98,12.77,98,12.77s.61-1.17-.93-1.07-4.75-.42-4.1,1.07c0,0,1.63-.14,1.26,1.26s-2.9,10.76-3.37,12.53c-1.13,1.57-2.83,3.55-4.18,3.55-.09-.1-1.58.42-.75-2.52s2.33-7.36,2.33-7.36.8-1.49-.65-1.26A5.45,5.45,0,0,0,86,19.4a4.11,4.11,0,0,0-2.63-.85c-.19,0-5.41-.34-7.18,6.89a4.73,4.73,0,0,0-.14.86c-1,1.37-3.06,3.89-4.52,4-2,.14-.7-2.37-.51-3.49.1-.61,1.08-3.82,1.94-6.6.81.06,1.51.11,1.88.12,1.31.05.7.05,1.31-.84s0-.93,0-.93l-2.66,0c.48-1.54.84-2.67.84-2.67s.47-1.4-.56-1.4a2.31,2.31,0,0,0-2.28,1.16s-.43,1.24-1,2.9c-.84,0-1.51,0-1.77,0a1.2,1.2,0,0,0-1.16.93c-.18.31.64.33.64.33L70,20c-.66,2-1.39,4.19-1.8,5.59-5,6.57-10,5.87-10.3,2.51A9.31,9.31,0,0,1,58,25.81c3.6.42,7.63-1.48,7.8-4.42.19-3.17-3-2.79-3-2.84-3.12,0-7.27,2.38-8.29,7.83S59.05,32.2,59.05,32.16ZM78.81,27.5c.19-3.22,2.08-8,4.47-8.16,0,0,1.79-.49,1.41,2.69h0l-1.17,4.72a10,10,0,0,0-.32,1.42c-.69,1.18-1.71,2.54-2.81,2.54C80.16,30.62,78.62,30.71,78.81,27.5ZM60.17,20.74c.65-.56,3.45-2.42,3,1.07-.4,3-3.93,3-5,2.91A9.25,9.25,0,0,1,60.17,20.74Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M75,49.18s.79-1.49-.65-1.26a5.52,5.52,0,0,0-1.62.43,4.17,4.17,0,0,0-2.63-.85c-.18,0-5.4-.34-7.17,6.89,0-.23-1.45,6.58,3.17,6.72.53,0,2.24.31,3.79-2.36.1,1.1.57,2.08,1.94,2.13,2.61.11,4.78-2.39,6-4.14h0c1.82-1.8,2.83-6.27,2.88-5.75a8.67,8.67,0,0,0,2.38,4.42c.84,1,1.77,4.29-.28,4.38s-2.47-.28-3.22-1.91-1.68,1.17-2,1.26c.53,2.1,2.53,2.29,4.91,2.24a3.46,3.46,0,0,0,3.64-3.12,7,7,0,0,0-1.26-4.43,6.29,6.29,0,0,1-.93-4.2c.23-1.11.14-2.28-1.49-2.75s-1.78.94-1.82,1a20.73,20.73,0,0,1-3,7.67c-1.13,1.55-2.81,3.5-4.15,3.5-.09-.1-1.58.42-.74-2.52S75,49.18,75,49.18ZM67.19,59.66c-.23-.09-1.77,0-1.59-3.21s2.08-8,4.48-8.16c0,0,1.78-.48,1.4,2.69h0L70.31,55.7A9.9,9.9,0,0,0,70,57.13C69.31,58.3,68.28,59.66,67.19,59.66Z"
                              fill="rgb(255, 255, 255)"
                            />

                            <path
                              d="M96.75,62.36c-.37.56-10.86,5.17-25.21,1.63-5.55-1.37-9.71-2.33-13-2.9.2-.57.38-1.17.55-1.81,2.1-8.15,1.77-6.62,1.77-6.62s.37-1.35-.61-1.16a3.77,3.77,0,0,1-1.63.14c-.46-.1-.74.18-.88.65s-1.07,5.27-4,5.41c-2.55.12-3.41-5.24-2-9.81h0c8.07,0,11.7-2.54,12.12-5.2s-.93-3.91-5.87-3.5c-3.62.31-7.24,3.4-9.15,7.3a7.15,7.15,0,0,1-4-3c.3-.53.52-.93.64-1.12.68-1.06,3-2,1.54-3.51a2.2,2.2,0,0,0-3.07,0h0a2.85,2.85,0,0,0-1.64,2.44,6.78,6.78,0,0,0,1.13,3.17,24.2,24.2,0,0,1-1.77,2.59c-1.62-1.31-3.49-2.57-5.23-4l-.54-.47c2.23-1.41,5.3-3.66,5.9-4.89.84-1.72.09-4.43-4.2-4.33s-8.1,3.26-7.92,6.94A6.85,6.85,0,0,0,31.23,44c-8.87,4.62-5.74,8-5.74,8,4.34,4.43,10.12,1.45,12.91,0a5.39,5.39,0,0,0,1.08-.78c2.39,2.05,3.69,4.44,1.44,7.21-2.56,3.17-8.57.7-9,.33s-.51-.56-1.26-.14-.14.84-.23.88c4.66,3.27,14.17,2.29,15.38-3.77.71-3.54-1-5.92-3.45-8.06.57-.87,1.11-1.75,1.57-2.55a8.08,8.08,0,0,0,4.46,2.44A12.72,12.72,0,0,0,47.49,51c-.6,5.77,3.4,11,9.56,6.29-.09,0-.44,1.54-1.07,3.44a20.39,20.39,0,0,0-9.28.66c-5.41,1.77-3.92,7.36.65,7.87,4,.45,8.32-1.26,10.75-7.11,5,1.11,9.61,3.17,12.79,4.09,4.38,1.25,19,6.29,26.84-2.94,0,0,.66-.84.35-1.35S97.13,61.8,96.75,62.36ZM35.33,35.42c.74-.89,4.47-2.14,4.52,1.26,0,1.86-2.47,3.82-4.73,5.21C32.22,38.6,34.66,36.21,35.33,35.42ZM29.64,49.07A5.47,5.47,0,0,1,32,44.91a43.16,43.16,0,0,0,6.39,5.47l.11.08C34,54.3,29.73,51.54,29.64,49.07Zm15.12-9.19c.31.53.52,1.35.26,1.55a6,6,0,0,0-.64,1.23A2.48,2.48,0,0,1,44.76,39.88Zm14,.2C60,40,61.19,41,60,43.2c-1.06,2-3.8,3.71-8,3.7.14-.35.29-.7.46-1C54.9,41.06,57.47,40.13,58.72,40.08ZM52.25,67c-3,1.68-6.58,1.63-7-1.49,0,0,.19-4.28,7.14-4.15a25.82,25.82,0,0,1,3.26.3C54.85,63.86,53.72,66.2,52.25,67Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 670px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-top: 50px !important; padding-bottom: 50px !important;\n}\n#div-1 {\nmargin-bottom: 50px !important;\n}\n#h6-1 {\npadding-left: 21px !important;\n}\n#h2-1 {\nmargin-top: 15px !important;\n}\n#li-1 {\nwidth: 100% !important;\n}\n#a-1 {\nmargin-top: 20px !important;\n}\n#span-1 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-2 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#li-2 {\nwidth: 100% !important; margin-top: 50px !important;\n}\n#a-2 {\nmargin-top: 20px !important;\n}\n#span-3 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-4 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#li-3 {\nwidth: 100% !important; margin-top: 50px !important;\n}\n#a-3 {\nmargin-top: 20px !important;\n}\n#span-5 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-6 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#li-4 {\nwidth: 100% !important; margin-top: 50px !important;\n}\n#a-4 {\nmargin-top: 20px !important;\n}\n#span-7 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-8 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#li-5 {\nwidth: 100% !important; margin-top: 50px !important;\n}\n#a-5 {\nmargin-top: 20px !important;\n}\n#span-9 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-10 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#li-6 {\nwidth: 100% !important; margin-top: 50px !important;\n}\n#a-6 {\nmargin-top: 20px !important;\n}\n#span-11 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n#span-12 {\npadding-top: 14px !important; padding-right: 25px !important; padding-bottom: 14px !important; padding-left: 25px !important;\n}\n}\n@media (max-width: 1920px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmax-width: 1670px !important;\n}\n#div-2 {\nmax-width: 1670px !important;\n}\n}\n",
          }}
        />

        <section
          className="relative text-neutral-900 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="section-1"
        >
          <div
            className="m-auto w-[92%] min-[769px]:flex min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[118.75rem]"
            id="div-1"
          >
            <div className="min-[769px]:w-[65.4737%]">
              <h6
                className="inline-block text-lg uppercase min-[671px]:pl-6"
                id="h6-1"
              >
                How else can we help?
              </h6>

              <h2 className="lg:mt-10 min-[1025px]:mt-16" id="h2-1" />
            </div>
          </div>

          <div
            className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]"
            id="div-2"
          >
            <ul className="ml-auto flex list-none flex-wrap lg:w-full min-[1025px]:w-[65.4737%]">
              <li
                className="list-item md:w-full lg:w-[48.2105%] min-[1025px]:w-[47.2669%]"
                id="li-1"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    WooCommerce
                  </span>
                </h2>
                As a world-renowned WooCommerce development agency, we can offer
                merchants familiar with WordPress a way of selling online,
                helping retailers to upgrade or replatform to WooCommerce.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/woocommerce-agency/"
                  id="a-1"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-1"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-2"
                    />
                  </span>
                </a>
              </li>

              <li
                className="list-item md:mt-16 md:w-full lg:ml-14 lg:w-[48.2105%] min-[1025px]:ml-20 min-[1025px]:w-[47.2669%]"
                id="li-2"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">Shopify</span>
                </h2>
                We’re an award-winning Shopify agency handling everything from
                marketing and payments to secure checkout and shipping; Shopify
                leaves us to focus on making your Shopify store look beautiful.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/shopify/"
                  id="a-2"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-3"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-4"
                    />
                  </span>
                </a>
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:mt-16 lg:w-[48.2105%] min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-3"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    BigCommerce
                  </span>
                </h2>
                A trusted eCommerce and BigCommerce agency, we use BigCommerce,
                one of the most popular eCommerce platforms on the market, to
                create custom online stores that look great and accelerate
                growth.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/bigcommerce-agency/"
                  id="a-3"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-5"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-6"
                    />
                  </span>
                </a>
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:ml-14 lg:mt-16 lg:w-[48.2105%] min-[1025px]:ml-20 min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-4"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">Branding</span>
                </h2>
                A brand isn’t just about a logo. We take an identity and create
                visuals that showcase your products and services using the right
                messaging and materials from icons to illustrations and more.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/branding/"
                  id="a-4"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-7"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-8"
                    />
                  </span>
                </a>
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:mt-16 lg:w-[48.2105%] min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-5"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">
                    Website design
                  </span>
                </h2>
                We approach your website project with a focus on creativity,
                usability, and conversions. The result is an online
                representation of your business that is beautiful and will
                generate more leads.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/website-design/"
                  id="a-5"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-9"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-10"
                    />
                  </span>
                </a>
              </li>

              <li
                className="list-item min-[671px]:mt-12 min-[671px]:mt-16 min-[671px]:mt-24 md:mt-16 md:w-full lg:ml-14 lg:mt-16 lg:w-[48.2105%] min-[1025px]:ml-20 min-[1025px]:mt-24 min-[1025px]:w-[47.2669%]"
                id="li-6"
              >
                <h2 className="text-[8.75rem] uppercase leading-none">
                  <span className="text-[3.13rem] leading-none">Laravel</span>
                </h2>
                Building powerful and scalable Laravel apps from portals to
                workflow systems to plugins, we build bespoke web apps for
                startups, growing brands, corporates and online store owners.
                <a
                  className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
                  href="https://www.fhoke.com/services/laravel-development/"
                  id="a-6"
                >
                  <span
                    className="relative cursor-pointer lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                    id="span-11"
                  >
                    Find out more
                    <span
                      className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-4 lg:pl-8 lg:pr-8 lg:pt-4 min-[1025px]:pb-5 min-[1025px]:pl-8 min-[1025px]:pr-8 min-[1025px]:pt-5"
                      id="span-12"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
