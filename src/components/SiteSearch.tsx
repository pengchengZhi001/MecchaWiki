"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/lib/search-index";

type SiteSearchProps = {
  large?: boolean;
  placeholder?: string;
};

export default function SiteSearch({
  large = false,
  placeholder = "Search spots, maps and workshop creations...",
}: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q))
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setOpen(false);
    router.push(`/hidden-spots?q=${encodeURIComponent(q)}`);
  }

  return (
    <div ref={wrapperRef} className={`relative ${large ? "w-full max-w-2xl" : "w-full max-w-md"}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
            🔍
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className={`w-full rounded-xl border border-card-border bg-surface pl-11 pr-4 text-foreground outline-none transition placeholder:text-muted focus:border-accent/50 focus:ring-2 focus:ring-accent/20 ${
              large ? "py-3.5 text-base" : "py-2.5 text-sm"
            }`}
            aria-label="Search"
          />
        </div>
      </form>

      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-card-border bg-card shadow-xl">
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
                className="flex items-center justify-between gap-3 px-4 py-3 transition hover:bg-surface"
              >
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted">{item.type}</p>
                </div>
                <span className="text-xs text-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
