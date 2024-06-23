export function CapabilitiesHero() {
  return (
    <>
      <div>
        <div
          className="relative content-stretch items-start justify-start bg-neutral-900 px-36 pb-36 pt-48 font-light text-white"
          id="div-1"
        >
          <div
            className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-4"
            id="div-2"
          >
            <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-center justify-self-start font-bold uppercase">
              <div className="pb-5">
                <span className="text-orange-400">/ </span>
                Our Capabilities
              </div>
            </div>
            <div
              className="col-span-4 col-start-1 row-start-2 flex h-full w-full flex-col items-center justify-center text-[4.13rem] leading-none"
              id="div-3"
            >
              <h1 className="mx-0 my-3 min-h-[0vw]">
                We build brands, websites, and creative that engages you. Your
                audience. Your vision.{" "}
                <strong className="font-extrabold">Your story.</strong>
              </h1>
            </div>
            <div id="div-4" />
            <div
              className="relative col-start-5 col-end-6 row-start-5 row-end-7 flex h-full max-h-[9.38rem] min-h-[6.25rem] w-full items-end justify-start"
              id="div-5"
              style={{
                gridArea: "5/5/7/6",
              }}
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
