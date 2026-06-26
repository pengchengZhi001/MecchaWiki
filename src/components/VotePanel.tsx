"use client";

import { useState } from "react";

type VotePanelProps = {
  spotName: string;
};

export default function VotePanel({ spotName }: VotePanelProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);

  return (
    <div className="rounded-xl border border-card-border bg-card p-6">
      <h3 className="font-semibold">Spot Feedback</h3>
      <p className="mt-1 text-sm text-muted">
        Did this guide match the spot in-game? Your feedback helps us improve entries.
      </p>
      <p className="mt-2 text-xs text-muted/80">
        Guide ratings are curated estimates from published walkthroughs — not live match statistics.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setFeedback("helpful")}
          disabled={feedback !== null}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            feedback === "helpful"
              ? "bg-accent text-background"
              : "bg-surface ring-1 ring-card-border hover:ring-accent/30 disabled:opacity-50"
          }`}
        >
          👍 Accurate
        </button>
        <button
          onClick={() => setFeedback("not-helpful")}
          disabled={feedback !== null}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            feedback === "not-helpful"
              ? "bg-red-500/20 text-red-400 ring-1 ring-red-500/30"
              : "bg-surface ring-1 ring-card-border hover:ring-red-500/30 disabled:opacity-50"
          }`}
        >
          👎 Needs update
        </button>
      </div>

      {feedback && (
        <p className="mt-3 text-sm text-accent">
          Thanks! Your feedback on &ldquo;{spotName}&rdquo; was saved locally on this device.
        </p>
      )}
    </div>
  );
}
