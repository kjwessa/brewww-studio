import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { BlogCard } from "@/components/BlogCard/index";
import { CategoryFilter } from "@/components/CategoryFilter/index";
import { Category, Post } from "@/payload-types";

export default async function BlogPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    sort: "-publishedOn",
  });

  const categories = await payload.find({
    collection: "categories",
    limit: 1000,
    sort: "-publishedOn",
  });

  // Count posts for each category
  const categoryCounts = categories.docs.reduce(
    (acc, category) => {
      acc[category.id] = posts.docs.filter((post) =>
        post.categories?.some((cat) => {
          if (typeof cat === "string") {
            return cat === category.id;
          }
          return (cat as Category).id === category.id;
        }),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <>
      <section className="flex w-full flex-wrap bg-brand-dark-bg px-2 py-4 text-black lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
        <div className="container mx-auto w-full">
          <ul className="flex list-none flex-row flex-wrap justify-start">
            <li className="mb-2 mr-4">
              <CategoryFilter
                title="Explore All"
                count={posts.totalDocs}
                isActive={true}
              />
            </li>
            {categories.docs.map((category) => (
              <li key={category.id} className="mb-2 mr-4">
                <CategoryFilter
                  title={category.title}
                  count={categoryCounts[category.id] || 0}
                  slug={`/journal/category/${category.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-dark-bg py-24">
        <div className="container mx-auto">
          <div className="relative grid auto-rows-auto grid-cols-3 gap-x-8 gap-y-24 text-zinc-100">
            {posts.docs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
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
//       <h1>hello</h1>
//       {/* <FeaturedSection postsFeatured={postsFeatured.docs as Post[]} />
//       <LatestPostsSection posts={postsLatest.docs} />
//       <DesignGuidesSection guides={designGuides} />
//       <BrandingPostsSection posts={postsBranding.docs as Post[]} />
//       <WebDesignPostsSection posts={postsWeb.docs as Post[]} />
//       <ContentPostsSection posts={postsContent.docs as Post[]} /> */}
//       <PreFooter />
//     </>
//   );
// }

// const FeaturedSection = ({ postsFeatured }: { postsFeatured: Post[] }) => {
//   return (
//     <section className="bg-zinc-900 py-14 text-lg text-white md:py-16">
//       <div className="container mx-auto">
//         <h1 className="mb-6 text-5xl font-bold">Blog</h1>
//         <div className="mb-7 flex flex-col md:flex-row md:items-end">
//           <p className="mb-4 w-full text-2xl md:mb-0 md:w-2/3">
//             News and insights on all things design by Brewww
//           </p>
//           <div className="ml-auto flex">
//             <button className="mr-5 opacity-20 md:mr-10">
//               <ArrowIcon direction="left" />
//             </button>
//             <button>
//               <ArrowIcon direction="right" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="relative overflow-hidden">
//         <div className="container mx-auto px-6 md:px-10">
//           <div className="-mx-6 flex md:-mx-10">
//             <div className="flex gap-6 overflow-x-auto pb-8">
//               {postsFeatured.map((post: Post) => (
//                 <FeaturedPostCard key={post.id} post={post} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

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

// const DesignGuidesSection = ({ guides }: { guides: Guide[] }) => (
//   <section className="bg-zinc-900 py-14 text-white md:py-20">
//     <div className="container mx-auto px-6 md:px-10">
//       <h2 className="mb-5 text-4xl">Design Guides</h2>
//       <p className="mb-10 text-xl">
//         Unlock expert insights and practical guidance in our special collection
//       </p>
//       <ul className="flex flex-wrap gap-8">
//         {guides.map((guide) => (
//           <GuideCard key={guide.id} guide={guide} />
//         ))}
//       </ul>
//       <ViewMoreLink href="/blog/category/guides" text="View all guides" />
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

// const FeaturedPostCard = ({ post }: { post: Post }) => (
//   <div className="relative w-[85vw] flex-shrink-0 overflow-hidden rounded-lg sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
//     <Link href={`/posts/${post.slug}`}>
//       <div className="relative aspect-[16/9]">
//         <Image
//           src={post.featuredImage?.url || placeholderImage}
//           alt={post.name || ""}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//         <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent" />
//       </div>
//       <div className="absolute bottom-6 left-6 right-6 text-white">
//         <p className="mb-2 text-sm uppercase tracking-wider">
//           {typeof post.category === "string"
//             ? post.category
//             : post.category?.name || "Uncategorized"}
//         </p>
//         <h2 className="mb-2 text-2xl font-bold">
//           {post.name || "Untitled Post"}
//         </h2>
//         <p className="text-sm opacity-75">
//           {post.publishedDate
//             ? new Date(post.publishedDate).toLocaleDateString()
//             : "No date"}{" "}
//           • {post.readTime ? `${post.readTime} min read` : "Add Read Time"}
//         </p>
//       </div>
//     </Link>
//   </div>
// );

// const OrdinaryPostCard = ({
//   post,
//   featured = false,
// }: {
//   post: any;
//   featured?: boolean;
// }) => (
//   <li
//     className={`flex flex-col overflow-hidden rounded-sm shadow-sm ${featured ? "h-full" : ""}`}
//   >
//     <Link href={`/posts/${post.slug}`} className="block flex-grow">
//       <div
//         className={`overflow-hidden ${featured ? "aspect-video md:aspect-[16/9]" : "aspect-video"}`}
//       >
//         <Image
//           src={post.featuredImage?.url || placeholderImage}
//           alt={post.name || ""}
//           width={1080}
//           height={720}
//           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className={`mt-2 font-bold ${featured ? "text-2xl" : "text-xl"}`}>
//           {post.name}
//         </h3>
//         <div className="mt-3 flex items-center text-sm text-gray-500">
//           <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
//           <span className="mx-2">•</span>
//           <span>
//             {post.readTime ? `${post.readTime} min read` : "Add Read Time"}
//           </span>
//         </div>
//       </div>
//     </Link>
//   </li>
// );

// const GuideCard = ({ guide }: { guide: Guide }) => (
//   <li className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
//     <Link
//       href={`/blog/guides/${guide.slug || guide.id}`}
//       className="relative block overflow-hidden rounded-sm"
//     >
//       <Image
//         src={placeholderImage}
//         alt={guide.title || ""} // Provide a default empty string
//         width={1080}
//         height={720}
//         className="object-cover"
//       />
//       <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
//         <h4 className="mt-2 text-xl">{guide.title}</h4>
//       </div>
//     </Link>
//   </li>
// );

// const ViewMoreLink = ({ href, text }: { href: string; text: string }) => (
//   <div className="mt-10 text-center">
//     <Link href={href} className="inline-flex items-center text-xl">
//       <span>{text}</span>
//       <ArrowIcon direction="right" className="ml-2 w-6 text-gray-400" />
//     </Link>
//   </div>
// );

// const ArrowIcon = ({
//   direction,
//   className = "w-6 h-6",
// }: {
//   direction: "left" | "right";
//   className?: string;
// }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d={
//         direction === "left"
//           ? "M19 12H5M12 19l-7-7 7-7"
//           : "M5 12h14M12 5l7 7-7 7"
//       }
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
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
