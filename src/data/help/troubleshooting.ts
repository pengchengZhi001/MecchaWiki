import type { HelpTopic } from "./types";

export const troubleshootingTopic: HelpTopic = {
  slug: "troubleshooting",
  title: "Connection Errors, Disconnects & Room Fixes",
  category: "Support",
  excerpt:
    "Common connection and lobby issues in MECCHA CHAMELEON — what each error usually means and what players can try on their own before giving up on a session.",
  items: [
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
        href: "/help/multiplayer",
        label: "Multiplayer & room setup guide",
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
        href: "/workshop-maps",
        label: "Browse curated workshop maps",
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
