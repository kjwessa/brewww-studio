import Image from 'next/image'
import { Title } from '@/components/Title'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'

export function AboutHeroSection() {
  return (
    <Section theme="dark" color="default">
      <Container size="xl" spacing="2xl" className="pr-24 pl-60">
        <div className="grid-rows-auto 1fr)] grid auto-cols-fr grid-cols-[repeat(6, gap-4">
          <div className="col-span-4 row-start-1 row-end-2 flex h-full w-full flex-col items-start justify-start self-start font-bold uppercase">
            <div className="pb-5">+ About Our Studio</div>
          </div>
          <div className="text-headline-medium col-start-1 col-end-6 row-start-2 flex h-full w-full flex-col items-center justify-center self-stretch leading-none">
            <Title el="h1" size="headline-medium">
              In a world obsessed with the next big thing, we're focused on crafting the next right
              thing. Our studio exists to transform bold visions into enduring brand realities.
            </Title>
          </div>
          <div className="relative col-start-2 col-end-6 row-start-4 row-end-6 h-[50vh] self-stretch">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg"
                width={1000}
                height={1000}
                priority
                alt="Blurred Studio Image"
                className="h-[120%] w-[120%] object-cover"
                style={{
                  objectPosition: '50% 50%',
                  filter: 'blur-sm(20px)',
                  transform: 'scale(1.1)',
                  marginLeft: '-10%',
                  marginTop: '-10%',
                }}
              />
            </div>
            <div className="relative z-10 h-full w-full overflow-hidden rounded-md">
              <Image
                src="/5ecf34cf4752d3558ae5764d_IMG_0301.1200.jpg"
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
