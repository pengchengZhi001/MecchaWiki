import type { Guide } from "./types";

export const playerWishlistGuide: Guide = {
  slug: "player-wishlist-guide",
  title:
    "What Players Are Asking For — Steam Discussions & Feature Requests",
  category: "Community",
  readTime: "9 min",
  excerpt:
    "Live Steam General Discussions threads: matchmaking overhaul, parental safety, bots, permanent seeker skins, LGBT representation, optimization, and moderation — what exists today vs what players request.",
  seoKeywords: [
    "feature request",
    "matchmaking",
    "parental",
    "moderation",
    "bots",
    "optimization",
    "wishlist",
    "Steam discussions",
  ],
  sources: [
    {
      name: "MECCHA CHAMELEON General Discussions",
      url: "https://steamcommunity.com/app/4704690/discussions/",
    },
    {
      name: "Steam — Top rated reviews",
      url: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
    },
    {
      name: "Yahoo Tech — Review moderation gaps",
      url: "https://tech.yahoo.com/gaming/articles/meccha-chameleon-review-wonderful-rough-175925509.html",
    },
    {
      name: "Pattern & Texture Wishlist guide (shipped vs requested)",
      url: "https://meccha.wiki/guides/pattern-texture-wishlist-guide",
    },
  ],
  content: [
    {
      id: "how-to-read",
      heading: "How to Read This Page",
      body: "Steam General Discussions for App 4704690 rotate hot threads weekly — matchmaking complaints, crash reports, moderation, and feature ideas resurface after every patch. This guide summarizes recurring player requests with links to what Meccha Wiki already documents as shipped behavior or workarounds. It is not a developer roadmap; thread titles and review quotes are the sources. Search Steam Discussions before opening duplicate threads — many topics already have fix guides here.",
    },
    {
      id: "matchmaking",
      heading: "Matchmaking Overhaul — \"Find A New Way To Matchmake\"",
      body: "GawdBlasterKay's Steam thread title captures a top frustration: no quick match, unreliable friend invites, and server browsers without ping display. Yahoo Tech's review notes joining requires patience — hosts mis-tag regions and slurs appear in server names with little guidance beyond hope. Shipped workarounds today: private password rooms, Esc → Friends List invites, unique searchable server names, version parity across party (v1.1.0+), and Find Server refresh tricks in our Can't Join Lobby guide. Requested but not documented as shipped: dedicated matchmaking queues, ping columns, party-wide auto-join after invite, and regional server filters.",
    },
    {
      id: "parental-safety",
      heading: "Parental Safety & Server Name Slurs",
      body: "Steam threads \"Parental safety - Server names slurs\" and reviews cited by Gamepressure flag offensive server names, hate symbols painted on bodies, and drawn inappropriate content in public lobbies — with no client-side chat or name filter toggle at community report time. Yahoo Tech describes intended report UI buttons lacking labels in some builds. Mitigation parents discuss: private family lobbies only, mute public voice/text, supervise public queue, use v1.7.0 in-game reporting when visible after updates. See Public Lobby Guide for toxicity and spectator leak context — overlapping but distinct from parental filtering requests.",
    },
    {
      id: "moderation-kick",
      heading: "Report, Kick & Persistent Ban Requests",
      body: "Threads like \"Report or Kick far-Right fanatics\" and Steam negative reviews request vote-kick, chat filters, and bans that survive rejoin. Shipped: host kick via Esc/Tab menu (documented in Multiplayer help), v1.7.0 player reporting per consolepcgaming.com patch coverage. Not shipped at report time: persistent lobby bans after kick, automated slur filters, and labeled report flows in every language build. Workaround: host changes password and recreates room after kicking repeat griefers.",
    },
    {
      id: "bots",
      heading: "Bots in Public Lobbies?",
      body: "Nr1Endeavor's Steam thread \"bots in this game?\" reflects confusion during high-population weeks. The store page describes online multiplayer with humans — no official solo mode or AI bot fill documented. Players may mistake idle avatars, late-join spectators, or streamer-viewer accounts for bots. Worth It guide states you need online humans; if behavior looks non-human, leave the lobby and use a private room rather than assuming anti-cheat bot detection exists.",
    },
    {
      id: "optimization",
      heading: "Better Optimization & Crash on Start",
      body: "vit0x's \"Better Optmization :(\" thread and RicIxt's \"Crash by start\" posts sit beside longstanding DirectX 12 stutter reports. Shipped mitigations: Launch Options -dx11 or -d3d11, graphics mode reset for blur, version-matched parties, verify game files. Steam threads also suggest GPU driver rollbacks for UE5 indie edge cases. Full checklist: Lag & Blurry Screen fix guide and Problems After Update hub. Optimization requests in discussions ask for broader low-end presets and fewer shader hitches on first launch — track Steam News for graphics patch lines.",
    },
    {
      id: "permanent-skin",
      heading: "Permanent Seeker or Lobby Skin",
      body: "liquidmonkey's thread asks for a permanent skin when playing seeker or waiting in lobby — cosmetic identity beyond the default white chameleon model. No official cosmetic shop or persistent seeker outfit is documented in Steam News at wiki report time. Players customize round-to-round through paint during hide phases only. This remains a popular cosmetic request alongside body resize threads in reviews.",
    },
    {
      id: "lgbt-representation",
      heading: "LGBT Representation Requests",
      body: "Ronald Paiaço Loko's thread \"We need more LGBT representation!\" represents social feature requests beyond core hide-and-seek mechanics — pride-themed paints, emotes, or lobby cosmetics. No shipped representation pack is listed in patch notes reviewed by this wiki. Feature discussion belongs in Steam forums and Discord; gameplay guides here stay mechanics-focused until official cosmetics ship.",
    },
    {
      id: "game-ideas",
      heading: "Game Ideas & Mode Suggestions",
      body: "dgamer1025's \"game ideas\" thread typifies open-ended design feedback: new modes, maps, tools. Community wishlist items already tracked elsewhere on this wiki include texture brush, checkerboard copy, native invert Y, round-end hide gallery for all players, native controller support, and body resize — see Updates hub \"Not Yet Shipped\" and Pattern & Texture Wishlist guide for workarounds. Hunter ammo limit (v2.3.0) and 11 emotes (v1.8.0) show the developer does ship lobby and social features when threads persist.",
    },
    {
      id: "reviews-sentiment",
      heading: "\"Reviews Not Looking Good\" Threads",
      body: "WolfPaxHD's discussion title reflects waves of negative review bombs during connectivity or exploit spikes — not always a permanent rating collapse. Steam still shows Very Positive overall at community report time with language-specific splits (Simplified Chinese Mixed per store breakdown). Read recent negative reviews for specific symptoms (can't join, ESP, noclip) and map each to a fix or fair-play guide rather than treating the thread as generic quality verdict.",
      image: {
        src: "/images/spots/meeting-room-reception-desk.png",
        alt: "Meeting Room workshop map — custom layouts players request more of via Steam Workshop",
        caption:
          "Workshop maps address some \"game ideas\" requests without waiting for official releases — 34+ curated on Meccha Wiki.",
      },
    },
    {
      id: "what-you-can-do",
      heading: "What You Can Do Today",
      body: "For matchmaking pain: private lobby checklist. For safety: password rooms and reporting after v1.7.0. For performance: DX11 launch option. For missing paint tools: manual workarounds in Pattern guide. For new maps: Workshop directory plus sync after npm run sync:workshop on maintainer clones. Upvote constructive Steam threads that match your issue; link this wiki's sourced guides in replies instead of unsourced rumors.",
    },
  ],
};
