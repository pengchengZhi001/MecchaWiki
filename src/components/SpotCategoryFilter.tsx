"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { spotCategories } from "@/lib/site";

export default function SpotCategoryFilter() {
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  return (
    <div className="flex flex-wrap gap-2">
      <FilterLink href="/hidden-spots" active={active === "all"}>
        All Spots
      </FilterLink>
      {spotCategories.map((cat) => (
        <FilterLink
          key={cat.id}
          href={`/hidden-spots?category=${cat.id}`}
          active={active === cat.id}
        >
          {cat.emoji} {cat.label}
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
