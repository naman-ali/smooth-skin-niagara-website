"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <section className="px-3 py-[64px] md:px-10 lg:py-[90px]">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="mb-[30px] flex items-center gap-[12px]">
              <span className="h-[1px] w-[40px] bg-[var(--color-border-strong)]" />
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                The Smooth Skin Niagara Blog
              </span>
            </div>

            <h1 className="mb-[14px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              Treatment tips &amp; guides from our Niagara Falls studio
            </h1>
            <p className="mb-[56px] max-w-[640px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Honest answers about laser hair removal, lash extensions and skin
              treatments — written by Ashley to help you feel confident before
              your first appointment.
            </p>

            <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[14px] bg-white no-underline shadow-[0_2px_14px_rgba(79,91,58,0.08)] transition-shadow hover:shadow-[0_10px_28px_rgba(79,91,58,0.16)]"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-olive-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-[24px]">
                    <span className="mb-[10px] font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary)]">
                      {post.category}
                    </span>
                    <h2 className="mb-[10px] font-[var(--font-display)] text-[24px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                      {post.title}
                    </h2>
                    <p className="mb-[18px] flex-1 font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                      {post.excerpt}
                    </p>
                    <span className="font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
                      {post.displayDate}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
