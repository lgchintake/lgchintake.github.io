import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${portfolio.seo.siteUrl}/`, lastModified: portfolio.resume.updated, priority: 1 }];
}
