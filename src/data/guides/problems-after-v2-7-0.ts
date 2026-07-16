import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV270Guide: Guide = {
  slug: "problems-after-v2-7-0",
  title: "Meccha Chameleon v2.7.0 Update Problems — Fix Guide (July 2026)",
  category: "Fix",
  readTime: "10 min",
  excerpt:
    "Game broke after update 2.7.0? Fix lobby join failures after Egypt ships, random-map lottery confusion, Penguin Hotel randomization breaking old spots, HIKAKIN Museum wall-stuck reports, and collaboration maps missing from random queues.",
  seoKeywords: [
    "v2.7.0",
    "2.7.0 update",
    "Egypt map",
    "HIKAKIN Museum",
    "random map toggle",
    "Penguin Hotel random",
    "not working after update",
    "July 2026 patch",
  ],
  heroImage: {
    src: "/images/maps/egypt.jpg",
    alt: "MECCHA CHAMELEON Egypt map — v2.7.0 newest official stage",
    caption: "Update 2.7.0 (July 12, 2026) adds Egypt, per-map random lottery toggles, Penguin Hotel randomization, and a HIKAKIN Museum collision fix.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 2.7.0",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "IGN — Patch Notes July 12, 2026",
      url: "https://www.ign.com/wikis/meccha-chameleon/Meccha_Chameleon_Patch_Notes_July_12,_2026",
    },
    {
      name: "FandomWire — 2.7.0 patch notes",
      url: "https://fandomwire.com/meccha-chameleon-update-2-7-0-patch-notes/",
    },
    {
      name: "consolepcgaming.com — Egypt & random map options",
      url: "https://consolepcgaming.com/meccha-chameleon-adds-egypt-and-more-random-map-options/",
    },
    {
      name: "AUTOMATON — HIKAKIN Museum (v2.6.0)",
      url: "https://automaton-media.com/articles/newsjp/20260711-454477/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What v2.7.0 Changed (Official Summary)",
      body: "Steam News update 2.7.0 (July 12, 2026): new official map Egypt; when playing random maps you can toggle each map ON/OFF in the lottery (collaboration maps default OFF); Penguin Hotel gained random layout elements; HIKAKIN Museum wall-stuck collision fixed. Two days earlier, v2.6.0 shipped HIKAKIN Museum collab, controller alpha, East Asia region tags, clone collision fix, and Hunter FOV 100→105. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 2.7.0",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm 2.7.0 before friend night — mixing 2.6.x and 2.7.0 breaks private lobbies. Host creates a brand-new room after sync. Generic checklist also lives at Problems After Update guide.",
    },
    {
      id: "collab-missing",
      heading: "HIKAKIN Museum Missing From Random Queues (Expected)",
      body: "v2.7.0 sets collaboration maps OFF by default in the random lottery. Open Settings → map lottery / map preferences and enable HIKAKIN Museum if your group wants it. Friends who never toggle still only see standard official maps — this is intentional, not a failed download. Dedicated map pick still lists the collab map after the 2.6.0 content is installed.",
    },
    {
      id: "penguin-random",
      heading: "Penguin Hotel Spots Feel Broken (Random Elements)",
      body: "Steam explicitly added random elements to Penguin Hotel in 2.7.0 — furniture and prop placement can shift between lobbies, same direction as Mansion randomization from earlier patches. Ice sculpture, plush, and ballroom database spots remain good starting ideas but must be re-scouted during prep. Do not verify game files solely because a viral Hotel clip fails — re-test in a private lobby first. Penguin Hotel guide notes the new randomization.",
    },
    {
      id: "egypt-learning",
      heading: "Egypt Map — Early Meta, Spot Guides Still Settling",
      body: "Egypt is brand new; IGN's All Maps wiki may lag Steam News by days. Early community focus: pillar shadows, sarcophagus alcoves, hieroglyph walls, and prop clusters — open sand floors lose. Treat database Egypt entries as starting points and screenshot your own lobby. Egypt map page and /hidden-spots?map=egypt track curated early spots.",
    },
    {
      id: "hikakin-stuck",
      heading: "Still Getting Stuck in HIKAKIN Museum Walls?",
      body: "2.7.0 fixed players getting stuck too deeply into walls on HIKAKIN Museum. If you still clip after updating, verify files and avoid intentional deep wall clips — use photo-wall and exhibit surface blends instead. Pre-2.7.0 clips that bury into geometry may no longer work. AUTOMATON documents Misokin / ONICHA / SEIKIN exhibit props as legitimate hide zones.",
    },
    {
      id: "cant-join",
      heading: "Can't Join Friends After 2.7.0",
      body: "Most join failures remain version mismatch, stale invites, or EULA — not Egypt-specific. Fix order: (1) everyone on 2.7.0, (2) EULA accepted, (3) host new room, (4) verify files if one PC stuck. Can't Join Lobby and Steam Invite guides cover the full path.",
    },
    {
      id: "controller-alpha",
      heading: "Controller Feels Half-Broken (Still Alpha From 2.6.0)",
      body: "Controller support shipped as alpha in 2.6.0 — UI operation is not supported. Incomplete menus are expected, not a 2.7.0 regression. Prefer keyboard/mouse for lobbies until a later patch. See Controller Support guide for current limits.",
    },
    {
      id: "related",
      heading: "Related Fix Guides",
      body: "Problems After Update (generic patch checklist), Problems After v2.5.0 (Osaka rework / paint tools), Can't Join Lobby, Workshop Map Loading, Lag & Blurry Screen, Patch Fixes hub on the homepage banner while within the 14-day patch window.",
    },
  ],
};
