import { hiddenSpots } from "@/data/hidden-spots";
import { maps } from "@/data/maps";
import { workshopMaps } from "@/data/workshop";

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
];
