import type { Guide } from "./types";

export const controllerSupportGuide: Guide = {
  slug: "controller-support-guide",
  title: "Controller & Steam Deck Support — Steam Input Setup",
  category: "Setup",
  readTime: "10 min",
  excerpt:
    "No native gamepad support on Steam — SlashSkill, NeonLightsMedia, and Game-Meta document Steam Input workarounds, Steam Deck Playable status, and why mouse or trackpad still wins for painting.",
  sources: [
    {
      name: "SlashSkill — Controller support & Steam Deck",
      url: "https://www.slashskill.com/does-meccha-chameleon-have-controller-support-steam-deck-setup-and-why-keyboard-still-wins/",
    },
    {
      name: "NeonLightsMedia — PC controls & controller answer",
      url: "https://www.neonlightsmedia.com/blog/meccha-chameleon-pc-controls-keybinds",
    },
    {
      name: "Game-Meta — Steam Deck layout guide (2026)",
      url: "https://game-meta.com/best-meccha-chameleon-steam-deck-controller-layout-settings-guide-2026/",
    },
    {
      name: "Steam Discussions — 3M copies / controller support request",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541224066004561/",
    },
    {
      name: "dq7reimagined.com — Beginner controls table",
      url: "https://dq7reimagined.com/meccha-chameleon/beginner-guide/",
    },
  ],
  content: [
    {
      id: "native-support",
      heading: "Native Controller Support: No",
      body: "SlashSkill's direct answer: MECCHA CHAMELEON has no native gamepad support. The Steam store page does not list controller compatibility, in-game menus expose no gamepad toggle, and developer lemorion_1224 has not announced official support at community report time. NeonLightsMedia agrees — the title is built entirely around keyboard and mouse, with paint menus, eyedropper precision, and camera orbit expecting a mouse. Steam Discussions near 3M sales include players asking for controller support now that the game exploded — treat that as ongoing community pressure, not a shipped feature.",
    },
    {
      id: "steam-input-desktop",
      heading: "Desktop PC — Steam Input Workaround",
      body: "SlashSkill: you can still use a controller by creating a Steam Input layout that maps gamepad buttons to keyboard and mouse actions. Enable controller support in Steam Settings → Controller, ensure Steam Input is on for the game (controller icon in library), and apply a community or custom layout. YouTube setup guides walk through enabling Xbox/PlayStation types and applying layouts before launch. Expect a setup job, not plug-and-play — test paint (F), pose wheel (hold R), and eyedropper in a private lobby before public matchmaking. Third-party mapping tools exist but add another failure layer; Steam Input is the documented community path.",
    },
    {
      id: "steam-deck",
      heading: "Steam Deck — Playable, Not Verified",
      body: "SlashSkill and NeonLightsMedia: Steam Deck lists the game as Playable, not Verified, because painting needs mouse-like input. Game-Meta's 2026 layout guide recommends right trackpad as mouse, gyro while touching trackpad for fine aim, left stick move, right stick camera, back buttons for utility shortcuts, and radial menus for paint tools. Community reports occasional launches stuck in keyboard-only mode until Steam Input is forced and the game restarts. Deck touchscreen can supplement sampling when trackpad sensitivity is tuned low.",
    },
    {
      id: "why-mouse-wins",
      heading: "Why Keyboard + Mouse Still Wins",
      body: "Painting is the bottleneck: brush resize (right mouse drag), Spacebar eyedropper accuracy, middle-mouse orbit checks, and metallic slider tweaks need precision thumbsticks cannot match. SlashSkill: competitive hiding leans hard on mouse, trackpad, or touchscreen — not analog stick painting. NeonLightsMedia warns thumbsticks are too clumsy for color matching that survives seeker sweeps. Controller layouts work for movement, pose wheel, and social emotes; serious prep timing still favors KB+M or Deck trackpad hybrids.",
    },
    {
      id: "sample-binds",
      heading: "Community Bind Examples (Verify Yours)",
      body: "dq7reimagined.com beginner table lists Y for whistle/taunt when using controller-style mappings — your layout may differ. Game-Meta maps back grips to paint menu or pose shortcuts. 9Puz HUD defaults: F paint, R pose/emote wheel, 1 taunt, SHIFT surface attach. After any Steam Input import, open Esc → Settings → Controls and confirm F, R, and eyedropper before inviting friends. Invert Y axis remains a separate Steam Discussion request — check Controls help for mouse invert status; controller invert depends on your Steam Input gyro/trackpad profile.",
    },
    {
      id: "invert-left-handed",
      heading: "Invert Y & Accessibility Notes",
      body: "Steam threads \"Needs Invert Y Axis option Please\" report players who cannot play without inverted mouse — no native menu toggle at report time. Left-handed and decades-long invert users ask for a simple flip on raw Y input. Controller users inheriting mouse emulation inherit the same gap unless Steam Input profile adds invert. Document honestly: verify each patch for a new Settings toggle before assuming the issue persists.",
    },
    {
      id: "when-controller-ok",
      heading: "When Controller-Style Play Is Fine",
      body: "Casual friend lobbies learning movement and emotes; seeker role with reduced paint demand; streamer couch co-op where one player paints on mouse and others use pads for chaos; Steam Deck handheld sessions with trackpad-as-mouse configured. Avoid controller-only prep in sweaty public lobbies where mouse hiders finish paint with seconds to spare. Pair with How to Paint Better and Emotes & Pose Wheel guides once binds are stable.",
    },
    {
      id: "next-steps",
      heading: "Next Steps",
      body: "Read Controls help for full default keybind list. If join fails on Deck, see Can't Join Lobby fix guide — version mismatch hits portable PCs the same as desktop. For painting fundamentals without controller friction, practice Mansion bathroom tiles on KB+M first, then migrate binds to Steam Input.",
    },
  ],
};
