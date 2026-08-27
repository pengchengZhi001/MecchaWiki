import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GameWikiCard from "@/components/steam-wiki/GameWikiCard";
import JsonLd from "@/components/JsonLd";
import { NativeBanner } from "@/components/ads";
import { steamWikiGames } from "@/data/steam-wikis";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import { steamWikiHubPath } from "@/lib/steam-wiki";

export const metadata: Metadata = createMetadata({
  title: "Steam Game Wikis — Top 50 Most Played",
  description:
    "Strategy wikis for Steam's most played games: CS2, Dota 2, Palworld, PUBG, and 46 more — each on its own route with beginner guides, settings, and FAQs.",
  path: steamWikiHubPath,
  keywords: ["Steam wiki", "game guides", "top Steam games", "strategy wiki"],
});

export default function SteamWikisHubPage() {
  const genres = [...new Set(steamWikiGames.map((g) => g.genreLabel))];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Steam Top 50 Game Wikis",
            url: `${siteConfig.url}${steamWikiHubPath}`,
            numberOfItems: steamWikiGames.length,
            itemListElement: steamWikiGames.map((game) => ({
              "@type": "ListItem",
              position: game.rank,
              url: `${siteConfig.url}${steamWikiHubPath}/${game.slug}`,
              name: `${game.name} Wiki`,
            })),
          },
        ]}
      />

      <PageHeader
        title="Steam Game Wikis"
        description="CS2, Dota 2, Palworld, Marvel Rivals, PUBG, FC 26, and Rust are full wikis like Mistfall Hunter. The other titles are on the same routes and will be expanded the same way."
      />

      <NativeBanner />

      <p className="mb-8 text-sm text-muted">
        Also on this site:{" "}
        <Link href="/" className="text-accent hover:underline">
          Meccha Chameleon
        </Link>{" "}
        and{" "}
        <Link href="/mistfall-hunter" className="text-accent hover:underline">
          Mistfall Hunter
        </Link>
        .
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {genres.map((label) => (
          <span
            key={label}
            className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted ring-1 ring-card-border"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steamWikiGames.map((game) => (
          <GameWikiCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}
