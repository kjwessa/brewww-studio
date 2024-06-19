export function HomeFeat() {
  return (
    <>
      <div>
        <div
          className="relative grid auto-cols-fr grid-cols-[.75fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.75fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-4 bg-neutral-900 font-light text-white"
          id="div-1"
        >
          <div
            className="col-start-1 row-start-1 h-screen w-full"
            id="div-2"
            style={{
              gridArea: "1/1/10/6",
              gridRowEnd: "10",
            }}
          >
            <div className="h-full w-full overflow-hidden object-cover">
              <img
                src="https://cdn.prod.website-files.com/5dad037b65b2d9bc97118b77/5ffde49e22ac4c70dd0e883e_DSCF6786.1920.jpg"
                alt="Background"
                className="h-full w-full object-cover opacity-[0.975112]"
                id="img-1"
                style={{
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>
          <h6
            className="col-start-6 col-end-9 row-start-4 row-end-5 min-h-[0vw] self-end text-4xl"
            id="h6-1"
            style={{
              gridArea: "4/6/5/9",
            }}
          >
            IES National
          </h6>
          <div
            className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
            id="div-4"
            style={{
              gridArea: "5/4/6/9",
            }}
          >
            <h2 className="mb-8 min-h-[0vw]" id="h2-1">
              Sustainability by Design
            </h2>
          </div>
          <div
            className="col-start-4 row-start-5 row-end-6 flex flex-col items-center justify-center self-stretch justify-self-center overflow-visible py-4 pr-9 text-[5.25rem] font-bold leading-none"
            id="div-5"
            style={{
              gridArea: "5/4/6/9",
            }}
          >
            <h2 className="z-10 mb-8 min-h-[0vw] overflow-visible" id="h2-2">
              Sustainability by Design
            </h2>
          </div>
          <div
            className="col-start-8 col-end-10 p-5 font-bold"
            id="div-6"
            style={{
              gridArea: "8/8/9/10",
              gridRowEnd: "9",
              gridRowStart: "8",
            }}
          >
            <a
              className="relative inline-block max-w-full"
              href="/work/ies-national-pensacola-fl"
            >
              <div className="uppercase" id="div-7">
                View Project
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
