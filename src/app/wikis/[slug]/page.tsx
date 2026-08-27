import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import JsonLd from "@/components/JsonLd";
import { NativeBanner } from "@/components/ads";
import {
  getGameBySlug,
  getGuidesForGame,
  steamWikiGames,
} from "@/data/steam-wikis";
import {
  createSteamWikiMetadata,
  steamHeader,
  steamStoreUrl,
  steamWikiHubPath,
  wikiPath,
} from "@/lib/steam-wiki";
import { breadcrumbJsonLd, faqPageJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

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
    title: game.name,
    description: game.pitch,
    path: wikiPath(game.slug),
    keywords: [game.shortName, game.developer, game.genreLabel],
  });
}

export default async function GameWikiHomePage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const guides = getGuidesForGame(game);
  const related = steamWikiGames
    .filter((g) => g.genre === game.genre && g.slug !== game.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            ...websiteJsonLd(),
            name: `${game.shortName} Wiki`,
            url: `${siteConfig.url}${wikiPath(game.slug)}`,
            description: game.pitch,
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
            { name: game.name, path: wikiPath(game.slug) },
          ]),
          faqPageJsonLd(game.faq.map((item) => ({ question: item.q, answer: item.a }))),
        ]}
      />

      <section className="relative overflow-hidden border-b border-card-border">
        <div className="absolute inset-0">
          <Image
            src={steamHeader(game.steamAppId)}
            alt={`${game.name} artwork`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            #{game.rank} · {game.genreLabel}
            {game.freeToPlay ? " · Free to play" : ""}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {game.name} Wiki
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/80">{game.tagline}</p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            {game.developer}
            {game.publisher !== game.developer ? ` · ${game.publisher}` : ""}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={wikiPath(game.slug, "/guides/beginner-guide")}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-dim"
            >
              Beginner guide
            </Link>
            <Link
              href={wikiPath(game.slug, "/guides")}
              className="rounded-lg border border-card-border bg-card/70 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:border-accent/40"
            >
              All guides
            </Link>
            <a
              href={steamStoreUrl(game.steamAppId)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted transition hover:text-accent"
            >
              Steam store →
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <NativeBanner />

        <section className="mt-4">
          <h2 className="text-2xl font-bold">The loop</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">{game.pitch}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{game.loop}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">First moves</h2>
          <ol className="mt-4 space-y-3">
            {game.firstMoves.map((step, i) => (
              <li
                key={step}
                className="rounded-xl border border-card-border bg-card p-4 text-sm leading-relaxed text-foreground/80"
              >
                <span className="mr-2 font-semibold text-accent">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Guides</h2>
              <p className="mt-1 text-sm text-muted">
                Beginner path, genre fundamentals, settings, and FAQ — all under{" "}
                <code className="text-xs text-accent">/wikis/{game.slug}</code>
              </p>
            </div>
            <Link
              href={wikiPath(game.slug, "/guides")}
              className="shrink-0 text-sm font-medium text-accent hover:underline"
            >
              All guides →
            </Link>
          </div>
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
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">More {game.genreLabel.toLowerCase()} wikis</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={wikiPath(other.slug)}
                  className="rounded-lg bg-surface px-4 py-2 text-sm font-medium ring-1 ring-card-border transition hover:text-accent"
                >
                  {other.shortName}
                </Link>
              ))}
              <Link
                href={steamWikiHubPath}
                className="rounded-lg px-4 py-2 text-sm font-medium text-accent hover:underline"
              >
                All 50 wikis →
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
