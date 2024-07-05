import Image from "next/image";

export function ServicesSpecialty() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="grid min-h-[40rem] grid-cols-2 border-t-2 border-solid border-stone-950">
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Our Specialty</h2>
            <p>
              At Brewww Studio, every project is a journey to explore new
              creative frontiers. Partnering closely with our clients, we aim to
              design captivating visuals that make an immediate impact and leave
              a lasting legacy.
            </p>
          </div>
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/beer-delivery.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid min-h-[40rem] grid-cols-2 border-t-2 border-solid border-stone-950">
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/broken-glass-light.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Your Growth</h2>
            <p>
              We are always looking ahead. As your dedicated digital design
              studio, we collaborate with you to tackle real-world challenges in
              a dynamic environment. From logo creation to comprehensive digital
              marketing campaigns, we implement diverse strategies that drive
              growth and ensure your brand thrives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
