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
      id: "player-count-limits",
      question: "How many players can join one room?",
      tags: ["players", "lobby size", "max players"],
      answer: [
        "The developer recommends 2–10 players per room for the best experience. Technical support exists for higher counts (community guides mention up to 13–24), but seeker sweep quality and network stability drop as lobbies grow.",
        "For learning paint mechanics, 3–6 players is ideal — enough seekers to pressure you, not so many that every room gets ceiling-checked instantly.",
        "Streamer lobbies should invite in waves and hide room passwords on stream until rules are explained; late joiners during prep phase ruin hide setups.",
      ],
    },
  ],
};
