import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://minmo.vercel.app/sitemap.xml",
    host: "https://minmo.vercel.app/",
  };
}
