import { Post } from '@/payload-types'
import { Media } from '@/payload-types'
import { Category } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '../Title'
import { Text } from '../Text'

export const BlogCard = ({ post }: { post: Post }) => {
  const category = post.categories?.[0] as Category | undefined

  return (
    <Link className="relative" href={`/journal/${post.slug}`}>
      <div className="mb-5 overflow-hidden rounded-md">
        <div className="relative h-[0] w-full pb-[66%]">
          {post.image && (
            <Image
              className="object-cover"
              src={typeof post.image === 'string' ? post.image : post.image.url || ''}
              alt={post.title}
              fill
            />
          )}
        </div>
      </div>
      <div className="mt-4">
        <Text level="p" size="label-medium" className="mb-2 flex flex-row items-center uppercase">
          <span>{category?.title || 'Uncategorized'}</span>
          <span className="ml-2">/ min read</span>
        </Text>
        <Title el="h3" size="title-medium" className="leading-none">
          {post.title}
        </Title>
      </div>
    </Link>
  )
}
