import type { Guide } from "./types";

export const discordCommunityGuide: Guide = {
  slug: "discord-community-guide",
  title: "Meccha Chameleon Discord & Community — Where Players Actually Talk",
  category: "Community",
  readTime: "6 min",
  excerpt:
    "Official Discord, Steam Discussions, Workshop comments, and English Q&A hubs for Meccha Chameleon — plus what each channel is good for when Reddit or TikTok clips are not enough.",
  seoKeywords: ["discord", "community", "reddit", "LFG", "steam discussions"],
  sources: [
    {
      name: "mecchachameleon.wiki — Discord & community note",
      url: "https://mecchachameleon.wiki/",
    },
    {
      name: "Steam Community Hub",
      url: "https://steamcommunity.com/app/4704690",
    },
    {
      name: "MECCHA CHAMELEON Steam Workshop",
      url: "https://steamcommunity.com/app/4704690/workshop/",
    },
  ],
  content: [
    {
      id: "official-discord",
      heading: "Official Discord Server",
      body: "Community wikis report that English-language coordination for MECCHA CHAMELEON happens primarily through the official Discord server linked from the Steam store page and community hub — not through Trello or a second official forum. Discord is where players ask quick patch questions, share clips, report lobby bugs, and find friend groups between matches. Search \"Meccha Chameleon Discord\" or \"Mecha Chameleon Discord\" — verify you joined via Steam or the developer's linked invite, not copy-paste invites from scam reposts.",
    },
    {
      id: "discord-hack-july-2026",
      heading: "July 25–26 Discord Breach — What Happened",
      body: "On July 25, 2026 the official Discord was briefly compromised while developers investigated malicious Workshop maps. Steam clarifications (TheGamer / Polygon / KeenGamer coverage): the game itself has no RAT; Discord is not integrated with the client; hacker messages telling players to \"follow steps to remove a RAT from the update\" were false panic. Steam News July 26: server restored, hackers banned, fresh invite https://discord.gg/kUh2PNPjpq. Always verify Discord links from Steam News or the store page — never from random DMs during a crisis.",
    },
    {
      id: "steam-discussions",
      heading: "Steam Discussions — Best for Bug Fixes",
      body: "Steam Community Discussions remain the highest-volume archive for connectivity issues: can't join lobby, authentication token errors, EULA blocks, taunt not working, invert Y requests. Our fix guides trace back to named threads — use Discussions when your exact error string matches a recent post. Patch days flood General and Help forums; search App 4704690 discussions before opening a duplicate thread.",
    },
    {
      id: "workshop-community",
      heading: "Workshop Comments & Map Makers",
      body: "Custom map questions — subscribe errors, black void load fails, exploit reports — belong in each map's Steam Workshop discussion tab. Map creators patch holes when players comment. After late-July 2026 malware reports (Laser Tag Neon and copycats), prefer maps with an established player base and active comments; avoid brand-new uploaders who disabled discussion. Meccha Wiki workshop directory links subscribe URLs; after subscribing, test in a private lobby before forcing the map on a full friend group. Security patch shipped in v3.1.0 — see Problems After v3.1–3.3.",
    },
    {
      id: "english-vs-japanese",
      heading: "English vs Japanese Player Bases",
      body: "MECCHA CHAMELEON launched from a Japanese solo developer; Japanese community activity is strong on native social platforms and Steam reviews. English players dominate Discord Q&A and fan wikis — this site exists partly for structured English guides when machine translation on Steam threads is not enough. メッチャカメレオン searches may surface Japanese clips; gameplay mechanics are identical on global Steam builds.",
    },
    {
      id: "reddit-youtube-tiktok",
      heading: "Reddit, YouTube & TikTok",
      body: "Reddit threads spike on launch weeks and viral clips (horse statue meta, ceiling hides). YouTube tutorials from channels like Ditech Gaming show paint pipeline visually. TikTok favors funny workshop rounds over competitive strats. Treat clip spots as unverified until you test post-patch — v1.2.0 changed wall-clip behavior. Wikis aggregate lasting meta; social clips rotate weekly.",
    },
    {
      id: "wiki-ecosystem",
      heading: "Fan Wikis — Structured Alternatives to Chat",
      body: "Multiple fan wikis compete on Google: meccha.wiki (this site), mecchachameleongame.wiki, mecchachameleon.wiki. None replace Discord for live LFG — use wikis for hiding spots, controls, and fix walkthroughs you can link in Discord pins. When arguing patch-specific details, link Steam News, not chat hearsay.",
    },
    {
      id: "finding-groups",
      heading: "Finding Friend Groups & Private Lobbies",
      body: "Best path for friends: Steam invite via Esc → Friends List (see Private Lobby Guide). For pickup groups: Discord LFG channels, recognizable public server names in Find Server, or streamer communities with stated rules. Avoid public lobbies for learning paint basics — griefing and spectator leaks are common (Public Lobby Guide). Password Mansion rooms with 4–6 players beat random queue for first ten hours.",
    },
    {
      id: "reporting-fair-play",
      heading: "Reporting Cheats & Exploits",
      body: "ESP and geometry exploit frustration spikes in Steam threads alongside Kotaku launch coverage. v1.7.0 added in-game reporting when your client is updated — see Cheaters & Fair Play Guide. Discord reports do not replace Steam tools; leave noclip abuse lobbies and document in private friend groups instead of public escalation.",
    },
  ],
};
