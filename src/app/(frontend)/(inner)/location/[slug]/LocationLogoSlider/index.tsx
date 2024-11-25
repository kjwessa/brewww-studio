'use client'

// Next Imports
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

// Payload Imports
import { Brand, Media } from '@/payload-types'
import { LogoCard } from '@/components/LogoCard'

interface LocationLogoSliderProps {
  brands: Brand[]
}

export function LocationLogoSlider({ brands }: LocationLogoSliderProps) {
  const [width, setWidth] = React.useState(0)
  const topRowRef = React.useRef<HTMLDivElement>(null)
  const bottomRowRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (topRowRef.current) {
      setWidth(topRowRef.current.scrollWidth)
    }
  }, [])

  const topRowLogos = React.useMemo(() => {
    const processedLogos = brands
      .slice(0, 8)
      .map((brand) => ({
        id: brand.id,
        logo:
          typeof brand.logoLight === 'string'
            ? brand.logoLight
            : (brand.logoLight as Media)?.url || '',
      }))
      .filter((brand) => brand.logo)

    return [...processedLogos, ...processedLogos] // Duplicate for continuous loop
  }, [brands])

  const bottomRowLogos = React.useMemo(() => {
    const processedLogos = brands
      .slice(9, 18)
      .map((brand) => ({
        id: brand.id,
        logo:
          typeof brand.logoLight === 'string'
            ? brand.logoLight
            : (brand.logoLight as Media)?.url || '',
      }))
      .filter((brand) => brand.logo)

    return [...processedLogos, ...processedLogos] // Duplicate for continuous loop
  }, [brands])

  return (
    <section className="w-full bg-brand-dark-bg px-2 pb-20 text-black lg:pb-24 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 min-[1450px]:pb-32">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
        <div className="relative w-full overflow-hidden rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-zinc-900 py-20 lg:pb-24 lg:pt-24 min-[1450px]:pb-32 min-[1450px]:pt-32">
          <div>
            <div className="absolute left-0 top-0 h-12 w-[31.25%] bg-neutral-950 text-neutral-950 lg:h-20 lg:w-72">
              <svg
                className="absolute right-[0.13rem] top-0 h-10 w-10 lg:h-12 lg:w-12"
                fill="rgb(14, 15, 17)"
                version="1.1"
                viewBox="0 0 100 100"
                x="0"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" fill="rgb(14, 15, 17)" />
              </svg>
              <svg
                className="absolute bottom-[0.13rem] left-0 h-10 w-10 lg:h-12 lg:w-12"
                fill="rgb(14, 15, 17)"
                version="1.1"
                viewBox="0 0 100 100"
                x="0"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" fill="rgb(14, 15, 17)" />
              </svg>
            </div>

            <div className="flex w-full flex-wrap px-2 sm:pl-6 sm:pr-6 lg:justify-end xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
              <div className="flex w-auto flex-col items-start px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">Shameful Plug</div>
                  </div>
                  <h2 className="mb-0 mt-3 max-w-2xl text-5xl text-white lg:mb-0 lg:mt-5 xl:max-w-3xl">
                    We work with start-up businesses through to global organisations.
                  </h2>
                </div>
                <div className="mt-5 flex">
                  <div className="relative inline-flex items-center">
                    <Button
                      label="Join them"
                      intent="primary"
                      size="default"
                      icon="arrow"
                      iconPosition="right"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-10 w-full overflow-hidden text-white lg:mt-16" id="logo-grid">
              <motion.div
                ref={topRowRef}
                className="flex gap-2"
                animate={{
                  x: [-width / 2, 0],
                }}
                transition={{
                  duration: 80,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="flex gap-2">
                  {topRowLogos.map(({ id, logo }, index) => (
                    <div key={`${id}-${index}`} className="flex-shrink-0">
                      <LogoCard logo={logo} variant="default" />
                    </div>
                  ))}
                  {topRowLogos.map(({ id, logo }, index) => (
                    <div key={`${id}-${index}-duplicate`} className="flex-shrink-0">
                      <LogoCard logo={logo} variant="default" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="mx-auto mt-6 w-full overflow-hidden text-white lg:mt-8">
              <motion.div
                ref={bottomRowRef}
                className="flex gap-2"
                animate={{
                  x: [0, -width / 2],
                }}
                transition={{
                  duration: 80,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="flex gap-2">
                  {bottomRowLogos.map(({ id, logo }, index) => (
                    <div key={`${id}-${index}`} className="flex-shrink-0">
                      <LogoCard logo={logo} variant="default" />
                    </div>
                  ))}
                  {bottomRowLogos.map(({ id, logo }, index) => (
                    <div key={`${id}-${index}-duplicate`} className="flex-shrink-0">
                      <LogoCard logo={logo} variant="default" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
