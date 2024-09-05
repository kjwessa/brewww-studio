export function AboutTeam() {
  return (
    <>
      <div>
        <div className="content-stretch items-start justify-start bg-neutral-900 px-24 py-48 font-light text-white">
          <div className="m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start">
            <div className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-[3.13rem] gap-y-[6.25rem]">
              <div className="flex flex-col items-center text-center">
                <div className="h-[37.50rem] w-96 pb-8">
                  <div className="overflow-hidden rounded-xl">
                    <Image alt="Replace with an informative alt text"
                      className="inline-block h-[37.50rem] w-96 max-w-full object-cover align-middle"
                      src="/5f53f8986ce296e3d5512d59_kevin-profile-pic.1920.jpg" width={1000} height={1000}
                    />
                  </div>
                </div>
                <div className="flex h-full max-w-[25.00rem] flex-col items-center justify-start pt-9">
                  Founder + Lead Engineer
                  <h4 className="mb-8 min-h-[0vw] text-lg font-bold">
                    Kevin Wessa
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-[37.50rem] w-96 pb-8">
                  <div className="overflow-hidden rounded-xl">
                    <Image alt="Replace with an informative alt text"
                      className="inline-block h-[37.50rem] w-96 max-w-full object-cover align-middle"
                      src="/5f53f783d20ccc4fe020678f_christine-profile-pic.1920.jpg" width={1000} height={1000}
                    />
                  </div>
                </div>
                <div className="flex h-full max-w-[25.00rem] flex-col items-center justify-start pt-9">
                  Founder + Lead Designer
                  <h4 className="mb-8 min-h-[0vw] text-lg font-bold">
                    Christine Wessa
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
