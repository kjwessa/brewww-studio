export function ThinkHero() {
  return (
    <>
      <div>
        <div className="flex flex-col content-stretch items-start justify-end bg-neutral-900 px-24 pb-24 pt-60 font-light text-white">
          <div className="m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center gap-4 self-start font-bold">
            <div className="pb-5 text-center uppercase">+ Insights</div>
            <h1 className="mx-0 my-3 mb-8 min-h-[0vw] text-center text-[6.75rem] leading-none">
              Their insights are simply...brilliant.
            </h1>
            <div className="pb-5 text-center uppercase text-neutral-400">
              - Our Moms (probably)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
