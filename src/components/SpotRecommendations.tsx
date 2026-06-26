import Link from "next/link";
import type { HiddenSpot } from "@/data/hidden-spots";
import type { SpotRecommendations as SpotRecs } from "@/data/hidden-spots";
import SpotCard from "@/components/SpotCard";

type SpotRecommendationsProps = {
  spot: HiddenSpot;
  recommendations: SpotRecs;
};

type RecSection = {
  title: string;
  description: string;
  spots: HiddenSpot[];
  viewAllHref?: string;
  viewAllLabel?: string;
};

export default function SpotRecommendations({ spot, recommendations }: SpotRecommendationsProps) {
  const sections: RecSection[] = [
    {
      title: "More on This Map",
      description: `Other ${spot.map} hiding spots ranked by guide rating`,
      spots: recommendations.sameMap,
      viewAllHref: `/hidden-spots?map=${spot.mapSlug}`,
      viewAllLabel: `View all ${spot.map} spots`,
    },
    {
      title: "Similar Difficulty",
      description: "Spots with a comparable guide rating on other maps",
      spots: recommendations.similarRating,
    },
    {
      title: "Easy Spots to Learn First",
      description: "High guide-rated spots recommended for building fundamentals",
      spots: recommendations.easySpots,
      viewAllHref: "/hidden-spots?category=best",
      viewAllLabel: "Browse best spots",
    },
    {
      title: "Hard Spots & Challenges",
      description: "Low-rated or impossible-tier spots for advanced players",
      spots: recommendations.hardSpots,
      viewAllHref: "/hidden-spots?category=impossible",
      viewAllLabel: "Browse impossible spots",
    },
    {
      title: `More ${spot.category === "best" ? "Top-Rated" : spot.category === "funny" ? "Funny" : spot.category === "impossible" ? "Impossible" : "Community"} Picks`,
      description: "Same category on different maps",
      spots: recommendations.sameCategory,
      viewAllHref: `/hidden-spots?category=${spot.category}`,
      viewAllLabel: "View category",
    },
  ].filter((s) => s.spots.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.title} className="border-t border-card-border pt-12">
          <h2 className="text-xl font-bold">{section.title}</h2>
          <p className="mt-1 text-sm text-muted">{section.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {section.spots.map((related) => (
              <SpotCard key={related.slug} spot={related} />
            ))}
          </div>
          {section.viewAllHref && section.viewAllLabel && (
            <Link
              href={section.viewAllHref}
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              {section.viewAllLabel} →
            </Link>
          )}
        </section>
      ))}
    </div>
  );
}
