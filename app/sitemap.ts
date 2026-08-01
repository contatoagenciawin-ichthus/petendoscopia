import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { campaigns } from "./(campaigns)/campaign-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [{ url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 }, ...Object.keys(campaigns).map((slug) => ({ url: `${site.url}/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .9 }))];
}
