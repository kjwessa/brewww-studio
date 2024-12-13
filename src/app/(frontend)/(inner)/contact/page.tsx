import { ContactHeroSection } from './ContactHeroSection'
import { ContactFormSection } from './ContactFormSection'
import { Page } from '@/components/layout/Page'

export default function Contact() {
  return (
    <Page theme="dark">
      <ContactHeroSection />
      <ContactFormSection />
    </Page>
  )
}
