// "use client";

// import React, { useEffect, useRef } from "react";
// import { Service, Media } from "@/payload-types";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";

// export default function ServiceCard({ service }: { service: Service }) {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!cardRef.current) return;

//     const card = cardRef.current;
//     const image = card.querySelector(".service-card-image") as HTMLElement;
//     const text = card.querySelector(".service-card-text") as HTMLElement;
//     const allCards = document.querySelectorAll(".service-card");

//     const timeline = gsap.timeline({ paused: true });

//     timeline.to(image, {
//       width: "180px",
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     timeline.to(
//       text,
//       {
//         x: "8%",
//         duration: 0.5,
//         ease: "power2.out",
//       },
//       0,
//     );

//     const updateOpacity = (progress: number) => {
//       allCards.forEach((otherCard, index) => {
//         if (otherCard !== card) {
//           const opacity = gsap.utils.clamp(
//             0.3,
//             1,
//             1 - 0.7 * progress * (1 - index / allCards.length),
//           );
//           gsap.to(otherCard, {
//             opacity: opacity,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         }
//       });
//     };

//     timeline.to(
//       {},
//       {
//         duration: 0.5,
//         onUpdate: () => updateOpacity(timeline.progress()),
//       },
//       0,
//     );

//     let currentProgress = 0;

//     const playAnimation = () => {
//       console.log("Hover on - Opacity:", 1 - currentProgress);
//       gsap.to(timeline, {
//         progress: 1,
//         duration: 0.8, // Increased duration for slower hover on effect
//         ease: "power2.out",
//         overwrite: true,
//         onUpdate: () => {
//           currentProgress = timeline.progress();
//         },
//       });
//     };

//     const reverseAnimation = () => {
//       console.log("Hover off - Opacity:", 1 - currentProgress);
//       gsap.to(timeline, {
//         progress: 0,
//         duration: 0.3, // Decreased duration for faster hover off effect
//         ease: "power2.in",
//         overwrite: true,
//         onUpdate: () => {
//           currentProgress = timeline.progress();
//         },
//       });
//     };

//     card.addEventListener("mouseenter", playAnimation);
//     card.addEventListener("mouseleave", reverseAnimation);

//     return () => {
//       card.removeEventListener("mouseenter", playAnimation);
//       card.removeEventListener("mouseleave", reverseAnimation);
//       timeline.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="service-card w-full border-b-2 border-solid border-neutral-700"
//     >
//       <Link
//         href={`/services/${service.slug}`}
//         className="flex w-full items-center py-4 lg:pb-6 lg:pt-6"
//       >
//         <div className="service-card-image inline-flex h-16 w-0 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 md:h-28 lg:h-36 min-[1800px]:h-40">
//           {service.image && (
//             <Image
//               src={(service.image as Media)?.url || ""}
//               alt={service.title}
//               width={180}
//               height={160}
//               className="h-full w-full object-cover"
//             />
//           )}
//         </div>
//         <div className="service-card-text ml-3 inline-flex text-display-medium leading-none text-white">
//           <div>{service.title}</div>
//         </div>
//       </Link>
//     </div>
//   );
// }
