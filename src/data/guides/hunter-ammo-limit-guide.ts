import type { Guide } from "./types";

export const hunterAmmoLimitGuide: Guide = {
  slug: "hunter-ammo-limit-guide",
  title: "Hunter Shot Limit & Ammo Settings — Stop Random Spraying",
  category: "Multiplayer",
  readTime: "6 min",
  excerpt:
    "Steam Discussions thread \"Unlimited Hunter firing should be LIMITED\" and patch v2.3.0's optional ammo limit — how hosts configure seeker shots and when Prop Hunt-style penalties help hiders.",
  sources: [
    {
      name: "Steam Discussions — Unlimited Hunter firing should be LIMITED",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431478884/",
    },
    {
      name: "Steam Discussions — cheating / ESP (spray vs skill context)",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431389981/",
    },
    {
      name: "GameRant — Lobby settings & mode configuration",
      url: "https://gamerant.com/meccha-chameleon-tips-tricks-strategies/",
    },
  ],
  content: [
    {
      id: "community-debate",
      heading: "Why Players Asked for Shot Limits",
      body: "A top Steam General Discussions thread asks the dev team to limit hunter firing quantity or add shot delay so random spraying stops punishing chameleons. Replies split fairly: some players want unlimited tags for fast chaos; others compare the game to Prop Hunt, where shooting wrong objects damaged the hunter and discouraged blind fire. Community consensus in that thread favors making any limit an optional host setting — not forced on every lobby — so competitive groups can enable it while meme rooms keep spray-friendly rules.",
    },
    {
      id: "v23-ammo-setting",
      heading: "Optional Ammo Limit (v2.3.0 Host Setting)",
      body: "Community fix guides and player reports describe update v2.3.0 adding an optional hunter ammo limit configurable before launch. Host flow cited in threads: press the blue Configure Map button in the lobby, open map configuration, and adjust the ammo limit control at the bottom of the left column. Exact default values can shift between patches — read the label in your current build rather than assuming unlimited tags. When enabled, seekers must spend shots deliberately instead of tagging every shadow, which hiders say improves fairness on dense maps like Backrooms chair stacks and Cold Storage aisle rows.",
    },
    {
      id: "when-to-enable",
      heading: "When Hosts Should Enable Ammo Limits",
      body: "Enable ammo limits for teaching lobbies where new seekers spam-click corners without scanning. Enable for 8+ player Infection rounds where hunter count snowballs and spray tags feel random. Keep unlimited firing for short meme sessions, streamer chaos rooms, and groups that already run disciplined seeker sweeps. GameRant's mode guide notes hosts tune hunt timer and forced taunt alongside mechanical limits — shorter clocks plus ammo caps create tense endgames; long clocks plus unlimited shots favor hider survival learning.",
    },
    {
      id: "hider-impact",
      heading: "What Changes for Hiders",
      body: "Ammo-limited lobbies reward holds over panic movement. Hiders who freeze after partial scans benefit because seekers hesitate to waste tags on uncertain edges. Cluster and prop-mimic hides gain value — seekers must confirm shape before shooting. Conversely, exposed plain-sight baits lose some pressure because seekers conserve shots. Pair ammo limits with forced taunt off if you want pure stealth practice; pair with Infection mode if you want escalating seeker count but still punish blind fire early round.",
    },
    {
      id: "seeker-discipline",
      heading: "Seeker Discipline With or Without Limits",
      body: "Even unlimited lobbies punish lazy seekers on clock — our Hunter Guide sweep order still applies: value mismatch before shape, crouch pass after chest pass, ceiling check on Sewer and Mansion. Ammo limits simply formalize what good seekers already do: confirm tells, tag once, move on. Train new hunters in private Basic lobbies with ammo cap on Mansion library first; graduate to unlimited public queue once tag accuracy improves. If you suspect ESP cross-map kills instead of legitimate spray, see Cheaters & Fair Play Guide — shot limits do not fix external tools.",
    },
    {
      id: "prop-hunt-comparison",
      heading: "Prop Hunt Comparison (Community Suggestion Only)",
      body: "Steam thread replies reference classic Prop Hunt hunter-health penalties for shooting props. MECCHA CHAMELEON at community report time offers optional ammo caps rather than damage-on-miss — verify your patch notes before expecting health-based penalties. Treat Prop Hunt comparisons as design context for why players requested limits, not as a shipped feature list. Hosts who want Prop Hunt-like tension combine ammo limits with shorter hunt timers and Infection mode.",
    },
  ],
};
