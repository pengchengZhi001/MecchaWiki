/** Patch-week fix registry — update `latestPatch` when Steam ships a new build. */

export const PATCH_FIX_WINDOW_DAYS = 14;

export type PatchIssue = {
  symptom: string;
  searchTerms: string[];
  fixGuideSlug: string;
  priority: "high" | "medium";
};

export type GamePatch = {
  version: string;
  releasedAt: string;
  headline: string;
  steamNewsUrl: string;
  knownIssues: PatchIssue[];
  /** Map or spot slugs players should re-test after this patch */
  retestNotes?: string[];
};

export type FixGuideEntry = {
  slug: string;
  title: string;
  category: string;
  searchValue: 4 | 5;
};

/** Standalone fix guides — linked from patch hub and homepage alert */
export const fixGuideCatalog: FixGuideEntry[] = [
  {
    slug: "fix-cant-join-lobby",
    title: "Can't Join Lobby / Can't Connect to Friends",
    category: "Multiplayer",
    searchValue: 5,
  },
  {
    slug: "fix-authentication-token",
    title: "Invalid Authentication Token / Can't Login",
    category: "Auth",
    searchValue: 5,
  },
  {
    slug: "fix-lag-blurry-screen",
    title: "Lag / Blurry Screen / Low FPS",
    category: "Performance",
    searchValue: 4,
  },
  {
    slug: "problems-after-update",
    title: "Problems After Update — Quick Fix Checklist",
    category: "Patch",
    searchValue: 5,
  },
];

/**
 * Current patch — update via `npm run scaffold:patch vX.X.X YYYY-MM-DD`.
 * Banner shows on homepage when releasedAt is within PATCH_FIX_WINDOW_DAYS.
 */
export const latestPatch: GamePatch = {
  version: "v2.4.0",
  releasedAt: "2026-06-28",
  headline: "Stability hotfix — lobby sync, workshop load, and spot geometry tweaks",
  steamNewsUrl: "https://store.steampowered.com/news/app/4704690",
  knownIssues: [
    {
      symptom: "Can't join friends after updating",
      searchTerms: ["can't join lobby", "version mismatch", "black screen join"],
      fixGuideSlug: "fix-cant-join-lobby",
      priority: "high",
    },
    {
      symptom: "Invalid authentication token on launch",
      searchTerms: ["authentication token", "can't login", "epic online services"],
      fixGuideSlug: "fix-authentication-token",
      priority: "high",
    },
    {
      symptom: "Blurry screen or sudden FPS drop after patch",
      searchTerms: ["blurry screen", "lag", "low fps", "dx12"],
      fixGuideSlug: "fix-lag-blurry-screen",
      priority: "high",
    },
    {
      symptom: "Favorite hiding spot stopped working",
      searchTerms: ["spot patched", "wall clip", "noclip fixed"],
      fixGuideSlug: "updates",
      priority: "medium",
    },
    {
      symptom: "Workshop map black void / failed to load",
      searchTerms: ["workshop load fail", "black void", "map not loading"],
      fixGuideSlug: "problems-after-update",
      priority: "medium",
    },
    {
      symptom: "Taunt or whistle not working in match",
      searchTerms: ["taunt not working", "whistle broken"],
      fixGuideSlug: "problems-after-update",
      priority: "medium",
    },
  ],
  retestNotes: [
    "Backrooms bike wall and office corner clips — geometry adjusted in recent hotfixes",
    "Mansion bathroom tile reflectivity — re-sample with metallic slider",
    "Workshop maps with recent creator patches — check Steam comments before hosting",
  ],
};

export function daysSince(dateIso: string): number {
  const then = new Date(dateIso);
  const now = new Date();
  return Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
}

export function isWithinPatchWindow(patch: GamePatch = latestPatch): boolean {
  return daysSince(patch.releasedAt) <= PATCH_FIX_WINDOW_DAYS;
}

export function getHighPriorityIssues(patch: GamePatch = latestPatch): PatchIssue[] {
  return patch.knownIssues.filter((i) => i.priority === "high");
}

export function getFixGuideHref(slug: string): string {
  return `/guides/${slug}`;
}
