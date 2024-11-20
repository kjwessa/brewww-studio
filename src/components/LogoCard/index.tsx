import Image from "next/image";
import { cn } from "@/utilities/cn";

interface LogoCardProps {
  logo: string;
  variant?: "surface" | "default";
}

export const LogoCard = ({ logo, variant = "default" }: LogoCardProps) => {
  return (
    <div className="h-full w-[280px] px-4">
      <div
        className={cn(
          "flex h-28 w-full items-center justify-center overflow-hidden rounded-3xl lg:h-40 min-[2100px]:h-44",
          {
            "bg-brand-dark-surface": variant === "surface",
            "bg-brand-dark-bg": variant === "default",
          }
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            className="px-4"
          />
        </div>
      </div>
    </div>
  );
};
