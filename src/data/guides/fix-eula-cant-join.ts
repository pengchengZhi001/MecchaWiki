import type { Guide } from "./types";

export const fixEulaCantJoinGuide: Guide = {
  slug: "fix-eula-cant-join",
  title: "EULA Blocks Friend Lobby — Meccha Chameleon Fix Guide",
  category: "Fix",
  readTime: "7 min",
  excerpt:
    "Friend can't join after random EULA language, terms popup never returns, or lobby fails with no clear error — both players must accept current terms before shared rooms work.",
  seoKeywords: [
    "EULA",
    "terms of service",
    "can't join friends",
    "agreement",
    "random language",
    "terms not accepted",
    "lobby blocked",
  ],
  sources: [
    {
      name: "Steam Discussions — Can't join friends server (EULA)",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431442266/",
    },
    {
      name: "Steam Discussions — IN-GAME INVITE NOT WORKING",
      url: "https://steamcommunity.com/app/4704690/discussions/0/562534659773185812/",
    },
    {
      name: "MECCHA CHAMELEON on Steam (App 4704690)",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
  ],
  content: [
    {
      id: "what-this-is",
      heading: "What the EULA Block Actually Is",
      body: "MECCHA CHAMELEON shows a terms-of-service (EULA) agreement on first launch or after some updates. Steam thread \"Can't join friends server\" reports that if both parties have not agreed to the current EULA, they cannot play in the same lobby — even when Steam friends lists look fine and invites appear to send. Symptoms mimic generic multiplayer failure: friend accepts invite but nothing happens, black screen then menu, host sees empty slot, or \"can't join\" with no version mismatch message. This is not a firewall or auth token issue — fix EULA parity before debugging network settings.",
    },
    {
      id: "symptoms",
      heading: "Symptoms That Point to EULA (Not Version Mismatch)",
      body: "Strong EULA signals: only one friend in the group cannot join while others can; problem started right after first install; someone clicked through a language picker at random during setup; one player never saw a terms popup but others did; issue persists after everyone confirms same game version. Weak signals that suggest other guides first: authentication token text at login (Auth Token guide), workshop map selected without subscriptions (Workshop Map Loading guide), invite works from Find Server but not desktop notification (Steam Invite guide). Run EULA checks in parallel with version parity — both block lobbies and both take under two minutes.",
    },
    {
      id: "step-1-both-accept",
      heading: "Step 1 — Both Players Launch Solo and Accept Terms",
      body: "Each account launches MECCHA CHAMELEON alone from the Steam library — not via invite. Wait for any EULA or terms prompt and accept in a language you can read. Steam thread reports one friend restarting the game and accepting the prompt fixed the issue for the whole group. After accepting, fully close the game and relaunch once to confirm the prompt does not reappear incorrectly. Host and every guest repeat this before the next invite attempt.",
    },
    {
      id: "step-2-random-language",
      heading: "Step 2 — Random Language at Install (Popup Never Returns)",
      body: "Install-time language pickers sometimes default to a random locale. Players accept terms in a language they do not understand, or dismiss a dialog thinking it was unrelated — then the agreement screen never returns on later launches. Fix: Steam library → right-click MECCHA CHAMELEON → Properties → Installed Files → Verify integrity of game files. Verification can restore missing agreement state without a full reinstall. If verify does not restore the prompt, uninstall through Steam, restart PC, reinstall, and read each dialog on first boot — do not mash through language selection.",
    },
    {
      id: "step-3-after-patch",
      heading: "Step 3 — New EULA After a Steam Update",
      body: "Some patches re-prompt terms when the legal text changes. One friend updates overnight and accepts the new EULA; another launches from a suspended session and skips the prompt. Result: version numbers match but lobby join fails. After any patch week, have every player restart Steam, launch solo, accept any new terms, then create a brand-new room. See Problems After v2.5.0 guide for the current patch checklist. EULA parity plus fresh room resolves most post-update invite failures that are not version skew.",
    },
    {
      id: "step-4-fresh-room",
      heading: "Step 4 — Create a Fresh Room After EULA Parity",
      body: "EULA blocks do not heal stale lobby sessions. Host must Create Server again after all friends confirm terms accepted — old session IDs from before EULA alignment still fail. Pick Mansion, set a unique server name, send new invites or use Find Server by name. Do not reuse invites sent before the EULA fix. If one friend still fails, that friend verifies game files solo before the group retries.",
    },
    {
      id: "step-5-vs-auth",
      heading: "Step 5 — EULA Fixed But Still Can't Join?",
      body: "If terms are accepted on all accounts and a fresh Mansion room still fails, escalate in order: (1) confirm same build in Steam Downloads, (2) Can't Join Lobby guide, (3) Authentication Token guide if login errors appear, (4) Steam Invite guide if only overlay invites fail. EULA and auth are separate systems — EOS token errors at launch are not fixed by accepting terms alone. First Match Checklist orders these steps for new purchasers.",
    },
    {
      id: "party-checklist",
      heading: "Party Night Checklist (Copy to Discord)",
      body: "Before host sends invites: everyone restarted Steam today, no pending download, each player launched solo once and accepted terms, host creates new room on agreed map, workshop maps subscribed if needed. Ask explicitly in voice: \"Did you see EULA this week?\" — silent skips cause hour-long debugging. Link this guide when one friend is stuck and others are in — fixes the outlier account, not the whole group reinstall.",
    },
    {
      id: "quick-summary",
      heading: "Quick Summary",
      body: "Both players must accept current EULA → verify files if popup vanished after random language → solo launch after patches → fresh room and new invites → then other fix guides if still broken. Most EULA blocks resolve in one restart cycle per affected account — no router changes required.",
    },
  ],
};
