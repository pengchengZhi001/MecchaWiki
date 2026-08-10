import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import DifficultyBadge from "@/components/DifficultyBadge";
import { NativeBanner } from "@/components/ads";
import { mistfallMaps } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";

export const metadata: Metadata = createMistfallMetadata({
  title: "Maps",
  description:
    "Mistfall Hunter map guides for Hallowgrove and Brandrgarde — gear caps, clearance, POIs, and extract notes.",
  path: "/mistfall-hunter/maps",
  keywords: ["Hallowgrove", "Brandrgarde", "map guide"],
});

export default function MistfallMapsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Maps"
        description="Learn Hallowgrove first. Push Brandrgarde when clearance, kit budget, and extract timing are ready."
      />
      <NativeBanner />
      <div className="grid gap-5 md:grid-cols-2">
        {mistfallMaps.map((map) => (
          <Link
            key={map.slug}
            href={`/mistfall-hunter/maps/${map.slug}`}
            className="group overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30"
          >
            <div className="relative aspect-[16/9] bg-surface">
              <Image
                src={map.image.src}
                alt={map.image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <DifficultyBadge difficulty={map.difficulty} />
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold group-hover:text-accent">
                {map.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{map.tagline}</p>
              <p className="mt-3 text-xs text-foreground/70">
                Gear cap: {map.gearCap}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
