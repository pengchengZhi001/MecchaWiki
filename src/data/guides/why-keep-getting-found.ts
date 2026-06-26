import type { Guide } from "./types";

export const whyKeepGettingFoundGuide: Guide = {
  slug: "why-keep-getting-found",
  title: "Why Do I Keep Getting Found? — 10 Hider Mistakes",
  category: "Strategy",
  readTime: "11 min",
  excerpt:
    "You matched the color but still lost. Community hider guides explain why: silhouette, lighting, movement, and prep timing beat perfect paint.",
  sources: [
    {
      name: "Mobalytics — How to Win as a Hider",
      url: "https://mobalytics.gg/news/guides/meccha-chameleon-hiding-guide",
    },
    {
      name: "mecchachameleongame.wiki — Hider Guide",
      url: "https://mecchachameleongame.wiki/hider-guide/",
    },
    {
      name: "dq7reimagined.com — Hider Guide (paint order & too-buried)",
      url: "https://dq7reimagined.com/meccha-chameleon/hider-guide/",
    },
  ],
  content: [
    {
      id: "wrong-problem",
      heading: "You Are Solving the Wrong Problem",
      body: "Mobalytics and community hider guides agree: surviving is not about becoming invisible — it is about making seekers waste time proving you are a player before the clock runs out. Players who keep getting found often obsess over hue while ignoring silhouette, lighting, and movement. Seekers detect human-shaped outlines and brightness mismatches before they parse perfect RGB values. If you hide well by color but still look like a person-shaped lump, experienced seekers tag you in seconds.",
    },
    {
      id: "mistake-prep-time",
      heading: "Mistake 1 — Wasting Prep Phase Wandering",
      body: "The prep window is shorter than it feels. Mobalytics warns the most common loss is spending prep exploring instead of locking a zone early. Lock your hiding area in the first third of prep, sample colors immediately, and spend remaining time refining edges and pose. Players who wait for the \"perfect\" spot are often half-painted when hunt phase starts — and a half-painted white body is a free tag.",
    },
    {
      id: "mistake-flat-color",
      heading: "Mistake 2 — One Flat Color (No Light/Shadow)",
      body: "mecchachameleongame.wiki lists \"painting one flat color\" as a top beginner mistake: real surfaces have shadows, seams, and texture. dq7reimagined.com recommends painting bright sides and dark sides separately — one flat tone often looks pasted on. Sample a lit tone and a shadow tone when your spot spans both.",
    },
    {
      id: "mistake-outline",
      heading: "Mistake 3 — Ignoring Your Outline",
      body: "Human silhouettes stand out even when color is close. Community guides recommend poses that match nearby geometry — wall-flat for walls, crouch for furniture clusters, low profile for floor spots. Clutter forgives rough color; flat open walls do not. Patch v1.1.0 brightened shadows across stages, so dark-corner hiding alone may be less forgiving than guides from launch week suggested.",
    },
    {
      id: "mistake-moving",
      heading: "Mistake 4 — Moving While Seekers Watch",
      body: "Mobalytics: micro-movement is the single biggest tell experienced seekers watch for — one camera twitch or angle adjust and they have you. Lock pose before hunt starts and stay still. Plan escape routes mentally but do not keep glancing toward them. Relocate only when the seeker's back is turned or they have committed to another room.",
    },
    {
      id: "mistake-open-paths",
      heading: "Mistake 5 — Camping Rotation Paths",
      body: "Ballroom centers, Backrooms long corridors, and loading bays are where seekers pass every round — not where you live. Cross quickly or pick spots with single approach vectors so you hear them before they see you. Getting found on the first sweep usually means the spot failed before paint mattered: check doorway angle and body shape from the seeker's entry path.",
    },
    {
      id: "mistake-wrong-sample",
      heading: "Mistake 6 — Sampling Across the Room",
      body: "Eyedropper the pixel your body touches, not a similar wall three feet away. Lighting shifts value room to room — especially Backrooms wallpaper yellow and gradient bathroom tiles. Re-sample at every doorway when rotating.",
    },
    {
      id: "mistake-gloss",
      heading: "Mistake 7 — Wrong Metallic/Roughness (Gloss Trap)",
      body: "Community camouflage guides describe the \"gloss trap\": correct hue with wrong roughness still shimmers like a player model on metal or tile. Match roughness so your body reads matte on plaster and appropriately dull on pipes — seekers notice specular highlights before subtle hue errors.",
    },
    {
      id: "mistake-too-buried",
      heading: "Mistake 8 — Too-Buried Spots",
      body: "dq7reimagined.com warns that pushing too far into walls, shelves, or props triggers too-buried warnings — forcing the position can reveal your location. Depth is a tool, not the goal; pick spots with clean exit and believable placement.",
    },
    {
      id: "mistake-outdated",
      heading: "Mistake 9 — Outdated Spot Advice",
      body: "mecchachameleongame.wiki notes v1.2.0 changed Backrooms wall-stuck behavior. Copying YouTube or forum spots without checking patch version wastes prep on clips that no longer work. Re-test favorites after updates.",
    },
    {
      id: "how-hunters-spot",
      heading: "How Hunters Actually Spot You",
      body: "Seekers trained on public lobbies look for: shadows where none should exist, strange glints on normally matte surfaces, reflections that do not match the room, slightly broken patterns, colors that do not match 100%, and objects that look \"too perfect\" on a wall. They also over-check ceilings in sweaty lobbies — when meta pendulum swings, return to deep shelf backs and floor clutter. Fix structure and lighting first, then refine color.",
    },
    {
      id: "fix-order",
      heading: "Fix Order That Works",
      body: "Choose believable spot → set pose to break silhouette → sample local color → paint light and shadow → check metallic/roughness → lock before hunt → stay still. Pair this guide with our hidden spots database and color matching guide for map-specific palettes.",
    },
  ],
};
