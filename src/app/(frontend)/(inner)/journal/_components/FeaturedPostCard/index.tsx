import { Post, Category, Media } from '@root/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg">
      <Link href={`/journal/${post.slug}`}>
        <div className="relative aspect-[16/9]">
          <Image
            src={
              typeof post.image === 'string'
                ? post.image
                : post.image?.sizes?.full?.url || post.image?.url || ''
            }
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="absolute inset-x-8 bottom-8 text-white">
          <p className="mb-3 text-sm font-medium tracking-wider uppercase">
            {(post.categories[0] as Category)?.title || 'Uncategorized'}
          </p>
          <h2 className="mb-0 text-3xl font-bold leading-tight">{post.title}</h2>
        </div>
      </Link>
    </div>
  )
}
