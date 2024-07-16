import { LinkMain } from "@/app/components/LinkMain";
import Image from "next/image";
import { ServiceCard as ServiceCardProps } from "@/app/types/serviceTypes";

export function ServiceCard({
  image,
  imageAlt,
  slug,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-bold uppercase">{title}</h2>
      <div>
        <div className="relative h-32 w-full pb-[66%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <p className="py-3 text-base">{description}</p>

      <LinkMain text="Learn More" link={`/services/${slug}`} size="medium" />
    </div>
  );
}
