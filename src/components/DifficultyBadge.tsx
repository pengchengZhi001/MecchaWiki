type DifficultyBadgeProps = {
  difficulty: string;
};

const colorMap: Record<string, string> = {
  Easy: "bg-green-500/10 text-green-400 ring-green-500/30",
  Medium: "bg-yellow-500/10 text-yellow-400 ring-yellow-500/30",
  Hard: "bg-orange-500/10 text-orange-400 ring-orange-500/30",
  Expert: "bg-red-500/10 text-red-400 ring-red-500/30",
};

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const colors = colorMap[difficulty] ?? "bg-muted/10 text-muted ring-muted/30";

  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${colors}`}>
      {difficulty}
    </span>
  );
}
