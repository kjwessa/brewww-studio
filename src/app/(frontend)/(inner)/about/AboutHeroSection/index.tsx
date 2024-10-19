import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section>
      <div className="relative content-stretch items-start justify-start bg-brand-dark-bg pb-80 pl-60 pr-24 pt-64 font-light text-white">
        <div className="grid-rows-auto grid-cols-[repeat(6, 1fr)] relative grid auto-cols-fr gap-4">
          <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-start self-start font-bold uppercase">
            <div className="pb-5">+ About Our Studio</div>
          </div>
          <div className="col-start-1 col-end-6 row-start-2 flex h-full w-full flex-col items-center justify-center self-stretch text-headline-medium leading-none">
            <h1 className="my-3min-h-[0vw] mx-0">
              We are Brewww Studio. We craft creative for the kind-hearted, the
              hustlers, and the visionaries.
            </h1>
          </div>
          <div className="relative col-start-2 col-end-6 row-start-4 row-end-6 h-[50vh] self-stretch overflow-hidden">
            <Image
              src="/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg"
              width={1000}
              height={1000}
              alt="Studio Image"
              className="h-[120%] w-full object-cover"
              style={{
                objectPosition: "50% 50%",
              }}
            />
          </div>
          <div className="relative col-start-1 col-end-2 row-start-4 row-end-5 flex h-full max-h-[9.38rem] min-h-[6.25rem] w-full items-end justify-start">
            <a
              className="relative inline-block h-full w-3 max-w-full self-end overflow-hidden"
              href=""
            >
              <div className="absolute left-[0.38rem] top-0 z-[1] h-full w-0 bg-white/[0.35]" />
              <div className="absolute left-[0.38rem] top-0 h-full w-0 bg-white" />
            </a>
          </div>
          <div className="col-start-3 col-end-6 row-start-5 row-end-7 flex h-full w-full flex-col items-center justify-end self-end text-body-medium">
            <p className="z-10 mb-8">
              Since day one, we have focused on collaborative relationships,
              expansive creativity, and consistently delivering results.{" "}
              <strong className="font-extrabold">
                Crafting unbounded brands
              </strong>{" "}
              - that's what sets us apart from everyone else.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
