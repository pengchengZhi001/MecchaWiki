import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ClassCard from "@/components/mistfall/ClassCard";
import Card from "@/components/Card";
import { NativeBanner } from "@/components/ads";
import { getBeginnerClasses } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";

export const metadata: Metadata = createMistfallMetadata({
  title: "Classes & Starters",
  description:
    "Mistfall Hunter class guides for Mercenary, Seer, Sorcerer, Blackarrow, Shadowstrix, and Withered Knight — beginner ranks and stance tips.",
  path: "/mistfall-hunter/classes",
  keywords: ["classes", "best beginner class", "Gyldhunter", "tier list"],
});

export default function MistfallClassesPage() {
  const classes = getBeginnerClasses();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Classes & Starters"
        description="Six Gyldhunters ranked for learning first. Pick Mercenary or Seer until you can extract on schedule."
      />
      <NativeBanner />

      <Card
        href="/mistfall-hunter/guides/class-tier-list"
        title="Class tier list"
        description="Launch-leaning PvE / PvP snapshot and beginner priority order."
        badge="Guide"
        className="mb-8"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((hunter) => (
          <ClassCard key={hunter.slug} hunter={hunter} />
        ))}
      </div>
    </div>
  );
}
