import type { Guide } from "./types";

export const hunterGuide: Guide = {
  slug: "hunter-guide",
  title: "Complete Seeker Guide",
  category: "Role",
  readTime: "16 min",
  excerpt:
    "Systematic search methodology, audio tells, map-specific sweeps for all six official maps, team coordination, and endgame clock pressure.",
  content: [
    {
      id: "methodology",
      heading: "Search Methodology — Room-By-Room Discipline",
      body: "Seeking is not running until you bump a hider. Efficient seeking is structured denial of space. Start each sweep with a plan: which rooms have single exits, which are dead ends, which connect to rotation loops hiders favor. Enter a room and close the loop mentally before you leave — corners first, furniture backs second, open floor last. Most hiders die in corners and prop clusters, not center floor. First pass prioritizes color anomalies over movement; second pass prioritizes motion and audio. Do not double-back randomly — that lets hiders re-sample behind you. Mark cleared rooms only in your head or with team callouts; false confidence wastes time. On first round of a map, sweep fast to force panic relocations; on second round, slow down on ceiling and shelf depth where experienced hiders camp. Track where you found bodies last match — community spots on meccha.wiki cluster by map, and public lobbies repeat high-survival positions. Your job is to prove those spots before hiders lock. Methodology beats speed: a seeker who clears fewer rooms but clears them completely finds more hiders than a runner who opens twenty doors and checks none.",
    },
    {
      id: "sweep-order",
      heading: "Room Sweep Order — Low Exit First",
      body: "Sweep order matters because hiders escape toward multi-exit zones when pressured. Begin at dead-end rooms and choke points with one entrance — library alcoves, Cold Storage rear aisles, Sewer side pipes. Clear them completely before opening junctions. Junction rooms last, because crossing hiders expose themselves mid-sample. Within a room, sweep from door-adjacent corners outward so you never leave an unchecked wedge behind you. Height order: default camera, then look up at pipes and chandeliers, then crouch-check under desks and chair stacks. Many seekers never crouch; chair-stack hiders survive entire rounds because of that habit. Time-box difficult rooms: if library takes more than twenty seconds with no tell, call it partial and move — lingering lets other hiders win on clock. Rotate sweep direction each round so habitual hiders cannot predict your path. Pair sweep order with map knowledge from the Official Map Strategy Compendium on meccha.wiki for rotation fundamentals hiders use against you.",
    },
    {
      id: "spotting-tells",
      heading: "Spotting Tells — Hue, Silhouette, and Shadow",
      body: "Tells are inconsistencies seekers can train to see in under a second. Hue mismatch: a slightly green torso on gray pipe metal, warm shoulders on Cold Storage steel. Silhouette too regular: human-width vertical blocks on bookshelves where spines should vary. Shadow direction wrong: hider lit from fluorescent front while room shadow falls backward. Edge halos from partial sampling — shoulders one value, legs another. Color smear when hiders panic-move without re-locking. Prop mimic errors: statue pose with wall-colored body. Train spotting on Mansion library first; bookshelf rows expose outline errors faster than any other official zone. Squint while scanning — same trick hiders use for value becomes your anomaly detector. Do not chase every flicker; confirm with a second angle before committing, unless clock is critical. Experienced hiders minimize tells with dual-texture poses — your counter is slow angle changes, not faster running.",
    },
    {
      id: "audio-cues",
      heading: "Audio Cues — Footsteps, Ladders, and Lock Sounds",
      body: "Audio wins rounds when visuals tie. Footsteps on tile versus carpet telegraph room transitions on Mansion and Penguin Hotel. Metal grates and Sewer ladders have distinct climb sounds — hiders rotating through ceiling pipes reveal themselves before they paint. Object mimic and pose lock sometimes carry subtle audio cues depending on patch; listen during prep when hiders think seekers are not paying attention. Backrooms fluorescent hum masks quiet movement but not sprinting across open office floors. Cold Storage aisle crossings echo. Use headphones and normalize game audio; compressors on stream setups hide cues seekers need. When you hear movement in a cleared room, re-enter — hiders often relocate after you leave. Fake footstep exits work both ways: tap away from a room you intend to re-check. Team seekers should split audio coverage — one pushes visually, one holds door line listening. Public lobbies underrate audio; disciplined listening is free ELO.",
    },
    {
      id: "mind-games",
      heading: "Mind Games — Fake Leaves and Second Passes",
      body: "Mind games punish hiders who assume seekers play linearly. Fake leaving a room: step out, pause, re-enter immediately — panic relocators break color lock in doorways. On Backrooms, predict identical-room hopping: cut through parallel halls to intercept rotation instead of chasing one corridor forever. Pretend to check ceiling then sweep floor chairs — reverse on next room so patterns do not harden. Stare at empty corner to bait movement from opposite side. Second-pass psychology: hiders who survived first sweep often freeze five seconds assuming you left; use that window for slow re-entry. Do not overuse tricks; good hiders listen for double footsteps. Coordinate fake pushes with teammates — one seeker visible at east wing draws relocations west. Against elite hiders, mind games lose to systematic shelf-depth checks — balance deception with discipline. Record which tricks worked per map; Mansion responds to fake leaves, Cold Storage responds to aisle pressure more than feints.",
    },
    {
      id: "map-mansion-sewer-backrooms",
      heading: "Map-Specific Seeking — Mansion, Sewer, and Backrooms",
      body: "Mansion: check ceiling pillars and balcony sightlines on round two — hiders graduate overhead after surviving floor sweep. Library rear rows need crouch pass; bathroom tile catches value errors. Ballroom only holds perfect paint — quick scan then exit unless clock demands. Sewer: look up at ceiling pipes before barrel level — community meta lives overhead. Graffiti walls need pattern scan, not solid-color scan. Central junction is crossing kill zone; hold angles from pipe mouth rather than standing open floor. Lit side rooms expose warm-tone hiders instantly. Backrooms: identical rooms require value-sensitive eyes — slightly wrong yellow stands out when everything else matches wallpaper. Chair stacks in office zones, not long fluorescent corridors. Predict room-to-room hops by listening at door thresholds. Wall-clip spots were adjusted in v1.2.0 — re-check community database notes before assuming old clips work. These three maps cover most public queue rotation; master them before specializing in hotel or loft.",
    },
    {
      id: "map-hotel-storage-loft",
      heading: "Map-Specific Seeking — Penguin Hotel, Cold Storage, and Brick Loft",
      body: "Penguin Hotel: ballroom center is traffic hub — sweep props fast but do not camp; hiders cross to plush rooms. Ice sculpture lobby hides prop mimics — compare sculpture edge to wall edge. Pool deck reflections expose movement; listen for tile steps. Plush gallery bookcases need depth check like Mansion library. Cold Storage: slow aisle walks — hiders live in shelf depth, not aisle centers. Check rear row gaps before declaring aisle clear. Warm-tone hiders pop on steel; scan for saturation before shape. Loading bay is rotation choke — pre-aim when clock low. Brick Loft: second floor gives you height advantage — use railing sightlines down to first floor pipes. Window walls backlight hiders — scan silhoettes against glass. Brick beam gaps hide horizontal poses; shift angle along beam axis. Stairwell is vertical chase arena — avoid solo commit without teammate on alternate floor. Expert seekers map these three by survival-rate spots listed on meccha.wiki and clear them in priority order each round.",
    },
    {
      id: "team-coordination",
      heading: "Team Coordination — Split, Call, and Close",
      body: "Team seeking multiplies coverage when roles are explicit. Split by wing or floor, not random wandering — overlapping sweeps waste clock. Callouts: cleared, contested, heard movement, spotted color — not long stories. One seeker drives hiders toward choke points while another holds exit. Avoid both seekers entering the same dead-end library simultaneously unless one guards door. On six-plus hider lobbies, designate a clock watcher who breaks stalemates by forcing open zones. Revive awareness if your mode includes it — body location tells next hider cluster. Public voice lobbies benefit from short map-native callouts: mansion lib clear, sewer pipes up, back office chairs. Do not reveal strats to hider-side friends in same lobby. After round, note which teammate clears which zone fastest and repeat pairing. Uncoordinated teams lose to average hiders with three verified spots; coordinated teams collapse survival-rate clusters on meccha.wiki in one sweep cycle.",
    },
    {
      id: "endgame-clock",
      heading: "Endgame Clock Pressure — When To Stop Searching and Start Closing",
      body: "Endgame begins when remaining hiders outnumber comfortable sweep time — usually last two to three hiders under forty seconds. Shift from thorough clears to space denial: hold rotation choke points on Sewer junction, Backrooms door lines, Cold Storage aisle mouths. Stop fake leaves; hiders who survived this long freeze better under deception. Prioritize spotted tells over new rooms — partial color anomaly in known hot zone beats exploring cold wing. Force movement with audio pressure: sprint near shelf row to trigger panic recolor mistakes. On Mansion, cut ballroom to study loop. On Brick Loft, split floor coverage so second story cannot free-rotate. Last hider often sits highest survival-rate spot in database — go there with confidence after clearing decoys. Clock losses feel random but are usually uncommitted choke holds. Practice endgame drills with friends: one hider, thirty seconds, seeker team only — builds closing instinct without full lobby noise. When the timer hits single digits, communicate who holds choke versus who clears last known hotspot — overlapping commits lose winnable rounds.",
    },
    {
      id: "warmup-routine",
      heading: "Seeker Warm-Up — Training Eyes Before Ranked Lobbies",
      body: "Before a long seeker session, run a five-minute warm-up on Mansion library or Cold Storage rear aisle. First pass: scan for value only, ignore furniture names. Second pass: crouch every third room. Third pass: audio-only — close eyes briefly at door and listen for tile or metal. Warm-up calibrates your anomaly detection so first real round is not spent adjusting. Track false positives — every wrong click on a shadow trains hesitation; confirm angle before commit unless clock demands. Seekers who warm up find chair-stack hiders that cold-start seekers walk past. Note which official map you seek worst and warm there specifically; meccha.wiki map danger zones list where hiders cluster endgame. Warm-up is not glamorous but separates seekers who clutch last-second wins from seekers who blame RNG.",
    },
  ],
};
