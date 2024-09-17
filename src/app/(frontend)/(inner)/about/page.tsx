import AboutImageEight from "/public/images/brewww-eight.jpeg";

export default function About() {
  return (
    <>
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
