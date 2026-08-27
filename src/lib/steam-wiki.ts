import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { SteamWikiGame } from "@/data/steam-wikis/types";

export const steamWikiHubPath = "/wikis";

export function steamHeader(appId: number) {
  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;
}

export function steamHero(appId: number) {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_hero.jpg`;
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

export function wikiNavLinks(game: SteamWikiGame) {
  return [
    { href: wikiPath(game.slug), label: "Home" },
    { href: wikiPath(game.slug, "/guides"), label: "Guides" },
    { href: steamWikiHubPath, label: "All Wikis" },
  ] as const;
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
