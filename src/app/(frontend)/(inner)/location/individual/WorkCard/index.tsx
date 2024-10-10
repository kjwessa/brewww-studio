export function WorkCard() {
  return (
    <div className="relative w-full">
      <a className="relative flex flex-col items-start" href="#">
        <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
          <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
            <svg
              className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
              fill="rgb(14, 15, 17)"
              version="1.1"
              viewBox="0 0 100 100"
              x="0"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                fill="rgb(14, 15, 17)"
              />
            </svg>
            <svg
              className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
              fill="rgb(14, 15, 17)"
              version="1.1"
              viewBox="0 0 100 100"
              x="0"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                fill="rgb(14, 15, 17)"
              />
            </svg>
            <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
              <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                Branding
              </div>
              <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                Website
              </div>
              <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                SEO
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800 text-black">
            <div className="relative w-full overflow-hidden">
              <div className="w-full">
                <div className="relative w-full overflow-hidden pb-[75%]">
                  <video className="absolute left-0 top-0 h-full w-full max-w-full object-cover">
                    <source
                      src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/gary-neville-thumbnail_2024-06-03-125526_bljp.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
          <div className="font-light">2023</div>
          <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <div className="ml-3 font-light">Gary Neville</div>
        </div>
        <h2 className="cursor-pointer pr-10 text-4xl text-white">
          Refreshing Gary Neville's digital presence
        </h2>
      </a>
    </div>
  );
}
