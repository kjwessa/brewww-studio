import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import Link from 'next/link'

export function JournalBreadcrumbs() {
  return (
    <Section theme="dark">
      <Container size="3xl" spacing="large" spacingTop="xlarge">
        <div className="flex items-start justify-start">
          <ul className="hidden list-none flex-wrap gap-4 md:flex">
            <li>
              <Link href="/journal" className="hover:underline">
                All Posts
              </Link>
            </li>
            <li>
              <Link href="/journal/category/branding" className="hover:underline">
                Branding
              </Link>
            </li>
            <li>
              <Link href="/journal/category/web-design" className="hover:underline">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/journal/category/content" className="hover:underline">
                Content
              </Link>
            </li>
            <li>
              <Link href="/journal/category/guides" className="hover:underline">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/journal/category/updates" className="hover:underline">
                Updates
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}
