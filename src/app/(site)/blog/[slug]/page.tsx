import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/BlogPostPage";
import { JsonLd } from "@/components/JsonLd";
import {
  BLOG_POSTS,
  blogBreadcrumb,
  blogPostJsonLd,
  blogPostMetadata,
  getBlogPost,
} from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return blogPostMetadata(post);
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostJsonLd(post)} />
      <JsonLd data={blogBreadcrumb(post)} />
      <BlogPostPage post={post} />
    </>
  );
}
