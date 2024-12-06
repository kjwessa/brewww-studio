import { Category, Post } from '@/payload-types'
import { CategoryFilter } from '@/components/CategoryFilter/index'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'

type Props = {
  categories: Category[]
  posts: Post[]
  totalPostCount: number
  currentCategorySlug?: string
}

export function CategoryFilterBar({
  categories,
  posts,
  totalPostCount,
  currentCategorySlug,
}: Props) {
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
    <Section theme="dark" color="default">
      <Container size="full" spacing="small" spacingTop="large">
        <ul className="flex list-none flex-row flex-wrap justify-start">
          <li className="mr-4 mb-2">
            <CategoryFilter
              title="Explore All"
              count={totalPostCount}
              isActive={!currentCategorySlug}
              slug="/journal"
            />
          </li>
          {categories.map((category) => (
            <li key={category.id} className="mr-4 mb-2">
              <CategoryFilter
                title={category.title || 'Untitled Category'}
                count={categoryCounts[category.id] || 0}
                isActive={category.slug === currentCategorySlug}
                slug={`/journal/category/${category.slug}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
