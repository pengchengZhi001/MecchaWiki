import type { Guide } from "./types";

export const platformsGuide: Guide = {
  slug: "platforms-guide",
  title:
    "Is Meccha Chameleon on Nintendo Switch, PS5, or Xbox? — Every Platform",
  category: "Setup",
  readTime: "9 min",
  excerpt:
    "MECCHA CHAMELEON is a Windows PC Steam exclusive as of July 2026 — no Nintendo Switch, PlayStation, Xbox, iOS, or Android version. Crossplay, Mac workarounds, and Steam Deck Playable status explained with sources.",
  seoKeywords: [
    "Nintendo Switch",
    "PS5",
    "Xbox",
    "crossplay",
    "cross platform",
    "Mac",
    "mobile",
    "Steam Deck",
    "platforms",
  ],
  sources: [
    {
      name: "SlashSkill — Every platform explained",
      url: "https://www.slashskill.com/is-meccha-chameleon-on-ps5-xbox-switch-or-mac-every-platform-explained/",
    },
    {
      name: "Insider Gaming — Console availability",
      url: "https://insider-gaming.com/is-meccha-chameleon-on-playstation-xbox-or-nintendo-switch-all-platforms/",
    },
    {
      name: "Times of India — Crossplay support",
      url: "https://timesofindia.indiatimes.com/sports/esports/news/is-meccha-chameleon-cross-platform-crossplay-support-explained/articleshow/131731694.cms",
    },
    {
      name: "MECCHA CHAMELEON on Steam",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
  ],
  heroImage: {
    src: "/images/spots/mansion-kitchen-shelving.jpg",
    alt: "MECCHA CHAMELEON gameplay on PC — Mansion map kitchen zone",
    caption:
      "As of July 2026 the game runs on Windows PC through Steam only — console ports are not announced.",
  },
  content: [
    {
      id: "quick-answer",
      heading: "Quick Answer — PC Only on Steam",
      body: "MECCHA CHAMELEON (App 4704690) is available exclusively on Windows PC through Steam at $5.99. SlashSkill, Insider Gaming, and Times of India all confirm the same status as of mid-2026: no PlayStation 5, Xbox Series X|S, Nintendo Switch, Nintendo Switch 2, iOS, or Android release, and no official port has been announced. Steam's store page lists Platforms: PC (Microsoft Windows). Everyone who wants to play together needs a Windows Steam build — there is no cross-platform play because there is only one platform.",
    },
    {
      id: "nintendo-switch",
      heading: "Is Meccha Chameleon on Nintendo Switch?",
      body: "No. Insider Gaming states Meccha Chameleon is not playable on either the original Nintendo Switch or Switch 2, with no mention of a version in development. SlashSkill adds that while Switch 2 mouse-style controls would suit the paint tool better than a standard gamepad, that remains hypothetical — no Switch release exists. Community speculation about a future port appears in gaming press because party games often migrate to Switch after PC success, but treat any Switch listing outside Steam as unofficial or scam content until the developer announces through Steam News.",
    },
    {
      id: "playstation-xbox",
      heading: "PlayStation & Xbox — Not Available",
      body: "Insider Gaming confirms the game is unavailable on PlayStation 5 and all PlayStation consoles, and likewise not on Xbox Series X|S or past-gen Xbox. It is not on Xbox Game Pass. SlashSkill notes that as a smaller indie launch from developer lemorion_1224, console ports were likely low priority during the rapid PC patch cycle. Times of India echoes that PC remains the only way to experience the title today, though breakout sales could motivate future ports — nothing is confirmed.",
    },
    {
      id: "crossplay",
      heading: "Crossplay & Cross-Platform Play",
      body: "Meccha Chameleon does not support crossplay. Times of India explains that because the game is PC-only via Steam, every player in a lobby is already on the same platform — there is no PlayStation-to-PC bridge to configure. SlashSkill's crossplay guide confirms the same: friends need Windows PCs, Steam accounts, and their own game copy. Steam Family Sharing may let another household account access the library, but multiplayer still requires compatible Steam clients on Windows.",
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
      body: "consolepcgaming.com's v2.5.0 patch coverage notes an experimental color palette added for upcoming controller support — a signal the developer is exploring gamepad-friendly paint UI, separate from a console port announcement. Native controller support remains unlisted on Steam at community report time; Steam Input workarounds still apply until patch notes confirm full gamepad support.",
    },
    {
      id: "playing-with-friends",
      heading: "How Console-Only Friends Can Play",
      body: "If your friend group owns only PlayStation, Xbox, or Switch hardware, MECCHA CHAMELEON cannot join them on those devices today. Options players discuss: one friend buys or borrows a cheap Windows mini PC or laptop for party nights; remote play from a host PC via Steam Remote Play (paint precision suffers); or wait for any future port announcement on Steam News. For groups already on PC, private Steam lobbies work without crossplay configuration — see Private Lobby Guide.",
    },
    {
      id: "watch-for-announcements",
      heading: "How to Track Future Platform News",
      body: "Official platform changes would appear on the Steam store page, Steam News feed for App 4704690, and the developer's linked social accounts — not fan wiki speculation. Meccha Wiki updates this guide when verified ports ship. Until then, searching Is Meccha Chameleon on Switch, Mecha Chameleon PS5, or メッチャカメレオン Switch should land here plus Steam's official listing.",
    },
  ],
};
