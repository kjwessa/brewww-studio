import { RichText } from '@/components/RichText'
import { Post } from '@root/payload-types'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Flow } from '@/components/layout/Flow'

export function JournalContent({ post }: { post: Post }) {
  return (
    <Section theme="dark" color="default">
      <Container size="large" spacing="xlarge">
        <Flow as="article" spacing="custom">
          <RichText content={post.content} enableGutter={false} />
        </Flow>
      </Container>
    </Section>
  )
}
