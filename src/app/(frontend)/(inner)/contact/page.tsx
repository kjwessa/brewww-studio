export default function Contact() {
  return (
    <>
      <div>
        <div
          className="uppercase text-neutral-900 min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28"
          id="div-1"
        >
          <div
            className="m-auto w-[92%] min-[1921px]:max-w-[118.75rem]"
            id="div-2"
          >
            <div>
              <h2 className="inline-block min-[671px]:pl-6" id="h2-1">
                Every project starts with a chat
              </h2>
              {"                "}
              <h1
                className="text-[8.13rem] leading-none min-[769px]:mt-8"
                id="h1-1"
              >
                <span className="inline-block overflow-hidden">Contact</span>{" "}
                <span className="inline-block overflow-hidden">us</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="relative grid max-w-[156.25rem] grid-cols-2 grid-rows-[35.50rem] justify-items-start gap-[3.25rem] text-neutral-100">
          <div className="w-full text-[1.38rem] leading-7">
            <div>
              <p className="md:ml-[unset] md:max-w-[60ch]">
                New business:
                <br />
                <a className="inline-block underline" href="">
                  start@brewww.studio
                </a>
                <br />
              </p>

              <p className="mt-12 md:ml-[unset] md:max-w-[60ch]">
                General:
                <br />
                <a className="inline-block underline" href="">
                  hello@brewww.studio
                </a>
                <br />
              </p>

              <p className="mt-12 md:ml-[unset] md:max-w-[60ch]">
                Join the team:
                <br />
                <a className="inline-block underline" href="">
                  careers@brewww.studio
                </a>
              </p>
            </div>
          </div>

          <div
            className="relative mt-12 grid w-full grid-cols-[43.00rem] grid-rows-[90.1875px_477px] md:mt-0 min-[991px]:mb-16 min-[991px]:ml-0 min-[991px]:mr-0 min-[991px]:mt-16"
            style={{
              gridTemplateAreas: '"toggles" "forms"',
            }}
          >
            <h2 className="mb-12 text-[1.63rem] leading-8">
              We’d love to hear from you:
            </h2>

            <div
              style={{
                gridColumn: "forms",
                gridRow: "forms",
              }}
            >
              <form action="">
                <div className="relative mb-12 grid w-full grid-rows-[2.13rem] gap-x-[1.88rem] gap-y-[3.13rem] min-[991px]:grid-cols-[1fr_1fr]">
                  <div className="relative w-full">
                    <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                      First name
                      <span className="text-[1.38rem] leading-7 md:ml-[unset] md:max-w-[60ch]">
                        <span className="text-sm md:ml-[unset] md:max-w-[60ch]">
                          *
                        </span>
                      </span>
                    </label>

                    <input
                      className="inline-block h-8 w-full cursor-text border-b-2 border-solid border-b-white pl-1"
                      defaultValue=""
                      type="text"
                    />
                  </div>

                  <div className="relative w-full">
                    <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                      Last name
                      <span className="text-[1.38rem] leading-7 md:ml-[unset] md:max-w-[60ch]">
                        <span className="text-sm md:ml-[unset] md:max-w-[60ch]">
                          *
                        </span>
                      </span>
                    </label>

                    <input
                      className="inline-block h-8 w-full cursor-text border-b-2 border-solid border-b-white pl-1"
                      defaultValue=""
                      type="text"
                    />
                  </div>
                </div>

                <div className="relative mb-12 w-full">
                  <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                    Email
                    <span className="text-[1.38rem] leading-7 md:ml-[unset] md:max-w-[60ch]">
                      <span className="text-sm md:ml-[unset] md:max-w-[60ch]">
                        *
                      </span>
                    </span>
                  </label>

                  <input
                    className="inline-block h-8 w-full cursor-text border-b-2 border-solid border-b-white pl-1"
                    defaultValue=""
                    type="email"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                    Company
                  </label>

                  <input
                    className="inline-block h-8 w-full cursor-text border-b-2 border-solid border-b-white pl-1"
                    defaultValue=""
                    type="text"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                    Company URL
                  </label>

                  <input
                    className="inline-block h-8 w-full cursor-text border-b-2 border-solid border-b-white pl-1"
                    defaultValue=""
                    type="text"
                  />
                </div>

                <div className="relative mb-12 w-full">
                  <label className="absolute left-0 top-[calc(7px_+_.1em)] text-neutral-400">
                    What can we help you with?
                    <span className="text-[1.38rem] leading-7 md:ml-[unset] md:max-w-[60ch]">
                      <span className="text-sm md:ml-[unset] md:max-w-[60ch]">
                        *
                      </span>
                    </span>
                  </label>

                  <textarea
                    className="inline-block h-12 w-full cursor-text resize border-b-2 border-solid border-b-white pl-1"
                    defaultValue=""
                  />
                </div>

                <button
                  className="ml-auto h-12 max-h-[2.88rem] w-max min-w-[10.00rem] cursor-pointer items-start rounded-3xl bg-indigo-300 px-10 py-4 text-center text-neutral-900"
                  id="button-1"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
