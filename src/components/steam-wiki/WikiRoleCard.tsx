import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "@/components/DifficultyBadge";
import type { WikiRole } from "@/data/steam-wikis";
import { wikiPath } from "@/lib/steam-wiki";

export default function WikiRoleCard({
  gameSlug,
  role,
}: {
  gameSlug: string;
  role: WikiRole;
}) {
  return (
    <Link
      href={wikiPath(gameSlug, `/roles/${role.slug}`)}
      className="group overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={role.image.src}
          alt={role.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
              {role.name}
            </h3>
            <p className="text-xs text-muted">{role.role}</p>
          </div>
          <DifficultyBadge difficulty={role.difficulty} />
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-sm leading-relaxed text-muted">{role.excerpt}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent ring-1 ring-accent/30">
            Beginner #{role.beginnerRank}
          </span>
          {role.tiers.slice(0, 2).map((tier) => (
            <span
              key={tier.label}
              className="rounded-full bg-surface px-2.5 py-0.5 ring-1 ring-card-border"
            >
              {tier.label} {tier.value}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
