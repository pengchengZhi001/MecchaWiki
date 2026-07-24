import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV300Guide: Guide = {
  slug: "problems-after-v3-0-0",
  title: "Meccha Chameleon v3.0.0 Update Problems — Greece / Glow Paint Fix Guide (July 2026)",
  category: "Fix",
  readTime: "10 min",
  excerpt:
    "Game broke after update 3.0.0? Fix lobby join failures after Greece ships, EOS maintenance confusion, glow/emissive paint misuse, Workshop black voids after the major bump, and early Greece spot scouting.",
  seoKeywords: [
    "v3.0.0",
    "3.0.0 update",
    "Greece map",
    "glow paint",
    "emissive paint",
    "EOS maintenance",
    "not working after update",
    "July 2026 patch",
  ],
  heroImage: {
    src: "/images/maps/greece.jpg",
    alt: "MECCHA CHAMELEON Greece map — v3.0.0 eleventh official stage",
    caption:
      "Update 3.0.0 (July 20, 2026) adds Greece. v2.9.0 (July 19) added glow/emissive paint — both matter for current lobbies.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 3.0.0",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — Greece update",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-0-0-brings-players-to-greece/",
    },
    {
      name: "Denfaminicogamer — Greece map",
      url: "https://news.denfaminicogamer.jp/news/260720y",
    },
    {
      name: "Denfaminicogamer — glow/emissive paint (v2.9.0)",
      url: "https://news.denfaminicogamer.jp/news/260719d",
    },
    {
      name: "Game*Spark — glow paint",
      url: "https://www.gamespark.jp/article/2026/07/19/169465.html",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What v3.0.0 and v2.9.0 Changed",
      body: "Steam News update 3.0.0 (July 20, 2026): new official map Greece — the 11th official stage. JP outlets (Denfaminicogamer, 4gamer, Game*Spark) describe a Santorini-inspired blue-and-white streetscape with sunset lighting on a compact globe-shaped layout. The same changelog announced EOS (Epic Online Services) maintenance on July 21, 2026 (up to 120 minutes from 3:00 AM JST / afternoon JST windows in some press) — that window is completed; lingering join failures are usually version mismatch, not ongoing downtime. One day earlier, v2.9.0 added glow-in-the-dark (emissive) paint, slight paint performance improvements, and a HIKAKIN Museum exclusive taunt volume tweak. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 3.0.0",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm 3.0.0 before friend night — mixing 2.8.x / 2.9.x and 3.0.0 breaks private lobbies. Host creates a brand-new room after sync. Generic checklist: Problems After Update guide.",
    },
    {
      id: "eos-maintenance",
      heading: "EOS Server Maintenance (July 21) — Already Completed",
      body: "Steam News bundled an EOS maintenance notice with 3.0.0. If you still cannot matchmake days later, do not assume the outage is still running — verify everyone is on 3.0.0, restart Steam, and try a fresh room. Persistent auth failures: Authentication Token guide. Persistent lobby join failures: Can't Join Lobby guide.",
    },
    {
      id: "greece-learning",
      heading: "Greece Map — Early Meta, Spots Still Settling",
      body: "Greece is brand new; no public source documents verified coordinates yet. Early community focus: blue dome / white plaster dual-samples, sunset alley nooks, terrace ledge shadows, and v2.9.0 emissive paint on lit doorways. Social threads (including udn Game coverage) compare the central circular pit to Overwatch Ilios — that rim is meme traffic, not a strong survival camp. Treat database Greece entries as experimental and screenshot your own lobby. Greece map page and /hidden-spots?map=greece track curated early spots.",
    },
    {
      id: "glow-paint",
      heading: "Glow / Emissive Paint Feels Wrong or Too Bright",
      body: "v2.9.0 adds emissive paint: Denfaminicogamer confirms you adjust the Emissive value in Paint Mode, and you can glow only part of the body. Game*Spark frames the intent as mimicking glowing objects to deceive hunters. Max emissive on a dark matte wall looks fake — match intensity to the lit object (sunset doorway, lamp, glowing prop). If paint tools feel sluggish after 2.9.0, note the patch also shipped a slight paint performance improvement; restart client and lower brush size before blaming the GPU.",
    },
    {
      id: "workshop-void",
      heading: "Workshop Maps Load as Black Void After 3.0.0",
      body: "Steam Discussions report Workshop maps loading as black voids on GeForce Now / Mac after the major bump even when subscribed. Fix order: re-subscribe the map, fully restart the client (and cloud session), wait for download completion, then retest with an official map (Greece or Mansion) to isolate workshop vs multiplayer. Full walkthrough: Workshop Map Loading fix guide.",
    },
    {
      id: "cant-join",
      heading: "Can't Join Friends After 3.0.0",
      body: "Most post-patch lobby failures are version mismatch. Everyone must finish the Steam download, restart, and use a fresh host invite. Death Burger chat filter, Egypt/HIKAKIN lottery toggles, and Penguin Hotel randomization from earlier July patches still apply — see Problems After v2.8.0 and v2.7.0. Full multiplayer walkthrough: Can't Join Lobby guide.",
    },
    {
      id: "retest",
      heading: "Spots and Tools to Re-Test on 3.0.0",
      body: "Greece: all positions experimental until community screenshots confirm them. Glow paint: practice Emissive matching on lit props before ranked Greece lobbies. Death Burger, Egypt, and HIKAKIN spots from mid-July remain starting points. Penguin Hotel: re-scout during prep — random furniture still shifts. Chat/nameplate filter from 2.8.0 still blocks stream-prohibited words.",
    },
  ],
};
