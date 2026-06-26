import type { Guide } from "./types";

export const bestPoseGuide: Guide = {
  slug: "best-pose-guide",
  title: "Best Pose Guide — How to Pick the Right Pose",
  category: "Strategy",
  readTime: "8 min",
  excerpt:
    "No official pose tier list exists — but community pose guides describe silhouette matching: wall-flat, crouch, floor profile, and corner compression by surface type.",
  sources: [
    {
      name: "mecchachameleongame.wiki — Pose Guide",
      url: "https://mecchachameleongame.wiki/pose-guide/",
    },
    {
      name: "Mobalytics — How to Win as a Hider",
      url: "https://mobalytics.gg/news/guides/meccha-chameleon-hiding-guide",
    },
    {
      name: "dq7reimagined.com — Hider Guide (pose order)",
      url: "https://dq7reimagined.com/meccha-chameleon/hider-guide/",
    },
  ],
  content: [
    {
      id: "no-tier-list",
      heading: "There Is No Confirmed \"Best Pose\" Name",
      body: "Patch v1.2.0 officially added 2 new poses, but patch notes do not publish their names, thumbnails, or animations. mecchachameleongame.wiki deliberately avoids unofficial labels like \"wall lean.\" Instead, think in silhouette shapes: choose a spot first, sample color, paint, then pick the pose that makes your body fit the surface — not the flashiest animation in the menu.",
    },
    {
      id: "pose-order",
      heading: "Correct Order: Spot → Paint → Pose",
      body: "dq7reimagined.com and mecchachameleongame.wiki agree on build order: choose a believable spot → set pose that fits the surface → paint light and shadow for that surface → check too-buried warnings → stay still. Pose hides shape; paint hides color; stillness hides movement. If one of the three fails, seekers find you regardless of the other two.",
    },
    {
      id: "surface-table",
      heading: "Match Pose Type to Surface (Community Framework)",
      body: "mecchachameleongame.wiki silhouette table: Flat wall → wall-hugging or vertical flattened pose to reduce player outline. Floor or low platform → flat or lie-down shape so seekers do not see a standing silhouette. Low furniture cluster → crouched or compact shape mimicking small objects. Corner junction → angled, crouched, or compressed shape so two surfaces break your outline when paint uses both colors. Busy object cluster → small, rounded, or tucked shape hiding in visual noise. Open center of room → avoid unless baiting — open space gives clean sightlines.",
    },
    {
      id: "break-outline",
      heading: "Why Pose Beats \"Best Pose\" Meta",
      body: "Mobalytics: break your player outline with a pose — seekers compare and decide whether you are a player, and seconds spent deciding are seconds on the clock. A visible spot can outperform a dark corner if your shape reads as pillow, wall patch, curtain fold, or room clutter. Pose choice is what sells the disguise after color gets you close.",
    },
    {
      id: "lock-early",
      heading: "Lock Pose Before Hunt Phase",
      body: "mecchachameleongame.wiki mistake table: moving during hide phase gets you caught faster than subtle color errors. Set pose during prep, not after hunt starts. Movement breaks lock and creates audio/visual tells. Read HUD release prompts before attaching to walls — mis-tapping release mid-round exposes you.",
    },
    {
      id: "height-tuning",
      heading: "Height and Wall-Stick Fine Tuning",
      body: "Control guides note: while stuck to a surface, Shift may release wall-stick; up/down arrow keys sometimes fine-tune height while attached (verify in a private lobby after patches). Choose poses where sampled value matches where your shoulders and knees sit — sampling mid-wall but locking low exposes bright shoulders on gradient walls.",
    },
    {
      id: "testing",
      heading: "Test Poses in a Private Lobby",
      body: "Open Settings and rebind pose menu (default R) if needed. Test each silhouette type on Mansion furniture and bathroom tiles before public chaos — prep timer does not wait while you hunt for keys. After major patches, reset controls to defaults and remap only custom binds.",
    },
  ],
};
