import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterUpdateGuide: Guide = {
  slug: "problems-after-update",
  title: `Meccha Chameleon Not Working After Update — ${latestPatch.version} Fix Guide`,
  category: "Fix",
  readTime: "7 min",
  excerpt: `Game broke after ${latestPatch.version}? Step-by-step fixes for lobby join failures, workshop black screen, taunt bugs, and hiding spots that stopped working — in the order Steam players report success.`,
  seoKeywords: [
    "not working after update",
    "broken after patch",
    "update problems",
    "game won't start",
    "after update fix",
    latestPatch.version,
  ],
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "Steam Discussions — TAUNT IS NOT WORKING",
      url: "https://steamcommunity.com/app/4704690/discussions/",
    },
  ],
  content: [
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds — Do This Before Anything Else",
      body: `Released ${latestPatch.releasedAt}: ${latestPatch.headline}. Close the game fully (not minimized). Exit Steam and reopen it. Confirm Meccha Chameleon shows no pending download. Relaunch from the Steam library — not a desktop shortcut to an old build. Have every friend repeat these steps. One outdated player breaks private lobbies even when passwords and server names are correct.`,
    },
    {
      id: "lobby-broken",
      heading: "Multiplayer Broken After Patch",
      body: "Symptoms: version mismatch, black screen on join, friend cannot see your room, infinite loading. Fix order: (1) everyone on same build, (2) host creates a new room with a fresh invite, (3) test Mansion before workshop, (4) verify game files. Full walkthrough: Can't Join Lobby guide. EULA blocks also appear after some updates — both players must accept current terms.",
    },
    {
      id: "auth-token",
      heading: "Login / Authentication Token Errors",
      body: "Epic Online Services token failures spike on patch day when Steam and EOS desync. Fix: Steam → Settings → Account → verify login, restart Steam, relaunch game. If persists: see Authentication Token guide for Steam relink workflow. Do not share account credentials in Discord fix threads.",
    },
    {
      id: "performance",
      heading: "Blurry Screen or Lag After Update",
      body: "Graphics resets sometimes follow patches. Check in-game resolution matches monitor native. Try -dx11 launch option if DX12 stutters. Lower post-processing if blurry. Full settings path: Lag & Blurry Screen guide. Thermal throttling on laptops mimics patch regressions — test after cooling down.",
    },
    {
      id: "workshop-void",
      heading: "Workshop Map Black Void / Failed to Load",
      body: "After updates, workshop file paths can desync. Every player must re-subscribe on Steam Workshop, restart the game, and wait for download completion before the host selects the map. Test with an official map first to isolate workshop vs multiplayer issues. Host should pick a map everyone has locally — Seeker Black Void threads often trace to one missing subscription.",
    },
    {
      id: "taunt-broken",
      heading: "Taunt / Whistle Not Working",
      body: "Steam thread TAUNT IS NOT WORKING (June 2026) reports emotes failing when bound incorrectly or when round rules disable forced taunt. Check Esc → Settings → Controls for whistle binding. Confirm lobby host did not disable taunt in custom rules. v1.8.0 added 11 emotes on the pose wheel — distinguish social emotes from competitive freeze poses. Rebind and test in a private Mansion room before public queue.",
    },
    {
      id: "spots-patched",
      heading: "Hiding Spots Stopped Working",
      body: "Not every post-update problem is a bug. v1.2.0 reduced wall-clip geometry on Backrooms and increased bathroom reflectivity — viral clip spots may fail legitimately. Re-sample colors after reflectivity changes. Check Updates & Patch Notes for geometry notes. Re-test database spots on current build; vote Needs Update on meccha.wiki if a curated spot no longer works.",
    },
    {
      id: "still-broken",
      heading: "Still Broken? Escalation Order",
      body: "Verify game files → change host to wired Ethernet player → disable VPN → match Steam download regions → reinstall only after all friends confirmed same version. Search Steam Discussions with exact error text and build number. Link this guide in Discord when helping friends — patch-week traffic spikes when everyone skips the version-mismatch step.",
    },
  ],
};
