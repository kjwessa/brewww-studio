import Link from "next/link";
import { cn } from "@/utilities/cn";

interface LinkMainProps {
  text: string;
  link: string;
  showArrow?: boolean;
  size?: "large" | "medium" | "small";
}
export function LinkMain({
  text,
  link,
  showArrow = true,
  size = "medium",
}: LinkMainProps) {
  const sizeClass =
    size === "large" ? "text-lg" : size === "medium" ? "text-base" : "text-sm";

  const linkClass = cn("flex items-center font-medium", sizeClass);

  return (
    <>
      <Link className={linkClass} href={link}>
        <span className="flex cursor-pointer items-center">
          <span>{text}</span>
          {showArrow && (
            <svg
              className="h-4 w-4 text-slate-300"
              fill="rgb(187, 196, 210)"
              preserveAspectRatio="none"
              role="presentation"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"
                fill="rgb(187, 196, 210)"
              />
            </svg>
          )}
        </span>
      </Link>
    </>
  );
}
