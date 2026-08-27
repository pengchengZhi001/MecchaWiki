import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "@/components/DifficultyBadge";
import type { WikiStrat } from "@/data/steam-wikis";
import { wikiPath } from "@/lib/steam-wiki";

export default function WikiStratCard({
  gameSlug,
  strat,
}: {
  gameSlug: string;
  strat: WikiStrat;
}) {
  return (
    <Link
      href={wikiPath(gameSlug, `/strats/${strat.slug}`)}
      className="group overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={strat.image.src}
          alt={strat.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <DifficultyBadge difficulty={strat.difficulty} />
          <span className="rounded-full bg-background/80 px-2.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-card-border backdrop-blur">
            {strat.risk} risk
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {strat.mapName} · {strat.duration}
        </p>
        <h3 className="mt-1 text-lg font-semibold leading-snug group-hover:text-accent">
          {strat.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{strat.excerpt}</p>
        <p className="mt-3 text-xs text-accent">Best for: {strat.bestFor}</p>
      </div>
    </Link>
  );
}
