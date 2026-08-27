import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "@/components/DifficultyBadge";
import type { WikiMap } from "@/data/steam-wikis";
import { wikiPath } from "@/lib/steam-wiki";

export default function WikiMapCard({
  gameSlug,
  map,
}: {
  gameSlug: string;
  map: WikiMap;
}) {
  return (
    <Link
      href={wikiPath(gameSlug, `/maps/${map.slug}`)}
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
        <h2 className="text-xl font-semibold group-hover:text-accent">{map.name}</h2>
        <p className="mt-2 text-sm text-muted">{map.tagline}</p>
      </div>
    </Link>
  );
}
