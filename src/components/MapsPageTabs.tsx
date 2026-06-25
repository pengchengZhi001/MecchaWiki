import Link from "next/link";

export type MapsTab = "all" | "official" | "workshop";

const tabs: { id: MapsTab; label: string }[] = [
  { id: "all", label: "All Maps" },
  { id: "official", label: "Official" },
  { id: "workshop", label: "Workshop" },
];

type Props = {
  active: MapsTab;
  counts: { all: number; official: number; workshop: number };
};

export default function MapsPageTabs({ active, counts }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Map categories">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        const count = counts[tab.id];
        return (
          <Link
            key={tab.id}
            href={tab.id === "all" ? "/maps" : `/maps?tab=${tab.id}`}
            role="tab"
            aria-selected={isActive}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-accent text-background glow-accent"
                : "bg-surface text-muted ring-1 ring-card-border hover:text-foreground"
            }`}
          >
            {tab.label}
            <span className={`ml-1.5 ${isActive ? "text-background/70" : "text-muted/70"}`}>
              ({count})
            </span>
          </Link>
        );
      })}
    </div>
  );
}
