import type { Guide } from "./types";

export const patternTextureWishlistGuide: Guide = {
  slug: "pattern-texture-wishlist-guide",
  title: "Pattern & Texture Brushes — What Works Today vs Community Requests",
  category: "Technique",
  readTime: "9 min",
  excerpt:
    "Steam reviews and the \"Texture Brush Possibility?\" thread ask for wallpaper/checkerboard copy tools — this guide documents what the paint menu actually supports now and manual workarounds until devs ship requested brushes.",
  sources: [
    {
      name: "Steam Reviews — 1M copies improvement list (patterns & brush styles)",
      url: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
    },
    {
      name: "Steam Discussions — Texture Brush Possibility?",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431537412/",
    },
    {
      name: "SlashSkill — Eyedropper & HSV workflow",
      url: "https://www.slashskill.com/meccha-chameleon-answer-check-and-color-picker-explained-master-the-eyedropper-and-color-matching/",
    },
    {
      name: "Games Fuze — Painting mechanics",
      url: "https://gamesfuze.com/guides/meccha-chameleon-complete-beginners-guide-painting-mechanics-tips/",
    },
    {
      name: "Steam Reviews — brush resolution limits",
      url: "https://steamcommunity.com/app/4704690/reviews/?browsefilter=toprated",
    },
  ],
  content: [
    {
      id: "community-requests",
      heading: "What Players Keep Asking For",
      body: "A top Steam helpful review after 1M+ sales asks the developer for: copy patterns from surfaces (wallpaper, checkerboard), easier paint UI, brush shapes/styles, more poses, and character rotation / snap-to-surface on angled geometry. Steam thread \"Texture Brush Possibility?\" notes the main-menu character appears fully brick-textured like the background — players want a texture brush or spray tool to replicate that in matches. Thread replies suggest spray paint with transparent edges, alpha/opacity sliders, and future texture stamps — all community suggestions, not confirmed roadmap items. Document requests accurately; do not claim these tools exist in the live paint menu.",
    },
    {
      id: "what-exists-today",
      heading: "What the Paint Menu Actually Includes",
      body: "Shipped tools per Games Fuze, 9Puz HUD notes, and How to Paint Better on this site: F opens paint mode; Spacebar eyedropper for accurate sampling; left mouse applies brush strokes; right mouse drag resizes brush; metallic and roughness sliders for sheen; HSV/brightness nudges when lit samples drift; middle mouse orbits camera for 360° checks. There is no documented one-click wallpaper stamp, checkerboard copy, or alpha spray at community report time. Pattern work is manual: multiple samples, smaller brush passes, and pose alignment with existing surface lines.",
    },
    {
      id: "manual-pattern-work",
      heading: "Manual Pattern Matching (Works Now)",
      body: "Advanced Color Matching Guide on this site covers pattern matching: align pose with grout lines, brick courses, bookshelf spine rhythm, and graffiti mid-tones so regularity breaks human rectangles. Mansion bathroom and Brick Loft beam gap spots are pattern-discipline zones — sample tile plus grout or mortar plus brick face separately. Indoor Country mud patch (GameRant) needs deliberate pattern paint, not flat brown. Games Fuze cow cutout mimic uses two large black-and-white blocks instead of micro texture — readable at current brush fidelity. Clutter clusters forgive imperfect patterns; flat walls forgive none.",
    },
    {
      id: "brush-resolution-limits",
      heading: "Why Fine Checkerboards Fail",
      body: "Steam helpful review (104 votes) cited in our Painting help: player model brush resolution cannot support crisp straight lines or tiny checker cells — strokes look pixelated. Community workaround: stop chasing menu-trailer brick skin fidelity; prioritize spot choice, silhouette, and value match. When a surface needs tight pattern, hide in the busy part of the texture (graffiti cluster, hay pile) so seekers parse noise not hand-drawn grid errors. Results screen answer check shows exactly when pattern breaks — use it to study line direction mistakes.",
    },
    {
      id: "wishlist-spray-alpha",
      heading: "Spray Paint & Alpha — Thread Ideas Only",
      body: "\"Texture Brush Possibility?\" reply from DΩVID proposes spray paint with soft transparent edges for blending plus lower paint alpha — second reply endorses both. These are design ideas for future patches, not instructions you can follow in-game today. If similar tools ship later, re-verify in patch notes and update binds in Esc → Settings → Controls before teaching friends outdated workflows.",
    },
    {
      id: "related-requests",
      heading: "Related Unshipped Requests (Context)",
      body: "Same Steam review bundle asks for body rotation on angled surfaces, more poses (partially addressed by v1.8.0 emotes), and paint UI camera improvements. Surface attach (SHIFT) and height adjust (CTRL/SPACE) per 9Puz cover some rotation needs without a dedicated \"snap flat on slope\" button. Track patch notes on mecchachameleon.net when evaluating whether a wishlist item graduated to shipped feature.",
    },
    {
      id: "practical-workflow",
      heading: "Practical Workflow Until Texture Tools Ship",
      body: "Prep checklist: path to spot → Spacebar sample local pixel → large brush base coat → shrink brush (RMB drag left) for seams → metallic/roughness dulling → middle-mouse check joints → pose lock on pattern direction → freeze. For dual-tone walls, sample both tones and pick pose hiding the boundary on your body. For prop mimics, two large colour blocks beat fake micro-checkerboards. Pair with Prop Mimic & Cluster Guide and Pattern Matching section of Color Matching Guide.",
    },
  ],
};
