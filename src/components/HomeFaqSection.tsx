import Link from "next/link";
import { homeSeoSections } from "@/data/home-seo-content";

const sectionLinks: Record<string, { href: string; label: string }> = {
  "what-is-mecha-chameleon": {
    href: "/guides/how-to-play",
    label: "How to play guide",
  },
  "best-hiding-spots-guide": {
    href: "/hidden-spots",
    label: "Browse hiding spots",
  },
  "beginner-tips": {
    href: "/guides/tips-and-tricks",
    label: "Tips and tricks",
  },
  "workshop-maps-explained": {
    href: "/workshop-maps",
    label: "Workshop map directory",
  },
  "fair-play-community-concerns": {
    href: "/guides/updates",
    label: "Updates & patch notes",
  },
};

function ChevronIcon() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function HomeFaqSection() {
  return (
    <section
      aria-label="Player guides and frequently asked questions"
      className="border-t border-card-border bg-surface/30"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Player Guides &amp; FAQ</h2>
        <p className="mt-2 text-sm text-muted">
          New to MECCHA CHAMELEON? Expand any topic below for in-depth tips on
          hiding spots, beginner mechanics, and workshop maps. For download,
          controls, and multiplayer help, see{" "}
          <Link href="/help" className="font-medium text-accent hover:underline">
            Help &amp; FAQ
          </Link>
          .
        </p>

        <div className="mt-8 divide-y divide-card-border rounded-xl border border-card-border bg-card/40">
          {homeSeoSections.map((section) => {
            const link = sectionLinks[section.id];

            return (
              <details key={section.id} className="group px-5 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium transition hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 break-words">{section.heading}</span>
                  <ChevronIcon />
                </summary>
                <div className="space-y-3 pb-5 pt-1">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="break-words text-sm leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                  {link && (
                    <Link
                      href={link.href}
                      className="inline-flex pt-1 text-sm font-medium text-accent transition hover:underline"
                    >
                      {link.label} →
                    </Link>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
