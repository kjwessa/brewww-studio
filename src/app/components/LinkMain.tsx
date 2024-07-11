import Link from "next/link";

interface LinkMainProps {
  text: string;
}
export function LinkMain({ text }: LinkMainProps) {
  return (
    <>
      <Link className="flex text-lg font-medium text-gray-950" href="">
        <span className="flex cursor-pointer items-center">
          <span>{text}</span>
          <svg
            className="h-6 w-6 text-slate-300"
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
        </span>
      </Link>
    </>
  );
}
