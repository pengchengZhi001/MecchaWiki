import type { Guide } from "./types";
import { latestPatch } from "../patch-fixes";

export const problemsAfterV350Guide: Guide = {
  slug: "problems-after-v3-5-0",
  title:
    "Meccha Chameleon v3.4–3.5 Update Problems — Exit 8 / Friend Server Search / Voice Chat Fix Guide",
  category: "Fix",
  readTime: "11 min",
  excerpt:
    "Broke after early-August 2026 patches? Fix Exit 8 lottery toggles, friend server search, missing Friend List (restored in 3.5.1), muted mic defaults, disabled proximity voice, hunter body types, and version mismatch after 3.5.x.",
  seoKeywords: [
    "v3.5.0",
    "v3.5.1",
    "v3.4.0",
    "Exit 8",
    "8番出口",
    "friend server search",
    "Friend List",
    "voice chat disabled",
    "microphone muted",
    "hunter body type",
    "not working after update",
  ],
  heroImage: {
    src: "/images/maps/exit-8.jpg",
    alt: "MECCHA CHAMELEON Exit 8 collab map — underground corridor from The Exit 8",
    caption:
      "Update 3.5.0 adds the Exit 8 collaboration map and friend-server search. fix3.5.1 restores Friend List and spectator camera sensitivity.",
  },
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 3.5.0 / fix3.5.1",
      url: latestPatch.steamNewsUrl,
    },
    {
      name: "consolepcgaming.com — update 3.5.0 Exit 8",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-5-0-adds-an-exit-8-map-and-friend-server-search/",
    },
    {
      name: "consolepcgaming.com — fix3.5.1 Friend List",
      url: "https://consolepcgaming.com/meccha-chameleon-fix3-5-1-targets-the-friend-list-and-spectator-mode/",
    },
    {
      name: "Game*Spark — 8番出口 collab map",
      url: "https://www.gamespark.jp/article/2026/08/01/170073.html",
    },
    {
      name: "Famitsu — Exit 8 underground corridor map",
      url: "https://www.famitsu.com/article/202608/83207",
    },
    {
      name: "consolepcgaming.com — fix3.3.2 voice chat rework",
      url: "https://consolepcgaming.com/meccha-chameleon-fix3-3-2-tackles-server-resets-as-voice-chat-gets-reworked/",
    },
  ],
  content: [
    {
      id: "what-shipped",
      heading: "What Shipped July 29 – August 2 (3.3.2 → 3.5.1)",
      body: "Steam News fix3.3.2 (July 29): server name/password reset fix, Plump belly collision, controller settings UI, 3D eyedropper performance, proximity voice chat temporarily disabled for rework. Update 3.4.0 (July 31): character body types applied to Hunters (Cube / Plump usable while seeking), voice input ON/OFF label fix, console color palette mouse support, Paint Mode cursor unlocked from 30 fps. Update 3.5.0 (August 1): official collab map Exit 8 (8番出口), friend-server search, color palette UI tweak, FAQ / Friend List removed from options, server-name overflow fix, motion blur setting fix, FPS hunter body unified to default, controller zoom fix, UI Back button collision, microphone muted by default. fix3.5.1 (August 2): Friend List re-added with online users prioritized, spectator camera sensitivity applied, color palette adjustment. Full history: Updates & Patch Notes guide.",
    },
    {
      id: "first-60-seconds",
      heading: "First 60 Seconds After Updating to 3.5.x",
      body: "Close Meccha Chameleon completely. Exit Steam and reopen. Confirm Downloads shows no pending bytes for App 4704690. Relaunch from the Steam library. Have every friend confirm 3.5.1 (or at least matching 3.5.x) before friend night — mixing 3.3.x and 3.5.x breaks private lobbies. Host creates a brand-new room after sync. Use the new friend-server search if invites fail. Generic checklist: Problems After Update guide.",
    },
    {
      id: "exit-8-learning",
      heading: "Exit 8 Map — Early Meta",
      body: "Famitsu / Game*Spark: underground corridor recreation of The Exit 8 with familiar tiled passages plus chaotic \"anomaly-like\" zones; layout loops. Community posts (JP Twitter / はちま) note hiding feels hard because players already know the corridor silhouette — lean into anomaly chaos zones and dual-tone tile/sign seams rather than standing in the clean walkway. Collaboration maps may stay OFF in random lottery by default — toggle Exit 8 on in map lottery settings. Browse /maps/exit-8 and /hidden-spots?map=exit-8 — treat spots as experimental.",
    },
    {
      id: "friend-server-search",
      heading: "Friend Server Search & Missing Friend List",
      body: "3.5.0 adds searching for friends' servers — use it when Steam invite overlays fail or the old Find Server path is noisy. 3.5.0 also removed Friend List from the options screen; fix3.5.1 re-adds Friend List and sorts online users to the top. If your client still lacks Friend List, update past 3.5.1. Pair with Can't Join Lobby and Steam Invite Not Working guides when search finds the room but join still fails (version / EULA / auth first).",
    },
    {
      id: "voice-mic",
      heading: "Voice Chat Disabled & Mic Muted by Default",
      body: "fix3.3.2 temporarily disables proximity voice while the feature is reworked — silence is expected, not a broken headset. 3.5.0 changes the microphone to muted by default — unmute in settings/HUD when your lobby wants voice again. 3.4.0 fixed reversed Voice Input ON/OFF labels — re-check the toggle text after updating so you are not muted while thinking you are live.",
    },
    {
      id: "hunter-bodies",
      heading: "Hunter Body Types (3.4.0) & FPS Default (3.5.0)",
      body: "3.4.0 applies character types to Hunters — seekers can run Cube or Plump while hunting. Game*Spark notes this changes how seekers feel in third-person. 3.5.0 unifies the hunter's body type to default in FPS mode — do not expect Plump/Cube silhouettes while aiming in first-person. Re-learn seeker sightlines after switching body types; Plump's wider outline can clip differently (belly collision was fixed in 3.3.2).",
    },
    {
      id: "paint-controller",
      heading: "Paint Mode FPS & Controller Zoom",
      body: "3.4.0 unlocks Paint Mode cursor from a 30 fps lock — brush size and right-click zoom should feel smooth. 3.5.0 fixes controller zoom not working and adds button collision to the UI Back action. If paint still feels sticky, confirm you are on 3.4.0+ and lock a stable FPS; see Controller Support guide for Deck / gamepad layouts.",
    },
    {
      id: "next",
      heading: "Still Broken?",
      body: "Version mismatch and auth token failures remain the top lobby killers on every major bump — Can't Join Lobby and Authentication Token guides. Late-July Banban / malware / Discord issues: Problems After v3.1–3.3. Greece / glow paint: Problems After v3.0.0. Patch hub lists every high-priority symptom for the current build.",
    },
  ],
};
