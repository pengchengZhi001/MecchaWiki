import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV280Guide: Guide = {
  slug: "problems-after-v2-8-0",
  title: "Meccha Chameleon v2.8.0 Update Problems — Fix Guide (July 2026)",
  category: "Fix",
  readTime: "10 min",
  excerpt:
    "Game broke after update 2.8.0? Fix lobby join failures after Death Burger ships, chat/nameplate word-filter confusion, spectator UI (Ctrl+Shift+H), Paint Mode mod-screen button lockups, and early Death Burger spot scouting.",
  seoKeywords: [
    "v2.8.0",
    "2.8.0 update",
    "Death Burger map",
    "chat filter",
    "nameplate blocked",
    "spectator UI",
    "Paint Mode",
    "not working after update",
    "July 2026 patch",
  ],
  heroImage: {
    src: "/images/maps/death-burger.jpg",
    alt: "MECCHA CHAMELEON Death Burger map — v2.8.0 tenth official stage",
    caption:
      "Update 2.8.0 (July 17, 2026) adds Death Burger, nameplate/chat word filtering, spectator UI hide fix, and Paint Mode mod-download button fix.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 2.8.0",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — Death Burger update",
      url: "https://consolepcgaming.com/meccha-chameleon-adds-a-new-map-called-death-burger-in-update-2-8-0/",
    },
    {
      name: "4gamer — デスバーガー map coverage",
      url: "https://www.4gamer.net/games/007/G100712/20260717040/",
    },
    {
      name: "Gamee blog — Death Burger camouflage tips",
      url: "https://blog.gamee.games/meccha-chameleon-death-burger-update-2026-en/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What v2.8.0 Changed (Official Summary)",
      body: "Steam News update 2.8.0 (July 17, 2026): new official map Death Burger; inappropriate and stream-prohibited words blocked in nameplates and text chat; spectator UI hide restored with Control+Shift+H; Paint Mode mod download screen no longer leaves buttons unclickable. Japanese media (4gamer, Game*Spark) describe Death Burger as a burger-chain-themed eerie amusement park with clown mascots, eyeball burgers, and a fried-chicken merry-go-round — layout and hiding spots remain community-verified only. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 2.8.0",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm 2.8.0 before friend night — mixing 2.7.x and 2.8.0 breaks private lobbies. Host creates a brand-new room after sync. Generic checklist also lives at Problems After Update guide.",
    },
    {
      id: "death-burger-learning",
      heading: "Death Burger Map — Early Meta, Spots Still Settling",
      body: "Death Burger is brand new; no public source documents verified coordinates yet. Early community focus from Gamee and JP outlets: paint across color boundaries (sign + wall dual-sample), prop-mimic beside clown mascots and food signage, and silhouette checks from seeker approach angles. Treat database Death Burger entries as experimental starting points and screenshot your own lobby. Death Burger map page and /hidden-spots?map=death-burger track curated early spots.",
    },
    {
      id: "chat-filter",
      heading: "Nameplate or Chat Word Blocked (Expected Behavior)",
      body: "v2.8.0 adds server-side filtering for inappropriate terms and words that cannot appear on stream in certain regions. If your display name or chat message is rejected, try a neutral nickname — this is the new moderation layer, not a corrupted save. Steam reviews that complained about uncensored slurs in public lobbies motivated this change. For private friend groups, agree on clean names before queueing.",
    },
    {
      id: "spectator-ui",
      heading: "Spectator UI Won't Hide (Ctrl+Shift+H)",
      body: "2.8.0 fixes spectators being unable to hide the UI with Control+Shift+H — useful for clean streams and screenshots. If the shortcut still fails, verify you are on 2.8.0, restart the client, and confirm no overlay software is binding the same chord. Test in a private spectator slot before going live.",
    },
    {
      id: "paint-mode-buttons",
      heading: "Paint Mode Buttons Unclickable After Mod Download Screen",
      body: "2.8.0 fixes buttons becoming unclickable when the Mod download screen appeared during Paint Mode. If you still lose input, fully exit Paint Mode to the main menu and re-enter — do not alt-tab mid-download. Verify files if the mod browser itself fails to load.",
    },
    {
      id: "cant-join",
      heading: "Can't Join Friends After 2.8.0",
      body: "Most post-patch lobby failures are version mismatch. Everyone must finish the Steam download, restart, and use a fresh host invite. Egypt, HIKAKIN, and Penguin Hotel randomization issues from 2.7.0 still apply on the same build — see Problems After v2.7.0 for lottery toggles and Hotel re-scouting. Full multiplayer walkthrough: Can't Join Lobby guide.",
    },
    {
      id: "retest",
      heading: "Spots to Re-Test on 2.8.0",
      body: "Death Burger: all positions experimental until community screenshots confirm them. Egypt and HIKAKIN Museum spots from 2.7.0 remain valid starting points. Penguin Hotel: re-scout during prep — random elements from 2.7.0 still shift furniture between lobbies. Backrooms wall-clips from pre-1.2.0 clips remain patched.",
    },
  ],
};
