import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@/payload-types'

export type LandingHeroProps = {
  heroTitle: string
  locationText: string
  descriptionText: string
  image: Media
}

export function LandingHero({ heroTitle, locationText, descriptionText, image }: LandingHeroProps) {
  return (
    <section>
      <div className="relative z-3 flex h-[100svh] flex-col justify-between px-4 pt-16 pb-4">
        <h1 className="mx-0 my-3 text-[10.63rem] leading-none font-medium text-white">
          {heroTitle}
        </h1>
        <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-4">
          <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end text-white">
            {locationText}
          </div>
          <p className="col-span-3 col-start-4 row-start-1 row-end-2 text-xl text-white">
            {descriptionText}
          </p>
          <div
            className="col-start-12 col-end-13 row-start-1 row-end-2 h-6 w-6 self-end justify-self-end overflow-hidden"
            style={{
              gridArea: '1 / 12 / 2 / 13',
            }}
          >
            <Link href="#about">
              <Image
                className="inline-block h-6 w-6 max-w-full align-middle"
                src="/assets/arrow-down.svg"
                alt="Scroll down"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 z-1 h-[100svh] w-full overflow-hidden">
        <div className="relative h-[100svh] w-full overflow-hidden text-white">
          <Image
            src={image.url || ''}
            alt={image.alt}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 z-2 bg-black/[0.5]" />
      </div>
    </section>
  )
}
