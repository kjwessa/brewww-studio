import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Link from "next/link";
import Image from "next/image";
import { PlayHero } from "./PlayHero";
export default async function PlayPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const projects = await payload.find({
    collection: "play",
    limit: 1000,
    sort: "-publishedOn",
  });

  return (
    <>
      <PlayHero />
      <section className="bg-brand-dark-bg">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-[82.50rem] text-xl text-neutral-800 min-[480px]:max-w-[84.38rem] min-[720px]:max-w-[86.88rem] min-[720px]:pl-12 min-[720px]:pr-12 min-[1080px]:max-w-[89.38rem] min-[1080px]:pl-16 min-[1080px]:pr-16">
            <h1 className="mb-1 mt-28 text-[2.88rem] font-light leading-none text-white">
              Brewww Playground
            </h1>
            <p className="mb-24 max-w-[67.50rem] text-[2.88rem] leading-none text-neutral-500">
              A playground where the artisans at Brewww share internal projects
              that they are playing around with. From the ridiculous to the
              somewhat useful, we hone skillsets through imagination and fun.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-bg py-16">
        <div className="container mx-auto">
          <div className="w-full px-20 text-lg text-white">
            <div>
              <div className="-ml-0 flex max-w-[18ch] items-center text-[4.25rem] leading-none">
                <span className="mr-2 text-[2rem]">●</span>
                Play
              </div>
              <div className="mb-4 mt-6 h-0.5 bg-zinc-900" />
              <div className="mb-4 text-xs uppercase">Selected Projects</div>
            </div>
            <div className="grid auto-rows-auto grid-cols-2 gap-8">
              {projects.docs.map((project) => {
                const imageSrc =
                  typeof project.image === "string"
                    ? project.image
                    : project.image?.url ||
                      "https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10ccaad8365d669c95e70_63c91a92dc0c340932978b8f_image-ueno-template-04-p-3200.jpeg";

                return (
                  <Link
                    key={project.id}
                    className="block w-full"
                    href={`/play/${project.slug}`}
                  >
                    <div className="relative flex w-full cursor-pointer overflow-hidden rounded-md">
                      <div className="relative w-full pt-[56.25%]">
                        <Image
                          className="absolute inset-0 h-full w-full"
                          src={
                            typeof project.image === "string"
                              ? project.image
                              : project.image?.url ||
                                "https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10ccaad8365d669c95e70_63c91a92dc0c340932978b8f_image-ueno-template-04-p-3200.jpeg"
                          }
                          alt={"Project Thumbnail"}
                          layout="fill"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1">
                      <div>
                        <div className="inline-block font-semibold uppercase">
                          {project.title || "Untitled Project"}
                        </div>
                        <div className="m-1 inline-block">·</div>
                        {project?.tagline || "Untitled Tagline"}
                      </div>
                      <div className="text-neutral-400">
                        {"Write a cool category here"}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-2xl font-bold">Alternate Style</h2>
          <div className="flex flex-col gap-y-[7.38rem]">
            <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] items-start gap-y-[7.38rem]">
              <div
                className="col-start-4 col-end-9 row-start-1 row-end-2"
                style={{
                  gridArea: "1/4/2/9",
                }}
              >
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="flex w-full cursor-pointer overflow-hidden rounded-md">
                    <Image
                      className="inline-block h-full w-full max-w-full object-contain align-middle"
                      src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10dcd8842ec2b57b28cb6_63c9187126433a43129cc944_image-ueno-template-02.jpeg"
                      alt="Square"
                    />
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Square
                      </div>
                      <div className="m-1 inline-block">·</div>
                      The new norm of life
                    </div>
                    <div className="text-gray-600">Brand identity, Website</div>
                  </div>
                </a>
              </div>
              <div
                className="col-start-9 col-end-13 row-start-1 row-end-2 flex-grow pl-28"
                style={{
                  gridArea: "1/9/2/13",
                }}
              >
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="flex w-full cursor-pointer overflow-hidden rounded-md">
                    <Image
                      className="inline-block h-full w-full max-w-full object-contain align-middle"
                      src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10dfd80f1f22872630cce_63c91c81185e3416e7ba7960_image-ueno-template-06-p-2000.jpeg"
                      alt="Castro Capital"
                    />
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Castro Capital
                      </div>
                      <div className="m-1 inline-block">·</div>
                      The new norm of life
                    </div>
                    <div className="text-gray-600">
                      Digital design system, Website, Print
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] items-start gap-y-[7.38rem]">
              <div className="col-span-9 row-span-1 w-full">
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="relative flex w-full cursor-pointer overflow-hidden rounded-md">
                    <div className="relative w-full pt-[56.25%]">
                      <Image
                        className="absolute bottom-0 left-0 top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                        src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10e2f8842ec5dcab29324_63c91907a7ce6182b053ba02_image-ueno-template-03.jpeg"
                        alt="Rucksack Magazine"
                      />
                    </div>
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Rucksack Magazine
                      </div>
                      <div className="m-1 inline-block">·</div>
                      All about photography
                    </div>
                    <div className="text-gray-600">
                      Brand identity, Website, Print
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] items-start gap-y-[7.38rem]">
              <div
                className="col-start-7 col-end-13 row-start-1 row-end-2 flex-grow pl-28"
                style={{
                  gridArea: "1/7/2/13",
                }}
              >
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="flex w-full cursor-pointer overflow-hidden rounded-md">
                    <Image
                      className="inline-block h-full w-full max-w-full object-contain align-middle"
                      src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10e81559654d00360030b_63c91be70da88459ac7b5a3a_image-ueno-template-05.jpeg"
                      alt="Romans"
                    />
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Romans
                      </div>
                      <div className="m-1 inline-block">·</div>
                      All about photography
                    </div>
                    <div className="text-gray-600">
                      Brand identity, Website, Packaging
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-start-4 col-end-7 row-start-1 row-end-2"
                style={{
                  gridArea: "1/4/2/7",
                }}
              >
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="flex w-full cursor-pointer overflow-hidden rounded-md">
                    <Image
                      className="inline-block h-full w-full max-w-full object-contain align-middle"
                      src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d1162e150c60446a56cadd_63c91d6bd8d50020d6d274c0_image-ueno-template-07-p-2000.jpeg"
                      alt="Hakuha"
                    />
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Hakuha
                      </div>
                      <div className="m-1 inline-block">·</div>
                      All about photography
                    </div>
                    <div className="text-gray-600">
                      Digital product, Packaging
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid w-full auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] items-start gap-y-[7.38rem]">
              <div className="col-span-8 row-span-1">
                <a
                  className="col-span-2 row-span-1 inline-block w-full max-w-full"
                  href=""
                >
                  <div className="relative flex w-full cursor-pointer overflow-hidden rounded-md">
                    <div className="relative w-full pt-[56.25%]">
                      <Image
                        className="absolute bottom-0 left-0 top-0 inline-block h-full w-full max-w-full object-cover align-middle"
                        src="https://cdn.prod.website-files.com/63d10b7a4b5c9a525e3a297e/63d10ee4ad83658d2bc97c5a_63c91ec109d76d3e7e34327f_image-ueno-template-08-p-2000.jpeg"
                        alt="Café de especialidad"
                      />
                    </div>
                  </div>
                  <div className="mt-3.5 flex cursor-pointer flex-col items-start pl-1 text-black">
                    <div>
                      <div className="inline-block font-semibold uppercase">
                        Café de especialidad
                      </div>
                      <div className="m-1 inline-block">·</div>
                      All about photography
                    </div>
                    <div className="text-gray-600">Brand identity, Website</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { getPayloadHMR } from "@payloadcms/next/utilities";
// import configPromise from "@payload-config";
// import placeholderImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";
// import { PreFooter } from "@/app/components/PreFooter";

// type Post = {
//   id: string;
//   slug: string;
//   name: string;
//   category?: string | { name: string };
//   publishedDate: string;
//   readTime?: string;
//   url?: string;
//   imageUrl?: string;
//   featuredImage?: { url: string };
// };

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
