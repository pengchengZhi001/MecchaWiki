import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV410Guide: Guide = {
  slug: "problems-after-v4-1-0",
  title:
    "Meccha Chameleon v4.0–4.1 Update Problems — Kyoto / Art Museum / Join Code / Petit Fix Guide",
  category: "Fix",
  readTime: "11 min",
  excerpt:
    "Broke after late-August 2026 4.0–4.1.x? Fix 5-character join codes replacing the server browser, Petit Chameleon host toggle, Kyoto and Art Museum learning, Greece/Egypt reworks, mid-match crashes, ammo settings reset, and workshop re-downloads.",
  seoKeywords: [
    "v4.1.0",
    "v4.0.0",
    "Kyoto",
    "京都",
    "Art Museum",
    "美術館",
    "join code",
    "Petit Chameleon",
    "プチカメレオン",
    "server browser",
    "not working after update",
  ],
  heroImage: {
    src: "/images/maps/kyoto.jpg",
    alt: "MECCHA CHAMELEON Kyoto map — festival atrium with torii, maple, and glowing 大 stair",
    caption:
      "Update 4.1.0 adds Kyoto and Art Museum, replaces the server browser with join codes, and reworks Greece and Egypt. 4.0.0 adds host-gated Petit Chameleon (x0.5).",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — BIG UPDATE 4.1.0",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — 4.1.0 Kyoto / Art Museum / join codes",
      url: "https://consolepcgaming.com/meccha-chameleon-4-1-0-brings-2-new-maps-and-join-code-search/",
    },
    {
      name: "Denfaminicogamer — 京都 / 美術館",
      url: "https://news.denfaminicogamer.jp/news/2608283n",
    },
    {
      name: "consolepcgaming.com — update4.0.0 Petit Chameleon",
      url: "https://consolepcgaming.com/meccha-chameleons-update4-0-0-notes-add-petit-chameleon-and-three-fixes/",
    },
    {
      name: "Denfaminicogamer — プチカメレオン",
      url: "https://news.denfaminicogamer.jp/news/2608203d",
    },
    {
      name: "4gamer — Petit Chameleon host-gated",
      url: "https://www.4gamer.net/games/007/G100712/20260820044/",
    },
    {
      name: "consolepcgaming.com — fix4.0.1 hunter start / free camera",
      url: "https://consolepcgaming.com/meccha-chameleon-fix4-0-1-tweaks-hunter-starts-and-free-camera-positioning/",
    },
    {
      name: "consolepcgaming.com — Update 4.0.2 network usage",
      url: "https://consolepcgaming.com/meccha-chameleon-update-4-0-2-cuts-network-usage-by-approximately-50/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What Shipped August 20–28 (4.0.0 → 4.1.0)",
      body: "Steam News update4.0.0 (August 20, 2026): Petit Chameleon (プチカメレオン) at x0.5 size, host-gated; floating-off-ground fix; rare crouch-elimination miss; stuck locations fixed (no map named). Hotfix (August 22): Workshop / mod maps now update automatically — first launch re-downloads all mods. fix4.0.1 (August 24): hunters cannot crouch while waiting so TP at round start works; free-camera position shift mitigated. Update 4.0.2 (August 25): network usage cut by about 50%; controller operation-guide display tweak. Steam also asked crash-prone players to join a Discord (August 26, Japanese-only post). BIG UPDATE 4.1.0 (August 28): official maps Kyoto (京都) and Art Museum (美術館); Greece and Egypt reworked; legacy server browser replaced by 5-character alphanumeric join codes (verifiable in-game); in-progress public rooms hidden by default (toggle in options); server elapsed time on search; match ends if hunter count hits 0 while hunters wait; player-count 0 display fix; 1-second taunt cooldown; forced-taunt minimum 1s → 5s; painting network data −40%; max FPS cap 239 → 240; ammo settings no longer reset every match; possible mid-game crash fix; voice-toggle SFX; region tag required; stick paint speed vs framerate / upward bias; hider camera; options-menu FPS hitch. Denfaminicogamer: official maps will continue to update irregularly. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 4.1.x",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm matching 4.1.x — mixing 3.9.x and 4.1.x breaks joins. After 4.1.0 the old server-name browser is gone: the host reads the 5-character join code in-game and friends search that code (not the room title). Host creates a brand-new room after sync. If Workshop maps fail to load, wait out the first-launch re-download from the August 22 hotfix. Generic checklist: Problems After Update guide.",
    },
    {
      id: "join-codes",
      heading: "Join Codes Replaced the Server Browser",
      body: "Steam News 4.1.0: the legacy server browser is replaced by a 5-character alphanumeric join-code search; codes can also be verified in-game. Friends who still type a server name or look for a 6-digit lobby ID from older guides will miss the room. Share the code over Discord or Steam chat; confirm every client is on 4.1.0+. In-progress games are hidden from public search by default (toggle in options) so the list prefers rooms still waiting for hunters; elapsed time now shows on the search screen. Region tag is now required. If player count shows 0, update past 4.1.0. Steam invites remain flaky — prefer the in-game code. Full join walkthrough: Can't Join Lobby guide.",
    },
    {
      id: "kyoto-art-museum",
      heading: "Kyoto & Art Museum — Early Meta",
      body: "Official still (LEMORION X / Denfaminicogamer): Kyoto is a multi-level indoor plaza under a white lattice skylight — red torii, maple on a high balcony, bamboo, wagasa umbrellas, orange lanterns, a glowing 大 stair, escalator, and a lantern-grid wall. Early meta: maple / torii / bamboo dual-samples, skip open plaza tile and the 大 meme stair. Art Museum (美術館) has no dedicated still yet; do not confuse it with Workshop ART GALLERY (Popunia) or Workshop Art Museum. Museum hide analog (skypenguin.net / DualShockers): paint into canvases, prefer darker paintings and smaller frames, skip open gallery floors. Greece and Egypt were reworked in the same patch — re-scout old pillar, pit-rim, and alcove pins. Browse /maps/kyoto, /maps/art-museum, and /hidden-spots — treat every new pin as experimental.",
    },
    {
      id: "petit-chameleon",
      heading: "Petit Chameleon (x0.5) Is Host-Gated",
      body: "4.0.0 adds Petit Chameleon (プチカメレオン) at half size — the first shrinking body type after Cube (enlarge) and Plump. Steam News: it can only be used if the host allows it. 4gamer expects random public lobbies to leave it off because smaller hitboxes are harder to find. If you cannot select Petit, the host has not enabled the toggle (same pattern as the v2.3.0 ammo-limit option). Hitbox and paint-surface impact are still being verified in lobbies — do not assume old wall-flat poses still cover the silhouette. 4.0.0 also fixed floating above the ground, a rare crouch-elimination miss, and unnamed stuck locations (Shopping Mall cardboard-box hunter-stuck reports from 3.9.0 may or may not be included — changelog names no map).",
    },
    {
      id: "crashes-network-taunts",
      heading: "Crashes, Network, Taunts, Ammo & Hunter Start",
      body: "4.1.0 lists a possible mid-game crash fix; if you still crash, Steam's August 26 Japanese post asks for Discord reports (https://discord.gg/huyTHb2zk7) so LEMORION can reproduce — do not follow random Discord 'fix' links from the late-July malware scare. 4.0.2 cuts general network usage ~50%; 4.1.0 cuts painting network data 40%. Ammo settings no longer reset every match after 4.1.0. Taunts now have a 1-second cooldown and the forced-taunt minimum is 5 seconds (was 1). fix4.0.1: hunters cannot crouch while waiting so round-start TP works; free camera shifting your position is mitigated. Stick paint speed no longer scales with FPS; upward stick bias is fixed. If voice toggle feels silent, 4.1.0 adds an SFX when you change voice state.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Mid-August 3.7–3.9 Shopping Mall / Mo Eeyo / BAN: Problems After v3.7–3.9. Early-August Deep Sea / settings / crowd FPS: Problems After v3.6. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
