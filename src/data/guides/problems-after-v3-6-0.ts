import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV360Guide: Guide = {
  slug: "problems-after-v3-6-0",
  title:
    "Meccha Chameleon v3.6 Update Problems — Deep Sea / Settings Persist / Crowd FPS Fix Guide",
  category: "Fix",
  readTime: "9 min",
  excerpt:
    "Broke after early-August 2026 3.6.x? Fix Deep Sea learning, settings not saving, number input buttons, Eeyan (Likes) reset, over-aggressive chat filter, and high-player-count FPS drops after fix3.6.1.",
  seoKeywords: [
    "v3.6.0",
    "v3.6.1",
    "Deep Sea",
    "深海",
    "settings persist",
    "Eeyan",
    "ええやん",
    "chat filter",
    "high player count FPS",
    "not working after update",
  ],
  heroImage: {
    src: "/images/maps/deep-sea.jpg",
    alt: "MECCHA CHAMELEON Deep Sea map — underwater reef with coral and sea life",
    caption:
      "Update 3.6.0 adds the Deep Sea official map. fix3.6.1 improves high-player-count performance and softens over-aggressive word filtering.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 3.6.0 / fix3.6.1",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — update 3.6.0 Deep Sea",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-6-0-adds-the-deep-sea-map/",
    },
    {
      name: "consolepcgaming.com — fix3.6.1 crowd FPS",
      url: "https://consolepcgaming.com/meccha-chameleon-fix3-6-1-takes-aim-at-crowd-related-performance-drops/",
    },
    {
      name: "Denfaminicogamer — 深海 map",
      url: "https://news.denfaminicogamer.jp/news/260808a",
    },
    {
      name: "Game*Spark — Deep Sea fantasy reef",
      url: "https://www.gamespark.jp/article/2026/08/08/170391.html",
    },
    {
      name: "consolepcgaming.com — Emote Contest winners",
      url: "https://consolepcgaming.com/meccha-chameleon-has-added-five-winning-emotes-from-its-first-contest/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What Shipped August 7–9 (3.6.0 → 3.6.1 + Emote Contest)",
      body: "Steam News update 3.6.0 (August 7, 2026): new official map Deep Sea (深海); game settings now persist after restart; number input buttons; more text profanity-filter words; feature to reset Eeyan / ええやん (Likes); reduced file size for future updates. fix3.6.1 (August 8): improved character behavior and significantly reduced performance drops in high player-count sessions; fixed blocked words that were accidentally filtering common words. Steam also shipped the five winning poses from the first community Emote Contest around August 9 (consolepcgaming). Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 3.6.x",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm matching 3.6.x before friend night — mixing 3.5.x and 3.6.x breaks private lobbies. Host creates a brand-new room after sync. If settings still reset after restart, confirm you are past 3.6.0 and that you changed settings while the client was fully updated. Generic checklist: Problems After Update guide.",
    },
    {
      id: "deep-sea-learning",
      heading: "Deep Sea Map — Early Meta",
      body: "Denfaminicogamer / Game*Spark: underwater fantasy reef with tropical fish, jellyfish, coral, giant bivalves, seaweed, shipwreck debris, and a unicorn statue. Game*Spark frames it as a paint-skill check for hiders and an attention check for seekers. Early community meta favors coral / clam / wreck prop mimics and dual-tone fish or jelly blends over camping open blue mid-water. Browse /maps/deep-sea and /hidden-spots?map=deep-sea — treat every pin as experimental until lobby screenshots settle.",
    },
    {
      id: "settings-input",
      heading: "Settings Persist, Number Buttons & Eeyan Reset",
      body: "3.6.0 makes game settings survive a restart — if options still wipe, verify the build and avoid editing while Steam is mid-download. Number input buttons let you nudge values by 1 instead of drag-only sliders. A new control resets Eeyan / Likes (ええやん) counts — use it intentionally; there is no undo. Pair with Friend List / friend-server search notes from the v3.4–3.5 fix guide if social UI still looks wrong after jumping from an older client.",
    },
    {
      id: "chat-filter-fps",
      heading: "Chat Filter Too Strict & Crowd FPS Drops",
      body: "3.6.0 added more blocked words; some common words were caught by mistake. fix3.6.1 corrects that over-filtering — update past 3.6.1 if innocuous nicknames or chat still get blocked. The same hotfix improves character behavior and cuts performance drops in crowded lobbies. If FPS still tanks in 10+ player rooms, also check Performance Mode / graphics settings from the late-July 3.3.x wave and the Lag / Blurry Screen guide.",
    },
    {
      id: "emote-contest",
      heading: "Five Contest Emotes Added",
      body: "The first #mecchaemote community contest winners shipped around August 9 — five new poses (upright, crouching, stretched-out silhouettes with green outlines per consolepcgaming). Hold R and page the pose wheel to find them. Survival freeze poses still beat funny emotes during prep; use contest emotes for spectator chaos and friend lobbies. See Emotes & Pose Wheel guide.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Mid-August Shopping Mall / Mo Eeyo / BAN: Problems After v3.7–3.9. Early-August Exit 8 / friend search / voice issues: Problems After v3.4–3.5. Late-July Banban / malware / Discord: Problems After v3.1–3.3. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
