import type { Metadata } from "next";
import { siteConfig } from "./site";

export const mistfallConfig = {
  name: "Mistfall Hunter Wiki",
  shortName: "Mistfall Wiki",
  game: "Mistfall Hunter",
  tagline: "Extraction routes, class starters, and map exits",
  description:
    "Mistfall Hunter guides for extraction routes, Returner Woodling hunts, class starters, map POIs, and camp progression. Get out with the loot.",
  steamAppId: 3282300,
  steamUrl: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
  basePath: "/mistfall-hunter",
  heroImage: "/images/mistfall/hero.jpg",
  headerImage: "/images/mistfall/header.jpg",
} as const;

export const mistfallNavLinks = [
  { href: "/mistfall-hunter", label: "Home" },
  { href: "/mistfall-hunter/routes", label: "Routes" },
  { href: "/mistfall-hunter/classes", label: "Classes" },
  { href: "/mistfall-hunter/maps", label: "Maps" },
  { href: "/mistfall-hunter/guides", label: "Guides" },
] as const;

type MistfallMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
};

export function createMistfallMetadata({
  title,
  description,
  path = mistfallConfig.basePath,
  keywords = [],
  image = mistfallConfig.headerImage,
  imageAlt = mistfallConfig.tagline,
}: MistfallMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === mistfallConfig.basePath || path === `${mistfallConfig.basePath}/`
      ? `${mistfallConfig.name} — ${mistfallConfig.tagline}`
      : `${title} | ${mistfallConfig.name}`;

  const ogImages = [{ url: image, width: 1200, height: 630, alt: imageAlt }];

  return {
    title: fullTitle,
    description,
    keywords: [
      "Mistfall Hunter",
      "Mistfall Hunter guide",
      "extraction",
      "Returner Woodling",
      "Gyldhunter",
      ...keywords,
    ],
    authors: [{ name: mistfallConfig.name }],
    creator: mistfallConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: mistfallConfig.name,
      title: fullTitle,
      description,
      images: ogImages,
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
