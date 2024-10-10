export default function Contact() {
  return (
    <>
      <section className="bg-brand-dark-bg px-2 py-24 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="flex w-full justify-between border-b-2 border-solid border-neutral-700 pb-12 lg:pb-12">
          <div className="relative mb-10 w-[62.5%] px-2 lg:mb-0 lg:w-3/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 min-[1450px]:w-[81.25%]">
            <div className="relative w-full">
              <h1 className="mb-3 inline-flex items-center lg:absolute lg:left-0 lg:top-[1.00rem]">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Contact</div>
              </h1>
              <h2 className="indent-48 text-[9.50rem] leading-none text-white">
                Exhale. Help <br /> is here.
                <a
                  className="relative inline-flex h-9 w-9 rounded-full bg-lime-300 indent-48 text-black md:h-16 md:w-16 lg:top-[0.75rem] lg:h-24 lg:w-24"
                  href=""
                >
                  <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center indent-48">
                    <svg
                      className="h-5 w-5 indent-48 md:h-6 md:w-6 lg:h-8 lg:w-8 min-[2100px]:h-16 min-[2100px]:w-16"
                      fill="rgb(1, 2, 2)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="indent-48"
                        d="M344 416h8V160h-16v228.7L53.7 106.3l-5.7-5.6L36.7 112l5.7 5.7L324.7 400H96v16h248z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
                </a>
              </h2>
            </div>
          </div>

          <div className="w-2/4 px-2 sm:w-1/3 md:w-1/4 lg:w-64 lg:pl-3 lg:pr-3 xl:w-64 xl:pl-4 xl:pr-4 min-[1450px]:w-64 min-[2100px]:w-64">
            <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 pb-[155.556%]">
              {/* //TODO update intro video */}
              <video
                className="absolute left-0 top-0 z-10 h-full w-full max-w-full object-cover pb-1"
                src="https://youtube.com/shorts/1NLd_UCXomU?si=PVDmDaYEjiOyBs6B"
              />

              <a
                className="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-center"
                href=""
              >
                <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-end justify-end p-3 lg:p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 md:h-16 md:w-16">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M384 256L0 32v448l384-224z"
                        fill="rgb(0, 0, 0)"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-950 pb-20 text-black lg:pb-24 min-[1450px]:pb-32 min-[2100px]:pb-40">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="flex w-full flex-wrap justify-between lg:-mt-4">
            <div className="order-1 mb-10 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="mb-5 w-full pr-5 text-lg font-light text-zinc-400 lg:max-w-sm lg:pr-0">
                <p className="mb-6">
                  For general enquiries, please fill out the form to get in
                  touch. Alternatively, if you know your project details — head
                  over to our project planner for a more refined step-by-step
                  process.
                </p>
              </div>
              <div className="relative inline-flex items-center">
                <a
                  className="inline-flex"
                  href=""
                  style={{
                    outlineOffset: "2px",
                  }}
                >
                  <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                    <div className="inline-flex">Go to Project Planner</div>
                  </div>
                  <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300" />
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
              <div className="mt-6 flex w-full flex-col xl:flex-row">
                <div className="font-light text-zinc-400">
                  Hate contact forms?
                </div>
                <a
                  className="text-white xl:relative xl:ml-4 xl:mr-0 xl:inline-block"
                  href=""
                >
                  hello@brewww.co
                </a>
              </div>
            </div>
            <div className="order-2 mb-10 w-full px-2 lg:mb-0 lg:w-[62.5%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <form>
                <div className="absolute bottom-[48.00rem] left-[41.88rem] right-[63.75rem] top-[37.25rem]">
                  Leave this field blank
                  <input
                    className="inline-block h-10 w-48 cursor-text border-2 border-solid border-neutral-900 bg-white px-3 py-2"
                    defaultValue="e756f5"
                    type="text"
                  />
                </div>

                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 w-full flex-grow md:w-auto md:pl-2 md:pr-2">
                      <div className="relative w-full">
                        <input
                          id="name"
                          className="h-14 w-full cursor-text rounded-xl border-2 border-solid border-neutral-700 bg-zinc-900 px-5 pb-3 pt-6 text-white placeholder-transparent"
                          placeholder="Name"
                          style={{
                            outlineOffset: "2px",
                          }}
                          type="text"
                        />
                        <label
                          htmlFor="name"
                          className="pointer-events-none absolute top-1 ml-5 -translate-y-1/2 transform text-zinc-400 transition-all duration-200 ease-in-out"
                        >
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="mb-4 w-full flex-grow md:w-auto md:pl-2 md:pr-2">
                      <div className="relative w-full">
                        <input
                          id="email"
                          className="h-14 w-full cursor-text rounded-xl border-2 border-solid border-neutral-700 bg-zinc-900 px-5 pb-3 pt-6 text-white placeholder-transparent"
                          placeholder="Email Address"
                          style={{
                            outlineOffset: "2px",
                          }}
                          type="email"
                        />
                        <label
                          htmlFor="email"
                          className="pointer-events-none absolute top-1 ml-5 -translate-y-1/2 transform text-zinc-400 transition-all duration-200 ease-in-out"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 w-full flex-grow md:w-auto md:pl-2 md:pr-2">
                      <div className="relative w-full">
                        <input
                          id="phone"
                          className="h-14 w-full cursor-text rounded-xl border-2 border-solid border-neutral-700 bg-zinc-900 px-5 pb-3 pt-6 text-white placeholder-transparent"
                          placeholder="Phone (Optional)"
                          style={{
                            outlineOffset: "2px",
                          }}
                          type="text"
                        />
                        <label
                          htmlFor="phone"
                          className="pointer-events-none absolute top-1 ml-5 -translate-y-1/2 transform text-zinc-400 transition-all duration-200 ease-in-out"
                        >
                          Phone
                          <span className="ml-1 text-neutral-700">
                            (Optional)
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-4 w-full flex-grow md:w-auto md:pl-2 md:pr-2">
                      <div className="relative w-full">
                        <select
                          id="referral"
                          className="h-14 w-full items-center rounded-xl border-2 border-solid border-neutral-700 bg-zinc-900 px-5 pb-3 pt-6 text-white"
                          defaultValue=""
                          style={{
                            outlineOffset: "2px",
                          }}
                        >
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value=""
                            disabled
                          >
                            How did you hear about us?
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="google"
                          >
                            Google
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="friendOrFamily"
                          >
                            Friend or family
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="instagram"
                          >
                            Instagram
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="linkedin"
                          >
                            Linkedin
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="wordOfMouth"
                          >
                            Word of mouth
                          </option>
                          <option
                            className="h-auto w-auto px-1 pb-1"
                            value="newsletter"
                          >
                            Newsletter
                          </option>
                        </select>
                        <label
                          htmlFor="referral"
                          className="pointer-events-none absolute top-1 ml-5 -translate-y-1/2 transform text-zinc-400 transition-all duration-200 ease-in-out"
                        >
                          How did you hear about Brewww Studio?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 w-full md:w-full md:pl-2 md:pr-2">
                      <div className="relative w-full">
                        <textarea
                          id="project"
                          className="h-32 w-full cursor-text resize-y rounded-xl border-2 border-solid border-neutral-700 bg-zinc-900 px-5 pb-3 pt-6 text-white placeholder-transparent"
                          placeholder="Tell us about your project"
                          style={{
                            outlineOffset: "2px",
                          }}
                        />
                        <label
                          htmlFor="project"
                          className="pointer-events-none absolute top-1 ml-5 -translate-y-1/2 transform text-zinc-400 transition-all duration-200 ease-in-out"
                        >
                          Tell us about your project
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 w-full md:w-full md:pl-2 md:pr-2">
                      <label className="inline-flex w-full cursor-pointer items-center">
                        <input
                          id="subscribe"
                          className="inline-block h-4 w-4 rounded border-2 border-solid border-neutral-400 align-middle text-neutral-700"
                          defaultValue="1"
                          type="checkbox"
                        />

                        <span className="ml-2 pt-1 text-zinc-400">
                          Subscribe to our newsletter for all the latest Brewww
                          Studio goss!
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-zinc-400 md:flex-row md:items-center">
                    <div className="mb-4 w-full md:w-full md:pl-2 md:pr-2">
                      <div>
                        By submitting this form I accept the Privacy Policy of
                        this site.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 w-full md:w-full md:pl-2 md:pr-2">
                      <div className="relative inline-flex items-center">
                        <button
                          className="inline-flex h-9 w-44 cursor-pointer items-start text-center"
                          style={{
                            outlineOffset: "2px",
                          }}
                        >
                          <div className="inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-zinc-800 px-5 py-2 text-white">
                            <div className="inline-flex">Send Message</div>
                          </div>
                          <div className="-ml-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-zinc-800" />
                        </button>
                        <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center text-white">
                          <div className="relative overflow-hidden">
                            <div>
                              <svg
                                className="h-3 w-3"
                                fill="rgb(255, 255, 255)"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                                  fill="rgb(255, 255, 255)"
                                />
                              </svg>
                            </div>
                            <div className="absolute left-0 top-0">
                              <svg
                                className="h-3 w-3"
                                fill="rgb(255, 255, 255)"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                                  fill="rgb(255, 255, 255)"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-brand-dark-bg uppercase text-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
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
      <section className="relative max-w-[156.25rem] bg-brand-dark-bg pb-20 text-brand-dark-text">
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
      <section className="relative w-full bg-brand-dark-bg py-24 text-lg text-brand-dark-text md:py-32 xl:py-40">
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
