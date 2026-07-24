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
  whenToUse: string[];
  whenNotToUse: string[];
  commonMistakes: string[];
  counterStrategy: string[];
  guideNotes: string[];
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

const MAP_WHEN_TO_USE: Record<string, string[]> = {
  mansion: [
    "Round one when seekers sweep Main Room and Kitchen first — rear zones buy time (mecchachameleongame.wiki sweep order)",
    "Lobbies with newer seekers who skip ceiling and rear-shelf checks",
    "When you can finish spot + paint + pose before the hunt timer — Mansion rewards prep discipline",
  ],
  sewer: [
    "When your lobby rarely ceiling-checks on round one — overhead routes dominate (TheGamer Sewer section)",
    "After you have dual-tone sampling basics — pipe and barrel metal need separate samples",
    "Rotation rounds: use ceiling pipe as primary, barrel top as backup when pipe is taken",
  ],
  backrooms: [
    "Mid-round when seekers tunnel fluorescent corridors instead of checking furniture stacks (IGN Backrooms)",
    "Object-mimic spots when you can sample both prop and wallpaper in prep",
    "Smaller lobbies where identical rooms confuse seekers but do not overcrowd meme spots",
  ],
  "penguin-hotel": [
    "Peripheral rooms after seekers clear ballroom center (IGN Penguin Hotel guide)",
    "Plush or bookcase mimic when object clusters forgive slight hue error",
    "Ice zones only as transit — re-sample at deck edge before locking pose",
  ],
  "cold-storage": [
    "When seekers tunnel aisle centers — shelf depth and rear rows get skipped (meccha-chameleon.net)",
    "Steel-blue palette sessions where you sample shadow, not aisle-edge lit surfaces",
    "Round two+ when smart seekers slow-walk aisles — rotate to under-shelf or utility corners",
  ],
  "brick-loft": [
    "Ground-floor alcoves when second-floor seekers push upstairs — pipe crawl rotation (meccha-chameleon.net)",
    "Warm brick palette maps where horizontal course lines break torso read",
    "When stair sight cones are clear — alcoves visible from iron stair are death traps",
  ],
  greece: [
    "When you can dual-sample blue dome / white plaster seams — Santorini contrast is the map identity (Denfaminicogamer)",
    "Sunset-lit doorway or warm wall sessions where v2.9.0 Emissive matches the light source",
    "Round one before seekers learn alley and ledge meta — open courtyard still loses",
  ],
  "death-burger": [
    "When you can dual-sample sign/wall boundaries — flat carnival fills fail (Gamee)",
    "Clown mascot or carousel clutter rounds before meme spots get first-cleared",
    "Prop-mimic practice lobbies — open midway is transit only",
  ],
  egypt: [
    "Pillar and alcove rounds when seekers clear sand floors first",
    "Hieroglyph walls when you can align pose to relief pattern",
    "Early lobbies before Egypt meta settles — screenshot your own perch",
  ],
};

