import Image from 'next/image'
import { Media } from '@/payload-types'

interface LocationHeroImageProps {
  image?: Media
}

export const LocationHeroImage: React.FC<LocationHeroImageProps> = ({ image }) => {
  const imageUrl = image && typeof image.url === 'string' ? image.url : '/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg'
  const imageAlt = image?.alt || 'Location Hero Image'

  return (
    <section className="bg-brand-dark-bg px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
      <div className="relative flex w-full flex-wrap px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
        <div className="relative h-[70vh] w-full overflow-hidden rounded-xl bg-zinc-900">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
          />
        </div>
      </div>
    </section>
  )
}
