interface PortfolioCardProps {
  imageUrl: string;
  imageSrcSet?: string;
  title: string;
  category: string;
  href: string;
}

export function PortfolioCard({
  imageUrl,
  imageSrcSet,
  title,
  category,
  href,
}: PortfolioCardProps) {
  return (
    <a
      className="flex max-w-full flex-col items-start justify-start gap-2 text-sm text-blue-700"
      href={href}
    >
      <div className="w-full cursor-pointer overflow-hidden">
        <img
          className="inline-block h-96 w-full max-w-full align-middle"
          src={imageUrl}
          srcSet={imageSrcSet}
        />
      </div>
      <div className="cursor-pointer">
        <div className="overflow-hidden">
          <div className="text-black">{title}</div>
          <div className="h-0 w-full bg-black" />
        </div>
        <div className="text-black">{category}</div>
      </div>
    </a>
  );
}
