import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { guides } from "@/data/guides";
import { NativeBanner } from "@/components/ads";

export const metadata: Metadata = createMetadata({
  title: "Meccha Chameleon Guides — How to Play, Tips & Strategy",
  description:
    "Meccha Chameleon guides: how to play, tips and tricks, controls, hiding spots, seeker strategies, patch notes, and workshop tips.",
  path: "/guides",
  keywords: [
    "how to play",
    "tips and tricks",
    "controls",
    "guide",
    "beginner",
    "Mecha Chameleon",
  ],
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Guides & Strategy"
        description="Search-driven guides from real player questions — bug fixes, painting, why you keep getting found, map rankings, and private lobbies. See the demand library for our backlog."
      />

      <NativeBanner />

      <div className="grid gap-4">
        {guides.map((guide) => (
          <Card
            key={guide.slug}
            href={`/guides/${guide.slug}`}
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
