import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import {
  workshopMaps,
  getWorkshopMapBySlug,
  getRelatedWorkshopMaps,
} from "@/data/workshop";
import {
  getWorkshopSeoContent,
  formatWorkshopStat,
} from "@/data/workshop-seo-content";
import { getSteamSubscribeUrl } from "@/lib/steam-workshop";
import { workshopCategories } from "@/lib/site";
import { SidebarAds, NativeBanner } from "@/components/ads";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workshopMaps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const map = getWorkshopMapBySlug(slug);
  if (!map) return {};

  const seo = getWorkshopSeoContent(map);

  return createMetadata({
    title: `${map.title} — Workshop Map Guide`,
    description: seo.overview.slice(0, 160),
    path: `/workshop-maps/${slug}`,
    keywords: [map.title, "workshop", "workshop map guide", ...map.tags],
  });
}

function SeekerLeanBadge({ lean }: { lean: string }) {
  const colors: Record<string, string> = {
    "Hider-favored": "bg-accent/10 text-accent ring-accent/30",
    Balanced: "bg-purple/10 text-purple ring-purple/30",
    "Seeker-favored": "bg-red-400/10 text-red-400 ring-red-400/30",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${colors[lean] ?? colors.Balanced}`}
    >
      {lean}
    </span>
  );
}

export default async function WorkshopMapDetailPage({ params }: Props) {
  const { slug } = await params;
  const map = getWorkshopMapBySlug(slug);
  if (!map) notFound();

  const seo = getWorkshopSeoContent(map);
  const categoryLabel = workshopCategories.find((c) => c.id === map.category);
  const relatedMaps = getRelatedWorkshopMaps(slug);

  return (
    <article>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-card-border sm:aspect-[21/9]">
        <Image
          src={map.imageUrl}
          alt={map.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/workshop-maps" className="text-sm text-muted transition hover:text-accent">
              ← Back to Workshop Maps
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {categoryLabel && (
                <span className="rounded-full bg-purple/10 px-3 py-1 text-sm font-medium text-purple ring-1 ring-purple/30">
                  {categoryLabel.label}
                </span>
              )}
              <SeekerLeanBadge lean={seo.seekerLean} />
              <span className="rounded-full bg-surface/80 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                {map.curated ? "Steam Workshop" : "Coming Soon"}
              </span>
            </div>
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">{map.title}</h1>
            <p className="mt-2 text-base text-muted sm:text-lg">{seo.tagline}</p>
            <p className="mt-1 text-sm text-muted">
              by {map.author} · {map.colors} colors · {seo.lobbySize}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-xl font-bold">Overview</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{seo.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Why Play This Map</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{seo.whyPlay}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Best Colors</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {seo.bestColors.map((color) => (
                  <li
                    key={color}
                    className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-accent/30"
                  >
                    {color}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">Pro Tips</h2>
              <ul className="mt-4 space-y-3">
                {seo.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg border border-card-border bg-card p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple/10 text-xs font-bold text-purple">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid gap-6 sm:grid-cols-2">
              <section>
                <h2 className="text-xl font-bold">Hot Zones</h2>
                <div className="mt-4 space-y-3">
                  {seo.hotspots.map((spot) => (
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
                        <h3 className="font-semibold text-purple">{spot.name}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{spot.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold">Danger Zones</h2>
                <div className="mt-4 space-y-3">
                  {seo.dangerZones.map((zone) => (
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

            <section>
              <h2 className="text-xl font-bold">Common Mistakes</h2>
              <ul className="mt-3 space-y-2">
                {seo.commonMistakes.map((mistake) => (
                  <li
                    key={mistake}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/80" />
                    {mistake}
                  </li>
                ))}
              </ul>
            </section>

            {seo.comments.length > 0 && (
              <section>
                <h2 className="text-xl font-bold">Community Notes</h2>
                <ul className="mt-4 space-y-3">
                  {seo.comments.map((comment) => (
                    <li
                      key={`${comment.author}-${comment.text.slice(0, 20)}`}
                      className="rounded-xl border border-card-border bg-card p-4"
                    >
                      <p className="text-sm leading-relaxed text-foreground/80">
                        &ldquo;{comment.text}&rdquo;
                      </p>
                      <p className="mt-2 text-xs font-medium text-muted">— {comment.author}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Hiding Spot Guides</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Verified hiding spot entries for {map.title} are coming soon. Until then, use the
                hot zones above and our{" "}
                <Link href="/guides/workshop-meta" className="text-accent hover:underline">
                  Workshop Meta Guide
                </Link>{" "}
                to scout positions yourself.
              </p>
            </section>
          </div>

          <SidebarAds>
            <NativeBanner sidebar />
            <div className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Steam Stats</h2>
              <dl className="mt-4 space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Subscriptions</dt>
                  <dd className="text-sm font-semibold">{formatWorkshopStat(map.subscriptions)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Views</dt>
                  <dd className="text-sm font-semibold">{formatWorkshopStat(map.views)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Color Count</dt>
                  <dd className="text-sm font-semibold">{map.colors}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Lobby Size</dt>
                  <dd className="text-sm font-semibold">{seo.lobbySize}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Seeker Lean</dt>
                  <dd className="text-sm font-semibold">{seo.seekerLean}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Added</dt>
                  <dd className="text-sm font-semibold">{map.submittedAt}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted">Workshop ID</dt>
                  <dd className="font-mono text-xs text-muted">{map.workshopId}</dd>
                </div>
              </dl>
              <a
                href={getSteamSubscribeUrl(map.workshopId)}
                className="block w-full rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-background transition hover:bg-accent-dim glow-accent"
              >
                Subscribe in Steam — Download Map
              </a>
              <a
                href={map.workshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-full rounded-lg border border-card-border bg-surface px-4 py-2.5 text-center text-sm font-medium text-muted transition hover:border-purple/30 hover:text-foreground"
              >
                View on Steam Workshop
              </a>
            </div>

            <div className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {map.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-card-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Learn More</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/guides/workshop-meta" className="text-accent hover:underline">
                    Workshop Meta Guide →
                  </Link>
                </li>
                <li>
                  <Link href="/hidden-spots" className="text-accent hover:underline">
                    Hidden Spot Database →
                  </Link>
                </li>
                <li>
                  <Link href="/maps" className="text-accent hover:underline">
                    Official Map Guides →
                  </Link>
                </li>
              </ul>
            </div>

            <p className="text-xs text-muted">
              Preview image from Steam Workshop. Stats synced from live Steam data.
            </p>
          </SidebarAds>
        </div>

        {relatedMaps.length > 0 && (
          <section className="mt-16 border-t border-card-border pt-12">
            <h2 className="text-xl font-bold">Related Workshop Maps</h2>
            <p className="mt-1 text-sm text-muted">
              More {categoryLabel?.label.toLowerCase() ?? "workshop"} maps
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedMaps.map((related) => (
                <WorkshopMapCard key={related.id} map={related} />
              ))}
            </div>
            <Link
              href="/workshop-maps"
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              Browse all workshop maps →
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
