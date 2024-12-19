import Image from 'next/image'
import { Media } from '@/payload-types'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

interface LocationHeroImageProps {
  image?: Media
}

export const LocationHeroImage: React.FC<LocationHeroImageProps> = ({ image }) => {
  const imageUrl =
    image && typeof image.url === 'string'
      ? image.url
      : '/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg'
  const imageAlt = image?.alt || 'Location Hero Image'

  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="none">
        <div className="relative flex w-full flex-wrap px-2 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
          <div className="relative h-[70vh] w-full overflow-hidden rounded-xl bg-zinc-900">
            <Image className="object-cover" src={imageUrl} alt={imageAlt} fill priority />
          </div>
        </div>
      </Container>
    </Section>
  )
}
