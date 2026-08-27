import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { NativeBanner } from "@/components/ads";
import { mistfallGuides } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";

export const metadata: Metadata = createMistfallMetadata({
  title: "Guides",
  description:
    "Mistfall Hunter guides: Soul Harvest, August patch and lag, Einherjar Mist Lords, class tier list, and first extracts.",
  path: "/mistfall-hunter/guides",
  keywords: ["guides", "Soul Harvest", "patch notes", "beginner guide"],
});

export default function MistfallGuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Guides"
        description="Season 1 Soul Harvest, August patch notes and lag, Einherjar Knots, class tiers, and first-hour extracts."
      />
      <NativeBanner />
      <div className="grid gap-4">
        {mistfallGuides.map((guide) => (
          <Card
            key={guide.slug}
            href={`/mistfall-hunter/guides/${guide.slug}`}
            title={guide.title}
            description={guide.excerpt}
            badge={guide.category}
            badgeColor="bg-purple/10 text-purple ring-purple/30"
            footer={
              <span className="text-xs text-muted">{guide.readTime} read</span>
            }
          />
        ))}
      </div>
    </div>
  );
}
