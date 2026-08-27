export { steamWikiGames } from "./games";
export { getGuidesForGame, getGuideForGame } from "./guides";
export type { SteamWikiGame, WikiGenre, WikiGuide } from "./types";

import { steamWikiGames } from "./games";
import type { SteamWikiGame } from "./types";

export function getGameBySlug(slug: string): SteamWikiGame | undefined {
  return steamWikiGames.find((g) => g.slug === slug);
}

export function getGamesByGenre(genre: SteamWikiGame["genre"]): SteamWikiGame[] {
  return steamWikiGames.filter((g) => g.genre === genre);
}
