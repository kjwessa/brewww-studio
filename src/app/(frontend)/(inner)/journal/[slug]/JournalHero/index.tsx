import { formatDate } from "@root/utilities/formatDateTime";
import Link from "next/link";
import { Post } from '@/payload-types';

interface JournalHeroProps {
  post: Post;
}

export function JournalHero({ post }: JournalHeroProps) {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <ul className="hidden list-none flex-wrap gap-4 md:flex">
            <li>
              <Link href="/posts" className="hover:underline">
                All Posts
              </Link>
            </li>
            <li>
              <Link href="/posts/category/branding" className="hover:underline">
                Branding
              </Link>
            </li>
            <li>
              <Link href="/posts/category/web-design" className="hover:underline">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/posts/category/content" className="hover:underline">
                Content
              </Link>
            </li>
            <li>
              <Link href="/posts/category/guides" className="hover:underline">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/posts/category/updates" className="hover:underline">
                Updates
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-12 pt-12">
        <div className="max-w-5xl">
          <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">{post.title}</h1>
          <p className="mb-8 max-w-3xl text-xl text-gray-700">
            {post.description || 'Add a cool description here.'}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>
              By{' '}
              <Link className="text-gray-950" href={''}>
                Kevin Wessa
              </Link>
            </span>
            <span>•</span>
            <span>
              {post.publishedOn
                ? formatDate({ date: post.publishedOn, format: 'shortDateStamp' })
                : 'Date not available'}
            </span>
            <span>•</span>
            {/* <span>{post.readTime ? `${post.readTime} min read` : 'Add Read Time'}</span> */}
          </div>
        </div>
      </section>
    </>
  );
}
