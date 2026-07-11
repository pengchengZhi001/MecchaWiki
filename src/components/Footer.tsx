import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getPopularWorkshopMaps } from "@/data/workshop";

const popularWorkshopMaps = getPopularWorkshopMaps(5).map((m) => ({
  href: `/workshop-maps/${m.slug}`,
  label: m.title,
}));

const topGuides = [
  { href: "/guides/how-to-play", label: "How to Play" },
  { href: "/guides/tips-and-tricks", label: "Tips & Tricks" },
  { href: "/hidden-spots?category=best", label: "Best Hiding Spots" },
  { href: "/guides/controls-guide", label: "Controls Guide" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: `mailto:${siteConfig.contactEmail}`, label: "Contact Us" },
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
              Popular Workshop Maps
            </p>
            <ul className="mt-3 space-y-2">
              {popularWorkshopMaps.map((link) => (
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
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 transition hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-8 sm:flex-row">
          <p className="text-center text-xs text-muted sm:text-left">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="hidden text-center text-xs text-muted sm:block sm:text-right">
            Guide-sourced spots · Survival strategies · Recommended by experienced players
          </p>
        </div>
      </div>
    </footer>
  );
}
