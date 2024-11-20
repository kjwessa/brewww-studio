// export const formatPagePath = (collection: string, doc: any): string => {
//   const { slug, breadcrumbs } = doc;

//   const nestedSlug = breadcrumbs?.slice(-1)?.[0]?.url;

//   let prefix = "";
//   const slugPath = nestedSlug ?? `/${slug}`;

//   if (collection) {
//     switch (collection) {
//       case "pages":
//         prefix = "";
//         break;
//       case "posts":
//         prefix = "/blog";
//         break;
//       case "work":
//         prefix = "/work";
//         break;
//       case "play":
//         prefix = "/play";
//         break;
//       default:
//         prefix = `/${collection}`;
//     }
//   }

//   return `${prefix}${slugPath}`;
// };
