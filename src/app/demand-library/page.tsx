import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import { demandLibrary, demandByCategory } from "@/data/demand-library";
import { NativeBanner } from "@/components/ads";

export const metadata: Metadata = createMetadata({
  title: "Content Demand Library — Player Questions We Track",
  description:
    "Search-driven backlog for Meccha Wiki: Steam Discussions, Reddit, and review themes mapped to pages — one player question, one article.",
  path: "/demand-library",
  keywords: ["content plan", "faq backlog", "player questions", "search demand"],
});

const statusLabel: Record<string, { text: string; className: string }> = {
  done: { text: "Published", className: "bg-accent/10 text-accent ring-accent/30" },
  planned: { text: "Planned", className: "bg-accent/10 text-accent ring-accent/30" },
  deferred: { text: "Deferred", className: "bg-muted/10 text-muted ring-muted/30" },
  skip: { text: "Skip", className: "bg-surface text-muted ring-card-border" },
};

function stars(n: number): string {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

export default function DemandLibraryPage() {
  const byCategory = demandByCategory();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Content Demand Library"
        description="One player question = one article. We track what Steam Discussions, Reddit, and reviews ask for — then publish only when community-sourced answers exist."
      />

      <p className="mb-8 text-sm text-muted">
        Workflow: check what players asked today → verify answers in discussions or
        official sources → publish or defer. No invented fixes.
      </p>

      <NativeBanner />

      {[...byCategory.entries()].map(([category, entries]) => (
        <section key={category} className="mb-10">
          <h2 className="text-lg font-bold">{category}</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-card-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-card-border bg-surface">
                <tr>
                  <th className="px-4 py-3 font-semibold">Player question</th>
                  <th className="px-4 py-3 font-semibold">Search value</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Page</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => {
                  const status = statusLabel[entry.status];
                  return (
                    <tr
                      key={entry.question}
                      className="border-b border-card-border last:border-0"
                    >
                      <td className="px-4 py-3">
                        <span className="font-medium">{entry.question}</span>
                        {entry.notes && (
                          <p className="mt-1 text-xs text-muted">{entry.notes}</p>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-accent">
                        {stars(entry.searchValue)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${status.className}`}
                        >
                          {status.text}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {entry.href ? (
                          <Link
                            href={entry.href}
                            className="text-accent hover:underline"
                          >
                            View →
                          </Link>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <p className="text-xs text-muted">
        {demandLibrary.filter((e) => e.status === "done").length} of{" "}
        {demandLibrary.length} tracked questions have published pages.
      </p>
    </div>
  );
}
