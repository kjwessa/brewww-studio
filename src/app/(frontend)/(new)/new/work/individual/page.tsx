import Image from "next/image";
import Link from "next/link";
import AudioImageOne from "/public/images/audio-one.jpg";
import AudioImageTwo from "/public/images/audio-two.jpg";
import AudioImageThree from "/public/images/audio-three.jpg";
import AudioImageFour from "/public/images/audio-four.jpg";
import AudioImageFive from "/public/images/audio-five.jpg";
import AudioImageSix from "/public/images/audio-six.jpg";
import AudioImageSeven from "/public/images/audio-seven.jpg";
import AudioImageEight from "/public/images/audio-eight.jpg";
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
              src={AudioImageSix}
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
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-[1fr_3fr] gap-5">
            <div className="col-start-1">
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-500">
                  <span>Quick Links</span>
                </h4>

                <ul className="space-y-4">
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#what-we-did"
                    >
                      What we did
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#highlights"
                    >
                      Highlights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block min-w-max text-brand-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-gold hover:after:w-full hover:after:bg-brand-gold"
                      href="#key-insights"
                    >
                      Key insights
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-start-2">
              <span className="text-sm uppercase text-stone-500">
                <sub>#AUDIOENTERTAINER</sub>
              </span>
              <div className="text-[1.75rem] leading-[2.5rem] text-white">
                Ready to elevate its digital presence, The Merry Beggars turned
                to Brewww for help with consolidating their full range of audio
                entertainment into a single platform. Today, it's the go-to
                destination for original stories and top-shelf audio
                productions, captivating millions of listeners worldwide and
                earning multiple industry accolades.
              </div>
              <div className="mt-8 leading-8">
                After a thorough partner selection process, Brewww was chosen to
                help The Merry Beggars become a leader in the audio
                entertainment industry. We developed a comprehensive digital
                platform that replaced several fragmented services, becoming the
                sole practical access point to The Merry Beggars' world of
                storytelling. We've since tackled multiple projects together,
                with our partnership continuing to flourish.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-end">
            <div className="mb-5 w-full max-w-[30.98rem]">
              <div className="relative h-72">
                <Image
                  src={AudioImageOne}
                  alt="Audio Image One"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-[47.09rem] self-start">
              <div className="relative h-[47.09rem]">
                <Image
                  src={AudioImageTwo}
                  alt="Audio Image Two"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="grid-rows-[183.109px_332px_288px_46.5px] gap-5">
          <h1 className="text-[8.75rem] font-bold uppercase leading-none text-white">
            What we did
          </h1>
          <div>
            <span className="text-sm uppercase text-stone-500">
              <sub>#AUDIOENTERTAINER</sub>
            </span>
            <div className="text-[1.75rem] leading-8 text-white">
              Brewww supported The Merry Beggars with a fully self-empowered
              team across design, web development, backend development and QA.
              We continue working closely with The Merry Beggars' product
              management to this day.
            </div>
          </div>
          <div>
            <p>
              <span>
                — Web and backend development for The Merry Beggars platform
                <br />
                — Design and development of features used by all The Merry
                Beggars digital products
                <br />
                — Cross-departmental collaboration
                <br />— Ongoing support and post-launch optimization{" "}
              </span>
            </p>

            <h4 className="text-xs font-bold uppercase text-stone-500">
              Links
            </h4>

            <p>
              <a className="text-red-700 underline" href="#">
                <span className="cursor-pointer">Website</span>
              </a>
              <br />
              <a className="text-red-700 underline" href="#">
                <span className="cursor-pointer">Mobile app</span>
              </a>
            </p>
          </div>
          <div className="row-start-2">
            <div>
              <div className="relative">
                <img
                  className="h-[41.16rem] w-[30.98rem] max-w-full"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTIwIiBoZWlnaHQ9IjE0ODgiPjwvc3ZnPg=="
                />
                <picture className="max-w-full">
                  <img
                    className="absolute bottom-0 left-0 top-0 h-[41.16rem] w-[30.98rem] max-w-full"
                    src="https://www.datocms-assets.com/57452/1706221189-porsche_03.png"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-zinc-950">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee-reverse flex items-center">
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
          <div
            className="animate-marquee-reverse flex items-center"
            aria-hidden="true"
          >
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] font-bold leading-none text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="container mx-auto px-4">
          <ul className="grid list-none grid-cols-[630.922px_374.844px_481.234px] grid-rows-[19.75rem] gap-5 text-neutral-400">
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  150K+
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Active app users in a few months post-release
                </span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  47
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Countries using app
                </span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] font-bold leading-none text-white">
                  2x
                </h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Winner of eMobility Excellence
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
