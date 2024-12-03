import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/BlogCard/index'
import { CategoryFilter } from '@/components/CategoryFilter/index'
import { Category, Post } from '@/payload-types'

export const revalidate = 3600

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CategoryPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  // Get the current category
  const categoryResponse = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug
      }
    },
    limit: 1
  })
  const currentCategory = categoryResponse.docs[0]

  // Get all posts
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      categories: {
        contains: currentCategory.id
      }
    }
  })

  // Get all categories for the navigation
  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    sort: '-publishedOn',
  })

  const categoryCounts = categories.docs.reduce(
    (acc, category) => {
      acc[category.id] = posts.docs.filter((post) =>
        post.categories?.some((cat) => {
          if (typeof cat === 'string') {
            return cat === category.id
          }
          return (cat as Category).id === category.id
        }),
      ).length
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <>
      <section className="flex w-full flex-wrap bg-brand-dark-bg px-2 py-4 text-black lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
        <div className="container mx-auto w-full">
          <ul className="flex list-none flex-row flex-wrap justify-start">
            <li className="mb-2 mr-4">
              <CategoryFilter 
                title="Explore All" 
                count={posts.totalDocs} 
                isActive={false}
                slug="/journal"
              />
            </li>
            {categories.docs.map((category) => (
              <li key={category.id} className="mb-2 mr-4">
                <CategoryFilter
                  title={category.title || 'Untitled Category'}
                  count={categoryCounts[category.id] || 0}
                  isActive={category.slug === slug}
                  slug={`/journal/category/${category.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

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