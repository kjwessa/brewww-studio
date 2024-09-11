// ServiceLinks component
const ServiceLinks = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div className="flex flex-col items-start">
    <h4 className="min-h-[0vw] text-lg">{title}</h4>
    {links.map((link) => (
      <a
        key={link.href}
        className="relative mb-1 inline-block max-w-full font-bold text-white"
        href={link.href}
      >
        <div className="uppercase text-neutral-900">{link.name}</div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 w-1/5 bg-neutral-900" />
      </a>
    ))}
  </div>
);

export function HomeServices() {
  const brandingLinks = [
    { name: "Brand Strategy", href: "/capabilities/brand-strategy" },
    { name: "Brand Identity", href: "/capabilities/brand-identity" },
    { name: "Brand Content", href: "/capabilities/brand-content" },
  ];

  const webLinks = [
    { name: "Web Design & UX", href: "/capabilities/web-design-and-ux" },
    { name: "Web Development", href: "/capabilities/web-development" },
    { name: "SEO & Search", href: "/capabilities/seo-and-search" },
  ];

  const creativeLinks = [
    { name: "Graphic Design", href: "/capabilities/graphic-design" },
    { name: "Photography", href: "/capabilities/photography" },
    { name: "Social Media", href: "/capabilities/social-media-management" },
  ];

  return (
    <>
      <div>
        <div className="relative content-stretch items-start justify-start bg-white px-6 py-24 font-light text-neutral-900 sm:px-12 sm:py-36 md:px-24">
          <div className="relative m-auto flex w-full max-w-[62.50rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start">
            <div className="relative grid auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-4">
              <div className="col-span-4 row-span-1 self-end overflow-hidden font-bold uppercase">
                <div className="flex flex-col items-start">
                  <div className="pb-5">
                    <span className="text-orange-400">/</span> What we do (and
                    Do Well)
                  </div>
                </div>
              </div>
              <div className="col-span-6 row-span-2 overflow-hidden text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[3.63rem]">
                <div className="flex flex-col items-start">
                  <h2 className="min-h-[0vw]">
                    Brewww is a creative studio that finds the places where{" "}
                    <strong className="font-extrabold">needs</strong>,{" "}
                    <strong className="font-extrabold">stories</strong>, and{" "}
                    <strong className="font-extrabold">technology</strong>{" "}
                    overlap.
                  </h2>
                </div>
              </div>
              <div className="col-start-1 col-end-3 row-start-5 row-end-7 overflow-hidden">
                <ServiceLinks title="Branding" links={brandingLinks} />
              </div>
              <div className="col-start-3 col-end-6 row-start-5 row-end-7 overflow-hidden">
                <ServiceLinks title="Web" links={webLinks} />
              </div>
              <div className="col-start-5 col-end-6 row-end-7 overflow-hidden">
                <ServiceLinks title="Creative" links={creativeLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
