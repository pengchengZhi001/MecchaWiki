import type { HiddenSpot } from "@/data/hidden-spots";
import { getMapBySlug } from "@/data/maps";
import {
  getSpotGuideSourced,
  PAINT_HEX_DISCLAIMER,
  type SpotGuideSourced,
  type SpotPaintLayer,
} from "@/data/spot-guide-sourced";

export type SpotSeoContent = {
  whyItWorks: string;
  bestColors: string[];
  commonMistakes: string[];
  guideNotes: string[];
  /** Sourced from external guides — see guideSourced.sources */
  guideSourced: SpotGuideSourced;
  paintHexDisclaimer: string;
};

const CATEGORY_MISTAKES: Record<string, string[]> = {
  best: [
    "Standing too close to the edge where your outline breaks the geometry",
    "Using one flat eyedropper sample for the whole body — guides say lit + shadow sides need separate samples (mecchachameleongame.wiki paint-system)",
    "Moving the camera or adjusting pose after seekers enter the room",
    "Setting up during hunt phase instead of prep — SlashSkill: spend first third of prep on spot, then paint",
  ],
  funny: [
    "Overacting the prop mimic — exaggerated poses read as player movement",
    "Copying meme spots without sampling the joke prop's exact local color",
    "Laughing on voice chat while seekers are in the same room",
    "Staying visible from side angles where the disguise only works head-on",
  ],
  impossible: [
    "Assuming viral clip spots work every patch — re-verify after updates (Backrooms v1.2.0 wall-clip fix)",
    "Camping without re-sampling when lighting or angle changes",
    "Ignoring audio tells from object mimic or climb animations",
    "Refusing to rotate when a seeker has already scanned your zone twice",
  ],
  community: [
    "Copying the spot without the exact pose shown in community screenshots",
    "Sampling from a nearby surface instead of the pixel your body touches (SlashSkill eyedropper rule)",
    "Panicking and running when a seeker walks past instead of holding still",
    "Using default camera height habits — seekers eventually look up (Sewer pipe meta)",
  ],
};

function buildWhyItWorks(spot: HiddenSpot, sourced: SpotGuideSourced): string {
  const map = getMapBySlug(spot.mapSlug);
  const primarySource = sourced.sources[0]?.name ?? spot.source;

  return [
    `${spot.name} on ${spot.map}: ${spot.description}`,
    sourced.seekerWindow,
    `External guides (${primarySource}) emphasize: ${sourced.poseAdvice}`,
    map ? `${map.name} context — ${map.tips[0]}` : "",
    `Editorial rating ${spot.survivalRate}/100 reflects guide difficulty tier from ${spot.source}, not aggregated match data.`,
  ]
    .filter(Boolean)
    .join(" ");
}

function paintLayersToBestColors(layers: SpotPaintLayer[]): string[] {
  return layers.map((l) => `${l.bodyPart}: ${l.sampleFrom}`);
}

function buildGuideNotes(spot: HiddenSpot, sourced: SpotGuideSourced): string[] {
  const sourceLines = sourced.sources.map((s) => `${s.name} — ${s.url}`);
  return [
    ...sourced.howToWin.slice(0, 2),
    `Primary tip from ${spot.source}: ${spot.tips}`,
    ...sourceLines.slice(0, 2),
    `Verify in a private lobby after major patches.`,
  ];
}

export function getSpotSeoContent(spot: HiddenSpot): SpotSeoContent {
  const guideSourced = getSpotGuideSourced(spot);
  const mistakes = CATEGORY_MISTAKES[spot.category] ?? CATEGORY_MISTAKES.best;

  return {
    whyItWorks: buildWhyItWorks(spot, guideSourced),
    bestColors: paintLayersToBestColors(guideSourced.paintLayers),
    commonMistakes: mistakes,
    guideNotes: buildGuideNotes(spot, guideSourced),
    guideSourced,
    paintHexDisclaimer: PAINT_HEX_DISCLAIMER,
  };
}
