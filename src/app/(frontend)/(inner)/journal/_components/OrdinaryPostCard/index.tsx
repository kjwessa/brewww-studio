import { Post } from '@root/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import placeholderImage from '@/public/images/placeholder.png'

export function OrdinaryPostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <li
      className={`flex flex-col overflow-hidden rounded-sm shadow-sm ${featured ? 'h-full' : ''}`}
    >
      <Link href={`/posts/${post.slug}`} className="block flex-grow">
        <div
          className={`overflow-hidden ${featured ? 'aspect-video md:aspect-[16/9]' : 'aspect-video'}`}
        >
          <Image
            src={
              typeof post.image === 'string'
                ? post.image
                : post.image?.sizes?.full?.url || post.image?.url || ''
            }
            alt={post.title}
            width={1080}
            height={720}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className={`mt-2 font-bold ${featured ? 'text-2xl' : 'text-xl'}`}>{post.title}</h3>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>{new Date(post.publishedOn).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime ? `${post.readTime} min read` : 'Add Read Time'}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}
