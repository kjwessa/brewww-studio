import Image from "next/image";
import Link from "next/link";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import placeholderImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";
import { PreFooter } from "@/app/components/PreFooter"; // Add this import

// Define types for our data
type Post = {
  id: string;
  slug: string;
  name: string; // Changed from title to name
  category: string;
  publishedDate: string; // Changed from date
  readTime?: string; // Make it optional
  url: string;
  imageUrl: string;
  featuredImage?: { url: string }; // Add this to match the actual data structure
};

type Guide = {
  id: string;
  title: string | null | undefined;
  category: string | { name: string }; // Allow for nested category object
  slug: string | null | undefined;
};

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const postsFeatured = (await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedDate",
  })) as { docs: Post[] };
  const postsLatest = await payload.find({
    collection: "posts",
    limit: 5,
    sort: "-publishedDate",
  });
  const postsBranding = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedDate",
  });
  const postsWeb = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedDate",
  });
  const postsContent = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedDate",
  });
  const postsGuides = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-publishedDate",
  });

  // Fetch other data (replace with actual API calls)
  const designGuides: Guide[] = await fetchDesignGuides();
  const webDesignPosts: Post[] = await fetchWebDesignPosts();

  return (
    <>
      <FeaturedSection postsFeatured={postsFeatured.docs} />
      <LatestPostsSection posts={postsLatest.docs} />
      <DesignGuidesSection guides={designGuides} />
      <WebDesignSection posts={webDesignPosts} />
      <PreFooter />
    </>
  );
}

const FeaturedSection = ({ postsFeatured }: { postsFeatured: Post[] }) => (
  <section className="bg-zinc-900 py-14 text-lg text-white md:py-16">
    <div className="container mx-auto px-6 md:px-10">
      <h1 className="mb-6 text-5xl">Blog</h1>
      <div className="mb-7 flex flex-col md:flex-row md:items-end">
        <p className="mb-4 w-full text-2xl md:mb-0 md:w-2/3">
          News and insights on all things design by Brewww
        </p>
        <div className="ml-auto flex">
          <button className="mr-5 opacity-20 md:mr-10">
            <ArrowIcon direction="left" />
          </button>
          <button>
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {postsFeatured.map((post: Post) => (
          <FeaturedPostCard key={post.name} post={post} />
        ))}
      </div>
    </div>
  </section>
);

const LatestPostsSection = ({ posts }: { posts: any[] }) => (
  <section className="py-14 md:py-16">
    <div className="container mx-auto px-6 md:px-10">
      <h2 className="mb-10 text-4xl md:mb-14">Latest</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => (
          <OrdinaryPostCard key={post.id} post={post} featured={true} />
        ))}
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {posts.slice(2, 5).map((post) => (
          <OrdinaryPostCard key={post.id} post={post} />
        ))}
      </div>
      <ViewMoreLink href="/blog-archive" text="View archive" />
    </div>
  </section>
);

const DesignGuidesSection = ({ guides }: { guides: Guide[] }) => (
  <section className="bg-zinc-900 py-14 text-white md:py-20">
    <div className="container mx-auto px-6 md:px-10">
      <h2 className="mb-5 text-4xl">Design Guides</h2>
      <p className="mb-10 text-xl">
        Unlock expert insights and practical guidance in our special collection
      </p>
      <ul className="flex flex-wrap gap-8">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </ul>
      <ViewMoreLink href="/blog/category/guides" text="View all guides" />
    </div>
  </section>
);

const WebDesignSection = ({ posts }: { posts: Post[] }) => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-6 md:px-10">
      <h2 className="mb-5 text-4xl">Web Design</h2>
      <p className="mb-10 text-xl">
        Dive into cutting-edge trends and tips for creating stunning websites
      </p>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <OrdinaryPostCard key={post.id} post={post} />
        ))}
      </ul>
      <ViewMoreLink href="/blog/category/web-design" text="View all articles" />
    </div>
  </section>
);

const FeaturedPostCard = ({ post }: { post: Post }) => (
  <div className="relative mr-4 w-64 flex-shrink-0 overflow-hidden rounded-sm">
    <Link href={`/blog/${post.slug}`}>
      <Image
        src={post.imageUrl || placeholderImage}
        alt={post.name || ""}
        width={1080}
        height={720}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-2xl font-bold">{post.name}</p>
      </div>
    </Link>
  </div>
);

const OrdinaryPostCard = ({
  post,
  featured = false,
}: {
  post: any;
  featured?: boolean;
}) => (
  <li
    className={`flex flex-col overflow-hidden rounded-sm shadow-sm ${featured ? "h-full" : ""}`}
  >
    <Link href={`/blog/${post.slug}`} className="block flex-grow">
      <div
        className={`overflow-hidden ${featured ? "aspect-video md:aspect-[16/9]" : "aspect-video"}`}
      >
        <Image
          src={post.featuredImage?.url || placeholderImage}
          alt={post.name || ""}
          width={1080}
          height={720}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className={`mt-2 font-bold ${featured ? "text-2xl" : "text-xl"}`}>
          {post.name}
        </h3>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime || "5 min read"}</span>
        </div>
      </div>
    </Link>
  </li>
);

const GuideCard = ({ guide }: { guide: Guide }) => (
  <li className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
    <Link
      href={`/blog/guides/${guide.slug || guide.id}`}
      className="relative block overflow-hidden rounded-sm"
    >
      <Image
        src={placeholderImage}
        alt={guide.title}
        width={1080}
        height={720}
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
        <h4 className="mt-2 text-xl">{guide.title}</h4>
      </div>
    </Link>
  </li>
);

const ViewMoreLink = ({ href, text }: { href: string; text: string }) => (
  <div className="mt-10 text-center">
    <Link href={href} className="inline-flex items-center text-xl">
      <span>{text}</span>
      <ArrowIcon direction="right" className="ml-2 w-6 text-gray-400" />
    </Link>
  </div>
);

const ArrowIcon = ({
  direction,
  className = "w-6 h-6",
}: {
  direction: "left" | "right";
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        direction === "left"
          ? "M19 12H5M12 19l-7-7 7-7"
          : "M5 12h14M12 5l7 7-7 7"
      }
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder functions for data fetching (replace with actual API calls)
async function fetchDesignGuides(): Promise<Guide[]> {
  const payload = await getPayloadHMR({ config: configPromise });
  const guides = await payload.find({
    collection: "posts", // or "guides" if you have a separate collection
    where: {
      category: {
        equals: "Guide",
      },
    },
    limit: 4,
  });

  return guides.docs.map((guide) => ({
    id: guide.id,
    title: guide.title || "", // Provide a default empty string if title is null or undefined
    category:
      typeof guide.category === "string"
        ? guide.category
        : guide.category?.name || "",
    slug: guide.slug || "",
  }));
}

async function fetchWebDesignPosts(): Promise<Post[]> {
  // Implement actual API call here
  return [];
}
