import type { HelpTopic } from "./types";

export const hiderFaqTopic: HelpTopic = {
  slug: "hider-tips",
  title: "Hider FAQ — Evasion, Dodges & Survival Tricks",
  category: "Hider",
  excerpt:
    "Dodge techniques when spotted, prep-phase priorities, rotation rules, panic responses, and how to survive experienced seeker lobbies.",
  heroImage: {
    src: "/images/spots/sewer-ceiling-pipe.jpg",
    alt: "Sewer ceiling pipe — high vertical hide example",
  },
  items: [
    {
      id: "dodge-when-spotted",
      question: "A seeker saw me — how do I dodge without dying instantly?",
      tags: ["dodge", "evade", "spotted", "escape"],
      image: {
        src: "/images/spots/mansion-armchair-tuck.png",
        alt: "Armchair tuck spot on Mansion — emergency freeze hide",
        caption: "Sample nearest clutter, lock pose, freeze — running is usually worse.",
      },
      answer: [
        "Default panic response should be sample nearest wall → pose lock → freeze two seconds, not sprint across open floor. Most seekers overshoot broken line-of-sight.",
        "If you must move, break sightline first (corner, door frame), then recolor in the next room before they re-acquire.",
        "Never run in seeker FOV while unpainted white — you are the brightest object on the map.",
      ],
    },
    {
      id: "prep-phase-priority",
      question: "What should I do first every prep phase?",
      tags: ["prep", "checklist", "routine"],
      answer: [
        "Move to a pre-chosen spot (browse meccha.wiki spots for your map), sample local color, lock pose, then optional touch-up paint.",
        "Do not explore new rooms during prep in ranked chaos — pathing waste kills more hiders than bad hue.",
        "Listen for seeker-adjacent spawns if your mode reveals them; avoid setting up in rotation paths (ballroom center, Backrooms long corridors, loading bays).",
      ],
      relatedLink: {
        href: "/guides/prep-phase-guide",
        label: "Prep phase guide",
      },
    },
    {
      id: "when-to-rotate",
      question: "When should I rotate to a new hide mid-round?",
      tags: ["rotate", "move", "relocate"],
      answer: [
        "Rotate only when seeker back is turned, audio distraction hits another room, or your spot was partially scanned and they left assuming you ran.",
        "After surviving a partial scan, freeze five full seconds — seekers often abandon rooms after two failed passes.",
        "Re-sample at every doorway when rotating on Backrooms or workshop maps with multi-zone palettes.",
      ],
    },
    {
      id: "survive-sweaty-lobbies",
      question: "How do I survive lobbies where everyone ceiling-checks?",
      tags: ["sweaty", "competitive", "meta", "advanced"],
      image: {
        src: "/images/spots/mansion-kitchen-shelving.jpg",
        alt: "Kitchen shelving — floor meta that still works when ceilings are over-checked",
        caption: "When lobbies over-index ceiling meta, deep shelf backs and kitchen clutter regain value.",
      },
      answer: [
        "Meta pendulum: when every seeker looks up, return to rear shelf rows, kitchen gaps, and shadow baseboards — spots they now skip.",
        "Use bait-and-reset: let them glimpse you leaving zone A, lock early in zone B. They rush the wrong corner.",
        "Pick spots with single approach vectors so you hear them before they see you — audio wins ties in shelf backs.",
      ],
      relatedLink: {
        href: "/hidden-spots",
        label: "Browse rated hiding spots",
      },
    },
    {
      id: "pose-discipline",
      question: "My pose keeps breaking — what am I doing wrong?",
      tags: ["pose", "lock", "movement"],
      answer: [
        "Set pose during prep, not after hunt starts. Movement during hunt breaks lock and creates tells.",
        "Choose poses that match your sample value — wall-flat on gradient walls exposes bright shoulders if you sampled mid-wall but locked low.",
        "Read HUD release prompts before attaching to walls — mis-tapping release mid-round exposes you.",
      ],
    },
    {
      id: "worst-hider-mistakes",
      question: "What mistakes get beginners found first?",
      tags: ["mistakes", "beginner", "found first"],
      answer: [
        "Sampling across the room instead of at your body pixel.",
        "Camping obvious props without matching prop color.",
        "Moving while seekers face you.",
        "Choosing viral spots without finishing paint before hunt.",
        "Fighting in open rotation paths instead of crossing quickly.",
        "Ignoring sound on tile and metal floors.",
      ],
      relatedLink: {
        href: "/guides/beginner-basics",
        label: "Beginner hiding guide",
      },
    },
    {
      id: "mix-up-spots",
      question: "Should I reuse the same hiding spot every round?",
      tags: ["mix up", "habits", "rotation", "meta"],
      answer: [
        "DualShockers' top tip: never hide in the same place twice with the same group — previous spots become first-check zones on repeat maps. Switch height (under bed → ceiling perch), texture type (plush → metal pipe), and room zone each round.",
        "Same-map marathon sessions punish habit hiders hardest. Keep two backup spots per map from our hidden spots database so prep never becomes a scramble.",
        "Seekers should apply the same logic in reverse — after a friend wins from a ceiling perch, check ceilings earlier next round on that map.",
      ],
    },
    {
      id: "too-buried-warning",
      question: "What does the \"too buried\" or \"too covered\" warning mean?",
      tags: ["too buried", "too covered", "warning", "clip"],
      answer: [
        "DualShockers and dq7reimagined.com describe the warning when you wedge too deep into walls, shelves, or props — staying too long can auto-reveal your position to seekers.",
        "GameRant's Mansion balloon banner note: hide at the tallest natural balloon point; too low triggers the covered warning. Wiggle in small increments to find a wedged position that clears the warning without giving up the hide.",
        "Prep Phase Mastery on this site covers the full too-buried checklist — depth is a tool, not the goal; prefer believable placement with clean exit over maximum clip.",
      ],
      relatedLink: {
        href: "/guides/prep-phase-guide",
        label: "Prep phase & too-buried section",
      },
    },
    {
      id: "round-end-gallery",
      question: "Can everyone see my hide spot when I get eliminated?",
      tags: ["elimination", "reveal", "gallery", "round end", "spot"],
      answer: [
        "Steam reviews request a round-end gallery or elimination snapshot so all players — not just the tagging seeker — can appreciate clever hides. At community report time, only the seeker who tags you typically sees the full reveal in live play.",
        "Use free camera (4 key) after elimination to spectate remaining hiders and learn their setups for next round — documented in our Controls help.",
        "Streamers and clip channels fill the gap: iconic moments on this site link verified viral hides you can study between matches.",
      ],
      relatedLink: {
        href: "/help/iconic-moments",
        label: "Iconic moments & viral clips",
      },
    },
    {
      id: "whistle-hidden-score",
      question: "Does whistling add to my hidden score?",
      tags: ["whistle", "score", "points", "hidden", "taunt"],
      answer: [
        "A Steam review notes whistling should add points to your hidden score based on seeker proximity but did not appear to work in their sessions — treat scoring as inconsistent until patch notes confirm fixes.",
        "GameRant documents exposed plain-sight spots granting more points when camouflage holds under hunter sightlines — a separate scoring path from whistle mechanics.",
        "Forced Taunt auto-whistle is a host setting for audio hints, not a guaranteed score boost. See Game Modes guide for interval configuration.",
      ],
      relatedLink: {
        href: "/guides/game-modes-guide",
        label: "Game modes & forced taunt guide",
      },
    },
    {
      id: "exposed-spot-scoring",
      question: "Do exposed spots give more points?",
      tags: ["points", "score", "exposed", "plain sight"],
      answer: [
        "GameRant's strategy section states hiding in plain sight on hunter sightlines grants more points — but only if camouflage is excellent. High wall positions can stay in sight yet avoid direct scrutiny.",
        "GameRant also notes you can keep painting after hunters release if base color is done — risky but valid for finishing edges when seekers sweep elsewhere first.",
        "If you know you've been seen, GameRant recommends running — movement can earn points in view and sometimes breaks a bad tag attempt. Weigh risk vs your lobby's seeker skill.",
      ],
    },
  ],
};
