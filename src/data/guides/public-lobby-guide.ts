import type { Guide } from "./types";

export const publicLobbyGuide: Guide = {
  slug: "public-lobby-guide",
  title: "Public Lobby Guide — Griefing, Spectators & Safer Play",
  category: "Multiplayer",
  readTime: "8 min",
  excerpt:
    "Steam's top player reviews cite lobby griefing, spectator leaks, toxic chat, and missing moderation — plus v1.7.0 report tools. Practical workarounds until you switch to private rooms.",
  sources: [
    {
      name: "Steam — Top rated reviews (app 4704690)",
      url: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
    },
    {
      name: "Steam — Top negative reviews",
      url: "https://steamcommunity.com/app/4704690/negativereviews/?browsefilter=toprated",
    },
    {
      name: "consolepcgaming.com — v1.7.0 report feature",
      url: "https://consolepcgaming.com/osaka-arrives-in-meccha-chameleons-1-7-0-update/",
    },
    {
      name: "GameRant — Public vs private mode choice",
      url: "https://gamerant.com/meccha-chameleon-tips-tricks-strategies/",
    },
  ],
  content: [
    {
      id: "why-public-hurts",
      heading: "Why Public Lobbies Frustrate Players",
      body: "Steam's most helpful reviews praise the core hide-and-seek loop but repeatedly flag public lobby problems: broken friend invites (largely patched per community fix guides), empty or full server browsers, seeker shortages in Basic mode, and disruptive behavior that private rooms avoid. Gamepressure's review aggregation lists lack of moderation, inappropriate usernames, and drawn content as significant community concerns — especially for parents considering the game for younger players. This guide documents verified player reports and practical responses, not unsourced claims about developer roadmaps.",
    },
    {
      id: "lobby-griefing",
      heading: "Lobby Griefing — Mic and Chat Leaks",
      body: "A top Steam review (547 helpful votes) describes lobby griefing: players still in the lobby opening mics or typing in chat to reveal hider locations to active hunters, ruining in-progress matches. Mitigation: host or join password private rooms for serious sessions; mute all except friends in public queue; leave lobbies where spectators chat coordinates during hunt phase. Streamers should delay sharing server names on stream until house rules are explained.",
    },
    {
      id: "spectator-exploit",
      heading: "Spectator Map Vision on Late Join",
      body: "The same Steam review thread reports that players joining while a match is running can see the entire map and player positions — a spectator leak that breaks fair hunts. Workaround: prefer freshly created rooms over mid-match joins; hosts recreate rooms between rounds when random joiners appear; use private passwords when teaching spots. If your group hits this repeatedly, switch hosts or move to a private lobby — no client-side fix exists beyond room discipline.",
    },
    {
      id: "toxicity-moderation",
      heading: "Toxic Chat, Slurs, and Moderation Gaps",
      body: "Multiple Steam reviews note offensive player names, hate symbols, and slurs in public chat with no client-side filter toggle at launch. Gamepressure lists calls for reporting features, vote-kick, and chat filters. Update v1.7.0 (June 22, 2026) added a report feature per consolepcgaming.com patch coverage alongside the Osaka map — use in-game reporting when available after updating. Until broader moderation ships, treat public text chat as untrusted; disable or ignore public mic in random lobbies.",
    },
    {
      id: "rejoin-kick",
      heading: "Kick Without Ban — Repeat Offenders",
      body: "Steam reviews note players kicked for toxicity or exploits can rejoin the same server instantly because no persistent ban system exists at community report time. Host mitigation: change server password after kicking; recreate room with a new unique name; move friend group to a fresh private session. Document repeat offenders via v1.7.0 report flow when the option appears in your build.",
    },
    {
      id: "when-public-works",
      heading: "When Public Matchmaking Still Makes Sense",
      body: "Public servers work for drop-in chaos, streamer viewer participation, and solo players without friends online — GameRant notes mode choice depends on private vs public context. Join during peak hours when lobbies populate; use Infection mode so seeker count self-corrects as players are tagged. Accept that paint-phase inappropriate drawings are a known free-draw-game issue cited in Steam reviews — not unique to this title but worth knowing before public queue.",
    },
    {
      id: "safer-alternative",
      heading: "Safer Alternative — Private Lobby Checklist",
      body: "For reliable sessions: Create Server → unique name → optional password → invite via Esc → Friends List → fresh invite after map changes. Everyone on same patch version; subscribe to workshop maps before join. See our Private Lobby Guide and Can't Join Lobby fix guide for step-by-step hosting. Most Steam review frustration around multiplayer resolves once groups stop relying on broken mid-session invites and mid-match public joins.",
    },
  ],
};
