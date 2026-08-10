import type { Guide } from "./types";

export const allOfficialMapsGuide: Guide = {
  slug: "all-official-maps",
  title: "All Official Maps in Meccha Chameleon",
  category: "Maps",
  readTime: "10 min",
  excerpt:
    "Every official map as of v3.6.0 — launch roster, post-launch additions, HIKAKIN Museum, Egypt, Death Burger, Greece, Garten of Banban, Exit 8, and Deep Sea — with links to map pages on this site.",
  sources: [
    {
      name: "Wikipedia — Meccha Chameleon (map list)",
      url: "https://en.wikipedia.org/wiki/Meccha_Chameleon",
    },
    {
      name: "mecha-chameleon.net — All maps hub with difficulty table",
      url: "https://mecha-chameleon.net/maps",
    },
    {
      name: "IGN — All Maps & Best Hiding Spots",
      url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    },
    {
      name: "Steam v3.6.0 — Deep Sea map",
      url: "https://www.gamespark.jp/article/2026/08/08/170391.html",
    },
    {
      name: "Steam v3.5.0 — Exit 8 collab",
      url: "https://www.gamespark.jp/article/2026/08/01/170073.html",
    },
    {
      name: "Steam v3.1.0 — Garten of Banban",
      url: "https://www.gamespark.jp/article/2026/07/25/169747.html",
    },
    {
      name: "Steam v3.0.0 — Greece map",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-0-0-brings-players-to-greece/",
    },
    {
      name: "AUTOMATON — HIKAKIN Museum",
      url: "https://automaton-media.com/articles/newsjp/20260711-454477/",
    },
  ],
  content: [
    {
      id: "overview",
      heading: "How Many Official Maps Exist?",
      body: "As of v3.6.0 (August 7, 2026), the official pool includes the launch roster (Mansion, Indoor Country, Sewer, Backrooms, Cold Storage, Brick Loft), post-launch stages Penguin Hotel, Sugarland, and Osaka, plus HIKAKIN Museum (v2.6.0 collab), Egypt (v2.7.0), Death Burger (v2.8.0), Greece (v3.0.0), Garten of Banban (v3.1.0 collab — Banban's Kindergarten), Exit 8 (v3.5.0 collab — The Exit 8 / 8番出口), and Deep Sea (v3.6.0 underwater reef). Press counted Greece as the 11th numbered official stage; Banban, Exit 8, and Deep Sea continue the rapid map cadence. Collaboration maps can be excluded from random lottery by default. Custom maps add unlimited variety through Steam Workshop — subscribe carefully after the late-July malware reports.",
    },
    {
      id: "launch-maps",
      heading: "Launch Maps (June 9, 2026)",
      body: "Hide-and-Seek Mansion — beginner-friendly manor with large color blocks; recommended first map. Indoor Country — rustic farm interior with hay, crates, and cow standees; beginner difficulty per mecha-chameleon.net. Sewer — dark industrial pipes and graffiti; intermediate, strong ceiling meta. Backrooms — yellow wallpaper liminal offices; intermediate, re-sample every room. Cold Storage — expert metal shelving and cold grays. Brick Loft — exposed brick and iron stairs; medium difficulty.",
    },
    {
      id: "post-launch",
      heading: "Post-Launch Maps",
      body: "Penguin Hotel — added v1.2.0; ice-hotel theme; v2.7.0 adds random furniture elements so spots must be re-scouted. Sugarland — added v1.4.0: candy-themed saturated colors. Osaka — added v1.7.0, reworked v2.5.0: compact Japan streets. Egypt — added v2.7.0: desert/tomb palette, early pillar and alcove meta. HIKAKIN Museum — added v2.6.0 collab: photo walls, Misokin/ONICHA exhibits, special gimmicks; lottery default OFF in v2.7.0. Death Burger — added v2.8.0: burger horror amusement park; clown mascots and signage clutter. Greece — added v3.0.0: Santorini blue-and-white streets with sunset light; pairs with v2.9.0 emissive paint. Garten of Banban — added v3.1.0 collab: Banban's Kindergarten murals and signage (Game*Spark / Denfaminicogamer). Exit 8 — added v3.5.0 collab: underground corridor from The Exit 8 with anomaly-like chaos zones and a looping layout (Famitsu / Game*Spark). Deep Sea — added v3.6.0: underwater reef with tropical fish, jellyfish, coral, giant clams, seaweed, shipwreck debris, and a unicorn statue (Denfaminicogamer / Game*Spark); all spots experimental.",
    },
    {
      id: "why-maps-matter",
      heading: "Why Map Choice Changes Your Hide",
      body: "mecha-chameleon.net: camouflage that works in one room gets you spotted instantly in another because each map has distinct surfaces, lighting, and palettes. Mansion teaches sampling speed; Sewer and Backrooms punish lazy one-sample hides; Sugarland, Osaka, and Egypt reward exact color reads on saturated or mixed surfaces; HIKAKIN Museum rewards photo-wall and exhibit prop mimics; Greece rewards blue/white dual-samples and glow matching on sunset lit props; Banban rewards mural and poster-wall blends on colorful kindergarten art; Exit 8 rewards tile/sign dual-tones and anomaly-zone clutter over clean corridor camping; Deep Sea rewards coral/wreck prop mimics and dual-tone fish or jelly blends over open blue water.",
    },
    {
      id: "workshop",
      heading: "Official vs Workshop Maps",
      body: "Official maps ship with the game and work in any lobby without subscriptions. Workshop maps require every player to subscribe on Steam and restart so files download — join failures often trace to missing workshop content. After v3.1.0's MOD security patch, prefer trusted popular maps. Use official maps when testing connection or teaching new players.",
    },
    {
      id: "on-this-site",
      heading: "Map Pages on Meccha Wiki",
      body: "Browse /maps for per-map difficulty, color palettes, hotspots, and danger zones. Use /hidden-spots filtered by map for curated positions with source attribution. Newest pages cover Deep Sea, Exit 8, Garten of Banban, Greece, Death Burger, Egypt, and HIKAKIN Museum; spot databases expand as community verification continues.",
    },
  ],
};
