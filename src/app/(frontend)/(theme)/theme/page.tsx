'use client'

import { Button } from '@/components/Button'
import { TypographySection } from './_components/TypographySection'
import { ColorSection } from './_components/ColorSection'
import { ThemeNavigation } from './_components/Navigation'
import { Page } from '@/components/layout/Page'
import { useState } from 'react'
import { ThemeIntroSection } from './_components/ThemeIntroSection'

export default function StylesPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  return (
    <Page theme={theme}>
      <ThemeIntroSection />
      <ThemeNavigation theme={theme} onThemeChange={setTheme} />
      <TypographySection />
      <ColorSection defaultTheme={theme} />
      <h1 className="mb-8 text-4xl font-bold">Button Styleguide</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button intent="primary" label="Primary" />
          <Button intent="secondary" label="Secondary" />
          <Button intent="outline" label="Outline" />
          <Button intent="ghost" label="Ghost" />
          <Button intent="link" label="Link" />
          <Button intent="destructive" label="Destructive" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="default" label="Default" />
          <Button size="sm" label="Small" />
          <Button size="lg" label="Large" />
          <Button size="icon" icon="plus" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button icon="arrow" label="Arrow Right" />
          <Button icon="arrow" iconPosition="left" label="Arrow Left" />
          <Button icon="search" label="Search" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Full Width</h2>
        <div className="space-y-4">
          <Button fullWidth label="Full Width" />
          <Button mobileFullWidth label="Mobile Full Width" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Disabled</h2>
        <Button disabled label="Disabled Button" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">As Link</h2>
        <Button el="link" href="/example" label="Link Button" />
      </section>
    </Page>
  )
}
