import { Team } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { Title } from '@/components/Title'

export function TeamHeroDetails({ team }: { team: Team }) {
  return (
    <section className="w-full bg-brand-dark-bg py-10 text-black lg:pb-16 lg:pt-16">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
        <div className="relative flex flex-wrap items-start justify-between">
          <div className="relative flex w-full flex-wrap px-2 lg:mb-0 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="order-1">
              <div className="mb-3 inline-flex w-auto items-center xl:absolute xl:left-[1.00rem] xl:top-[0.50rem]">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Meet {team.title}</div>
              </div>
              <div className="mb-5 w-full indent-48 text-5xl text-white lg:mb-10 lg:pr-16">
                <Title el="h3" size="headline-medium" className="mb-3 indent-48">
                  {team.heroTitle}
                </Title>
              </div>
            </div>
            <div className="order-3 mb-5 w-full">
              <div className="relative inline-flex items-center">
                <a
                  className="inline-flex"
                  href=""
                  style={{
                    outlineOffset: '2px',
                    outlineStyle: 'solid',
                    outlineWidth: '2px',
                  }}
                >
                  <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                    <div className="inline-flex">Get to know {team.title}</div>
                  </div>
                  <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
                </a>
                <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
                  <div className="relative overflow-hidden">
                    <div>
                      <svg
                        className="h-3 w-3"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </div>
                    <div className="absolute left-0 top-0">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-10 w-full xl:pr-10">
              <RichText content={team.heroDescription} enableGutter={false} enableProse={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}