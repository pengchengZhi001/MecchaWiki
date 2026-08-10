import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import DifficultyBadge from "@/components/DifficultyBadge";
import { NativeBanner } from "@/components/ads";
import { mistfallClasses, getClassBySlug } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mistfallClasses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hunter = getClassBySlug(slug);
  if (!hunter) return {};
  return createMistfallMetadata({
    title: `${hunter.name} Guide`,
    description: hunter.excerpt,
    path: `/mistfall-hunter/classes/${slug}`,
    keywords: hunter.seoKeywords,
    image: hunter.image.src,
    imageAlt: hunter.image.alt,
  });
}

export default async function MistfallClassDetailPage({ params }: Props) {
  const { slug } = await params;
  const hunter = getClassBySlug(slug);
  if (!hunter) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mistfall Hunter", path: "/mistfall-hunter" },
            { name: "Classes", path: "/mistfall-hunter/classes" },
            { name: hunter.name, path: `/mistfall-hunter/classes/${slug}` },
          ]),
          articleJsonLd({
            title: `${hunter.name} Guide`,
            description: hunter.excerpt,
            path: `/mistfall-hunter/classes/${slug}`,
            datePublished: "2026-08-10",
            image: hunter.image.src,
          }),
        ]}
      />

      <Link
        href="/mistfall-hunter/classes"
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All classes
      </Link>

      <header className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={hunter.difficulty} />
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-accent/30">
              Beginner #{hunter.beginnerRank}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{hunter.name}</h1>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">
            {hunter.role}
          </p>
          <p className="mt-3 text-lg text-muted">{hunter.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border">
              PvE {hunter.pveTier}
            </span>
            <span className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border">
              PvP {hunter.pvpTier}
            </span>
          </div>
          <p className="mt-4 text-sm text-foreground/80">
            Stances: {hunter.stances.join(" · ")}
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={hunter.image.src}
            alt={hunter.image.alt}
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
            {hunter.strengths.map((item) => (
              <li key={item} className="text-sm text-foreground/80">
                • {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-card-border bg-card p-5">
          <h2 className="text-lg font-bold">Weaknesses</h2>
          <ul className="mt-3 space-y-2">
            {hunter.weaknesses.map((item) => (
              <li key={item} className="text-sm text-foreground/80">
                • {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Starter tips</h2>
        <ol className="mt-4 space-y-3">
          {hunter.starterTips.map((tip, i) => (
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

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/mistfall-hunter/routes/hallowgrove-first-extract"
          className="font-medium text-accent hover:underline"
        >
          First extract route →
        </Link>
        <Link
          href="/mistfall-hunter/guides/class-tier-list"
          className="font-medium text-accent hover:underline"
        >
          Full tier list →
        </Link>
      </div>
    </article>
  );
}
