import Image from "next/image";

interface BlogPostCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
}) => (
  <div className="auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto]">
    <a className="inline-block max-w-full" href={href}>
      <div className="relative h-96 w-full overflow-hidden rounded-md">
        <Image
          alt={imageAlt}
          className="object-cover"
          src={imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex items-stretch justify-start pb-3 pt-5">
        <div className="relative">
          <div className="ml-auto">{category}</div>
          <div className="absolute bottom-[0.25rem] left-0 right-0 top-auto z-[-2] h-1 bg-orange-400" />
        </div>
      </div>
      <div className="relative">
        <h4 className="min-h-[0vw] text-4xl">{title}</h4>
        <div className="absolute bottom-[-0.50rem] left-0 right-0 top-auto h-0.5 w-96 bg-orange-400" />
      </div>
    </a>
  </div>
);

export function HomePosts() {
  return (
    <>
      <div>
        <div>
          <div className="content-stretch items-start justify-start bg-neutral-900 px-4 py-8 font-light text-white sm:px-8 sm:py-10 md:px-16 lg:px-24">
            <div className="m-auto flex w-full max-w-[62.50rem] flex-grow flex-col items-stretch justify-center gap-2 self-start">
              <div className="overflow-hidden font-bold uppercase">
                <div className="flex flex-col items-start">
                  <div className="pb-2 text-center sm:pb-3">
                    <span className="text-orange-400">/</span> Featured insights
                  </div>
                </div>
              </div>
              <div className="overflow-visible text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[3.63rem] lg:leading-tight">
                <div className="flex flex-col items-start">
                  <h2 className="min-h-[0vw] pb-2">
                    Branding, tech, and business{" "}
                    <strong className="font-extrabold">insights.</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative content-stretch items-start justify-start bg-neutral-900 px-4 py-8 font-light text-white sm:px-8 sm:py-12 md:px-16 md:py-16 lg:px-24 lg:py-24">
          <div className="relative m-auto flex w-full max-w-[100.00rem] flex-grow auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] flex-col items-stretch justify-center self-start font-bold">
            <div className="m-auto grid auto-cols-fr grid-cols-[.5fr_1fr_1fr_1fr_1fr_.5fr_.5fr_1fr_1fr_1fr_1fr_.5fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-4 sm:gap-6 md:gap-8">
              <div
                className="relative col-start-1 col-end-6 row-start-1 row-end-5"
                style={{ gridArea: "1/1/5/6" }}
              >
                <BlogPostCard
                  href="/insights/project-launch-ies-national-sustainable-lighting-by-design"
                  imageSrc="/ies-mark.jpg"
                  imageAlt="IES National Sustainable Lighting by Design"
                  category="Branding"
                  title="Project Launch: IES National - Sustainable Lighting by Design"
                />
              </div>
              <div
                className="relative col-start-7 col-end-12 row-start-2 row-end-6"
                style={{ gridArea: "2/7/6/12" }}
              >
                <BlogPostCard
                  href="/insights/the-importance-of-a-mobile-friendly-website-and-how-to-test-yours"
                  imageSrc="/5f629a4559811072bbfe7192_mobile-friendly-hero.1920.jpg"
                  imageAlt="Mobile-friendly website importance"
                  category="Web"
                  title="The Importance of a Mobile-Friendly Website (and How to Test Yours)"
                />
              </div>
              <div
                className="relative col-start-2 col-end-7 row-start-7"
                style={{ gridArea: "7/2/11/7", gridRowEnd: "11" }}
              >
                <BlogPostCard
                  href="/insights/what-are-the-differences-between-branding-and-marketing"
                  imageSrc="/5f4ae76042e3d8ce344a2b23_mountain-and-couch.1920.jpg"
                  imageAlt="Branding vs Marketing"
                  category="Branding"
                  title="What Are the Differences Between Branding and Marketing?"
                />
              </div>
              <div
                className="relative col-start-8 col-end-13"
                style={{
                  gridArea: "8/8/12/13",
                  gridRowEnd: "12",
                  gridRowStart: "8",
                }}
              >
                <BlogPostCard
                  href="/insights/savoring-the-sweetness-meet-the-leadership-of-brewww"
                  imageSrc="/bride-and-groom-smiling.jpg"
                  imageAlt="Brewww Leadership"
                  category="Studio"
                  title="Savoring the Sweetness: Meet the Leadership of Brewww"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
