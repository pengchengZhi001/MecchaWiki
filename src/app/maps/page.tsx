import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import MapsPageTabs from "@/components/MapsPageTabs";
import WorkshopMapCard from "@/components/WorkshopMapCard";
import { maps } from "@/data/maps";
import { workshopMaps } from "@/data/workshop";
import { getSpotCountByMap } from "@/data/hidden-spots";

export const metadata: Metadata = createMetadata({
  title: "Map Guides — Official & Workshop",
  description:
    "All Meccha Chameleon maps: six official guides plus 29+ Steam Workshop community maps with subscribe links, hiding tips, and difficulty ratings.",
  path: "/maps",
  keywords: ["maps", "workshop maps", "official maps", "Mansion", "Minecraft", "map guide"],
});

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-500/10 text-green-400 ring-green-500/30",
  Medium: "bg-yellow-500/10 text-yellow-400 ring-yellow-500/30",
  Hard: "bg-orange-500/10 text-orange-400 ring-orange-500/30",
  Expert: "bg-red-500/10 text-red-400 ring-red-500/30",
};

type Props = { searchParams: Promise<{ tab?: string }> };

function parseTab(tab?: string): "all" | "official" | "workshop" {
  if (tab === "official" || tab === "workshop") return tab;
  return "all";
}

export default async function MapsPage({ searchParams }: Props) {
  const { tab: tabParam } = await searchParams;
  const tab = parseTab(tabParam);
  const curatedWorkshop = workshopMaps.filter((m) => m.curated);
  const counts = {
    all: maps.length + curatedWorkshop.length,
    official: maps.length,
    workshop: curatedWorkshop.length,
  };

  const showOfficial = tab === "all" || tab === "official";
  const showWorkshop = tab === "all" || tab === "workshop";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Map Guides"
        description={`${maps.length} official maps · ${curatedWorkshop.length} Steam Workshop maps · Subscribe to download custom maps`}
      />

      <MapsPageTabs active={tab} counts={counts} />

      {showOfficial && (
        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Official Maps</h2>
              <p className="mt-1 text-sm text-muted">
                Developer maps with verified hiding spots and difficulty ratings
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {maps.map((map) => {
              const spotCount = getSpotCountByMap(map.slug);
              return (
              <Card
                key={map.slug}
                href={`/maps/${map.slug}`}
                title={map.name}
                description={map.description.slice(0, 100) + "…"}
                badge={map.difficulty}
                badgeColor={difficultyColors[map.difficulty] ?? ""}
                footer={
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {map.colorPalette.map((c) => (
                        <div
                          key={c}
                          className="h-5 w-5 rounded-full ring-1 ring-card-border"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      {spotCount > 0 && <span>{spotCount} spots</span>}
                      <span>{map.playerCount}</span>
                    </div>
                  </div>
                }
              />
            );
            })}
          </div>
        </section>
      )}

      {showWorkshop && (
        <section className={showOfficial ? "mt-16 border-t border-card-border pt-12" : "mt-10"}>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Workshop Maps</h2>
              <p className="mt-1 text-sm text-muted">
                Player-uploaded maps from Steam Workshop · One-click subscribe to download
              </p>
            </div>
            <Link href="/workshop-maps" className="text-sm font-medium text-accent hover:underline">
              Full workshop database →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {curatedWorkshop.map((map) => (
              <WorkshopMapCard key={map.id} map={map} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
