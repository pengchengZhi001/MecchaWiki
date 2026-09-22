import Link from "next/link";
import { SidebarAds, NativeBanner } from "@/components/ads";
import type { SteamWikiGame } from "@/data/steam-wikis";
import { steamStoreUrl, wikiPath } from "@/lib/steam-wiki";

export default function WikiSidebarAds({ game }: { game: SteamWikiGame }) {
  return (
    <SidebarAds>
      <NativeBanner sidebar />
      <div className="rounded-xl border border-card-border bg-card p-5">
        <h3 className="text-sm font-semibold">Quick Links</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href={wikiPath(game.slug, "/guides/beginner-guide")}
              className="text-accent hover:underline"
            >
              {game.shortName} beginner guide →
            </Link>
          </li>
          <li>
            <Link href={wikiPath(game.slug)} className="text-accent hover:underline">
              Wiki home →
            </Link>
          </li>
          <li>
            <a
              href={steamStoreUrl(game.steamAppId)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Steam store →
            </a>
          </li>
        </ul>
      </div>
    </SidebarAds>
  );
}
