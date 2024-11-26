// import { getPayload } from "payload";
// import configPromise from "@payload-config";
// import Image from "next/image";

// // Define the Brand type
// type Brand = {
//   id: string;
//   title: string;
//   logoLight?: {
//     url: string;
//   };
// };

// // Hero Section Component
// const HeroSection = () => (
//   <div className="mb-6 md:mb-9 md:w-2/3 min-[1250px]:mb-12 min-[1250px]:w-1/2 min-[1900px]:mb-14 min-[1900px]:w-1/2">
//     <h1 className="mb-5 text-7xl leading-none text-white md:mb-8 min-[1250px]:mb-10">
//       Clients
//     </h1>
//     <p className="text-3xl font-medium leading-8 text-gray-300">
//       We&apos;ve partnered with forward-thinking, belief oriented companies
//       across a variety of sectors.
//     </p>
//   </div>
// );

// // Client Grid Component with Images
// const ClientGridWithImages = ({ brands }: { brands: Brand[] }) => (
//   <div className="mt-14 md:mt-20">
//     <h2 className="mb-8 text-4xl text-white">Clients with Logos</h2>
//     <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 min-[1250px]:grid-cols-6">
//       {brands
//         .filter((brand) => brand.logoLight)
//         .map((brand) => (
//           <li key={brand.id} className="list-item py-8">
//             <div className="flex flex-col items-center">
//               <div className="relative h-[150px] w-[200px] bg-brand-dark-surface">
//                 <Image
//                   src={brand.logoLight!.url}
//                   alt={`${brand.title} logo`}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </li>
//         ))}
//     </ul>
//   </div>
// );

// // Client Grid Component without Images
// const ClientGridWithoutImages = ({ brands }: { brands: Brand[] }) => (
//   <div className="mt-14 md:mt-20">
//     <h2 className="mb-8 text-4xl text-white">Clients without Logos</h2>
//     <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 min-[1250px]:grid-cols-3">
//       {brands
//         .filter((brand) => !brand.logoLight)
//         .map((brand) => (
//           <li key={brand.id} className="list-item py-8">
//             <div className="flex flex-col items-center">
//               <h2 className="text-3xl text-white">{brand.title}</h2>
//             </div>
//           </li>
//         ))}
//     </ul>
//   </div>
// );

// export default async function Page() {
//   const payload = await getPayload({ config: configPromise });
//   const brandsResponse = await payload.find({
//     collection: "brands",
//     limit: 100,
//   });

//   const brands: Brand[] = brandsResponse.docs.map((doc) => ({
//     id: doc.id,
//     title: doc.title ?? 'Untitled Brand',
//     logoLight:
//       doc.logoLight &&
//       typeof doc.logoLight === "object" &&
//       "url" in doc.logoLight
//         ? { url: doc.logoLight.url as string }
//         : undefined,
//   }));

//   return (
//     <section className="w-full overflow-hidden bg-brand-dark-bg pb-10 pt-32 text-lg text-white md:pb-16 md:pt-44 min-[1250px]:pb-20 min-[1250px]:pt-48 min-[1900px]:pb-20 min-[1900px]:pt-56">
//       <div className="m-6 md:mx-10 min-[1250px]:mx-20 min-[1550px]:mx-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1900px]:max-w-screen-2xl min-[2048px]:mx-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:max-w-[160.00rem] min-[2940px]:mx-auto">
//         <HeroSection />
//         <ClientGridWithImages brands={brands} />
//         <ClientGridWithoutImages brands={brands} />
//       </div>
//     </section>
//   );
// }
