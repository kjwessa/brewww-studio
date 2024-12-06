'use client'

import { Post } from '@/payload-types'
import { BlogCard } from '@/components/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'
import { Title } from '@/components/Title'
import 'swiper/css'
import 'swiper/css/navigation'

interface LocationBlogSliderProps {
  posts: Post[]
  title?: string
}

export function LocationBlogSlider({ posts, title }: LocationBlogSliderProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  if (!posts?.length) return null

  return (
    <Section theme="dark">
      <Container size="3xl" spacing="3xl">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left Column - Text and Button */}
          <div className="mb-10 lg:mb-0 lg:w-[400px] lg:shrink-0">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Still here? </div>
              </div>
              <Title el="h2" size="headline-small" weight="medium" className="mt-3 mb-8 lg:mt-5">
                Some bonus content from the team
              </Title>
              <div className="relative inline-flex items-center">
                <Button
                  label="View all posts"
                  intent="primary"
                  size="default"
                  icon="arrow"
                  iconPosition="right"
                  href="/journal"
                />
              </div>
              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  ref={navigationPrevRef}
                  className="bg-brand-dark-surface text-white/50 hover:text-white flex h-10 w-10 items-center justify-center rounded-full transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:bg-brand-dark-surface/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  ref={navigationNextRef}
                  className="bg-brand-dark-surface text-white/50 hover:text-white flex h-10 w-10 items-center justify-center rounded-full transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:bg-brand-dark-surface/80"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="flex-1 overflow-hidden">
            <div className="relative h-full">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
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
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                className="h-full"
              >
                {posts.map((post) => (
                  <SwiperSlide key={post.id} className="h-full">
                    <BlogCard post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
