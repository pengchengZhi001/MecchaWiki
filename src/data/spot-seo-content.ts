import type { HiddenSpot } from "@/data/hidden-spots";
import { getMapBySlug } from "@/data/maps";

export type SpotSeoContent = {
  whyItWorks: string;
  bestColors: string[];
  commonMistakes: string[];
  guideNotes: string[];
};

const MAP_COLOR_NAMES: Record<string, string[]> = {
  mansion: ["Warm Brown", "Beige Plaster", "Dark Wood", "Cream White", "Deep Walnut"],
  sewer: ["Rust Green", "Pipe Metal Gray", "Dark Slate", "Olive Shadow", "Concrete Gray"],
  backrooms: ["Wallpaper Yellow", "Muted Tan", "Pale Cream", "Dusty Beige", "Warm Gray"],
  "penguin-hotel": ["Ice Blue", "Soft White", "Plush Gray", "Frost Blue", "Pale Cyan"],
  "cold-storage": ["Cold Steel Gray", "Frost Blue-Gray", "Refrigerated White", "Metal Silver", "Deep Blue-Gray"],
  "brick-loft": ["Red Brick", "Dark Red", "Sienna Brown", "Burnt Orange", "Deep Brown"],
};

const CATEGORY_MISTAKES: Record<string, string[]> = {
  best: [
    "Standing too close to the edge where your outline breaks the geometry",
    "Using bright or saturated colors that don't match local wall value",
    "Moving the camera or adjusting pose after seekers enter the room",
    "Setting up during hunt phase instead of prep — seekers watch high-traffic spots",
  ],
  funny: [
    "Overacting the prop mimic — exaggerated poses read as player movement",
    "Choosing meme spots without matching the joke prop's exact color",
    "Laughing on voice chat while seekers are in the same room",
    "Staying visible from side angles where the disguise only works head-on",
  ],
  impossible: [
    "Assuming viral clip spots work every patch — re-verify after updates",
    "Camping without a backup sample color for emergency re-lock",
    "Ignoring audio tells from object mimic or climb animations",
    "Refusing to rotate when a seeker has already scanned your zone twice",
  ],
  community: [
    "Copying the spot without the exact pose shown in community screenshots",
    "Sampling from a nearby surface instead of the pixel your body touches",
    "Panicking and running when a seeker walks past instead of holding still",
    "Using default camera height habits — seekers eventually look up",
  ],
};

const HAND_CRAFTED: Partial<
  Record<string, Partial<Pick<SpotSeoContent, "whyItWorks" | "bestColors" | "commonMistakes" | "guideNotes">>>
