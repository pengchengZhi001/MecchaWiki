import Link from "next/link";
import Image from "next/image";
import type { SteamWikiGame } from "@/data/steam-wikis";
import { steamHeader, wikiPath } from "@/lib/steam-wiki";
import { fullWikiNav } from "@/data/steam-wikis/names";

export default function GameWikiCard({
  game,
  showRank = true,
}: {
  game: SteamWikiGame;
  showRank?: boolean;
}) {
  return (
    <Link
      href={wikiPath(game.slug)}
      className="group block overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30 hover:glow-accent"
    >
      <div className="relative aspect-[460/215] overflow-hidden bg-surface">
        <Image
          src={steamHeader(game.steamAppId)}
          alt={`${game.name} Steam header`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {showRank && (
            <span className="rounded-lg bg-accent/90 px-2 py-1 text-xs font-bold text-background">
              #{game.rank}
            </span>
          )}
          <span className="rounded-lg bg-black/50 px-2 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {game.genreLabel}
          </span>
          {game.freeToPlay && (
            <span className="rounded-lg bg-purple/90 px-2 py-1 text-xs font-bold text-white">
              Free
            </span>
          )}
          {fullWikiNav[game.slug] && (
            <span className="rounded-lg bg-accent px-2 py-1 text-xs font-bold text-background">
              Full wiki
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold leading-snug">{game.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{game.tagline}</p>
        <span className="mt-3 inline-flex text-xs font-medium text-accent opacity-0 transition group-hover:opacity-100">
          Open wiki →
        </span>
      </div>
    </Link>
  );
}
