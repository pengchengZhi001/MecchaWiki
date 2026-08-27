import type { Guide } from "./types";

export const updatesGuide: Guide = {
  slug: "updates",
  title: "Meccha Chameleon Updates & Patch Notes — Version History",
  category: "Mechanics",
  readTime: "10 min",
  excerpt:
    "Meccha Chameleon patch history: v3.9.1 emote paging, v3.9.0 Shopping Mall, v3.8.0 Mo Eeyo / BAN, v3.7.x jump and Deep Sea OOB, v3.6 Deep Sea, and what to re-test after each update.",
  seoKeywords: [
    "update",
    "patch notes",
    "version",
    "v3.9.1",
    "v3.9.0",
    "Shopping Mall",
    "ショッピングモール",
    "v3.8.0",
    "Mo Eeyo",
    "もうええよ",
    "v3.7.2",
    "v3.6.1",
    "v3.6.0",
    "Deep Sea",
    "深海",
    "v3.5.1",
    "v3.5.0",
    "v3.4.0",
    "Exit 8",
    "8番出口",
    "friend server search",
    "v3.3.0",
    "Garten of Banban",
    "workshop malware",
    "Greece",
    "glow paint",
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
      id: "v391",
      heading: "v3.9.1 — Emote Reverse Paging & Ceiling-Cling Gap",
      body: "Steam News 3.9.1 (August 16, 2026): emote selection can page in reverse; fixed a different emote applying when none was chosen; fixed a visible gap when clinging to the ceiling with certain emotes. Pair with the first Emote Contest poses from 3.7.0. Post-update troubleshooting: Problems After v3.7–3.9.",
    },
    {
      id: "v390",
      heading: "v3.9.0 — Shopping Mall Map (15th Official) & Player IDs",
      body: "Steam News update3.9.0 (August 16, 2026): new official map Shopping Mall (ショッピングモール); voice chat no longer momentarily turns on; Player Management tab shows a player ID — Dengeki: use that ID when user information is required. LEMORION / Denfaminicogamer: the next official map addition will be the last excluding collaborations. Official still shows a bright multi-level atrium with escalator, planter hide, and handbag shelf. Post-update troubleshooting: Problems After v3.7–3.9.",
    },
    {
      id: "v380",
      heading: "v3.8.0 — Mo Eeyo Skip Votes & Host BAN",
      body: "Steam News update 3.8.0 (August 14, 2026): Mo Eeyo (もうええよ / Enough Already) force-skips hiding time and answer-reveal by a unanimous vote; host BAN list resets when the server restarts. Fixes: hidden objects still had collision, camera jerk near walls while hiding, answer-reveal invisibility, jump height too high, TPS hunter aim too high, green mic indicator while speaking (not a proximity-voice restore), User Management controller navigation. Denfaminicogamer covers もうええよ + BAN the same day. Post-update troubleshooting: Problems After v3.7–3.9.",
    },
    {
      id: "v373",
      heading: "v3.7.3 — Controller Paint Speed Setting",
      body: "Steam News fix3.7.3 (August 12, 2026): rare hunter-not-moving-to-map; numeric quick button could go below minimum; glitched player names/displays; controller painting X-axis faster than Y; new movement speed settings for controller painting. Confirm the in-game setting name.",
    },
    {
      id: "v372",
      heading: "v3.7.2 — Deep Sea Out-of-Bounds & Early Match End (Steam Title Typo fix7.3.2)",
      body: "Steam News titled this fix7.3.2 (digits swapped). Real version 3.7.2 (August 11, 2026): character movement speed; players could exit the Deep Sea map (OOB closed); games could end while a Hunter was still present. consolepcgaming repeats the mistitled headline — use 3.7.2 when checking your client.",
    },
    {
      id: "v371",
      heading: "v3.7.1 — Mod-Map Hunter Move & Jump Height",
      body: "Steam News fix3.7.1 (August 10, 2026): Basic Mode hunter would not move onto certain Mod maps; jump height adjusted (direction unspecified — 3.8.0 later says it was too high); part of the UI adjusted.",
    },
    {
      id: "v370",
      heading: "v3.7.0 — First Emote Contest Winners",
      body: "Steam News titled \"1st Emote Contest Results Announcement!\" without a version number (August 9, 2026); LEMORION X confirms 3.7.0. Five community #mecchaemote poses added — no official per-pose names. Survival freeze still wins prep. See Emotes & Pose Wheel guide.",
    },
    {
      id: "v361",
      heading: "v3.6.1 — Crowd FPS Fix & Chat Filter Softening",
      body: "Steam News fix3.6.1 (August 8, 2026): improved character behavior and significantly reduced performance drops caused by high player counts; fixed blocked words that were inadvertently filtering common words after 3.6.0's expanded profanity list. Emote Contest results were scheduled the next day. Post-update troubleshooting: Problems After v3.6 fix guide.",
    },
    {
      id: "v360",
      heading: "v3.6.0 — Deep Sea Map & Settings Persist",
      body: "Steam News update 3.6.0 (August 7, 2026): new official map Deep Sea (深海); game settings now persist after restart; number input buttons; additional text NG words; feature to reset Eeyan / ええやん (Likes); reduced future update file size. Denfaminicogamer and Game*Spark describe tropical fish, jellyfish, coral, giant clams, seaweed, shipwreck debris, and a unicorn statue — early hide meta favors reef clutter and dual-tone fauna paints over open blue water. Post-update troubleshooting: Problems After v3.6.",
    },
    {
      id: "v351",
      heading: "v3.5.1 — Friend List Restored & Spectator Sensitivity",
      body: "Steam News fix3.5.1 (August 2, 2026): Friend List re-added after 3.5.0 removed it from options; online users prioritized at the top; camera sensitivity settings now apply in Spectator Mode; color palette adjusted. Post-update troubleshooting for the whole early-August wave: Problems After v3.4–3.5 fix guide.",
    },
    {
      id: "v350",
      heading: "v3.5.0 — Exit 8 Collab Map & Friend Server Search",
      body: "Steam News update 3.5.0 (August 1, 2026): official collab map Exit 8 (The Exit 8 / 8番出口); friend-server search; color palette UI tweak; FAQ and Friend List removed from options (Friend List returns in 3.5.1); server-name overflow fix; motion blur setting fix; FPS hunter body unified to default; controller zoom fix; UI Back button collision; microphone muted by default. Famitsu / Game*Spark describe familiar underground corridors plus chaotic anomaly-like zones and a looping layout — third official collab after HIKAKIN and Banban. JP social notes hiding feels hard because players already know the corridor silhouette. Post-update troubleshooting: Problems After v3.4–3.5.",
    },
    {
      id: "v340",
      heading: "v3.4.0 — Hunter Body Types & Smoother Paint Mode",
      body: "Steam News update 3.4.0 (July 31, 2026): character types applied to Hunters (Cube / Plump usable while seeking); Voice Input ON/OFF label fix; direct mouse support for console color palette; Paint Mode cursor unlocked from 30 fps so brush size and right-click zoom feel smooth. Game*Spark highlights seeker body choice as the headline change before Exit 8 weekend.",
    },
    {
      id: "v332",
      heading: "v3.3.2 — Server Reset Fix & Voice Chat Rework Pause",
      body: "Steam News fix3.3.2 (July 29, 2026): server names/passwords no longer reset during specific actions; Plump belly collision added; controller settings UI adjusted; 3D eyedropper performance improved; proximity voice chat temporarily disabled while voice is reworked. Expect silent lobbies until the rework ships — not a broken headset.",
    },
    {
      id: "v330",
      heading: "v3.3.0 — Plump Body Type",
      body: "Steam News (July 26, 2026): new character body type Plump. Silhouette and prop-mimic outlines change — re-check wall-flat and cluster hides after switching body types. Ships the same day as Discord restoration news. A later same-week Steam post also lists Performance Mode and 3D eyedropper / graphics-settings saves under the 3.3.0 label. Post-update troubleshooting for the late-July wave: Problems After v3.1–3.3 fix guide.",
    },
    {
      id: "v320",
      heading: "v3.2.0 — 12 Emotes, Eyedropper UI Change & Safety Note",
      body: "Steam News (July 26, 2026): 12 new emotes; eyedropper button removed from the color palette (Spacebar / 3D eyedropper sampling remain — confirm binds); safety note that malware execution from mod maps was already blocked in the previous version, confirmed with Steam Support. Pair with Emotes & Pose Wheel guide.",
    },
    {
      id: "v310",
      heading: "v3.1.0 — Garten of Banban + Workshop Security + Controller",
      body: "Steam News (July 25, 2026): official collab map Garten of Banban (Banban's Kindergarten per JP press); non-UI operations on gamepad; Medium shadow quality; controller paint FPS brush-speed fix; GPU performance; 3D eyedropper sampling-position fix; security patch for MOD maps. Same day community coverage of Workshop malware maps and a temporary official Discord breach — game itself remains safe per Steam clarifications. Game*Spark / Denfaminicogamer / 4gamer cover the kindergarten murals and signage. Post-update troubleshooting: Problems After v3.1–3.3.",
    },
    {
      id: "v300",
      heading: "v3.0.0 — Greece Map (11th Official)",
      body: "Steam News (July 20, 2026): new official map Greece. Denfaminicogamer, 4gamer, and Game*Spark describe Santorini-inspired blue-and-white buildings, sunset lighting, and a compact globe-shaped layout well-suited to v2.9.0 glow paint. Social threads (udn Game and others) compare the central circular pit to Overwatch Ilios — meme traffic, not verified hide meta. Changelog also announced EOS maintenance on July 21 (now completed). Post-update troubleshooting: Problems After v3.0.0 fix guide.",
    },
    {
      id: "v290",
      heading: "v2.9.0 — Glow / Emissive Paint",
      body: "Steam News (July 19, 2026): glow-in-the-dark paint is available. Denfaminicogamer: adjust the Emissive value in Paint Mode; partial-body glow works with normal paint. Game*Spark frames intent as mimicking glowing objects to deceive hunters. Also: slight paint performance improvement; HIKAKIN Museum exclusive taunt volume adjusted. No new maps in this build — map count stayed at 10 until Greece the next day.",
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
