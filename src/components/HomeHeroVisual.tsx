import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import SpotImage from "@/components/SpotImage";
import type { HiddenSpot } from "@/data/hidden-spots";
import type { WorkshopMap } from "@/data/workshop";

type HomeHeroVisualProps = {
  topSpots: HiddenSpot[];
  popularMaps: WorkshopMap[];
};

type HeroTileProps = {
  href: string;
  badge: string;
  badgeClass: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

function HeroTile({
  href,
  badge,
  badgeClass,
  title,
  subtitle,
  className = "",
  children,
}: HeroTileProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-xl border border-card-border bg-card transition hover:border-accent/40 hover:glow-accent ${className}`}
    >
      <div className="absolute inset-0">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition group-hover:from-black/90" />
      <div className="absolute left-2 top-2 sm:left-2.5 sm:top-2.5">
        <span
          className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-[11px] ${badgeClass}`}
        >
          {badge}
        </span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5">
        {subtitle && (
          <p className="truncate text-[10px] text-white/70 sm:text-xs">{subtitle}</p>
        )}
        <p className="truncate text-xs font-bold text-white drop-shadow sm:text-sm">{title}</p>
      </div>
    </Link>
  );
}

export default function HomeHeroVisual({ topSpots, popularMaps }: HomeHeroVisualProps) {
  const [main, second, third] = topSpots;
  const [map1, map2, map3, map4] = popularMaps;

  if (!main) return null;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-purple/10 blur-2xl"
      />

      <div className="relative grid h-[320px] grid-cols-12 grid-rows-8 gap-2 sm:h-[380px] sm:gap-2.5 lg:h-[420px]">
        <HeroTile
          href={`/hidden-spots/${main.slug}`}
          badge="#1 Top Spot"
          badgeClass="bg-accent/20 text-accent ring-1 ring-accent/40"
          title={main.name}
          subtitle={main.map}
          className="col-span-7 row-span-5"
        >
          <SpotImage
            src={main.imageUrl}
            alt={`${main.name} on ${main.map}`}
            priority
            className="transition duration-500 group-hover:scale-105"
          />
        </HeroTile>

        {map1 && (
          <HeroTile
            href={`/workshop-maps/${map1.slug}`}
            badge="#1 Workshop"
            badgeClass="bg-purple/20 text-purple ring-1 ring-purple/40"
            title={map1.title}
            subtitle="Most subscribed"
            className="col-span-5 row-span-2"
          >
            <Image
              src={map1.imageUrl}
              alt={map1.title}
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />
          </HeroTile>
        )}

        {map2 && (
          <HeroTile
            href={`/workshop-maps/${map2.slug}`}
            badge="#2 Workshop"
            badgeClass="bg-purple/20 text-purple ring-1 ring-purple/40"
            title={map2.title}
            subtitle="Steam Workshop"
            className="col-span-5 row-span-2"
          >
            <Image
              src={map2.imageUrl}
              alt={map2.title}
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />
          </HeroTile>
        )}

        {second && (
          <HeroTile
            href={`/hidden-spots/${second.slug}`}
            badge="#2 Spot"
            badgeClass="bg-black/50 text-white/90 ring-1 ring-white/20"
            title={second.name}
            subtitle={second.map}
            className="col-span-4 row-span-3"
          >
            <SpotImage
              src={second.imageUrl}
              alt={`${second.name} on ${second.map}`}
              className="transition duration-500 group-hover:scale-105"
            />
          </HeroTile>
        )}

        {map3 && (
          <HeroTile
            href={`/workshop-maps/${map3.slug}`}
            badge="#3 Workshop"
            badgeClass="bg-purple/20 text-purple ring-1 ring-purple/40"
            title={map3.title}
            subtitle="Steam Workshop"
            className="col-span-4 row-span-3"
          >
            <Image
              src={map3.imageUrl}
              alt={map3.title}
              fill
              sizes="(max-width: 1024px) 30vw, 200px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </HeroTile>
        )}

        {third && (
          <HeroTile
            href={`/hidden-spots/${third.slug}`}
            badge="#3 Spot"
            badgeClass="bg-black/50 text-white/90 ring-1 ring-white/20"
            title={third.name}
            subtitle={third.map}
            className="col-span-3 row-span-3"
          >
            <SpotImage
              src={third.imageUrl}
              alt={`${third.name} on ${third.map}`}
              className="transition duration-500 group-hover:scale-105"
            />
          </HeroTile>
        )}

        {map4 && (
          <HeroTile
            href={`/workshop-maps/${map4.slug}`}
            badge="#4 Workshop"
            badgeClass="bg-purple/20 text-purple ring-1 ring-purple/40"
            title={map4.title}
            subtitle="Steam Workshop"
            className="col-span-4 row-span-3"
          >
            <Image
              src={map4.imageUrl}
              alt={map4.title}
              fill
              sizes="(max-width: 1024px) 30vw, 200px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </HeroTile>
        )}
      </div>
    </div>
  );
}
