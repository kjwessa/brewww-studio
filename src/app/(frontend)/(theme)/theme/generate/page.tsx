'use client'

import { Page } from '@/components/layout/Page'
import { GenerateInputsHero } from './_components/GenerateInputsHero/index'
import { GenerateTitleSection } from './_components/GenerateTitleSection/index'
import { GenerateNav } from './_components/GenerateNav'

export default function FluidBuilderPage() {
  return (
    <Page theme="light">
      <div className="pb-20">
        <GenerateInputsHero />
        <GenerateTitleSection />
        <GenerateNav />
      </div>
    </Page>
  )
}
