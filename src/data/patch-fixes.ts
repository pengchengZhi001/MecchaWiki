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
  {
    slug: "fix-game-wont-launch",
    title: "Won't Launch / Crashes on Startup",
    category: "Launch",
    searchValue: 5,
  },
  {
    slug: "fix-steam-invite-not-working",
    title: "Steam Invite Not Working",
    category: "Multiplayer",
    searchValue: 4,
  },
  {
    slug: "fix-workshop-map-loading",
    title: "Workshop Map Won't Load / Black Void",
    category: "Workshop",
    searchValue: 4,
  },
  {
    slug: "fix-eula-cant-join",
    title: "EULA Blocks Friend Lobby",
    category: "Multiplayer",
    searchValue: 4,
  },
  {
    slug: "problems-after-v2-5-0",
    title: "v2.5.0 Update Problems — Full Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
];

/**
 * Current patch — update via `npm run scaffold:patch vX.X.X YYYY-MM-DD`.
 * Banner shows on homepage when releasedAt is within PATCH_FIX_WINDOW_DAYS.
 */
export const latestPatch: GamePatch = {
  version: "v2.5.0",
  releasedAt: "2026-07-04",
  headline: "Osaka map rework, brush resolution improvements, and collaboration map tease",
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
      fixGuideSlug: "fix-workshop-map-loading",
      priority: "high",
    },
    {
      symptom: "Game won't launch or crashes on startup",
      searchTerms: ["won't launch", "crash on startup", "not starting"],
      fixGuideSlug: "fix-game-wont-launch",
      priority: "high",
    },
    {
      symptom: "Steam invite not working / black screen on join",
      searchTerms: ["invite not working", "in-game invite", "join failed"],
      fixGuideSlug: "fix-steam-invite-not-working",
      priority: "medium",
    },
    {
      symptom: "Friend can't join — EULA or terms not accepted",
      searchTerms: ["EULA", "terms", "agreement", "can't join friends"],
      fixGuideSlug: "fix-eula-cant-join",
      priority: "high",
    },
    {
      symptom: "Post-2.5.0 Osaka spots or paint tools feel broken",
      searchTerms: ["Osaka rework", "v2.5.0", "paint brush", "color picker"],
      fixGuideSlug: "problems-after-v2-5-0",
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
    "Osaka signage and truck-bed spots — reworked geometry in v2.5.0 per consolepcgaming.com",
    "Mansion bathroom tile reflectivity — re-sample with metallic slider after brush resolution changes",
    "Workshop maps with recent creator patches — check Steam comments before hosting post-update",
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
