import { Category, Post } from '@/payload-types'
import { CategoryFilter } from '@/components/CategoryFilter/index'

type Props = {
  categories: Category[]
  posts: Post[]
  totalPostCount: number
  currentCategorySlug?: string
}

export function CategoryFilterBar({ categories, posts, totalPostCount, currentCategorySlug }: Props) {
  const categoryCounts = categories.reduce(
    (acc, category) => {
      acc[category.id] = posts.filter((post) =>
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
    <section className="flex w-full flex-wrap bg-brand-dark-bg px-2 py-4 text-black lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
      <div className="container mx-auto w-full">
        <ul className="flex list-none flex-row flex-wrap justify-start">
          <li className="mb-2 mr-4">
            <CategoryFilter 
              title="Explore All" 
              count={totalPostCount} 
              isActive={!currentCategorySlug}
              slug="/journal"
            />
          </li>
          {categories.map((category) => (
            <li key={category.id} className="mb-2 mr-4">
              <CategoryFilter
                title={category.title || 'Untitled Category'}
                count={categoryCounts[category.id] || 0}
                isActive={category.slug === currentCategorySlug}
                slug={`/journal/category/${category.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
} 