import Link from "next/link";
import Image from "next/image";
import type { WorkshopMap } from "@/data/workshop";
import { formatWorkshopSubscriptions } from "@/data/workshop";

type WorkshopMapCardProps = {
  map: WorkshopMap;
  rank?: number;
  showSubscriptions?: boolean;
};

export default function WorkshopMapCard({
  map,
  rank,
  showSubscriptions = false,
}: WorkshopMapCardProps) {
  return (
    <Link
      href={`/workshop-maps/${map.slug}`}
      className="group block overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-purple/30 hover:glow-purple"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={map.imageUrl}
          alt={`${map.title} workshop map`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {rank != null && (
            <span className="rounded-lg bg-accent/90 px-2 py-1 text-xs font-bold text-background">
              #{rank}
            </span>
          )}
          <span className="rounded-lg bg-black/50 px-2 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {map.curated ? "Steam Workshop" : "Coming Soon"}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-lg font-bold text-white drop-shadow-lg">{map.title}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">by {map.author}</span>
          <span className="text-muted">{map.colors} colors</span>
        </div>
        {showSubscriptions && map.subscriptions > 0 && (
          <p className="mt-1.5 text-xs font-medium text-accent">
            {formatWorkshopSubscriptions(map.subscriptions)} Steam subscribers
          </p>
        )}
        <p className="mt-2 line-clamp-2 text-sm text-muted">{map.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {map.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-muted ring-1 ring-card-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
