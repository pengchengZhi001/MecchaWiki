import type { Guide } from "./types";

export const fixSteamInviteNotWorkingGuide: Guide = {
  slug: "fix-steam-invite-not-working",
  title: "Steam Invite Not Working in Meccha Chameleon — Fix Guide",
  category: "Fix",
  readTime: "8 min",
  excerpt:
    "In-game invite fails, black screen after accepting, friend joins wrong room, or desktop notification breaks join — fresh rooms, Find Server workaround, and EULA parity.",
  seoKeywords: [
    "steam invite not working",
    "invite failed",
    "can't invite friends",
    "in-game invite",
    "black screen invite",
    "join failed",
    "friend can't join",
  ],
  sources: [
    {
      name: "Steam Discussions — IN-GAME INVITE NOT WORKING",
      url: "https://steamcommunity.com/app/4704690/discussions/0/562534659773185812/",
    },
    {
      name: "Steam Discussions — Can't join friends server (EULA)",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431442266/",
    },
    {
      name: "TheGamer — Create and join servers with friends",
      url: "https://www.thegamer.com/mecca-chameleon-multiplayer-friends-guide/",
    },
  ],
  content: [
    {
      id: "symptoms",
      heading: "What \"Invite Not Working\" Usually Means",
      body: "Steam Discussions cluster several failures under invite bugs: host sends in-game invite via Esc → Friends List but friend never receives it, friend accepts desktop Steam notification and gets black screen or instant kick to menu, invite worked yesterday but fails after a patch, or friend lands in a different public room than the host intended. Most cases are stale session IDs, version skew, or accepting invites at the wrong game state — not broken Steam friends lists. This guide fixes invite-specific flows; if friends connect but workshop maps fail, see Workshop Map Loading guide.",
    },
    {
      id: "version-parity",
      heading: "Step 1 — Same Version Before Any Invite",
      body: "Patch v1.1.0 requires identical client builds for matchmaking. Before sending invites: everyone closes Meccha Chameleon, exits Steam fully, confirms zero pending downloads, relaunches from library. Host checks last — host on outdated build makes every invite look broken. After updates, never reuse pre-patch room IDs. Create a brand-new server even if the room name and password stay the same.",
    },
    {
      id: "fresh-room",
      heading: "Step 2 — New Room After Any Setting Change",
      body: "Changing map, password, privacy, or workshop selection invalidates old invites. Host must Create Server again, then send new invites. Steam thread IN-GAME INVITE NOT WORKING confirms invites sent before map finalization often point at dead sessions. Workflow: pick map → set password → confirm settings → then open Friends List. Tell friends to decline stale notifications from earlier attempts.",
    },
    {
      id: "accept-from-menu",
      heading: "Step 3 — Accept Invite at Main Menu (Not Mid-Lobby)",
      body: "Community reports describe black screens and auth failures when friends accept desktop Steam invites while already inside another lobby or loading screen. Friend should sit at the main menu, open Steam overlay (Shift+Tab), accept invite from overlay friends list — not from Windows toast while alt-tabbed. If black screen appears, Esc to menu, fully restart game, and use Find Server workaround below instead of hammering the same dead invite.",
    },
    {
      id: "find-server-workaround",
      heading: "Step 4 — Find Server Workaround (Most Reliable)",
      body: "When Steam invites keep failing, skip them entirely. Host sets a unique server name (example: MecchaFriday-Jay-4821) and optional password. Friends open main menu → Find Server → Search Public Servers → type exact server name → join. This bypasses broken Steam overlay relay paths that desktop notifications use. TheGamer multiplayer guide and community fix sites list this as the default friend-night workflow when invites regress after patches.",
    },
    {
      id: "eula-block",
      heading: "Step 5 — EULA Agreement on Both Accounts",
      body: "Steam thread Can't join friends server reports both parties must accept the current EULA before sharing a lobby — symptoms mimic invite failure with no clear error. Each player launches solo once, accepts any terms prompt, restarts game. If someone picked a random language at install and the popup never returns, verify game files to force the agreement screen. Full walkthrough: EULA Fix guide. After EULA parity, still create a fresh room — EULA blocks do not fix themselves on old sessions.",
    },
    {
      id: "workshop-invite",
      heading: "Step 6 — Workshop Map Before Invites",
      body: "Do not send invites while friends still download workshop maps. Host announces map in Discord, everyone subscribes and restarts, then host creates room on that map, then invites. Surprise workshop selection after invites sent causes join failures that look like Steam invite bugs. Test Mansion invites first when onboarding new friends — add Art Gallery only after base invite flow works.",
    },
    {
      id: "host-migration",
      heading: "Step 7 — Change Host Once",
      body: "If only one friend's invites always fail regardless of workaround, have a different player host the same Mansion test. If problem follows one PC, local firewall, antivirus, or corrupted install is more likely than Steam-wide outage. If problem follows one friend as guest only, they verify files and retry wired connection. Switching host costs two minutes and saves an hour of overlay debugging.",
    },
    {
      id: "private-lobby-guide",
      heading: "Long-Term: Private Lobby Habits",
      body: "For recurring friend nights, standardize: unique server name posted in Discord, password for streamer safety, Mansion or agreed workshop map, everyone on same patch before voice call starts. Private Lobby Guide covers host settings, player counts, and forced taunt rules. First Match Checklist walks new purchasers through the same flow before their first public queue — reduces invite failures from players who skip EULA or workshop steps.",
    },
    {
      id: "quick-checklist",
      heading: "Quick Checklist",
      body: "Everyone updated and restarted Steam → host creates new room → map and password final → friends at main menu → in-game invite OR Find Server by name → EULA accepted on all accounts → workshop subscribed before custom maps → change host once if stuck → verify files before firewall changes. Most invite failures resolve without reinstalling Steam or the game.",
    },
  ],
};
