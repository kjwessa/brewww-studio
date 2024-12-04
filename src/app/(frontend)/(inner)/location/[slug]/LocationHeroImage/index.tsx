import Image from 'next/image'
import { Media } from '@/payload-types'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'

interface LocationHeroImageProps {
  image?: Media
}

export const LocationHeroImage: React.FC<LocationHeroImageProps> = ({ image }) => {
  const imageUrl = image && typeof image.url === 'string' ? image.url : '/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg'
  const imageAlt = image?.alt || 'Location Hero Image'

  return (
    <Section theme="dark" bg="default">
      <Container size="2xl" spacing="none">
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
      </Container>
    </Section>
  )
}
