import type { Guide } from "./types";

export const updatesGuide: Guide = {
  slug: "updates",
  title: "Meccha Chameleon Updates & Patch Notes — Version History",
  category: "Mechanics",
  readTime: "10 min",
  excerpt:
    "Meccha Chameleon patch history: v1.8.0 emotes, v2.3.0 hunter ammo, v1.7.0 reporting, v1.2.0 wall-clip fixes, map additions, and what to re-test after each update.",
  seoKeywords: [
    "update",
    "patch notes",
    "version",
    "v1.8.0",
    "v2.3.0",
    "changelog",
  ],
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News",
      url: "https://store.steampowered.com/news/app/4704690",
    },
    {
      name: "mecchachameleon.net — patch summaries",
      url: "https://mecchachameleon.net/",
    },
    {
      name: "Wikipedia — Meccha Chameleon",
      url: "https://en.wikipedia.org/wiki/Meccha_Chameleon",
    },
  ],
  content: [
    {
      id: "why-updates-matter",
      heading: "Why Patch Notes Matter for Hiders",
      body: "MECCHA CHAMELEON meta is patch-sensitive. Wall-clip spots from launch-week YouTube clips may fail after geometry fixes. Matchmaking only works between players on the same version — friends who skip updates cannot join your lobby. Re-test favorite hiding spots monthly and after every Steam download. This hub summarizes community-verified changes; always cross-check Steam News for exact build numbers before tournaments.",
    },
    {
      id: "v280",
      heading: "v2.8.0 — Death Burger Map & Chat Safety",
      body: "Steam News (July 17, 2026): new official map Death Burger; inappropriate and stream-prohibited words blocked in nameplates and text chat; spectator UI hide restored with Control+Shift+H; Paint Mode mod download screen button lockup fixed. Japanese Twitter and 4gamer/Game*Spark coverage describe clown mascots, eyeball burgers, and a fried-chicken merry-go-round — early camouflage meta focuses on color-boundary paints and prop mimics, not fixed coordinates. Post-update troubleshooting: Problems After v2.8.0 fix guide.",
    },
    {
      id: "v270",
      heading: "v2.7.0 — Egypt Map & Random Lottery Toggles",
      body: "Steam News (July 12, 2026): new official map Egypt; per-map ON/OFF toggles for random lottery with collaboration maps default OFF; random elements added to Penguin Hotel; HIKAKIN Museum wall-stuck collision fixed. Community focus this week centers on Egypt pillar/alcove learning, enabling HIKAKIN in lottery settings, and re-scouting Hotel props each lobby. Post-update troubleshooting: Problems After v2.7.0 fix guide. IGN patch hub and FandomWire/consolepcgaming summarize the same notes.",
    },
    {
      id: "v260",
      heading: "v2.6.0 — HIKAKIN Museum Collaboration",
      body: "Steam News + AUTOMATON (July 10–11, 2026): collaboration map HIKAKIN Museum with special gimmicks, HIKAKIN/SEIKIN photo walls, Misokin and ONICHA exhibits; controller support alpha (UI not supported); Japan/South Korea/East Asia region tags; clone collision fix when hidden; Hunter FOV 100→105. Japanese Twitter and YouTube coverage spiked around the HIKAKIN partnership — the mid-week collab teased after 15M sales. See Viral Success guide and HIKAKIN Museum map page.",
    },
    {
      id: "v251",
      heading: "v2.5.1 — Anti-Cheat Countermeasures",
      body: "Steam News fix2.5.1: countermeasures against excessive recommendation cheats and rapid-fire cheats; Osaka out-of-bounds fix. Pair with Cheaters & Fair Play guide when lobbies feel unfair after viral weeks.",
    },
    {
      id: "v250",
      heading: "v2.5.0 — Osaka Rework & Collaboration Map Tease",
      body: "consolepcgaming.com documents update 2.5.0: reworked Osaka official map, improved paint brush resolution, experimental color palette for upcoming controller support, 3D color picker stability fixes, and Gyakusan Chicken Race collision/paint sync fixes. The same post teased a collaboration map arriving mid-week — that shipped as HIKAKIN Museum in v2.6.0. Re-test Osaka signage and truck-bed spots after the rework. Post-update troubleshooting: Problems After v2.5.0 fix guide.",
    },
    {
      id: "v230",
      heading: "v2.3.0 — Hunter Ammo Limit",
      body: "Steam community threads complained about unlimited seeker spraying — hosts gained a lobby setting to cap hunter ammo. See Hunter Ammo Limit Guide for host menu path and recommended values for 6–10 player lobbies. Seekers must aim more deliberately; hiders in open Mansion ballrooms benefit when spam tagging ends.",
    },
    {
      id: "v180",
      heading: "v1.8.0 — 11 Emotes on Pose Wheel",
      body: "mecchachameleon.net and GameRant document 11 new emotes on the R-key pose wheel — social animations distinct from competitive freeze poses. Navigation: open pose wheel, browse emote ring, confirm selection before hunt. Whistle and forced taunt interact with audio meta — see Emotes & Pose Wheel guide. Do not confuse meme emote with flat wall pose in prep.",
    },
    {
      id: "v170",
      heading: "v1.7.0 — In-Game Reporting",
      body: "Community ESP frustration threads peaked near launch concurrent records. v1.7.0 added in-game player reporting when clients are updated — see Cheaters & Fair Play Guide for when to report vs leave lobby. Reporting does not replace private password rooms for learning nights.",
    },
    {
      id: "v140-maps",
      heading: "v1.4.0+ — Map Additions (Sugarland, Osaka, Indoor Country)",
      body: "Post-launch maps expanded beyond original six. Sugarland candy palette, Osaka alley signage, and Indoor Country prop-mimic barn zones each need separate color strategies — dedicated map guides on this wiki. Wikipedia and Steam news track official map roster; workshop maps are independent of version but require subscribe parity.",
    },
    {
      id: "v120",
      heading: "v1.2.0 — Wall-Clip & Reflectivity Adjustments",
      body: "Backrooms bike wall and office corner geometry merges reduced — legitimate chair stacks remain. Bathroom tile reflectivity increased on Mansion and adjacent zones — re-sample with metallic/roughness sliders. Our Sewer & Backrooms guide and beginner basics flag spots needing re-verification. Viral clips filmed pre-v1.2.0 may mislead.",
    },
    {
      id: "v110",
      heading: "v1.1.0 — Matchmaking & Version Parity",
      body: "Matchmaking requires same client version — outdated host or guest breaks private lobbies that looked fine on passwords. Fix: full game restart, Steam restart, verify files, create fresh room after download. Documented in Can't Join Lobby guide. In-progress games may not appear in public browser — empty list does not always mean dead multiplayer.",
    },
    {
      id: "v103",
      heading: "v1.0.3 — Ceiling Clipping Reductions",
      body: "mecchachameleon.net notes ceiling clipping reductions — Mansion and Sewer ceiling meta still exists but extreme geometry abuse targets were trimmed. Ceiling Pillar and Dark Ceiling Pipe database spots remain strong when sampled correctly; test lip visibility after patches.",
    },
    {
      id: "connectivity-patches",
      heading: "Stability Fixes — DX11, Auth, EULA",
      body: "Parallel to feature patches: Steam threads document DX12 instability fixed with -dx11 launch option, Epic Online Services auth token failures (Steam relink workflow), and EULA agreement blocks when one friend skipped terms. Lag & Blurry Screen guide and Authentication Token guide track these — not always numbered in headline patch notes but critical for new installs.",
    },
    {
      id: "wishlist",
      heading: "Not Yet Shipped — Community Wishlist",
      body: "Steam reviews and discussions repeat: texture brush, checkerboard copy, native invert Y, round-end hide gallery for all players, native controller support, body resize. Pattern & Texture Wishlist guide documents manual workarounds — not patch promises. Controller guide tracks Steam Input until native support ships.",
    },
    {
      id: "after-update",
      heading: "Checklist After Every Update",
      body: "Step one: Steam → Downloads → confirm game updated. Step two: restart game and Steam. Step three: recreate private room; re-invite friends. Step four: re-test three favorite database spots on current map. Step five: read Steam News for map or control changes. Step six: update workshop subscriptions if creators patched exploits. For patch-week fix guides (can't join, auth token, lag, workshop void), see our Patch Fixes Hub at /guides/patch-fixes and Problems After Update checklist at /guides/problems-after-update. Searching Meccha Chameleon update, Mecha Chameleon patch notes, or メッチャカメレオン アップデート should land on this page plus Steam News.",
    },
  ],
};
