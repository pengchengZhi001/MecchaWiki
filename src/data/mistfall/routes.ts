import type { ExtractionRoute } from "./types";

export const mistfallRoutes: ExtractionRoute[] = [
  {
    slug: "hallowgrove-first-extract",
    name: "Hallowgrove First Extract",
    mapSlug: "hallowgrove",
    mapName: "Hallowgrove",
    difficulty: "Easy",
    risk: "Low",
    bestFor: "Brand-new Gyldhunters",
    duration: "8–12 min",
    excerpt:
      "The onboarding loop: travel light, loot safe containers, follow the Return Chime, kill the Woodling, ring the Soul Tree, leave.",
    steps: [
      "Bank restricted items at Windrest camp so matchmaking is allowed.",
      "Queue Hallowgrove Normal with a cheap Mercenary or Seer kit.",
      "Loot nearby containers for the first few minutes — avoid third-party fights.",
      "When the Return Chime appears, follow audio and map marks to the Woodling tree.",
      "Defeat the Returner Woodling, interact with the Soul Tree, summon your portal, and channel until extract.",
    ],
    tips: [
      "Audio on: Woodlings leak position through chimes and glow.",
      "One Soul Tree can serve a full trio on Hallowgrove — summon in sequence.",
      "A clean early extract beats a greedy death with empty pockets.",
    ],
    image: {
      src: "/images/mistfall/ss-2.jpg",
      alt: "Hallowgrove first extraction route overview",
      caption: "Learn the full extract loop before pushing harder maps.",
    },
    seoKeywords: ["first extraction", "Hallowgrove extract", "beginner route"],
  },
  {
    slug: "returner-woodling-hunt",
    name: "Returner Woodling Hunt",
    mapSlug: "hallowgrove",
    mapName: "Hallowgrove",
    difficulty: "Easy",
    risk: "Medium",
    bestFor: "Players missing extract cues",
    duration: "3–6 min focus",
    excerpt:
      "How to find Returner Woodlings fast using chimes, outline glow, map marks, and combat noise from other teams.",
    steps: [
      "After deploy, keep sprinting light — conserve stamina for the hunt window.",
      "Listen for interval chimes; volume rises as you close distance.",
      "Watch for pulsing outlines through foliage and ridgelines.",
      "If another team is fighting, approach from an angle that keeps an exit behind you.",
      "Secure Soul of Return / Soul Tree interaction, then leave — do not farm the area empty.",
    ],
    tips: [
      "Mute Discord if it blocks game audio cues.",
      "Third parties love Woodling trees — pre-aim a disengage path.",
      "On Brandrgarde, each player may need their own Soul of Return from separate kills.",
    ],
    image: {
      src: "/images/mistfall/ss-3.jpg",
      alt: "Returner Woodling hunt cues in Mistfall Hunter",
      caption: "Chime audio and glow outlines beat random map sweeping.",
    },
    seoKeywords: ["Returner Woodling", "Soul of Return", "how to find Woodling"],
  },
  {
    slug: "hallowgrove-solo-safe-loop",
    name: "Hallowgrove Solo Safe Loop",
    mapSlug: "hallowgrove",
    mapName: "Hallowgrove",
    difficulty: "Medium",
    risk: "Low",
    bestFor: "Solo economy farming",
    duration: "10–15 min",
    excerpt:
      "A conservative solo path: edge loot, one stance practice, early Woodling, extract before high-value hunters rotate in.",
    steps: [
      "Spawn, loot the nearest safe cluster, skip contested mid-map POIs.",
      "Practice one stance only — Mercenary shield or Blackarrow longbow.",
      "Rotate toward the Return Chime as soon as it appears.",
      "Take the Woodling if free; abandon if two teams are already fighting.",
      "Extract with Gyldenblood and one readable upgrade — bank at camp.",
    ],
    tips: [
      "Weight matters: leave junk so you can sprint when hunters appear.",
      "Minutes 3–8 are for learning, not for Perfect gear greed.",
      "If you die twice in a row, drop rarity and reset with a cheaper kit.",
    ],
    image: {
      src: "/images/mistfall/ss-4.jpg",
      alt: "Solo safe extraction loop on Hallowgrove",
    },
    seoKeywords: ["solo extract", "safe farming route", "Hallowgrove solo"],
  },
  {
    slug: "soul-tree-squad-extract",
    name: "Soul Tree Squad Extract",
    mapSlug: "hallowgrove",
    mapName: "Hallowgrove",
    difficulty: "Medium",
    risk: "High",
    bestFor: "Duos and trios",
    duration: "12–18 min",
    excerpt:
      "Squad timing for finite Soul Tree charges: assign roles, hold perimeter, summon in sequence, leave together.",
    steps: [
      "Assign roles before queue: entry fighter, Woodling damage, extract watcher.",
      "Arrive with at least one player watching flanks while others finish the Woodling.",
      "Call remaining Soul Tree charges — do not triple-summon at once.",
      "First summoner channels while teammates hold angles.",
      "Stagger portals so the last player is not stranded without a charge.",
    ],
    tips: [
      "Comms beat clutch plays — call hunter audio early.",
      "Seer or Sorcerer control tools shine when holding the tree.",
      "If charges look thin, peel one player to hunt a second Woodling wave.",
    ],
    image: {
      src: "/images/mistfall/ss-5.jpg",
      alt: "Squad Soul Tree extraction in Mistfall Hunter",
    },
    seoKeywords: ["Soul Tree", "trio extract", "squad extraction"],
  },
  {
    slug: "brandrgarde-normal-extract",
    name: "Brandrgarde Normal Extract",
    mapSlug: "brandrgarde",
    mapName: "Brandrgarde",
    difficulty: "Hard",
    risk: "High",
    bestFor: "Players ready for stricter extract rules",
    duration: "15–20 min",
    excerpt:
      "Harder map with stricter Soul of Return rules. Expect denser monsters and more contested exits.",
    steps: [
      "Meet clearance requirements and bring a kit you can afford to lose.",
      "Plan two exits before you commit to high-value loot.",
      "Track Woodling kills carefully — Brandrgarde often ties Soul of Return to inventory, not a shared tree pool.",
      "Avoid third-party midfights unless your squad has a clear numbers advantage.",
      "Extract as soon as every member can summon — do not farm for perfect bags.",
    ],
    tips: [
      "Clearance and gear caps matter — check map tier before queue.",
      "Blackarrow and Sorcerer kite better on open approaches.",
      "If one player lacks Soul of Return, split hunt instead of stacking one tree.",
    ],
    image: {
      src: "/images/mistfall/ss-1.jpg",
      alt: "Brandrgarde normal extraction route",
    },
    seoKeywords: ["Brandrgarde extract", "Brandrgarde guide", "hard map extract"],
  },
  {
    slug: "early-extract-vs-greed",
    name: "Early Extract vs Greed",
    mapSlug: "hallowgrove",
    mapName: "Any map",
    difficulty: "Easy",
    risk: "Medium",
    bestFor: "Players who keep dying with full bags",
    duration: "Decision framework",
    excerpt:
      "A simple rule set for when to leave: bank progress, protect rare affixes, and stop turning winning runs into stash wipes.",
    steps: [
      "Set a leave trigger before deploy (example: Soul secured + one weapon upgrade).",
      "If hunters appear during channel setup, prioritize portal over one more chest.",
      "If your kit costs more than the expected haul, extract immediately after Soul.",
      "After two contested fights, leave — third fights are where economy dies.",
      "At camp, bank first, then decide upgrades — never requeue with everything equipped.",
    ],
    tips: [
      "Escape XP only lands on successful extract — deaths teach expensive lessons.",
      "Gyldenblood and camp upgrades compound; inconsistent extracts stall your account.",
      "Shadowstrix and Sorcerer mains should use stricter leave triggers.",
    ],
    image: {
      src: "/images/mistfall/hero.jpg",
      alt: "Mistfall Hunter decision guide for early extract",
    },
    seoKeywords: ["when to extract", "loot greed", "escape XP"],
  },
];

export function getRouteBySlug(slug: string): ExtractionRoute | undefined {
  return mistfallRoutes.find((r) => r.slug === slug);
}

export function getRoutesByMap(mapSlug: string): ExtractionRoute[] {
  return mistfallRoutes.filter((r) => r.mapSlug === mapSlug);
}
