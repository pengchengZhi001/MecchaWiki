import { hiddenSpots } from "@/data/hidden-spots";
import { maps } from "@/data/maps";
import { workshopMaps } from "@/data/workshop";
import { guides } from "@/data/guides";
import { helpTopics } from "@/data/help";

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
];
