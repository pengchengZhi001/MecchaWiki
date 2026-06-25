import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { maps } from "@/data/maps";
import { guides } from "@/data/guides";
import { hiddenSpots } from "@/data/hidden-spots";
import { workshopMaps } from "@/data/workshop";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hidden-spots",
    "/workshop-maps",
    "/maps",
    "/guides",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),
    { url: `${siteConfig.url}/privacy`, lastModified: new Date("2026-06-25"), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${siteConfig.url}/disclaimer`, lastModified: new Date("2026-06-25"), changeFrequency: "yearly" as const, priority: 0.3 },
    ...hiddenSpots.map((s) => ({
      url: `${siteConfig.url}/hidden-spots/${s.slug}`,
      lastModified: new Date(s.submittedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...workshopMaps.map((m) => ({
      url: `${siteConfig.url}/workshop-maps/${m.slug}`,
      lastModified: new Date(m.submittedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...maps.map((m) => ({
      url: `${siteConfig.url}/maps/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guides.map((g) => ({
      url: `${siteConfig.url}/guides/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
