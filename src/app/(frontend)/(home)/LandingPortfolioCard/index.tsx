import Link from "next/link";

interface LandingPortfolioCardProps {
  imageUrl: string;
  title: string;
  category: string;
  href: string;
}

export function LandingPortfolioCard({
  imageUrl,
  title,
  category,
  href,
}: LandingPortfolioCardProps) {
  return (
    <Link
      className="flex max-w-full flex-col items-start justify-start gap-2 text-sm text-blue-700"
      href={href}
    >
      <div className="w-full cursor-pointer overflow-hidden">
        <img
          className="inline-block h-96 w-full max-w-full align-middle"
          src={imageUrl}
        />
      </div>
      <div className="cursor-pointer">
        <div className="overflow-hidden">
          <div className="text-black">{title}</div>
          <div className="h-0 w-full bg-black" />
        </div>
        <div className="text-black">{category}</div>
      </div>
    </Link>
  );
}
