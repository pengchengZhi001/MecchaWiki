"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getSpotFilterMaps } from "@/data/hidden-spots";
export default function SpotMapFilter() {
  const searchParams = useSearchParams();
  const activeMap = searchParams.get("map") ?? "all";
  const filterMaps = getSpotFilterMaps();

  function mapHref(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("map");
    } else {
      params.set("map", slug);
    }
    params.delete("page");
    const qs = params.toString();
    return qs ? `/hidden-spots?${qs}` : "/hidden-spots";
  }

  return (
    <div className="flex flex-wrap gap-2">
      <FilterLink href={mapHref("all")} active={activeMap === "all"}>
        All Maps
      </FilterLink>
      {filterMaps.map((map) => (
        <FilterLink key={map.slug} href={mapHref(map.slug)} active={activeMap === map.slug}>
          {map.name}
          {map.isWorkshop && (
            <span className="ml-1 text-[10px] uppercase opacity-60">WS</span>
          )}
          <span className="ml-1.5 text-xs opacity-70">{map.count}</span>
        </FilterLink>
      ))}
    </div>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
        active
          ? "bg-accent text-background"
          : "bg-surface text-muted ring-1 ring-card-border hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
