import type { Guide } from "./guides/types";
import { colorMatchingGuide } from "./guides/color-matching";
import { hunterGuide } from "./guides/hunter-guide";
import { mapStrategiesGuide } from "./guides/map-strategies";
import { prepPhaseGuide } from "./guides/prep-phase-guide";
import { workshopMetaGuide } from "./guides/workshop-meta";
import { mansionGuide } from "./guides/mansion-guide";
import { sewerBackroomsGuide } from "./guides/sewer-backrooms-guide";
import { penguinHotelGuide } from "./guides/penguin-hotel-guide";
import { coldStorageBrickGuide } from "./guides/cold-storage-brick-guide";
import { fixCantJoinLobbyGuide } from "./guides/fix-cant-join-lobby";
import { fixAuthenticationTokenGuide } from "./guides/fix-authentication-token";
import { fixLagBlurryScreenGuide } from "./guides/fix-lag-blurry-screen";
import { whyKeepGettingFoundGuide } from "./guides/why-keep-getting-found";
import { howToPaintBetterGuide } from "./guides/how-to-paint-better";
import { bestPoseGuide } from "./guides/best-pose-guide";
import { allOfficialMapsGuide } from "./guides/all-official-maps";
import { bestMapsRankedGuide } from "./guides/best-maps-ranked";
import { osakaMapGuide } from "./guides/osaka-map-guide";
import { privateLobbyGuide } from "./guides/private-lobby-guide";
import { sugarlandMapGuide } from "./guides/sugarland-map-guide";
import { indoorCountryMapGuide } from "./guides/indoor-country-map-guide";
import { gameModesGuide } from "./guides/game-modes-guide";
import { publicLobbyGuide } from "./guides/public-lobby-guide";
import { noclipExploitsGuide } from "./guides/noclip-exploits-guide";
import { cheatersFairPlayGuide } from "./guides/cheaters-fair-play-guide";
import { propMimicClusterGuide } from "./guides/prop-mimic-cluster-guide";
import { hunterAmmoLimitGuide } from "./guides/hunter-ammo-limit-guide";
import { resultsScreenGuide } from "./guides/results-screen-guide";
import { emotesPosesGuide } from "./guides/emotes-poses-guide";
import { patternTextureWishlistGuide } from "./guides/pattern-texture-wishlist-guide";
import { controllerSupportGuide } from "./guides/controller-support-guide";
import { howToPlayGuide } from "./guides/how-to-play";
import { tipsAndTricksGuide } from "./guides/tips-and-tricks";
import { controlsGuide } from "./guides/controls-guide";
import { trelloGuide } from "./guides/trello-guide";
import { discordCommunityGuide } from "./guides/discord-community-guide";
import { worthItBuyersGuide } from "./guides/worth-it-buyers-guide";
import { updatesGuide } from "./guides/updates-guide";
import { patchFixesHubGuide } from "./guides/patch-fixes-hub";
import { problemsAfterUpdateGuide } from "./guides/problems-after-update";
import { platformsGuide } from "./guides/platforms-guide";
import { viralSuccessGuide } from "./guides/viral-success-guide";
import { playerWishlistGuide } from "./guides/player-wishlist-guide";
import { silhouetteShadowGuide } from "./guides/silhouette-shadow-guide";
import { firstMatchChecklistGuide } from "./guides/first-match-checklist";
import { fixGameWontLaunchGuide } from "./guides/fix-game-wont-launch";
import { fixWorkshopMapLoadingGuide } from "./guides/fix-workshop-map-loading";
import { fixSteamInviteNotWorkingGuide } from "./guides/fix-steam-invite-not-working";
import { fixEulaCantJoinGuide } from "./guides/fix-eula-cant-join";
import { problemsAfterV250Guide } from "./guides/problems-after-v2-5-0";
import { problemsAfterV270Guide } from "./guides/problems-after-v2-7-0";
import { problemsAfterV280Guide } from "./guides/problems-after-v2-8-0";

export type { Guide } from "./guides/types";

