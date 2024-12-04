import { WorkCard } from '@/components/WorkCard'
import { Title } from '@/components/Title'
import { Work } from '@/payload-types'
import { Button } from '@/components/Button'

interface LocationWorkSliderProps {
  workItems: Work[]
}

export function LocationWorkSlider({ workItems }: LocationWorkSliderProps) {
  return (
    <>
      <section className="flex w-full flex-wrap bg-brand-dark-bg py-24 text-black">
        <div className="mb-10 flex w-full flex-wrap items-end justify-between px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
          <div className="w-[87.5%] px-2 lg:w-auto lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Our Work</div>
              </div>
              <Title
                el="h2"
                size="headline-medium"
                weight="medium"
                className="mb-0 mt-3 text-white lg:mb-0 lg:mt-5"
              >
                Our favorite Web design Projects
              </Title>
            </div>
          </div>
          <div className="mt-3 w-full px-2 lg:mt-0 lg:w-auto lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="relative inline-flex items-center">
              <Button
                label="View our work"
                intent="primary"
                size="default"
                icon="arrow"
                iconPosition="right"
                href="#"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative m-auto h-auto w-full overflow-hidden">
            <div className="relative flex h-full w-full items-start">
              {workItems.map((project) => (
                <div
                  className="relative h-auto w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4"
                  key={project.id}
                >
                  <WorkCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
