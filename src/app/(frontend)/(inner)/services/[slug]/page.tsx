// Next Imports
import React, { cache } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Image from 'next/image'

// Payload Imports
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Service } from '@/payload-types'

// Components
import { generateMeta } from '@/utilities/generateMeta'

export const revalidate = 3600

export async function generateStaticParams() {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    return []
  }

  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = services.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ServicePage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = `/services/${slug}`
  const service = await queryServiceBySlug({ slug })

  if (!service) return <PayloadRedirects url={url} />

  return (
    <>
      <PayloadRedirects disableNotFound url={url} />
      <section className="bg-white py-24 text-black">
        <div className="flex w-full items-end px-16 pt-44 text-center">
          <div className="flex w-full flex-wrap justify-center">
            <h1 className="flex flex-col justify-center text-[5.13rem] leading-none">
              <div className="table pr-1">
                <div>
                  <h1>Branding & System Design</h1>
                </div>
              </div>
            </h1>
            <div className="flex w-full justify-between pt-16 pb-4 text-2xl font-bold uppercase">
              <h2>Service</h2>
              <h2>01/03</h2>
            </div>
          </div>
        </div>

        <div className="relative flex h-0 w-full items-end pb-[66%]">
          <Image src="/images/branding-books.1920.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="px-16 pt-20">
          <div className="m-auto w-full max-w-[120.00rem]">
            <div className="flex">
              <div className="flex w-[55%] flex-col pr-[calc(min(6vw,_115px)_*_2)] text-3xl font-bold uppercase">
                <h2 className="overflow-hidden">
                  <div className="">
                    <h2>Your brand tells the story of your company values</h2>
                  </div>
                </h2>
              </div>

              <div className="flex w-[45%] flex-col">
                <p className="whitespace-pre-line">
                  A bold, strategic brand identity is what lies behind a strong first impression.
                  There are two parts to a strong brand: strategy and identity. Your brand strategy
                  personifies your business, and your brand identity visualizes it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg w-full pt-20 pb-16 text-white">
        <div className="mx-auto w-full max-w-[118.75rem] px-[4%]">
          <h3 className="inline-block text-lg uppercase min-[671px]:pl-6">
            Beautifully bespoke websites
          </h3>
          <h2 className="text-[8.25rem] leading-none font-bold uppercase min-[769px]:mt-8">
            A leading Cleveland creative studio
          </h2>
          <p className="text-4xl min-[769px]:mt-12">
            Since 2017 we&apos;ve been in love with crafting beautiful web experiences and have
            never looked back. In fact, we&apos;re so confident in its abilities we consider
            ourselves a leading creative studio in Cleveland, Ohio, and even the world.
          </p>
          <div className="mt-8">
            <a
              className="relative inline-block overflow-hidden rounded-full bg-white text-center text-lg text-neutral-900 uppercase"
              href=""
            >
              <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                Let&apos;s Work Together
                <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
              </span>
            </a>
          </div>
        </div>
        <div className="m-auto w-[92%]">
          <div className="relative">
            <ul className="list-none flex-wrap min-[769px]:flex">
              <li className="relative list-item min-[769px]:w-[30.9474%]">
                <span className="absolute top-0 left-0 z-2 w-full text-lg uppercase min-[1025px]:p-8">
                  Websites
                </span>

                <a className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <Image
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2022/03/heritage-driven-header-588x700.jpg"
                      alt="Heritage Driven automotive project showcase"
                      width={588}
                      height={700}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </picture>
                </a>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="grow">
                    <h5>
                      <a className="inline-block" href="">
                        Heritage Driven
                      </a>
                    </h5>

                    <p className="opacity-50">Redefining an automotive icon.</p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <a
                      className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer min-[1025px]:pt-1.5 min-[1025px]:pr-3.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 lg:pt-1.5 lg:pr-3.5 lg:pb-1.5 lg:pl-3.5">
                        View
                        <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-1.5 min-[1025px]:pr-3.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 lg:pt-1.5 lg:pr-3.5 lg:pb-1.5 lg:pl-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="relative list-item min-[769px]:ml-auto min-[769px]:w-[65.4737%] md:mt-12">
                <span className="absolute top-0 left-0 z-2 w-full text-lg uppercase min-[1025px]:p-8">
                  Shops
                </span>

                <a className="w-full overflow-hidden" href="">
                  <picture className="h-auto max-w-full cursor-pointer">
                    <Image
                      className="h-auto w-full max-w-full"
                      src="https://www.fhoke.com/wp-content/uploads/2021/12/combat-fuel-header-1244x700.jpg"
                      alt="Combat Fuel supplement product showcase"
                      width={1244}
                      height={700}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </picture>
                </a>

                <div className="flex justify-between min-[1025px]:mt-5">
                  <div className="grow">
                    <h5>
                      <a className="inline-block" href="">
                        Combat Fuel
                      </a>
                    </h5>

                    <p className="opacity-50">Giving supplements a shake-up.</p>
                  </div>

                  <div className="ml-5 text-lg uppercase">
                    <a
                      className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-center"
                      href=""
                    >
                      <span className="relative cursor-pointer min-[1025px]:pt-1.5 min-[1025px]:pr-3.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 lg:pt-1.5 lg:pr-3.5 lg:pb-1.5 lg:pl-3.5">
                        View
                        <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-1.5 min-[1025px]:pr-3.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 lg:pt-1.5 lg:pr-3.5 lg:pb-1.5 lg:pl-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-black sm:py-32">
        <div className="container mx-auto w-[92%] max-w-[77.75rem]">
          <h2 className="inline-block text-lg uppercase min-[671px]:pl-6">
            Powerful and scalable WordPress agency websites
          </h2>

          <p className="text-4xl min-[1025px]:mt-12 lg:mt-8">
            From interactive brochure sites and online stores to digital products that make your
            life easier, you can rely on WordPress to make your project a huge success. We'll plan,
            design, and deliver your website on time and within budget.
          </p>
        </div>
      </section>

      <section className="bg-brand-dark-bg text-white min-[1600px]:pt-20 min-[1600px]:pb-20 min-[1920px]:pt-28 min-[1920px]:pb-28 min-[1921px]:pt-28 min-[1921px]:pb-28">
        <div className="m-auto w-[92%] min-[769px]:flex min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[118.75rem]">
          <div className="min-[769px]:w-[65.4737%]">
            <h6 className="inline-block text-lg uppercase min-[671px]:pl-6">How can we help?</h6>

            <h2 className="min-[1025px]:mt-16 lg:mt-10" />
          </div>
        </div>

        <div className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]">
          <ul className="ml-auto grid grid-cols-1 gap-8 min-[1025px]:w-[65.4737%] md:grid-cols-2 lg:w-full">
            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Custom plugins + integrations</span>
              </h2>
              <p>
                From APIs to CRMs to payment gateways, we&apos;ll help your WordPress site integrate
                with third parties your business relies on. We will reduce the reliance on
                unnecessary off-the-shelf plugins and build functions into the theme to speed
                everything up. We can also create custom WordPress plugins to solve your
                functionality needs.
              </p>
              <a
                className="relative mt-4 inline-block overflow-hidden rounded-full bg-white text-center text-lg text-neutral-900 uppercase"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Learn More
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Page builder editor</span>
              </h2>
              <p>
                We&apos;ll use a powerful content editor allowing you to build out new and beautiful
                pages without needing to recruit your own designer. That&apos;s where you&apos;ll
                start getting a real return on your investment. You&apos;ll only need to call on us
                to bake in new functionality or content blocks to present copy and images
                differently.
              </p>
              <a
                className="relative mt-4 inline-block overflow-hidden rounded-full bg-white text-center text-lg text-neutral-900 uppercase"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Learn More
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">WordPress hosting</span>
              </h2>
              <p>
                We&apos;re not just experienced in building WordPress websites; we&apos;re also
                experienced in hosting and maintaining them. Hosting with us ensures we can support
                any issue uninterrupted. With a fully managed, dedicated cloud infrastructure, your
                WordPress website will be hosted on one of the most reliable and secure options.
              </p>
              <a
                className="relative mt-4 inline-block overflow-hidden rounded-full bg-white text-center text-lg text-neutral-900 uppercase"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Learn More
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">WordPress monitoring</span>
              </h2>
              <p>
                Our WordPress agency team provides a responsive WordPress maintenance and reactive
                support service. We protect your website&apos;s framework and plugins, ensuring they
                stay up-to-date to minimise potential downtime and ensure that any core updates made
                by WordPress or plugin developers remain working.
              </p>
              <a
                className="relative mt-4 inline-block overflow-hidden rounded-full bg-white text-center text-lg text-neutral-900 uppercase"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Learn More
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-brand-dark-bg text-white min-[769px]:flex min-[769px]:items-center">
        <div className="overflow-hidden min-[769px]:w-[48.2105%]">
          <Image
            className="h-auto w-full max-w-full"
            src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Intro-Tall.jpg"
            alt="A tall image showcasing WordPress interface and features, demonstrating its versatility as a content management system"
            width={800}
            height={1200}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="min-[1025px]:w-[39.5789%] md:mt-10 lg:w-[48.2105%]">
          <div>
            <h3 className="text-[7.50rem] leading-none uppercase">
              <span className="text-[6.25rem] leading-none">What is WordPress</span>
            </h3>

            <p className="text-[1.38rem] leading-7 min-[1025px]:mt-12 lg:mt-8">
              WordPress is an online, open-source website creation tool. In simple terms, WordPress
              is a tool that we lean on to manage and maintain a websites content. Brands like
              TechCrunch and Mashable use WordPress as do many other famous blogs, music sites, and
              Fortune 500 companies, so you&apos;re in good company when choosing to use it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg pt-20 pb-20 text-white">
        <div className="m-auto mb-16 w-[92%]">
          <div className="min-[769px]:flex min-[769px]:items-center">
            <div className="order-1 overflow-hidden min-[769px]:ml-auto min-[769px]:w-[48.2105%]">
              <Image
                className="h-auto w-full max-w-full"
                src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Slate-Tall.jpg"
                alt="WordPress Slate"
                width={800}
                height={1200}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            <div className="min-[1025px]:w-[39.5789%] md:mt-10 lg:w-[48.2105%]">
              <div>
                <h3 className="text-[7.50rem] leading-none uppercase">
                  <span className="text-[6.25rem] leading-none">Why we like WordPress</span>
                </h3>

                <p className="text-[1.38rem] leading-7 min-[1025px]:mt-12 lg:mt-8">
                  Our team of WordPress developers are smart cookies. They&apos;ve created an
                  intelligent WordPress framework that they&apos;ve named &apos;Slate&apos;. Slate
                  helps them to build bespoke WordPress websites quickly without relying on hundreds
                  of plugins, streamlining the set-up of your site. It allows them to deliver your
                  website in a shorter time and helps us to add new functionality at a fraction of
                  the price of a custom CMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg relative pt-20 pb-20 text-white">
        <div className="m-auto w-[92%]">
          <div className="min-[769px]:flex min-[769px]:items-center">
            <div className="overflow-hidden min-[769px]:w-[48.2105%]">
              <Image
                className="h-auto w-full max-w-full"
                src="https://www.fhoke.com/wp-content/uploads/2022/08/Wordpress-Recap-Tall.jpg"
                alt="WordPress Recap"
                width={800}
                height={1200}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            <div className="min-[769px]:ml-auto min-[1025px]:w-[39.5789%] md:mt-10 lg:w-[48.2105%]">
              <div>
                <h3 className="text-[5.5rem] leading-none font-bold uppercase">
                  Building with WordPress
                </h3>

                <p className="text-[1.38rem] leading-7 min-[1025px]:mt-12 lg:mt-8">
                  WordPress started in 2003 and was designed for building self-hosted blogs. While
                  we still use it to power your blog, it&apos;s now capable of managing every aspect
                  of your website. It&apos;s completely customisable, we can use it for almost
                  anything you throw at us.
                </p>

                <p className="text-[1.38rem] leading-7 min-[1025px]:mt-9 lg:mt-8">
                  We use WordPress to create everything from:
                </p>
              </div>

              <ul className="list-none flex-wrap text-lg min-[671px]:flex">
                <li className="relative list-item pl-7 min-[671px]:w-[48.2105%]">
                  Brochure Websites
                </li>

                <li className="relative list-item pl-7 min-[671px]:ml-auto min-[671px]:w-[48.2105%]">
                  Online Magazines
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  eCommerce Shops and Stores
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:ml-auto min-[671px]:w-[48.2105%]">
                  Client Portals
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Online Proposal Systems
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:ml-auto min-[671px]:w-[48.2105%]">
                  Microsites
                </li>

                <li className="relative list-item pl-7 min-[671px]:mt-3 min-[671px]:w-[48.2105%]">
                  Membership Platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 pb-20 text-black">
        <div className="container mx-auto w-[92%] max-w-[118.75rem]">
          <div className="m-auto w-[65.4737%] min-[768px]:w-full">
            <blockquote>
              <p className="text-[2.88rem] leading-none">
                &quot;Having been in the marketing game for over 20 years, I&apos;ve worked on many
                websites. Honestly, I&apos;ve never produced one as good as with Fhoke. Everything
                about dealing with them is super professional, from their fab proposal, project
                management, wireframes, and design through to launch and go-live support. It&apos;s
                the service that sets them apart.&quot;
              </p>
              <div className="mt-4">
                <strong className="text-lg">Alex Knight</strong>
                <span className="block text-sm opacity-50">
                  Head of Marketing for Original Software
                </span>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg relative pt-20 pb-20 text-white">
        <div className="m-auto mb-16 w-[92%] max-w-[77.75rem] text-center uppercase">
          <div>
            <h2 className="inline-block text-lg min-[671px]:pl-6">
              Looking for a Cleveland Next JS agency?
            </h2>

            <h2 className="text-[8rem] leading-none font-bold min-[1025px]:mt-16 lg:mt-10">
              <span className="text-[7rem] leading-none">
                We understand you and the space you play in
              </span>
            </h2>

            <p className="text-[1.38rem] leading-7 min-[1025px]:mt-12 lg:mt-8">
              <a
                className="relative inline-block overflow-hidden rounded-full bg-white text-lg text-neutral-900"
                href="https://www.fhoke.com/contact/"
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Contact Us
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>{' '}
              <a
                className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-lg min-[1025px]:mt-9 lg:mt-8"
                href="https://calendly.com/fhoke/15-minute-chat"
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Book A Call
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <div className="overflow-hidden">
          <div className="flex w-[120vw] md:w-[168vw] lg:w-[132vw]">
            <div className="flex w-[120vw] md:w-[168vw] lg:w-[132vw]">
              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white pt-20 pb-20 text-neutral-900">
        <div className="m-auto mb-16 w-[92%]">
          <div className="min-[769px]:flex min-[769px]:items-center">
            <div className="min-[769px]:w-[65.4737%]">
              <h6 className="inline-block text-lg uppercase min-[671px]:pl-6">
                How else can we help?
              </h6>

              <h2 className="text-[5rem] leading-none font-bold uppercase min-[1025px]:mt-16 lg:mt-10">
                We&apos;ll build you a brand, a website, or a shop
              </h2>
            </div>
          </div>
        </div>

        <div className="m-auto w-[92%] text-[1.38rem] leading-7">
          <ul className="ml-auto grid grid-cols-1 gap-8 min-[1025px]:w-[65.4737%] md:grid-cols-2 lg:w-full">
            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">WooCommerce</span>
              </h2>
              <p>
                As a world-renowned WooCommerce development agency, we can offer merchants familiar
                with WordPress a way of selling online, helping retailers to upgrade or replatform
                to WooCommerce.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Shopify</span>
              </h2>
              <p>
                We&apos;re an award-winning Shopify agency handling everything from marketing and
                payments to secure checkout and shipping; Shopify leaves us to focus on making your
                Shopify store look beautiful.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">BigCommerce</span>
              </h2>
              <p>
                A trusted eCommerce and BigCommerce agency, we use BigCommerce, one of the most
                popular eCommerce platforms on the market, to create custom online stores that look
                great and accelerate growth.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Branding</span>
              </h2>
              <p>
                A brand isn&apos;t just about a logo. We take an identity and create visuals that
                showcase your products and services using the right messaging and materials from
                icons to illustrations and more.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Website design</span>
              </h2>
              <p>
                We approach your website project with a focus on creativity, usability, and
                conversions. The result is an online representation of your business that is
                beautiful and will generate more leads.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>

            <li className="list-item">
              <h2 className="text-[8.75rem] leading-none uppercase">
                <span className="text-[3.13rem] leading-none">Laravel</span>
              </h2>
              <p>
                Building powerful and scalable Laravel apps from portals to workflow systems to
                plugins, we build bespoke web apps for startups, growing brands, corporates and
                online store owners.
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg text-white uppercase min-[1025px]:mt-8 lg:mt-6"
                href=""
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Find out more
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-white min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const service = await queryServiceBySlug({ slug })

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return generateMeta({ doc: service })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }): Promise<Service | null> => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
