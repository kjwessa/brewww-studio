import { LinkMain } from "@/app/components/LinkMain";
import Image from "next/image";
import { ServiceCard as ServiceCardProps } from "@/app/types/serviceTypes";

export function ServiceCard({ image, imageAlt, slug }: ServiceCardProps) {
  return (
    <div>
      <h2 className="mb-3 text-4xl font-bold uppercase">Branding</h2>
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
      <p className="py-3 text-base">
        We distill your companys essence into a compelling visual and narrative
        identity. Our branding process goes beyond logos and color palettes—we
        create a kinetic brand experience that resonates with your audience and
        propels your business forward.
      </p>

      <LinkMain text="Learn More" href={`/services/${slug}`} size="medium" />
    </div>
  );
}
