import { getTopSpots, getLatestSpots, hiddenSpots, type HiddenSpot } from "@/data/hidden-spots";

/** Sourced tips from TheGamer, SlashSkill, mecchachameleongame.wiki — not invented. */
const DAILY_TIPS = [
  {
    tip: "Spend the first third of prep on spot choice, then sample immediately. Relocating after you paint breaks your color match (SlashSkill).",
    source: "SlashSkill",
    sourceUrl: "https://www.slashskill.com/meccha-chameleon-tips-how-to-win-as-hider-and-seeker-and-master-the-paint-tool/",
  },
  {
    tip: "Sample the exact pixel your body touches — not the wall three feet away. On gradient surfaces, corners and baseboards are darker (mecchachameleongame.wiki Hider Guide).",
    source: "mecchachameleongame.wiki",
    sourceUrl: "https://mecchachameleongame.wiki/hider-guide/",
  },
  {
    tip: "Split lit and shadow sides after v1.1.0 shadow brightening. A single flat eyedropper fill reads as a patch, not camouflage (TheGamer).",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  },
  {
    tip: "Middle-mouse 360° rotation before prep ends — white gaps between limbs end more rounds than bad spots (SlashSkill #1 day-one mistake).",
    source: "SlashSkill",
    sourceUrl: "https://www.slashskill.com/meccha-chameleon-tips-how-to-win-as-hider-and-seeker-and-master-the-paint-tool/",
  },
  {
    tip: "Favour spots with clutter and multiple colours over flat walls. Visual noise forgives imperfect blends (9Puz walkthrough, cross-checked with Steam HUD).",
    source: "9Puz",
    sourceUrl: "https://9puz.com/2384-meccha-chameleon-walkthrough/",
  },
  {
    tip: "Seekers hunt shapes before colours. Lock your pose during prep — movement after hunt phase creates audio and silhouette tells (IGN tips).",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  },
  {
    tip: "On brick maps, sample mortar shadow and brick face separately. Horizontal course lines break the torso read (meccha-chameleon.net Brick Loft guide).",
    source: "meccha-chameleon.net",
    sourceUrl: "https://meccha-chameleon.net/maps/best-hiding-spots/",
  },
  {
    tip: "No paint undo at launch — sample with Spacebar, shrink brush (RMB + drag left), and overpaint mistakes before hunt (Steam reviews).",
    source: "Steam Reviews",
    sourceUrl: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
  },
  {
    tip: "Public lobbies with noclip bird's-eye seekers? Leave and host a password private room — community consensus, not a client toggle (Steam + mecchachameleon.net).",
    source: "mecchachameleon.net",
    sourceUrl: "https://mecchachameleon.net/tips-and-tricks/movement-tips",
  },
  {
    tip: "Hide as objects in clutter clusters — cow standees, hay piles, gumdrop mounds — not flat walls. Shape beats colour when seekers scan (Mobalytics + Games Fuze).",
    source: "Games Fuze",
    sourceUrl: "https://gamesfuze.com/guides/meccha-chameleon-best-hiding-spots/",
  },
  {
    tip: "Study the results screen after each round — answer check reveals every hide and missed seeker zones (SlashSkill + mecchachameleonwiki.com).",
    source: "SlashSkill",
    sourceUrl: "https://www.slashskill.com/meccha-chameleon-answer-check-and-color-picker-explained-master-the-eyedropper-and-color-matching/",
  },
  {
    tip: "v1.8.0 added 11 emotes to the R-key wheel — right/left click swaps wheel pages; survival poses still beat funny emotes in prep (GameRant + mecchachameleon.net).",
    source: "mecchachameleon.net",
    sourceUrl: "https://mecchachameleon.net/updates",
  },
  {
    tip: "No texture brush yet — Steam threads ask for wallpaper/checkerboard copy; use eyedropper + pattern-aligned poses until patch notes add tools.",
    source: "Steam Discussions",
    sourceUrl: "https://steamcommunity.com/app/4704690/discussions/0/571541539431537412/",
  },
  {
    tip: "No native controller support — Steam Deck is Playable via Steam Input with trackpad-as-mouse for painting (SlashSkill).",
    source: "SlashSkill",
    sourceUrl: "https://www.slashskill.com/does-meccha-chameleon-have-controller-support-steam-deck-setup-and-why-keyboard-still-wins/",
  },
] as const;

const WEEKLY_CHALLENGES = [
  {
    title: "Survive a full round on Sewer",
    description: "Pick Dark Ceiling Pipe or Oil Barrel Top. Finish climb and paint in prep — Sewer punishes floor-level habits (TheGamer).",
    spotSlug: "sewer-ceiling-pipe",
  },
  {
    title: "Master dual-tone sampling",
    description: "Hide on Cold Storage Shelf Back Row or Brick Loft Red Brick Alcove. Sample shadow + face separately — depth beats hue (meccha-chameleon.net).",
    spotSlug: "cold-storage-shelf-back-row",
  },
  {
    title: "Win without ceiling camping",
    description: "Survive on Mansion Library Shelf using spine color + flat crouch pose. No pillar or ceiling routes allowed this week.",
    spotSlug: "mansion-library-shelf",
  },
  {
    title: "Backrooms doorway discipline",
    description: "Pick Yellow Wall Nook or Office Corner. Re-sample wallpaper at every threshold — yellow shifts room to room (mecchachameleongame.wiki).",
    spotSlug: "backrooms-yellow-nook",
  },
] as const;

function dayIndex(): number {
  const start = new Date("2026-01-01T00:00:00Z").getTime();
  const now = Date.now();
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
}

export function getTodaysTip() {
  return DAILY_TIPS[dayIndex() % DAILY_TIPS.length];
}

export function getWeeklyChallenge() {
  const week = Math.floor(dayIndex() / 7);
  return WEEKLY_CHALLENGES[week % WEEKLY_CHALLENGES.length];
}

export function getTodaysSpot(): HiddenSpot {
  const idx = dayIndex() % hiddenSpots.length;
  return [...hiddenSpots].sort((a, b) => a.slug.localeCompare(b.slug))[idx];
}

/** Featured + trending picks rotated weekly — excludes the all-time survival leaderboard. */
export function getBestSpotsThisWeek(limit = 6): HiddenSpot[] {
  const excludeSlugs = new Set(getTopSpots(limit).map((s) => s.slug));
  const week = Math.floor(dayIndex() / 7);

  const pool = [...hiddenSpots]
    .filter((s) => (s.featured || s.trending) && !excludeSlugs.has(s.slug))
    .sort(
      (a, b) =>
        Number(b.trending) - Number(a.trending) ||
        b.votes - a.votes ||
        b.survivalRate - a.survivalRate
    );

  if (pool.length === 0) {
    return getTopSpots(limit);
  }

  const maxOffset = Math.max(1, pool.length - limit + 1);
  const offset = week % maxOffset;
  return pool.slice(offset, offset + limit);
}

/** Highest guide-rated spots — "Most Successful". */
export function getMostSuccessfulSpots(limit = 6): HiddenSpot[] {
  return getTopSpots(limit);
}

/** Recently added community-sourced entries (unique thumbnails only). */
export function getNewCommunityDiscoveries(limit = 6): HiddenSpot[] {
  const community = getLatestSpots(limit * 2).filter(
    (s) => s.category === "community" || s.source === "Community"
  );
  const pool = community.length >= 3 ? community : getLatestSpots(limit);
  const seen = new Set<string>();
  const unique: HiddenSpot[] = [];
  for (const spot of pool) {
    const key = spot.imageUrl.split("?")[0];
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(spot);
    if (unique.length >= limit) break;
  }
  return unique;
}
