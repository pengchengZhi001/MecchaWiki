import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RouteCard from "@/components/mistfall/RouteCard";
import { NativeBanner } from "@/components/ads";
import { mistfallRoutes } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";

export const metadata: Metadata = createMistfallMetadata({
  title: "Extraction Routes",
  description:
    "Mistfall Hunter extraction routes for Hallowgrove, Returner Woodling hunts, Soul Tree squads, and Brandrgarde exits.",
  path: "/mistfall-hunter/routes",
  keywords: ["extraction routes", "how to extract", "Soul Tree", "Woodling"],
});

export default function MistfallRoutesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Extraction Routes"
        description="Visual paths for clean extracts — first runs, Woodling hunts, solo loops, squad Soul Trees, and greed control."
      />
      <NativeBanner />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mistfallRoutes.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}
