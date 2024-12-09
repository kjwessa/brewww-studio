import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Title } from '@/components/Title'

interface CategorySectionProps {
  posts: any[]
  title: string
  theme: 'light' | 'dark'
  archiveLink: string
}

export function CategorySection({ posts, title, theme, archiveLink }: CategorySectionProps) {
  return (
    <Section theme={theme} color="default">
      <Container size="3xl" spacing="large">
        <Title el="h2" size="headline-small">
          {title}
        </Title>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {posts.slice(0, 2).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {posts.slice(2, 5).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={archiveLink} className="inline-flex items-center text-xl">
            <span>View archive</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
