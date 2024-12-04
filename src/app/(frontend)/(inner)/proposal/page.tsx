import Image from "next/image";
import Link from "next/link";

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
          <Link
            className="relative flex flex-col text-red-500 underline"
            href="#Proposal"
          >
            <Image
              className="cursor-pointer object-cover opacity-[0.999808]"
              src="/images/anchor-arrow-black-15.svg"
              alt="Anchor Arrow Black 15"
              height={176}
              width={128}
            />
            <Image
              className="absolute bottom-0 left-0 top-0 cursor-pointer object-cover opacity-[0.0402121]"
              src="/images/anchor-arrow-ember-red.svg"
              alt="Anchor Arrow Ember Red"
              height={176}
              width={128}
            />
          </Link>
        </div>
      </section>
      <section className="bg-white py-40 font-light text-zinc-900">
        <div className="grid auto-cols-fr grid-flow-col grid-cols-[349.562px_349.578px_349.578px_349.578px] grid-rows-[6.00rem] items-start justify-items-start gap-10">
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <Image
                className="object-cover"
                src="/images/map-icon-ember-red.svg"
                alt="Map Icon Ember Red"
                height={24}
                width={20}
              />
              <Link className="text-2xl" href="#">
                1212 South Congress Drive, Austin, TX 77130
              </Link>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <Image
                className="object-cover"
                src="/images/globe-icon-ember-red.svg"
                alt="Globe Icon Ember Red"
                width={24}
                height={24}
              />
              <Link className="text-2xl" href="#">
                plymouth.com
              </Link>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <Image
                className="object-cover"
                src="/images/phone-icon-ember-red.svg"
                alt="Phone Icon Ember Red"
                width={14}
                height={24}
              />
              <Link className="text-2xl" href="#">
                512-754-7272
              </Link>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
            <div className="flex items-start justify-start gap-4">
              <Image
                className="object-cover"
                src="/images/member-contact-headshot-ar-1-1.avif"
                alt="Member Contact Headshot Ar 1 1"
                width={48}
                height={48}
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
      <section className="bg-zinc-900 py-40 font-light text-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid auto-cols-fr grid-cols-[1256px_0px] grid-rows-[3.50rem] pb-10">
            <div className="col-span-1 row-span-1 flex items-start justify-start">
              <div className="rounded-full bg-red-500" />
              <h2 className="text-5xl text-white">Our Proposal</h2>
            </div>
          </div>
          <div className="text-4xl text-white/[0.7]">
            <p>
              The "Power the Journey" campaign will position Toyota as the
              ultimate choice for eco-conscious adventurers, highlighting their
              electric and hybrid SUVs' off-road capabilities. We'll develop a
              cohesive brand strategy and digital and social media assets that
              blend Toyota's legacy with its future.{" "}
            </p>
            <p>
              This will also include designing a campaign microsite and a
              landing page that captures Toyota's commitment to sustainability
              and adventure. Our goal is to ensure that Toyota's brand identity
              and website resonate with audiences who seek both environmental
              responsibility and unparalleled performance in every journey they
              take.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-40 font-light text-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid auto-cols-fr grid-cols-[1494.3px_0px] grid-rows-[3.50rem] pb-10">
            <div className="col-span-1 row-span-1 flex items-start justify-start">
              <div className="rounded-full bg-red-500" />
              <h2 className="text-5xl">Timeline & Estimated Effort by Phase</h2>
            </div>
          </div>
          <div className="sticky z-10 grid auto-cols-fr grid-flow-col grid-cols-[242.859px_161.906px_161.906px_161.906px_485.719px] grid-rows-[1.50rem] items-stretch gap-16 bg-neutral-100 px-6 py-5 text-xl">
            <h3>Phase</h3>
            <h3>Hours</h3>
            <h3>Timeline</h3>
            <h3>Cost</h3>
            <h3>Deliverables</h3>
          </div>
          <div>
            <div className="grid auto-cols-fr grid-flow-col grid-cols-[242.859px_161.906px_161.906px_161.906px_485.719px] grid-rows-[14.38rem] items-stretch gap-16 border-t-2 border-solid border-t-zinc-900/[0.15] px-6 pb-8 pt-12 text-lg">
              <div>Brand Strategy</div>
              <div>70 hrs*</div>
              <div>4 weeks</div>
              <div>$14,000</div>
              <ul className="list-disc pl-6">
                <li className="list-item">Strategy session</li>
                <li className="list-item">Creative brief development</li>
                <li className="list-item">
                  Audience segmentation (adventure and eco-conscious)
                </li>
                <li className="list-item">Campaign messaging</li>
                <li className="list-item">
                  Visual concepts (urban & off-road settings)
                </li>
                <li className="list-item">Campaign guidelines</li>
              </ul>
            </div>
            <div className="grid auto-cols-fr grid-flow-col grid-cols-[242.859px_161.906px_161.906px_161.906px_485.719px] grid-rows-[11.50rem] items-stretch gap-16 border-t-2 border-solid border-t-zinc-900/[0.15] px-6 pb-8 pt-12 text-lg">
              <div>Social Media Assets</div>
              <div>50 hrs*</div>
              <div>3 weeks</div>
              <div>$10,000</div>
              <ul className="list-disc pl-6">
                <li className="list-item">Social media assets</li>
                <li className="list-item">Digital ad design</li>
                <li className="list-item">
                  Video production (urban and off-road adventures)
                </li>
                <li className="list-item">
                  Content creation (blog posts, infographics, off-roading
                  guides)
                </li>
              </ul>
            </div>
            <div className="grid auto-cols-fr grid-flow-col grid-cols-[242.859px_161.906px_161.906px_161.906px_485.719px] grid-rows-[16.63rem] items-stretch gap-16 border-t-2 border-solid border-t-zinc-900/[0.15] px-6 pb-8 pt-12 text-lg">
              <div>Website Landing Page</div>
              <div>80 hrs*</div>
              <div>5weeks</div>
              <div>$16,000</div>
              <ul className="list-disc pl-6">
                <li className="list-item">Landing page wireframes</li>
                <li className="list-item">UX/UI design</li>
                <li className="list-item">
                  Content creation (focused on campaign messaging)
                </li>
                <li className="list-item">Responsive development</li>
                <li className="list-item">SEO optimization</li>
                <li className="list-item">Analytics setup</li>
                <li className="list-item">Launch support</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-0 bg-zinc-900" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-black p-8 text-white">
            <div className="text-center">
              <p className="text-3xl">
                12 Weeks <span className="text-brand-gold">•</span> 200 Hours
              </p>
              <p className="mt-2 text-display-small">$40,000*</p>
            </div>
            <hr className="my-8 border-t border-white/20" />
            <p className="mx-auto max-w-2xl text-center text-lg">
              *The design and development costs are approximate and will be
              finalized based on the specific features agreed upon during the
              design phase.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-2 bg-white px-2 py-2 text-zinc-900">
        <div className="grid grid-rows-2 gap-2">
          <Image
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7e11af569f38d969e0_Image.avif"
            alt="Image"
            width={800}
            height={600}
          />
          <Image
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7ec41fc05c0158a6cb_Image-1.avif"
            alt="Image 1"
            width={800}
            height={600}
          />
        </div>
        <Image
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7f038a61dbecde6b30_Image-2.avif"
          alt="Image 2"
          width={800}
          height={1200}
        />
      </section>
      <section className="relative bg-white py-20 font-light text-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-4 w-4 rounded-full bg-red-500" />
                <h2 className="text-4xl lg:text-5xl">About Plymouth</h2>
              </div>
              <p className="text-lg text-zinc-900/70">
                Our dedicated team of experts is passionate about driving your
                success by combining creativity, cutting-edge technology, and
                strategic insight. We collaborate to craft innovative solutions
                tailored to your unique business needs, ensuring that every
                project we undertake not only meets but exceeds your
                expectations.
              </p>
            </div>
            <div className="relative grid grid-cols-2 gap-8">
              <Image
                className="h-96 w-full object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c0fd4751b1d035e8c66f5b_homepage-about-image-2-ar-4-5.avif"
                alt="About Plymouth image 1"
                width={600}
                height={750}
              />
              <Image
                className="mt-16 h-80 w-full object-cover"
                src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c0fd4751b1d035e8c66f59_homepage-about-image-3-ar-4-5.avif"
                alt="About Plymouth image 2"
                width={600}
                height={750}
              />
              <div className="absolute left-1/2 top-1/2 -z-10 flex h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-zinc-900">
                <p className="text-center text-xl font-bold text-zinc-900">
                  We craft unbounded brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white pt-40 font-light text-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-4 w-4 rounded-full bg-red-500" />
                <h2 className="text-4xl lg:text-5xl">The Way We Work</h2>
              </div>
              <p className="text-lg text-zinc-900/70">
                Our streamlined process ensures a seamless journey from strategy
                to execution, creating a powerful and cohesive brand presence.
              </p>
            </div>
            <div>
              <div className="relative cursor-pointer border-b-2 border-solid border-b-zinc-900/[0.15] pb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">
                    <span className="mr-2 text-red-500">01.</span>Discovery &
                    Strategy
                  </h3>
                  <div className="flex items-center justify-center rounded-full border border-zinc-900/[0.15] p-2">
                    <Image
                      className="h-1.5 w-3 object-cover"
                      src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c0fd4751b1d035e8c66eb3_arrow-down-ember.svg"
                      alt="Arrow down"
                      width={12}
                      height={6}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              </div>
              <div className="relative cursor-pointer border-b-2 border-solid border-b-zinc-900/[0.15] py-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">
                    <span className="mr-2 text-red-500">02.</span>Design &
                    Development
                  </h3>
                  <div className="flex items-center justify-center rounded-full border border-zinc-900/[0.15] p-2">
                    <Image
                      className="h-1.5 w-3 object-cover"
                      src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c0fd4751b1d035e8c66eb3_arrow-down-ember.svg"
                      alt="Arrow down"
                      width={12}
                      height={6}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              </div>
              <div className="relative cursor-pointer border-b-2 border-solid border-b-zinc-900/[0.15] py-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">
                    <span className="mr-2 text-red-500">03.</span>Execution &
                    Optimization
                  </h3>
                  <div className="flex items-center justify-center rounded-full border border-zinc-900/[0.15] p-2">
                    <Image
                      className="h-1.5 w-3 object-cover"
                      src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c0fd4751b1d035e8c66eb3_arrow-down-ember.svg"
                      alt="Arrow down"
                      width={12}
                      height={6}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 font-light text-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-red-500"></div>
            <h2 className="text-5xl">Case Studies</h2>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="flex overflow-hidden rounded-lg shadow-lg">
            <div className="w-1/2 bg-black p-8 text-white">
              <h3 className="mb-4 text-3xl font-bold">
                Vintage Broncos Website Redesign
              </h3>
              <div className="space-y-2 text-sm">
                <p>Client: Denver Broncos</p>
                <p>Duration: 3 months</p>
                <p>Services: UX/UI Design, Web Development</p>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/images/vintage-broncos-website-redesign.avif"
                alt="Vintage Broncos Website Redesign"
                className="h-full w-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
