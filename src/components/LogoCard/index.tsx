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
          "flex h-28 w-full transform-gpu items-center justify-center overflow-hidden rounded-xl lg:h-40 min-[2100px]:h-44",
          {
            "bg-brand-dark-surface": variant === "surface",
            "bg-brand-dark-bg": variant === "default",
          }
        )}
      >
        <div className="flex h-full w-full items-center justify-center px-4 md:px-8 lg:px-8 min-[2100px]:px-10">
          <div className="relative h-12 w-full md:h-12 min-[2100px]:h-14">
            <Image
              src={logo}
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
