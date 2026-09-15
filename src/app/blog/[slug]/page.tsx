import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { blogPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = PageProps<"/blog/[slug]">;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section-pad">
        <div className="container-site max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-teal hover:underline">
            ← Back to blog
          </Link>
          <p className="mt-6 text-sm font-semibold tracking-wide text-teal uppercase">
            {post.category} · {post.date}
          </p>
          <h1 className="font-display mt-3 text-4xl text-ink md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-ink-soft">{post.description}</p>
          <div className="mt-8 space-y-5 text-lg text-ink-soft">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 rounded-2xl bg-teal-soft/50 p-5 text-ink">
            Looking for an OB/GYN in Libertyville? Call{" "}
            <a className="font-semibold text-teal" href={site.phoneHref}>
              {site.phone}
            </a>{" "}
            or{" "}
            <Link href="/contact#appointment" className="font-semibold text-teal hover:underline">
              request an appointment
            </Link>{" "}
            with {site.doctor.fullName}.
          </p>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
