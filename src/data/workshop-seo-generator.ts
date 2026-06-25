import type { WorkshopMap } from "./workshop";
import type { WorkshopCategoryId } from "@/lib/site";

const CATEGORY_THEMES: Record<
  WorkshopCategoryId,
  { lean: "Hider-favored" | "Balanced" | "Seeker-favored"; mood: string }
> = {
  funny: { lean: "Hider-favored", mood: "meme-friendly chaos" },
  horror: { lean: "Hider-favored", mood: "dark atmosphere and slow seek sweeps" },
  competitive: { lean: "Balanced", mood: "organized sweeps and lane discipline" },
  new: { lean: "Balanced", mood: "fresh layouts still being scouted" },
};

const COLOR_NAMES = [
  "Primary Tone",
  "Secondary Accent",
  "Floor Value",
  "Wall Trim",
  "Shadow Gray",
  "Highlight Warm",
  "Deep Contrast",
  "Zone Accent",
];

export function generateWorkshopSeoFromMap(map: WorkshopMap) {
  const theme = CATEGORY_THEMES[map.category];
  const colorList = Array.from({ length: map.colors }, (_, i) => COLOR_NAMES[i] ?? `Zone ${i + 1}`);

  return {
    tagline: `${map.category === "horror" ? "Dark atmosphere" : map.category === "funny" ? "Casual chaos" : "Community layout"} · ${map.colors} colors`,
    overview: `${map.title} is a player-uploaded Steam Workshop map by ${map.author}. ${map.description} With ${map.colors} dominant color zones, it fits ${theme.mood} — scout during prep phase and re-sample at every zone transition.`,
    whyPlay: `${map.title} extends Mecha Chameleon beyond the six official maps with community prop density and layout variety. ${map.category === "competitive" ? "Organized seeker lobbies benefit from lane-based sweeps and rotation paths." : map.category === "horror" ? "Low-light zones reward dark value sampling similar to Sewer industrial areas." : "Casual groups enjoy readable palettes and meme-friendly prop mimic spots."} Subscribe via Steam to download before hosting.`,
    tips: [
      `Count ${map.colors} dominant tones during prep — one wrong sample stands out on ${map.title}.`,
      "Re-sample at every room or zone transition; workshop maps punish one-color mindset.",
      "Check ceiling and floor geometry for vertical play before locking a hide.",
      "Rotate after the first seeker sweep — popular workshop maps get meta-gamed fast.",
      `Read recent Steam Workshop comments for ${map.title} patch notes and spawn fixes.`,
    ],
    bestColors: colorList,
    commonMistakes: [
      "Using one color sample for the entire map",
      "Camping open areas without prop cover",
      "Ignoring zone color transitions between rooms",
      "Copying viral clip spots without matching exact local values",
    ],
    hotspots: [
      {
        name: "Prop-Dense Zone",
        description: `Furniture and clutter on ${map.title} break outlines at default camera height.`,
        type: "hot" as const,
      },
      {
        name: "Corner Alcove",
        description: "Controlled sightlines with dual-tone wall cover — strong mid-round rotation spot.",
        type: "hot" as const,
      },
      {
        name: "Side Path",
        description: "Lower traffic route between main zones for repositioning.",
        type: "neutral" as const,
      },
    ],
    dangerZones: [
      {
        name: "Central Open Area",
        description: "Wide sightlines with minimal prop cover — swept every round.",
      },
      {
        name: "Spawn Entry",
        description: "High-traffic zone checked on first seeker pass.",
      },
    ],
    lobbySize: map.colors <= 4 ? "4–8 players" : map.colors >= 7 ? "6–12 players" : "4–10 players",
    seekerLean: theme.lean,
    comments: [
      {
        author: "WorkshopScout",
        text: `${map.title} rewards prep-phase scouting. ${map.colors} colors but zones become obvious after one walkthrough.`,
      },
    ],
  };
}
