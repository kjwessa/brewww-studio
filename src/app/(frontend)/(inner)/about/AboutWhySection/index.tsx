'use client'

import Image from 'next/image'
import BrewwwLogo from '@/public/images/brewww-mark-black.png'
import { Title } from '@/components/Title'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function AboutWhySection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Create different transform values for each image with pixel values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Create opacity transform for the logo
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.05])

  // Debug logs
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      console.log('Scroll Progress:', v)
      console.log('Transform values:', {
        y1: y1.get(),
        y2: y2.get(),
        y3: y3.get(),
        y4: y4.get(),
        y5: y5.get()
      })
    })
    return () => unsubscribe()
  }, [scrollYProgress, y1, y2, y3, y4, y5])

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-48 pt-24 font-medium text-black"
    >
      <div className="relative m-auto w-full max-w-[120.00rem] flex-col px-8">
        <div className="relative m-auto flex max-h-[93.00rem] min-h-screen w-full max-w-[100.50rem] items-center justify-center py-96">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-full border-2 border-brand-gold opacity-[0.10]"
                style={{
                  width: '75vw',
                  height: '75vw',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              ></div>
              <motion.div
                initial={{ opacity: 0 }}
                style={{ opacity: logoOpacity }}
                transition={{ type: "spring", stiffness: 100 }}
                className="inline-block"
              >
                <Image
                  id="brewww-logo"
                  src={BrewwwLogo}
                  className="h-auto w-[50vw] max-w-full align-middle rounded-md"
                  alt="Logo Circle"
                  width={850}
                  height={850}
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-2">
            <motion.div 
              initial={{ y: 0 }}
              style={{ y: y1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute bottom-auto left-0 right-auto top-[10%] h-40 w-56 overflow-hidden rounded-md"
            >
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle rounded-md"
                src="https://bucket.brewww.studio/brewww/media/temp-kevin-team.jpeg"
                alt="Image 31"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              initial={{ y: 0 }}
              style={{ y: y2 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute bottom-auto left-[49%] right-auto top-0 h-40 w-56 overflow-hidden rounded-md"
            >
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle rounded-md"
                src="https://bucket.brewww.studio/brewww/media/temp-saint-dom.webp"
                alt="Image 21"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              initial={{ y: 0 }}
              style={{ y: y3 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute bottom-auto left-auto right-0 top-[19%] h-40 w-56 overflow-hidden rounded-md"
            >
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle rounded-md"
                src="https://bucket.brewww.studio/brewww/media/temp-saint-john.webp"
                alt="Image 41"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              initial={{ y: 0 }}
              style={{ y: y4 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute bottom-auto left-auto right-[17%] top-[81%] h-40 w-56 overflow-hidden rounded-md"
            >
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle rounded-md"
                src="https://bucket.brewww.studio/brewww/media/temp-custom-texas-living.jpeg"
                alt="Image 51"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              initial={{ y: 0 }}
              style={{ y: y5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute bottom-auto left-[17%] right-auto top-[70%] h-40 w-56 overflow-hidden rounded-md"
            >
              <Image
                className="absolute bottom-auto left-0 right-auto top-0 inline-block h-full w-full max-w-full object-cover align-middle rounded-md"
                src="https://bucket.brewww.studio/brewww/media/temp-sacred-heart.avif"
                alt="Image 61"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
          <div className="relative z-10 w-full max-w-[69.25rem] text-display-small leading-none">
            <Title size="display-small">
              Our mission / <br />
              to craft human-first, future-forward brands.
            </Title>
          </div>
        </div>
      </div>
    </section>
  )
}
