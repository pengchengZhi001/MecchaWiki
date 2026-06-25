import type { Guide } from "./types";

export const mapStrategiesGuide: Guide = {
  slug: "map-strategies",
  title: "Official Map Strategy Compendium",
  category: "Maps",
  readTime: "18 min",
  excerpt:
    "Rotation fundamentals, danger zone avoidance, and win conditions for Mansion, Sewer, Backrooms, Penguin Hotel, Cold Storage, and Brick Loft.",
  content: [
    {
      id: "rotation-fundamentals",
      heading: "Rotation Fundamentals — Loops, Chokes, and Re-Sample Rules",
      body: "Rotation is how hiders turn a bad spot into a surviving round. Every official map has loops — paths that return you near your start without crossing open kill zones — and chokes — single-file exits seekers pre-aim. Learn one safe loop per map before learning fancy spots. Rotate along walls, not through room centers; walls give emergency eyedropper targets. Re-sample every time lighting or wallpaper value changes: Backrooms doorways, Mansion light-to-shadow transitions, Penguin Hotel ice-to-plush boundaries. Never rotate during seeker line-of-sight unless emergency recolor is already muscle memory. Sound discipline: tile and metal telegraph movement — cross quickly or wait for audio cover from other hiders being chased. Team hiders stagger rotations so seekers cannot follow two bodies into the same choke. Solo queue: prefer loops with three hide options so second seeker pass finds empty first option. Map pages on meccha.wiki list danger zones per layout — plan rotations that touch hotspots briefly and avoid danger zones entirely unless clock forces crossing. Draw loops on paper once per map if you struggle — spatial memory from a sketch beats dying the same corridor crossing ten times.",
    },
    {
      id: "mansion",
      heading: "Mansion — Loop Rotations and Room Color Memory",
      body: "Mansion is the teaching map with readable color blocks and forgiving sampling. Core loop: living room through study into side rooms and back via hallway — avoids ballroom center when possible. Color memory matters: library browns, kitchen reds, bathroom tile-grout pairs each need distinct samples stored mentally. Hot zones: study library shelves, side bathroom dual-texture, kitchen shelving backs. Danger zones: ballroom center, main stair landing where seekers sweep every round. Ceiling and prop mimics work on round two when seekers stay floor-trained — prep during countdown, not hunt phase. When chased from ballroom, cut through study corners rather than open living room. Seekers struggle to predict direction if you color-match per room instead of carrying living room beige into library shadow. Link verified Mansion spots from the hiding spot database before ranked-style lobbies — survival rates there reflect current patch wall-clips and bookshelf gaps. Mansion teaches rotation pacing: never spend more than five seconds in stair landing sightlines unless pre-locked and frozen.",
    },
    {
      id: "sewer",
      heading: "Sewer — Choke Points and Vertical Escapes",
      body: "Sewer rewards dark value matching and vertical thinking. Dominant palette is rust green pipe metal with charcoal junction floors — warm hiders die fast. Choke defense: hold pipe junctions with one entrance, pre-sample pipe flank, lock before seeker enters audio range. Never commit to dead-end pipes without exit plan — seekers box dead ends after first sweep learning. Hot zones: ceiling pipe maze, graffiti pattern walls, barrel tops from default camera height. Danger zones: open junction floor, lit side rooms that expose value errors. Rotation route: move overhead when possible, drop to graffiti zone under pressure, avoid central crossing unless team distracts. Graffiti requires multi-sample awareness — one flat tone fails on tag edges. Re-sample after ladder climbs; pipe color differs from wall rust. Sewer is the first map where ceiling routes separate intermediate from beginner — practice one ceiling hide per round before adding rotation complexity. Audio carries far in Sewer — coordinate team chases to mask your ladder descent.",
    },
    {
      id: "backrooms",
      heading: "Backrooms — Confusion Routes and Value Shifts",
      body: "Backrooms is psychological warfare built on repetitive yellow halls. Wallpaper yellow shifts subtly room to room — sample locally every threshold or die to value tell. Confusion route: hop between visually identical rooms to scatter seeker presence, but change sample each room; identical silhouette with wrong yellow is obvious to patient seekers. Hot zones: chair stacks, office corners with clutter. Danger zones: long fluorescent corridors, open office floors with desk sightlines. Avoid camping corridors even with good color — movement requirement for rotation exposes you. Wall-clip spots changed in v1.2.0 — verify favorites on meccha.wiki before trusting old clips. Audio: fluorescent hum hides quiet steps but not sprints across open office. Fake direction by entering one identical room and exiting adjacent parallel hall. Backrooms punishes lazy sampling more than bad positioning — rotation fundamentals here are re-sample fundamentals. Bring patience: seekers who know identical-room layout will cut you off if you repeat the same hop pattern twice in one round.",
    },
    {
      id: "penguin-hotel",
      heading: "Penguin Hotel — Ice, Plush, and Ballroom Crossings",
      body: "Penguin Hotel mixes ice blues, white sculpture tones, and plush interior warmth. Switch samples near zone boundaries — ice lobby to plush gallery is a color cliff. Hot zones: ice sculpture lobby blend behind props, plush gallery bookcases. Danger zones: ballroom center traffic, pool deck reflections, open hallways between themed doors. Ballroom is seeker-favored — cross fast with pre-sampled pose or use ceiling and rafter routes if verified on your patch. Pool tiles reflect movement instantly; minimize time on deck even with good blue match. Prop mimic on ice sculptures rewards statue-colored samples, not wall behind. Rotation: plush rooms to side halls, avoid long hallway sightlines when clock allows wall-hugging routes. Team play: one hider drawing ballroom seekers enables plush room locks — coordinate without voice spam. Hotel difficulty sits medium but punishes reflective zones harder than Mansion punishes open floor. Ice-to-plush transitions are the number-one Hotel death — re-sample at every themed doorway even when hue looks close enough from memory.",
    },
    {
      id: "cold-storage",
      heading: "Cold Storage — Shelf Depth and Aisle Discipline",
      body: "Cold Storage is expert territory: cold steel gray shelving, meat props, minimal decorative clutter. Warm tones pop instantly — mandatory steel gray sampling. Hot zones: meat shelf row, rear shelf depth with lowest seeker check rate in community data. Danger zones: loading platform open floor, main aisle crossings where seekers pre-aim. Shelf gaps are tight — time entry and exit; frost on floor can telegraph movement if you shuffle. Rotation along rear rows beats crossing aisles mid-round. Seekers slow-check aisle depth — hiders win by staying back row until clock forces move. Pipe corners offer emergency darker value only. Do not fight loading bay unless endgame clock demands choke cross. Cold Storage teaches patience: one deep shelf hide beats three panic rotations. Cross-reference meat row spots on meccha.wiki — survival rates here separate serious hiders from map tourists. Treat every aisle cross as a mini boss fight — pre-sample both walls before you commit.",
    },
    {
      id: "brick-loft",
      heading: "Brick Loft — Vertical Sightlines and Brick Hue Shift",
      body: "Brick Loft combines exposed brick warm browns, iron stairs, and vintage furniture with punishing vertical sightlines. Brick hue shifts orange-red to deep brown by wall — sample per wall section, not once per floor. Hot zones: brick beam gap horizontal lines, pipe cluster crawl spaces under industrial pipes. Danger zones: second floor open floor with 360 railing sightlines, window walls that backlight hiders. Second floor gives seekers height advantage — camping open loft floor dies to railing scans. Rotation: use pipe clusters and beam gaps on first floor, ascend only with pre-planned sample at top landing shadow. Stairwell is vertical chase arena — transit quickly, do not camp. Window walls lethal in daylight rounds — avoid backlit poses entirely. Brick Loft rewards pattern alignment: pose lock with mortar lines breaks silhouette. Pair map page danger zone list with rotation plan before queue — loft losses often come from beautiful spots with fatal sightlines. First-floor pipe clusters are the safest teaching zones before you touch second-floor rotations.",
    },
    {
      id: "danger-zones",
      heading: "Danger Zone Avoidance — When Not To Fight",
      body: "Danger zones are map regions where even good color loses to geometry and traffic. Universal rule: do not home in danger zones — cross them or skip them. Mansion ballroom and stair landing, Sewer junction and lit rooms, Backrooms corridors and open office, Penguin Hotel pool and ballroom center, Cold Storage loading bay and aisle crosses, Brick Loft second floor open and window walls. Crossing technique: pre-sample at entry wall, lock flat pose, move on seeker back-turn or teammate chase audio, re-sample immediately on exit shadow. If spotted mid-cross, emergency recolor at nearest textured surface then exit zone — do not duel in kill box. Clock endgame sometimes forces danger crossing — choose narrowest angle and shortest path. Seekers farm danger zones for free finds — hiders who respect avoidance win more than hiders who master one hot spot inside a kill box. Mark personal no-fight list per map after three deaths in same zone — usually positioning error masquerading as bad luck. Official map pages on meccha.wiki tag danger zones by name — memorize them per map before you queue ranked-style with friends.",
    },
    {
      id: "win-conditions",
      heading: "Win Conditions — Survival, Clock, and Team Tradeoffs",
      body: "Map strategy is not only hiding — it is choosing win conditions per round state. Early round: survival and information denial — stay off seeker sweep paths, force slow clears. Mid round: trade decoy movement from teammates for deep locks in hot zones with verified survival rates. Late round: clock becomes win condition — even imperfect color in a choke cross beats perfect color in an exposed spot if timer favors seekers. Solo queue win condition is personal survival to top three; team queue adds revive and distraction trades on some modes — know your lobby rules. Seekers win by collapsing space; hiders win by making space ambiguous until clock breaks. On expert maps like Cold Storage, win condition is often one deep shelf hide without rotation — rotation is loss. On Backrooms, win condition is confusion plus local re-sample every hop. Align your spot choice with how this round should end, not how a clip looked on YouTube. Write win condition on a sticky note before queue if you tend to over-rotate — one line keeps mid-round panic decisions honest.",
    },
  ],
};
