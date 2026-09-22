import type { Guide } from "./types";

export const platformsGuide: Guide = {
  slug: "platforms-guide",
  title:
    "Is Meccha Chameleon on Nintendo Switch, PS5, or Xbox? — Every Platform",
  category: "Setup",
  readTime: "9 min",
  excerpt:
    "MECCHA CHAMELEON is on Steam (Windows PC) and Nintendo Switch 2 (eShop since Sep 9, 2026) with full PC cross-play. Original Switch, PS5, Xbox, iOS, and Android are still unavailable. Workshop maps stay PC-only until later this year.",
  seoKeywords: [
    "Nintendo Switch",
    "Switch 2",
    "PS5",
    "Xbox",
    "crossplay",
    "cross-play",
    "cross platform",
    "Mac",
    "mobile",
    "Steam Deck",
    "platforms",
  ],
  sources: [
    {
      name: "Famitsu — Nintendo Direct 2026.9.9 Switch 2",
      url: "https://www.famitsu.com/article/202609/87346",
    },
    {
      name: "Game*Spark — Switch 2 cross-play / user maps later this year",
      url: "https://www.gamespark.jp/article/2026/09/10/172058.html",
    },
    {
      name: "Dengeki Online — Switch 2 eShop launch",
      url: "https://dengekionline.com/article/202609/87396",
    },
    {
      name: "consolepcgaming.com — 4.1.1 Switch 2 host cap",
      url: "https://consolepcgaming.com/meccha-chameleon-update-4-1-1-brings-voice-chat-controls-and-a-lower-switch-2-cap/",
    },
    {
      name: "MECCHA CHAMELEON on Steam",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
  ],
  heroImage: {
    src: "/images/maps/kyoto.jpg",
    alt: "MECCHA CHAMELEON Kyoto map — festival atrium with torii and maple",
    caption:
      "Playable on Steam PC and Nintendo Switch 2 (September 9, 2026) with full cross-play. PS5, Xbox, and original Switch are still unavailable.",
  },
  content: [
    {
      id: "quick-answer",
      heading: "Quick Answer — Steam PC + Nintendo Switch 2",
      body: "MECCHA CHAMELEON (App 4704690) is available on Windows PC through Steam at $5.99 and on Nintendo Switch 2 through the eShop (Famitsu / Dengeki: announced in Nintendo Direct 2026.9.9 and live the same day). ITmedia lists the Japanese eShop price at ¥790; a 20% launch discount ran through September 17, 2026 and has ended. Game*Spark quoting developer LEMORION: Switch 2 supports full cross-play with Steam PC, mouse controls, and lobbies up to 24 players. Update 4.1.1 temporarily caps Switch 2 hosted sessions at 10 players (was 12) — have a PC host if you need a larger mixed lobby. Original Nintendo Switch, PlayStation 5, Xbox, iOS, and Android remain unavailable. Mid-2026 PC-only articles (SlashSkill, Insider Gaming, Times of India) are outdated as of September 9.",
    },
    {
      id: "nintendo-switch",
      heading: "Is Meccha Chameleon on Nintendo Switch or Switch 2?",
      body: "Nintendo Switch 2: yes, since September 9, 2026. Famitsu, Dengeki Online, and GAME Watch covered the Nintendo Direct 2026.9.9 reveal with same-day eShop delivery. 4.1.1 adds touch-screen painting, Switch 2 A/B/X/Y button notation, and the temporary 10-player host cap. Original Nintendo Switch: still no. Treat any listing for the first Switch as unofficial or a lookalike. Game*Spark warns the Nintendo Store also sells a similarly logo'd title titled 変態カメレオン — search めっちゃカメレオン or the LEMORION / HAGANEIRO credit before you buy.",
    },
    {
      id: "playstation-xbox",
      heading: "PlayStation & Xbox — Still Not Available",
      body: "PlayStation 5, Xbox Series X|S, and Game Pass still have no official port. Switch 2 did not imply other consoles. Friends on PS5 or Xbox cannot join Steam or Switch 2 lobbies. Options those groups discuss: one person hosts from Steam PC or Switch 2, or wait for a Steam News / Nintendo Direct announcement. Nothing is confirmed beyond the two shipped platforms.",
    },
    {
      id: "crossplay",
      heading: "Cross-Play — Steam PC ↔ Switch 2",
      body: "Cross-play shipped with the Switch 2 launch. Game*Spark (Sep 10) quotes LEMORION: Switch 2 plays with PC, mouse is supported, and rooms can hold up to 24. consolepcgaming notes an unnumbered Hotfix 4.1.0 added a cross-play option — enable it on the host if mixed-platform joins fail. Everyone must be on 4.1.1+; version mismatch still kills lobbies. Join with the v4.1.0 5-character in-game code. Incoming voice is muted by default after 4.1.1 — unmute before assuming cross-play broke audio. Steam Community currently states MOD-map cross-play arrives by year end with a new MOD system that will replace Steam Workshop. Until then, Workshop maps stay on PC lobbies; Switch 2 players will fail to load them. Original Switch, PS5, and Xbox still have no bridge.",
    },
    {
      id: "mac-linux",
      heading: "Mac & Linux — No Native Build",
      body: "SlashSkill documents no native macOS or Linux build. Intel Mac owners historically used Boot Camp for Windows-only Steam titles; Apple Silicon Macs lack Boot Camp, so a separate Windows PC or cloud streaming setup is the practical path. Linux players can run the Windows build through Proton on Steam Deck and desktop Linux — same compatibility layer, not an official Linux port. Multiplayer version parity still applies: Proton users must match patch numbers with Windows friends.",
    },
    {
      id: "mobile-scams",
      heading: "Mobile Apps — Avoid Lookalikes",
      body: "SlashSkill and allthings.how warn that lookalike mobile apps in app stores are not the real MECCHA CHAMELEON. The authentic game requires Steam on Windows. Searching Mecha Chameleon APK or Mecca Chameleon mobile leads to unrelated clones — do not enter payment or account details on third-party download sites mimicking the viral title.",
    },
    {
      id: "steam-deck",
      heading: "Steam Deck & Handheld PC — Playable",
      body: "Although not a console port, handheld play is possible. SlashSkill rates Steam Deck status as Playable (not Verified): the game runs through Proton with community Steam Input layouts mapping the right trackpad to mouse for eyedropper painting. Painting precision is harder than desktop mouse — competitive prep on Deck suits casual friend lobbies. Insider Gaming and Times of India recommend bringing a mouse for serious paint sessions even on Deck. Full layout notes: our Controller & Steam Deck guide and Worth It buyers guide.",
    },
    {
      id: "v25-controller",
      heading: "Experimental Controller Palette (v2.5.0)",
      body: "consolepcgaming.com's v2.5.0 patch coverage notes an experimental color palette added for upcoming controller support. Native gamepad operations shipped in v3.1.0; Switch 2 adds mouse, touch-screen paint (v4.1.1), and official button notation. Steam Input layouts still help on Steam Deck.",
    },
    {
      id: "playing-with-friends",
      heading: "How Console-Only Friends Can Play",
      body: "If your friend group owns only PlayStation, Xbox, or original Switch hardware, they still cannot join. Switch 2 and Steam PC can play together after Hotfix 4.1.0 / 4.1.1 — share the 5-character join code and enable the cross-play option. For PS5/Xbox-only groups the practical paths remain a cheap Windows PC, Steam Deck, or waiting for a future port. See Private Lobby Guide for the join-code flow.",
    },
    {
      id: "watch-for-announcements",
      heading: "How to Track Future Platform News",
      body: "Official platform changes appear on Steam News for App 4704690, the Nintendo eShop listing, Nintendo Direct, and LEMORION's social accounts — not Discord rumor links. Next confirmed item on the public roadmap is user-created / MOD maps on Switch 2 later this year (Game*Spark / Steam Community). Until a PlayStation or Xbox store listing exists, treat those ports as unannounced. Searching Is Meccha Chameleon on Switch 2, Mecha Chameleon PS5, or メッチャカメレオン Switch should land here plus the official store pages.",
    },
  ],
};