export const guides: Guide[] = [
  firstMatchChecklistGuide,
  howToPlayGuide,
  tipsAndTricksGuide,
  controlsGuide,
  updatesGuide,
  patchFixesHubGuide,
  problemsAfterUpdateGuide,
  problemsAfterV280Guide,
  problemsAfterV270Guide,
  problemsAfterV250Guide,
  worthItBuyersGuide,
  trelloGuide,
  discordCommunityGuide,
  platformsGuide,
  viralSuccessGuide,
  playerWishlistGuide,
  silhouetteShadowGuide,
  {
    slug: "beginner-basics",
    title: "How To Hide Better In Meccha Chameleon",
    category: "Beginner",
    readTime: "12 min",
    excerpt:
      "The complete beginner-to-intermediate guide: core mechanics, best colors, best maps, common mistakes, and advanced hiding techniques that actually win rounds.",
    content: [
      {
        id: "overview",
        heading: "What This Game Actually Is",
        body: "Meccha Chameleon is a multiplayer hide-and-seek game built around one idea: disappear. As a hider, you sample colors from the environment, lock your pose, and hope seekers walk past without noticing the wrong shadow, the wrong edge, or the human-shaped lump behind a bookshelf. As a seeker, you scan for value mismatches, unnatural silhouettes, and movement tells. Rounds are short, lobbies are chaotic, and the difference between a 40% survival rate and an 85% survival rate is almost always positioning — not reflexes. This guide is written for players who want to stop dying in the first thirty seconds and start using the same spots you see in YouTube clips and community databases like meccha.wiki.",
      },
      {
        id: "core-mechanics",
        heading: "Core Mechanics You Must Internalize",
        body: "Before colors and maps, understand the three systems that decide every round. First: color sampling. You eyedrop a surface and your body adopts that color. Perfect match makes you nearly invisible at a glance; close match survives casual scans; bad match glows like a warning sign. Second: pose locking. You are not a free-moving character while hiding — you commit to a pose (flat against wall, crouch, object mimic) and breaking that pose costs precious seconds. Third: seeker camera height. Most players scan at chest and eye level. Spots above default sightlines — ceiling pipes, pillar tops, shelf backs — survive longer because seekers develop floor-level habits. Every tip in this guide flows from these three systems.",
      },
      {
        id: "best-colors",
        heading: "Best Colors — What To Sample And When",
        body: "Color choice is not about picking your favorite shade. It is about matching local value (lightness), hue, and context. On Mansion, warm wood browns (#8B4513 range) and beige plaster (#F5DEB3) cover 70% of viable hides. Always sample the exact pixel you will touch — not the wall three feet away. In Sewer, rust green on pipe metal (#2D4A3E to #5C7A6B) is mandatory; warm tones read as player models instantly. Backrooms punishes lazy sampling: wallpaper yellow shifts subtly room to room (#C4B896 vs #E8DCC8). Re-sample every time you cross a doorway. Cold Storage demands cold steel gray (#6B8FA3); anything warmer pops against refrigerated metal. The 80% rule: if you are under pressure, prioritize matching value (dark vs light) over perfect hue. A slightly green-gray on a gray pipe beats a perfect green on a shadowed pipe because seekers notice brightness before they notice undertone. Dual-color zones — bathroom tile plus grout, graffiti with multiple paints — require sampling both and choosing the pose that hides your outline in the busier texture. When in doubt, go darker. Light colors in shadow look like stickers. Dark colors in shadow look like shadow.",
      },
      {
        id: "best-maps",
        heading: "Best Maps — Where To Learn And Where To Graduate",
        body: "Mansion is the correct first map. Rooms are readable, color blocks are large, and source-curated spots like Library Shelf and Kitchen Shelving forgive small mistakes. Spend your first ten hours here learning sampling speed and pose discipline before touching harder layouts. Sewer is your first skill check: verticality matters, ceiling pipes are the meta, and open junctions kill careless crossers. Play Sewer when you can consistently survive one full Mansion round without moving at the wrong time. Backrooms is psychological — repetitive halls confuse seekers but also confuse hiders who forget which room they sampled. Learn chair stacks and office corners; avoid long fluorescent corridors unless you have a verified wall-clip spot. Penguin Hotel mixes ice blues and plush interiors; the ballroom is seeker-favored while ice sculpture zones reward prop mimic. Cold Storage is expert territory: meat shelf rows and deep shelf backs work because seekers hate checking every gap. Brick Loft splits between warm brick (easy to match) and exposed second-floor sightlines (deadly). For workshop maps, start with medium color counts (4–6). Minecraft and Meeting Room are community favorites with clear zones; avoid pure meme maps until you can survive official maps consistently.",
      },
      {
        id: "beginner-mistakes",
        heading: "Beginner Mistakes — Stop Doing These Today",
        body: "Mistake one: running in open space when spotted. The correct panic response is sample nearest wall, flat pose, freeze two seconds. Most seekers overshoot. Mistake two: camping obvious props without matching prop color. Hiding inside the horse statue only works if you sampled statue stone, not the wall behind you. Mistake three: moving while seekers face you. Movement breaks color lock and creates motion tells. Wait for back-turn or audio distraction. Mistake four: choosing pretty spots over functional spots. The viral ceiling pillar spot fails if you set up during hunt phase when seekers watch ceilings. Prep during countdown. Mistake five: ignoring sound. Footsteps on tile, ladder climbs, and object mimic animations have audio cues — experienced seekers listen as much as they look. Mistake six: one-color mindset on gradient walls. Corners and baseboards are darker; sample there if your pose is low. Mistake seven: fighting in bad zones. Ballroom center, Backrooms long corridors, and Cold Storage loading bays are rotation paths, not homes. Cross them or die. Mistake eight: copying YouTube spots without the setup. Many clips skip the thirty-second prep and the exact patch version. Check whether wall-clips still work after updates.",
      },
      {
        id: "positioning",
        heading: "Positioning Fundamentals",
        body: "Think in layers. Layer one: break your outline. Shelves, pipes, and chair stacks add visual noise so your body rectangle disappears. Layer two: break sightlines. Corners and room transitions force seekers to re-acquire you. Layer three: break height expectations. If the lobby meta is floor-level, ceiling time buys rounds. When rotating, move along walls not through rooms. Wall movement keeps one surface for emergency sampling. When choosing between two spots, pick the one with a single approach vector — seekers can only enter one way, and you hear them coming. On team voice, call only when necessary; whispers carry in game audio. Solo queue: trust spots with high editorial ratings on meccha.wiki over friend anecdotes.",
      },
      {
        id: "advanced-tips",
        heading: "Advanced Tips — From 60% To 85% Survival",
        body: "Bait and reset: let a seeker see a glimpse of you leaving a room, sample inside the next room, lock early. They rush the wrong corner. Pose discipline under pressure: practice switching sample + lock in under 1.5 seconds on Mansion bathroom tiles — the muscle memory transfers everywhere. Seeker psychology: after two failed sweeps, seekers abandon rooms. If you survived a partial scan, do not move for a full five seconds; they often leave. Map-specific tech: Mansion library — crouch between rear rows, not visible spines facing the door. Sewer — barrel tops from default camera read as flat metal. Backrooms — identical room hopping only works if you change value to match each room's slightly different yellow. Workshop maps — read color count before dropping in; 3-color maps are seeker nightmares, 8-color maps punish hiders who sample once. Patch awareness: v1.2.0 adjusted wall-clip spots on Backrooms and reflectivity on bathroom tiles. Re-test favorites monthly. Record your deaths: if you die to the same room three times, your color not your spot is usually the problem.",
      },
      {
        id: "practice-routine",
        heading: "A Simple Practice Routine",
        body: "Week one: Mansion only. Goal — survive full round without rotating more than twice. Week two: add Sewer ceiling routes. Goal — one ceiling hide per round. Week three: Backrooms chair zones. Goal — zero deaths in fluorescent corridors. Week four: pick one workshop map and learn three curated spots from our database. Each session, test one new spot and note whether it worked for you after the current patch. Pair this guide with our map pages for Mansion, Sewer, and Backrooms, which link directly to source-curated hiding spots with screenshots and tips.",
      },
      {
        id: "summary",
        heading: "Quick Reference",
        body: "Sample local. Go darker in doubt. Mansion to learn, Sewer and Backrooms to grow, Cold Storage when you are ready. Never panic-run — sample, lock, freeze. Use database spots with high editorial ratings as your curriculum, not random exploration. Hide where seekers do not want to look: shelf backs, pipe ceilings, deep corners. Move when they look away, not when they walk toward you. Master that and you stop being the first hider found every round.",
      },
    ],
  },
  colorMatchingGuide,
  hunterGuide,
  mapStrategiesGuide,
  workshopMetaGuide,
  prepPhaseGuide,
  mansionGuide,
  sewerBackroomsGuide,
  penguinHotelGuide,
  coldStorageBrickGuide,
  fixCantJoinLobbyGuide,
  fixAuthenticationTokenGuide,
  fixEulaCantJoinGuide,
  fixGameWontLaunchGuide,
  fixSteamInviteNotWorkingGuide,
  fixWorkshopMapLoadingGuide,
  fixLagBlurryScreenGuide,
  whyKeepGettingFoundGuide,
  howToPaintBetterGuide,
  bestPoseGuide,
  allOfficialMapsGuide,
  bestMapsRankedGuide,
  osakaMapGuide,
  privateLobbyGuide,
  sugarlandMapGuide,
  indoorCountryMapGuide,
  gameModesGuide,
  publicLobbyGuide,
  noclipExploitsGuide,
  cheatersFairPlayGuide,
  propMimicClusterGuide,
  hunterAmmoLimitGuide,
  resultsScreenGuide,
  emotesPosesGuide,
  patternTextureWishlistGuide,
  controllerSupportGuide,
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
