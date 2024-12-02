import { Post } from '@/payload-types'
import { BlogCard } from '@/components/BlogCard/index'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'

export function BlogGridSection({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="relative bg-white pt-3 text-black">
      <div className="relative z-10 m-auto w-full max-w-[100.00rem] px-24 pt-24">
        <div className="flex flex-wrap px-24">
          <div className="-ml-3.5 w-full max-w-[91.6667%] basis-7/12 text-label-large">
            <Text level="p" size="label-large" className="mb-6 uppercase">
              <span className="mr-2 font-bold text-brand-gold">/</span>Featured Insights
            </Text>
            <Title el="h2" size="headline-medium" className="mb-28 leading-none">
              Branding, tech, and business insights.
            </Title>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 z-0 w-[20%] bg-[#F9F9F9]" />
      <div className="m-auto w-full max-w-[100.00rem] px-24 text-black">
        <div className="flex flex-wrap px-24">
          <div className="relative w-full max-w-[50%] basis-1/2">
            {posts[0] && (
              <div className="-ml-24 mb-36 w-[33.44rem] pb-3">
                <BlogCard post={posts[0]} />
              </div>
            )}
            {posts[2] && (
              <div className="float-right mb-36 mr-24 w-[33.44rem] pb-3">
                <BlogCard post={posts[2]} />
              </div>
            )}
          </div>
          <div className="relative w-full max-w-[50%] basis-1/2">
            {posts[1] && (
              <div className="mb-36 mt-28 w-[33.44rem] pb-3">
                <BlogCard post={posts[1]} />
              </div>
            )}
            {posts[3] && (
              <div className="float-right -mr-24 mb-36 w-[33.44rem] pb-3">
                <BlogCard post={posts[3]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
