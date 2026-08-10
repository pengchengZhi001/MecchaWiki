import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import DifficultyBadge from "@/components/DifficultyBadge";
import { NativeBanner } from "@/components/ads";
import { mistfallRoutes, getRouteBySlug } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mistfallRoutes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return createMistfallMetadata({
    title: route.name,
    description: route.excerpt,
    path: `/mistfall-hunter/routes/${slug}`,
    keywords: route.seoKeywords,
    image: route.image.src,
    imageAlt: route.image.alt,
  });
}

export default async function MistfallRouteDetailPage({ params }: Props) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mistfall Hunter", path: "/mistfall-hunter" },
            { name: "Routes", path: "/mistfall-hunter/routes" },
            { name: route.name, path: `/mistfall-hunter/routes/${slug}` },
          ]),
          articleJsonLd({
            title: route.name,
            description: route.excerpt,
            path: `/mistfall-hunter/routes/${slug}`,
            datePublished: "2026-08-10",
            image: route.image.src,
          }),
        ]}
      />

      <Link
        href="/mistfall-hunter/routes"
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All routes
      </Link>

      <header className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={route.difficulty} />
            <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs ring-1 ring-card-border">
              {route.risk} risk
            </span>
            <span className="text-xs text-muted">
              {route.mapName} · {route.duration}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{route.name}</h1>
          <p className="mt-3 text-lg text-muted">{route.excerpt}</p>
          <p className="mt-4 text-sm text-accent">Best for: {route.bestFor}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={route.image.src}
            alt={route.image.alt}
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
          {route.steps.map((step, i) => (
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
          {route.tips.map((tip) => (
            <li
              key={tip}
              className="rounded-lg border border-card-border bg-surface/60 px-4 py-3 text-sm text-foreground/80"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <Link
          href={`/mistfall-hunter/maps/${route.mapSlug}`}
          className="text-sm font-medium text-accent hover:underline"
        >
          Open {route.mapName} map notes →
        </Link>
      </div>
    </article>
  );
}
