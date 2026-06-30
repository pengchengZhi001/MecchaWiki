import type { Metadata } from "next";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import SpotCategoryFilter from "@/components/SpotCategoryFilter";
import SpotMapFilter from "@/components/SpotMapFilter";
import SpotsListing from "@/components/SpotsListing";
import { hiddenSpots } from "@/data/hidden-spots";
import { NativeBanner } from "@/components/ads";

export const metadata: Metadata = createMetadata({
  title: "Hidden Spots Database",
  description:
    "Meccha Chameleon hiding spot database. Best, funniest, and expert spots — curated from TheGamer, IGN, and community guides with editorial ratings.",
  path: "/hidden-spots",
  keywords: [
    "hiding spots",
    "best hiding spots mansion",
    "funniest hiding spots",
    "impossible hiding spots",
    "meccha chameleon guides",
  ],
});

export default function HiddenSpotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <PageHeader
        title="Hidden Spot Database"
        description={`${hiddenSpots.length} guide-sourced hiding spots · TheGamer, IGN, community references · Recommended by experienced players`}
      />

      <NativeBanner />

      <div className="mb-6 space-y-4">
        <Suspense fallback={<div className="h-10" />}>
          <SpotCategoryFilter />
        </Suspense>
        <Suspense fallback={<div className="h-10" />}>
          <SpotMapFilter />
        </Suspense>
      </div>

      <Suspense fallback={<p className="text-muted">Loading spots...</p>}>
        <SpotsListing />
      </Suspense>
    </div>
  );
}
