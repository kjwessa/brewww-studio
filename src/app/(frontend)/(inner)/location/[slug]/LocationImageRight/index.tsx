import Image from 'next/image'
import { Button } from '@/components/Button'

export function LocationImageRight() {
  return (
    <section className="bg-brand-dark-bg px-2 py-20 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
      <div className="flex w-full flex-col lg:flex-row-reverse lg:justify-between">
        <div className="relative mb-10 inline-flex w-full px-2 lg:mb-0 lg:w-2/4 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="relative w-full pb-[100%] md:pb-[56.25%] lg:h-full lg:pb-0">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl bg-zinc-900">
              <Image
                className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                src="/bg-services.1200.jpg"
                alt="Services"
                fill
              />
            </div>
          </div>
        </div>
        <div className="inline-flex w-full items-center px-2 lg:min-h-[35.00rem] lg:w-2/4 lg:justify-center lg:pb-20 lg:pl-3 lg:pr-3 lg:pt-20 xl:pl-4 xl:pr-4">
          <div className="w-full lg:max-w-xl">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">
                  We approach every project with a clear vision.
                </div>
              </div>
              <h2 className="mb-0 mt-3 text-[2.50rem] leading-none text-white lg:mb-0 lg:mt-5">
                We like to remove the 'waffle' and design beautiful, easy to use websites that are
                functional.
              </h2>
            </div>
            <div className="mt-8 w-full text-lg font-light text-zinc-400">
              <p className="mb-6">
                We don't <em className="italic">just</em> build pretty websites. Here at Brewww, we
                understand all aspects of a successful site, from design through web development and
                testing, to SEO and Hosting. We tailor our service to the client and the project
                requirements.
              </p>
            </div>
            <div className="relative mt-8 inline-flex items-center">
              <Button
                label="Start a project today"
                intent="primary"
                size="default"
                icon="arrow"
                iconPosition="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}