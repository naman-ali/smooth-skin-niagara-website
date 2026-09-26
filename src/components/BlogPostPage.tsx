"use client";

import Link from "next/link";
import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import { useConsultation } from "@/components/ConsultationModal";
import type { BlogPost } from "@/lib/blog-posts";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;

export function BlogPostPage({ post }: { post: BlogPost }) {
  const { open: openConsultation } = useConsultation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <article className="px-3 py-[56px] md:px-10 lg:py-[80px]">
          <div className="mx-auto max-w-[760px]">
            <Link
              href="/blog"
              className="mb-[30px] inline-block font-[var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--olive-700)] no-underline"
            >
              ← Back to Blog
            </Link>

            <div className="mb-[18px] flex items-center gap-[12px]">
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                {post.category}
              </span>
              <span className="h-[1px] w-[40px] bg-[var(--color-border-strong)]" />
              <span className="font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
                {post.displayDate}
              </span>
            </div>

            <h1 className="mb-[24px] font-[var(--font-display)] text-[36px] font-normal leading-[1.12] text-[var(--color-text-primary)] md:text-[52px]">
              {post.title}
            </h1>
            <p className="mb-[34px] font-[var(--font-body)] text-[19px] leading-[1.6] text-[var(--color-text-secondary)]">
              {post.excerpt}
            </p>

            <img
              src={post.image}
              alt={post.title}
              className="mb-[40px] w-full rounded-[14px] object-cover shadow-[0_10px_30px_rgba(79,91,58,0.14)]"
            />

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-[56px] rounded-[14px] bg-olive-100 p-[32px] text-center md:p-[44px]">
              <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[32px]">
                Ready to try {post.serviceLabel}?
              </h2>
              <p className="mx-auto mb-[26px] max-w-[480px] font-[var(--font-body)] text-[16px] leading-[1.6] text-[var(--color-text-secondary)]">
                Book a free consultation at our Niagara Falls studio and Ashley
                will help you decide if it is the right treatment for you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-[16px]">
                <Button variant="primary" onClick={openConsultation}>
                  Book a Free Consultation
                </Button>
                <Button variant="secondary" href={post.serviceHref}>
                  View {post.serviceLabel}
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
