export default function Contact() {
  return (
    <>
      <section>
        <div className="uppercase text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
          <div className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]">
            <div>
              <h2 className="inline-block min-[671px]:pl-6">
                Every project starts with a chat
              </h2>
              {"                "}
              <h1 className="text-[8.13rem] leading-none min-[769px]:mt-8">
                Contact us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[156.25rem] pb-20 text-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-[3.25rem] lg:grid-cols-2">
            <div className="w-full text-[1.38rem] leading-7">
              <div>
                <p className="md:ml-[unset] md:max-w-[60ch]">
                  New business:
                  <br />
                  <a
                    className="inline-block underline transition-colors duration-300 hover:text-brand-gold"
                    href="mailto:start@brewww.studio"
                  >
                    start@brewww.studio
                  </a>
                  <br />
                </p>

                <p className="mt-12 md:ml-[unset] md:max-w-[60ch]">
                  General:
                  <br />
                  <a
                    className="inline-block underline transition-colors duration-300 hover:text-brand-gold"
                    href="mailto:hello@brewww.studio"
                  >
                    hello@brewww.studio
                  </a>
                  <br />
                </p>

                <p className="mt-12 md:ml-[unset] md:max-w-[60ch]">
                  Join the team:
                  <br />
                  <a
                    className="inline-block underline transition-colors duration-300 hover:text-brand-gold"
                    href="mailto:careers@brewww.studio"
                  >
                    careers@brewww.studio
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-12 w-full lg:mt-0">
              <h2 className="mb-12 text-[1.63rem] leading-8">
                We'd love to hear from you:
              </h2>

              <form action="">
                <div className="mb-12 grid grid-cols-1 gap-x-[1.88rem] gap-y-[3.13rem] sm:grid-cols-2">
                  <div className="relative w-full">
                    <label
                      htmlFor="firstName"
                      className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                    >
                      First name
                      <span className="text-sm text-brand-gold">*</span>
                    </label>
                    <input
                      id="firstName"
                      className="inline-block h-10 w-full cursor-text border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="relative w-full">
                    <label
                      htmlFor="lastName"
                      className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                    >
                      Last name
                      <span className="text-sm text-brand-gold">*</span>
                    </label>
                    <input
                      id="lastName"
                      className="inline-block h-10 w-full cursor-text border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="relative mb-12 w-full">
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                  >
                    Email<span className="text-sm text-brand-gold">*</span>
                  </label>
                  <input
                    id="email"
                    className="inline-block h-10 w-full cursor-text border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label
                    htmlFor="company"
                    className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="inline-block h-10 w-full cursor-text border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                    type="text"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label
                    htmlFor="companyUrl"
                    className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                  >
                    Company URL
                  </label>
                  <input
                    id="companyUrl"
                    className="inline-block h-10 w-full cursor-text border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                    type="text"
                    placeholder="Enter your company website"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-[-2em] text-xs uppercase text-neutral-400 transition-all duration-300"
                  >
                    What can we help you with?
                    <span className="text-sm text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="inline-block h-20 w-full cursor-text resize border-b-2 border-solid border-b-white bg-transparent pl-4 transition-colors duration-300 focus:border-brand-gold focus:outline-none"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>

                <button className="ml-auto flex h-12 max-h-[2.88rem] w-max min-w-[10.00rem] cursor-pointer items-center justify-center rounded-sm bg-brand-gold px-10 py-4 text-center text-neutral-900 transition-all duration-300 hover:bg-opacity-90">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-black py-24 text-lg text-stone-400 md:py-32 xl:py-40">
        <div className="container mx-auto px-4">
          <div className="relative xl:flex">
            <p className="mb-5 text-sm uppercase text-neutral-500 xl:mt-2 xl:w-28">
              Start a project
            </p>
            <div className="relative flex-1">
              <div className="text-[1.38rem] leading-7">
                <div className="mt-6 xl:mt-0 xl:max-w-[45.00rem]">
                  <p>
                    We join forces with ambitious brands. Fill out the form
                    below to reach out to us and we'll be in touch. If you'd
                    prefer to email us instead, send a note to
                    <a className="ml-1 text-orange-400 underline" href="">
                      hello@brewww.studio
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="relative mt-12 text-4xl xl:pt-5">
                <form className="relative">
                  <p className="mb-2">Hello Brewww Studio,</p>
                  <div className="relative mb-4 flex flex-wrap">
                    <p className="mb-2 mr-1 inline-flex items-center">
                      My name is
                    </p>
                    <div className="relative mb-2 mr-1 inline-flex h-6 min-w-[33.333%] max-w-[33.75rem] flex-grow text-stone-200">
                      <input
                        className="absolute left-0 top-0 flex h-6 w-full cursor-text items-center border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 placeholder-stone-600 focus:border-orange-400 focus:outline-none"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">
                      and I work for
                    </p>
                    <div className="relative mb-2 mr-1 inline-flex h-6 min-w-[33.333%] max-w-[33.75rem] flex-grow text-stone-200">
                      <input
                        className="absolute left-0 top-0 flex h-6 w-full cursor-text items-center border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 placeholder-stone-600 focus:border-orange-400 focus:outline-none"
                        placeholder="Company"
                        type="text"
                        required
                      />
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">as a</p>
                    <div className="relative mb-2 mr-4 inline-flex h-6 min-w-[33.333%] max-w-[33.75rem] flex-grow text-stone-200">
                      <input
                        className="absolute left-0 top-0 flex h-6 w-full cursor-text items-center border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 placeholder-stone-600 focus:border-orange-400 focus:outline-none"
                        placeholder="Job Title"
                        type="text"
                        required
                      />
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">
                      We're looking for
                    </p>
                    <div className="relative mb-2 mr-1 inline-flex h-6 max-w-none text-stone-200">
                      <select className="absolute left-0 top-0 h-full w-full cursor-pointer appearance-none border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 focus:border-orange-400 focus:outline-none">
                        <option>A brand overhaul</option>
                        <option>A new website</option>
                        <option>A marketing campaign</option>
                        <option>Other services</option>
                      </select>
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">
                      in the next
                    </p>
                    <div className="relative mb-2 mr-4 inline-flex h-6 max-w-none text-stone-200">
                      <select className="absolute left-0 top-0 h-full w-full cursor-pointer appearance-none border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 focus:border-orange-400 focus:outline-none">
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6-12 months</option>
                        <option>1+ year</option>
                      </select>
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">
                      our budget is
                    </p>
                    <div className="relative mb-2 mr-4 inline-flex h-6 max-w-none text-stone-200">
                      <select className="absolute left-0 top-0 h-full w-full cursor-pointer appearance-none border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 focus:border-orange-400 focus:outline-none">
                        <option>$30,000-$50,000</option>
                        <option>$50,000-$100,000</option>
                        <option>$100,000-$250,000</option>
                        <option>$250,000+</option>
                      </select>
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center">
                      and you can reach me at
                    </p>
                    <div className="relative mb-2 mr-4 inline-flex h-6 min-w-[33.333%] max-w-[33.75rem] flex-grow text-stone-200">
                      <input
                        className="absolute left-0 top-0 flex h-6 w-full cursor-text items-center border-b-2 border-solid border-b-zinc-700 bg-transparent text-center text-stone-200 placeholder-stone-600 focus:border-orange-400 focus:outline-none"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                    <p className="mb-2 mr-1 inline-flex items-center text-base text-orange-400">
                      <span className="inline-flex h-8 cursor-pointer items-center xl:h-10">
                        <span className="ml-4 inline-flex">Tell us more</span>
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-base text-black">
                    <button
                      type="submit"
                      className="mr-auto inline-flex h-12 w-36 cursor-pointer items-center overflow-hidden rounded-3xl bg-orange-400 px-1.5 py-1 text-center transition-colors duration-300 hover:bg-orange-500 xl:h-14 xl:w-44"
                    >
                      <div className="inline-flex h-2/4 w-full overflow-hidden text-white">
                        <span className="flex h-full w-full items-center justify-center">
                          Send it off
                        </span>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
