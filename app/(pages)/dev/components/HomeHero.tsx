export function HomeHero() {
  return (
    <>
      <div>
        <div
          className="relative min-h-[60vh] content-stretch items-start justify-start bg-neutral-900 px-24 py-60 font-light text-white"
          id="div-1"
        >
          <div className="m-auto max-w-7xl px-5 py-12">
            <h1 className="mx-0 my-3 min-h-[0vw] text-center text-[8.38rem] font-bold  leading-none">
              <span className="text-8xl">We </span>
              Craft Results.
            </h1>
            <div
              className="absolute bottom-0 left-0 right-0 z-40 flex h-full max-h-[9.38rem] min-h-[6.25rem] w-full items-center justify-center"
              id="div-2"
            >
              <a
                className="relative inline-block h-full w-3 max-w-full self-end overflow-hidden"
                href="/#start"
              >
                <div className="absolute left-[0.38rem] top-0 z-[1] h-full w-0 bg-white/[0.35]" />
                <div className="absolute left-[0.38rem] top-0 h-full w-0 bg-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
