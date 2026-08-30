import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV390Guide: Guide = {
  slug: "problems-after-v3-9-0",
  title:
    "Meccha Chameleon v3.7–3.9 Update Problems — Shopping Mall / Mo Eeyo / BAN / Jump Height Fix Guide",
  category: "Fix",
  readTime: "10 min",
  excerpt:
    "Broke after mid-August 2026 3.7–3.9.x? Fix Shopping Mall learning, Mo Eeyo skip votes, host BAN lists that reset on restart, jump-height / Deep Sea OOB, voice chat flashing on, player IDs, and emote ceiling-cling gaps after 3.9.1.",
  seoKeywords: [
    "v3.9.0",
    "v3.9.1",
    "v3.8.0",
    "Shopping Mall",
    "ショッピングモール",
    "Mo Eeyo",
    "もうええよ",
    "BAN",
    "jump height",
    "Deep Sea out of bounds",
    "player ID",
    "emote ceiling",
    "not working after update",
  ],
  heroImage: {
    src: "/images/maps/shopping-mall.jpg",
    alt: "MECCHA CHAMELEON Shopping Mall map — multi-level atrium with escalator and planter hide",
    caption:
      "Update 3.9.0 adds the Shopping Mall official map. 3.8.0 ships Mo Eeyo skip-votes and host BAN; 3.9.1 fixes emote paging and ceiling-cling gaps.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — 3.7.x / 3.8.0 / 3.9.0 / 3.9.1",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — update 3.9.0 Shopping Mall",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-9-0-adds-shopping-mall-map/",
    },
    {
      name: "consolepcgaming.com — 3.9.1 emote / ceiling cling",
      url: "https://consolepcgaming.com/meccha-chameleon-3-9-1-patch-notes-fix-emote-selection-and-ceiling-cling-issues/",
    },
    {
      name: "consolepcgaming.com — update 3.8.0 Mo Eeyo",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-8-0-includes-a-vote-to-skip-hiding-and-answer-reveals/",
    },
    {
      name: "Denfaminicogamer — Shopping Mall + last official map notice",
      url: "https://news.denfaminicogamer.jp/news/260816h",
    },
    {
      name: "Dengeki Online — 3.9.0 voice-chat flash + player ID",
      url: "https://dengekionline.com/article/202608/84583",
    },
    {
      name: "Denfaminicogamer — もうええよ / BAN",
      url: "https://news.denfaminicogamer.jp/news/2608142t",
    },
    {
      name: "consolepcgaming.com — fix7.3.2 Deep Sea OOB (real version 3.7.2)",
      url: "https://consolepcgaming.com/meccha-chameleon-fix7-3-2-targets-movement-and-match-end-problems/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What Shipped August 9–16 (3.7.0 → 3.9.1)",
      body: "Steam News 3.7.0 (August 9, titled as Emote Contest results): five community #mecchaemote poses added. fix3.7.1 (August 10): Basic Mode hunter not moving onto certain Mod maps; jump height adjusted; UI tweak. fix3.7.2 (August 11, Steam title typo fix7.3.2): movement speed, Deep Sea out-of-bounds closed, matches no longer end while a Hunter is still present. fix3.7.3 (August 12): hunter not moving to the map (rare), numeric quick-button minimum, glitched nameplates, controller paint X/Y speed, new controller-painting movement-speed setting. Update 3.8.0 (August 14): Mo Eeyo (もうええよ) unanimous skip of hide time and answer-reveal; host BAN list that resets on server restart; hidden-object collision, wall-camera jerk, answer-reveal invisibility, jump height too high, TPS hunter aim, green mic indicator, User Management controller navigation. Update 3.9.0 (August 16): official map Shopping Mall (ショッピングモール); voice chat no longer flashes ON; player ID on the Player Management tab; next official map will be the last excluding collabs. 3.9.1 (same day): reverse emote-page navigation; wrong emote selected when none chosen; ceiling-cling gap with certain emotes. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 3.9.x",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm matching 3.9.x before friend night — mixing 3.6.x and 3.9.x breaks private lobbies. Host creates a brand-new room after sync. If voice chat still flashes on, confirm you are past 3.9.0. Generic checklist: Problems After Update guide.",
    },
    {
      id: "shopping-mall-learning",
      heading: "Shopping Mall Map — Early Meta",
      body: "Official still (LEMORION X / consolepcgaming): bright multi-level atrium with glass skylight, escalator, glass-railed balconies, a curved wooden handbag shelf, a bench beside a planter of bushes, white tile, and paint-splattered pillars. Denfaminicogamer / Dengeki confirm the name only; mecchachameleon.net treats coordinates as pending. Early community meta: crouch in the planter recess shown in the still, dual-sample handbag wood/bag colors, skip open atrium floors. This is not a collaboration map — it should appear in random lottery without the collab OFF default. Browse /maps/shopping-mall and /hidden-spots?map=shopping-mall — treat every pin as experimental. Do not confuse it with the Steam Workshop MegaMall - SuperMarket map.",
    },
    {
      id: "mo-eeyo-ban",
      heading: "Mo Eeyo Skip Votes & Host BAN List",
      body: "3.8.0 Mo Eeyo (Enough Already / もうええよ) force-skips hiding time and answer-reveal only when every player agrees — not a majority vote, and not a new game mode (Denfaminicogamer / Steam News). Confirm the in-game vote UI; changelogs do not name a keybind. Host BAN lets you remove griefers; Steam Discussions had been asking for this after kick-and-rejoin abuse. The BAN list resets when the server restarts — bans are session-only, so a new room does not keep yesterday's list. Use the v3.9.0 player ID on the Player Management tab when reporting or identifying users (Dengeki: use this ID when user information is required).",
    },
    {
      id: "movement-oob",
      heading: "Jump Height, Deep Sea OOB & Match Ending Early",
      body: "fix3.7.1 adjusted jump height without saying up or down; 3.8.0 then fixed jump height being too high — re-test wallkick / ceiling cling after 3.8.0+. fix3.7.2 closed Deep Sea out-of-bounds (Steam titled the post fix7.3.2 — digits swapped; the real version is 3.7.2). The same hotfix stops matches ending while a Hunter is still present. If a round pops results with a seeker still alive, update past 3.7.2.",
    },
    {
      id: "voice-emotes",
      heading: "Voice Flash, Green Mic Icon & Emote Ceiling Gaps",
      body: "3.9.0 stops voice chat momentarily turning ON — if your mic still blips at round start, confirm 3.9.0+. The 3.8.0 green mic indicator lights while you speak; that is a HUD tell, not a restore of proximity voice (still disabled since fix3.3.2 rework). 3.9.1 lets you page the emote wheel backwards, stops a fallback emote applying when you chose none, and closes a visible gap when clinging to ceilings with certain emotes — important after the first Emote Contest poses (3.7.0). Survival freeze poses still beat funny emotes in prep. See Emotes & Pose Wheel guide.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Late-August Kyoto / join codes / Petit: Problems After v4.0–4.1. Early-August Deep Sea / settings / crowd FPS: Problems After v3.6. Exit 8 / friend search / voice: Problems After v3.4–3.5. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
