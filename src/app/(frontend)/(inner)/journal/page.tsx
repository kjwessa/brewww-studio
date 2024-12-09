import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/BlogCard/index'
import { Breadcrumbs } from './_components/Breadcrumbs'
import { Post, Category } from '@/payload-types'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FeaturedPostSection } from './_components/FeaturedPostSection'
import { CategorySection } from './_components/CategorySection'

export const revalidate = 3600

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    sort: '-publishedOn',
  })

  // Get posts for each category
  const latestPosts = posts.docs.slice(0, 5)
  const newsAndCulturePosts = posts.docs.filter((post) =>
    post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'News & Culture'),
  )
  const brandingPosts = posts.docs.filter((post) =>
    post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'Branding'),
  )
  const webDesignPosts = posts.docs.filter((post) =>
    post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'Web Design'),
  )

  return (
    <>
      <Breadcrumbs
        categories={categories.docs}
        posts={posts.docs}
        totalPostCount={posts.totalDocs}
      />

      <Section theme="dark" color="default">
        <Container size="3xl" spacing="large">
          <FeaturedPostSection postsFeatured={posts.docs} />
        </Container>
      </Section>

      <CategorySection
        posts={latestPosts}
        title="Latest Posts"
        theme="light"
        archiveLink="/category/archive"
      />

      <CategorySection
        posts={newsAndCulturePosts}
        title="News and Culture"
        theme="dark"
        archiveLink="/category/news-culture"
      />

      <CategorySection
        posts={brandingPosts}
        title="Branding"
        theme="light"
        archiveLink="/category/branding"
      />

      <CategorySection
        posts={webDesignPosts}
        title="Web Design"
        theme="dark"
        archiveLink="/category/web-design"
      />
    </>
  )
}
