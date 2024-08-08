import Image from "next/image";

export function ServicesHero() {
  return (
    <>
      <div className="relative flex bg-white text-stone-950">
        <h1 className="absolute bottom-0 left-0 right-[17.88rem] top-[23.75rem] z-[1] p-16 text-[5rem] leading-none text-white">
          <div className="max-w-4xl">
            <div>Creative storytelling for unbounded brands</div>
          </div>
        </h1>

        <div className="relative flex h-[50.46rem] w-full flex-grow items-end object-cover">
          <Image
            src="/images/Aldridge-02665.1200-p-1080.jpeg"
            alt="text"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