const MAP_WHEN_NOT_TO_USE: Record<string, string[]> = {
  mansion: [
    "When three hiders already camp library or kitchen — duplicate silhouettes get scanned twice",
    "Ceiling pillar routes in ceiling-aware lobbies after round two",
    "Open Main Room floor during hunt phase — no prep time left to climb or sample",
  ],
  sewer: [
    "Floor-level corners when seekers already learned look-up meta on this map",
    "Barrel top when another hider occupies the same cluster — double outline reads instantly",
    "Pure black shadow reliance after v1.1.0 shadow brightening (mecchachameleongame.wiki)",
  ],
  backrooms: [
    "Long fluorescent corridors as a home — rotation paths, not camps (mecchachameleongame.wiki)",
    "Wall-clip positions after v1.2.0 patch — legitimate spots only",
    "When you have not re-sampled wallpaper after crossing a doorway threshold",
  ],
  "penguin-hotel": [
    "Ballroom center camping — open sightlines expose movement tells (IGN)",
    "Pool reflection zones as long camps — strong reflection breaks color lock if you adjust",
    "Ice sculpture mimic when seekers already cleared the peripheral room twice",
  ],
  "cold-storage": [
    "Standing in aisle center as a full body rectangle — depth is mandatory",
    "Single flat steel sample when tile grid or grout lines need pattern alignment",
    "Same rear shelf row three rounds in a row against experienced seekers",
  ],
  "brick-loft": [
    "Iron stair vertical zone — 35% guide rating, open multi-angle sightlines (community data)",
    "Window sill long camps — sunlit top brick vs shadow underside mismatch",
    "Alcoves directly in second-floor stair sight cone — meccha-chameleon.net explicit warning",
  ],
  greece: [
    "Central pit rim camping after social Ilios clips — seekers check the hole early (udn)",
    "Open white courtyard floors — bright value exposes outline and paint errors",
    "Max emissive on matte plaster — fake glow reads instantly to hunters",
  ],
  "death-burger": [
    "Open midway walkways as long camps — wide sightlines punish imperfect paint",
    "Same clown mascot perch three rounds — meme lobbies clear loud props first",
    "Single flat fill across menu sign and wall — boundary paints are required",
  ],
  egypt: [
    "Open sand courtyard camping — seekers clear bright floors first",
    "Deep wall clips after v2.7.0 HIKAKIN-style collision fixes — prefer surface blends",
    "Flat hieroglyph fills without pattern alignment — relief walls expose stickers",
  ],
};

const MAP_COUNTER_STRATEGY: Record<string, string[]> = {
  mansion: [
    "Sweep rear library rows at crouch height — spine gaps read when seekers slow-walk shelf lips (mecchachameleongame.wiki)",
    "Check ceiling pillars on round two even if round one skipped verticality",
    "Bathroom tile: scan for grid-direction breaks — flat blobs fail pattern check",
  ],
  sewer: [
    "Look up on first pass — ceiling pipe meta is documented across TheGamer and IGN Sewer sections",
    "Slow-check barrel tops and pipe clusters from multiple angles — flat props can hide horizontal bodies",
    "Listen for climb audio during prep if hiders set up late",
  ],
  backrooms: [
    "Crouch-inspect vending fronts and chair stacks — human-width spacing breaks grid illusions (meccha-chameleon.wiki)",
    "Re-check doorways — hiders who forget to re-sample leave value mismatches at thresholds",
    "Office corners: fit-check wedges before leaving the room",
  ],
  "penguin-hotel": [
    "Clear peripheral plush and bedroom zones before assuming ballroom is empty",
    "Check bookcase backs and plush piles at crouch height — object clusters hide compact poses",
    "Pool deck: scan reflection edges for value pops",
  ],
  "cold-storage": [
    "Slow-walk aisle rear gaps after center tunnel — meccha-chameleon.net recommends under-shelf sweep",
    "Check meat shelf depth and gas cylinder corners on round two",
    "Steel-blue hiders in lit aisle edges pop against shadowed shelf backs",
  ],
  "brick-loft": [
    "Second-floor overlook into ground-floor alcoves — open loft sightlines counter wall-flat hides (meccha-chameleon.net)",
    "Scan beam gaps at horizontal striping level — torso breaks course lines when misaligned",
    "Iron stair is a predictable rotation path — sweep it before clearing pipe clusters below",
  ],
  greece: [
    "Check blue dome and plaster ledge seams on first pass — dual-tone hides dominate early meta",
    "Scan sunset alley nooks and stair shadow bands before assuming courtyards are empty",
    "Pit rim is predictable meme traffic — glance once, then clear building edges",
  ],
  "death-burger": [
    "Clear clown mascot rows and carousel bases before midway assumptions",
    "Scan menu-board color boundaries for dual-tone paints at crouch height",
    "Loud signage fronts: look for frame-edge mismatches and outline pops",
  ],
  egypt: [
    "Look up pillars and statue plinths on first pass — vertical meta beats sand floors",
    "Crouch-inspect sarcophagus alcoves and tomb lintels",
    "Hieroglyph walls: fit-check pattern alignment before leaving the room",
  ],
};

