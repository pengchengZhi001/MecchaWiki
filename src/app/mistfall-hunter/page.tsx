import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import RouteCard from "@/components/mistfall/RouteCard";
import ClassCard from "@/components/mistfall/ClassCard";
import Card from "@/components/Card";
import { NativeBanner } from "@/components/ads";
import {
  mistfallRoutes,
  mistfallGuides,
  getBeginnerClasses,
} from "@/data/mistfall";
import { createMistfallMetadata, mistfallConfig } from "@/lib/mistfall";
import { breadcrumbJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMistfallMetadata({
  title: mistfallConfig.name,
  description: mistfallConfig.description,
  path: mistfallConfig.basePath,
  keywords: [
    "extraction routes",
    "class tier list",
    "Hallowgrove",
    "Brandrgarde",
  ],
});

export default function MistfallHomePage() {
  const featuredRoutes = mistfallRoutes.slice(0, 3);
  const starterClasses = getBeginnerClasses().slice(0, 3);
  const featuredGuides = mistfallGuides.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            ...websiteJsonLd(),
            name: mistfallConfig.name,
            url: `${siteConfig.url}${mistfallConfig.basePath}`,
            description: mistfallConfig.description,
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mistfall Hunter", path: mistfallConfig.basePath },
          ]),
        ]}
      />

      <section className="relative overflow-hidden border-b border-card-border">
        <div className="absolute inset-0">
          <Image
            src={mistfallConfig.heroImage}
            alt="Mistfall Hunter dark fantasy extraction atmosphere"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Mistfall Hunter
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Get out with the loot
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/80">
            {mistfallConfig.tagline}. Visual extraction routes and class starters
            for Gyldhunters who want clean extracts — not stash wipes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/mistfall-hunter/routes"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-dim"
            >
              Browse extraction routes
            </Link>
            <Link
              href="/mistfall-hunter/classes"
              className="rounded-lg border border-card-border bg-card/70 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:border-accent/40"
            >
              Class starters
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <NativeBanner />

        <section className="mt-4">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Featured extraction routes</h2>
              <p className="mt-1 text-sm text-muted">
                Card-style paths for Woodling hunts, first extracts, and squad Soul Trees.
              </p>
            </div>
            <Link
              href="/mistfall-hunter/routes"
              className="shrink-0 text-sm font-medium text-accent hover:underline"
            >
              All routes →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Start with these classes</h2>
              <p className="mt-1 text-sm text-muted">
                Beginner-ranked Gyldhunters so your first week compounds instead of resets.
              </p>
            </div>
            <Link
              href="/mistfall-hunter/classes"
              className="shrink-0 text-sm font-medium text-accent hover:underline"
            >
              All classes →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {starterClasses.map((hunter) => (
              <ClassCard key={hunter.slug} hunter={hunter} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Core guides</h2>
              <p className="mt-1 text-sm text-muted">
                Soul Harvest, August patch and lag, live class tiers, and first extracts.
              </p>
            </div>
            <Link
              href="/mistfall-hunter/guides"
              className="shrink-0 text-sm font-medium text-accent hover:underline"
            >
              All guides →
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.slug}
                href={`/mistfall-hunter/guides/${guide.slug}`}
                title={guide.title}
                description={guide.excerpt}
                badge={guide.category}
                footer={
                  <span className="text-xs text-muted">{guide.readTime} read</span>
                }
              />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-card-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Maps worth learning first</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Master Hallowgrove Normal before Brandrgarde clearance gates and stricter Soul rules.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/mistfall-hunter/maps/hallowgrove"
              className="rounded-lg bg-surface px-4 py-2 text-sm font-medium ring-1 ring-card-border transition hover:border-accent hover:text-accent"
            >
              Hallowgrove
            </Link>
            <Link
              href="/mistfall-hunter/maps/brandrgarde"
              className="rounded-lg bg-surface px-4 py-2 text-sm font-medium ring-1 ring-card-border transition hover:text-accent"
            >
              Brandrgarde
            </Link>
            <Link
              href="/mistfall-hunter/maps"
              className="rounded-lg px-4 py-2 text-sm font-medium text-accent hover:underline"
            >
              Map hub →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
