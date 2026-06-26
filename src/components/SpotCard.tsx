import Link from "next/link";
import type { HiddenSpot } from "@/data/hidden-spots";
import SpotImage from "@/components/SpotImage";
import SpotRatingBadge from "@/components/SpotRatingBadge";

type SpotCardProps = {
  spot: HiddenSpot;
  rank?: number;
};

export default function SpotCard({ spot, rank }: SpotCardProps) {
  return (
    <Link
      href={`/hidden-spots/${spot.slug}`}
      className="group block overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30 hover:glow-accent"
    >
      <div className="relative aspect-video overflow-hidden">
        <SpotImage src={spot.imageUrl} alt={`${spot.name} hiding spot on ${spot.map}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute left-3 top-3 flex gap-2">
          {rank && (
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/50 text-sm font-bold text-accent backdrop-blur-sm">
              #{rank}
            </span>
          )}
          <span className="rounded-lg bg-black/50 px-2 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {spot.map}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-lg font-bold text-white drop-shadow-lg">{spot.name}</p>
        </div>
      </div>

      <div className="p-4">
        <SpotRatingBadge rating={spot.survivalRate} size="sm" />
        <p className="mt-2 line-clamp-2 text-sm text-muted">{spot.description}</p>
        <p className="mt-2 text-xs text-muted/60">
          via {spot.source} · {spot.author}
        </p>
      </div>
    </Link>
  );
}
