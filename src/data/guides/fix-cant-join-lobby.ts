import type { Guide } from "./types";

export const fixCantJoinLobbyGuide: Guide = {
  slug: "fix-cant-join-lobby",
  title: 'How to Fix "Can\'t Join Lobby" in Meccha Chameleon',
  category: "Fix",
  readTime: "8 min",
  excerpt:
    "Version mismatch, stale invites, workshop maps, and Steam invite bugs — the fixes players report on Steam Discussions and community guides, in order of what works first.",
  sources: [
    {
      name: "MECCHA CHAMELEON Can't Connect Fix (version match)",
      url: "https://mecchachameleongame.wiki/fix/cant-connect/",
    },
    {
      name: "2UpSkill — Multiplayer not working community fixes",
      url: "https://2upskill.com/how-to-fix-meccha-chameleon-multiplayer-not-working-cant-join-friends-private-lobby-bugs-and-server-errors-solved/",
    },
    {
      name: "Steam Discussions — Can't join friends server (EULA)",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431442266/",
    },
    {
      name: "Steam Discussions — IN-GAME INVITE NOT WORKING",
      url: "https://steamcommunity.com/app/4704690/discussions/0/562534659773185812/",
    },
  ],
  content: [
    {
      id: "symptoms",
      heading: "What \"Can't Join Lobby\" Usually Looks Like",
      body: "Players report several related failures: Steam invite accepted but black screen or instant kick back to menu, friend cannot see the hosted room, infinite loading when joining, or \"version mismatch\" errors. Community threads and fix guides agree these are usually client-side sync problems — not broken multiplayer servers — and most lobbies work after everyone updates and recreates the room.",
    },
    {
      id: "version-first",
      heading: "Step 1 — Same Game Version (Most Common Fix)",
      body: "Patch notes for v1.1.0 state matchmaking only works between players on the same version. The fix guides recommend: close MECCHA CHAMELEON completely (not suspended), exit Steam fully and reopen it, confirm no pending download in Steam → Downloads, then have every player relaunch from the Steam library. One outdated host or guest makes private lobbies look broken even when passwords and names are correct. After everyone updates, the host should create a brand-new room — old session IDs from before the patch often fail.",
    },
    {
      id: "verify-files",
      heading: "Step 2 — Verify Game Files",
      body: "If version parity does not help, community guides recommend verifying integrity: Steam library → right-click MECCHA CHAMELEON → Properties → Installed Files → Verify integrity of game files. Partial or corrupted installs cause join failures that look like network bugs. Wait for verification to finish before retrying.",
    },
    {
      id: "stale-invites",
      heading: "Step 3 — Fresh Room, Not Stale Invites",
      body: "Many players report Steam invites failing after the host changes map, password, or privacy settings. Old invites point at dead sessions. Fix: host recreates the room, sends a new invite, and friends accept from the Steam overlay while at the main menu — not while stuck inside another lobby. After v4.1.0 the legacy server-name browser is gone: the host reads the 5-character alphanumeric join code in-game and friends search that code (Steam News / consolepcgaming). Older guides that mention 6-digit lobby IDs or Find Server by name are outdated. Confirm the code in-game; public search hides in-progress rooms by default (options toggle). Steam thread \"IN-GAME INVITE NOT WORKING\" still applies — invites work more reliably when friends stay on the join screen. If invites keep failing, skip them entirely and use the join code. Full 4.1.0 walkthrough: Problems After v4.0–4.1.",
    },
    {
      id: "eula-agreement",
      heading: "Step 3b — EULA Agreement (Both Players)",
      body: "Steam thread \"Can't join friends server\" reports that if both parties have not agreed to the new EULA, they cannot play in the same lobby — one player restarting and accepting the prompt fixed the issue for that group. If a friend accepted a non-English EULA at random during install and the prompt does not reappear, verify game files or reinstall so the agreement screen returns. Everyone in the party should confirm they saw and accepted the current terms before debugging network settings. Full EULA-only walkthrough: EULA Fix guide (/guides/fix-eula-cant-join).",
    },
    {
      id: "workshop-maps",
      heading: "Step 4 — Workshop Map Subscriptions",
      body: "If the host selected a Steam Workshop map, every player must subscribe on Steam Workshop and restart the game so files download locally. Join failures and loading kicks when a custom map is selected often trace to one player missing the subscription — test with an official map (Mansion, Sewer) first to isolate the issue.",
    },
    {
      id: "empty-browser",
      heading: "Empty Server Browser — Not Always Broken",
      body: "After v4.1.0, in-progress games are hidden from public search by default (options toggle) so the list prefers rooms still waiting for hunters. An empty browser during off-peak hours can mean no open rooms, not dead multiplayer. You must select a region tag. Search by the 5-character join code rather than the room title. Toggle Search Public Servers, clear filters, retry during peak evening hours, or host your own public room for a few minutes to populate it.",
    },
    {
      id: "network-last",
      heading: "Step 5 — Network Checks (Last Resort)",
      body: "Community guides suggest network steps only after version, fresh room, and workshop checks fail: match Steam download regions across friends, disable VPN for testing, temporarily allow MECCHA CHAMELEON and Steam through firewall, switch lobby host to a player on wired Ethernet. If only one host causes problems, have another player host — if the problem follows one PC, local firewall, antivirus, or file integrity becomes more plausible than server outage.",
    },
    {
      id: "quick-checklist",
      heading: "Quick Checklist",
      body: "Everyone closes game and restarts Steam → confirm no pending update → host creates new room → fresh invites or 5-character join code → test official map before workshop → verify game files if still failing → match download regions → change host once → firewall/VPN only as last resort. Most casual join failures resolve without router port forwarding.",
    },
  ],
};
