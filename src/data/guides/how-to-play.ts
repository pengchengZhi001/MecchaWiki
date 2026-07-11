import type { Guide } from "./types";

export const howToPlayGuide: Guide = {
  slug: "how-to-play",
  title: "How to Play Meccha Chameleon — Beginner Guide (2026)",
  category: "Beginner",
  readTime: "10 min",
  excerpt:
    "Buy on Steam, join your first lobby, paint your body, pick a pose, and survive as Hider or tag everyone as Seeker. Covers Mecha Chameleon / Mecca Chameleon name variants and the full round loop.",
  seoKeywords: [
    "how to play",
    "beginner guide",
    "Mecha Chameleon",
    "Mecca Chameleon",
    "steam",
    "download",
  ],
  sources: [
    {
      name: "MECCHA CHAMELEON on Steam (App 4704690)",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
    {
      name: "allthings.how — How to Play MECCHA CHAMELEON on Steam",
      url: "https://allthings.how/how-to-play-meccha-chameleon-on-steam-june-2026/",
    },
    {
      name: "TheGamer — Create and join servers with friends",
      url: "https://www.thegamer.com/mecca-chameleon-multiplayer-friends-guide/",
    },
  ],
  content: [
    {
      id: "what-is-it",
      heading: "What Is Meccha Chameleon?",
      body: "MECCHA CHAMELEON (often misspelled Mecha Chameleon or Mecca Chameleon — same game) is a $5.99 multiplayer hide-and-seek party game on Steam for Windows PC. Solo developer lemorion_1224 released it in June 2026. Hiders paint their plain white bodies to match walls, floors, and props, then freeze in a pose. Seekers sweep the map in first person and tag every hider before the timer ends. There is no solo mode — you need at least one other player online.",
    },
    {
      id: "buy-install",
      heading: "How to Buy and Install",
      body: "Search \"MECCHA CHAMELEON\" in the Steam store or open App ID 4704690 directly. Add to cart, complete checkout, and launch from your Steam Library. The game is PC-only — no PlayStation, Xbox, Switch, or mobile version at launch, so cross-platform play is not supported. Minimum specs are modest; if you see lag or blurry shaders on first launch, try Launch Options -dx11 (see our lag fix guide). Full install-to-first-match order: First Match Checklist.",
    },
    {
      id: "first-lobby",
      heading: "Joining Your First Lobby",
      body: "From the main menu: pick Public Matchmaking for random players, or Create Server for a private friend room. Private lobbies: set a unique server name, optional password, pick a map, then Esc → Friends List → invite Steam friends. Everyone must be on the same game version after patches — outdated clients cannot join. For a calm first match, host a password room on Mansion with 4–6 players.",
    },
    {
      id: "round-loop",
      heading: "What Happens Each Round",
      body: "Lobby → team assignment (Hider or Seeker) → prep phase (hiders move, sample colors, paint, pick pose) → hunt phase (hiders freeze disguise; seekers search) → round end (timer or all hiders tagged). Hiders win by surviving until time runs out. Seekers win by tagging every hider. After elimination, hiders get free camera to spectate — press 4 for free roam or 5 to follow hunters (GameRant control notes).",
    },
    {
      id: "hider-first-game",
      heading: "Your First Round as Hider",
      body: "Do not chase perfect art. During prep: path to a corner or shelf zone on Mansion, press F for paint menu, eyedropper two tones (lit + shadow), paint a simple block pattern, press R for a flat or crouch pose, and freeze before hunt starts. Sample the exact pixel your body touches — not the wall three feet away. Stay still when seekers face you; movement breaks color lock and creates audio tells.",
    },
    {
      id: "seeker-first-game",
      heading: "Your First Round as Seeker",
      body: "Sweep walls and corners at chest height first, then open areas. Watch for color blobs that do not belong to nearby objects — value mismatches (too bright or too dark) catch hiders before hue errors do. Crouch to check baseboards after a failed chest-level pass. Listen for footsteps and whistle baits. Tag with left mouse button when you have line of sight.",
    },
    {
      id: "essential-controls",
      heading: "Controls You Need Before Round One",
      body: "WASD move, mouse look, F opens paint menu, R opens pose menu, left click applies paint and tags hiders. Esc → Settings → Controls to rebind after patches. Full keybind list: our Controls & Keybinds guide. Painting deep dive: How to Paint Better guide. Pose selection: Best Pose guide.",
    },
    {
      id: "best-first-map",
      heading: "Best Map for New Players",
      body: "Start on Mansion — large color blocks, readable rooms, and forgiving beginner spots like Library Shelf and Kitchen Shelving. Graduate to Sewer for ceiling routes, Backrooms for psychological halls, then expert maps Cold Storage and Brick Loft. Browse all official maps in our maps hub or jump straight to curated hiding spots with survival ratings.",
    },
    {
      id: "friends-workshop",
      heading: "Friends, Workshop Maps, and Voice",
      body: "Steam friends join via invite or Find Server with your unique room name. Workshop maps require every player to subscribe on Steam before the host selects that map. Proximity voice chat works in-game; many groups also run Discord. Streamers can open non-private servers so viewers drop in — set house rules before going live.",
    },
    {
      id: "next-steps",
      heading: "What to Read Next",
      body: "New players: start with the First Match Checklist for install-to-lobby order, then Tips and Tricks for quick wins, Color Matching for survival rates, Private Lobby Guide for friend nights, and our hidden spot database filtered by map. If you cannot join friends, read the can't join lobby fix before changing firewall settings. Search \"Meccha Chameleon\" or the common misspellings — this wiki covers all three.",
    },
  ],
};
