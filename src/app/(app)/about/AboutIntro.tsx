export function AboutIntro() {
  return (
    <>
      <div>
        <div
          className="relative content-stretch items-start justify-start bg-gray-800 pb-12 pl-0 pr-24 pt-4 text-white"
          id="div-1"
        >
          <div
            className="relative -mt-36 mr-24 h-[75vh] overflow-hidden"
            id="div-2"
          >
            <img
              src="https://cdn.prod.website-files.com/5dad037b65b2d91cb0118b62/5ed749f69d85623011204b14_marybielskiandkevinwessa-6.1920.jpg"
              alt="Intro Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "@media (max-width:991px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding: 3rem !important;\n}\n#div-2 {\npadding-left: 0 !important; padding-right: 0 !important;\n}\n#div-4 {\ngrid-column-start: 2 !important;\n}\n}\n@media (max-width:767px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding: 2rem !important;\n}\n}\n@media (max-width:479px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding-top: 6rem !important; padding-bottom: 6rem !important; padding-right: 1rem !important; padding-left: 1rem !important;\n}\n#div-2 {\npadding-left: 0 !important; padding-right: 0 !important;\n}\n#div-3 {\nwidth: 100% !important;\n}\n#div-4 {\ngrid-column: 1/7 !important;\n}\n#div-5 {\nposition: relative !important;\n}\n}\n",
            }}
          />

          <div
            className="relative content-stretch items-start justify-start bg-gray-800 px-24 py-48 font-light text-white"
            id="div-1"
          >
            <div
              className="relative m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start"
              id="div-2"
            >
              <div
                className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto]"
                id="div-3"
              >
                <div
                  className="relative col-start-2 col-end-6 row-start-1 row-end-7 flex h-full w-full flex-col items-start justify-center self-end justify-self-end"
                  id="div-4"
                >
                  <div className="pb-5 font-bold uppercase">
                    + Crafted with purpose
                  </div>
                  <p className="mb-8 text-xl">
                    {" "}
                    Envisioned in 2012, formalized in 2017, we are newly founded
                    and really grounded here in Pensacola, FL. Our team is
                    small, agile, and really selective about the clients we take
                    on.{" "}
                    <strong className="font-extrabold">
                      Our name alludes to an artisanal approach that avoids the
                      instant and focuses on the lasting.
                    </strong>
                    <br />
                  </p>
                  <a
                    className="relative mb-1 inline-block max-w-full font-bold"
                    href="/services"
                  >
                    <div className="uppercase" id="div-5">
                      View Capabilities
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
