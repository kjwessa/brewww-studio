import Image from "next/image";
import Link from "next/link";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { MetaDot } from "@/app/components/MetaDot";
import { formatDate } from "@/app/utils/dateFormatter";
import aboutImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

//* HeroSection
interface HeroSectionProps {
  post: {
    title: string;
    description?: string;
    publishedAt: string;
    readTime: number;
  };
}

const HeroSection = ({ post }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 pb-12 pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-gray-700">
          {post.description}
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>
            By{" "}
            <Link className="text-gray-950" href={""}>
              Kevin Wessa
            </Link>
          </span>
          <MetaDot />
          <span>{formatDate(post.publishedAt)}</span>
          <MetaDot />
          <span>{`${post.readTime} min read`}</span>
        </div>
      </div>
    </section>
  );
};

//* ImageSection
interface ImageSectionProps {
  post: {
    featImg: string;
    featImgAlt: string;
  };
}

const ImageSection = ({ post }: ImageSectionProps) => {
  return (
    <div className="relative h-0 w-full pb-[66%]">
      <Image src={post.featImg} fill alt={post.featImgAlt} />
    </div>
  );
};

//* ArticleSection
interface ArticleSectionProps {
  post: {
    mdx: string;
  };
}

const ArticleSection = ({ post }: ArticleSectionProps) => {
  return (
    <article className="prose prose-lg mx-auto pb-24 pt-12">
      <MDXContent code={post.mdx} />
    </article>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className="relative text-lg text-gray-950">
        <div className="w-lg relative h-96">
          <Image src={aboutImage} alt="brewww" />
        </div>
        <img className="h-40 w-60 object-cover" src="" />
        <div className="relative bg-neutral-100 py-6 pl-5 pr-4">
          <div className="absolute bottom-[16.13rem] left-[1.00rem] right-[11.75rem] top-[-1.00rem] rounded-full">
            <img className="h-8 w-8 object-contain" src="" />
          </div>
          <div>
            <p className="text-base">About Brewww Studio</p>
            <p className="text-sm">
              Brewww is a branding and web studio in Cleveland. We work with
              startups and emerging brands to craft meaningful digital
              transformations.
            </p>
            <a className="relative inline-block text-sm font-medium" href="">
              <span className="inline-flex cursor-pointer items-center">
                <span className="relative">
                  <span
                    className="bg-currentcolor absolute bottom-[-0.19rem] left-0 z-[1] h-0 w-full"
                    style={{
                      transform: "scaleX(0)",
                      transformOrigin: "0px 50%",
                    }}
                  />
                  Learn more
                  <span className="absolute bottom-[-0.19rem] left-0 z-0 h-0 w-full bg-slate-300" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

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
      <HeroSection post={post} />
      <ImageSection post={post} />
      <div className="mx-auto flex max-w-4xl flex-col justify-center py-12">
        <ArticleSection post={post} />
      </div>
      <AboutSection />
    </div>
  );
}
