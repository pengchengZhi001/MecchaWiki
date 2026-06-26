import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent ring-1 ring-accent/30 transition group-hover:bg-accent/20">
            🦎
          </span>
          <span className="text-lg font-bold tracking-tight">
            Meccha<span className="text-accent">Wiki</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/hidden-spots"
          className="rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-background transition hover:bg-accent-dim md:px-4"
        >
          Browse Best Spots
        </Link>
      </div>
    </header>
  );
}
