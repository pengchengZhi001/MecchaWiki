import type { Guide } from "./types";

export const resultsScreenGuide: Guide = {
  slug: "results-screen-guide",
  title: "Results Screen & Answer Check — Learn From Every Round",
  category: "Beginner",
  readTime: "7 min",
  excerpt:
    "SlashSkill and mecchachameleonwiki.com describe the post-round reveal — every hider position, paint colour, pose, and missed spots — plus v1.2.x Missed Spot ranking for seekers.",
  sources: [
    {
      name: "SlashSkill — Answer check explained",
      url: "https://www.slashskill.com/meccha-chameleon-answer-check-and-color-picker-explained-master-the-eyedropper-and-color-matching/",
    },
    {
      name: "mecchachameleonwiki.com — Results screen & Missed Spot",
      url: "https://mecchachameleonwiki.com/en/gameplay/",
    },
    {
      name: "Mobalytics — Round results as learning loop",
      url: "https://mobalytics.gg/news/guides/meccha-chameleon-tips-and-tricks",
    },
    {
      name: "Steam Reviews — round-end gallery feature request",
      url: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
    },
  ],
  content: [
    {
      id: "what-is-answer-check",
      heading: "What the Results Screen Shows",
      body: "SlashSkill calls it the answer check: once the seeking phase ends, the game reveals where every hider was positioned, the paint colour they used, and whether outline and pose still read as natural from seeker angles. Mobalytics describes the same beat as reliably the funniest part of the match — and the most useful, because it shows exactly why disguises survived or failed. This is not a passive scoreboard pause; it is the fastest feedback loop for learning what works in a live lobby. mecchachameleonwiki.com confirms the results screen runs when seekers find everyone or the timer hits zero.",
    },
    {
      id: "missed-spot-ranking",
      heading: "Missed Spot / Missed Enemies Ranking (Seekers)",
      body: "mecchachameleonwiki.com documents a Missed Spot / Missed Enemies ranking that lists hiding spots and hiders you walked past — added around v1.2.0 with UI toggles in v1.2.1–v1.2.2 so players can show, hide, or disable the panel if they do not want spots spoiled between rounds. The official scoring formula weights are not published; community guides treat the list as qualitative feedback (which zones you skipped) rather than exact point math. Seekers should screenshot or mentally note high-frequency misses — library rear rows, Sewer pipe tops, Indoor Country standee lines — and pre-aim those zones next round on the same map.",
    },
    {
      id: "hider-learning",
      heading: "What Hiders Should Study",
      body: "After elimination or round end, compare your paint to the revealed angle: did value break first, pose second, or spot choice third? SlashSkill recommends tracing whether colour, spot, or pose failed — often all three contribute. White elbow gaps and glossy roughness mistakes show clearly on the reveal camera. If you survived, watch which seekers walked past and whether forced taunt audio drew them off — allthings.how whistle guides apply. Steam reviews still request a dedicated round-end gallery or elimination snapshot for mid-round tags; until that ships, the full results screen after timer or total tags is the primary group learning tool.",
    },
    {
      id: "spoiler-etiquette",
      heading: "Spoiler Etiquette in Friend Groups",
      body: "v1.2.2's hide-missed-spots button exists because some groups do not want the next round's meta spoiled by seeing exact coordinates. Competitive learning lobbies: leave reveals on, discuss one teaching point per round. Content creation: clip the results beat — Mobalytics and streamer communities treat it as peak comedy. Tournament-style rematches on the same map: consider hiding missed-spot UI so hiders retain surprise, or rotate maps instead. Communicate house rules before prep phase; arguing during reveal wastes the teaching moment.",
    },
    {
      id: "vs-steam-requests",
      heading: "Results Screen vs Steam Feature Requests",
      body: "Helpful Steam reviews ask for a picture of your hide when eliminated mid-round so everyone — not only the tagging seeker — appreciates clever setups. Current behaviour per SlashSkill and wiki sources: full-party reveal happens at round end; live elimination may only show the tagging seeker full context in the moment. Workaround between rounds: eliminated hiders use free camera (4 key) to spectate remaining players and study setups — documented in Controls help. Iconic Moments on this site catalogs verified viral hides you can study when reveal UI is disabled.",
    },
    {
      id: "practice-loop",
      heading: "Build a Results-Driven Practice Loop",
      body: "Run three private Mansion rounds with reveals on. Round one: note one missed seeker zone from Missed Spot list. Round two: hiders exploit that zone; seekers pre-aim it. Round three: rotate to Sewer or Indoor Country prop-mimic spots and repeat. Pair reveals with our Why Keep Getting Found guide when the answer check shows gloss traps or flat-wall silhouettes. Within a week, most groups report faster improvement than grinding public queue without post-round review — because MECCHA CHAMELEON makes mistakes instantly readable.",
    },
  ],
};
