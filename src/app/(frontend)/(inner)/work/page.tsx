// import { getPayload } from "payload";
// import configPromise from "@payload-config";
// import { WorkCard } from "@/components/WorkCard";
// import Link from "next/link";
// import Image from "next/image";
// import { ImageGrow } from "./[slug]/HeroImageGrow";

// export default async function WorkPage() {
//   const payload = await getPayload({ config: configPromise });
//   const projects = await payload.find({
//     collection: "work",
//     limit: 1000,
//     sort: "-updatedAt",
//     where: {
//       _status: { equals: "published" },
//     },
//   });

//   const projectsOld = await payload.find({
//     collection: "work",
//     limit: 1000,
//     sort: "title",
//     where: {
//       _status: { equals: "published" },
//     },
//   });
//   const testimonials = await payload.find({
//     collection: "testimonials",
//     limit: 1000,
//     sort: "-updatedAt",
//   });

//   return (
//     <>
//       <div className="bg-brand-dark-bg text-black">
//         <section className="py-36">
//           <div className="container mx-auto px-4">
//             <div className="w-full lg:w-[93.75%]">
//               <h1 className="mb-2 inline-flex w-auto items-center lg:absolute lg:left-[1.00rem] lg:top-[0.75rem] lg:mb-0">
//                 <div className="h-1.5 w-1.5 rounded-full bg-white" />
//                 <div className="ml-2 font-light text-white">Our Work</div>
//               </h1>
//               <ul className="flex list-none flex-wrap">
//                 <li className="mr-4 list-item lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer indent-48 text-[3.25rem] lowercase leading-none text-white">
//                       Explore all
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm text-neutral-400 lg:mb-2">
//                       38
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Fashion
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       7
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Fitness & Sport
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       2
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Education
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       3
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Health
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       5
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Property
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       8
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Corporate
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       6
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Food & Drink
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       6
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Agency
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       7
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       eCommerce
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       16
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       B2B
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       22
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       B2C
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       12
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="mr-4 list-item text-neutral-400 lg:mr-10">
//                   <Link className="inline-flex items-end" href="">
//                     <div className="cursor-pointer text-[3.25rem] lowercase leading-none">
//                       Archive
//                     </div>
//                     <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">
//                       17
//                     </div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <div className="grid grid-cols-1 gap-8 px-2 md:grid-cols-2 lg:px-3 xl:px-4">
//           {projects.docs.map((project, index) => {
//             const isTestimonial = index === 1;
//             const isContactUs = index === 7;

//             return (
//               <div key={project.id} className="mb-16 lg:mb-28">
//                 {isTestimonial && (
//                   <div className="mb-20 hidden w-full justify-center lg:flex">
//                     <div className="relative max-w-xl min-[2100px]:max-w-3xl">
//                       <svg
//                         className="absolute left-0 top-0 h-6 w-6 text-white"
//                         fill="rgb(255, 255, 255)"
//                         viewBox="0 0 17 11"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"
//                           fill="rgb(255, 255, 255)"
//                         />
//                       </svg>
//                       <h2 className="mb-5 indent-20 text-4xl text-white">
//                         {testimonials.docs[0].callout}
//                       </h2>
//                       <div className="flex items-end">
//                         <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-lime-300 text-2xl lg:h-12 lg:w-12">
//                           <div className="mt-0">O</div>
//                         </div>
//                         <div className="ml-2 mr-0 lg:ml-3 lg:mr-0">
//                           <div className="text-white">
//                             {testimonials.docs[0].author}
//                           </div>
//                           <div className="text-sm font-light text-zinc-400">
//                             {typeof testimonials.docs[0].brand === "object" &&
//                             testimonials.docs[0].brand?.title
//                               ? testimonials.docs[0].brand.title
//                               : typeof testimonials.docs[0].brand === "string"
//                                 ? testimonials.docs[0].brand
//                                 : null}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {isContactUs && (
//                   <div className="mb-16 flex w-full flex-col items-center text-center lg:mb-28">
//                     <h2 className="text-5xl text-white lg:mb-3">
//                       You're still here?!
//                     </h2>
//                     <div className="mb-5 w-full text-lg font-light text-zinc-400">
//                       <p className="mb-6">You must really like us...</p>
//                     </div>
//                     <div className="relative inline-flex items-center">
//                       <a
//                         className="inline-flex blur"
//                         href=""
//                         style={{
//                           outlineOffset: "2px",
//                           outlineStyle: "solid",
//                           outlineWidth: "2px",
//                         }}
//                       >
//                         <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
//                           <div className="inline-flex">Contact us</div>
//                         </div>
//                         <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300" />
//                       </a>
//                       <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
//                         <div className="relative overflow-hidden">
//                           <div>
//                             <svg
//                               className="h-3 w-3"
//                               fill="rgb(1, 2, 2)"
//                               viewBox="0 0 384 512"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
//                                 fill="rgb(1, 2, 2)"
//                               />
//                             </svg>
//                           </div>
//                           <div className="absolute left-0 top-0">
//                             <svg
//                               className="h-3 w-3"
//                               fill="rgb(1, 2, 2)"
//                               viewBox="0 0 384 512"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
//                                 fill="rgb(1, 2, 2)"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <WorkCard project={project} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div>
//         <div className="w-full text-neutral-900">
//           <div className="m-auto flex min-h-screen w-full flex-col overflow-clip">
//             <section className="relative bg-white min-[1000px]:pt-20 min-[1001px]:pt-28">
//               <div className="m-auto w-[92%] min-[1600px]:pb-10 min-[1600px]:pt-20 min-[1920px]:pb-12 min-[1920px]:pt-28 min-[1921px]:pb-12 min-[1921px]:pt-28">
//                 <div>
//                   <h1 className="text-[10.00rem] uppercase leading-none">
//                     Our work
//                   </h1>

