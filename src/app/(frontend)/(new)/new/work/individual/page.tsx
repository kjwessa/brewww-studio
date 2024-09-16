import Image from "next/image";
import AboutImageEight from "/public/images/brewww-eight.jpeg";

export default function WorkIndividual() {
  return (
    <>
      <section className="bg-zinc-950 py-40 text-center text-[11.00rem] font-bold uppercase leading-none text-neutral-400">
        <h1 className="text-white">The Merry Beggars</h1>
      </section>
      <section className="mx-auto flex max-w-7xl items-center justify-between bg-zinc-950 px-4 py-2 text-sm text-white">
        <div className="uppercase">
          <span>Branding, Design, Development</span>
        </div>
        <div>
          <span>/ 2022</span>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={AboutImageEight}
              alt="Project image"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-16">
        <h1 className="text-center text-[7rem] font-bold uppercase leading-none text-white">
          Original Audio Entertainment for the Whole Family
        </h1>
      </section>
      <section className="grid grid-rows-[332px_192px] gap-5 bg-zinc-950 text-neutral-400">
        <div>
          <span className="text-sm uppercase text-stone-500">
            <sub>#AUDIOENTERTAINER</sub>
          </span>
          <div className="text-[1.75rem] leading-8 text-white">
            Ready to elevate its digital presence, The Merry Beggars turned to
            Brewww for help with consolidating their full range of audio
            entertainment into a single platform. Today, it's the go-to
            destination for original stories and top-shelf audio productions,
            captivating millions of listeners worldwide and earning multiple
            industry accolades.
          </div>
        </div>
        <div>
          After a thorough partner selection process, Brewww was chosen to help
          The Merry Beggars become a leader in the audio entertainment industry.
          We developed a comprehensive digital platform that replaced several
          fragmented services, becoming the sole practical access point to The
          Merry Beggars' world of storytelling. We've since tackled multiple
          projects together, with our partnership continuing to flourish.
        </div>
        <div className="row-start-1">
          <div>
            <h4 className="text-xs font-bold uppercase text-stone-500">
              <span>Quick Links</span>
            </h4>

            <p>
              <span>
                <a
                  className="text-red-700 underline"
                  href="https://www.brewww.com/#what-we-did"
                >
                  What we did
                </a>
                <br />
                <a
                  className="text-red-700 underline"
                  href="https://www.brewww.com/#highlights"
                >
                  Highlights
                </a>
                <br />
                <a
                  className="text-red-700 underline"
                  href="https://www.brewww.com/#key-insights"
                >
                  Key insights
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
