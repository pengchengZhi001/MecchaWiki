import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { NativeBanner } from "@/components/ads";
import {
  getGuideForGame,
  getGuidesForGame,
  steamWikiGames,
} from "@/data/steam-wikis";
import {
  createSteamWikiMetadata,
  steamWikiHubPath,
  wikiPath,
} from "@/lib/steam-wiki";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string; guide: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return steamWikiGames.flatMap((game) =>
    getGuidesForGame(game).map((guide) => ({
      slug: game.slug,
      guide: guide.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, guide: guideSlug } = await params;
  const match = getGuideForGame(slug, guideSlug);
  if (!match) return {};
  return createSteamWikiMetadata({
    game: match.game,
    title: match.guide.title,
    description: match.guide.excerpt,
    path: wikiPath(slug, `/guides/${guideSlug}`),
    keywords: match.guide.seoKeywords,
  });
}

function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function GameWikiGuideDetailPage({ params }: Props) {
  const { slug, guide: guideSlug } = await params;
  const match = getGuideForGame(slug, guideSlug);
  if (!match) notFound();
  const { game, guide } = match;

  const toc = guide.content.map((section) => ({
    id: slugify(section.heading),
    label: section.heading,
  }));

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
            { name: game.name, path: wikiPath(game.slug) },
            { name: "Guides", path: wikiPath(game.slug, "/guides") },
            {
              name: guide.title,
              path: wikiPath(game.slug, `/guides/${guide.slug}`),
            },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            path: wikiPath(game.slug, `/guides/${guide.slug}`),
            datePublished: "2026-08-18",
          }),
        ]}
      />

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="mb-8 lg:col-span-2">
          <Link
            href={wikiPath(game.slug, "/guides")}
            className="text-sm text-muted transition hover:text-accent"
          >
            ← {game.shortName} guides
          </Link>
          <nav className="sticky top-24 mt-6 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              On this page
            </p>
            <ul className="mt-3 space-y-2 border-l border-card-border pl-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-10">
          <header className="border-b border-card-border pb-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple/10 px-2.5 py-0.5 text-xs font-medium text-purple ring-1 ring-purple/30">
                {guide.category}
              </span>
              <span className="text-xs text-muted">{guide.readTime} read</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{guide.title}</h1>
            <p className="mt-3 text-lg text-muted">{guide.excerpt}</p>
          </header>

          <NativeBanner />

          <nav className="mt-8 rounded-xl border border-card-border bg-card p-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              On this page
            </p>
            <ul className="mt-3 space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-accent hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose-custom mt-8 space-y-10">
            {guide.content.map((section) => {
              const id = slugify(section.heading);
              return (
                <section key={id} id={id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-foreground/80">
                    {section.body}
                  </p>
                </section>
              );
            })}
          </div>

          <footer className="mt-12 rounded-xl border border-card-border bg-surface p-6">
            <p className="text-sm text-muted">
              More {game.shortName} pages:{" "}
              <Link href={wikiPath(game.slug)} className="text-accent hover:underline">
                wiki home
              </Link>
              {" · "}
              <Link
                href={wikiPath(game.slug, "/guides")}
                className="text-accent hover:underline"
              >
                all guides
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