//                   <div className="relative min-[1600px]:mt-16 min-[1920px]:mt-24 min-[1921px]:mt-24">
//                     <ul className="list-none flex-wrap gap-[0.13rem] text-lg uppercase min-[671px]:flex min-[1600px]:mt-10 min-[1920px]:mt-12 min-[1921px]:mt-12">
//                       <li className="list-item text-white">
//                         <a
//                           className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
//                           href=""
//                         >
//                           <span className="cursor-pointer">Featured</span>
//                         </a>
//                       </li>

//                       <li className="list-item">
//                         <a
//                           className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
//                           href=""
//                         >
//                           <span className="cursor-pointer">
//                             Websites
//                             <sup className="inline-block align-super text-[0.63rem]">
//                               18
//                             </sup>
//                           </span>
//                         </a>
//                       </li>

//                       <li className="list-item">
//                         <a
//                           className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
//                           href=""
//                         >
//                           <span className="cursor-pointer">
//                             Shops
//                             <sup className="inline-block align-super text-[0.63rem]">
//                               15
//                             </sup>
//                           </span>
//                         </a>
//                       </li>

//                       <li className="list-item">
//                         <a
//                           className="rounded-full bg-gray-200 min-[671px]:pb-1 min-[671px]:pl-3.5 min-[671px]:pr-3.5 min-[671px]:pt-1"
//                           href=""
//                         >
//                           <span className="cursor-pointer">
//                             Web Apps
//                             <sup className="inline-block align-super text-[0.63rem]">
//                               6
//                             </sup>
//                           </span>
//                         </a>
//                       </li>
//                     </ul>

//                     <span className="absolute left-0 top-0 rounded-full bg-neutral-900" />
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <section className="relative">
//               <div className="relative mb-[-100vh]">
//                 <div className="bg-red-400 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
//                   <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
//                     <div className="md:pb-24 md:pt-24 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
//                       <h3 className="text-[5.00rem] uppercase leading-none">
//                         <a className="inline-block" href="">
//                           Classic Driven
//                         </a>
//                       </h3>

//                       <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
//                         <p>
//                           A website showcasing timeless craftsmanship while
//                           serving as an effective marketing tool to guide
//                           Classic Driven through their next chapter.
//                         </p>
//                       </div>

//                       <a
//                         className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
//                         href=""
//                       >
//                         <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
//                           View Project
//                           <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
//                         </span>
//                       </a>
//                       {"                    "}
//                     </div>

//                     <div className="min-[769px]:w-[65.4737%]">
//                       <a
//                         className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
//                         href=""
//                       >
//                         <Image
//                           className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
//                           src="https://bucket.brewww.studio/brewww/media/temp-azle.avif"
//                           alt="Heritage Driven"
//                           fill
//                         />
//                         {"                        "}
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-stone-300 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
//                   <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
//                     <div className="md:pb-16 md:pt-16 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
//                       <h3 className="text-[5.00rem] uppercase leading-none">
//                         <a className="inline-block" href="">
//                           Rome Tile
//                         </a>
//                       </h3>

//                       <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
//                         <p>
//                           A WooCommerce store where design, functionality, and
//                           narrative converge to create a memorable brand
//                           experience.
//                         </p>
//                       </div>

//                       <a
//                         className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
//                         href=""
//                       >
//                         <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
//                           View Project
//                           <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
//                         </span>
//                       </a>
//                       {"                    "}
//                     </div>

//                     <div className="min-[769px]:w-[65.4737%]">
//                       <a
//                         className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
//                         href=""
//                       >
//                         <Image
//                           className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
//                           src="https://bucket.brewww.studio/brewww/media/temp-azle.avif"
//                           alt="Paris Tile"
//                           fill
//                         />
//                         {"                        "}
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-amber-300 min-[769px]:sticky min-[769px]:top-0 min-[769px]:overflow-x-hidden min-[769px]:overflow-y-hidden">
//                   <div className="m-auto flex w-[92%] min-[769px]:h-screen min-[1921px]:max-w-[118.75rem]">
//                     <div className="md:pb-24 md:pt-24 min-[769px]:relative min-[769px]:w-[34.5263%] min-[769px]:pr-14 min-[1600px]:pb-16 min-[1600px]:pt-16 min-[1920px]:pb-24 min-[1920px]:pt-24 min-[1921px]:pb-24 min-[1921px]:pt-24">
//                       <h3 className="text-[5.00rem] uppercase leading-none">
//                         <a className="inline-block" href="">
//                           The Fabric Emporium
//                         </a>
//                       </h3>

