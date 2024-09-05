import Image from "next/image";

export function PreFooter() {
  return (
    <>
      <div>
        <div className="relative h-full w-full overflow-visible bg-neutral-900 py-20 font-light text-white">
          <div className="relative m-auto items-center justify-center">
            <div className="relative mx-auto mb-12 block content-stretch items-start justify-start p-4">
              <div className="m-auto flex justify-center">
                <div className="relative w-64 px-1">
                  <div className="relative">
                    <div className="h-80" id="div-6">
                      <Image
                        alt="Waves on the beach"
                        sizes="(max-width: 500px) 500px, 800px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/b-waves-home.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>B</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>B</div>
                    </div>
                  </div>
                </div>
                <div className="w-64 px-1">
                  <div className="relative">
                    <div className="h-80">
                      <Image
                        alt="Bride and groom smiling"
                        sizes="(max-width: 1080px) 1080px, 1200px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/kc-bride-and-groom-smiling.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>R</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>R</div>
                    </div>
                  </div>
                </div>
                <div className="w-64 px-1">
                  <div className="relative">
                    <div className="h-80">
                      <Image
                        alt="Approach background"
                        sizes="(max-width: 500px) 500px, 800px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/bg-approach.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>E</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>E</div>
                    </div>
                  </div>
                </div>
                <div className="w-64 px-1" id="div-11">
                  <div className="relative">
                    <div className="h-80" id="div-12">
                      <Image
                        alt="Christine beautiful sky"
                        sizes="(max-width: 500px) 500px, 799px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/Christine-beautiful-sky.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                  </div>
                </div>
                <div className="w-64 px-1" id="div-13">
                  <div className="relative">
                    <div className="h-80" id="div-14">
                      <Image
                        alt="Services background"
                        sizes="(max-width: 500px) 500px, 800px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/bg-services.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                  </div>
                </div>
                <div className="w-64 px-1" id="div-15">
                  <div className="relative">
                    <div className="h-80" id="div-16">
                      <Image
                        alt="Contact background"
                        sizes="(max-width: 800px) 800px, (max-width: 1080px) 1080px, 1200px"
                        className="inline-block h-full w-full max-w-full object-cover align-middle"
                        src="/bg-contact.1200.jpg"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-0 text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                    <div className="absolute left-1/2 top-[98%] z-[2] text-7xl font-bold lowercase text-white/[0.8]">
                      <div>W</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
}
