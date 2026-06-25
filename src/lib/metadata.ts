import type { Metadata } from "next";
import { siteConfig } from "./site";

const DEFAULT_OG_IMAGE = "/og-default.jpg";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  imageAlt = siteConfig.tagline,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" || path === ""
      ? `${siteConfig.name} — ${siteConfig.tagline}`
      : `${title} | ${siteConfig.name}`;

  const ogImages = [{ url: image, width: 1200, height: 630, alt: imageAlt }];

  return {
    title: fullTitle,
    description,
    keywords: [
      "Meccha Chameleon",
      "hiding spots",
      "hide and seek",
      "workshop maps",
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
      siteName: siteConfig.name,
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
    robots: {
      index: true,
      follow: true,
    },
  };
}