//                       <div className="text-[1.38rem] leading-7 min-[769px]:max-w-[26.25rem] lg:mt-5 min-[1025px]:mt-5">
//                         <p>
//                           With a fresh website on the horizon, it was the ideal
//                           moment for The Fabric Emporium to reimagine their logo
//                           and visual identity.
//                         </p>
//                       </div>

//                       <a
//                         className="relative inline-block overflow-hidden rounded-full bg-neutral-900 text-center text-lg uppercase text-white lg:mt-6 min-[1025px]:mt-8"
//                         href=""
//                       >
//                         <span className="relative cursor-pointer lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5">
//                           View Project
//                           <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white lg:pb-1.5 lg:pl-3.5 lg:pr-3.5 lg:pt-1.5 min-[1025px]:pb-1.5 min-[1025px]:pl-3.5 min-[1025px]:pr-3.5 min-[1025px]:pt-1.5" />
//                         </span>
//                       </a>
//                       {"                    "}
//                     </div>

//                     <div className="min-[769px]:w-[65.4737%]">
//                       <a
//                         className="min-[769px]:relative min-[769px]:flex min-[769px]:h-full"
//                         href=""
//                       >
//                         <Image
//                           className="h-auto max-w-full cursor-pointer object-cover min-[769px]:absolute min-[769px]:left-0 min-[769px]:top-0 min-[769px]:h-full min-[769px]:w-[calc(23.6334%_+_50vw)] min-[769px]:max-w-none"
//                           src="https://bucket.brewww.studio/brewww/media/temp-azle.avif"
//                           alt="The Millshop Online"
//                           fill
//                         />
//                         {"                        "}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <section className="relative overflow-hidden bg-white min-[1600px]:pb-20 min-[1600px]:pt-20 min-[1920px]:pb-28 min-[1920px]:pt-28 min-[1921px]:pb-28 min-[1921px]:pt-28">
//               <div className="m-auto w-[92%] uppercase min-[769px]:flex min-[1600px]:mb-16 min-[1920px]:mb-24 min-[1921px]:mb-24 min-[1921px]:max-w-[118.75rem]">
//                 <div className="text-lg">
//                   <h2 className="inline-block min-[671px]:pl-6 min-[769px]:mt-5">
//                     Websites and brands
//                   </h2>
//                 </div>

//                 <div className="text-[1.38rem] leading-7 md:mt-8 min-[769px]:ml-auto min-[769px]:w-[65.4737%]">
//                   <p>
//                     <span className="inline-block overflow-hidden text-[7.50rem] leading-none">
//                       Take a look at our most successful projects
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="m-auto w-[92%] text-[1.38rem] leading-7 min-[1921px]:max-w-[118.75rem]">
//                 <div className="relative">
//                   <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {projectsOld.docs.map((project, index) => {
//                       const rowIndex = Math.floor(index / 2);
//                       const isWide =
//                         (rowIndex % 2 === 0 && index % 2 === 0) ||
//                         (rowIndex % 2 === 1 && index % 2 === 1);

//                       return (
//                         <li
//                           key={project.id}
//                           className={`relative list-item h-full ${isWide ? "md:col-span-2" : ""} mb-8 flex h-full flex-col`}
//                         >
//                           <span className="absolute left-0 top-0 z-[2] w-full p-4 text-lg uppercase text-white md:p-6 lg:p-8">
//                             <Link href="">Website</Link>
//                           </span>
//                           <Link
//                             className="w-full flex-grow overflow-hidden"
//                             href={`/work/${project.slug}`}
//                           >
//                             <div className="relative pt-[75%]">
//                               <Image
//                                 className="cursor-pointer object-cover"
//                                 src={
//                                   typeof project.image === "string"
//                                     ? project.image
//                                     : (project.image as { url: string })?.url ||
//                                       ""
//                                 }
//                                 alt={project.title}
//                                 fill
//                               />
//                             </div>
//                           </Link>
//                           <div className="mt-4 flex flex-col justify-between min-[1025px]:mt-5">
//                             <div className="flex-grow">
//                               <h5 className="mb-2 text-xl font-semibold">
//                                 <Link className="inline-block" href="">
//                                   {project.title}
//                                 </Link>
//                               </h5>
//                               <p className="mb-4 opacity-50">
//                                 {project.tagline}
//                               </p>
//                             </div>
//                             <div className="text-lg uppercase">
//                               <Link
//                                 className="relative inline-block overflow-hidden rounded-full bg-gray-200 px-4 py-2 text-center"
//                                 href={`/work/${project.slug}`}
//                               >
//                                 <span className="relative cursor-pointer">
//                                   View
//                                   <span className="absolute left-0 top-full w-full rounded-tl-full rounded-tr-full bg-white" />
//                                 </span>
//                               </Link>
//                             </div>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
