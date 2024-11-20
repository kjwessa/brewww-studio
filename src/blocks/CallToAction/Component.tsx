import React from 'react'

import type { Page } from '@/payload-types'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type Props = Extract<Page['layout'], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card border-border flex flex-col gap-8 rounded border p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-[48rem] items-center">
          {richText && <RichText className="mb-0" content={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {/* {links &&
            Array.isArray(links) &&
            links.map((linkItem: { link: any }, i: number) => {
              return <CMSLink key={i} size="lg" {...linkItem.link} />;
            })} */}
        </div>
      </div>
    </div>
  )
}
