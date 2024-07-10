import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

//* Build the individual blog page
export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the post based on the slug
  const post = allPosts.find((post) => post.slug === params.slug);
  // Return 404 if no matching post slug is found
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white pt-24 text-black">
      <section>
        <div>
          <div className="grid grid-cols-[repeat(4,_1fr)] grid-rows-[114.375px_103px_59.5938px] gap-x-3 pt-44 text-lg text-gray-950 md:ml-10 md:mr-10 md:grid-cols-[repeat(12,_1fr)] md:pt-60 min-[1250px]:ml-20 min-[1250px]:mr-20 min-[1250px]:pt-64 min-[1440px]:grid-cols-[repeat(12,_1fr)] min-[1550px]:ml-auto min-[1550px]:mr-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1920px]:max-w-screen-2xl min-[1920px]:pt-80 min-[2048px]:ml-48 min-[2048px]:mr-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:ml-48 min-[2560px]:mr-48 min-[2560px]:max-w-[160.00rem] min-[2940px]:ml-auto min-[2940px]:mr-auto min-[2940px]:max-w-[160.00rem]">
            <h1 className="col-start-1 text-[3.25rem] leading-none md:col-start-1 md:-ml-1 min-[1250px]:col-start-1 min-[1250px]:-ml-0 min-[1250px]:-ml-1 min-[1920px]:col-start-1 min-[1920px]:-ml-0 min-[1920px]:-ml-1 min-[2048px]:col-start-1">
              {post.title}
            </h1>
            <p
              className="col-start-1 mt-5 max-w-[46.69rem] text-xl font-medium md:col-start-1 min-[1250px]:col-start-1 min-[1920px]:col-start-1 min-[1920px]:mt-8 min-[1920px]:max-w-[unset] min-[2048px]:col-start-1"
              id="p-1"
              style={{
                gridColumnEnd: "span 4",
              }}
            >
              {post.description}
            </p>
            <div
              className="col-start-1 mt-10 text-sm font-medium min-[1250px]:col-start-1 min-[1920px]:mt-16"
              id="div-1"
              style={{
                gridColumnEnd: "span 5",
              }}
            >
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span>
                    <span className="text-slate-500">By </span>
                    <a className="inline-block" href="">
                      <span className="cursor-pointer">Kevin</span>
                    </a>
                  </span>
                </div>
                <div className="ml-1 flex items-center text-slate-500">
                  <svg
                    className="m-2 h-0.5 w-1"
                    fill="none"
                    height="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="1" cy="1" fill="rgb(99, 118, 149)" r="1" />
                  </svg>
                  Jul 9, 2024
                  <svg
                    className="m-2 h-0.5 w-1"
                    fill="none"
                    height="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="1" cy="1" fill="rgb(99, 118, 149)" r="1" />
                  </svg>
                  <p>8 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article className="mx-auto flex max-w-4xl flex-col justify-center py-12">
        <h1 className="mb-12 text-balance text-5xl font-medium"></h1>

        <div className="relative h-0 w-full pb-[66%]">
          <Image src={post.featuredImg} fill alt={post.featuredImgAlt} />{" "}
        </div>
        <div className="prose prose-lg mx-auto pb-24 pt-12">
          <MDXContent code={post.mdx} />
        </div>
      </article>
    </div>
  );
}
