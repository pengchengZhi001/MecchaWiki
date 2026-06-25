import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  title: string;
  highlight?: string;
  description: string;
  actions?: HeroAction[];
  badge?: string;
  compact?: boolean;
};

export default function HeroSection({
  title,
  highlight,
  description,
  actions = [],
  badge,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-card-border ${compact ? "py-12" : "py-20 sm:py-28"}`}
    >
      <div className="grid-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {badge && (
          <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/30">
            {badge}
          </span>
        )}

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "rounded-lg border border-card-border bg-surface px-5 py-2.5 text-sm font-medium transition hover:border-accent/30 hover:bg-card"
                    : "rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-dim glow-accent"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
