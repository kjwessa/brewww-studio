import { formatDate } from '@root/utilities/formatDateTime'
import Link from 'next/link'
import { Post } from '@/payload-types'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'

interface JournalHeroProps {
  post: Post
}

export function JournalHero({ post }: JournalHeroProps) {
  return (
    <Section theme="dark">
      <Container size="3xl" spacing="large" spacingTop="xlarge">
        <div className="max-w-5xl">
          <Title size="headline-large">{post.title}</Title>
          <Text size="body-large">{post.description || 'Add a cool description here.'}</Text>
          <div className="flex items-center gap-1 text-sm">
            <span>
              By <Link href={''}>Kevin Wessa</Link>
            </span>
            <span>•</span>
            <span>
              {post.publishedOn
                ? formatDate({ date: post.publishedOn, format: 'shortDateStamp' })
                : 'Date not available'}
            </span>
            <span>•</span>
            {/* <span>{post.readTime ? `${post.readTime} min read` : 'Add Read Time'}</span> */}
          </div>
        </div>
      </Container>
    </Section>
  )
}
