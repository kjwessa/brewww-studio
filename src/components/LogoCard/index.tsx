import Image from "next/image";

interface LogoCardProps {
  logo: string;
  variant?: "surface";
}

export function LogoCard({ logo, variant }: LogoCardProps) {
  if (!logo) return null;

  return (
    <div className="h-full w-[280px] flex-shrink-0 px-4">
      <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-900 py-10">
        <div className="relative h-12 w-full px-8">
          <Image
            src={logo}
            alt="Technology Logo"
            fill
            style={{ objectFit: "contain" }}
            className="select-none"
          />
        </div>
      </div>
    </div>
  );
}
