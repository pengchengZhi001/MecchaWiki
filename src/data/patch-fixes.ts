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
  {
    slug: "problems-after-v3-0-0",
    title: "v3.0.0 Update Problems — Greece / Glow Paint Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
  {
    slug: "problems-after-v3-5-0",
    title: "v3.4–3.5 Update Problems — Exit 8 / Friend Search / Voice Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
  {
    slug: "problems-after-v3-3-0",
    title: "v3.1–3.3 Update Problems — Banban / Malware / Discord Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
  {
    slug: "problems-after-v2-8-0",
    title: "v2.8.0 Update Problems — Death Burger / Chat Filter Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
  {
    slug: "problems-after-v2-7-0",
    title: "v2.7.0 Update Problems — Egypt / HIKAKIN Fix Guide",
    category: "Patch",
    searchValue: 5,
  },
];

/**
 * Current patch — update via `npm run scaffold:patch vX.X.X YYYY-MM-DD`.
 * Banner shows on homepage when releasedAt is within PATCH_FIX_WINDOW_DAYS.
 */
export const latestPatch: GamePatch = {
  version: "v3.5.1",
  releasedAt: "2026-08-02",
  headline:
    "Exit 8 collab + friend-server search (3.5.0), Friend List restored (3.5.1), hunter body types (3.4.0), voice chat rework",
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
      symptom: "Friend List missing from options after 3.5.0",
      searchTerms: ["Friend List gone", "no friend list", "options FAQ removed", "3.5.1"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "high",
    },
    {
      symptom: "Can't find friends' servers / invite fails",
      searchTerms: ["friend server search", "find friend server", "invite not working"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "high",
    },
    {
      symptom: "Proximity voice chat not working / silent lobby",
      searchTerms: ["voice chat disabled", "proximity voice", "mic not working", "3.3.2"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "high",
    },
    {
      symptom: "Microphone starts muted every match",
      searchTerms: ["mic muted by default", "unmute microphone", "3.5.0"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "medium",
    },
    {
      symptom: "Exit 8 missing from random lottery",
      searchTerms: ["Exit 8 missing", "8番出口", "collaboration map off", "random map toggle"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "medium",
    },
    {
      symptom: "Exit 8 / Banban hiding spots feel unknown / all fail",
      searchTerms: ["Exit 8 spots", "8番出口 hide", "Banban spots", "new map hide"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "medium",
    },
    {
      symptom: "Hunter body type wrong in FPS / Cube Plump seeker",
      searchTerms: ["hunter body type", "FPS default body", "Plump hunter", "3.4.0"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "medium",
    },
    {
      symptom: "Controller zoom not working / Paint Mode cursor lag",
      searchTerms: ["controller zoom", "paint mode 30 fps", "brush zoom", "3.5.0"],
      fixGuideSlug: "problems-after-v3-5-0",
      priority: "medium",
    },
    {
      symptom: "Worried about Workshop malware / RAT rumors",
      searchTerms: ["workshop malware", "RAT", "virus", "Laser Tag Neon", "game safety"],
      fixGuideSlug: "problems-after-v3-3-0",
      priority: "high",
    },
    {
      symptom: "Discord hack scam links / fake fix instructions",
      searchTerms: ["Discord hack", "RAT fix steps", "official Discord", "scam link"],
      fixGuideSlug: "problems-after-v3-3-0",
      priority: "high",
    },
    {
      symptom: "Eyedropper button missing from color palette",
      searchTerms: ["eyedropper removed", "no eyedropper button", "color palette", "3.2.0"],
      fixGuideSlug: "problems-after-v3-3-0",
      priority: "high",
    },
    {
      symptom: "Blurry screen or sudden FPS drop after patch",
      searchTerms: ["blurry screen", "lag", "low fps", "dx12"],
      fixGuideSlug: "fix-lag-blurry-screen",
      priority: "high",
    },
    {
      symptom: "Garten of Banban missing from random lottery",
      searchTerms: ["Banban missing", "collaboration map off", "kindergarten map", "random map toggle"],
      fixGuideSlug: "problems-after-v3-3-0",
      priority: "medium",
    },
    {
      symptom: "Glow / emissive paint too bright or useless",
      searchTerms: ["glow paint", "emissive", "発光ペイント", "glow in the dark"],
      fixGuideSlug: "problems-after-v3-0-0",
      priority: "medium",
    },
    {
      symptom: "Workshop map black void / failed to load after patch",
      searchTerms: ["workshop load fail", "black void", "map not loading", "GeForce Now"],
      fixGuideSlug: "fix-workshop-map-loading",
      priority: "high",
    },
    {
      symptom: "Nameplate or chat message blocked after update",
      searchTerms: ["name blocked", "chat filter", "word filter", "can't type"],
      fixGuideSlug: "problems-after-v2-8-0",
      priority: "medium",
    },
    {
      symptom: "HIKAKIN Museum missing from random map lottery",
      searchTerms: ["collaboration map off", "HIKAKIN missing", "random map toggle"],
      fixGuideSlug: "problems-after-v2-7-0",
      priority: "medium",
    },
    {
      symptom: "Penguin Hotel hiding spots feel randomized / broken",
      searchTerms: ["Penguin Hotel random", "furniture moved", "Hotel spot gone"],
      fixGuideSlug: "problems-after-v2-7-0",
      priority: "medium",
    },
    {
      symptom: "Favorite hiding spot stopped working",
      searchTerms: ["spot patched", "wall clip", "noclip fixed"],
      fixGuideSlug: "updates",
      priority: "medium",
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
      symptom: "Death Burger or chat-filter issues from 2.8.0",
      searchTerms: ["Death Burger", "v2.8.0", "spectator UI", "Paint Mode"],
      fixGuideSlug: "problems-after-v2-8-0",
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
    "Exit 8 tile / anomaly / signage spots — brand-new v3.5.0 collab; all positions experimental",
    "Garten of Banban mural, signage, door-frame spots after early kindergarten meta",
    "Hunter Cube/Plump (3.4.0) and FPS default body (3.5.0) change seeker silhouettes",
    "Mic muted by default (3.5.0); proximity voice still disabled pending rework (3.3.2)",
    "Only subscribe to trusted Workshop maps after the malware incident — prefer established uploaders",
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
