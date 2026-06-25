import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import VotePanel from "@/components/VotePanel";
import SpotImage from "@/components/SpotImage";
import SpotCard from "@/components/SpotCard";
import JsonLd from "@/components/JsonLd";
import { hiddenSpots, getSpotBySlug, getRelatedSpots } from "@/data/hidden-spots";
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
    description: `${spot.name} on ${spot.map}: editorial rating ${spot.survivalRate}/100. ${seo.whyItWorks.slice(0, 140)}…`,
    path: `/hidden-spots/${slug}`,
    keywords: [spot.name, spot.map, "meccha chameleon hiding spot", "prop hunt", spot.category],
    image: spot.imageUrl.startsWith("/") ? spot.imageUrl.split("?")[0] : undefined,
    imageAlt: `${spot.name} on ${spot.map} — Meccha Wiki guide`,
  });
}

export default async function SpotDetailPage({ params }: Props) {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) notFound();

  const categoryLabel = spotCategories.find((c) => c.id === spot.category);
  const seo = getSpotSeoContent(spot);
  const relatedSpots = getRelatedSpots(spot, 4);

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
      <div className="relative aspect-[21/9] overflow-hidden border-b border-card-border">
        <SpotImage
          src={spot.imageUrl}
          alt={`${spot.name} hiding spot on ${spot.map} — Meccha Wiki guide`}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/hidden-spots" className="text-sm text-muted transition hover:text-accent">
              ← Back to Database
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
            <h1 className="mt-3 text-4xl font-bold">{spot.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-3xl font-bold text-accent">{spot.survivalRate}</span>
                <span className="ml-1 text-3xl font-bold text-accent/70">/100</span>
                <span className="ml-2 text-sm text-muted">Editorial Rating</span>
              </div>
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
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold">Location Description</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{spot.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Why This Spot Works</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{seo.whyItWorks}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Pro Tips</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{spot.tips}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">How to Win Here</h2>
              <p className="mt-2 text-sm text-muted">{seo.paintHexDisclaimer}</p>
              <ul className="mt-4 space-y-3">
                {seo.guideSourced.howToWin.map((tip) => (
                  <li
                    key={tip.slice(0, 48)}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    {tip}
                  </li>
                ))}
              </ul>
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

            <section>
              <h2 className="text-xl font-bold">Guide Notes</h2>
              <ul className="mt-4 space-y-3">
                {seo.guideNotes.map((note) => (
                  <li
                    key={note.slice(0, 40)}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    {note}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-card-border bg-card p-5">
              <h2 className="text-sm font-semibold text-muted">Image &amp; Data Sources</h2>
              <p className="mt-2 text-sm text-muted">
                Screenshot matched to {spot.map} where possible; some entries use map overview
                assets when a spot-specific image is unavailable. Spot details via{" "}
                <a href={spot.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {spot.source}
                </a>
                . Editorial ratings are guide estimates, not live match statistics. Game imagery ©
                lemorion_1224 / Steam.
              </p>
            </section>
          </div>

          <div>
            <VotePanel spotName={spot.name} />
          </div>
        </div>

        {relatedSpots.length > 0 && (
          <section className="mt-16 border-t border-card-border pt-12">
            <h2 className="text-xl font-bold">Related Spots</h2>
            <p className="mt-1 text-sm text-muted">
              More hiding spots on {spot.map} and similar maps
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedSpots.map((related) => (
                <SpotCard key={related.slug} spot={related} />
              ))}
            </div>
            <Link
              href={`/hidden-spots?q=${encodeURIComponent(spot.map.toLowerCase())}`}
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              View all {spot.map} spots →
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
