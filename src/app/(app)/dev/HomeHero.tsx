import Image from "next/image";

export function HomeHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="relative min-h-[60vh] content-stretch items-start justify-start px-24 py-60 font-light">
        <div className="m-auto max-w-7xl px-5 py-12">
          <h1 className="mx-0 my-3 min-h-[0vw] text-center text-[4.28rem] font-black leading-none">
            We help brands see the bigger picture.
          </h1>
        </div>
      </div>
    </div>
  );
}
