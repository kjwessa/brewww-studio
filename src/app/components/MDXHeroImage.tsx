import Image from "next/image";

export interface MDXHeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const MDXHeroImage = ({
  src,
  alt,
  width,
  height,
}: MDXHeroImageProps) => {
  return (
    <Image
      src={src.replace(/^(\/)?public\//, "/")}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
