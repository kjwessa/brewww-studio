// Next Imports
import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Payload Imports
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Location } from '@/payload-types'
import type { Media } from '@/payload-types'

// Components
import { LocationWorkSlider } from './LocationWorkSlider'
import { LocationLogoSlider } from './LocationLogoSlider'
import { LocationTechSlider } from './LocationTechSlider'
import { LocationHeroText } from './LocationHeroText'
import { LocationHeroImage } from './LocationHeroImage'
import { LocationImageLeft } from './LocationImageLeft'
import { LocationImageRight } from './LocationImageRight'
import { LocationHeroDetails } from './LocationHeroDetails'
import { LocationServiceDetails } from './LocationServiceDetails'
import { LocationFAQ } from './LocationFAQ'

// Add type definition for page props
type LocationPageProps = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const locations = await payload.find({
    collection: 'locations',
    limit: 1000,
    overrideAccess: false,
  })
  return (
    locations.docs?.map(({ slug }) => ({
      params: { slug },
    })) || []
  )
}

async function getPageData({ slug }: { slug: string }) {
  const payload = await getPayload({ config: configPromise })
  const location = await payload.find({
    collection: 'locations',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!location?.docs?.[0]) {
    notFound()
  }

  const [faqs, technologies, workItems, brands] = await Promise.all([
    payload.find({
      collection: 'faq',
      limit: 1000,
    }),
    payload.find({
      collection: 'technologies',
      limit: 1000,
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'work',
      limit: 4,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'brands',
      limit: 100,
      where: {
        and: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            logoLight: {
              exists: true,
            },
          },
        ],
      },
    }),
  ])

  return {
    location: location.docs[0],
    faqs: faqs.docs,
    technologies: technologies.docs || [],
    workItems: workItems.docs || [],
    brands: brands.docs || [],
  }
}

export default async function LocationPage({ params, searchParams }: LocationPageProps) {
  const resolvedParams = await params
  if (!resolvedParams.slug) {
    notFound()
  }

  const { technologies, location, faqs, workItems, brands } = await getPageData({
    slug: resolvedParams.slug,
  })

  return (
    <>
      <LocationHeroText title={location.heroTitle} description={location.heroDescription} />
      <LocationHeroImage image={location.heroImage as Media} />
      <LocationHeroDetails />
      <LocationImageLeft />
      <LocationImageRight />
      <LocationLogoSlider brands={brands} />
      <LocationServiceDetails />

      <section className="bg-neutral-950 px-2 pb-10 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20">
        <div className="flex w-full flex-wrap">
          <div className="relative w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="relative flex w-full cursor-pointer flex-wrap lg:min-h-[30.00rem]">
              <a className="absolute left-0 top-0 z-20 h-full w-full" href="#">
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start p-6 lg:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold md:h-16 md:w-16">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M384 256L0 32v448l384-224z" fill="rgb(0, 0, 0)" />
                    </svg>
                  </div>
                </div>
              </a>
              <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl bg-zinc-800">
                <picture>
                  <source type="image/webp" />

                  <Image
                    className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                    src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Stoneletters-testimonial-large-image.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706092604&s=c41f8629c457388ea6f5ef69c6dd83d8"
                    alt="Stoneletters"
                    fill
                  />
                </picture>
              </div>
              <div className="absolute left-0 top-0 z-20 m-2 flex flex-col items-start rounded-3xl md:m-6 lg:m-10">
                <div className="relative mt-6 text-white">
                  <div className="absolute left-[0.75rem] top-0 z-20 lg:left-[1.50rem]">
                    <svg
                      className="h-5 w-5 lg:left-[1.50rem] lg:h-8 lg:w-8"
                      fill="rgb(255, 255, 255)"
                      viewBox="0 0 17 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"
                        fill="rgb(255, 255, 255)"
                      />
                    </svg>
                  </div>
                  <div className="py-2 text-5xl lg:pb-3 lg:pt-3">
                    <span className="overflow-hidden text-ellipsis pl-14 lg:pl-24">
                      Brewww created  
                      <br />
                    </span>

                    <span className="overflow-hidden text-ellipsis pl-3 lg:pl-5">
                      something better than I ever  
                      <br />
                    </span>

                    <span className="overflow-hidden text-ellipsis pl-3 lg:pl-5">
                      could have imagined  
                      <br />
                    </span>
                  </div>
                </div>
                <div className="relative -mt-0 w-auto rounded-bl-xl rounded-br-xl p-3 lg:p-4">
                  <svg
                    className="absolute right-[0.13rem] top-[0.50rem] h-8 w-8 text-neutral-950 lg:top-[1.00rem]"
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
                  <div className="flex items-end">
                    <div className="relative inline-flex h-9 w-9 overflow-hidden rounded-lg lg:h-12 lg:w-12">
                      <div className="relative w-full overflow-hidden pt-12">
                        <picture className="absolute left-0 top-0 h-full w-full">
                          <source type="image/webp" />

                          <Image
                            className="absolute left-0 top-0 h-full w-full max-w-full object-cover"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Hannah-Wessel-Profile-image.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706092693&s=faf1949d42c584e5ae150f7d5f9986ef"
                            alt="Hannah Wessel"
                            fill
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="ml-2 mr-0 lg:ml-3 lg:mr-0">
                      <div className="text-white">Hannah Wessa</div>
                      <div className="text-sm font-light text-zinc-400">Something</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 z-30 rounded-tl-3xl pl-4 pt-4">
                <svg
                  className="absolute bottom-0 left-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
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
                  className="absolute right-0 top-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
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
                <div className="inline-flex flex-col items-start lg:flex-row">
                  <div className="hidden lg:inline-flex">
                    <div className="relative inline-flex items-center">
                      <a
                        className="inline-flex"
                        href="#"
                        style={{
                          outlineOffset: '2px',
                        }}
                      >
                        <div className="inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                          <div className="inline-flex">Play video</div>
                        </div>
                        <div className="-ml-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
                      </a>
                      <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
                        <div className="relative overflow-hidden">
                          <div>
                            <svg
                              className="h-3 w-3"
                              fill="rgb(1, 2, 2)"
                              height="16"
                              viewBox="0 0 384 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M384 256L0 32v448l384-224z" fill="rgb(1, 2, 2)" />
                            </svg>
                          </div>
                          <div className="absolute left-0 top-0">
                            <svg
                              className="h-3 w-3"
                              fill="rgb(1, 2, 2)"
                              height="16"
                              viewBox="0 0 384 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M384 256L0 32v448l384-224z" fill="rgb(1, 2, 2)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex items-center lg:ml-6 lg:mr-0">
                    <a
                      className="inline-flex"
                      href="#"
                      style={{
                        outlineOffset: '2px',
                      }}
                    >
                      <div className="inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-zinc-800 px-5 py-2 text-white">
                        <div className="inline-flex">View all testimonials</div>
                      </div>
                      <div className="-ml-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-zinc-800" />
                    </a>
                    <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center text-white">
                      <div className="relative overflow-hidden">
                        <div>
                          <svg
                            className="h-3 w-3"
                            fill="rgb(255, 255, 255)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(255, 255, 255)"
                            />
                          </svg>
                        </div>
                        <div className="absolute left-0 top-0">
                          <svg
                            className="h-3 w-3"
                            fill="rgb(255, 255, 255)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(255, 255, 255)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationWorkSlider workItems={workItems} />
      <LocationTechSlider technologies={technologies} />
      <LocationFAQ faqs={faqs} />
    </>
  )
}
