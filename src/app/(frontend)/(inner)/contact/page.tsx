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

      <section className="w-full bg-brand-dark-bg pb-28 text-black lg:pb-32 min-[1450px]:pb-40 min-[2100px]:pb-48">
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

      <section className="bg-brand-dark-bg px-2 py-10 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="relative flex w-full flex-wrap px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="flex w-full flex-wrap justify-between rounded-3xl bg-brand-dark-surface p-8 lg:p-10">
            <div className="w-full lg:w-[37.5%] lg:pb-12 lg:pt-12">
              <h2 className="mb-3 text-5xl text-white">Our Brewww Studio</h2>
              <div className="mb-5 w-full text-lg font-light text-zinc-400 lg:mb-10 lg:max-w-sm">
                <p className="mb-6">
                  Located in the heart of the city, our Brewww Studio is easily
                  accessible by public transport and major roads.
                </p>
              </div>
              <div className="mb-10 flex w-full flex-col md:flex-row">
                <div className="flex-grow">
                  <div className="mb-2 font-light text-white">
                    Studio Address
                  </div>
                  <div className="flex">
                    <div className="pt-1.5 text-white">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(255, 255, 255)"
                        height="16"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192c0 112 192 320 192 320zm0-384a64 64 0 110 128 64 64 0 110-128z"
                          fill="rgb(255, 255, 255)"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-zinc-400">
                      <p>
                        Brewww Studio
                        <br />
                        123 Creative Lane
                        <br />
                        City Center
                        <br />
                        AB12 3CD
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-0 mt-5 flex-grow md:mb-0 md:ml-5 md:mr-0 md:mt-0">
                  <div className="mb-2 font-light text-white">Follow us</div>
                  <div className="flex items-center">
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href="#"
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                    <a
                      className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href="#"
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                    <a
                      className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href="#"
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 496 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                    <a
                      className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href="#"
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                    <a
                      className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href="#"
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 576 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative inline-flex items-center">
                <a
                  className="inline-flex"
                  href="#"
                  style={{
                    outlineOffset: "2px",
                  }}
                >
                  <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                    <div className="inline-flex">Get directions</div>
                  </div>
                  <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300" />
                </a>
                <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center text-neutral-950">
                  <div className="relative overflow-hidden">
                    <div>
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="absolute left-0 top-0">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-10 h-60 w-full overflow-hidden rounded-2xl bg-zinc-800 md:h-80 lg:mt-0 lg:h-auto lg:w-[56.25%]">
              <picture>
                <source type="image/webp" />

                <img
                  className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                  src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-18.jpg?w=400&h=225&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142707&s=b522e5aa7def9ed40e6b896d1ad3210d"
                />
              </picture>
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
    </>
  );
}
