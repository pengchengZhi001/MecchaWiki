import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import WikiStratCard from "@/components/steam-wiki/WikiStratCard";
import { NativeBanner } from "@/components/ads";
import { getAllFullWikis, getFullWiki, getGameBySlug } from "@/data/steam-wikis";
import { createSteamWikiMetadata, wikiPath } from "@/lib/steam-wiki";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFullWikis().map((wiki) => ({ slug: wiki.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  if (!game || !wiki) return {};
  return createSteamWikiMetadata({
    game,
    title: wiki.hubs.strats,
    description: wiki.copy.pages.strats,
    path: wikiPath(slug, "/strats"),
    keywords: [wiki.hubs.strats, game.shortName],
  });
}

export default async function GameWikiStratsPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  if (!game || !wiki) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title={wiki.hubs.strats}
        description={wiki.copy.pages.strats}
      />
      <NativeBanner />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {wiki.strats.map((strat) => (
          <WikiStratCard key={strat.slug} gameSlug={slug} strat={strat} />
        ))}
      </div>
    </div>
  );
}
