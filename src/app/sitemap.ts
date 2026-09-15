import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/providers",
  "/services",
  "/obstetrics",
  "/high-risk-pregnancy",
  "/gynecology",
  "/gynecologic-surgery",
  "/contraception",
  "/infertility",
  "/menopause",
  "/preconception",
  "/abnormal-bleeding",
  "/fibroids",
  "/votiva",
  "/patient-resources",
  "/insurance",
  "/blog",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
