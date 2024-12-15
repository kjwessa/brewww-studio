'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, cubicBezier } from 'motion/react'

interface ImageGrowProps {
  imageSrc: string
  altText?: string
}

export const ImageGrow: React.FC<ImageGrowProps> = ({
  imageSrc,
  altText = 'Background',
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 50%', '100% 100%']
  })

  // Create smoother animation by easing the scroll progress
  const smoothProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1],
    { ease: cubicBezier(0.43, 0.13, 0.23, 0.96) }
  )

  const maskScale = useTransform(
    smoothProgress,
    [0, 1],
    [0.75, 1]
  )

  const imageScale = useTransform(
    smoothProgress,
    [0, 1],
    [2, 1]
  )

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, 1]
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden bg-brand-dark-bg px-2 py-2"
    >
      <div className="h-full w-full">
        <motion.div
          className="h-full w-full overflow-hidden rounded-md"
          style={{
            scale: maskScale,
            opacity: isLoaded ? opacity : 0
          }}
          initial={false}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              scale: imageScale
            }}
            initial={false}
          >
            <Image
              src={imageSrc}
              alt={altText}
              priority
              fill
              className="rounded-md object-cover"
              style={{
                objectPosition: '50% 30%',
              }}
              onLoad={() => {
                setIsLoaded(true)
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImageGrow
