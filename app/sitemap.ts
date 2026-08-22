import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Update this date whenever meaningful content on the site changes.
const LAST_MODIFIED = new Date("2026-08-22");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
