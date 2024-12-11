import Image from 'next/image'
import Link from 'next/link'

export function AboutOffsetImageSection() {
  return (
    <section className="about-intro">
      <div className="bg-brand-gunmetal relative pt-4 pr-24 pb-12 text-white">
        <div className="relative -mt-36 mr-24 h-[75vh] overflow-hidden">
          <Image
            src="https://bucket.brewww.studio/brewww/media/marybielskiandkevinwessa-6.jpg"
            width={1000}
            height={1000}
            alt="Intro Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="bg-brand-gunmetal px-24 py-48 font-light text-white">
        <div className="m-auto max-w-[62.50rem]">
          <div className="grid grid-cols-6">
            <div className="col-start-2 col-end-6 flex flex-col items-start justify-center">
              <h2 className="pb-5 font-bold uppercase">+ Crafted with purpose</h2>
              <p className="mb-8 text-xl">
                Envisioned in 2012, formalized in 2017, we are newly founded and really grounded
                here in Pensacola, FL. Our team is small, agile, and really selective about the
                clients we take on.{' '}
                <strong className="font-extrabold">
                  Our name alludes to an artisanal approach that avoids the instant and focuses on
                  the lasting.
                </strong>
              </p>
              <Link className="relative mb-1 inline-block max-w-full font-bold" href="/services">
                <span className="uppercase">View Capabilities</span>
                <span className="absolute right-0 bottom-0 left-0 h-0.5 w-1/5 bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
