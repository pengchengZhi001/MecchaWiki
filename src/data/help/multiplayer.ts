import type { HelpTopic } from "./types";

export const multiplayerTopic: HelpTopic = {
  slug: "multiplayer",
  title: "Multiplayer, Rooms & Playing With Friends",
  category: "Multiplayer",
  excerpt:
    "Create or join servers, invite Steam friends, public vs private rooms, player limits, and fixes when you cannot enter a lobby.",
  heroImage: {
    src: "/images/maps/steam-3.jpg",
    alt: "Backrooms map — popular for group lobbies and streamer rooms",
  },
  items: [
    {
      id: "how-to-play-online",
      question: "How do I play MECCHA CHAMELEON online?",
      tags: ["online", "multiplayer", "matchmaking"],
      answer: [
        "Launch the game from Steam, open the multiplayer menu, and either Find Server to browse public lobbies or Create Server to host your own room. Public servers accept drop-in players when not marked private — streamers often use this for viewer participation.",
        "Each round splits into prep phase (hiders paint and pose) and hunt phase (seekers tag hiders before the timer ends). You need at least two players; the developer recommends 2–10 for stable sessions, though the client technically supports larger counts.",
        "Workshop maps and official maps are chosen by the host before launch. Subscribe to custom maps on Steam Workshop before joining a lobby that uses them, or you may fail to load the stage.",
      ],
      relatedLink: {
        href: "/help/painting",
        label: "How to paint and pose before hunt phase",
      },
    },
    {
      id: "create-server-friends",
      question: "How do I create a server and invite friends?",
      tags: ["host", "invite", "friends", "private"],
      answer: [
        "From the multiplayer menu, choose Create Server, enter a recognizable server name, and optionally set a password for private sessions. Add tags that describe your map or vibe so friends can find you in the browser.",
        "The fastest invite path: press Esc → Friends List → invite Steam friends directly. They join without manually searching the server list.",
        "Alternatively, friends open Find Server, enable Search Public Servers, and look for your server name. Keep the name unique — \"Hide and Seek\" duplicates are impossible to find.",
        "Pick one host for the night and avoid mid-session host migration unless connection tests fail. Stable hosts with wired Ethernet produce fewer disconnects than Wi‑Fi hosts juggling stream overlays.",
      ],
    },
    {
      id: "cant-join-room",
      question: "Why can't I join my friend's room?",
      tags: ["join", "room", "invite failed", "lobby"],
      image: {
        src: "/images/maps/steam-7.jpg",
        alt: "Penguin Hotel map screenshot",
        caption: "Version mismatches often show up when a new map like Penguin Hotel drops — update before joining.",
      },
      answer: [
        "Version mismatch is the #1 cause. Close the game for everyone, restart Steam, wait for updates to finish, then have the host create a brand-new room and send fresh invites. Reusing stale rooms after a patch often fails even when invites look valid.",
        "If the host changed maps, passwords, or privacy settings, old invites break. Ask for a new invite rather than spam-clicking the previous one.",
        "Workshop map missing: if the host picked a custom map you have not subscribed to, subscribe on Steam Workshop, restart the game, and retry.",
        "Test with a two-player private room before blaming firewalls. Most casual join failures resolve with update + restart + new room — not router port forwarding.",
      ],
      relatedLink: {
        href: "/help/troubleshooting",
        label: "Connection & room issue checklist",
      },
    },
    {
      id: "public-vs-private",
      question: "Public server vs private room — what's the difference?",
      tags: ["public", "private", "password"],
      answer: [
        "Public servers appear in Find Server when Search Public Servers is enabled. Anyone can join until the room fills — great for random chaos and stream audiences.",
        "Private rooms use passwords or friend-only invites. Use these for learning sessions, testing new spots, or groups that do not want random seekers joining mid-prep.",
        "Note: after patch v1.1.0, servers already in progress may not appear in public search. An empty-looking browser can mean no joinable rooms exist, not that multiplayer is broken.",
      ],
    },
    {
      id: "cross-platform",
      question: "Is MECCHA CHAMELEON cross-platform?",
      tags: ["crossplay", "console", "xbox", "playstation"],
      answer: [
        "No. MECCHA CHAMELEON is Steam PC only at launch. Console versions are not available, so PlayStation, Xbox, and Switch players cannot join PC lobbies.",
        "Everyone in your group needs the Steam PC purchase. Steam Deck players can join if the game runs acceptably on their device, but that is still the PC build — not a separate console ecosystem.",
      ],
    },
    {
      id: "can-play-solo",
      question: "Can I play MECCHA CHAMELEON solo?",
      tags: ["solo", "single player", "offline", "bots"],
      answer: [
        "No. The Steam store describes an online hide-and-seek game with public matches and streaming support — there is no single-player mode, no AI bots, and no offline play. Community FAQ aggregators and Wikipedia agree: you need real human players and an internet connection.",
        "Minimum lobby is two players. The developer recommends 2–10 players per room for stable sessions. Bring friends, join public matchmaking, or hop into streamer viewer-participation rooms.",
        "If you bought the game to practice alone, use a private lobby with one patient friend or join low-population public servers during peak hours.",
      ],
      relatedLink: {
        href: "/guides/private-lobby-guide",
        label: "Private lobby & friend invite guide",
      },
    },
    {
      id: "player-count-limits",
      question: "How many players can join one room?",
      tags: ["players", "lobby size", "max players"],
      answer: [
        "The developer recommends 2–10 players per room for the best experience. Technical support exists for higher counts (community guides mention up to 13–24), but seeker sweep quality and network stability drop as lobbies grow.",
        "For learning paint mechanics, 3–6 players is ideal — enough seekers to pressure you, not so many that every room gets ceiling-checked instantly.",
        "Streamer lobbies should invite in waves and hide room passwords on stream until rules are explained; late joiners during prep phase ruin hide setups.",
      ],
    },
    {
      id: "public-lobby-griefing",
      question: "Why do public lobbies feel broken or toxic?",
      tags: ["public", "griefing", "toxic", "spectator", "moderation"],
      answer: [
        "Steam's top helpful reviews cite specific public-lobby problems: players in the lobby using mic or chat to leak hider positions to active hunters, late joiners seeing full-map player positions, and repeat offenders rejoining after kicks because no ban system exists at community report time.",
        "Gamepressure's review summary also lists inappropriate usernames and drawn content in public rooms — expected in free-draw party games but worth knowing before queuing with kids.",
        "Update v1.7.0 (June 22, 2026) added an in-game report feature per patch coverage — update clients and use report when available. Practical fix for most groups: password private lobbies with friends instead of random matchmaking.",
      ],
      relatedLink: {
        href: "/guides/public-lobby-guide",
        label: "Public lobby griefing & safer play guide",
      },
    },
    {
      id: "host-kick-players",
      question: "How does the host kick AFK or disruptive players?",
      tags: ["kick", "host", "afk", "ban", "moderation"],
      answer: [
        "Steam thread \"Add kick option for owner of the server\" was answered by community members: press Esc or Tab to open the player list — a kick button appears next to player names for the host.",
        "Kicks are session-level at community report time — kicked players can rejoin the same public server unless you change password or recreate the room. See Public Lobby Guide for password rotation after toxic kicks.",
        "v1.7.0 added in-game reporting per patch coverage; use report for repeat offenders and combine with private passwords for friend groups. Vote-kick for non-hosts is still a frequent Steam review request, not a documented default feature.",
      ],
      relatedLink: {
        href: "/guides/public-lobby-guide",
        label: "Public lobby moderation guide",
      },
    },
    {
      id: "hunter-ammo-limit",
      question: "Can hosts limit hunter shots / stop random spraying?",
      tags: ["ammo", "shot limit", "hunter", "spray", "lobby settings"],
      answer: [
        "Steam Discussions thread \"Unlimited Hunter firing should be LIMITED\" argues random seeker tags hurt hiders; replies favor an optional setting rather than a forced global cap.",
        "Community reports describe update v2.3.0 adding optional hunter ammo limits in Configure Map (blue lobby button → map configuration → ammo limit at bottom of left column).",
        "Hosts enable limits for teaching lobbies; keep unlimited for chaos rooms. See our Hunter Ammo Limit guide for Prop Hunt comparisons and when to toggle the setting.",
      ],
      relatedLink: {
        href: "/guides/hunter-ammo-limit-guide",
        label: "Hunter ammo limit guide",
      },
    },
    {
      id: "game-modes-host",
      question: "Which game mode should the host pick?",
      tags: ["basic", "infection", "double", "game mode"],
      answer: [
        "GameRant documents three host modes: Basic (fixed hunter/hider teams), Infection (found players become hunters), and Double (everyone hides then everyone hunts — most tags wins). mecchachameleon.io labels these Normal, Increasing Oni, and Double with the same role logic.",
        "New groups learning paint: Basic/Normal in a private room. Large public lobbies that drag: Infection so seeker count rises as players are tagged. Balanced friend nights: Double so everyone gets both roles.",
        "Hosts also configure Forced Taunt whistle intervals and optional map filters (Monochrome, Horror, Mosaic) in Configure Map — see our game modes guide for details.",
      ],
      relatedLink: {
        href: "/guides/game-modes-guide",
        label: "Game modes explained",
      },
    },
  ],
};
