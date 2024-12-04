import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/BlogCard/index'
import { CategoryFilterBar } from './_components/CategoryFilterBar'
import { Post } from '@/payload-types'

export const revalidate = 3600

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      _status: {
        equals: 'published'
      }
    }
  })

  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    sort: '-publishedOn',
  })

  return (
    <>
      <CategoryFilterBar 
        categories={categories.docs}
        posts={posts.docs}
        totalPostCount={posts.totalDocs}
      />

      <section className="bg-brand-dark-bg py-24 text-white">
        <div className="container mx-auto">
          <div className="relative grid auto-rows-auto grid-cols-3 gap-x-8 gap-y-24 text-zinc-100">
            {posts.docs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
