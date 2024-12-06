'use client'

import { WorkCard } from '@/components/WorkCard'
import { Title } from '@/components/Title'
import { Work } from '@/payload-types'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Layout/Section'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { cn } from '@/utilities/cn'

interface LocationWorkSliderProps {
  workItems: Work[]
}

export function LocationWorkSlider({ workItems }: LocationWorkSliderProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <Section theme="dark">
      <Container size="full" spacing="xlarge">
        <div className="mb-10 flex w-full flex-wrap items-end justify-between px-2 sm:pr-6 sm:pl-6 xl:pr-12 xl:pl-12">
          <div className="w-[87.5%] px-2 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full" />
                <div className="ml-2 font-light">Our Work</div>
              </div>
              <Title
                el="h2"
                size="headline-medium"
                weight="medium"
                className="mt-3 mb-0 text-white lg:mt-5 lg:mb-0"
              >
                Our favourite Web design Projects
              </Title>
            </div>
          </div>
          <div className="mt-3 w-full px-2 lg:mt-0 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
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
        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current
            }}
            className="px-2 sm:px-6 xl:px-12"
          >
            {workItems.map((project) => (
              <SwiperSlide key={project.id}>
                <WorkCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              ref={navigationPrevRef}
              className="bg-brand-dark-surface hover:bg-brand-dark-surface/80 flex h-10 w-10 items-center justify-center rounded-full transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              ref={navigationNextRef}
              className="bg-brand-dark-surface hover:bg-brand-dark-surface/80 flex h-10 w-10 items-center justify-center rounded-full transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
