import type { Guide } from "./types";

export const colorMatchingGuide: Guide = {
  slug: "color-matching",
  title: "Advanced Color Matching Guide",
  category: "Technique",
  readTime: "14 min",
  excerpt:
    "Hue, saturation, and value — plus map-specific palettes, gradient zones, dual-texture spots, and emergency recolor under seeker pressure.",
  content: [
    {
      id: "hsv",
      heading: "Hue, Saturation, and Value — The Real Match Triangle",
      body: "Most hiders think color matching means picking the right paint swatch. Seekers do not see swatches — they see contrast. Hue is the color family (brown wood, yellow wallpaper, steel blue). Saturation is how vivid that color reads on screen. Value is lightness versus darkness, and value is what seekers notice first when scanning at speed. A perfectly brown hider standing in a shadowed corner still glows if their value is too high. Train yourself to squint at the environment before you sample: squinting collapses hue into value and shows you where the dark patches live. On Mansion, warm wood trim and beige plaster share similar hue but different value — sample the wall segment your body actually touches, not the brightest trim piece nearby. On Sewer, low saturation rust greens hide better than vivid graffiti accents because seekers hunt saturation spikes before they parse shape. The practical rule: match value within one step, hue within two steps, saturation last. When you cannot have all three, sacrifice saturation before hue and hue before value in shadow, but reverse that order under direct light where wrong value reads as a sticker on the wall. Build a pre-round habit: identify the darkest acceptable sample in your target zone before choosing your final eyedropper pixel — that single habit fixes more deaths than any hex cheat sheet.",
    },
    {
      id: "map-palettes",
      heading: "Map Palettes — Mansion, Sewer, Backrooms, and Cold Storage",
      body: "Each official map trains a dominant palette into your muscle memory. Mansion runs warm browns (#8B4513 range), beige plaster (#F5DEB3), and deep wood (#654321). Spend prep phase mapping which room uses which block — library browns differ slightly from kitchen reds. Sewer is rust green on pipe metal (#2D4A3E to #5C7A6B) with charcoal junction floors; warm tones on this map look like player models under default lighting. Backrooms wallpaper yellow shifts subtly room to room (#C4B896 versus #E8DCC8) — the map punishes one-sample-and-go hiders more than any other official layout. Cold Storage demands cold steel gray (#6B8FA3) on shelving and meat props; anything with warm undertone pops against refrigerated metal. Keep a mental three-color list per map on entry: primary wall, secondary trim or prop, emergency shadow tone. Cross-reference palette hex ranges on meccha.wiki map pages when learning a new layout — they align with in-game sampling targets and reduce guesswork during your first ten rounds on a map.",
    },
    {
      id: "gradient-zones",
      heading: "Gradient Zones — Corners, Baseboards, and Shelf Gaps",
      body: "Flat color blocks are beginner-friendly; gradients are where intermediate hiders win and advanced hiders die from overconfidence. Corners collect shadow and darken value toward the floor. Baseboards on Mansion bathrooms and Backrooms office trim run one to two value steps darker than mid-wall — if you sample mid-wall and crouch low, your shoulders read bright. Shelf gaps in Cold Storage and library stacks create vertical gradients: front lip lighter, rear depth darker. Pick the value that matches where your silhouette bulk sits, not where your eyedropper cursor first landed. Gradient zones also appear on Sewer pipe bends where rust meets oil sheen — the sheen side is higher value and dangerous for full-body poses. When hiding on a gradient, break your outline against the busy side: tuck into the darker wedge, let the lighter wedge cover your head or feet depending on pose lock. Seekers sweeping gradients often scan the bright band first; holding still in the dark band buys seconds even when your hue is slightly off.",
    },
    {
      id: "dual-texture",
      heading: "Dual-Texture Spots — Tile, Grout, Graffiti, and Wood Trim",
      body: "Dual-texture spots require two samples and one decision about which texture owns your outline. Bathroom tile plus grout on Mansion is the classic case: tile is lighter, grout is darker and thinner. A flat wall pose on tile exposes rectangular shoulders; a crouch aligned to grout lines breaks the human block into noise. Graffiti walls on Sewer mix saturated tags with dull concrete — sample the dominant area your body covers, then check whether a limb sticks into a second color. Wood trim on Mansion door frames and Brick Loft beam edges adds a third tone; hiders who sample only the field wall leave high-contrast edges at knee and shoulder height. Workflow: sample texture A, sample texture B, compare value difference. If delta is large, choose the pose that hides the boundary on your body. If delta is small, prioritize pattern direction — align pose lock with horizontal grout or brick lines so the eye reads continuity. Dual-texture mastery is what separates 60% survival from 80% on medium-difficulty maps.",
    },
    {
      id: "light-shadow",
      heading: "Light Versus Shadow — When To Go Darker",
      body: "Light and shadow in Meccha Chameleon are not cosmetic — they change the effective value of your sampled color the moment you relocate. A sample taken under chandelier light on Mansion ballroom holds in that patch only; step into study shadow without re-sampling and you become a floating warm rectangle. Rule of thumb: sample in the lighting condition where you will lock. If you must rotate from light to shadow, re-sample on the move from the nearest surface at chest height — not the floor, not the ceiling unless you hide there. In shadow, go one step darker than the wall if you are unsure; slightly dark reads as depth, slightly light reads as error. Under direct fluorescent rows in Backrooms, wrong value is instant death — hue accuracy matters less than not being the brightest yellow in the corridor. Penguin Hotel pool deck and ice sculpture zones add specular highlights; avoid locking on highlight pixels unless your whole body sits in that highlight patch. Shadow play also helps seekers — watch for hiders who sampled light-side yellow and hid in dim office corners.",
    },
    {
      id: "emergency-recolor",
      heading: "Emergency Recolor — The Two-Second Freeze",
      body: "Emergency recolor is the panic skill that saves rounds when a seeker rounds a corner early. Sequence: nearest surface eyedrop, pose lock immediately, freeze for two full seconds without camera movement. Most public-lobby seekers overshoot when line-of-sight breaks because they assume you ran to the next room. Do not run unless you already know your next sample target — running creates motion tell and value smear on gradient walls. Best emergency surfaces are dark, textured, and close: Sewer pipe flank, Mansion bookshelf spine shadow, Cold Storage shelf lip. Avoid emergency sampling on reflective tile or pool water — you will lock the wrong value and shimmer. If spotted at range, sample before breaking line of sight when possible so your color is correct when they re-acquire. Practice emergency recolor in solo prep on Mansion bathroom: have a friend walk in or use round timer pressure until sample-lock-freeze is under 1.5 seconds. Pair this section with verified spots on meccha.wiki that list emergency wall colors for high-traffic rooms.",
    },
    {
      id: "pattern-matching",
      heading: "Pattern Matching — Books, Bricks, and Busy Props",
      body: "Pattern matching is advanced color work where hue accuracy matters less than breaking regularity. Bookshelf spines on Mansion library vary in color but repeat vertical rhythm — align pose lock vertically and let spine noise mask your edges. Exposed brick on Brick Loft shifts orange-red to deep brown by wall section; sample the brick course at your torso height and avoid window-adjacent walls where backlight kills value match. Graffiti on Sewer rewards hiders who sample mid-pattern rather than brightest tag color — brightest tags are seeker magnets. Prop mimic poses on Penguin Hotel ice sculptures and Mansion statuary require sampling the prop surface, not the wall behind the prop; outline error on statuary stone is obvious at three meters. Pattern density also affects seekers: busy patterns forgive small hue error, flat patterns forgive none. When choosing between a flat beige wall and a busy chair stack in Backrooms, take the stack if your pose breaks silhouette even at slightly worse hue. Document pattern-heavy spots in the community database after you verify them — pattern spots age better across patches than wall-clip exploits.",
    },
    {
      id: "common-mistakes",
      heading: "Common Color Mistakes — And Fast Fixes",
      body: "Mistake one: sampling from across the room. Fix: eyedropper the pixel adjacent to your lock position. Mistake two: one sample for entire Backrooms rotation. Fix: re-sample every doorway threshold — wallpaper value shifts are real. Mistake three: warm sample on Cold Storage. Fix: prioritize steel gray even if it looks dull; dull is invisible. Mistake four: highlight sampling on tile or ice. Fix: sample matte areas at torso height. Mistake five: ignoring grout or trim edges. Fix: dual-texture workflow from section four. Mistake six: chasing perfect hue while value is wrong. Fix: squint test, darken sample, re-lock. Mistake seven: emergency recolor on the move every time. Fix: freeze first, then relocate only if seeker pushes. Mistake eight: copying hex codes from guides without in-game verify. Fix: use meccha.wiki palettes as starting points, always confirm with eyedropper on your patch version. Review death replays mentally: if seekers found you without touching you, value or edge error beat bad positioning. Color fixes are faster than learning new spots. Keep a one-line note after each round — map, room, value versus hue versus edge — and your weak link becomes obvious within a week.",
    },
    {
      id: "seeker-counter",
      heading: "Thinking Like a Seeker While You Sample",
      body: "The final layer of color matching is predicting seeker scan paths while you paint. Seekers sweep at chest height first, then crouch late — sample for chest-height read unless your pose is explicitly crouch or ceiling. They hunt saturation spikes on Sewer graffiti and warm shifts on Cold Storage before checking bookshelf depth on Mansion. Ask: if I were seeking this room, which pixel would my eye snag first? That pixel is what you must match or break with texture. Dual-texture and pattern sections exist because seekers notice regular rectangles before they parse hue. When two sample targets tie, choose the one that survives a three-second stare from the door — not the one that looks perfect from your camera. Cross-training one seeker round per session sharpens this instinct; hiders who occasionally seek stop dying to obvious value tells they used to ignore. Pair with the Complete Seeker Guide on meccha.wiki to learn exactly which tells you are still broadcasting.",
    },
  ],
};
