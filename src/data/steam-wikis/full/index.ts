import type { FullWiki } from "../types";
import { cs2Wiki } from "./counter-strike-2";
import { dota2Wiki } from "./dota-2";
import { palworldWiki } from "./palworld";
import { marvelRivalsWiki } from "./marvel-rivals";
import { pubgWiki } from "./pubg";
import { eaFc26Wiki } from "./ea-fc-26";
import { rustWiki } from "./rust";
import { zomboidWiki } from "./project-zomboid";
import { apexWiki } from "./apex-legends";

const fullWikis: Record<string, FullWiki> = {
  [cs2Wiki.slug]: cs2Wiki,
  [dota2Wiki.slug]: dota2Wiki,
  [palworldWiki.slug]: palworldWiki,
  [marvelRivalsWiki.slug]: marvelRivalsWiki,
  [pubgWiki.slug]: pubgWiki,
  [eaFc26Wiki.slug]: eaFc26Wiki,
  [rustWiki.slug]: rustWiki,
  [zomboidWiki.slug]: zomboidWiki,
  [apexWiki.slug]: apexWiki,
};

export function getFullWiki(slug: string): FullWiki | undefined {
  return fullWikis[slug];
}

export function getAllFullWikis(): FullWiki[] {
  return Object.values(fullWikis);
}

export function getWikiMap(slug: string, item: string) {
  return getFullWiki(slug)?.maps.find((m) => m.slug === item);
}

export function getWikiRole(slug: string, item: string) {
  return getFullWiki(slug)?.roles.find((r) => r.slug === item);
}

export function getWikiStrat(slug: string, item: string) {
  return getFullWiki(slug)?.strats.find((s) => s.slug === item);
}

export function getStratsByMap(slug: string, mapSlug: string) {
  return getFullWiki(slug)?.strats.filter((s) => s.mapSlug === mapSlug) ?? [];
}
