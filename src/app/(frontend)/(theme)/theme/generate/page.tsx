'use client'

import { Page } from '@/components/layout/Page'
import { GenerateInputsHero } from './_components/GenerateInputsHero/index'
import { GenerateTitleSection } from './_components/GenerateTitleSection/index'
import { GenerateNav } from './_components/GenerateNav'
import { ThemeGenerateProvider } from './_context/ThemeGenerateContext'
import { ThemeIntroSection } from '../_components/ThemeIntroSection'

export default function FluidBuilderPage() {
  return (
    <Page theme="light">
      <ThemeGenerateProvider>
        <div className="pb-20">
          <ThemeIntroSection />
          <GenerateInputsHero />
          <GenerateTitleSection />
          <GenerateNav />
        </div>
      </ThemeGenerateProvider>
    </Page>
  )
}
