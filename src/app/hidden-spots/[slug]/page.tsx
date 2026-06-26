import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import VotePanel from "@/components/VotePanel";
import SpotImage from "@/components/SpotImage";
import SpotRatingBadge from "@/components/SpotRatingBadge";
import SpotRecommendations from "@/components/SpotRecommendations";
import JsonLd from "@/components/JsonLd";
import { InlineAds, SidebarAds } from "@/components/ads";
import { hiddenSpots, getSpotBySlug, getSpotRecommendations } from "@/data/hidden-spots";
import { getSpotSeoContent } from "@/data/spot-seo-content";
import { spotCategories } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hiddenSpots.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) return {};

  const seo = getSpotSeoContent(spot);

  return createMetadata({
    title: `${spot.name} — ${spot.map} Hiding Spot Guide`,
    description: `${spot.name} on ${spot.map}: guide rating ${spot.survivalRate}/100. ${seo.whyItWorks.slice(0, 140)}…`,
    path: `/hidden-spots/${slug}`,
    keywords: [spot.name, spot.map, "meccha chameleon hiding spot", "prop hunt", spot.category],
    image: spot.imageUrl.startsWith("/") ? spot.imageUrl.split("?")[0] : undefined,
    imageAlt: `${spot.name} on ${spot.map} — Meccha Wiki guide`,
  });
}

function BulletList({ items, dotClass = "bg-accent/80" }: { items: string[]; dotClass?: string }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function SpotDetailPage({ params }: Props) {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) notFound();

  const categoryLabel = spotCategories.find((c) => c.id === spot.category);
  const seo = getSpotSeoContent(spot);
  const recommendations = getSpotRecommendations(spot, 4);

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Hidden Spots", path: "/hidden-spots" },
            { name: spot.name, path: `/hidden-spots/${slug}` },
          ]),
          articleJsonLd({
            title: `${spot.name} — ${spot.map} Hiding Spot Guide`,
            description: spot.description,
            path: `/hidden-spots/${slug}`,
            dateModified: spot.submittedAt,
          }),
        ]}
      />
      <div className="relative aspect-[16/9] overflow-hidden border-b border-card-border sm:aspect-[21/9]">
        <SpotImage
          src={spot.imageUrl}
          alt={`${spot.name} hiding spot on ${spot.map} — Meccha Wiki guide`}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/hidden-spots" className="text-sm text-muted transition hover:text-accent">
              ← Back to Best Spots
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={`/maps/${spot.mapSlug}`}
                className="rounded-full bg-surface/80 px-3 py-1 text-sm font-medium backdrop-blur-sm transition hover:text-accent"
              >
                {spot.map}
              </Link>
              {categoryLabel && (
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-accent/30">
                  {categoryLabel.emoji} {categoryLabel.label}
                </span>
              )}
            </div>
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">{spot.name}</h1>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <SpotRatingBadge rating={spot.survivalRate} size="lg" showDisclaimer />
              <div className="text-sm text-muted">
                via{" "}
                <a
                  href={spot.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {spot.source}
                </a>
                <span className="mx-2">·</span>
                {spot.author}
                <span className="mx-2">·</span>
                {spot.submittedAt}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="order-2 space-y-8 lg:order-1 lg:col-span-2">
            <section>
              <h2 className="text-xl font-bold">Location Description</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{spot.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Why It Works</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{seo.whyItWorks}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Best Colors</h2>
              <p className="mt-2 text-sm text-muted">{seo.paintHexDisclaimer}</p>
              <BulletList items={seo.bestColors} />
            </section>

            <section>
              <h2 className="text-xl font-bold">When To Use</h2>
              <BulletList items={seo.whenToUse} />
            </section>

            <section>
              <h2 className="text-xl font-bold">When NOT To Use</h2>
              <BulletList items={seo.whenNotToUse} dotClass="bg-yellow-500/80" />
            </section>

            <section>
              <h2 className="text-xl font-bold">Pro Tips</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{spot.tips}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">How to Win Here</h2>
              <BulletList items={seo.guideSourced.howToWin} />
            </section>

            <section>
              <h2 className="text-xl font-bold">Color &amp; Paint Plan</h2>
              <p className="mt-2 text-sm text-muted">
                Body-part breakdown from published guides — sample with in-game Eyedropper (F → Space), then
                fine-tune HSV / metallic / roughness per surface.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-card-border">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-card-border bg-surface/50">
                      <th className="px-4 py-3 font-semibold">Body part</th>
                      <th className="px-4 py-3 font-semibold">Sample from</th>
                      <th className="px-4 py-3 font-semibold">Technique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seo.guideSourced.paintLayers.map((layer) => (
                      <tr key={layer.bodyPart} className="border-b border-card-border/60 last:border-0">
                        <td className="px-4 py-3 font-medium text-accent">{layer.bodyPart}</td>
                        <td className="px-4 py-3 text-foreground/80">{layer.sampleFrom}</td>
                        <td className="px-4 py-3 text-muted">{layer.technique ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-semibold">Pose</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{seo.guideSourced.poseAdvice}</p>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-semibold">Metallic &amp; roughness</h3>
                <ul className="space-y-1">
                  {seo.guideSourced.finishSettings.map((s) => (
                    <li key={s} className="text-sm text-foreground/80">
                      · {s}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold">Common Mistakes</h2>
              <BulletList items={seo.commonMistakes} dotClass="bg-red-400/80" />
            </section>

            <section>
              <h2 className="text-xl font-bold">Counter Strategy</h2>
              <p className="mt-2 text-sm text-muted">
                For seekers hunting this zone — sourced from map guides and community checklists
              </p>
              <BulletList items={seo.counterStrategy} dotClass="bg-purple/80" />
            </section>

            <section>
              <h2 className="text-xl font-bold">Guide Sources</h2>
              <ul className="mt-3 space-y-2">
                {seo.guideSourced.sources.map((src) => (
                  <li key={src.url} className="text-sm">
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {src.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">Guide Notes</h2>
              <BulletList items={seo.guideNotes} />
            </section>

            <section className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Image &amp; Data Sources</h2>
              <p className="mt-2 text-sm text-muted">
                Screenshot matched to {spot.map} where possible; some entries use map overview
                assets when a spot-specific image is unavailable. Spot details via{" "}
                <a href={spot.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {spot.source}
                </a>
                . Guide ratings are curated estimates from published walkthroughs — not live match statistics.
                Game imagery © lemorion_1224 / Steam.
              </p>
            </section>
          </div>

          <SidebarAds className="order-1 lg:order-2">
            <VotePanel spotName={spot.name} />
            <div className="rounded-xl border border-card-border bg-card p-5">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href={`/maps/${spot.mapSlug}`} className="text-accent hover:underline">
                    {spot.map} map guide →
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/hidden-spots?q=${encodeURIComponent(spot.map.toLowerCase())}`}
                    className="text-accent hover:underline"
                  >
                    All {spot.map} spots →
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/hidden-spots?category=${spot.category}`}
                    className="text-accent hover:underline"
                  >
                    More {categoryLabel?.label ?? spot.category} →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/beginner-basics" className="text-accent hover:underline">
                    Beginner survival guide →
                  </Link>
                </li>
              </ul>
            </div>
          </SidebarAds>
        </div>

        <div className="mt-8 lg:hidden">
          <InlineAds />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Similar Spots</h2>
          <p className="mt-1 text-sm text-muted">
            Keep exploring — related spots to improve your win rate
          </p>
          <SpotRecommendations spot={spot} recommendations={recommendations} />
        </div>
      </div>
    </article>
  );
}
