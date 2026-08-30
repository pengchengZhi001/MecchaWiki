import type { Guide } from "./types";

export const privateLobbyGuide: Guide = {
  slug: "private-lobby-guide",
  title: "Private Lobby Guide — Invite Friends & Host Settings",
  category: "Multiplayer",
  readTime: "7 min",
  excerpt:
    "Create servers, invite Steam friends, public vs private rooms, and player counts — sourced from the Steam store page and community multiplayer guides.",
  sources: [
    {
      name: "Steam store page — multiplayer & player count",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
    {
      name: "Destructoid — How many players can play together",
      url: "https://www.destructoid.com/how-many-players-can-play-together-in-meccha-chameleon/",
    },
    {
      name: "2UpSkill — Use server browser instead of invites",
      url: "https://2upskill.com/how-to-fix-meccha-chameleon-multiplayer-not-working-cant-join-friends-private-lobby-bugs-and-server-errors-solved/",
    },
  ],
  content: [
    {
      id: "no-solo",
      heading: "Can You Play Solo?",
      body: "No. MECCHA CHAMELEON is online multiplayer only — no single-player mode, no AI bots, no offline play per Steam store description and community FAQ aggregators. You need real players and an internet connection. Minimum functional lobby is two players; the developer recommends 2–10 for stable sessions. Wikipedia notes technical support for higher counts depending on host network, but quality drops as lobbies grow.",
    },
    {
      id: "create-server",
      heading: "How to Create a Private Lobby",
      body: "From the multiplayer menu: Create Server → optional password for private sessions → pick a region tag → share the 5-character in-game join code (Steam News v4.1.0 — the old searchable server-name browser is gone). Pick official or workshop map (ensure all friends subscribed to workshop maps). Host on wired Ethernet when possible — Destructoid notes if the host disconnects, the session ends immediately.",
    },
    {
      id: "invite-friends",
      heading: "How to Invite Friends",
      body: "Fastest path reported by community guides: Esc → Friends List → invite Steam friends directly. After v4.1.0, friends can also search the host's 5-character join code in Find Server — not the room title. Keep Steam Overlay enabled (Steam → Settings → In-Game) — overlay supports invites and lobby communication. After map, password, or privacy changes, recreate the room and send fresh invites — stale invites break.",
    },
    {
      id: "public-vs-private",
      heading: "Public vs Private Servers",
      body: "Steam store: if a server is not set to private, anyone can join — streamers use this for viewer participation. Private rooms use passwords, friend-only invites, or the v4.1.0 5-character join code for learning sessions and groups that do not want random joiners mid-prep. After 4.1.0, in-progress games are hidden from public search by default (options toggle) and you must select a region tag — empty browser does not always mean broken multiplayer.",
    },
    {
      id: "player-counts",
      heading: "Best Player Count for Friend Groups",
      body: "Steam recommends 2–10 players; maximum depends on host network environment. Destructoid: no fixed hard cap but recommended 2–10 for session quality. Community consensus cited on FAQ sites: 4–8 players most balanced for Normal mode; 3–6 ideal for learning paint mechanics without every seeker ceiling-checking instantly; 6–10 suits Infection/Double modes. Streamer lobbies should explain rules before sharing passwords on stream.",
    },
    {
      id: "invite-workaround",
      heading: "When Steam Invites Fail",
      body: "2UpSkill and multiple Steam threads report invite bugs (black screen, auth failure). Workaround after v4.1.0: skip Steam invites — host creates a room and friends search the 5-character in-game join code. Older guides that say join by unique server name are outdated. See our Can't Join Lobby fix guide for version mismatch and workshop steps.",
    },
    {
      id: "host-tips",
      heading: "Stable Host Checklist",
      body: "Pick one host for the night. Everyone on same game version (restart Steam after updates). Match Steam download regions if friends are in different countries. Test with two-player private room on Mansion before workshop maps. Avoid mid-session host migration unless connection fails.",
    },
  ],
};
