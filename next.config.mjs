import MillionLint from "@million/lint";
import { withContentCollections } from "@content-collections/next";

// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default MillionLint.next({
//   rsc: true,
// })(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Apply MillionLint first
const withMillionLint = MillionLint.next({
  rsc: true,
});

// Export the configuration with Content Collections as the last plugin
export default withContentCollections(withMillionLint(nextConfig));
