import type { Guide } from "./types";

export const howToPaintBetterGuide: Guide = {
  slug: "how-to-paint-better",
  title: "How to Paint Better in Meccha Chameleon",
  category: "Technique",
  readTime: "10 min",
  excerpt:
    "Brush size, Spacebar eyedropper, metallic/roughness sliders, and the prep workflow players report on Steam and in control guides — fixes for \"eyedropper picks wrong color\" and \"brush too big.\"",
  sources: [
    {
      name: "Games Fuze — Painting mechanics beginner guide",
      url: "https://gamesfuze.com/guides/meccha-chameleon-complete-beginners-guide-painting-mechanics-tips/",
    },
    {
      name: "Steam Discussions — Eyedropper not picking right colors",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541224066061076/",
    },
    {
      name: "mecchachameleongame.wiki — Controls (brush resize, Spacebar)",
      url: "https://mecchachameleongame.wiki/controls/",
    },
    {
      name: "SlashSkill — Color picker explained",
      url: "https://www.slashskill.com/meccha-chameleon-answer-check-and-color-picker-explained-master-the-eyedropper-and-color-matching/",
    },
  ],
  content: [
    {
      id: "paint-menu-basics",
      heading: "Open Paint Mode and Learn the Tools",
      body: "Press F to enter paint mode (confirm in Settings after patches). Games Fuze and control guides describe the workflow: F opens palette, brushes, eyedropper, and metallic/roughness sliders. Left mouse button applies paint. Middle mouse (scroll wheel click) orbits the camera while painting so you can check your back and sides without walking. Scroll wheel zooms in/out for detail work.",
    },
    {
      id: "brush-size",
      heading: "Brush Too Big — Resize With Right Click + Drag",
      body: "Multiple control guides confirm: hold Right Mouse Button and drag left to decrease brush size, drag right to increase. Use a large brush for quick base coat on torso and limbs, then shrink the brush for seams, tile lines, graffiti edges, and joint gaps (elbows, knees, neck — \"white elbow syndrome\" is a common detection failure in community camouflage threads). mecchachameleongame.wiki: intentional brush sizing beats full-body strokes every round.",
    },
    {
      id: "spacebar-eyedropper",
      heading: "Eyedropper Inaccurate — Use Spacebar",
      body: "Steam thread \"(BUG) Eyedropper Not Picking the Right colors\" reports players hovering green and getting red, or blue lockers sampling as brown. Thread replies confirm: \"Press space for an accurate eyedropper\" — multiple users report Spacebar works when click-based sampling fails. Point at the surface in paint mode and press Spacebar to sample. Always sample the pixel adjacent to where your pose places your body, not a lit patch across the room.",
    },
    {
      id: "lighting-mismatch",
      heading: "Why Colors Look Wrong After Sampling",
      body: "Steam and SlashSkill explain: the eyedropper reads lit appearance including dynamic shadows and highlights — not always the base wall color you expect. If the sample sits too dark or too light, nudge brightness and HSV sliders in the paint menu instead of re-sampling forever. On gradient walls, sample corners and baseboards when crouching low — they run darker than mid-wall.",
    },
    {
      id: "metallic-roughness",
      heading: "Metallic and Roughness — Stop the Shimmer",
      body: "Games Fuze: many new players skip metallic and roughness sliders, but a hue-perfect match can still look unnatural if sheen does not match the surface. Matte walls (plaster, wallpaper, wood): keep roughness relatively high, metallic low. Metal pipes and barrels: sample color first, then adjust roughness until specular highlights stop catching seeker FOV. When unsure, dull correct gray beats shiny perfect gray.",
    },
    {
      id: "prep-workflow",
      heading: "Prep Phase Workflow (Community Consensus)",
      body: "Path to spot first → F → Spacebar sample local surface → quick brush pass on exposed areas → middle-mouse check all sides → R for pose lock before timer hits zero → touch up only if time remains. Practice on Mansion bathroom tiles until sample → paint → lock takes under 15 seconds. Do not chase viral ceiling spots until fundamentals are solid.",
    },
    {
      id: "dual-texture",
      heading: "Tile, Grout, and Multi-Color Walls",
      body: "Sample both dominant textures (tile and grout, graffiti and concrete). Choose the pose that hides your outline in the busier texture — align shoulders with horizontal brick courses or grout lines. If one limb crosses into a second color, re-sample that limb or reposition so the full silhouette sits in one value band.",
    },
    {
      id: "when-dropper-drifts",
      heading: "When Dropper Accuracy Drifts Mid-Session",
      body: "SlashSkill reports dropper accuracy sometimes drifts after several matches — leaving and rejoining the lobby can reset it. If resolution shifted in-session, return to main menu, reapply resolution, and relaunch. Windows display scaling above 100% can also misalign paint tools — set Scale to 100% in Windows Display settings when testing.",
    },
    {
      id: "next-steps",
      heading: "Next Steps",
      body: "Pair brush discipline with pose choice (see Best Pose Guide) and value-first color matching (see Advanced Color Matching Guide). Browse map-specific spots so you paint for a verified surface instead of improvising under timer pressure.",
    },
  ],
};
