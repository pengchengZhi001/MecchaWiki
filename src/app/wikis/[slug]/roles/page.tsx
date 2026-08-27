import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import WikiRoleCard from "@/components/steam-wiki/WikiRoleCard";
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
    title: wiki.hubs.roles,
    description: wiki.copy.pages.roles,
    path: wikiPath(slug, "/roles"),
    keywords: [wiki.hubs.roles, game.shortName],
  });
}

export default async function GameWikiRolesPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  if (!game || !wiki) notFound();
  const sorted = [...wiki.roles].sort((a, b) => a.beginnerRank - b.beginnerRank);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title={wiki.hubs.roles}
        description={wiki.copy.pages.roles}
      />
      <NativeBanner />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((role) => (
          <WikiRoleCard key={role.slug} gameSlug={slug} role={role} />
        ))}
      </div>
    </div>
  );
}
