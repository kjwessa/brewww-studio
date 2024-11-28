'use client'

import React, { useState } from 'react'
import { Faq } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { Title } from '@/components/Title'

export function AccordionCard({ props }: { props: Faq }): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 w-full rounded-3xl bg-zinc-900 text-white">
      <button
        className="flex h-20 w-full cursor-pointer items-center justify-between p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Title el="h3" size="title-small" weight="medium" className="pr-10">
          {props.title}
        </Title>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
          <svg
            className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
      </button>
      {isOpen && props.answer.root && (
        <div className="w-full text-lg font-light text-zinc-400">
          <div className="w-full px-6 pb-6 lg:pr-28">
            <div className="w-full text-white">
              <RichText content={props.answer} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
