import { AccordionCard } from '@/components/AccordionCard'
import { Faq } from '@/payload-types'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function LocationFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="3xl">
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <div className="flex flex-col items-start">
                <h2 className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Anything else?</div>
                </h2>
                <Title el="h2" size="headline-small" weight="medium" className="mt-5">
                  The answers to your questions.
                </Title>
                <div className="relative mt-8 inline-flex items-center">
                  <Button
                    label="View all FAQs"
                    intent="primary"
                    size="default"
                    icon="arrow"
                    iconPosition="right"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full">
              {faqs.map((faq) => (
                <AccordionCard key={faq.id} props={faq} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
