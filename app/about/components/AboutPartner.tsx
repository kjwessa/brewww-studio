export function AboutPartner() {
  return (
    <>
      <div>
        <div
          className="relative cursor-none content-stretch items-start justify-start bg-neutral-900 px-24 py-36 font-light text-white"
          id="div-1"
        >
          <div
            className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-4"
            id="div-2"
          >
            <div className="col-start-3 col-end-6 row-start-1 row-end-2 flex h-full w-full flex-col items-end justify-start font-bold uppercase">
              <div className="pb-5">+ Our Values</div>
            </div>
            <div
              className="z-10 col-span-3 col-start-4 row-start-4 flex h-full w-full flex-col items-center justify-center self-stretch text-[2.63rem] leading-none"
              id="div-3"
              style={{
                justifySelf: "stretch",
              }}
            >
              <h2 className="mb-8 min-h-[0vw]">
                We are committed to treating everyone right, leaving our ego at
                the door, and truly partnering with our clients.
              </h2>
            </div>
            <div
              className="relative col-span-5 col-start-1 row-start-2 row-end-6 h-[75vh] self-stretch overflow-hidden"
              id="div-4"
            >
              <img
                src="https://cdn.prod.website-files.com/5dad037b65b2d91cb0118b62/5f0ce068d8b392674335dbfe_DSC04489.1920.jpg"
                alt="Partner Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
