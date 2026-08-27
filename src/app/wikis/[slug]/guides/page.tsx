import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { NativeBanner } from "@/components/ads";
import {
  getGameBySlug,
  getGuidesForGame,
  steamWikiGames,
} from "@/data/steam-wikis";
import { createSteamWikiMetadata, wikiPath } from "@/lib/steam-wiki";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return steamWikiGames.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return createSteamWikiMetadata({
    game,
    title: "Guides",
    description: `${game.name} guides: beginner path, ${game.extra.title.toLowerCase()}, settings, and FAQ.`,
    path: wikiPath(game.slug, "/guides"),
    keywords: ["guides", game.shortName],
  });
}

export default async function GameWikiGuidesPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  const guides = getGuidesForGame(game);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title={`${game.shortName} Guides`}
        description={`Search-driven articles for ${game.name} — first week, fundamentals, PC settings, and FAQ.`}
      />
      <NativeBanner />
      <div className="grid gap-4">
        {guides.map((guide) => (
          <Card
            key={guide.slug}
            href={wikiPath(game.slug, `/guides/${guide.slug}`)}
            title={guide.title}
            description={guide.excerpt}
            badge={guide.category}
            badgeColor="bg-purple/10 text-purple ring-purple/30"
            footer={
              <span className="text-xs text-muted">{guide.readTime} read</span>
            }
          />
        ))}
      </div>
    </div>
  );
}
