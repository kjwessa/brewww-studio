// import { Work } from "@/payload-types";
// import Link from "next/link";
// import Image from "next/image";
// import { Title } from "../Title";
// import { Text } from "../Text";

// export type WorkCardProps = {
//   project: Work;
// };

// export function WorkCard({ project }: WorkCardProps) {
//   return (
//     <div className="relative w-full text-white">
//       <Link
//         href={`/work/${project.slug}`}
//         className="relative flex flex-col items-start"
//       >
//         <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
//           <div className="absolute right-0 top-0 z-20 pb-3 pl-3 pt-1">
//             <div className="-mb-2 -mr-2 flex flex-wrap items-center text-label-small text-white lg:-mb-3">
//               <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
//                 Branding
//               </div>
//               <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
//                 Website
//               </div>
//               <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
//                 SEO
//               </div>
//             </div>
//           </div>
//           <div className="relative w-full overflow-hidden rounded-lg bg-zinc-800 text-black">
//             <div className="relative w-full overflow-hidden">
//               <div className="w-full">
//                 <div className="relative w-full overflow-hidden pb-[75%]">
//                   <Image
//                     src={
//                       typeof project.image === "string"
//                         ? project.image
//                         : project.image?.url || ""
//                     }
//                     alt={
//                       typeof project.image === "object"
//                         ? project.image?.alt
//                         : ""
//                     }
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
//           <Text 
//             level="p" 
//             size="label-large" 
//             className="flex items-center font-light"
//           >
//             <span>2023</span>
//             <span className="mx-3">/</span>
//             <span>{project.title}</span>
//           </Text>
//         </div>

//         <Title
//           el="h3"
//           size="title-medium"
//           className="max-w-2xl leading-none"
//         >
//           {project.tagline}
//         </Title>
//       </Link>
//     </div>
//   );
// }
