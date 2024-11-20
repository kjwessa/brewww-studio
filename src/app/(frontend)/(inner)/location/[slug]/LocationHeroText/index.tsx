'use client'

import { RichText } from '@/components/RichText/index'

interface LocationHeroTextProps {
  title?: string
  description?: {
    root: {
      children: any[]
    }
  }
}

export function LocationHeroText({
  title = 'A Web Design Studio in Penscaola, FL.',
  description,
}: LocationHeroTextProps) {
  return (
    <section className="w-full bg-brand-dark-bg pb-10 pt-20 text-black lg:pb-16 lg:pt-32 xl:pt-40">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="flex w-full flex-wrap justify-between">
          <div className="w-full px-2 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Web Design</div>
              </div>
              <h1 className="mb-0 mt-3 text-[4.25rem] leading-none text-white lg:mb-0 lg:mt-5 lg:pr-20">
                {title}
              </h1>
            </div>
          </div>
          <div className="mt-5 w-full px-2 text-lg font-light text-zinc-400 lg:mt-10 lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="w-full">{description && <RichText content={description} />}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
