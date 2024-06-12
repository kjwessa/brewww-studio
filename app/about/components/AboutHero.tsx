export function AboutHero() {
  return (
    <>
      <div>
        <div
          className="relative content-stretch items-start justify-start bg-neutral-900 pb-96 pl-60 pr-24 pt-80 font-light text-white"
          id="div-1"
        >
          <div
            className="grid-rows-auto grid-cols-[repeat(6, 1fr)] relative grid auto-cols-fr gap-4"
            id="div-2"
          >
            <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-start self-start font-bold uppercase">
              <div className="pb-5">+ About Our Studio</div>
            </div>
            <div
              className="col-start-1 col-end-6 row-start-2 flex h-full w-full flex-col items-center justify-center self-stretch text-[3.13rem] leading-none"
              id="div-3"
              style={{
                justifySelf: "stretch",
              }}
            >
              <h1 className="mx-0 my-3 min-h-[0vw]">
                We are Brewww Studio. We craft creative for the kind-hearted,
                the hustlers, and the visionaries.
              </h1>
            </div>
            <div
              className="relative col-start-2 col-end-6 row-start-4 row-end-6 h-[50vh] self-stretch overflow-hidden"
              id="div-4"
              style={{
                justifySelf: "stretch",
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/5dad037b65b2d91cb0118b62/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpeg"
                alt="Studio Image"
                className="h-[120%] w-full object-cover"
                style={{
                  objectPosition: "50% 50%",
                }}
              />
            </div>
            <div
              className="relative col-start-1 col-end-2 row-start-4 row-end-5 flex h-full max-h-[9.38rem] min-h-[6.25rem] w-full items-end justify-start"
              id="div-5"
              style={{
                gridArea: "4/1/5/2",
              }}
            >
              <a
                className="relative inline-block h-full w-3 max-w-full self-end overflow-hidden"
                href="https://brewwwllc.webflow.io/#start"
              >
                <div className="absolute left-[0.38rem] top-0 z-[1] h-full w-0 bg-white/[0.35]" />
                <div className="absolute left-[0.38rem] top-0 h-full w-0 bg-white" />
              </a>
            </div>
            <div
              className="col-start-3 col-end-6 row-start-5 row-end-7 flex h-full w-full flex-col items-center justify-end self-end text-xl"
              id="div-6"
            >
              <p className="z-10 mb-8">
                Since day one, weve have focused on collaborative relationships,
                expansive creativity, and consistently delivering results.{" "}
                <strong className="font-extrabold">
                  Creative That Just Works
                </strong>{" "}
                - thats what sets us apart from everyone else. <strong />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
