import type { MistfallMap } from "./types";

export const mistfallMaps: MistfallMap[] = [
  {
    slug: "hallowgrove",
    name: "Hallowgrove",
    difficulty: "Easy",
    gearCap: "Excellent (Normal) / Holy (Chaos)",
    escapeXp: "50 Normal · 65 Chaos",
    clearance: "None on Normal · 800 Chaos",
    tagline: "Forest onboarding map and the best place to learn extraction.",
    overview:
      "Hallowgrove is the softest entry point: calmer monster density, no clearance on Normal, and a Return Chime → Woodling → Soul Tree flow that teaches the core loop. Chaos raises gear caps and pressure once you can extract consistently.",
    poi: [
      { name: "Return Chime trees", note: "Audio-led Woodling spawns — follow chimes, not random sweeps." },
      { name: "Soul Tree", note: "Shared charge pool for squads on this map — summon in sequence." },
      { name: "Edge loot clusters", note: "Safe early containers for solo onboarding runs." },
      { name: "Ridgelines", note: "Good glow-outline reads when hunting Woodlings through foliage." },
    ],
    extractNotes: [
      "Normal is the default learning queue — no clearance gate.",
      "One Soul Tree can cover a trio if you stagger summons.",
      "Leave early while you learn; Chaos can wait.",
    ],
    image: {
      src: "/images/mistfall/ss-2.jpg",
      alt: "Hallowgrove map atmosphere in Mistfall Hunter",
    },
    seoKeywords: ["Hallowgrove map", "Hallowgrove guide", "Hallowgrove Chaos"],
  },
  {
    slug: "brandrgarde",
    name: "Brandrgarde",
    difficulty: "Hard",
    gearCap: "Epic (Normal) / Holy (Cataclysm)",
    escapeXp: "55 Normal · 65 Cataclysm",
    clearance: "300 Normal · 2,500 Cataclysm",
    tagline: "Stricter extract rules, denser fights, higher payout risk.",
    overview:
      "Brandrgarde raises the ceiling: clearance gates, tougher packs, and extract rules that often require individual Soul of Return items instead of a forgiving shared tree pool. Bring kits you can lose and plan two exits before greeding mid-map.",
    poi: [
      { name: "Soul of Return drops", note: "Track inventory Souls carefully for full-squad extracts." },
      { name: "Cataclysm entries", note: "High clearance and high contest — squad only until mastered." },
      { name: "Open approaches", note: "Favor kiting classes when third parties path into objectives." },
      { name: "Secondary exits", note: "Always keep a backup portal plan if the first tree contests." },
    ],
    extractNotes: [
      "Meet clearance before you queue — do not burn expensive kits on denied deploys.",
      "Trio extracts often need multiple Woodling kills.",
      "Cataclysm is endgame pressure, not a farming shortcut.",
    ],
    image: {
      src: "/images/mistfall/ss-1.jpg",
      alt: "Brandrgarde map combat in Mistfall Hunter",
    },
    seoKeywords: ["Brandrgarde map", "Brandrgarde Cataclysm", "Brandrgarde guide"],
  },
];

export function getMapBySlug(slug: string): MistfallMap | undefined {
  return mistfallMaps.find((m) => m.slug === slug);
}
