import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import WikiMapCard from "@/components/steam-wiki/WikiMapCard";
import { NativeBanner } from "@/components/ads";
import { getFullWiki, getGameBySlug, getAllFullWikis } from "@/data/steam-wikis";
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
    title: wiki.hubs.maps,
    description: wiki.copy.pages.maps,
    path: wikiPath(slug, "/maps"),
    keywords: [wiki.hubs.maps, game.shortName],
  });
}

export default async function GameWikiMapsPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  if (!game || !wiki) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title={wiki.hubs.maps}
        description={wiki.copy.pages.maps}
      />
      <NativeBanner />
      <div className="grid gap-5 md:grid-cols-2">
        {wiki.maps.map((map) => (
          <WikiMapCard key={map.slug} gameSlug={slug} map={map} />
        ))}
      </div>
    </div>
  );
}
