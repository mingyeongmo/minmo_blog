import { allPosts } from "@/contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://minmo.vercel.app/post/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/post"].map((route) => ({
    url: `https://minmo.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
