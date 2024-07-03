import Image from "next/image";

export function ServicesIntro() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="mx-auto max-w-6xl px-8 py-12">
          <div>
            <h2 className="mb-16 text-4xl font-bold uppercase">
              <span className="pb-4 text-base">Our Speciality</span>A Cleveland
              branding studio with a passion for thumb stopping visuals,
              compelling storytelling, and web that works for you.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2 className="mb-3 text-4xl font-bold uppercase">Branding</h2>
              <div>
                <div className="relative h-32 w-full pb-[66%]">
                  <Image
                    src="/images/branding-books.1920.jpg"
                    alt="text"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <p className="py-3 text-base">
                We distill your companys essence into a compelling visual and
                narrative identity. Our branding process goes beyond logos and
                color palettes—we create a kinetic brand experience that
                resonates with your audience and propels your business forward.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-4xl font-bold uppercase">Websites</h2>
              <div>
                <div className="relative h-32 w-full pb-[66%]">
                  <Image
                    src="/images/background-capabilities.1200.jpg"
                    alt="text"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <p className="py-3 text-base">
                In the digital realm, we craft immersive online experiences that
                captivate and convert. Our websites are more than just pretty
                interfaces; theyre strategic tools designed to engage your
                audience and drive meaningful action.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-4xl font-bold uppercase">Content</h2>
              <div>
                <div className="relative h-32 w-full pb-[66%]">
                  <Image
                    src="/images/sony-body-and-lenses.1920.jpg"
                    alt="text"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <p className="py-3 text-base">
                We breathe life into your brand through powerful storytelling
                and captivating visuals. From illustrations to photography, we
                create content that not only speaks to your audience but moves
                them to action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
