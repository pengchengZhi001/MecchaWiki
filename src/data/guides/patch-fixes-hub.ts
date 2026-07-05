import type { Guide } from "./types";
import { fixGuideCatalog, latestPatch } from "../patch-fixes";

const issueList = latestPatch.knownIssues
  .map(
    (issue, i) =>
      `${i + 1}. ${issue.symptom} — fix guide: /guides/${issue.fixGuideSlug}. Common searches: ${issue.searchTerms.slice(0, 3).join(", ")}.`
  )
  .join(" ");

export const patchFixesHubGuide: Guide = {
  slug: "patch-fixes",
  title: `Meccha Chameleon Patch Fixes — ${latestPatch.version} Problems & Solutions`,
  category: "Fix",
  readTime: "6 min",
  excerpt: `Just updated Meccha Chameleon? Fix can't join lobby, auth token errors, lag, broken hiding spots, and workshop load failures after ${latestPatch.version}.`,
  seoKeywords: [
    "patch fix",
    "after update",
    "can't join",
    "broken",
    "not working",
    latestPatch.version,
    "hotfix",
    "problems",
  ],
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "Steam Community Discussions",
      url: "https://steamcommunity.com/app/4704690/discussions/",
    },
  ],
  content: [
    {
      id: "latest-patch",
      heading: `Latest Patch — ${latestPatch.version} (${latestPatch.releasedAt})`,
      body: `${latestPatch.headline}. After every Steam download, most multiplayer and performance issues trace to version mismatch, stale lobby invites, or graphics settings — not broken servers. Start with our Problems After Update checklist, then jump to the specific fix below. Always confirm the exact build in Steam → Downloads before debugging network settings.`,
    },
    {
      id: "quick-checklist",
      heading: "60-Second Fix Checklist (Works After Most Patches)",
      body: "Close Meccha Chameleon completely. Restart Steam and confirm no pending update in Downloads. Relaunch the game. Host creates a brand-new room — do not reuse pre-patch invites. Test with an official map (Mansion) before workshop maps. Everyone in the party must subscribe to the same workshop map and restart after subscribing. If still broken: verify game files, then read the targeted guide for your exact error string.",
    },
    {
      id: "known-issues",
      heading: `${latestPatch.version} Known Issues & Fix Guides`,
      body: issueList,
    },
    {
      id: "retest-spots",
      heading: "Re-Test These After Geometry Patches",
      body:
        latestPatch.retestNotes?.join(" ") ??
        "Wall-clip and reflectivity spots may change between builds. Re-test favorite database entries after major patches.",
    },
    {
      id: "all-fix-guides",
      heading: "All Patch-Week Fix Guides",
      body: fixGuideCatalog
        .map((g) => `${g.title} (/guides/${g.slug}) — ${g.category}, search priority ${g.searchValue}/5.`)
        .join(" "),
    },
    {
      id: "when-to-wait",
      heading: "When to Wait vs Fix Locally",
      body: "Steam server outages and DDoS spikes happen — check Steam Status before reinstalling. Workshop map black voids are usually missing subscriptions, not patch bugs. Spot guides filmed before v1.2.0 may show wall-clips that no longer work — that is intentional balance, not your install breaking. Report new post-patch bugs in Steam Discussions with your build number; we add fix guides when community consensus forms.",
    },
  ],
};
