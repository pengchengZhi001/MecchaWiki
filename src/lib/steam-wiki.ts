import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { SteamWikiGame } from "@/data/steam-wikis/types";

export const steamWikiHubPath = "/wikis";

/** Newer store assets live under a content hash; legacy /header.jpg 404s. */
const STEAM_ASSET_OVERRIDES: Record<number, { header: string; hero: string }> = {
  1867240: {
    header:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1867240/59d4daf753bd5d982e6675f7eee363bc817c574e/header.jpg",
    hero:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1867240/9e3d0dba457f3d33734990866160be80c399f67c/library_hero.jpg",
  },
};

export function steamHeader(appId: number) {
  return (
    STEAM_ASSET_OVERRIDES[appId]?.header ??
    `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
  );
}

export function steamHero(appId: number) {
  return (
    STEAM_ASSET_OVERRIDES[appId]?.hero ??
    `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_hero.jpg`
  );
}

export function steamCapsule(appId: number) {
  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_616x353.jpg`;
}

export function steamStoreUrl(appId: number) {
  return `https://store.steampowered.com/app/${appId}/`;
}

export function wikiPath(slug: string, rest = "") {
  return `${steamWikiHubPath}/${slug}${rest}`;
}

export function wikiNavLinks(game: SteamWikiGame, hubs?: { maps: string; roles: string; strats: string }) {
  if (hubs) {
    return [
      { href: wikiPath(game.slug), label: "Home" },
      { href: wikiPath(game.slug, "/strats"), label: hubs.strats },
      { href: wikiPath(game.slug, "/roles"), label: hubs.roles },
      { href: wikiPath(game.slug, "/maps"), label: hubs.maps },
      { href: wikiPath(game.slug, "/guides"), label: "Guides" },
    ];
  }
  return [
    { href: wikiPath(game.slug), label: "Home" },
    { href: wikiPath(game.slug, "/guides"), label: "Guides" },
    { href: steamWikiHubPath, label: "All Wikis" },
  ];
}

type WikiMeta = {
  game: SteamWikiGame;
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createSteamWikiMetadata({
  game,
  title,
  description,
  path,
  keywords = [],
}: WikiMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = steamHeader(game.steamAppId);
  const isHome = path === wikiPath(game.slug);
  const fullTitle = isHome
    ? `${game.name} Wiki — ${game.tagline}`
    : `${title} | ${game.shortName} Wiki`;

  return {
    title: fullTitle,
    description,
    keywords: [
      game.name,
      `${game.name} guide`,
      `${game.name} wiki`,
      game.genreLabel,
      ...keywords,
    ],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: `${game.shortName} Wiki`,
      title: fullTitle,
      description,
      images: [{ url: image, width: 460, height: 215, alt: game.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
