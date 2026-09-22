import type { Guide } from "./types";

export const problemsAfterV410Guide: Guide = {
  slug: "problems-after-v4-1-0",
  title:
    "Meccha Chameleon v4.0–4.1.1 Update Problems — Switch 2 / Voice / Join Code / Kyoto Fix Guide",
  category: "Fix",
  readTime: "12 min",
  excerpt:
    "Broke after 4.0–4.1.1? Fix Switch 2 ↔ PC cross-play, incoming voice muted by default, the temporary Switch 2 host cap of 10, 5-character join codes, Kyoto / Art Museum learning, and crashes still under investigation.",
  seoKeywords: [
    "v4.1.1",
    "v4.1.0",
    "Switch 2",
    "cross-play",
    "voice chat",
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
      "Update 4.1.1 adds voice-chat controls and a temporary Switch 2 host cap of 10. 4.1.0 added Kyoto, Art Museum, and join codes; Hotfix 4.1.0 enabled PC cross-play for the Switch 2 launch.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — Update 4.1.1",
      url: "https://store.steampowered.com/news/app/4704690/view/698776157349216280",
    },
    {
      name: "Nintendo Everything — 4.1.1 patch notes",
      url: "https://nintendoeverything.com/meccha-chameleon-4-1-1-update-out-now-patch-notes/",
    },
    {
      name: "consolepcgaming.com — 4.1.1 voice / Switch 2 cap",
      url: "https://consolepcgaming.com/meccha-chameleon-update-4-1-1-brings-voice-chat-controls-and-a-lower-switch-2-cap/",
    },
    {
      name: "Game*Spark — Switch 2 cross-play",
      url: "https://www.gamespark.jp/article/2026/09/10/172058.html",
    },
    {
      name: "Famitsu — Nintendo Direct 2026.9.9",
      url: "https://www.famitsu.com/article/202609/87346",
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
      name: "4gamer — 京都駅モチーフ / 世界の絵画",
      url: "https://www.4gamer.net/games/007/G100712/20260831021/",
    },
    {
      name: "GameWith — map list (updated 2026-09-04)",
      url: "https://gamewith.jp/gamedb/17059/articles/61446",
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
      heading: "What Shipped August 20 – September 16 (4.0.0 → 4.1.1)",
      body: "Steam News update4.0.0 (August 20, 2026): Petit Chameleon (プチカメレオン) at x0.5 size, host-gated; floating-off-ground fix; rare crouch-elimination miss; stuck locations fixed (no map named). Hotfix (August 22): Workshop / mod maps now update automatically — first launch re-downloads all mods. fix4.0.1 (August 24): hunters cannot crouch while waiting so TP at round start works; free-camera position shift mitigated. Update 4.0.2 (August 25): network usage cut by about 50%; controller operation-guide display tweak. Steam also asked crash-prone players to join a Discord (August 26, Japanese-only post). BIG UPDATE 4.1.0 (August 28): official maps Kyoto (京都) and Art Museum (美術館); Greece and Egypt reworked; legacy server browser replaced by 5-character alphanumeric join codes. Nintendo Direct 2026.9.9: Switch 2 version announced and live the same day with Steam PC cross-play (Famitsu / Game*Spark). Unnumbered Hotfix 4.1.0 on launch day added the cross-play option (consolepcgaming). Update 4.1.1 (September 16): disable-voice option, touch-screen paint, mic icon, incoming voice muted by default, Switch 2 hosted sessions temporarily 10 players (was 12), spectator / UI / cursor / player-limit fixes — crash still under investigation (Steam News / Nintendo Everything). Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 4.1.1",
      body: "Close Meccha Chameleon completely. Exit Steam (or close the Switch 2 software) and reopen. Confirm Downloads / eShop shows no pending bytes for App 4704690. Relaunch from the library. Have every friend confirm matching 4.1.1 — mixing 4.1.0 and 4.1.1, or PC vs Switch 2 on different patches, breaks joins. After 4.1.0 the old server-name browser is gone: the host reads the 5-character join code in-game and friends search that code (not the room title). Host creates a brand-new room after sync. Enable the cross-play option if a Switch 2 friend is joining a Steam lobby (Hotfix 4.1.0). If Workshop maps fail to load on PC, wait out the first-launch re-download from the August 22 hotfix — Switch 2 cannot use Workshop maps yet (Game*Spark: user maps later this year). Generic checklist: Problems After Update guide.",
    },
    {
      id: "switch2-crossplay",
      heading: "Switch 2, Cross-Play & the Temporary Host Cap of 10",
      body: "Switch 2 launched September 9, 2026 (Nintendo Direct 2026.9.9). Game*Spark quoting LEMORION: full Steam PC cross-play, mouse support, and lobbies up to 24 players. 4.1.1 then temporarily reduced Switch 2 hosted sessions from 12 to 10 — that cap applies when a Switch 2 console is the host, not when a PC hosts a mixed lobby. If a 12-player party cannot queue, have the Steam PC player host. Incoming voice is muted by default after 4.1.1 — unmute in audio settings before blaming cross-play. Workshop / MOD maps remain PC-only until the year-end MOD system (Steam Community: Workshop will be deprecated then). Original Nintendo Switch, PS5, and Xbox still cannot play. Game*Spark warns the Nintendo Store also lists a lookalike titled 変態カメレオン. Full platform notes: Platforms guide.",
    },
    {
      id: "voice-chat-411",
      heading: "Voice Chat After 4.1.1 — Muted Incoming, Optional Disable, Mic Icon",
      body: "4.1.1 adds an option to disable voice chat, a microphone icon when the game detects audio input, and changes incoming voice to muted by default (Steam News / Nintendo Everything / consolepcgaming). Silent lobbies after this patch are usually the new default, not a broken headset and not the old 3.3.2 proximity-voice pause. Unmute incoming audio in settings; disable voice entirely if public-lobby mic griefing is the problem (Public Lobby Guide). The mic icon is a tell that you are transmitting — check it before you talk over a hide. Touch-screen painting also shipped in 4.1.1 for Switch 2.",
    },
    {
      id: "join-codes",
      heading: "Join Codes Replaced the Server Browser",
      body: "Steam News 4.1.0: the legacy server browser is replaced by a 5-character alphanumeric join-code search; codes can also be verified in-game. Friends who still type a server name or look for a 6-digit lobby ID from older guides will miss the room. Share the code over Discord or Steam chat; confirm every client is on 4.1.0+. In-progress games are hidden from public search by default (toggle in options) so the list prefers rooms still waiting for hunters; elapsed time now shows on the search screen. Region tag is now required. If player count shows 0, update past 4.1.0. Steam invites remain flaky — prefer the in-game code. Full join walkthrough: Can't Join Lobby guide.",
    },
    {
      id: "kyoto-art-museum",
      heading: "Kyoto & Art Museum — Early Meta",
      body: "Official still (LEMORION X / Denfaminicogamer): Kyoto is a multi-level indoor plaza under a white lattice skylight — red torii, maple on a high balcony, bamboo, wagasa umbrellas, orange lanterns, festival stalls, a glowing 大 stair, escalator, and a lantern-grid wall. 4gamer (Aug 31) / GameWith (Sep 4): Kyoto Station motif with gardens (庭園) inside the hall and lots of vertical volume — use upper decks, not only plaza floor. Early meta: maple / garden / torii / stall dual-samples, skip open plaza tile and the 大 meme stair. Art Museum (美術館): 4gamer says world-famous paintings plus in-game Meccha objects on display; GameWith adds tourist-attraction miniatures; a Steam comment (Nezumi) noted dioramas and a small footprint. Do not confuse it with Workshop ART GALLERY (Popunia). Greece and Egypt were reworked in the same patch — GameWith still lists Pharaoh coffins, Bastet statues, and uneven tomb walls on Egypt, and Santorini blue-white on Greece; re-scout old pins. Browse /maps/kyoto, /maps/art-museum, and /hidden-spots — treat every new pin as experimental.",
    },
    {
      id: "petit-chameleon",
      heading: "Petit Chameleon (x0.5) Is Host-Gated",
      body: "4.0.0 adds Petit Chameleon (プチカメレオン) at half size — the first shrinking body type after Cube (enlarge) and Plump. Steam News: it can only be used if the host allows it. 4gamer expects random public lobbies to leave it off because smaller hitboxes are harder to find. If you cannot select Petit, the host has not enabled the toggle (same pattern as the v2.3.0 ammo-limit option). Hitbox and paint-surface impact are still being verified in lobbies — do not assume old wall-flat poses still cover the silhouette. 4.0.0 also fixed floating above the ground, a rare crouch-elimination miss, and unnamed stuck locations (Shopping Mall cardboard-box hunter-stuck reports from 3.9.0 may or may not be included — changelog names no map).",
    },
    {
      id: "crashes-network-taunts",
      heading: "Crashes, Network, Taunts, Ammo & Hunter Start",
      body: "4.1.1 lists the crash issue as still under investigation (Steam News / Nintendo Everything) — 4.1.0's possible mid-game crash fix did not close it. If you still crash, Steam's August 26 Japanese post asks for Discord reports (https://discord.gg/huyTHb2zk7) so LEMORION can reproduce — do not follow random Discord 'fix' links from the late-July malware scare. Friends who still type a 6-digit lobby ID from older third-party guides will miss the room — codes are 5 alphanumeric characters, verified in-game. 4.0.2 cuts general network usage ~50%; 4.1.0 cuts painting network data 40%. Ammo settings no longer reset every match after 4.1.0. Taunts now have a 1-second cooldown and the forced-taunt minimum is 5 seconds (was 1) — Steam announcement comments mixed on this; it is by design, not a bug. Switch 2 is live as of September 9 — Platforms guide. BLOOMIN' KIDS real-world collab (Denfaminicogamer Aug 29) still has no date/ticket sheet as of Sep 22 — watch LEMORION X, not Discord rumor links. fix4.0.1: hunters cannot crouch while waiting so round-start TP works; free camera shifting your position is mitigated. Stick paint speed no longer scales with FPS; upward stick bias is fixed. If voice toggle feels silent, 4.1.0 adds an SFX when you change voice state; 4.1.1 then mutes incoming voice by default.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Mid-August 3.7–3.9 Shopping Mall / Mo Eeyo / BAN: Problems After v3.7–3.9. Early-August Deep Sea / settings / crowd FPS: Problems After v3.6. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
