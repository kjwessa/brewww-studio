'use client'

import { Post } from '@/payload-types'
import { Container } from '@/components/Layout/Container'
import { Section } from '@/components/Layout/Section'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/utilities/cn'

import 'swiper/css'
import 'swiper/css/navigation'

import { FeaturedPostCard } from '../FeaturedPostCard'

export function FeaturedPostSection({ postsFeatured }: { postsFeatured: Post[] }) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  // Filter to only show 4 featured posts
  const featuredPosts = postsFeatured.filter(post => post.featured).slice(0, 4)

  return (
    <Section theme="dark" color="default">
      <Container size="full" spacing="large">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="mb-6 text-5xl font-bold">Blog</h1>
            <p className="mb-0 text-2xl text-white/80">
              News and insights on all things design by Brewww
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <button
              ref={navigationPrevRef}
              disabled={isBeginning}
              className={cn(
                "bg-white/10 text-white flex h-12 w-12 items-center justify-center rounded-full transition-all",
                isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white/20"
              )}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              ref={navigationNextRef}
              disabled={isEnd}
              className={cn(
                "bg-white/10 text-white flex h-12 w-12 items-center justify-center rounded-full transition-all",
                isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white/20"
              )}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
      <div className="relative overflow-visible">
        <Container size="full" spacing="none">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.75}
            initialSlide={0}
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
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.75,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.75,
                spaceBetween: 32,
              },
            }}
            className="!overflow-visible px-6 md:px-10"
          >
            {featuredPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <FeaturedPostCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </Section>
  )
}
