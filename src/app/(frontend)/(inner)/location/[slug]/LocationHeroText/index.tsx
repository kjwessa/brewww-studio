import { Section } from '@/components/layout/Section'
import { Title } from '@/components/Title'
import { Container } from '@/components/layout/Container'
import { RichText } from '@/components/RichText'

interface LocationHeroTextProps {
  location: {
    locationCity: string
    locationState: string
    heroDescription: any
  }
}

export function LocationHeroText({ location }: LocationHeroTextProps) {
  const title = `A Web Design Studio in ${location.locationCity}, ${location.locationState}.`
  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large" spacingTop="3xl">
        <div className="flex w-full flex-wrap justify-between">
          <div className="w-full px-2 lg:w-[56.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light">Web Design</div>
              </div>
              <Title el="h1" size="headline-large" className="mt-3 mb-0 lg:mt-5 lg:mb-0 lg:pr-20">
                {title}
              </Title>
            </div>
          </div>
          <div className="mt-5 w-full px-2 text-lg font-light text-zinc-400 lg:mt-10 lg:w-[43.75%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <RichText data={location.heroDescription} className="w-full space-y-10" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
