import React from 'react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { AccordionCard } from '@/components/AccordionCard'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
} & FAQBlockProps

export const FAQBlock: React.FC<Props> = ({ className, faqs }) => {
  if (!faqs) return null

  return (
    <section className={cn('bg-white py-24', className)}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <div className="flex flex-col items-start">
                <h2 className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  <div className="ml-2 font-light text-black">Anything else?</div>
                </h2>
                <h2 className="mt-5 max-w-lg text-5xl text-black">
                  The answers to your questions.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full">
              {faqs.map((faq) => {
                const faqData = typeof faq === 'string' ? null : faq
                if (!faqData) return null

                return <AccordionCard key={faqData.id} props={faqData} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
