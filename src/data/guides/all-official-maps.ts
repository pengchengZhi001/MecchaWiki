import type { Guide } from "./types";

export const allOfficialMapsGuide: Guide = {
  slug: "all-official-maps",
  title: "All Official Maps in Meccha Chameleon",
  category: "Maps",
  readTime: "9 min",
  excerpt:
    "Every official map as of v1.7.0 — launch maps, post-launch additions (Penguin Hotel, Sugarland, Osaka), and links to map pages on this site.",
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
      name: "Steam v1.7.0 announcement — Osaka added",
      url: "https://consolepcgaming.com/osaka-arrives-in-meccha-chameleons-1-7-0-update/",
    },
  ],
  content: [
    {
      id: "overview",
      heading: "How Many Official Maps Exist?",
      body: "Wikipedia and community map databases list nine playable official maps as of the v1.7.0 update (June 22, 2026): Hide-and-Seek Mansion, Indoor Country, Sewer, Backrooms, Penguin Hotel, Sugarland, Osaka, plus Cold Storage and Brick Loft from the launch roster. Custom community maps add unlimited variety through Steam Workshop — subscribe before joining lobbies that use them.",
    },
    {
      id: "launch-maps",
      heading: "Launch Maps (June 9, 2026)",
      body: "Hide-and-Seek Mansion — beginner-friendly manor with large color blocks; recommended first map. Indoor Country — rustic farm interior with hay, crates, and cow standees; beginner difficulty per mecha-chameleon.net. Sewer — dark industrial pipes and graffiti; intermediate, strong ceiling meta. Backrooms — yellow wallpaper liminal offices; intermediate, re-sample every room. Cold Storage — expert metal shelving and cold grays. Brick Loft — exposed brick and iron stairs; medium difficulty.",
    },
    {
      id: "post-launch",
      heading: "Post-Launch Maps",
      body: "Penguin Hotel — added v1.2.0 (June 13, 2026 per Japanese gaming press cited on Wikipedia): ice-hotel theme, ballroom and ice sculptures. Sugarland — added v1.4.0 (June 17, 2026): candy-themed saturated pinks, mints, and chocolates; intermediate. Osaka — added v1.7.0 (June 22, 2026): Japan-themed streets with signage, storefronts, and lanterns; smallest official map per IGN, advanced difficulty.",
    },
    {
      id: "why-maps-matter",
      heading: "Why Map Choice Changes Your Hide",
      body: "mecha-chameleon.net: camouflage that works in one room gets you spotted instantly in another because each map has distinct surfaces, lighting, and palettes. Mansion teaches sampling speed; Sewer and Backrooms punish lazy one-sample hides; Sugarland and Osaka reward bold, exact color reads on saturated or mixed urban surfaces.",
    },
    {
      id: "workshop",
      heading: "Official vs Workshop Maps",
      body: "Official maps ship with the game and work in any lobby without subscriptions. Workshop maps require every player to subscribe on Steam and restart so files download — join failures often trace to missing workshop content. Use official maps when testing connection or teaching new players.",
    },
    {
      id: "on-this-site",
      heading: "Map Pages on Meccha Wiki",
      body: "Browse /maps for per-map difficulty, color palettes, hotspots, and danger zones. Use /hidden-spots filtered by map for curated positions with source attribution. New maps Osaka, Sugarland, and Indoor Country have map overview pages; spot databases expand as community verification continues.",
    },
  ],
};
