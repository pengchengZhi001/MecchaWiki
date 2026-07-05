import Link from "next/link";
import SpotCard from "@/components/SpotCard";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import SiteSearch from "@/components/SiteSearch";
import SpotImage from "@/components/SpotImage";
import HomeHeroVisual from "@/components/HomeHeroVisual";
import Card from "@/components/Card";
import HomeFaqSection from "@/components/HomeFaqSection";
import SpotRatingBadge from "@/components/SpotRatingBadge";
import JsonLd from "@/components/JsonLd";
import { getTopSpots } from "@/data/hidden-spots";
import { getPopularWorkshopMaps } from "@/data/workshop";
import { guides } from "@/data/guides";
import { homeSeoSections } from "@/data/home-seo-content";
import {
  getTodaysTip,
  getWeeklyChallenge,
  getTodaysSpot,
  getBestSpotsThisWeek,
  getMostSuccessfulSpots,
  getNewCommunityDiscoveries,
} from "@/data/home-daily-content";
import { faqPageJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import { NativeBanner } from "@/components/ads";

export default function HomePage() {
  const topSpots = getTopSpots(12);
  const spotOfWeek = topSpots[0];
  const popularMaps = getPopularWorkshopMaps(12);
  const topWorkshopMaps = popularMaps.slice(0, 8);
  const featuredGuides = guides.slice(0, 4);

  const todaysTip = getTodaysTip();
  const weeklyChallenge = getWeeklyChallenge();
  const todaysSpot = getTodaysSpot();
  const bestThisWeek = getBestSpotsThisWeek(6);
  const mostSuccessful = getMostSuccessfulSpots(6);
  const newDiscoveries = getNewCommunityDiscoveries(6);

  const faqJsonLd = faqPageJsonLd(
    homeSeoSections.map((section) => ({
      question: section.heading,
      answer: section.paragraphs.join(" "),
    }))
  );

  return (
    <>
      <JsonLd data={[websiteJsonLd(), faqJsonLd]} />
      <section className="relative overflow-hidden border-b border-card-border py-12 sm:py-20">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/30">
                Recommended by Experienced Players
              </span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Win More Games.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                Discover the best hiding spots, survival strategies, and camouflage tips for{" "}
                <span className="text-foreground">Meccha Chameleon</span>.{" "}
                {siteConfig.tagline}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hidden-spots"
                  className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-dim glow-accent"
                >
                  Browse Best Spots
                </Link>
                <Link
                  href={`/hidden-spots/${spotOfWeek?.slug ?? "mansion-library-shelf"}`}
                  className="inline-block rounded-lg border border-card-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/30"
                >
                  Spot of the Week
                </Link>
              </div>
            </div>

            <HomeHeroVisual
              topSpots={topSpots.slice(0, 3)}
              popularMaps={popularMaps.slice(0, 4)}
            />
          </div>

          <div className="mt-10">
            <SiteSearch large placeholder="Search hiding spots, maps, survival tips..." />
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Most Subscribed Workshop Maps</h2>
              <p className="mt-1 text-sm text-muted">
                Sorted by Steam subscribers — Minecraft, Swimming Pool, Art Gallery & more
              </p>
            </div>
            <Link href="/workshop-maps" className="text-sm font-medium text-accent hover:underline">
              Full workshop database →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topWorkshopMaps.map((map, i) => (
              <WorkshopMapCard key={map.id} map={map} rank={i + 1} showSubscriptions />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-card-border bg-card p-5 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Today&apos;s Tip</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{todaysTip.tip}</p>
              <a
                href={todaysTip.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-muted hover:text-accent"
              >
                Source: {todaysTip.source} →
              </a>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Weekly Challenge</p>
              <p className="mt-2 font-semibold">{weeklyChallenge.title}</p>
              <p className="mt-1 text-sm text-muted">{weeklyChallenge.description}</p>
              <Link
                href={`/hidden-spots/${weeklyChallenge.spotSlug}`}
                className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
              >
                Try this spot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <NativeBanner />
      </div>

      {spotOfWeek && (
        <section className="border-b border-card-border">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Spot of the Week</h2>
                <p className="mt-1 text-sm text-muted">Our top pick to practice this week</p>
              </div>
            </div>
            <Link
              href={`/hidden-spots/${spotOfWeek.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-card-border bg-card lg:grid-cols-2"
            >
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px]">
                <SpotImage
                  src={spotOfWeek.imageUrl}
                  alt={`Spot of the Week: ${spotOfWeek.name}`}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="text-sm text-muted">{spotOfWeek.map}</span>
                <h3 className="mt-1 text-2xl font-bold">{spotOfWeek.name}</h3>
                <SpotRatingBadge rating={spotOfWeek.survivalRate} size="md" showDisclaimer />
                <p className="mt-4 text-sm leading-relaxed text-muted">{spotOfWeek.description}</p>
                <span className="mt-4 text-sm font-medium text-accent group-hover:underline">
                  Read full strategy guide →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-2 flex items-center gap-2">
            <span aria-hidden>🔥</span>
            <h2 className="text-2xl font-bold">Best Spots This Week</h2>
          </div>
          <p className="mb-8 text-sm text-muted">
            Featured and trending spots this week — community picks beyond the all-time top rated
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestThisWeek.map((spot, i) => (
              <SpotCard key={spot.slug} spot={spot} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-2 flex items-center gap-2">
          <span aria-hidden>🔥</span>
          <h2 className="text-2xl font-bold">Most Successful Spots</h2>
        </div>
        <p className="mb-8 text-sm text-muted">
          Highest guide-rated hiding spots across all official maps
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mostSuccessful.map((spot, i) => (
            <SpotCard key={spot.slug} spot={spot} rank={i + 1} />
          ))}
        </div>
        <Link
          href="/hidden-spots"
          className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
        >
          View all 50 spots →
        </Link>
      </section>

      <section className="border-t border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-2 flex items-center gap-2">
            <span aria-hidden>🔥</span>
            <h2 className="text-2xl font-bold">New Community Discoveries</h2>
          </div>
          <p className="mb-8 text-sm text-muted">Recently added spots from community references and guides</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {newDiscoveries.map((spot) => (
              <SpotCard key={spot.slug} spot={spot} />
            ))}
          </div>
          <Link
            href="/hidden-spots?sort=newest"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            See newest spots →
          </Link>
        </div>
      </section>

      <section className="border-t border-card-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Today&apos;s Spot</h2>
              <p className="mt-1 text-sm text-muted">A new spot to try every day — come back tomorrow for another</p>
            </div>
            <Link
              href={`/hidden-spots/${todaysSpot.slug}`}
              className="text-sm font-medium text-accent hover:underline"
            >
              Full guide →
            </Link>
          </div>
          <div className="max-w-md">
            <SpotCard spot={todaysSpot} />
          </div>
        </div>
      </section>

      <section className="border-t border-card-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Popular Workshop Maps</h2>
              <p className="mt-1 text-sm text-muted">
                Top Steam Workshop maps by subscriber count · Curated guides & hiding spots
              </p>
            </div>
            <Link href="/workshop-maps" className="text-sm font-medium text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularMaps.map((map, i) => (
              <WorkshopMapCard key={map.id} map={map} rank={i + 1} showSubscriptions />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-card-border mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Prop Hunt Guides</h2>
            <p className="mt-1 text-sm text-muted">
              Survival strategies · Color tips · Map tactics
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
      </section>

      <HomeFaqSection />
    </>
  );
}
