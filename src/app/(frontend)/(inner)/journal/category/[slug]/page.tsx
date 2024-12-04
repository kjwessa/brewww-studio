import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/BlogCard/index'
import { CategoryFilterBar } from '../../_components/CategoryFilterBar'
import { Category } from '@/payload-types'

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

  // Get all posts (for category counts)
  const allPosts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
  })

  // Get filtered posts (for display)
  const filteredPosts = await payload.find({
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

  return (
    <>
      <CategoryFilterBar 
        categories={categories.docs}
        posts={allPosts.docs}
        totalPostCount={allPosts.totalDocs}
        currentCategorySlug={slug}
      />

      <section className="bg-brand-dark-bg py-24 text-white">
        <div className="container mx-auto">
          <div className="relative grid auto-rows-auto grid-cols-3 gap-x-8 gap-y-24 text-zinc-100">
            {filteredPosts.docs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  // Skip generating static params during local production builds
  const isLocalProdBuild = process.env.NODE_ENV === 'production' && !process.env.VERCEL
  if (isLocalProdBuild) {
    console.log('Skipping static params generation for local production build')
    return []
  }

  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = categories.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

export const dynamicParams = true // Allow dynamic params when static params are skipped 