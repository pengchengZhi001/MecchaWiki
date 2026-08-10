import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { NativeBanner } from "@/components/ads";
import { mistfallGuides } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";

export const metadata: Metadata = createMistfallMetadata({
  title: "Guides",
  description:
    "Mistfall Hunter guides: beginner loop, how to extract, Returner Woodling, class tier list, and camp upgrades.",
  path: "/mistfall-hunter/guides",
  keywords: ["guides", "beginner guide", "how to extract"],
});

export default function MistfallGuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Guides"
        description="Search-driven articles for first hours, extract rules, Woodling cues, tiers, and camp progression."
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
