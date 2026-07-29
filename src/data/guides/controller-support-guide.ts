import type { Guide } from "./types";

export const controllerSupportGuide: Guide = {
  slug: "controller-support-guide",
  title: "Controller & Steam Deck — After v3.1.0 Non-UI Gamepad Support",
  category: "Mechanics",
  readTime: "9 min",
  excerpt:
    "Update 3.1.0 makes non-UI operations controllable with a gamepad and fixes controller paint brush speed vs FPS. Steam Deck still benefits from trackpad precision for eyedropper work — here's what changed and what still favors mouse.",
  sources: [
    {
      name: "MECCHA CHAMELEON Steam News — update 3.1.0",
      url: "https://store.steampowered.com/news/app/4704690",
    },
    {
      name: "consolepcgaming.com — Garten of Banban / controller patch",
      url: "https://consolepcgaming.com/meccha-chameleon-update-3-1-0-adds-a-garten-of-banban-map/",
    },
    {
      name: "SlashSkill — pre-3.1.0 Steam Input / Deck setup",
      url: "https://www.slashskill.com/does-meccha-chameleon-have-controller-support-steam-deck-setup-and-why-keyboard-still-wins/",
    },
    {
      name: "Game-Meta — Steam Deck layout guide",
      url: "https://game-meta.com/best-meccha-chameleon-steam-deck-controller-layout-settings-guide-2026/",
    },
  ],
  content: [
    {
      id: "native-support",
      heading: "Native Gamepad Support After v3.1.0",
      body: "Steam News update 3.1.0 (July 25, 2026): non-UI operations are now controllable with a game controller — a major change from launch-week guides that said \"no native gamepad support.\" ConsolePCGaming notes the patch also expands controller functionality beyond menus and fixes brush movement speed that previously varied with FPS when painting on a pad. Pre-3.1.0 sources (SlashSkill) documenting Steam-Input-only workarounds remain useful for Deck layouts and bind fine-tuning, but treat \"no native support\" claims as outdated if your client is 3.1.0+.",
    },
    {
      id: "what-still-hard",
      heading: "What Still Favors Mouse / Trackpad",
      body: "Competitive prep still leans on precise eyedropper sampling, brush resize, and middle-mouse orbit checks. Update 3.2.0 removed the eyedropper button from the color palette — confirm Spacebar quick sample and 3D eyedropper binds after patching. Thumbstick painting can work in casual friend lobbies; sweaty public prep timers still favor KB+M or Steam Deck trackpad-as-mouse hybrids. Paint Mode menus may still need cursor navigation depending on your build — test in a private lobby before ranked nights.",
    },
    {
      id: "steam-input",
      heading: "Steam Input & Deck Layouts Still Help",
      body: "SlashSkill's Steam Input workflow still applies for custom button maps: enable controller support in Steam Settings → Controller, ensure Steam Input is on for the game, and apply a community or custom layout. Map back grips to paint menu or pose shortcuts (Game-Meta). After any Steam Input import — and after 3.1.0 / 3.2.0 — open Esc → Settings → Controls and confirm F, R, Spacebar eyedropper, and whistle before inviting friends.",
    },
    {
      id: "brush-fps-fix",
      heading: "Controller Brush Speed vs FPS (Fixed in 3.1.0)",
      body: "Official 3.1.0 notes: fixed an issue where brush movement speed varied based on FPS when painting with a controller. If your pad brush still feels frame-tied, confirm you are on 3.1.0+, lock a stable FPS, and retest in Paint Mode. GPU performance improvements in the same patch help low-end Deck / laptop sessions.",
    },
    {
      id: "shadow-medium",
      heading: "Medium Shadow Quality (3.1.0)",
      body: "3.1.0 adds a Medium setting for shadow quality — useful on Deck and mid-range GPUs when High shadows tank FPS during paint checks. Pair with the GPU performance improvements from the same build before blaming controller input lag.",
    },
    {
      id: "when-controller-ok",
      heading: "When Controller Is Fine",
      body: "Casual friend lobbies learning movement and emotes; seeker role with reduced paint demand; streamer couch co-op; Steam Deck handheld sessions. Avoid controller-only prep in sweaty public lobbies where mouse hiders finish paint with seconds to spare. Pair with How to Paint Better and Emotes & Pose Wheel guides once binds are stable.",
    },
    {
      id: "next-steps",
      heading: "Next Steps",
      body: "Read Controls help for default keybind list. If join fails on Deck, see Can't Join Lobby — version mismatch hits portable PCs the same as desktop. For Banban / late-July patch issues: Problems After v3.1–3.3. Practice Mansion bathroom tiles first, then migrate to Garten of Banban mural blends.",
    },
  ],
};
