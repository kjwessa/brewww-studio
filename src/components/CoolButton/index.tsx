import { cn } from "@/utilities/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 cursor-pointer font-semibold",
  {
    variants: {
      showIcon: {
        true: "pr-12",
        false: "",
      },
    },
    defaultVariants: {
      showIcon: true,
    },
  },
);

interface CoolButtonProps extends VariantProps<typeof buttonVariants> {
  text: string;
  href?: string;
  showIcon?: boolean;
}

export function CoolButton({
  text,
  href = "",
  showIcon = true,
}: CoolButtonProps) {
  return (
    <div className="relative inline-flex items-center">
      <a
        className={cn(buttonVariants({ showIcon }))}
        href={href}
        style={{
          outlineOffset: "2px",
        }}
      >
        <span>{text}</span>
        {showIcon && (
          <div className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full">
            <div>
              <svg
                className="h-3 w-3"
                fill="rgb(1, 2, 2)"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                  fill="rgb(1, 2, 2)"
                />
              </svg>
            </div>
          </div>
        )}
      </a>
    </div>
  );
}
