import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export default function Card({
  title,
  description,
  href,
  badge,
  badgeColor = "bg-accent/10 text-accent ring-accent/30",
  icon,
  footer,
  className = "",
}: CardProps) {
  const inner = (
    <>
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface ring-1 ring-card-border">
              {icon}
            </div>
          )}
          <h3 className="min-w-0 break-words text-base font-semibold leading-snug">{title}</h3>
        </div>
        {badge && (
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${badgeColor}`}
          >
            {badge}
          </span>
        )}
      </div>
      <p className="mt-3 break-words text-sm leading-relaxed text-muted">{description}</p>
      {footer && <div className="mt-4 border-t border-card-border pt-4">{footer}</div>}
    </>
  );

  const baseClass = `group block rounded-xl border border-card-border bg-card p-5 transition hover:border-accent/30 hover:bg-card/80 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${baseClass} glow-accent hover:glow-accent`}>
        {inner}
        <span className="mt-3 inline-flex items-center text-xs font-medium text-accent opacity-0 transition group-hover:opacity-100">
          View details →
        </span>
      </Link>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}
