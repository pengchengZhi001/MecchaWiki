import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import DifficultyBadge from "@/components/DifficultyBadge";
import SpotCard from "@/components/SpotCard";
import { maps, getMapBySlug } from "@/data/maps";
import { getSpotsByMap } from "@/data/hidden-spots";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return maps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) return {};

  return createMetadata({
    title: `${map.name} Map Guide — Best Hiding Spots`,
    description: map.description,
    path: `/maps/${slug}`,
    keywords: [map.name, map.difficulty, "map guide", "hiding spots"],
  });
}

export default async function MapDetailPage({ params }: Props) {
  const { slug } = await params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const linkedSpots = getSpotsByMap(slug).slice(0, 9);

  return (
    <article>
      <div className="relative aspect-[21/9] overflow-hidden border-b border-card-border">
        <Image
          src={map.imageUrl}
          alt={`${map.name} map screenshot`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/maps" className="text-sm text-muted transition hover:text-accent">
              ← Back to Maps
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <DifficultyBadge difficulty={map.difficulty} />
              <span className="text-sm text-muted">{map.playerCount}</span>
            </div>
            <h1 className="mt-3 text-4xl font-bold">{map.name}</h1>
            <p className="mt-2 text-lg text-muted">{map.tagline}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{map.description}</p>

        <div className="mt-6 flex gap-2">
          {map.colorPalette.map((c) => (
            <div key={c} className="text-center">
              <div
                className="h-10 w-10 rounded-lg ring-1 ring-card-border"
                style={{ backgroundColor: c }}
              />
              <p className="mt-1 font-mono text-[10px] text-muted">{c}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Best Spots In {map.name}</h2>
          <p className="mt-1 text-sm text-muted">
            {linkedSpots.length} verified hiding spots on this map
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {linkedSpots.map((spot, i) => (
              <SpotCard key={spot.slug} spot={spot} rank={i + 1} />
            ))}
          </div>
          {linkedSpots.length > 0 && (
            <Link
              href={`/hidden-spots?q=${encodeURIComponent(map.name.toLowerCase())}`}
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              View all {map.name} spots →
            </Link>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Pro Tips</h2>
          <ul className="mt-4 space-y-3">
            {map.tips.map((tip, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-card-border bg-card p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold">Hot Zones</h2>
            <div className="mt-4 space-y-3">
              {map.hotspots.map((spot) => (
                <div
                  key={spot.name}
                  className="rounded-xl border border-card-border bg-card p-5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        spot.type === "hot"
                          ? "bg-accent"
                          : spot.type === "danger"
                            ? "bg-red-400"
                            : "bg-muted"
                      }`}
                    />
                    <h3 className="font-semibold" style={{ color: map.accentColor }}>
                      {spot.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{spot.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">Danger Zones</h2>
            <div className="mt-4 space-y-3">
              {map.dangerZones.map((zone) => (
                <div
                  key={zone.name}
                  className="rounded-xl border border-red-500/20 bg-red-500/5 p-5"
                >
                  <h3 className="font-semibold text-red-400">{zone.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{zone.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
