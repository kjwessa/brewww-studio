import { RichText } from '@/components/RichText'
import { Post } from '@root/payload-types'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'

export function JournalContent({ post }: { post: Post }) {
  return (
    <Section theme="dark" color="default">
      <Container size="large" spacing="xlarge">
        <article className="mx-auto">
          <RichText content={post.content} enableProse={true} enableGutter={false} />
        </article>
      </Container>
    </Section>
  )
}
