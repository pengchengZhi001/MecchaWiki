import Link from "next/link";
import { latestPatch, isWithinPatchWindow, getHighPriorityIssues, getFixGuideHref } from "@/data/patch-fixes";

export default function PatchAlertBanner() {
  if (!isWithinPatchWindow()) return null;

  const urgent = getHighPriorityIssues().slice(0, 3);

  return (
    <section className="border-b border-accent/20 bg-accent/5">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-accent">
              {latestPatch.version} patch week — something broken?
            </p>
            <p className="mt-1 text-sm text-muted">
              {latestPatch.headline}. Start with the quick fix checklist.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides/patch-fixes"
              className="inline-block rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-dim"
            >
              Patch Fixes Hub
            </Link>
            <Link
              href="/guides/problems-after-update"
              className="inline-block rounded-lg border border-card-border bg-surface px-4 py-2 text-sm font-semibold transition hover:border-accent/30"
            >
              After Update Checklist
            </Link>
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {urgent.map((issue) => (
            <li key={issue.symptom}>
              <Link href={getFixGuideHref(issue.fixGuideSlug)} className="hover:text-accent">
                {issue.symptom} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
