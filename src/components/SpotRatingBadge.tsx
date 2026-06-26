type SpotRatingBadgeProps = {
  rating: number;
  size?: "sm" | "md" | "lg";
  showDisclaimer?: boolean;
};

const sizeClasses = {
  sm: { score: "text-lg", suffix: "text-sm", label: "text-xs" },
  md: { score: "text-2xl", suffix: "text-lg", label: "text-xs" },
  lg: { score: "text-3xl", suffix: "text-3xl", label: "text-sm" },
};

export default function SpotRatingBadge({
  rating,
  size = "md",
  showDisclaimer = false,
}: SpotRatingBadgeProps) {
  const c = sizeClasses[size];

  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className={`font-bold text-accent ${c.score}`}>{rating}</span>
        <span className={`font-bold text-accent/70 ${c.suffix}`}>/100</span>
        <span className={`ml-1 text-muted ${c.label}`}>Guide rating</span>
      </div>
      {showDisclaimer && (
        <p className="mt-1 text-xs text-muted">
          Recommended by experienced players · sourced from published guides, not live match stats
        </p>
      )}
    </div>
  );
}
