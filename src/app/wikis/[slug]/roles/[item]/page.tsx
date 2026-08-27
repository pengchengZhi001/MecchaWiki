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
  getWikiRole,
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
    wiki.roles.map((role) => ({ slug: wiki.slug, item: role.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const role = getWikiRole(slug, item);
  if (!game || !role) return {};
  return createSteamWikiMetadata({
    game,
    title: `${role.name} Guide`,
    description: role.excerpt,
    path: wikiPath(slug, `/roles/${item}`),
    keywords: role.seoKeywords,
  });
}

export default async function GameWikiRoleDetailPage({ params }: Props) {
  const { slug, item } = await params;
  const game = getGameBySlug(slug);
  const wiki = getFullWiki(slug);
  const role = getWikiRole(slug, item);
  if (!game || !wiki || !role) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Game Wikis", path: steamWikiHubPath },
            { name: game.name, path: wikiPath(slug) },
            { name: wiki.hubs.roles, path: wikiPath(slug, "/roles") },
            { name: role.name, path: wikiPath(slug, `/roles/${item}`) },
          ]),
          articleJsonLd({
            title: `${role.name} Guide`,
            description: role.excerpt,
            path: wikiPath(slug, `/roles/${item}`),
            datePublished: "2026-08-27",
            image: role.image.src,
          }),
        ]}
      />

      <Link
        href={wikiPath(slug, "/roles")}
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All {wiki.hubs.roles.toLowerCase()}
      </Link>

      <header className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={role.difficulty} />
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-accent/30">
              Beginner #{role.beginnerRank}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{role.name}</h1>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">{role.role}</p>
          <p className="mt-3 text-lg text-muted">{role.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {role.tiers.map((tier) => (
              <span
                key={tier.label}
                className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border"
              >
                {tier.label}: {tier.value}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-foreground/80">Kit: {role.kit.join(" · ")}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={role.image.src}
            alt={role.image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </header>

      <NativeBanner />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-card-border bg-card p-5">
          <h2 className="text-lg font-bold">Strengths</h2>
          <ul className="mt-3 space-y-2">
            {role.strengths.map((itemS) => (
              <li key={itemS} className="text-sm text-foreground/80">
                • {itemS}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-card-border bg-card p-5">
          <h2 className="text-lg font-bold">Weaknesses</h2>
          <ul className="mt-3 space-y-2">
            {role.weaknesses.map((itemW) => (
              <li key={itemW} className="text-sm text-foreground/80">
                • {itemW}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Starter tips</h2>
        <ol className="mt-4 space-y-3">
          {role.starterTips.map((tip, i) => (
            <li
              key={tip}
              className="flex gap-3 rounded-xl border border-card-border bg-surface/60 p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-foreground/85">{tip}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
