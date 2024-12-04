import { RichText } from '@/components/RichText'
import { Post } from '@root/payload-types'
export function JournalContent({ post }: { post: Post }) {
  return (
    <div className="container mx-auto px-4 pt-8">
      <article className="prose mx-auto max-w-4xl pb-24">
        <RichText content={post.content} enableProse={true} enableGutter={false} />
      </article>
    </div>
  )
}
