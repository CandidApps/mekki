import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Women’s Health Blog | Alliance OB/GYN Libertyville",
  description:
    "Articles on pregnancy care, gynecology, fibroids, menopause, IUDs, and minimally invasive surgery from Alliance OB/GYN in Libertyville, IL.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Women’s Health & Wellness Articles"
        description="Practical guidance on obstetrics, gynecology, and surgical questions patients search for — written for Libertyville and Lake County families."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
            >
              <p className="text-sm font-semibold tracking-wide text-teal uppercase">
                {post.category} · {post.date} · {post.readTime}
              </p>
              <h2 className="font-display mt-3 text-2xl text-ink">
                <Link href={`/blog/${post.slug}`} className="hover:text-teal">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-ink-soft">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block font-semibold text-teal">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
