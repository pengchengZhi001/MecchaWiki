import type { Guide } from "./types";

export const emotesPosesGuide: Guide = {
  slug: "emotes-poses-guide",
  title: "Emotes & Pose Wheel — v1.8.0's 11 New Emotes Explained",
  category: "Mechanics",
  readTime: "8 min",
  excerpt:
    "Update v1.8.0 added 11 emotes to the R-key pose wheel. GameRant, 9Puz, and mecchachameleon.net document multi-wheel navigation, whistle/taunt on 1, and spectator emotes after elimination.",
  sources: [
    {
      name: "mecchachameleon.net — v1.8.0 patch notes (11 emotes)",
      url: "https://mecchachameleon.net/updates",
    },
    {
      name: "FandomWire — Update 1.8.0 emote batch",
      url: "https://fandomwire.com/meccha-chameleon-update-1-8-0-update-notes/",
    },
    {
      name: "GameRant — Pose wheel navigation",
      url: "https://gamerant.com/meccha-chameleon-poses-guide/",
    },
    {
      name: "9Puz — R pose wheel & 1 taunt HUD bindings",
      url: "https://9puz.com/2384-meccha-chameleon-walkthrough/",
    },
    {
      name: "allthings.how — Whistle vs spectator taunt",
      url: "https://allthings.how/meccha-chameleon-whistle-how-the-auto-and-manual-whistle-work/",
    },
    {
      name: "Steam Discussions — TAUNT IS NOT WORKING",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541826108933277/",
    },
  ],
  content: [
    {
      id: "v18-emotes",
      heading: "What v1.8.0 Added (June 24, 2026)",
      body: "mecchachameleon.net and FandomWire describe update v1.8.0 as the largest single social content drop since launch: 11 brand-new emotes added alongside Osaka clip fixes and a Basic Mode elimination visibility fix. Official patch notes at community report time do not list individual emote names — players discover them through the same pose wheel used for hide shapes. Treat the batch as extra social and silhouette options in the R menu, not a separate emote shop. Verify your client build shows v1.8.0+ before expecting the expanded wheel.",
    },
    {
      id: "open-wheel",
      heading: "How to Open the Pose / Emote Wheel",
      body: "Community controls consensus: hold R to open the pose wheel (9Puz HUD reference, mecchachameleongame.wiki Steam discussion answer). Move the mouse toward the highlighted segment you want; release R when the slice turns blue (GameRant pose guide). GameRant adds pagination: right-click or left-click while holding R cycles to a second pose wheel — important after v1.8.0 because new emotes slot into the expanded menu rather than replacing old hide poses. Set hide poses during prep phase, not after seekers spawn — movement during hunt breaks lock and creates tells.",
    },
    {
      id: "poses-vs-emotes",
      heading: "Hide Poses vs Social Emotes",
      body: "Best Pose Guide on this site separates survival poses (wall-flat, crouch, floor profile, prop mimic) from party emotes. dq7reimagined.com build order still applies: spot → paint → pose that fits geometry → freeze. v1.8.0 emotes expand expression and clip potential but do not replace silhouette discipline — a funny emote on an open ballroom floor still dies in one sweep. Use emotes when eliminated (spectator taunt) or when your lobby treats them as misdirection bait, not as default prep on competitive hides.",
    },
    {
      id: "whistle-taunt",
      heading: "Whistle / Taunt (1 Key) vs Emote Wheel",
      body: "9Puz documents the 1 key for manual taunt / whistle when hosts enable related settings — confirm your bind in Esc → Settings → Controls after patches. allthings.how: during hunt phase, voluntary whistle resets forced auto-whistle countdown (~45 seconds when enabled); after elimination, whistle is spectator taunt only with no hide-timer effect. dq7reimagined.com frames sound as bait when seekers are far, silence when they are adjacent. Steam thread \"TAUNT IS NOT WORKING!\" (June 23, 2026) reports lobby-only taunt success with in-match failures on some builds — see Troubleshooting help if your key does nothing on the map.",
    },
    {
      id: "surface-poses",
      heading: "Surface Attachment Poses (Not on the Wheel Alone)",
      body: "9Puz walkthrough documents surface positioning separate from the R wheel: SHIFT attaches or releases wall/ceiling stick; CTRL and SPACE move down/up along attached surfaces — how players reach ceiling lips and wall perches. ESC menu fine-tunes upper-body angles on awkward spots per 9Puz. These mechanics pair with wheel poses: pick a flat or compact wheel shape first, then attach to geometry. Too-buried warnings still apply — depth is not free invisibility.",
    },
    {
      id: "spectator-emotes",
      heading: "Spectator Emotes After Elimination",
      body: "Controls help cites 5 then 4 for spectator follow and free-fly camera after you are out. allthings.how: whistle becomes pure social taunt in spectator mode — provoke seekers, entertain stream chat, no survival timer interaction. v1.8.0 emotes likely appear in the same wheel for eliminated players; community clips use this beat for comedy. Streamers should warn viewers that late-join spectator leaks are a separate fairness issue — see Public Lobby Guide.",
    },
    {
      id: "controller-note",
      heading: "Controller Players & the Wheel",
      body: "dq7reimagined.com beginner table lists Y for whistle/taunt on controller-style bindings when using Steam Input maps — not native support. Radial pose wheel on thumbstick is harder than mouse highlight selection; see our Controller Support guide for Steam Deck trackpad layouts. Test emote wheel in a private lobby before public prep timers.",
    },
    {
      id: "next-steps",
      heading: "Next Steps",
      body: "Pair emote knowledge with Best Pose Guide for silhouette matching, Game Modes Guide for forced taunt host settings, and Prop Mimic & Cluster Guide when wheel poses must merge with object geometry. Browse Indoor Country cow standee spots for poses that sell prop mimics on camera.",
    },
  ],
};
