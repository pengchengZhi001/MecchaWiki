import type { Guide } from "./types";

export const tipsAndTricksGuide: Guide = {
  slug: "tips-and-tricks",
  title: "Meccha Chameleon Tips and Tricks — Hider & Seeker Guide",
  category: "Strategy",
  readTime: "11 min",
  excerpt:
    "Essential Meccha Chameleon tips and tricks: paint shortcuts, pose discipline, seeker scan habits, map meta, workshop tricks, and viral clip setups — aggregated from IGN, TheGamer, and community databases.",
  seoKeywords: [
    "tips and tricks",
    "tips",
    "tricks",
    "hider tips",
    "seeker tips",
    "Mecha Chameleon",
  ],
  sources: [
    {
      name: "IGN — Meccha Chameleon Tips and Tricks",
      url: "https://www.ign.com/wikis/meccha-chameleon/Meccha_Chameleon_Tips_and_Tricks",
    },
    {
      name: "GameRant — Tips and Tricks (modes & taunt)",
      url: "https://gamerant.com/meccha-chameleon-tips-tricks-guide/",
    },
    {
      name: "9Puz — Paint, Pose, Freeze walkthrough",
      url: "https://9puz.com/2384-meccha-chameleon-walkthrough/",
    },
  ],
  content: [
    {
      id: "paint-tricks",
      heading: "Paint Tips — Sample, Light, Finish, Freeze",
      body: "Tip one: sample lit and shadow separately on gradient walls — one color is never enough on Mansion plaster or Backrooms yellow. Tip two: prioritize value (dark vs light) over perfect hue when rushed; seekers spot brightness before undertone. Tip three: use metallic/roughness sliders on glossy bathroom tile and Penguin Hotel ice — wrong roughness flashes like a mirror. Tip four: Spacebar quick eyedropper inside the paint menu saves prep seconds. Tip five: there is no undo button — paint over mistakes manually and resize brush for edges.",
    },
    {
      id: "pose-tricks",
      heading: "Pose Tips — Break Your Silhouette",
      body: "Flat wall poses fail on open sightlines — tuck into shelves, pipes, or prop clusters instead. Crouch under furniture beats standing flat on bathroom tile. Object mimic on Penguin Hotel ice sculptures and Indoor Country cow standees breaks the human rectangle. Lock pose during prep, not after hunt starts. Wall-stick poses show a release key on HUD — read it before panic. v1.8.0 added 11 emotes on the R-key wheel — social emotes differ from competitive freeze poses; know which you picked.",
    },
    {
      id: "hider-tricks",
      heading: "Hider Tricks That Win Rounds",
      body: "Prep during countdown, not during hunt — seekers watch ceilings on viral maps. Go darker when unsure: light in shadow reads as a sticker. Single-approach corners beat open junctions — you hear seekers coming. Bait and reset: let seekers glimpse you leaving a room, sample inside the next, lock early. After surviving a partial scan, freeze five full seconds — seekers abandon rooms after two failed sweeps. Whistle on 1 key can misdirect when hosts allow manual taunt — noise does not pinpoint exact position (DualShockers). Use free camera after hiding to study seeker routes for the next round.",
    },
    {
      id: "seeker-tricks",
      heading: "Seeker Tricks — The Room Scan Method",
      body: "Sweep chest height, then crouch baseboards, then glance up for ceiling meta on Sewer and Mansion. Tag value mismatches before hunting perfect hue — a slightly warm blob on cold steel is a hider. Check prop clusters twice — prop mimic and hay piles hide human lumps in Indoor Country. Listen before you look: footsteps on tile and pose animation audio beat slow visual scans. In large lobbies, enable or negotiate hunter ammo limits (v2.3.0 host setting) to stop random spray tagging. Use results screen answer check after rounds to see missed spots and teach your group.",
    },
    {
      id: "map-tricks",
      heading: "Map-Specific Tricks",
      body: "Mansion: rear bookshelf rows break outline — sample spine shadow, not facing spines. Sewer: ceiling pipes sit above default camera; dark gray on rust-green metal disappears. Backrooms: re-sample every doorway — yellow shifts room to room. Penguin Hotel: avoid open ballroom center; ice sculpture zones reward cold blues. Cold Storage: deepest shelf back row — seekers hate checking every gap. Workshop: read color count before dropping — 3-color maps favor hiders, 8-color maps punish one-sample players.",
    },
    {
      id: "multiplayer-tricks",
      heading: "Multiplayer & Friend Lobby Tricks",
      body: "Unique server names beat generic \"Hide and Seek\" in Find Server. Recreate rooms after patch days — stale session IDs fail even with correct passwords. For 4–6 player learning lobbies, Mansion plus forced taunt off keeps prep calm. Streamers: password rooms until rules are explained — public lobbies risk spectator leaks and griefing. Cross-check everyone subscribed to workshop maps before host picks custom layout.",
    },
    {
      id: "viral-tricks",
      heading: "Viral Clip Tricks (Verify After Patches)",
      body: "Horse statue prop mimic, ceiling pillar perches, and Backrooms wall-yellow blends drove launch-week clips — many rely on pre-v1.2.0 geometry. Kotaku and Northernlion popularized Mansion horse statue meta; test in private lobby before ranked chaos. Library shelf gap and Penguin ice sculpture blends still work when color and pose match. Clips skip the thirty-second prep — replicate setup, not just camera angle.",
    },
    {
      id: "mistakes",
      heading: "Tricks That Stop Working — Common Traps",
      body: "Running when spotted instead of sample-lock-freeze. Camping obvious props without prop-colored paint. Moving during seeker line-of-sight. One-color mindset on Backrooms halls. Fighting in rotation paths (ballroom centers, fluorescent corridors). Copying YouTube wall-clips without checking patch notes — v1.2.0 reduced geometry merge exploits. Trust editorial-rated database spots over friend anecdotes in public queue.",
    },
    {
      id: "quick-reference",
      heading: "Quick Reference Card",
      body: "Hiders: spot → pose → Spoid two tones → paint → freeze → stay still. Seekers: walls → corners → crouch → ceiling glance → listen. Everyone: F paint, R pose, Esc settings, -dx11 if shaders stutter. Deep dives: How to Play, Controls Guide, Color Matching, Hunter Guide, hidden spot database. Mecha Chameleon and Mecca Chameleon searches land here — same tips apply.",
    },
  ],
};
