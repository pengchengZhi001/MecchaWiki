import type { HelpTopic } from "./types";

export const troubleshootingTopic: HelpTopic = {
  slug: "troubleshooting",
  title: "Connection Errors, Disconnects & Room Fixes",
  category: "Support",
  excerpt:
    "Common connection and lobby issues in MECCHA CHAMELEON — version mismatch, auth token errors, lag, and what players report on Steam Discussions.",
  items: [
    {
      id: "eula-cant-join",
      question: "Friend can't join after EULA — we picked random language",
      tags: ["eula", "terms", "agreement", "can't join"],
      answer: [
        "Steam thread \"Can't join friends server\" reports both parties must agree to the current EULA before sharing a lobby — one friend restarting and accepting the prompt fixed the issue.",
        "If someone accepted a non-English EULA at random during install and the popup never returns, verify game files in Steam or reinstall so the agreement screen reappears.",
        "After EULA parity, still confirm same game version and create a fresh room — EULA blocks look like generic invite failures.",
      ],
      relatedLink: {
        href: "/guides/fix-cant-join-lobby",
        label: "Full Can't Join Lobby fix guide",
      },
    },
    {
      id: "pc-overheating",
      question: "Game heats my PC / runs very hot — is that normal?",
      tags: ["overheat", "hot", "temperature", "fan", "performance"],
      answer: [
        "Steam General Discussions include reports of the game heating PCs heavily during launch week — UE5 hide-and-seek with full lobbies can spike GPU and CPU load similar to other Unreal titles.",
        "Try the same settings from our lag guide: -dx11 launch option, lower Global Illumination, disable Motion Blur, cap FPS if your driver supports it, and ensure vents are clear.",
        "If thermals throttle performance, reduce lobby size or resolution before blaming network — stutter from heat can feel like desync.",
      ],
      relatedLink: {
        href: "/guides/fix-lag-blurry-screen",
        label: "Lag & performance settings guide",
      },
    },
    {
      id: "cant-join-lobby",
      question: "Can't join any lobby — what should I try first?",
      tags: ["can't join", "lobby", "connect", "multiplayer"],
      answer: [
        "Version mismatch is the #1 cause per community fix guides and v1.1.0 patch notes: everyone closes the game, exits Steam fully, confirms no pending update, then the host creates a brand-new room.",
        "If Steam invites fail, use the in-game server browser with a unique server name instead — multiple community reports describe black screens and auth failures from desktop invites.",
        "Test with an official map before blaming workshop subscriptions — every player must subscribe to custom maps the host selects.",
      ],
      relatedLink: {
        href: "/guides/fix-cant-join-lobby",
        label: "Full Can't Join Lobby fix guide",
      },
    },
    {
      id: "authentication-token",
      question: "Invalid or missing authentication token at login",
      tags: ["authentication", "token", "login", "eos"],
      answer: [
        "Steam General Discussions report this when Epic Online Services cannot validate your Steam identity. Most cited fixes: add -dx11 to Steam Launch Options, relink Steam on epicgames.com → Account Settings → Apps and Accounts, and set PenguinHotel.exe compatibility (disable Run as administrator, enable Disable fullscreen optimizations).",
        "Network blockers matter — one thread reports success on mobile hotspot but failure on home Wi‑Fi; another fixed login by disabling Pi-hole DNS filtering temporarily.",
      ],
      relatedLink: {
        href: "/guides/fix-authentication-token",
        label: "Full authentication token fix guide",
      },
    },
    {
      id: "lag-blurry",
      question: "Game is laggy or paint textures look blurry",
      tags: ["lag", "fps", "blurry", "stutter"],
      answer: [
        "Community testing reports blurry paint often fixes with a display reset: switch to Windowed, apply, wait, switch back to Fullscreen at native resolution.",
        "Add -dx11 to Launch Options for stuttering and shader hitches. Turn Motion Blur off; lower Global Illumination to Medium. Confirm Windows display scaling is 100% if eyedropper feels misaligned.",
      ],
      relatedLink: {
        href: "/guides/fix-lag-blurry-screen",
        label: "Full lag & blurry screen fix guide",
      },
    },
    {
      id: "disconnected-mid-game",
      question: "I got disconnected mid-game — what now?",
      tags: ["disconnect", "dc", "kick", "connection lost"],
      answer: [
        "Note the exact error text if one appears — wording helps distinguish host drop vs your network blip vs version kick.",
        "Restart Steam, verify the game updated, and rejoin through a fresh invite. Reconnecting to the same stale session often fails after host migration.",
        "If disconnects repeat only on one host, switch host to a player on wired Ethernet with fewer background apps. Wi‑Fi hosts running OBS plus Discord plus Steam overlay cause more drops.",
        "Check Steam server status and patch notes — launch-week patches sometimes require full client restart, not just reconnect.",
      ],
    },
    {
      id: "version-mismatch",
      question: "Friends say version mismatch — how do we fix it?",
      tags: ["version", "update", "patch", "mismatch"],
      answer: [
        "Everyone closes the game completely, restarts Steam, waits for downloads to finish, then relaunches. Partial updates (Steam still syncing in background) cause invisible mismatch.",
        "Host creates a new room after all players confirm the same build number in Settings or main menu footer if displayed.",
        "Workshop-heavy lobbies: ensure custom map subscriptions updated too — map mismatch feels like version mismatch.",
      ],
    },
    {
      id: "empty-server-browser",
      question: "Server browser is empty — is multiplayer broken?",
      tags: ["server browser", "find server", "no rooms"],
      answer: [
        "Not necessarily. Patch v1.1.0 changed public search so in-progress games may not list. You only see joinable lobbies, which can look empty during off-peak hours.",
        "Toggle Search Public Servers, clear name filters, and retry after peak evening hours in your region.",
        "Hosting your own public room for five minutes often populates faster than waiting on an empty browser — friends plus randoms fill slots.",
      ],
    },
    {
      id: "invite-fails",
      question: "Steam invite fails or friend joins wrong room",
      tags: ["invite", "steam friends", "join failed"],
      answer: [
        "Host should recreate the room after any map or password change. Old invites point at dead session IDs.",
        "Friend accepts invite from Steam overlay while game is at main menu — joining from desktop notification while in another lobby sometimes fails silently.",
        "Use a unique server name plus password for private tests so friends confirm they landed in the right lobby before prep starts.",
      ],
      relatedLink: {
        href: "/guides/fix-steam-invite-not-working",
        label: "Steam invite fix guide",
      },
    },
    {
      id: "workshop-map-wont-load",
      question: "Lobby stuck loading or kicks when workshop map selected",
      tags: ["workshop", "custom map", "loading"],
      image: {
        src: "/images/maps/steam-4.jpg",
        alt: "Sewer official map — test with official maps before blaming workshop",
        caption: "Test with an official map first to isolate workshop subscription issues.",
      },
      answer: [
        "Every player must subscribe to the workshop map on Steam and restart the game so local files download.",
        "Host should pick workshop maps everyone confirmed in Discord beforehand — surprise map swaps mid-invite chain cause failed loads.",
        "If load fails repeatedly, switch to an official map (Mansion, Sewer) to verify connectivity, then re-add workshop once base multiplayer works.",
      ],
      relatedLink: {
        href: "/guides/fix-workshop-map-loading",
        label: "Workshop map loading fix guide",
      },
    },
    {
      id: "when-to-touch-firewall",
      question: "Should I change firewall or router settings?",
      tags: ["firewall", "ports", "network", "vpn"],
      answer: [
        "Only after simple checks fail: same version, Steam restart, new room, smaller private test, different host once.",
        "Most casual room problems are stale sessions or version skew — not port forwarding. Deep network changes should be last resort.",
        "Disable VPN for testing; VPN adds latency and sometimes blocks Steam P2P relay paths the game uses.",
      ],
    },
    {
      id: "taunt-not-working",
      question: "Whistle / taunt works in lobby but not on the map",
      tags: ["taunt", "whistle", "not working", "bug", "emote"],
      answer: [
        "Steam thread \"TAUNT IS NOT WORKING!\" (June 23, 2026) reports widespread issues where manual taunt/whistle worked in the lobby but failed during live matches — dozens of players confirmed the same build-day regression.",
        "Community workaround at report time: hosts increased seeking time or disabled forced-taunt reliance until patches landed; verify your client version against friends before blaming individual keybinds.",
        "After elimination, whistle reverts to spectator taunt only (allthings.how) — during hunt phase, confirm Esc → Settings → Controls still maps the whistle key (often 1) and that forced taunt host settings match your lobby rules.",
      ],
      relatedLink: {
        href: "https://steamcommunity.com/app/4704690/discussions/0/571541826108933277/",
        label: "Steam Discussions — taunt not working thread",
      },
    },
    {
      id: "hunter-black-void",
      question: "Seeker sees a black void — hiders floating in empty space",
      tags: ["black void", "map load", "workshop", "seeker", "glitch"],
      answer: [
        "Steam cheating threads note an alternative explanation for \"ESP\" behaviour: on custom maps the hunter's stage sometimes fails to load, leaving a black void while hider models appear scattered — cross-map tags then look like hacks but may be a load desync.",
        "Fix path: every player subscribes to the workshop map, restarts the game after download completes, host tests with an official map (Mansion) first, then re-selects the custom map with a fresh room.",
        "If only the host sees void while hiders play normally, host should verify files, lower graphics preset once, and recreate lobby — do not report players for cheating until load parity is confirmed.",
      ],
      relatedLink: {
        href: "/guides/fix-workshop-map-loading",
        label: "Workshop map loading fix guide",
      },
    },
    {
      id: "desync-lobby",
      question: "Everyone is standing still but the round feels desynced",
      tags: ["desync", "lag", "rubber band"],
      answer: [
        "High packet loss shows as delayed tags, players teleporting, or prep timers not matching. Host on wired connection, others pause downloads during the match.",
        "Lower lobby player count to test — 10+ players on a weak host exaggerates desync.",
        "If only one player desyncs, they should check Wi‑Fi signal, close torrent clients, and retry wired.",
      ],
    },
  ],
};
