import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/BlogCard/index'
import { CategoryFilterBar } from './_components/CategoryFilterBar'
import { Post } from '@/payload-types'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'
import { FeaturedPostSection } from './_components/FeaturedPostSection'

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

  return (
    <>
      <CategoryFilterBar
        categories={categories.docs}
        posts={posts.docs}
        totalPostCount={posts.totalDocs}
      />

      <Section theme="dark" color="default">
        <Container size="3xl" spacing="large">
          <FeaturedPostSection postsFeatured={posts.docs} />
          <div className="relative grid auto-rows-auto grid-cols-3 gap-x-8 gap-y-24 text-zinc-100">
            {posts.docs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

// type Guide = {
//   id: string;
//   title: string | null | undefined;
//   category: string | { name: string };
//   slug: string | null | undefined;
// };

// export default async function Page() {
//   const payload = await getPayloadHMR({ config: configPromise });
//   const postsFeatured = await payload.find({
//     collection: "posts",
//     limit: 4,
//     sort: "-publishedDate",
//   });
//   const postsLatest = await payload.find({
//     collection: "posts",
//     limit: 5,
//     sort: "-publishedDate",
//   });
//   const postsBranding = await payload.find({
//     collection: "posts",
//     limit: 5,
//     sort: "-publishedDate",
//   });
//   const postsWeb = await payload.find({
//     collection: "posts",
//     limit: 5,
//     sort: "-publishedDate",
//   });
//   const postsContent = await payload.find({
//     collection: "posts",
//     limit: 5,
//     sort: "-publishedDate",
//   });
//   const postsGuides = await payload.find({
//     collection: "posts",
//     limit: 4,
//     sort: "-publishedDate",
//   });

//   // const designGuides: Guide[] = await fetchDesignGuides();
//   // const webDesignPosts: Post[] = await fetchWebDesignPosts();

//   return (
//     <>
//
//
//       <LatestPostsSection posts={postsLatest.docs} />
//
//       <BrandingPostsSection posts={postsBranding.docs as Post[]} />
//       <WebDesignPostsSection posts={postsWeb.docs as Post[]} />
//       <ContentPostsSection posts={postsContent.docs as Post[]} /> */}
//       <PreFooter />
//     </>
//   );
// }

// const LatestPostsSection = ({ posts }: { posts: any[] }) => (
//   <section className="py-14 md:py-16">
//     <div className="container mx-auto px-6 md:px-10">
//       <h2 className="mb-10 text-4xl md:mb-14">Latest</h2>
//       <div className="grid gap-8 md:grid-cols-2">
//         {posts.slice(0, 2).map((post) => (
//           <OrdinaryPostCard key={post.id} post={post} featured={true} />
//         ))}
//       </div>
//       <div className="mt-8 grid gap-8 md:grid-cols-3">
//         {posts.slice(2, 5).map((post) => (
//           <OrdinaryPostCard key={post.id} post={post} />
//         ))}
//       </div>
//       <ViewMoreLink href="/blog-archive" text="View archive" />
//     </div>
//   </section>
// );

// const BrandingPostsSection = ({ posts }: { posts: Post[] }) => (
//   <section className="py-14 md:py-20">
//     <div className="container mx-auto px-6 md:px-10">
//       <h2 className="mb-5 text-4xl">Branding</h2>
//       <p className="mb-10 text-xl">
//         Tips and insights on branding and marketing
//       </p>
//       <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <OrdinaryPostCard key={post.id} post={post} />
//         ))}
//       </ul>
//       <ViewMoreLink href="/blog/category/branding" text="View all articles" />
//     </div>
//   </section>
// );

// const WebDesignPostsSection = ({ posts }: { posts: Post[] }) => (
//   <section className="py-14 md:py-20">
//     <div className="container mx-auto px-6 md:px-10">
//       <h2 className="mb-5 text-4xl">Web Design</h2>
//       <p className="mb-10 text-xl">
//         Dive into cutting-edge trends and tips for creating stunning websites
//       </p>
//       <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <OrdinaryPostCard key={post.id} post={post} />
//         ))}
//       </ul>
//       <ViewMoreLink href="/blog/category/web-design" text="View all articles" />
//     </div>
//   </section>
// );

// const ContentPostsSection = ({ posts }: { posts: Post[] }) => (
//   <section className="py-14 md:py-20">
//     <div className="container mx-auto px-6 md:px-10">
//       <h2 className="mb-5 text-4xl">Content</h2>
//       <p className="mb-10 text-xl">
//         The latest news and insights on content creation and marketing
//       </p>
//       <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <OrdinaryPostCard key={post.id} post={post} />
//         ))}
//       </ul>
//       <ViewMoreLink href="/blog/category/content" text="View all articles" />
//     </div>
//   </section>
// );

// const ViewMoreLink = ({ href, text }: { href: string; text: string }) => (
//   <div className="mt-10 text-center">
//     <Link href={href} className="inline-flex items-center text-xl">
//       <span>{text}</span>
//       <ArrowIcon direction="right" className="ml-2 w-6 text-gray-400" />
//     </Link>
//   </div>
// );

// Placeholder functions for data fetching (replace with actual API calls)
// async function fetchDesignGuides(): Promise<Guide[]> {
//   const payload = await getPayloadHMR({ config: configPromise });
//   const guides = await payload.find({
//     collection: "posts", // or "guides" if you have a separate collection
//     where: {
//       category: {
//         equals: "Guide",
//       },
//     },
//     limit: 4,
//   });

//   return guides.docs.map((guide) => ({
//     id: guide.id,
//     title: guide.title || "", // Provide a default empty string if title is null or undefined
//     // category:
//     //   typeof guide.category === "string"
//     //     ? guide.category
//     //     : guide.category?.name || "",
//     // slug: guide.slug || "",
//   }));
// }

// async function fetchWebDesignPosts(): Promise<Post[]> {
//   // Implement actual API call here
//   return [];
//
// }
