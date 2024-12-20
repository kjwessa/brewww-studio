'use client'

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function CategorySectionSkeleton() {
  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large">
        <div className="animate-pulse">
          {/* Title Skeleton */}
          <div className="h-8 w-48 rounded-md bg-white/10" />
          
          {/* First Row - 2 columns */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-col space-y-4">
                <div className="relative h-0 w-full pb-[66%] overflow-hidden rounded-md bg-white/10" />
                <div className="space-y-3">
                  <div className="h-4 w-24 rounded bg-white/10" />
                  <div className="h-6 w-full rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 columns */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col space-y-4">
                <div className="relative h-0 w-full pb-[66%] overflow-hidden rounded-md bg-white/10" />
                <div className="space-y-3">
                  <div className="h-4 w-24 rounded bg-white/10" />
                  <div className="h-6 w-full rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
