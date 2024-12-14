'use client'

import { Page } from '@/components/layout/Page'
import { GenerateInputsHero } from './_components/GenerateInputsHero/index'
import { GenerateTitleSection } from './_components/GenerateTitleSection/index'

export default function FluidBuilderPage() {
  return (
    <Page theme="light">
      <GenerateInputsHero />
      <GenerateTitleSection />
    </Page>
  )
}
