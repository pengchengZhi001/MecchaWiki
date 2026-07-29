import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV330Guide: Guide = {
  slug: "problems-after-v3-3-0",
  title:
    "Meccha Chameleon v3.1–3.3 Update Problems — Banban / Workshop Malware / Discord Hack Fix Guide",
  category: "Fix",
  readTime: "12 min",
  excerpt:
    "Broke after late-July 2026 patches? Fix Workshop malware panic, Discord scam instructions, Banban map lottery toggles, eyedropper palette changes, controller painting, and version mismatch after 3.3.0 Plump.",
  seoKeywords: [
    "v3.3.0",
    "v3.2.0",
    "v3.1.0",
    "Garten of Banban",
    "workshop malware",
    "Discord hack",
    "RAT rumor",
    "eyedropper removed",
    "Plump body",
    "not working after update",
  ],
  heroImage: {
    src: "/images/maps/garten-of-banban.jpg",
    alt: "MECCHA CHAMELEON Garten of Banban kindergarten collab map — v3.1.0",
    caption:
      "Update 3.1.0 adds Garten of Banban and a MOD-map security patch. 3.2.0 / 3.3.0 follow with emotes, palette UI changes, and Plump body type.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 3.1.0 / 3.2.0 / 3.3.0",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "Steam News — Regarding Game Safety",
      url: "https://store.steampowered.com/news/app/4704690",
    },
    {
      name: "TheGamer — malware Workshop maps & Discord breach",
      url: "https://www.thegamer.com/meccha-chameleon-dev-responds-malware-maps/",
    },
    {
      name: "Polygon — malware dropper / Discord takeover",
      url: "https://www.polygon.com/mecca-chameleon-malware-attack-hackers/",
    },
    {
      name: "Game*Spark — Garten of Banban collab map",
      url: "https://www.gamespark.jp/article/2026/07/25/169747.html",
    },
    {
      name: "consolepcgaming.com — update 3.2.0 / 3.3.0",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-2-0-brings-12-more-emotes-and-a-safety-reminder/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What Shipped July 25–26 (3.1.0 → 3.3.0)",
      body: "Steam News update 3.1.0 (July 25): official collab map Garten of Banban (Banban's Kindergarten), non-UI gamepad controls, Medium shadow quality, controller paint FPS brush-speed fix, GPU performance, 3D eyedropper sampling-position fix, and a security patch for MOD maps. Update 3.2.0 (July 26): 12 new emotes, eyedropper button removed from the color palette, and a safety note confirming malware execution from mod maps is blocked (Steam Support confirmed). Update 3.3.0 (July 26): new character body type Plump. Same window: official Discord was briefly compromised then restored (discord.gg/kUh2PNPjpq). Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 3.3.0",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm 3.3.0 before friend night — mixing 3.0.x and 3.3.0 breaks private lobbies. Host creates a brand-new room after sync. Generic checklist: Problems After Update guide.",
    },
    {
      id: "malware-safety",
      heading: "Workshop Malware Panic — What Is Actually True",
      body: "Researcher FeintBe (Medium) and coverage from TheGamer / Polygon / Eurogamer / Game*Spark documented Steam Workshop maps (e.g. Laser Tag Neon, later Chroma Grid Arena) delivering malware droppers / RATs when launched. v3.1.0's MOD-map security patch addresses this; v3.2.0 states unrelated files such as malware can no longer execute, confirmed with Steam Support. Official Steam clarification: the game itself has no virus; Discord-hacker claims that \"the latest update contains a RAT and you must follow steps\" are false. If you played suspicious Workshop maps before 3.1.0, run a full antivirus scan and check Documents / temp for odd .bat files (Polygon guidance). Prefer popular Workshop maps with established player bases; avoid brand-new uploaders with comments disabled.",
    },
    {
      id: "discord-hack",
      heading: "Official Discord Was Hacked — Then Restored",
      body: "While investigating malicious mod maps, a spare testing PC was infected; attackers bypassed Discord 2FA, took admin, and banned staff. Steam posts: game files were not editable from that PC; Discord is not integrated with the game. Do not click Discord links, \"fix\" instructions, or join external servers posted during the breach. July 26 Steam News: official Discord restored, hackers banned, new invite https://discord.gg/kUh2PNPjpq. Verify invites via Steam News / store page — not random DMs.",
    },
    {
      id: "banban-learning",
      heading: "Garten of Banban Map — Early Meta",
      body: "Game*Spark / Denfaminicogamer / 4gamer: high-fidelity Banban's Kindergarten recreation with mascot murals and BANBAN's Kindergarten signage. Early hides: mural blends, welcome lettering seams, poster walls, color-theme blocks, classroom clutter. Collaboration maps may stay OFF in random lottery by default — toggle Garten of Banban on in map lottery settings. Browse /maps/garten-of-banban and /hidden-spots?map=garten-of-banban — treat spots as experimental.",
    },
    {
      id: "eyedropper-ui",
      heading: "Eyedropper Button Missing From Palette (3.2.0)",
      body: "Update 3.2.0 removed the eyedropper button from the color palette UI. Sampling still works via Spacebar quick eyedropper inside Paint Mode (confirm bind in Settings) and the 3D eyedropper tool — note 3.1.0 already fixed a sampling-position offset bug. If friends say \"eyedropper is gone,\" they mean the palette button, not the whole sampling system. Re-bind and practice in a private Mansion room before blaming the patch.",
    },
    {
      id: "controller",
      heading: "Controller Painting Feels Wrong After 3.1.0",
      body: "3.1.0 makes non-UI operations controllable with a gamepad and fixes brush movement speed varying with FPS when painting on controller. Competitive prep still favors mouse / Deck trackpad for precision, but friend lobbies can now move and paint without Steam Input remaps for every action. If brush speed feels tied to framerate, update past 3.1.0 and lock a stable FPS. Full layout notes: Controller Support guide.",
    },
    {
      id: "plump-emotes",
      heading: "Plump Body & 12 New Emotes",
      body: "3.3.0 adds Plump body type — silhouette changes; re-check favorite wall-flat and prop-mimic poses because outline reads differently. 3.2.0 adds 12 emotes on top of the v1.8.0 batch — social expression, not survival staples. See Emotes & Pose Wheel guide.",
    },
    {
      id: "workshop-void",
      heading: "Workshop Maps After the Security Patch",
      body: "After 3.1.0+, re-subscribe maps you trust, restart the client, and test an official map (Banban or Mansion) before blaming multiplayer. Malicious maps may be removed from Workshop — missing subscriptions are expected. Full load-fail walkthrough: Workshop Map Loading fix guide.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Greece / glow paint issues from 3.0.0 / 2.9.0: Problems After v3.0.0. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
