import { hiddenSpots } from "@/data/hidden-spots";
import { maps } from "@/data/maps";
import { workshopMaps } from "@/data/workshop";
import { guides } from "@/data/guides";
import { helpTopics } from "@/data/help";
import {
  mistfallRoutes,
  mistfallClasses,
  mistfallMaps,
  mistfallGuides,
} from "@/data/mistfall";

export type SearchItem = {
  title: string;
  href: string;
  type: string;
  keywords: string[];
};

export const searchIndex: SearchItem[] = [
  ...hiddenSpots.map((s) => ({
    title: `${s.name} — ${s.map}`,
    href: `/hidden-spots/${s.slug}`,
    type: "Hidden Spot",
    keywords: [
      s.slug,
      s.name.toLowerCase(),
      s.map.toLowerCase(),
      s.mapSlug,
      s.category,
      s.tips.toLowerCase(),
      s.description.toLowerCase(),
      "paint",
      "color",
      "eyedropper",
      "how to win",
      "camouflage",
    ],
  })),
  ...maps.map((m) => ({
    title: m.name,
    href: `/maps/${m.slug}`,
    type: "Official Map",
    keywords: [m.slug, m.name.toLowerCase(), m.tagline.toLowerCase(), ...m.hotspots.map((h) => h.name.toLowerCase())],
  })),
  ...workshopMaps.map((m) => ({
    title: m.title,
    href: `/workshop-maps/${m.slug}`,
    type: "Workshop Map",
    keywords: [m.slug, m.title.toLowerCase(), ...m.tags.map((t) => t.toLowerCase())],
  })),
  ...guides.map((g) => ({
    title: g.title,
    href: `/guides/${g.slug}`,
    type: "Guide",
    keywords: [
      g.slug,
      g.category.toLowerCase(),
      g.excerpt.toLowerCase(),
      ...g.content.map((s) => s.heading.toLowerCase()),
    ],
  })),
  ...helpTopics.map((t) => ({
    title: t.title,
    href: `/help/${t.slug}`,
    type: "Help & FAQ",
    keywords: [
      t.slug,
      t.category.toLowerCase(),
      t.excerpt.toLowerCase(),
      ...t.items.flatMap((i) => [
        i.question.toLowerCase(),
        ...(i.tags ?? []),
        ...i.answer.join(" ").toLowerCase().split(/\s+/).slice(0, 40),
      ]),
    ],
  })),
  {
    title: "Patch Fixes Hub",
    href: "/guides/patch-fixes",
    type: "Guide",
    keywords: [
      "patch fix",
      "after update",
      "not working",
      "broken",
      "can't join lobby",
      "authentication token",
    ],
  },
  {
    title: "Content Demand Library",
    href: "/demand-library",
    type: "Meta",
    keywords: [
      "demand library",
      "content backlog",
      "player questions",
      "can't join lobby",
      "authentication token",
      "how to paint",
    ],
  },
  {
    title: "Mistfall Hunter Wiki",
    href: "/mistfall-hunter",
    type: "Mistfall",
    keywords: [
      "mistfall hunter",
      "mistfall",
      "extraction",
      "gyldhunter",
      "returner woodling",
    ],
  },
  ...mistfallRoutes.map((r) => ({
    title: r.name,
    href: `/mistfall-hunter/routes/${r.slug}`,
    type: "Mistfall Route",
    keywords: [
      r.slug,
      r.name.toLowerCase(),
      r.mapName.toLowerCase(),
      r.excerpt.toLowerCase(),
      ...(r.seoKeywords ?? []),
    ],
  })),
  ...mistfallClasses.map((c) => ({
    title: `${c.name} — Mistfall Hunter`,
    href: `/mistfall-hunter/classes/${c.slug}`,
    type: "Mistfall Class",
    keywords: [
      c.slug,
      c.name.toLowerCase(),
      c.role.toLowerCase(),
      c.excerpt.toLowerCase(),
      ...(c.seoKeywords ?? []),
    ],
  })),
  ...mistfallMaps.map((m) => ({
    title: `${m.name} — Mistfall Map`,
    href: `/mistfall-hunter/maps/${m.slug}`,
    type: "Mistfall Map",
    keywords: [
      m.slug,
      m.name.toLowerCase(),
      m.tagline.toLowerCase(),
      ...(m.seoKeywords ?? []),
    ],
  })),
  ...mistfallGuides.map((g) => ({
    title: g.title,
    href: `/mistfall-hunter/guides/${g.slug}`,
    type: "Mistfall Guide",
    keywords: [
      g.slug,
      g.category.toLowerCase(),
      g.excerpt.toLowerCase(),
      ...(g.seoKeywords ?? []),
    ],
  })),
];
