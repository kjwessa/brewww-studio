'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterProps {
  beforeImage?: string
  afterImage?: string
  backgroundColor?: string
}

export function BeforeAfter({
  beforeImage = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/iET-before.jpg?w=1200&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1655978745&s=8b81e680576f59e16cff40eb5432db70',
  afterImage = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/iET-after.jpg?w=1200&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1655978742&s=163e92db516a40aba6e7dd4ada22202d',
  backgroundColor = 'bg-neutral-950',
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const mouseX = e.clientX - containerRect.left
      const newPosition = (mouseX / containerWidth) * 100
      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }
  }, [])

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [handleMouseMove, handleMouseUp],
  )

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    <section
      className={`${backgroundColor} px-2 text-black min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60 sm:px-6 xl:px-12`}
    >
      <div className="flex w-full flex-wrap">
        <div className="w-full px-2 lg:px-3 xl:px-4">
          <div ref={containerRef} className="relative h-[52.63rem] overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image src={afterImage} alt="After" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="relative h-full w-full">
                <Image src={beforeImage} alt="Before" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8L22 12L18 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8L2 12L6 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-50 flex w-full justify-between p-4 text-sm text-white">
              <div className="rounded-full bg-zinc-900 px-2 py-1">Before</div>
              <div className="rounded-full bg-zinc-900 px-2 py-1">After</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
