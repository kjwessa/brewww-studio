// Next Imports
import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Payload Imports
// import { PayloadRedirects } from '@/components/PayloadRedirects'
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
import { LocationBlogSlider } from './LocationBlogSlider'

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

  const [faqs, technologies, workItems, brands, posts] = await Promise.all([
    payload.find({
      collection: 'faq',
      limit: 100,
    }),
    payload.find({
      collection: 'technologies',
      limit: 100,
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'work',
      limit: 6,
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
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'posts',
      limit: 6,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
  ])

  return {
    location: location.docs[0],
    faqs: faqs.docs,
    technologies: technologies.docs || [],
    workItems: workItems.docs || [],
    brands: brands.docs || [],
    posts: posts.docs || [],
  }
}

export default async function LocationPage({ params, searchParams }: LocationPageProps) {
  const resolvedParams = await params
  if (!resolvedParams.slug) {
    notFound()
  }

  const { technologies, location, faqs, workItems, brands, posts } = await getPageData({
    slug: resolvedParams.slug,
  })

  return (
    <>
      <LocationHeroText
        location={{ locationCity: location.locationCity, locationState: location.locationState }}
      />
      <LocationHeroImage image={location.image as Media} />
      <LocationHeroDetails />
      <LocationImageLeft />
      <LocationImageRight />
      <LocationLogoSlider brands={brands} />
      <LocationServiceDetails />
      <LocationTechSlider technologies={technologies} />
      <LocationFAQ faqs={faqs} />
      <LocationWorkSlider workItems={workItems} />
      <LocationBlogSlider posts={posts} />
    </>
  )
}
