export function WorkHero() {
  return (
    <>
      <div>
        <div className="grid grid-cols-[repeat(12,_1fr)] grid-rows-[15.00rem] gap-x-6 bg-zinc-800 py-12 text-gray-400 md:p-[] xl:p-[]">
          <div
            className="md:col-start-2 lg:col-start-3 xl:col-start-3"
            id="div-1"
            style={{
              gridColumnEnd: "span 12",
            }}
          >
            <div>
              <h1 className="mb-6 text-[4.00rem] font-black leading-none text-slate-500">
                We love a good challenge
              </h1>
              <div
                id="div-2"
                style={{
                  animationRangeEnd: "entry, exit",
                  animationRangeStart: "entry, exit",
                  animationTimeline: "view()",
                }}
              >
                <div className="columns-2 gap-x-6 md:mb-6">
                  <p className="mb-6">
                    ...and have been helping brands solve the now while
                    preparing for the next since 2017. We aim for growth, and
                    believe every pixel serves that purpose. We have empowered
                    our Growth Clients for years, serving as a resource in
                    <strong className="font-semibold">branding</strong>,{" "}
                    <strong className="font-semibold">marketing</strong>,{" "}
                    <strong className="font-semibold">web</strong> and{" "}
                    <strong className="font-semibold">product </strong>
                    departments. Our track record is proven across a multitde of
                    sectors, company sizes, and proudct focuses, demonstrated in
                    the work below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
