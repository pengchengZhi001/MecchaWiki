import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { maps } from "@/data/maps";
import { guides } from "@/data/guides";
import { helpTopics } from "@/data/help";
import { hiddenSpots } from "@/data/hidden-spots";
import { workshopMaps } from "@/data/workshop";
import {
  mistfallRoutes,
  mistfallClasses,
  mistfallMaps,
  mistfallGuides,
} from "@/data/mistfall";
import { getGuidesForGame, getAllFullWikis, steamWikiGames } from "@/data/steam-wikis";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hidden-spots",
    "/workshop-maps",
    "/maps",
    "/guides",
    "/help",
    "/mistfall-hunter",
    "/mistfall-hunter/routes",
    "/mistfall-hunter/classes",
    "/mistfall-hunter/maps",
    "/mistfall-hunter/guides",
    "/wikis",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path.startsWith("/mistfall-hunter") ? 0.85 : 0.9,
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
      lastModified: new Date("2026-07-02"),
      changeFrequency: "monthly" as const,
      priority: g.slug === "how-to-play" || g.slug === "tips-and-tricks" ? 0.85 : 0.5,
    })),
    ...helpTopics.map((t) => ({
      url: `${siteConfig.url}/help/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...mistfallRoutes.map((r) => ({
      url: `${siteConfig.url}/mistfall-hunter/routes/${r.slug}`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...mistfallClasses.map((c) => ({
      url: `${siteConfig.url}/mistfall-hunter/classes/${c.slug}`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...mistfallMaps.map((m) => ({
      url: `${siteConfig.url}/mistfall-hunter/maps/${m.slug}`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...mistfallGuides.map((g) => ({
      url: `${siteConfig.url}/mistfall-hunter/guides/${g.slug}`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...steamWikiGames.map((game) => ({
      url: `${siteConfig.url}/wikis/${game.slug}`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "weekly" as const,
      priority: game.rank <= 10 ? 0.85 : 0.7,
    })),
    ...steamWikiGames.flatMap((game) => [
      {
        url: `${siteConfig.url}/wikis/${game.slug}/guides`,
        lastModified: new Date("2026-08-18"),
        changeFrequency: "weekly" as const,
        priority: 0.65,
      },
      ...getGuidesForGame(game).map((g) => ({
        url: `${siteConfig.url}/wikis/${game.slug}/guides/${g.slug}`,
        lastModified: new Date("2026-08-18"),
        changeFrequency: "monthly" as const,
        priority: g.slug === "beginner-guide" ? 0.75 : 0.55,
      })),
    ]),
    ...getAllFullWikis().flatMap((wiki) => [
      {
        url: `${siteConfig.url}/wikis/${wiki.slug}/maps`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: `${siteConfig.url}/wikis/${wiki.slug}/roles`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: `${siteConfig.url}/wikis/${wiki.slug}/strats`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      ...wiki.maps.map((m) => ({
        url: `${siteConfig.url}/wikis/${wiki.slug}/maps/${m.slug}`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      })),
      ...wiki.roles.map((r) => ({
        url: `${siteConfig.url}/wikis/${wiki.slug}/roles/${r.slug}`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      })),
      ...wiki.strats.map((s) => ({
        url: `${siteConfig.url}/wikis/${wiki.slug}/strats/${s.slug}`,
        lastModified: new Date("2026-08-27"),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ]),
  ];
}
