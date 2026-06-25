import Link from "next/link";
import SpotCard from "@/components/SpotCard";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import SiteSearch from "@/components/SiteSearch";
import SpotImage from "@/components/SpotImage";
import Card from "@/components/Card";
import HomeFaqSection from "@/components/HomeFaqSection";
import JsonLd from "@/components/JsonLd";
import { getTopSpots, getLatestSpots } from "@/data/hidden-spots";
import { getPopularWorkshopMaps } from "@/data/workshop";
import { guides } from "@/data/guides";
import { homeSeoSections } from "@/data/home-seo-content";
import { faqPageJsonLd, websiteJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  const topSpots = getTopSpots(12);
  const spotOfWeek = topSpots[0];
  const popularMaps = getPopularWorkshopMaps(6);
  const latestSpots = getLatestSpots(6);
  const featuredGuides = guides.slice(0, 4);

  const faqJsonLd = faqPageJsonLd(
    homeSeoSections.map((section) => ({
      question: section.heading,
      answer: section.paragraphs.join(" "),
    }))
  );

  return (
    <>
      <JsonLd data={[websiteJsonLd(), faqJsonLd]} />
      <section className="relative overflow-hidden border-b border-card-border py-16 sm:py-20">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/30">
                50 Source-Curated Spots
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                MECCHA CHAMELEON{" "}
                <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
                  Hidden Spot Database
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                50 hiding spots, workshop maps, editorial ratings, and prop hunt guides —
                curated from TheGamer, IGN, and community references.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hidden-spots"
                  className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-dim glow-accent"
                >
                  Browse All Spots
                </Link>
                <Link
                  href="/workshop-maps"
                  className="inline-block rounded-lg border border-card-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/30"
                >
                  Workshop Maps
                </Link>
              </div>
            </div>

            {spotOfWeek && (
              <Link
                href={`/hidden-spots/${spotOfWeek.slug}`}
                className="group relative hidden overflow-hidden rounded-2xl border border-card-border bg-card shadow-xl lg:block"
              >
                <div className="relative aspect-[4/3]">
                  <SpotImage
                    src={spotOfWeek.imageUrl}
                    alt={`Spot of the Week: ${spotOfWeek.name}`}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-lg bg-accent px-3 py-1 text-xs font-bold text-background">
                    Spot of the Week
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-white/70">{spotOfWeek.map}</p>
                    <p className="text-2xl font-bold text-white">{spotOfWeek.name}</p>
                    <p className="mt-1 text-sm text-accent">
                      Editorial rating {spotOfWeek.survivalRate}/100
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className="mt-10">
            <SiteSearch large placeholder="Search meccha chameleon hiding spots, maps, guides..." />
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Popular Workshop Maps</h2>
              <p className="mt-1 text-sm text-muted">Curated from Steam Workshop · Real preview images</p>
            </div>
            <Link href="/workshop-maps" className="text-sm font-medium text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularMaps.map((map) => (
              <WorkshopMapCard key={map.id} map={map} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Top Hidden Spots</h2>
            <p className="mt-1 text-sm text-muted">
              Best Meccha Chameleon hiding spots · Ranked by editorial rating
            </p>
          </div>
          <Link href="/hidden-spots" className="text-sm font-medium text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topSpots.map((spot, i) => (
            <SpotCard key={spot.slug} spot={spot} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="border-t border-card-border mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Latest Hidden Spots</h2>
            <p className="mt-1 text-sm text-muted">Recently added to the database</p>
          </div>
          <Link href="/hidden-spots?sort=newest" className="text-sm font-medium text-accent hover:underline">
            See newest →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestSpots.map((spot) => (
            <SpotCard key={spot.slug} spot={spot} />
          ))}
        </div>
      </section>

      <section className="border-t border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Prop Hunt Guides</h2>
              <p className="mt-1 text-sm text-muted">
                Meccha Chameleon hiding guides · Color tips · Map strategies
              </p>
            </div>
            <Link href="/guides" className="text-sm font-medium text-accent hover:underline">
              All guides →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                title={guide.title}
                description={guide.excerpt}
                badge={guide.category}
                badgeColor="bg-purple/10 text-purple ring-purple/30"
                footer={<span className="text-xs text-muted">{guide.readTime} read</span>}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeFaqSection />
    </>
  );
}
