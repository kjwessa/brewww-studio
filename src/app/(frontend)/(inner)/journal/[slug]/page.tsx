// // Next Imports
// import React from 'react'
// import type { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'

// // Payload Imports
// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { Post } from '@/payload-types'

// // Components
// import { RichText } from '@/components/RichText/index'
// import TableOfContents from '@/components/TableOfContents/index'
// import { LexicalNode } from '@/components/RichText/nodeFormat'

// // Utilities
// import { formatDate } from '@/utilities/formatDateTime'

// const emptyLexicalContent = {
//   root: {
//     type: 'root',
//     children: [],
//     direction: null,
//     format: '',
//     indent: 0,
//     version: 1
//   }
// } as const;

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })
//   const posts = await payload.find({
//     collection: 'posts',
//     limit: 1000,
//     overrideAccess: false,
//   })
//   return (
//     posts.docs?.map(({ slug }) => ({
//       params: { slug },
//     })) || []
//   )
// }

// export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
//   const resolvedParams = await params
//   if (!resolvedParams.slug) {
//     notFound()
//   }

//   const post = await queryPostBySlug({ slug: resolvedParams.slug })
//   if (!post) {
//     notFound()
//   }

//   return (
//     <article className="bg-white pt-24 text-black">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <ul className="hidden list-none flex-wrap gap-4 md:flex">
//             <li>
//               <Link href="/posts" className="hover:underline">
//                 All Posts
//               </Link>
//             </li>
//             <li>
//               <Link href="/posts/category/branding" className="hover:underline">
//                 Branding
//               </Link>
//             </li>
//             <li>
//               <Link href="/posts/category/web-design" className="hover:underline">
//                 Web Design
//               </Link>
//             </li>
//             <li>
//               <Link href="/posts/category/content" className="hover:underline">
//                 Content
//               </Link>
//             </li>
//             <li>
//               <Link href="/posts/category/guides" className="hover:underline">
//                 Guides
//               </Link>
//             </li>
//             <li>
//               <Link href="/posts/category/updates" className="hover:underline">
//                 Updates
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <section className="container mx-auto px-4 pb-12 pt-12">
//         <div className="max-w-5xl">
//           <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">{post.title}</h1>
//           <p className="mb-8 max-w-3xl text-xl text-gray-700">
//             {post.description || 'Add a cool description here.'}
//           </p>
//           <div className="flex items-center gap-1 text-sm text-gray-500">
//             <span>
//               By{' '}
//               <Link className="text-gray-950" href={''}>
//                 Kevin Wessa
//               </Link>
//             </span>
//             <span>•</span>
//             <span>
//               {post.publishedOn
//                 ? formatDate({ date: post.publishedOn, format: 'shortDateStamp' })
//                 : 'Date not available'}
//             </span>
//             <span>•</span>
//             <span>{post.readTime ? `${post.readTime} min read` : 'Add Read Time'}</span>
//           </div>
//         </div>
//       </section>

//       <div className="w-full">
//         <div className="px-2">
//           <div className="relative aspect-[3/2] w-full">
//             <Image
//               src={typeof post.image === 'string' ? post.image : post.image?.url || ''}
//               fill
//               alt={
//                 typeof post.image === 'object'
//                   ? post.image?.alt || ''
//                   : 'Featured image for blog post'
//               }
//               className="rounded-md object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
//         <div className="md:col-span-1">
//           <TableOfContents content={(post.content?.root?.children || []) as LexicalNode[]} />
//         </div>
//         <div className="md:col-span-2">
//           <article className="prose mx-auto pb-24">
//             <RichText
//               content={post.content?.root ? post.content : emptyLexicalContent}
//               enableProse={true}
//               enableGutter={false}
//             />
//           </article>
//         </div>
//       </div>
//     </article>
//   )
// }

// async function queryPostBySlug({ slug }: { slug: string }): Promise<Post | null> {
//   const payload = await getPayload({ config: configPromise })
//   try {
//     const result = await payload.find({
//       collection: 'posts',
//       limit: 1,
//       where: {
//         slug: {
//           equals: slug,
//         },
//       },
//     })
//     return result.docs[0] || null
//   } catch (error) {
//     return null
//   }
// }
export default function Page() {
  return <div>journal</div>
}
