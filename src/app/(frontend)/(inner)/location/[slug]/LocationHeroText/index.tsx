'use client'

import { Title } from '@/components/Title'

interface LocationHeroTextProps {
  title?: string
}

export function LocationHeroText({
  title = 'A Web Design Studio in Penscaola, FL.',
}: LocationHeroTextProps) {
  return (
    <section className="w-full bg-brand-dark-bg pb-10 pt-20 text-white lg:pb-16 lg:pt-32 xl:pt-40">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
        <div className="flex w-full flex-wrap justify-between">
          <div className="w-full px-2 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light">Web Design</div>
              </div>
              <Title el="h1" size="headline-large" className="mb-0 mt-3 lg:mb-0 lg:mt-5 lg:pr-20">
                {title}
              </Title>
            </div>
          </div>
          <div className="mt-5 w-full px-2 text-lg font-light text-zinc-400 lg:mt-10 lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="w-full space-y-10">
              <p>Here at Brewww, we offer honest advice, industry experience, and a great portfolio of work.</p>
              <p>UI/UX, wireframes, research and development — we understand all areas of web design. We can take a start-up business with nothing to a fully functioning brand online and offline. We can revamp an existing website or take a successful brand to the next level. Our talented and creative in-house web design team will work alongside you in collaboration to create a site that reflects your brand, talks to your audience with meaning and personality, and has great functionality across the latest devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
