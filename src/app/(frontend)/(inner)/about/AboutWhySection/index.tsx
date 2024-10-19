import Image from "next/image";
import BrewwwLogo from "@/public/images/brewww-mark-black.png";

export function AboutWhySection() {
  return (
    <section className="relative overflow-hidden bg-white pb-48 pt-24 font-medium text-black">
      <div className="relative m-auto w-full max-w-[120.00rem] flex-col px-8">
        <div className="relative m-auto flex max-h-[93.00rem] min-h-screen w-full max-w-[100.50rem] items-center justify-center py-96">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-full border-2 border-brand-gold opacity-[0.10]"
                style={{
                  width: "75vw",
                  height: "75vw",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <Image
                id="brewww-logo"
                src={BrewwwLogo}
                className="inline-block h-auto w-[50vw] max-w-full align-middle opacity-[0.05]"
                alt="Logo Circle"
                width={850}
                height={850}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[2]">
            <div className="absolute bottom-auto left-0 right-auto top-[10%] h-40 w-56 overflow-hidden min-[1920px]:w-96">
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                src="https://bucket.brewww.studio/brewww/media/temp-kevin-team.jpeg"
                alt="Image 31"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute bottom-auto left-[49%] right-auto top-0 h-40 w-56 overflow-hidden min-[1920px]:left-[53%] min-[1920px]:w-96">
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                src="https://bucket.brewww.studio/brewww/media/temp-saint-dom.webp"
                alt="Image 21"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[19%] h-40 w-56 overflow-hidden min-[1920px]:top-[38%] min-[1920px]:w-96">
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                src="https://bucket.brewww.studio/brewww/media/temp-saint-john.webp"
                alt="Image 41"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute bottom-auto left-auto right-[17%] top-[81%] h-40 w-56 overflow-hidden min-[1920px]:right-[10%] min-[1920px]:top-[79%] min-[1920px]:w-96">
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                src="https://bucket.brewww.studio/brewww/media/temp-custom-texas-living.jpeg"
                alt="Image 51"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute bottom-auto left-[17%] right-auto top-[70%] h-40 w-56 overflow-hidden min-[1920px]:left-[7%] min-[1920px]:w-96">
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                src="https://bucket.brewww.studio/brewww/media/temp-sacred-heart.avif"
                alt="Image 61"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative z-10 w-full max-w-[69.25rem] text-display-small leading-none">
            <h2>
              Ou<span className="text-black">r</span> mission — <br />
              the internet reflect the beauty of the human spirit.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
