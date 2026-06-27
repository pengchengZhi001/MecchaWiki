import type { HelpTopic } from "./types";

export const controlsTopic: HelpTopic = {
  slug: "controls",
  title: "Controls & Keybinds Explained",
  category: "Mechanics",
  excerpt:
    "Every default PC keybind — movement, paint menu, pose wheel, seeker tagging, camera orbit, and how to rebind after patches.",
  heroImage: {
    src: "/images/spots/mansion-kitchen-shelving.jpg",
    alt: "Mansion kitchen shelving — prep phase movement and camera control matter here",
  },
  items: [
    {
      id: "basic-movement",
      question: "What are the basic movement controls?",
      tags: ["wasd", "move", "camera", "mouse"],
      answer: [
        "W A S D moves your character. Mouse look controls the camera. There is no dedicated sprint button — movement speed is fixed, so \"running\" in prep phase means pathing efficiently, not holding Shift.",
        "Seekers use the same movement scheme while scanning. Lower mouse sensitivity helps wall sweeps — you want smooth horizontal pans, not jerky flicks that miss edge tells.",
        "Crouch (default Ctrl) lets seekers check low angles and helps hiders tuck under furniture during prep. There is no jump-spam meta; vertical spots use map geometry and pose locks instead.",
      ],
    },
    {
      id: "paint-pose-keys",
      question: "Which keys open paint and pose menus?",
      tags: ["paint", "pose", "f key", "r key"],
      image: {
        src: "/images/spots/mansion-bathroom-tiles.jpg",
        alt: "Bathroom tile spot demonstrating color sampling during prep",
        caption: "F opens paint tools; R opens pose options — learn both before hunt phase starts.",
      },
      answer: [
        "F opens the paint menu: palette, brushes, eyedropper sampling, and surface sliders (metallic / roughness). R opens the pose menu: crouch, wall-flat, curl, and object-mimic options depending on map context.",
        "Left mouse button applies paint strokes and confirms UI selections. Middle mouse button rotates the camera while painting so you can sample distant walls without walking to them.",
        "Inside the paint menu, Spacebar often triggers quick eyedropper sampling (confirm in Settings after patches). Hiders live in third-person while painting; seekers typically hunt in first-person.",
      ],
      relatedLink: {
        href: "/help/painting",
        label: "Full painting & eyedropper guide",
      },
    },
    {
      id: "seeker-tag-controls",
      question: "How do seekers tag hiders?",
      tags: ["seeker", "tag", "attack", "hunter"],
      answer: [
        "Aim at a hider and use left mouse button to tag/interact. Tags require line of sight — you cannot wall-tag through geometry.",
        "Switch between third-person and first-person views using the view toggle shown on your HUD (label varies by patch). First-person helps inspect suspicious edges; third-person helps corner clears.",
        "Experienced seekers crouch-sweep baseboards after chest-height passes fail. Audio cues from footsteps and pose animations matter as much as visual tags.",
      ],
      relatedLink: {
        href: "/guides/hunter-guide",
        label: "Full seeker strategy guide",
      },
    },
    {
      id: "wall-stick-release",
      question: "How do I release a wall-stick or flat pose?",
      tags: ["pose", "wall", "stick", "release"],
      answer: [
        "Wall-flat and stick poses display a HUD prompt for the release key — often Shift or the key shown on screen at lock time. Read the prompt before prep ends; panicking after hunt phase starts costs seconds you do not have.",
        "After releasing, you can re-open pose (R) and paint (F) menus if hunt rules allow movement. Breaking pose during seeker line-of-sight creates motion tells — release only when they look away or rotate rooms.",
        "Height fine-tuning on stick poses sometimes uses up/down arrow keys while attached — test in a private lobby because patch notes occasionally remap these helpers.",
      ],
    },
    {
      id: "rebind-keys",
      question: "Can I rebind keys? Controls feel wrong after an update.",
      tags: ["settings", "rebind", "keybinds"],
      answer: [
        "Yes. Esc → Settings → Controls exposes the full bind list. Rebind one key at a time and test in a private room before ranked chaos.",
        "After major patches, hit Reset to Defaults, then remap only the keys you customize. Updates sometimes shuffle rarely-used binds while leaving WASD and mouse untouched.",
        "Confirm paint (F) and pose (R) before inviting friends — these two keys decide whether you finish prep in time.",
      ],
    },
    {
      id: "controller-support",
      question: "Does MECCHA CHAMELEON support controllers?",
      tags: ["controller", "gamepad", "xbox controller"],
      answer: [
        "Steam does not list official full controller support. The game is built around keyboard and mouse — paint menus, eyedropper precision, and camera orbit expect a mouse.",
        "Third-party tools can map gamepads manually, but competitive prep timing is harder without mouse aim for sampling. Stick to KB+M for serious sessions.",
      ],
    },
    {
      id: "chat-voice",
      question: "How do chat and voice work?",
      tags: ["chat", "voice", "microphone", "t key"],
      answer: [
        "Text chat uses T in many lobbies (confirm on your HUD). Proximity voice chat is supported in-game for party banter — test mic levels before public rooms.",
        "Many groups run Discord alongside Steam voice. Mute one source to avoid echo. Streamers should use push-to-talk so paint-phase whispers do not leak strats.",
      ],
    },
    {
      id: "whistle-taunt-key",
      question: "How do I whistle or use forced taunt?",
      tags: ["whistle", "taunt", "forced taunt", "1 key"],
      answer: [
        "GameRant's control notes cite the 1 key for manual whistling when hosts enable taunt-related settings. Confirm your bind in Esc → Settings → Controls after patches — community guides warn keybinds can shift between updates.",
        "Forced Taunt is a host lobby option: when enabled, players auto-whistle on an interval (allthings.how reports ~45 seconds by default) to give seekers audio hints in large groups. Manual whistles reset that countdown so you pick a safer moment to make noise.",
        "DualShockers notes the whistle is louder or softer by distance but does not pinpoint your exact position — some hiders use it to misdirect seekers toward the wrong room.",
      ],
      relatedLink: {
        href: "/guides/game-modes-guide",
        label: "Game modes & forced taunt guide",
      },
    },
    {
      id: "free-camera",
      question: "What is free camera after I hide?",
      tags: ["free camera", "spectator", "4 key", "5 key"],
      answer: [
        "GameRant: once hidden and the hunt phase starts, press 5 to target and follow hunters, or press 4 for full free-roam camera — you can watch the map without moving your body.",
        "After elimination, free-fly spectator camera unlocks fully; whistle becomes cosmetic taunt only (meccha-chameleon.wiki mechanics page) with no effect on hide timers.",
        "Use free camera to learn seeker sweep patterns between rounds — do not confuse spectator vision with fair competitive rules in public lobbies where late joiners reportedly see live positions (see Public Lobby Guide).",
      ],
    },
  ],
};
