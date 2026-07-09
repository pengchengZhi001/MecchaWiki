import type { Guide } from "./types";

export const silhouetteShadowGuide: Guide = {
  slug: "silhouette-shadow-guide",
  title:
    "Silhouette & Shadow Hiding — Japanese Community Survival Tactics",
  category: "Strategy",
  readTime: "8 min",
  excerpt:
    "Japanese player guides (note.com, Gamerch, mecchachameleon.blog) stress eliminating human outlines and matching shadows — not just hue. Chair-leg poses, clutter depth, and open-area color discipline explained.",
  seoKeywords: [
    "silhouette",
    "shadow",
    "chair leg",
    "Japanese",
    "survival",
    "camouflage",
    "outline",
    "cluster hide",
  ],
  sources: [
    {
      name: "note.com/imokotrader — Survival tactics (Japanese)",
      url: "https://note.com/imokotrader/n/nb92c40e3c9d7",
    },
    {
      name: "Gamerch — Basic controls & beginner tips",
      url: "https://gamerch.com/mecha-chameleon/990645",
    },
    {
      name: "mecchachameleon.blog — Shadow and seeker psychology",
      url: "https://mecchachameleon.blog/",
    },
    {
      name: "mecchachameleonwiki.com — Gameplay camouflage",
      url: "https://mecchachameleonwiki.com/ja/gameplay/",
    },
  ],
  heroImage: {
    src: "/images/spots/backrooms-chair-stack.png",
    alt: "Backrooms chair stack — silhouette-breaking clutter hide",
    caption:
      "Japanese community guides rank chair stacks and deep clutter over flat open walls for breaking human outlines.",
  },
  content: [
    {
      id: "stop-being-human",
      heading: "\"Stop Being Human\" — Outline Over Hue",
      body: "note.com/imokotrader's widely shared Japanese guide argues the core skill is not art talent but eliminating the human read: become chair legs, floor grain, or pillar edges so seekers do not register a player-shaped lump. mecchachameleon.blog agrees — winning hide-and-seek here means stage color, prop placement, corners, shadows, and sightlines together, not a pretty single-tone fill. Gamerch warns beginners that moving randomly is forbidden; stillness with local color beats perfect paint on a standing silhouette. This complements our Prop Mimic & Cluster guide with a shadow-first framing popular in Japanese Steam and note communities.",
    },
    {
      id: "shadow-betrayal",
      heading: "Shadow Betrayal — When Paint Looks Right but Lighting Fails",
      body: "note.com/imokotrader titles a section on shadows exposing hiders who nailed hue but ignored value direction: a body painted wall-bright while sitting in a dark corner reads as a sticker; floor shadow mismatch gives seekers a free tell. mecchachameleonwiki.com recommends sampling both lit and shadow tones with the spoid tool — similar to English guides — but Japanese threads emphasize testing from the seeker's approach angle, not only your hide camera. Sample shadow-side pixels when tucking under furniture; sample lit tops only when your pose truly faces the light. Patch v1.1.0 brightened some stage shadows per community notes — re-verify dark-corner hides after updates.",
    },
    {
      id: "chair-leg-pose",
      heading: "Chair-Leg & Low Horizontal Poses",
      body: "note.com's \"chair leg\" tactic: slide under cluttered desks or chair rows, paint legs and floor grain, use sideways or low poses so vertical human height disappears. Gamerch lists furniture-adjacent spots as recommended because flat planes expose outlines —凹凸 (uneven geometry) forgives sampling errors. Backrooms chair stacks and Meeting Room cubicle mazes on Meccha Wiki are English-database equivalents — crouch among legs, not beside them. Middle-mouse 360° check for white elbow gaps before hunt phase ends.",
      image: {
        src: "/images/spots/meeting-room-cubicle-maze.png",
        alt: "Meeting Room cubicle maze — low clutter for chair-leg style hides",
        caption: "Workshop Meeting Room cubicles mirror the chair-leg concept — horizontal profile among desk legs.",
      },
    },
    {
      id: "clutter-depth",
      heading: "Three-Stage Clutter Depth (Near Miss → Deep Hide)",
      body: "note.com describes a phased approach Japanese players call shell-style hiding: stage one — hide among busy objects so seekers glance past a near miss; stage two — push deeper under or behind the cluster; stage three — freeze in a pose that removes human height entirely. mecchachameleon.blog tells seekers to prioritize unnatural roundness and broken patterns before hue — hiders who understand that logic reverse it by nesting inside pattern noise. Indoor Country hay piles and gumdrop clusters on our database are official-map versions of the same depth principle.",
    },
    {
      id: "open-area-discipline",
      heading: "Do Not Repaint in Open Sight",
      body: "note.com uses an octopus metaphor: changing colors in the middle of open ground is like a cephalopod exposing itself — seekers track movement and value shifts. Finish base coat in cover during prep phase; emergency repaints belong behind door frames or during seeker back-turn, not center-room. Mobalytics and our Why Keep Getting Found guide echo the same rule in English — Japanese community threads just stress it as the number-one ranked mistake after flat one-color paint.",
    },
    {
      id: "missed-spot-ranking",
      heading: "Missed-Spot Ranking vs Survival",
      body: "note.com notes surviving with a low \"missed spot\" ranking on the results screen can still mean a strong hide — seekers never looked at your zone. Conversely, top missed-spot ranks mean many hunters almost tagged you; high rank is not always better if you died. Use Results Screen guide to study both outcomes after rounds. Japanese players treat the reveal UI as a teaching loop; English players often only watch streamer clips without reading rankings.",
    },
    {
      id: "seeker-mirror",
      heading: "Play Seeker to Learn Silhouette Tells",
      body: "Gamerch and mecchachameleon.blog both insist hiders should play seeker rounds to learn where outlines pop — background color match alone fails when shape, shadow, or pattern breaks. Seekers hunt unnatural roundness, pattern discontinuities, and shadow direction before perfect RGB. After a seeker session, note which chair stacks you skipped — those are your next hider targets. Our Hunter Guide lists the same tells with English community sourcing.",
    },
    {
      id: "practice-checklist",
      heading: "Silhouette Prep Checklist",
      body: "Before hunt timer: (1) pick clutter with depth, not flat wall; (2) sample shadow and lit pixels your pose touches; (3) choose horizontal or tucked pose removing head height; (4) 360° white-gap check; (5) freeze — no open-area touch-ups. Pair with Prop Mimic guide for object-specific setups and Color Matching for hue/value basics. Re-test after patches that alter shadow brightness or prop collision.",
    },
  ],
};
