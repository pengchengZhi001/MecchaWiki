import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import DifficultyBadge from "@/components/DifficultyBadge";
import RouteCard from "@/components/mistfall/RouteCard";
import { NativeBanner } from "@/components/ads";
import {
  mistfallMaps,
  getMapBySlug,
  getRoutesByMap,
} from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mistfallMaps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) return {};
  return createMistfallMetadata({
    title: `${map.name} Map Guide`,
    description: map.tagline,
    path: `/mistfall-hunter/maps/${slug}`,
    keywords: map.seoKeywords,
    image: map.image.src,
    imageAlt: map.image.alt,
  });
}

export default async function MistfallMapDetailPage({ params }: Props) {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const relatedRoutes = getRoutesByMap(slug);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mistfall Hunter", path: "/mistfall-hunter" },
            { name: "Maps", path: "/mistfall-hunter/maps" },
            { name: map.name, path: `/mistfall-hunter/maps/${slug}` },
          ]),
          articleJsonLd({
            title: `${map.name} Map Guide`,
            description: map.tagline,
            path: `/mistfall-hunter/maps/${slug}`,
            datePublished: "2026-08-10",
            image: map.image.src,
          }),
        ]}
      />

      <Link
        href="/mistfall-hunter/maps"
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All maps
      </Link>

      <header className="mt-6">
        <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-xl border border-card-border">
          <Image
            src={map.image.src}
            alt={map.image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <DifficultyBadge difficulty={map.difficulty} />
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{map.name}</h1>
            <p className="mt-1 max-w-2xl text-muted">{map.tagline}</p>
          </div>
        </div>
      </header>

      <NativeBanner />

      <p className="mt-8 max-w-3xl leading-relaxed text-foreground/85">
        {map.overview}
      </p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-card-border bg-card p-4">
          <dt className="text-xs uppercase tracking-wider text-muted">Gear cap</dt>
          <dd className="mt-1 text-sm font-medium">{map.gearCap}</dd>
        </div>
        <div className="rounded-xl border border-card-border bg-card p-4">
          <dt className="text-xs uppercase tracking-wider text-muted">Escape XP</dt>
          <dd className="mt-1 text-sm font-medium">{map.escapeXp}</dd>
        </div>
        <div className="rounded-xl border border-card-border bg-card p-4">
          <dt className="text-xs uppercase tracking-wider text-muted">Clearance</dt>
          <dd className="mt-1 text-sm font-medium">{map.clearance}</dd>
        </div>
      </dl>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Key POIs</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {map.poi.map((item) => (
            <li
              key={item.name}
              className="rounded-xl border border-card-border bg-surface/60 p-4"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Extract notes</h2>
        <ul className="mt-4 space-y-2">
          {map.extractNotes.map((note) => (
            <li
              key={note}
              className="rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground/80"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>

      {relatedRoutes.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Routes on this map</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
