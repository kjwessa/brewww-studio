import { Title } from '@/components/Title'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function HomeAboutSection() {
  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="3xl">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-12 py-16 sm:py-24 md:py-32">
            <div className="col-span-9 col-start-1">
              <Title size="headline-large">
                From fast-growing startups to experienced companies, we deliver functional design,
                high-quality code and well-thought strategy to increase your odds of success in the
                digital world.
              </Title>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
