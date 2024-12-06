import { Section } from '@/components/Layout/Section'
import { Title } from '@/components/Title'
import { Container } from '@/components/Layout/Container'

interface LocationHeroTextProps {
  location: {
    locationCity: string
    locationState: string
  }
}

export function LocationHeroText({ location }: LocationHeroTextProps) {
  const title = `A Web Design Studio in ${location.locationCity}, ${location.locationState}.`
  return (
    <Section theme="dark">
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
            <div className="w-full space-y-10">
              <p>
                Here at Brewww, we offer honest advice, industry experience, and a great portfolio
                of work.
              </p>
              <p>
                UI/UX, wireframes, research and development — we understand all areas of web design.
                We can take a start-up business with nothing to a fully functioning brand online and
                offline. We can revamp an existing website or take a successful brand to the next
                level. Our talented and creative in-house web design team will work alongside you in
                collaboration to create a site that reflects your brand, talks to your audience with
                meaning and personality, and has great functionality across the latest devices.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
