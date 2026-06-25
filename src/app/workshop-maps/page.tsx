import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import { workshopMaps, getWorkshopByCategory } from "@/data/workshop";
import { workshopCategories } from "@/lib/site";

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Workshop Maps Database"
        description={`${curatedCount} curated Steam Workshop maps · Subscribe to download · Real preview images`}
      />

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
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workshopMaps.map((map) => (
            <WorkshopMapCard key={map.id} map={map} />
          ))}
        </div>
      </section>
    </div>
  );
}
