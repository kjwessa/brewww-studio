export function CoolButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center">
      <a
        className="inline-flex"
        href=""
        style={{
          outlineOffset: "2px",
        }}
      >
        <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
          <div className="inline-flex">{children}</div>
        </div>
        <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
      </a>
      <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
        <div className="relative overflow-hidden">
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
          <div className="absolute left-0 top-0">
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
      </div>
    </div>
  );
}
