import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import DifficultyBadge from "@/components/DifficultyBadge";
import WikiStratCard from "@/components/steam-wiki/WikiStratCard";
import { NativeBanner } from "@/components/ads";
import {
  getAllFullWikis,
  getFullWiki,
  getGameBySlug,
  getStratsByMap,
  getWikiMap,
} from "@/data/steam-wikis";
import {
  createSteamWikiMetadata,
  steamWikiHubPath,
  wikiPath,
} from "@/lib/steam-wiki";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string; item: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFullWikis().flatMap((wiki) =>
    wiki.maps.map((map) => ({ slug: wiki.slug, item: map.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const map = getWikiMap(slug, item);
  if (!game || !map) return {};
  return createSteamWikiMetadata({
    game,
    title: `${map.name} Guide`,
    description: map.tagline,
    path: wikiPath(slug, `/maps/${item}`),
    keywords: map.seoKeywords,
  });
}

export default async function GameWikiMapDetailPage({ params }: Props) {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  const wikiMap = getWikiMap(slug, item);
  if (!game || !wiki || !wikiMap) notFound();
  const related = getStratsByMap(slug, item);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
            { name: game.name, path: wikiPath(slug) },
            { name: wiki.hubs.maps, path: wikiPath(slug, "/maps") },
            { name: wikiMap.name, path: wikiPath(slug, `/maps/${item}`) },
          ]),
          articleJsonLd({
            title: `${wikiMap.name} Guide`,
            description: wikiMap.tagline,
            path: wikiPath(slug, `/maps/${item}`),
            datePublished: "2026-08-27",
            image: wikiMap.image.src,
          }),
        ]}
      />

      <Link
        href={wikiPath(slug, "/maps")}
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All {wiki.hubs.maps.toLowerCase()}
      </Link>

      <header className="mt-6">
        <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={wikiMap.image.src}
            alt={wikiMap.image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <DifficultyBadge difficulty={wikiMap.difficulty} />
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{wikiMap.name}</h1>
            <p className="mt-1 max-w-2xl text-muted">{wikiMap.tagline}</p>
          </div>
        </div>
      </header>

      <NativeBanner />

      <p className="mt-8 max-w-3xl leading-relaxed text-foreground/85">
        {wikiMap.overview}
      </p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {wikiMap.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-card-border bg-card p-4"
          >
            <dt className="text-xs uppercase tracking-wider text-muted">{stat.label}</dt>
            <dd className="mt-1 text-sm font-medium">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Key spots</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {wikiMap.poi.map((itemPoi) => (
            <li
              key={itemPoi.name}
              className="rounded-xl border border-card-border bg-surface/60 p-4"
            >
              <p className="font-semibold">{itemPoi.name}</p>
              <p className="mt-1 text-sm text-muted">{itemPoi.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Play notes</h2>
        <ul className="mt-4 space-y-2">
          {wikiMap.notes.map((note) => (
            <li
              key={note}
              className="rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground/80"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">
            {wiki.hubs.strats} for {wikiMap.name}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((strat) => (
              <WikiStratCard key={strat.slug} gameSlug={slug} strat={strat} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
