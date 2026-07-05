import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import { workshopMaps, getCuratedWorkshopMaps, getWorkshopByCategory } from "@/data/workshop";
import { workshopCategories } from "@/lib/site";
import { NativeBanner } from "@/components/ads";

export const metadata: Metadata = createMetadata({
  title: "Workshop Maps Database",
  description:
    "Curated Meccha Chameleon Steam Workshop maps. Funny maps, horror maps, competitive layouts — real preview images, no inflated stats.",
  path: "/workshop-maps",
  keywords: [
    "workshop maps",
    "best workshop maps",
    "funny maps",
    "horror maps",
    "competitive maps",
  ],
});

export default function WorkshopMapsPage() {
  const curatedCount = workshopMaps.filter((m) => m.curated).length;
  const topBySubs = getCuratedWorkshopMaps().slice(0, 8);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Workshop Maps Database"
        description={`${curatedCount} curated Steam Workshop maps · Subscribe to download · Real preview images`}
      />

      <NativeBanner />

      <section className="mb-16">
        <h2 className="text-xl font-bold">Most Subscribed</h2>
        <p className="mt-1 text-sm text-muted">
          Sorted by Steam Workshop subscribers — same order as the in-game trending list
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topBySubs.map((map, i) => (
            <WorkshopMapCard key={map.id} map={map} rank={i + 1} showSubscriptions />
          ))}
        </div>
      </section>

      {workshopCategories.map((cat) => {
        const maps = getWorkshopByCategory(cat.id, 5);
        if (maps.length === 0) return null;

        return (
          <section key={cat.id} className="mb-16">
            <h2 className="text-xl font-bold">{cat.label}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {maps.map((map) => (
                <WorkshopMapCard key={map.id} map={map} />
              ))}
            </div>
          </section>
        );
      })}

      <section>
        <h2 className="text-xl font-bold">All Workshop Maps</h2>
        <p className="mt-1 text-sm text-muted">Full catalog sorted by Steam subscribers</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {getCuratedWorkshopMaps().map((map) => (
            <WorkshopMapCard key={map.id} map={map} showSubscriptions />
          ))}
        </div>
      </section>
    </div>
  );
}
