'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

export const ImageGrow: React.FC = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <Section
      ref={sectionRef}
      className="bg-brand-dark-bg relative h-[80vh] w-full overflow-hidden text-white"
    >
      <Container size="full" spacing="none" className="h-full w-full overflow-hidden rounded-3xl">
        <motion.div className="h-full w-full overflow-hidden" style={{ scale }}>
          <motion.div
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              scale: imageScale,
            }}
          >
            <Image
              src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
              alt="Background"
              fill
              className="object-cover"
              style={{
                objectPosition: '50% 30%',
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ImageGrow
