import type { Guide } from "./types";

export const bestMapsRankedGuide: Guide = {
  slug: "best-maps-ranked",
  title: "Best Maps Ranked for Hiders and Learning",
  category: "Maps",
  readTime: "7 min",
  excerpt:
    "Community difficulty ratings and IGN/mecha-chameleon.net map tiers — where to learn, where to graduate, and which maps punish bad paint hardest.",
  sources: [
    {
      name: "mecha-chameleon.net — Map difficulty table",
      url: "https://mecha-chameleon.net/maps",
    },
    {
      name: "IGN — All Maps in Meccha Chameleon",
      url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    },
    {
      name: "mecchachameleongame.wiki — Hider Guide (map progression)",
      url: "https://mecchachameleongame.wiki/hider-guide/",
    },
  ],
  content: [
    {
      id: "ranking-method",
      heading: "How This Ranking Works",
      body: "This is not a proprietary tier list — it aggregates community difficulty labels from mecha-chameleon.net and learning progression from hider guides. Maps rank by how forgiving they are for beginners (large color blocks, readable rooms) versus how hard they punish outline errors, value mistakes, and open sightlines. Your lobby size and seeker skill still matter more than map tier.",
    },
    {
      id: "s-tier-learn",
      heading: "Best Maps to Learn (Beginner Tier)",
      body: "1) Hide-and-Seek Mansion — mecha-chameleon.net: Beginner / launch. Large furniture, shelves, paintings; strongest teaching map. 2) Indoor Country — Beginner / launch. Farm interior with hay and crates; forgiving rustic palette. Start here if Mansion queues are crowded — same skill floor, different color vocabulary.",
    },
    {
      id: "a-tier-intermediate",
      heading: "Intermediate — Skill Check Maps",
      body: "3) Sewer — Intermediate. Dark values, ceiling pipes, graffiti multi-color zones. Graduate here when Mansion survival is consistent. 4) Backrooms — Intermediate. Psychological layout; subtle wallpaper value shifts room to room. Re-test wall behavior after v1.2.0. 5) Sugarland — Intermediate / v1.4.0. Saturated candy colors reward confident blocking; sloppy paint stands out on bright surfaces. 6) Brick Loft — Medium. Warm brick with exposed second-floor sightlines.",
    },
    {
      id: "b-tier-advanced",
      heading: "Advanced — High Pressure Maps",
      body: "7) Penguin Hotel — Advanced / v1.2.0 (random elements in v2.7.0 — re-scout props). Ice blues, plush interiors, seeker-favored ballroom. 8) Osaka — Advanced / v1.7.0. IGN: smallest official map — clever positioning required; truck bed, signage height, shop clutter. 9) Egypt — Advanced / v2.7.0. Desert tomb palette; early pillar and alcove meta, open sand is lethal. 10) HIKAKIN Museum — Medium collab / v2.6.0. Photo walls and exhibit props; lottery default OFF in random mode. 11) Death Burger — Advanced / v2.8.0. Loud carnival signage; boundary paints and prop mimics; all spots experimental.",
    },
    {
      id: "expert-tier",
      heading: "Expert — Minimal Forgiveness",
      body: "11) Cold Storage — Expert per site map data. Cold steel gray mandatory; almost no decorative clutter — positioning and shelf shadows do all the work. Warm tones pop instantly. Best for players who already win on Sewer and Backrooms. Death Burger (v2.8.0) is still being mapped — treat it as advanced learning territory, not a ranked staple yet.",
    },
    {
      id: "seeker-perspective",
      heading: "Best Maps for Seeker Practice",
      body: "Mansion and Indoor Country teach sweep discipline with readable rooms. Sewer and Backrooms train ceiling checks and value-sensitive eyes. Osaka's compact layout favors fast second passes — good for learning systematic clears under time pressure.",
    },
    {
      id: "player-count",
      heading: "Map Size vs Lobby Size",
      body: "Osaka's small footprint gets crowded quickly — Steam store recommends 2–10 players; larger lobbies on compact maps reduce viable hide zones. Mansion and Backrooms absorb 8–10 players better. Match map choice to group size when hosting private rooms.",
    },
  ],
};
