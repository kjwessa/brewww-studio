export default function ProposalPage() {
  return (
    <>
      <section className="bg-white pt-40 font-light text-zinc-900">
        <div className="relative grid auto-cols-fr grid-cols-[1318.31px_136px] grid-rows-[24.50rem] items-end justify-end justify-items-start gap-16 px-20">
          <div>
            <div className="pb-1 text-[2.75rem] leading-none">
              <div>Branding & Website Proposal</div>
            </div>
            <div className="pb-1 text-[11.00rem] uppercase leading-none text-red-500">
              <h1>Plymouth</h1>
            </div>
            <div className="pb-1 text-[11.00rem] uppercase leading-none text-red-500">
              <h1>X Toyota</h1>
            </div>
          </div>
          <a
            className="relative flex flex-col text-red-500 underline"
            href="https://plymouth-proposal-template.webflow.io/#Proposal"
          >
            <img
              className="h-44 w-32 cursor-pointer object-cover opacity-[0.999808]"
              src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66ccef58dd1d93696b6b3864_anchor-arrow-black-15.svg"
            />
            <img
              className="absolute bottom-0 left-0 top-0 h-44 w-32 cursor-pointer object-cover opacity-[0.0402121]"
              src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66ccefcb4b88351f4f2d549a_anchor-arrow-ember-red.svg"
            />
          </a>
        </div>
      </section>
      <section className="bg-white py-40 font-light text-zinc-900">
        <div className="grid auto-cols-fr grid-flow-col grid-cols-[349.562px_349.578px_349.578px_349.578px] grid-rows-[6.00rem] items-start justify-items-start gap-10">
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <img
                className="h-6 w-5 object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c103d3c8d628dba866cdfd_map-icon-ember-red.svg"
              />
              <a className="text-2xl" href="https://webflow.com/templates">
                1212 South Congress Drive, Austin, TX 77130
              </a>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <img
                className="h-6 w-6 object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c1051061e17f3f3a87bd18_globe-icon-ember-red.svg"
              />
              <a className="text-2xl" href="https://webflow.com/templates">
                plymouth.com
              </a>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <img
                className="h-6 w-3.5 object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c10510890eab1cb3aeb59a_phone-icon-ember-red.svg"
              />
              <a
                className="text-2xl"
                href="https://plymouth-proposal-template.webflow.io/tel:512-754-7272"
              >
                512-754-7272
              </a>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <img
                className="h-12 w-12 object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66ccfc5d607973ddecd2506f_member-contact-headshot-ar-1-1.avif"
              />
              <div>
                <div className="text-2xl">Amber Yun</div>
                <div className="text-lg text-zinc-900/[0.7]">
                  Account Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
