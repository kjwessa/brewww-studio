// 'use client'

// import React from 'react'
// import { Technology, Media } from '@/payload-types'
// import { motion, useAnimationFrame } from 'framer-motion'
// import { LogoCard } from '@/components/LogoCard'
// import { Title } from '@/components/Title'

// interface LocationTechSliderProps {
//   technologies: Technology[]
// }

// export function LocationTechSlider({ technologies }: LocationTechSliderProps) {
//   const baseVelocity = -2
//   const baseX = React.useRef(0)
//   const [constraint, setConstraint] = React.useState(0)
//   const containerRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     if (containerRef.current) {
//       setConstraint(containerRef.current.scrollWidth / 2)
//       // Set initial position to create a seamless loop
//       baseX.current = 0
//     }
//   }, [])

//   const directionFactor = -1
//   const velocityFactor = 40

//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor * baseVelocity * (delta / velocityFactor)
//     baseX.current += moveBy

//     // Reset position when we've scrolled the full width
//     if (baseX.current <= -constraint) {
//       baseX.current = 0
//     }
//     if (baseX.current > 0) {
//       baseX.current = -constraint
//     }

//     if (containerRef.current) {
//       containerRef.current.style.transform = `translateX(${baseX.current}px)`
//     }
//   })

//   const logos = React.useMemo(() => {
//     const processedLogos = technologies
//       .filter((tech) => tech.logoLight)
//       .map((tech) => ({
//         id: tech.id,
//         logo:
//           typeof tech.logoLight === 'string'
//             ? tech.logoLight
//             : ((tech.logoLight as Media)?.url ?? '/images/logo-placeholder.png'),
//       }))
//       .filter((tech) => tech.logo)

//     return [...processedLogos, ...processedLogos] // Duplicate for continuous loop
//   }, [technologies])

//   return (
//     <section className="w-full bg-brand-dark-bg py-24 pb-20 text-black">
//       <div className="mb-32 flex w-full flex-wrap items-end justify-between px-2 text-5xl text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
//         <div className="px-2 text-white lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
//           <div className="flex flex-col items-start">
//             <Title el="h2" size="headline-small">
//               We use the latest technologies available to create timeless designs.
//             </Title>
//           </div>
//         </div>
//       </div>
//       <div className="w-full overflow-hidden">
//         <div className="w-full -ml-4 -mr-4">
//           <div
//             ref={containerRef}
//             className="flex gap-4 px-4"
//             style={{ willChange: 'transform', transform: 'translateX(0px)' }}
//           >
//             {logos.map(({ id, logo }, index) => (
//               <div key={`${id}-${index}`} className="flex-shrink-0">
//                 <LogoCard logo={logo} variant="surface" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
