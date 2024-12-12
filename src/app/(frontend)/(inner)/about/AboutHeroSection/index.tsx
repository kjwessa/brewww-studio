import Image from 'next/image'
import { Title } from '@/components/Title'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { CMSLink } from '@/components/Link'

export function AboutHeroSection() {
  return (
    <Section theme="dark" background="default">
      <Container size="xl" spacing="2xl" className="pr-24 pl-60">
        <div className="grid-rows-auto 1fr)] grid auto-cols-fr grid-cols-[repeat(6, gap-4">
          <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-start self-start">
            <div className="pb-5">+ About Our Studio</div>
          </div>
          <div className="col-start-1 col-end-6 row-start-2 flex h-full w-full flex-col items-center justify-center self-stretch leading-none">
            <Title el="h1" size="headline-medium">
              In a world obsessed with the next big thing, we're focused on crafting the next right
              thing. Our studio exists to transform bold visions into enduring brand realities.
            </Title>
            <CMSLink
              type="reference"
              reference={{ value: '', relationTo: 'posts' }}
              appearance="default"
            >
              <div className="relative cursor-pointer text-white">Read More</div>
            </CMSLink>
          </div>
          <div className="relative col-start-2 col-end-6 row-start-4 row-end-6 h-[50vh] self-stretch">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-md">
              <Image
                src="https://bucket.brewww.studio/brewww/media/IMG_0301.jpg"
                width={1000}
                height={1000}
                priority
                alt="Studio Image"
                className="h-[120%] w-full object-cover"
                style={{
                  objectPosition: '50% 50%',
                }}
              />
            </div>
          </div>

          <div className="text-body-medium col-start-3 col-end-6 row-start-5 row-end-7 flex h-full w-full flex-col items-center justify-end self-end">
            <p className="z-10 mb-8">
              Since day one, we have focused on collaborative relationships, expansive creativity,
              and consistently delivering results.{' '}
              <strong className="font-extrabold">Crafting unbounded brands</strong> - that's what
              sets us apart from everyone else.
              <br />
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