> = {
  "brick-loft-red-brick-alcove": {
    whyItWorks:
      "The red brick alcove on Brick Loft blends naturally with surrounding wall colors, creating multiple layers of warm tones that break up your silhouette. Seekers scanning at default camera height see continuous brick texture rather than a human-shaped interruption. The recessed depth adds shadow that forgives minor value mismatches, and the horizontal mortar lines give you a natural guide for flat-pose alignment. Guide sources rank this among the most reliable Brick Loft positions when sampled on the darkest brick face.",
    bestColors: ["Red", "Dark Red", "Brown", "Burnt Sienna", "Deep Walnut"],
    commonMistakes: [
      "Standing too close to the alcove edge where your shoulder breaks the brick line",
      "Using bright colors or neon workshop skins that pop against warm brick",
      "Moving camera too often — micro-movements catch peripheral vision",
      "Sampling from the lighter mortar instead of the darker brick face",
    ],
    guideNotes: [
      "TheGamer lists this alcove as a top Brick Loft hide — sample the darkest brick pixel.",
      "Re-check the spot after patches; wall-clip geometry can shift between updates.",
    ],
  },
  "mansion-library-shelf": {
    whyItWorks:
      "Library Shelf exploits the visual noise of hundreds of book spines to completely dissolve your body outline. The rear row positioning puts you behind the visible spine layer, so seekers scanning from the doorway see only books — not the gap between rows. Mansion's warm wood and cream palette makes color matching forgiving, and the vertical spine lines naturally guide a flat crouch pose. High-level players favor this spot because it breaks the most common seeker habit: sweeping at eye level along the main aisle without pushing into shelf gaps.",
    bestColors: ["Warm Brown", "Cream White", "Dark Wood", "Beige Plaster", "Deep Walnut"],
    guideNotes: [
      "TheGamer and IGN both highlight rear bookshelf rows as core Mansion meta.",
      "Crouch between rows and stay inside the shelf lip — outline breaks are the main tell.",
    ],
  },
  "sewer-ceiling-pipe": {
    whyItWorks:
      "Sewer ceiling pipes sit above the default seeker camera sweep, making this one of the strongest verticality plays in the game. The rust-green pipe metal matches Sewer's dominant palette, and overhead shadows hide minor sampling errors. Seekers habitually clear floor-level barrels and graffiti first, buying you 30–45 seconds of safety. The low-light junction amplifies value matching — darker samples read as shadow, not player model.",
    bestColors: ["Rust Green", "Pipe Metal Gray", "Dark Slate", "Olive Shadow"],
    guideNotes: [
      "IGN and community guides rank ceiling pipes as Sewer's strongest vertical hide.",
      "Prep during countdown — climbing after hunt phase starts creates obvious audio tells.",
    ],
  },
  "cold-storage-shelf-back-row": {
    whyItWorks:
      "The deepest rear shelf row on Cold Storage forces seekers to commit time checking every gap in the meat shelf grid — most give up before reaching the back. Refrigerated metal tones are cold and uniform, making a well-sampled hider nearly invisible at glance. The shelf shadow layer adds depth that breaks outline detection, and the repetitive prop pattern creates visual fatigue for seekers scanning row after row.",
    bestColors: ["Cold Steel Gray", "Frost Blue-Gray", "Metal Silver", "Deep Blue-Gray"],
    guideNotes: [
      "meccha-chameleon.net tracks this as a high-difficulty shelf-depth hide on Cold Storage.",
      "Seekers should slow-check rear gaps — hiders win when aisle sweeps skip depth checks.",
    ],
  },
};

function buildGuideNotes(spot: HiddenSpot): string[] {
  return [
    `Primary tip: ${spot.tips}`,
    `Curated from ${spot.source} — verify in a private lobby after major patches.`,
    `Editorial rating ${spot.survivalRate}/100 reflects guide difficulty tier, not aggregated match data.`,
  ];
}

function buildWhyItWorks(spot: HiddenSpot): string {
  const map = getMapBySlug(spot.mapSlug);
  const mapTheme = map?.tagline ?? `${spot.map} layout`;
  const categoryNote =
    spot.category === "funny"
      ? "While primarily a meme spot, it still catches hesitant seekers off guard."
      : spot.category === "impossible"
        ? "This high-risk spot rewards perfect setup and punishes lazy sampling."
        : "Guide sources list this as a reliable choice when setup and sampling are clean.";

  return [
    `${spot.name} on ${spot.map} works because ${spot.description.charAt(0).toLowerCase()}${spot.description.slice(1)}`,
    `The ${mapTheme.toLowerCase()} provides natural color blocks that help your sampled tone blend with the environment instead of popping against it.`,
    `Experienced hiders use the pro tip — ${spot.tips.charAt(0).toLowerCase()}${spot.tips.slice(1)} — to maximize time-to-detection.`,
    `${categoryNote} Our editorial rating (${spot.survivalRate}/100) summarizes difficulty and guide consensus — test it yourself in live lobbies.`,
    `Seekers on ${spot.map} typically sweep high-traffic zones first, giving well-positioned hiders at ${spot.name} extra seconds to hold pose and survive the round.`,
  ].join(" ");
}

export function getSpotSeoContent(spot: HiddenSpot): SpotSeoContent {
  const override = HAND_CRAFTED[spot.slug];
  const mapColors = MAP_COLOR_NAMES[spot.mapSlug] ?? ["Neutral Gray", "Dark Shadow", "Mid Tone", "Local Match"];
  const mistakes = CATEGORY_MISTAKES[spot.category] ?? CATEGORY_MISTAKES.best;

  return {
    whyItWorks: override?.whyItWorks ?? buildWhyItWorks(spot),
    bestColors: override?.bestColors ?? mapColors.slice(0, 4),
    commonMistakes: override?.commonMistakes ?? mistakes,
    guideNotes: override?.guideNotes ?? buildGuideNotes(spot),
  };
}