function buildWhyItWorks(spot: HiddenSpot, sourced: SpotGuideSourced): string {
  const map = getMapBySlug(spot.mapSlug);
  const primarySource = sourced.sources[0]?.name ?? spot.source;
  const colorNote =
    sourced.paintLayers.length > 0
      ? `Color plan: ${sourced.paintLayers.map((l) => `${l.bodyPart} samples ${l.sampleFrom}`).join("; ")}.`
      : "";

  return [
    `${spot.name} on ${spot.map} works because ${spot.description.toLowerCase().replace(/\.$/, "")}.`,
    sourced.seekerWindow,
    `Published guides (${primarySource}) emphasize pose discipline: ${sourced.poseAdvice}`,
    map ? `Map context from ${map.name}: ${map.tips[0]}` : "",
    colorNote,
    `Guide rating ${spot.survivalRate}/100 reflects difficulty tier from ${spot.source} — a curated estimate from published walkthroughs, not aggregated match statistics.`,
    `The core advantage is silhouette breaking: seekers scan for human-shaped lumps and value mismatches before they analyze hue. ${spot.name} gives you clutter, depth, or verticality that buys time when paint and pose are locked in prep.`,
  ]
    .filter(Boolean)
    .join(" ");
}

function buildWhenToUse(spot: HiddenSpot, sourced: SpotGuideSourced): string[] {
  const mapTips = MAP_WHEN_TO_USE[spot.mapSlug] ?? [];
  const spotSpecific = sourced.howToWin.slice(0, 2).map(
    (tip) => `When this applies: ${tip}`
  );
  const categoryTip =
    spot.category === "best"
      ? "Serious lobbies where you need a reliable round-one survive — best-category spots prioritize consistency over memes"
      : spot.category === "funny"
        ? "Casual or content lobbies where entertainment value matters — still sample local color or the joke fails"
        : spot.category === "impossible"
          ? "Challenge runs or bait rotations — not your primary hide when winning is the goal"
          : "When community-tested positions match your lobby size and seeker skill";

  return [...spotSpecific, ...mapTips.slice(0, 2), categoryTip];
}

function buildWhenNotToUse(spot: HiddenSpot): string[] {
  const mapTips = MAP_WHEN_NOT_TO_USE[spot.mapSlug] ?? [];
  const ratingTip =
    spot.survivalRate < 60
      ? `Guide rating ${spot.survivalRate}/100 — source material flags this as unreliable in competitive lobbies`
      : "When seekers in your lobby already slow-check this zone twice in one session — rotate";
  return [...mapTips.slice(0, 3), ratingTip];
}

function buildCounterStrategy(spot: HiddenSpot, sourced: SpotGuideSourced): string[] {
  const mapCounters = MAP_COUNTER_STRATEGY[spot.mapSlug] ?? [];
  const spotCounter = sourced.seekerWindow.includes("Seeker")
    ? [`Spot-specific window: ${sourced.seekerWindow}`]
    : [`Seeker timing: ${sourced.seekerWindow}`];
  return [...spotCounter, ...mapCounters.slice(0, 3)];
}

function paintLayersToBestColors(layers: SpotPaintLayer[]): string[] {
  return layers.map((l) => `${l.bodyPart}: ${l.sampleFrom}${l.technique ? ` — ${l.technique}` : ""}`);
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
    whenToUse: buildWhenToUse(spot, guideSourced),
    whenNotToUse: buildWhenNotToUse(spot),
    commonMistakes: mistakes,
    counterStrategy: buildCounterStrategy(spot, guideSourced),
    guideNotes: buildGuideNotes(spot, guideSourced),
    guideSourced,
    paintHexDisclaimer: PAINT_HEX_DISCLAIMER,
  };
}
