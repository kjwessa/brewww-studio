import { MDXHeroImage } from "./MDXHeroImage";
import { MDXHeroImageProps } from "./MDXHeroImage";

export const MDXComponents = {
  img: (props: MDXHeroImageProps) => <MDXHeroImage {...props} />,
};
