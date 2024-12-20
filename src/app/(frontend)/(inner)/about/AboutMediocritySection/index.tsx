import Image from 'next/image'
import { Section } from '@/components/layout/Section'
export function AboutMediocritySection() {
  return (
    <Section theme="inherit" background="default">
      <div className="container mx-auto py-24">
        <div className="flex flex-wrap justify-between">
          <div className="mb-16 w-full">
            <h2 className="max-w-3xl text-7xl">Mediocrity does not stand a chance with us</h2>
          </div>
          <div className="mt-8 w-full lg:w-1/2 lg:pr-16">
            <div className="mb-12 text-[1.63rem] leading-8">
              <p className="text-xl">
                Customers come and go. Many products barely meet expectations. Most brand promises
                are never kept. Mediocrity is everywhere and fatal to business success. But industry
                leaders are never mediocre. Never.
                <br />
                <br />
                We set high standards for ourselves and our clients. We are driven by the need to
                unleash full potential and get the most out of every situation. With top-notch
                branding, we do justice to our mantra: 'Kill off the average™'. Mediocrity is way
                too boring.
              </p>
            </div>
            <div className="mt-16 text-xl">
              <strong className="font-bold">The label premium</strong>
              <p className="mt-4">
                We work exclusively with companies that are keen to become or remain a leader within
                their industry. Companies that dare to swim against the current. Companies that are
                perfectly aware of the fact that the bar can always be set higher, and so are
                willing to do whatever it takes to take their business to the next level. In short:
                companies that are worthy of the label premium.
              </p>
            </div>
          </div>
          <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-16">
            <div className="aspect-w-16 aspect-h-9" style={{ height: '70%' }}>
              <Image
                className="h-full w-full object-cover"
                src="https://www.datocms-assets.com/63464/1661347408-stuurmen-office-interior.jpg?auto=format&h=1080&w=1920"
                alt="Stuurmen office interior"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
