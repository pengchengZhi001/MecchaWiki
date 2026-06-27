import type { Guide } from "./types";

export const gameModesGuide: Guide = {
  slug: "game-modes-guide",
  title: "Game Modes Explained — Basic, Infection & Double",
  category: "Multiplayer",
  readTime: "7 min",
  excerpt:
    "Hosts pick Basic, Infection, or Double before launch. GameRant and community mode guides explain role splits, forced taunt / whistle settings, map filters, and which mode fits public vs private lobbies.",
  sources: [
    {
      name: "GameRant — Tips and Tricks (modes & forced taunt)",
      url: "https://gamerant.com/meccha-chameleon-tips-tricks-strategies/",
    },
    {
      name: "mecchachameleon.io — Game Modes comparison",
      url: "https://mecchachameleon.io/game-modes/",
    },
    {
      name: "allthings.how — Auto and manual whistle",
      url: "https://allthings.how/meccha-chameleon-whistle-how-the-auto-and-manual-whistle-work/",
    },
    {
      name: "DualShockers — Whistle disorientation tactic",
      url: "https://dualshockers.com/meccha-chameleon-tips-and-tricks-we-wish-we-knew-sooner/",
    },
  ],
  content: [
    {
      id: "overview",
      heading: "Three Host-Selected Modes",
      body: "GameRant documents three game modes the host chooses before a match: Basic, Infection, and Double. mecchachameleon.io uses parallel labels — Normal (classic hide-and-seek), Increasing Oni (caught hiders become seekers), and Double (teams alternate roles). Painting, pose, and camouflage mechanics stay identical across modes; only role assignment and round pressure change. Pick mode based on lobby size and whether your group is learning or chasing chaos.",
    },
    {
      id: "basic",
      heading: "Basic Mode — Classic Team Split",
      body: "GameRant: Basic splits the group into hunters and hiders — hunters must find all hiders before time runs out. mecchachameleon.io calls this Normal mode and recommends it for new players because objectives are instantly clear. Best for private teaching lobbies and 3–6 player groups where everyone needs stable roles round to round. Steam negative reviews note public Basic lobbies sometimes lack enough seekers when players refuse hunter role — host a private room if seeker count feels wrong.",
    },
    {
      id: "infection",
      heading: "Infection Mode — Escalating Seeker Pressure",
      body: "GameRant: Infection starts with all but one or two players hiding; when you are found, you also become a hunter. mecchachameleon.io's Increasing Oni label describes the same momentum — every catch adds seeker pressure so the final minute collapses fast. Best for larger groups (8+) and public lobbies where round length otherwise drags. Hiders who survive early gain value; caught players should sweep areas they hid in previously because friends remember those routes.",
    },
    {
      id: "double",
      heading: "Double Mode — Everyone Hunts, Everyone Hides",
      body: "GameRant: Double has everyone hide at round start; when hunting begins, everyone hunts — whoever finds the most people, or finds everyone first, wins. mecchachameleon.io recommends Double for balanced groups where players argue one side is easier. Fair for streamer viewer rounds when audience members want both hide and seek time in one session. Less role clarity than Basic — good for chaotic Friday-night groups, harder for teaching eyedropper fundamentals.",
    },
    {
      id: "forced-taunt",
      heading: "Forced Taunt & Whistle Settings",
      body: "GameRant describes Forced Taunt: a host setting that automatically triggers a whistling sound on an interval (GameRant cites the 1 key), giving hunters audio hints in large groups where painted bodies are nearly invisible. allthings.how adds detail: when enabled, chameleons auto-whistle after roughly 45 seconds unless the host changes timing; voluntary whistles reset that countdown so hiders choose safer moments to make noise. Hosts configure interval alongside hunt timer length — disable forced taunt for pure stealth learning lobbies.",
    },
    {
      id: "whistle-tactics",
      heading: "Manual Whistle — Survival vs Misdirection",
      body: "DualShockers notes a quirk: the whistle is audible to nearby seekers but does not emanate from your exact physical position — volume scales with distance, not direction. Skilled hiders use voluntary whistles as disorientation: whistle near a door frame so seekers search the wrong room while you stay outside. allthings.how warns the opposite case — avoid whistling when a hunter is adjacent. After elimination, whistle becomes spectator taunt only (free-fly camera) with no effect on hide timers.",
    },
    {
      id: "map-filters",
      heading: "Optional Map Filters (Configure Map)",
      body: "GameRant lists three optional visual filters in Configure Map (blue button): Monochrome (black and white), Horror (extra highlights and shadows), and Mosaic (pixelated blur). Hosts can mix filters. These change how environments read — re-sample colors after enabling filters because eyedropper targets shift. Filters are novelty/challenge settings, not default competitive rules.",
    },
    {
      id: "which-mode",
      heading: "Which Mode Should You Pick?",
      body: "New group learning paint and pose: Basic/Normal in a private lobby, forced taunt off. Large public queue with long rounds: Infection/Increasing Oni. Balanced friend group wanting equal hide and seek time: Double. Streamers with viewer participation: Infection or Double with forced taunt tuned for audience clarity. See our Private Lobby Guide for hosting settings and Public Lobby Guide for griefing workarounds in random matchmaking.",
    },
  ],
};
