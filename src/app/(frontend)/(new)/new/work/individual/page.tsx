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
                      className="hover:text-brand-gold hover:after:bg-brand-gold text-brand-gold after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
                      href="#what-we-did"
                    >
                      What we did
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-brand-gold hover:after:bg-brand-gold text-brand-gold after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
                      href="#highlights"
                    >
                      Highlights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-brand-gold hover:after:bg-brand-gold text-brand-gold after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
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
                  alt="Porsche 02"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-[47.09rem] self-start">
              <div className="relative h-[47.09rem]">
                <Image
                  src={AudioImageTwo}
                  alt="Porsche 01"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
