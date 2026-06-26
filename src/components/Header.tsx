"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-xl">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent ring-1 ring-accent/30 transition group-hover:bg-accent/20">
            🦎
          </span>
          <span className="truncate text-base font-bold tracking-tight sm:text-lg">
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

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/hidden-spots"
            className="hidden rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-background transition hover:bg-accent-dim sm:inline-block md:px-4"
          >
            Browse Best Spots
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground ring-1 ring-card-border transition hover:bg-surface md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-background/60 backdrop-blur-sm sm:top-16 md:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-card-border bg-background shadow-lg sm:max-h-[calc(100dvh-4rem)] md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition hover:bg-surface"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/hidden-spots"
                className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-background transition hover:bg-accent-dim"
                onClick={() => setMenuOpen(false)}
              >
                Browse Best Spots
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
