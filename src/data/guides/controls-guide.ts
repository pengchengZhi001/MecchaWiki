import type { Guide } from "./types";

export const controlsGuide: Guide = {
  slug: "controls-guide",
  title: "Meccha Chameleon Controls & Keybinds — Full PC Guide",
  category: "Mechanics",
  readTime: "9 min",
  excerpt:
    "Every default Meccha Chameleon control: WASD movement, F paint menu, R pose wheel, seeker tagging, camera orbit, whistle, free cam, rebinding, and what changed after patches.",
  seoKeywords: [
    "controls",
    "keybinds",
    "keyboard",
    "WASD",
    "paint key",
    "pose key",
  ],
  sources: [
    {
      name: "meccha-chameleon.wiki — Controls & Keybinds",
      url: "https://meccha-chameleon.wiki/guides/controls/",
    },
    {
      name: "GameRant — Controls and keybinds",
      url: "https://gamerant.com/meccha-chameleon-controls-keybinds/",
    },
    {
      name: "Steam Discussions — invert Y axis thread",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541224066004561/",
    },
  ],
  content: [
    {
      id: "movement-camera",
      heading: "Movement & Camera",
      body: "W A S D moves your character. Mouse controls camera look. No dedicated sprint — path efficiently during prep instead of holding Shift for speed. Ctrl crouch helps seekers check low angles and hiders tuck under furniture. Middle mouse rotates camera while in paint menu so you can sample distant walls without walking. Lower mouse sensitivity helps seeker wall sweeps — smooth horizontal pans beat jerky flicks.",
    },
    {
      id: "paint-pose",
      heading: "Paint (F) & Pose (R) Menus",
      body: "F opens paint: palette, brushes, eyedropper, metallic/roughness sliders. R opens pose: crouch, wall-flat, curl, object mimic, and post-v1.8.0 emotes on the wheel. Left mouse applies paint strokes and confirms UI picks. Hiders paint in third person; seekers hunt primarily first person. Spacebar often triggers quick eyedropper inside paint menu — confirm bind in Settings after each patch. Master F and R before your first serious lobby; prep time ends fast.",
    },
    {
      id: "seeker-controls",
      heading: "Seeker Tagging & View Toggle",
      body: "Left mouse button tags hiders with line of sight — no wall tags through geometry. HUD view toggle switches first/third person (label varies by patch). First person inspects suspicious edges; third person clears corners. Crouch-sweep baseboards after chest-height passes fail. Audio from footsteps and pose animations matters as much as visual tags.",
    },
    {
      id: "pose-release",
      heading: "Wall-Stick & Pose Release",
      body: "Wall-flat and stick poses display a HUD release key — often Shift or the on-screen prompt at lock time. Read the prompt during prep, not mid-hunt. Breaking pose under seeker vision creates motion tells. Up/down arrows sometimes fine-tune stick height — test in private lobby because patches occasionally remap helpers.",
    },
    {
      id: "social-keys",
      heading: "Whistle, Taunt, Chat & Free Camera",
      body: "1 key: manual whistle when hosts allow (GameRant). T: text chat in many lobbies. Proximity voice supported in-game. After hiding: 5 follows hunters, 4 free-roam spectator camera (GameRant). Post-elimination free cam is full — use it to learn seeker patterns. Forced taunt host setting auto-whistles on interval (~45s default per community guides); manual whistle resets countdown.",
    },
    {
      id: "rebinding",
      heading: "Rebinding & Post-Patch Reset",
      body: "Esc → Settings → Controls exposes full bind list. Rebind one key at a time; test in private room before inviting friends. After major patches: Reset to Defaults, then remap only custom keys — updates sometimes shuffle rarely-used binds while leaving WASD untouched. Confirm F and R before every friend night.",
    },
    {
      id: "invert-y",
      heading: "Invert Y Axis — Community Status",
      body: "Steam Discussions thread \"Needs Invert Y Axis option Please\" (June 2026) reports no native invert-Y at community report time — inverted-mouse veterans describe the game as difficult without it. Check Esc → Settings → Controls after each patch for a newly added toggle; community pressure is high but verify in your build. No confirmed native invert at last community report.",
    },
    {
      id: "controller-deck",
      heading: "Controller & Steam Deck",
      body: "No native gamepad support — Steam does not list controller compatibility. Workaround: Steam Input maps pad to KB+M; Steam Deck rated Playable (not Verified) with trackpad as mouse for painting. Competitive prep still favors keyboard/mouse or Deck trackpad — thumbstick eyedropper struggles. Full layout tips: Controller & Steam Deck guide.",
    },
    {
      id: "controls-table",
      heading: "Quick Controls Reference",
      body: "Move: WASD | Paint menu: F | Pose menu: R | Tag hider: LMB | Crouch: Ctrl | Eyedropper: in paint menu / Spacebar | Whistle: 1 | Free cam: 4 | Follow hunter: 5 | Chat: T | Settings: Esc. Mecha Chameleon and Mecca Chameleon use identical bindings — same Steam App 4704690. Pair this guide with How to Play for first-match flow and Painting help for brush workflows.",
    },
  ],
};
