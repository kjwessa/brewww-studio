import Link from "next/link";
import { Post, Media } from "@/payload-types";
import Image from "next/image";

export function BlogGrid({ posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <section className="relative bg-white pt-3 text-black">
      <div className="relative z-10 m-auto w-full max-w-[100.00rem] px-24 pt-24">
        <div className="flex flex-wrap px-24">
          <div className="-ml-3.5 w-full max-w-[91.6667%] basis-7/12">
            <p className="mb-6 uppercase">Our Blog</p>
            <h2 className="mb-28 text-[3.25rem] leading-none">
              News and Insights for the modern business.
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 z-0 w-[20%] bg-[#F9F9F9]" />
      <div className="m-auto w-full max-w-[100.00rem] px-24 text-black">
        <div className="flex flex-wrap px-24">
          <div className="relative w-full max-w-[50%] basis-1/2">
            <div className="-ml-24 mb-36 w-[33.44rem] pb-3">
              <Link className="relative mt-24" href="">
                <div className="-ml-44 -mt-24 mb-5 overflow-hidden pl-44 pt-24">
                  <div className="relative h-[34.38rem] w-full bg-zinc-100">
                    <div className="absolute left-[-3.44rem] top-0 z-10 h-96 w-[36.88rem]">
                      <picture className="h-full w-full">
                        <img
                          className="h-96 w-full"
                          src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_033d26b5fd.png"
                          alt="Turn 10 project showcase"
                        />
                      </picture>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full bg-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl uppercase">
                    <span className="text-sm">Turn 10</span>
                  </h3>
                  <h4 className="text-[2.13rem] leading-9">
                    Highly creative, animated website with 3D animation
                  </h4>
                </div>
              </Link>
            </div>
            <div className="float-right mb-36 mr-24 w-[33.44rem] pb-3">
              <Link className="relative" href="">
                <div className="-mt-24 mb-5 overflow-hidden pt-24">
                  <div className="relative h-[34.38rem] w-full bg-[#F9F9F9]">
                    <div className="absolute left-[8.13rem] top-[0.31rem] z-10 h-[40.31rem] w-96">
                      <picture className="h-full w-full">
                        <img
                          className="h-[44.64rem] w-full"
                          src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_82708bebb9.png"
                          alt="Fast Travel Games project showcase"
                        />
                      </picture>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full bg-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl uppercase">
                    <span className="text-sm">Fast Travel Games</span>
                  </h3>
                  <h4 className="text-[2.13rem] leading-9">
                    Fun 3D & Three.js animated website with Headless CMS
                  </h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-[50%] basis-1/2">
            <div className="mb-36 mt-28 w-[33.44rem] pb-3">
              <Link className="relative" href="">
                <div className="-mt-24 mb-5 overflow-hidden pt-24">
                  <div className="relative h-[34.38rem] w-full bg-zinc-100">
                    <div className="absolute left-[-4.38rem] top-[-1.88rem] z-10 h-[40.94rem] w-[42.50rem]">
                      <picture className="h-full w-full">
                        <img
                          className="h-[37.53rem] w-full"
                          src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_intro1_611a814312.png"
                          alt="Studiotypes project showcase"
                        />
                      </picture>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full bg-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl uppercase">
                    <span className="text-sm">Studiotypes</span>
                  </h3>
                  <h4 className="text-[2.13rem] leading-9">
                    3D animation led website with complex Blender models
                  </h4>
                </div>
              </Link>
            </div>
            <div className="float-right -mr-24 mb-36 w-[33.44rem] pb-3">
              <BlogCard post={posts[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link className="relative" href={`/blog/${post.slug}`}>
      <div className="-ml-16 -mt-24 mb-5 overflow-hidden pl-16 pt-24">
        <div className="relative h-[34.38rem] w-full bg-zinc-300">
          <div className="absolute left-[-3.13rem] top-[-1.25rem] z-10 h-96 w-[37.50rem]">
            <picture className="relative h-full w-full">
              <Image
                className="h-[43.50rem] w-full"
                src={(post.image as Media)?.url || ""}
                alt={post.title}
                fill
              />
            </picture>
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-white" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl uppercase">
          <span className="text-sm">Invoke Studios</span>
        </h3>
        <h4 className="text-[2.13rem] leading-9">{post.title}</h4>
      </div>
    </Link>
  );
};
