import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import DifficultyBadge from "@/components/DifficultyBadge";
import { NativeBanner } from "@/components/ads";
import {
  getAllFullWikis,
  getFullWiki,
  getGameBySlug,
  getWikiStrat,
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
    wiki.strats.map((strat) => ({ slug: wiki.slug, item: strat.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const strat = getWikiStrat(slug, item);
  if (!game || !strat) return {};
  return createSteamWikiMetadata({
    game,
    title: strat.name,
    description: strat.excerpt,
    path: wikiPath(slug, `/strats/${item}`),
    keywords: strat.seoKeywords,
  });
}

export default async function GameWikiStratDetailPage({ params }: Props) {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  const strat = getWikiStrat(slug, item);
  if (!game || !wiki || !strat) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
            { name: game.name, path: wikiPath(slug) },
            { name: wiki.hubs.strats, path: wikiPath(slug, "/strats") },
            { name: strat.name, path: wikiPath(slug, `/strats/${item}`) },
          ]),
          articleJsonLd({
            title: strat.name,
            description: strat.excerpt,
            path: wikiPath(slug, `/strats/${item}`),
            datePublished: "2026-08-27",
            image: strat.image.src,
          }),
        ]}
      />

      <Link
        href={wikiPath(slug, "/strats")}
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All {wiki.hubs.strats.toLowerCase()}
      </Link>

      <header className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={strat.difficulty} />
            <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs ring-1 ring-card-border">
              {strat.risk} risk
            </span>
            <span className="text-xs text-muted">
              {strat.mapName} · {strat.duration}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{strat.name}</h1>
          <p className="mt-3 text-lg text-muted">{strat.excerpt}</p>
          <p className="mt-4 text-sm text-accent">Best for: {strat.bestFor}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={strat.image.src}
            alt={strat.image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </header>

      <NativeBanner />

      <section className="mt-10">
        <h2 className="text-xl font-bold">Step-by-step</h2>
        <ol className="mt-4 space-y-3">
          {strat.steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-card-border bg-card p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-foreground/85">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Tips</h2>
        <ul className="mt-4 space-y-2">
          {strat.tips.map((tip) => (
            <li
              key={tip}
              className="rounded-lg border border-card-border bg-surface/60 px-4 py-3 text-sm text-foreground/80"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {strat.mapSlug && (
        <div className="mt-10">
          <Link
            href={wikiPath(slug, `/maps/${strat.mapSlug}`)}
            className="text-sm font-medium text-accent hover:underline"
          >
            Open {strat.mapName} map notes →
          </Link>
        </div>
      )}
    </article>
  );
}
