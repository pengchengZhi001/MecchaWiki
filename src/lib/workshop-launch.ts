import type { WorkshopMap } from "@/data/workshop";
import type { WorkshopSeoContent } from "@/data/workshop-seo-content";

/** Days a workshop map counts as "launch" for first-week guide SEO */
export const LAUNCH_WINDOW_DAYS = 21;

export function daysSince(dateIso: string): number {
  const then = new Date(dateIso);
  const now = new Date();
  return Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
}

export function isLaunchMap(map: WorkshopMap): boolean {
  if (map.category === "new") return true;
  return daysSince(map.submittedAt) <= LAUNCH_WINDOW_DAYS;
}

export function getLaunchMaps(maps: WorkshopMap[], limit = 6): WorkshopMap[] {
  return [...maps]
    .filter(isLaunchMap)
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))
    .slice(0, limit);
}

export function getFirstWeekChecklist(map: WorkshopMap): string[] {
  return [
    `Subscribe to ${map.title} on Steam and restart the game before hosting — every player needs the download.`,
    `Walk spawn-to-spawn during prep on round one — count ${map.colors} dominant color zones before hiding.`,
    "Test one ceiling position and one floor corner — workshop maps often hide vertical meta.",
    "Sample at zone transitions; one-color mindset fails on custom layouts within two rounds.",
    "Run a private 4-player lobby before public queue — new maps attract seeker sweeps fast.",
    "Comment verified spots on the Steam Workshop page — creators patch exploits from player reports.",
  ];
}

export function getScoutPriorities(map: WorkshopMap): string[] {
  return [
    "Prop-dense clutter zones at default camera height",
    "Corner alcoves with dual-tone walls",
    "Side paths between main zones for mid-round rotation",
    "Ceiling lips and overhead pipes if geometry allows",
  ];
}

export function enrichLaunchGuide(
  base: WorkshopSeoContent,
  map: WorkshopMap
): WorkshopSeoContent {
  if (!isLaunchMap(map)) return base;

  const daysLive = daysSince(map.submittedAt);
  const launchPrefix =
    daysLive <= 7
      ? `🆕 Launch guide — ${map.title} dropped ${daysLive === 0 ? "today" : `${daysLive} day${daysLive === 1 ? "" : "s"} ago`}. `
      : `First-week guide — ${map.title} is still being scouted by the community. `;

  return {
    ...base,
    isLaunchGuide: true,
    tagline: `${base.tagline} · Launch guide`,
    overview: launchPrefix + base.overview,
    firstWeekChecklist: getFirstWeekChecklist(map),
    scoutPriorities: getScoutPriorities(map),
    tips: [
      "This is a launch guide — spots are community-scouted, not fully verified yet.",
      ...base.tips,
    ],
  };
}

export function launchGuideTitle(map: WorkshopMap): string {
  return isLaunchMap(map)
    ? `${map.title} Hiding Spots — New Workshop Map Launch Guide`
    : `${map.title} — Meccha Chameleon Workshop Map Guide`;
}
