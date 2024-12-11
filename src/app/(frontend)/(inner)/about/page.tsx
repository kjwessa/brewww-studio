import { AboutHeroSection } from './AboutHeroSection'
import Image from 'next/image'
import { AboutOffsetImageSection } from './AboutOffsetImageSection'
import { AboutWhySection } from './AboutWhySection'
import { AboutTestimonialSection } from './AboutTestimonialSection'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { AboutExpectedSection } from './AboutExpectedSection'
import { AboutValuesSection } from './AboutValuesSection'
import { AboutChristineKevinSection } from './AboutChristineKevinSection'
import { AboutTeamSection } from './AboutTeamSection'
import { AboutSmallTeamSection } from './AboutSmallTeamSection'
import { AboutHeartSuccessSection } from './AboutHeartSuccessSection'
import { AboutWhatYouCanExpectSection } from './AboutWhatYouCanExpectSection'
import { AboutForgetSection } from './AboutForgetSection'
import { AboutFutureSection } from './AboutFutureSection'
import { AboutAncestorsSection } from './AboutAncestorsSection'
import { AboutValOneSection } from './AboutValOneSection'
import { AboutValTwoSection } from './AboutValTwoSection'
import { AboutPrinciplesSection } from './AboutPrinciplesSection'
import { AboutPursuitSection } from './AboutPursuitSection'

export default async function About() {
  const payload = await getPayload({ config: configPromise })
  const testimonials = await payload.find({
    collection: 'testimonials',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <>
      <AboutHeroSection />
      <AboutOffsetImageSection />
      <AboutExpectedSection />
      <AboutValuesSection />
      <AboutChristineKevinSection />
      <AboutTeamSection />
      <AboutSmallTeamSection />
      <AboutHeartSuccessSection />
      <AboutTestimonialSection testimonials={testimonials.docs} />
      <AboutWhySection />
      <AboutWhatYouCanExpectSection />
      <AboutForgetSection />
      <AboutFutureSection />
      <AboutAncestorsSection />
      <AboutValOneSection />
      <AboutValTwoSection />
      <AboutPrinciplesSection />
      <AboutPursuitSection />

      <section className="relative h-[75vh] overflow-hidden text-stone-950">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.25&w=2200 550w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.5&w=2200 1100w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.75&w=2200 1650w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200 2200w" />
            <img
              className="h-full w-full object-cover"
              src="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200"
              alt="Stuurmen office interior"
            />
          </picture>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-8xl font-bold text-white uppercase">Kill off the Average</h2>
        </div>
      </section>

      <section className="bg-white py-24 text-[1.38rem] leading-7 font-light text-stone-950">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="mb-16 w-full">
              <h2 className="max-w-3xl text-7xl">Mediocrity does not stand a chance with us</h2>
            </div>
            <div className="mt-8 w-full lg:w-1/2 lg:pr-16">
              <div className="mb-12 text-[1.63rem] leading-8">
                <p className="text-xl">
                  Customers come and go. Many products barely meet expectations. Most brand promises
                  are never kept. Mediocrity is everywhere and fatal to business success. But
                  industry leaders are never mediocre. Never.
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
                  We work exclusively with companies that are keen to become or remain a leader
                  within their industry. Companies that dare to swim against the current. Companies
                  that are perfectly aware of the fact that the bar can always be set higher, and so
                  are willing to do whatever it takes to take their business to the next level. In
                  short: companies that are worthy of the label premium.
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
      </section>
    </>
  )
}
