import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "@/components/DifficultyBadge";
import type { HunterClass } from "@/data/mistfall";

export default function ClassCard({ hunter }: { hunter: HunterClass }) {
  return (
    <Link
      href={`/mistfall-hunter/classes/${hunter.slug}`}
      className="group overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={hunter.image.src}
          alt={hunter.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
              {hunter.name}
            </h3>
            <p className="text-xs text-muted">{hunter.role}</p>
          </div>
          <DifficultyBadge difficulty={hunter.difficulty} />
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-sm leading-relaxed text-muted">{hunter.excerpt}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent ring-1 ring-accent/30">
            Beginner #{hunter.beginnerRank}
          </span>
          <span className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border">
            PvE {hunter.pveTier}
          </span>
          <span className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border">
            PvP {hunter.pvpTier}
          </span>
        </div>
      </div>
    </Link>
  );
}
