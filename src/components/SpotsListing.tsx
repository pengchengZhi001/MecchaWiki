"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SpotCard from "@/components/SpotCard";
import { sortSpots } from "@/data/hidden-spots";
import { SPOTS_PER_PAGE, spotSortOptions, type SpotSortId, type SpotCategoryId } from "@/lib/site";

export default function SpotsListing() {
  const searchParams = useSearchParams();
  const sort = (searchParams.get("sort") as SpotSortId) || "top-rated";
  const category = searchParams.get("category") as SpotCategoryId | null;
  const mapSlug = searchParams.get("map") ?? "";
  const q = searchParams.get("q")?.toLowerCase() ?? "";
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);

  const filtered = useMemo(() => {
    let list = sortSpots(sort);
    if (category && ["best", "funny", "impossible", "community"].includes(category)) {
      list = list.filter((s) => s.category === category);
    }
    if (mapSlug) {
      list = list.filter((s) => s.mapSlug === mapSlug);
    }
    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.map.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tips.toLowerCase().includes(q) ||
          s.slug.includes(q)
      );
    }
    return list;
  }, [sort, category, mapSlug, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / SPOTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * SPOTS_PER_PAGE,
    currentPage * SPOTS_PER_PAGE
  );

  function pageHref(nextPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    return `/hidden-spots?${params.toString()}`;
  }

  function sortHref(nextSort: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", nextSort);
    params.delete("page");
    return `/hidden-spots?${params.toString()}`;
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {spotSortOptions.map((opt) => (
          <Link
            key={opt.id}
            href={sortHref(opt.id)}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
              sort === opt.id
                ? "bg-accent text-background"
                : "bg-surface text-muted ring-1 ring-card-border hover:text-foreground"
            }`}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {(q || mapSlug) && (
        <p className="mb-4 text-sm text-muted">
          {mapSlug && !q && (
            <>
              Showing spots on{" "}
              <span className="font-medium text-foreground">
                {filtered[0]?.map ?? mapSlug}
              </span>
              {" — "}
            </>
          )}
          {q && <>Search results for &ldquo;{searchParams.get("q")}&rdquo; — </>}
          {filtered.length} spots
        </p>
      )}

      <p className="mb-6 text-sm text-muted">
        Showing {(currentPage - 1) * SPOTS_PER_PAGE + 1}–
        {Math.min(currentPage * SPOTS_PER_PAGE, filtered.length)} of {filtered.length} spots
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((spot, i) => (
          <SpotCard
            key={spot.slug}
            spot={spot}
            rank={sort === "top-rated" ? (currentPage - 1) * SPOTS_PER_PAGE + i + 1 : undefined}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
          {currentPage > 1 && (
            <Link
              href={pageHref(currentPage - 1)}
              className="rounded-lg border border-card-border bg-surface px-4 py-2 text-sm transition hover:border-accent/30"
            >
              Previous
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
            .map((p, idx, arr) => (
              <span key={p} className="flex items-center gap-2">
                {idx > 0 && arr[idx - 1] !== p - 1 && (
                  <span className="text-muted">…</span>
                )}
                <Link
                  href={pageHref(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition ${
                    p === currentPage
                      ? "bg-accent text-background"
                      : "border border-card-border bg-surface hover:border-accent/30"
                  }`}
                >
                  {p}
                </Link>
              </span>
            ))}
          {currentPage < totalPages && (
            <Link
              href={pageHref(currentPage + 1)}
              className="rounded-lg border border-card-border bg-surface px-4 py-2 text-sm transition hover:border-accent/30"
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
