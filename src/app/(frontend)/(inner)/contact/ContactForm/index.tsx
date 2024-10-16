export function ContactForm() {
  return (
    <>
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
                  <span className="ml-1 text-neutral-700">(Optional)</span>
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
                  <option className="h-auto w-auto px-1 pb-1" value="" disabled>
                    How did you hear about us?
                  </option>
                  <option className="h-auto w-auto px-1 pb-1" value="google">
                    Google
                  </option>
                  <option
                    className="h-auto w-auto px-1 pb-1"
                    value="friendOrFamily"
                  >
                    Friend or family
                  </option>
                  <option className="h-auto w-auto px-1 pb-1" value="instagram">
                    Instagram
                  </option>
                  <option className="h-auto w-auto px-1 pb-1" value="linkedin">
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
                  Subscribe to our newsletter for all the latest Brewww Studio
                  goss!
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col text-sm text-zinc-400 md:flex-row md:items-center">
            <div className="mb-4 w-full md:w-full md:pl-2 md:pr-2">
              <div>
                By submitting this form I accept the Privacy Policy of this
                site.
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
    </>
  );
}
