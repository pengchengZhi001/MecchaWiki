import Link from "next/link";
import { siteConfig } from "@/lib/site";

const popularMaps = [
  { href: "/maps/sewer", label: "Sewer" },
  { href: "/maps/mansion", label: "Mansion" },
  { href: "/maps/cold-storage", label: "Cold Storage" },
  { href: "/maps/brick-loft", label: "Brick Loft" },
  { href: "/maps/backrooms", label: "Backrooms" },
] as const;

const topGuides = [
  { href: "/hidden-spots?category=best", label: "Best Hiding Spots" },
  { href: "/guides/color-matching", label: "Color Guide" },
  { href: "/guides/beginner-basics", label: "Beginner Guide" },
  { href: "/workshop-maps", label: "Workshop Maps" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-card-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold">
              Meccha<span className="text-accent">Wiki</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Popular Maps
            </p>
            <ul className="mt-3 space-y-2">
              {popularMaps.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Top Guides
            </p>
            <ul className="mt-3 space-y-2">
              {topGuides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="text-xs text-muted">
            Guide-sourced spots · Survival strategies · Recommended by experienced players
          </p>
        </div>
      </div>
    </footer>
  );
}
