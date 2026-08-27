import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 730;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const cs2Wiki: FullWiki = {
  slug: "counter-strike-2",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Defaults, ecos, and retakes — not a highlight reel.",
      roles: "Support and the easy jobs first.",
      maps: "Dust II, Mirage, and Inferno before the harder pool.",
      guides: "Beginner path, economy, utility, Premier, and mechanics.",
    },
    pages: {
      maps: "Learn the CS2 map pool the same way Mistfall teaches extracts — one space at a time.",
      roles: "Beginner-friendly roles first. Save the hard jobs until the loop is automatic.",
      strats: "Card-style paths for CS2 — the same job extraction routes do on Mistfall.",
    },
  },
  maps: [
    {
      slug: "dust-2",
      name: "Dust II",
      difficulty: "Easy",
      tagline: "The onboarding map: long, cat, and a mid that decides the round.",
      overview:
        "Dust II is still the first map most players should learn. T-side wants Long control or a mid-to-B split. CT-side lives on a two-player B hold, a Long player who can fall to site, and someone who can see mid. Call A, B, Long, Cat, Mid, Xbox, and Pit before you add Faceit-only names.",
      stats: [
        { label: "Learn first", value: "Yes — best first competitive map" },
        { label: "T default", value: "Long control or mid pick into B" },
        { label: "CT hold", value: "2B · 1 Long · 1 Mid · 1 Cat/rotator" },
      ],
      poi: [
        { name: "Long A", note: "T-side rifle duel. A smoke on CT and a flash over doors still win more rounds than a naked peek." },
        { name: "Catwalk", note: "Connects mid to A. CT cat player must hear footsteps or the site collapses." },
        { name: "Xbox / Mid", note: "The round-winner. A mid pick plus a B lurk is a classic split." },
        { name: "B tunnels", note: "Close angles and a door smoke. Do not walk out of tunnels without a flash if CTs are stacked." },
        { name: "Pit", note: "CT A-site depth. Strong after plant; weak if you never trade the first Long peek." },
      ],
      notes: [
        "Play Deathmatch on Dust II until Long and mid peeks feel boring.",
        "A-site retakes need utility from CT spawn — do not 1v3 from pit every time.",
        "If your B player dies in the first 20 seconds, someone from mid has to rotate immediately.",
      ],
      image: header("Dust II bombsite overview in Counter-Strike 2"),
      seoKeywords: ["Dust II guide", "Dust 2 callouts", "Dust II smokes"],
    },
    {
      slug: "mirage",
      name: "Mirage",
      difficulty: "Medium",
      tagline: "Mid window, connector, and palace — the map that punishes disconnected defaults.",
      overview:
        "Mirage is a mid-control map. Whoever owns window and connector usually gets to choose A or B. T-side defaults should take map, not run a YouTube execute at 1:40 every round. CT-side needs a window player who can fall, a connector who can delay, and a B player who will not peek short for no reason.",
      stats: [
        { label: "Key space", value: "Mid window + connector" },
        { label: "T default", value: "Underpass / mid control, then collapse" },
        { label: "CT hold", value: "Window, connector, jungle/stairs, B apps" },
      ],
      poi: [
        { name: "Mid window", note: "AWP and rifle fights. A one-way or a deep smoke changes how CTs play A." },
        { name: "Connector", note: "The rotate. Losing connector means A and B both feel late." },
        { name: "Palace / ramp", note: "A execute space. Flash over palace, not into your own teammates." },
        { name: "Apps / apartment", note: "B take. Bench and van still catch greedy T-sides." },
        { name: "Jungle / stairs", note: "CT A depth. Hold for the plant, then trade." },
      ],
      notes: [
        "Do not throw all five smokes at 1:55 if you have not taken mid.",
        "A window player who never falls is how you get walked in palace.",
        "Market window on B is a delay tool, not a deathmatch angle.",
      ],
      image: header("Mirage mid control in Counter-Strike 2"),
      seoKeywords: ["Mirage guide", "Mirage mid", "Mirage smokes"],
    },
    {
      slug: "inferno",
      name: "Inferno",
      difficulty: "Medium",
      tagline: "Banana is the round. Win it or play a 4v5 retake on B.",
      overview:
        "Inferno is a close-range, utility-heavy map. T-side lives on banana control and a late A split through apartments. CT-side should not all-in banana every round — a molotov and a player who can fall to fountain still hold B. Learn banana, apps, balcony, pit, and library before you worry about pixel boosts.",
      stats: [
        { label: "Key space", value: "Banana" },
        { label: "T default", value: "Banana control, then A apps or B take" },
        { label: "CT hold", value: "1–2 banana, 2 A, 1 mid/rotator" },
      ],
      poi: [
        { name: "Banana", note: "Utility war. First molotov and the second-wave flash decide more rounds than aim." },
        { name: "Apartments", note: "A split. Boiler and balcony need a flash; walking boiler is free." },
        { name: "Pit / library", note: "A-site depth for CTs after the plant." },
        { name: "Arch / mid", note: "Info and a lurk. A mid pick opens A without a full banana commit." },
        { name: "CT / fountain", note: "B retake path. Save a smoke for the plant, not for the first banana peek." },
      ],
      notes: [
        "If banana is lost, play for a retake instead of peeking into five rifles.",
        "A-site executes still need someone lurking banana so CTs cannot full-rotate.",
        "Close-range sprays win Inferno. Learn to burst at 10 meters.",
      ],
      image: header("Inferno banana control in Counter-Strike 2"),
      seoKeywords: ["Inferno guide", "Inferno banana", "Inferno smokes"],
    },
    {
      slug: "ancient",
      name: "Ancient",
      difficulty: "Hard",
      tagline: "CT-sided mid and a donut that punishes late rotates.",
      overview:
        "Ancient is less forgiving than Dust II. Mid and donut are the map. T-side needs a real default — cave, mid, and a split — not five people walking A ramp. CT-side should delay with utility and not donate the AWP in mid every round.",
      stats: [
        { label: "Key space", value: "Mid + donut" },
        { label: "T default", value: "Cave/mid control into A or B split" },
        { label: "CT hold", value: "Mid, donut, A ramp, B cave" },
      ],
      poi: [
        { name: "Donut", note: "Connects A and B. Losing it means both sites feel late." },
        { name: "A ramp / temple", note: "T execute space. Need a smoke and a trade, not a solo walk." },
        { name: "Mid", note: "AWP duel. Utility before the peek." },
        { name: "B cave / ruin", note: "Close holds and a lot of sound. Don't dry-peek the same angle twice." },
        { name: "Elbow / lane", note: "Rotate timing. Call when you leave so teammates do not 2v5 a site." },
      ],
      notes: [
        "Learn Ancient after Dust II, Mirage, and Inferno — not as map one.",
        "A successful T round often starts with a mid pick, not a full-buy execute at 1:50.",
        "CTs: one player must be allowed to fall. Hero peeks lose the half.",
      ],
      image: header("Ancient mid fight in Counter-Strike 2"),
      seoKeywords: ["Ancient guide", "Ancient callouts", "Ancient smokes"],
    },
    {
      slug: "nuke",
      name: "Nuke",
      difficulty: "Hard",
      tagline: "Vertical map: ramp, hut, and outside are three different games.",
      overview:
        "Nuke punishes teams that cannot talk. Outside control, ramp, and hut/heaven are different layers. T-side should pick one story — ramp take, outside hit, or a hut smash — and not do all three half-committed. CT-side needs a player who can hear lower and a player who will not peek outside for no info.",
      stats: [
        { label: "Key space", value: "Ramp + outside + hut" },
        { label: "T default", value: "Ramp control or outside into secret" },
        { label: "CT hold", value: "Ramp, hut/heaven, outside, lower rotator" },
      ],
      poi: [
        { name: "Ramp", note: "T default. Smokes and a trade. Solo ramp is how you start 4v5." },
        { name: "Hut / heaven", note: "A-site vertical. Flashes over hut still work if you do not flash your entry." },
        { name: "Outside", note: "Long duels and a secret drop. Don't peek main without a plan to get in." },
        { name: "Secret / squeaky", note: "Lower access. Sound gives you away — walk when it matters." },
        { name: "Lower / rafters", note: "B plant depth. CTs win by delaying, not by dying first." },
      ],
      notes: [
        "Call upper vs lower every rotate. Silent rotates lose plants.",
        "Save a molotov for a plant, not for the first outside peek every round.",
        "If you are new, play ramp or hut — not a freelance outside AWP until you know timings.",
      ],
      image: header("Nuke bombsite layers in Counter-Strike 2"),
      seoKeywords: ["Nuke guide", "Nuke ramp", "Nuke outside"],
    },
    {
      slug: "overpass",
      name: "Overpass",
      difficulty: "Medium",
      tagline: "Long rotates, monster, and a B site that rewards patience.",
      overview:
        "Overpass is a timing map. T-side defaults through monster or bathrooms into B, or a long A hit through playground. CT-side has long rotate times — if B dies in 15 seconds, A cannot save it. Play for delay, not for a highlight peek on fountain.",
      stats: [
        { label: "Key space", value: "Monster + bathrooms + long A" },
        { label: "T default", value: "Monster/bathrooms into B, or playground A" },
        { label: "CT hold", value: "2B, 1 bathrooms, 2 A / rotator" },
      ],
      poi: [
        { name: "Monster", note: "B take. Walk and utility. Sprinting monster is a free spray." },
        { name: "Bathrooms / connector", note: "Mid map. Info here decides if CTs can stack B." },
        { name: "Playground / long", note: "A execute. Need a smoke for van or you die to an AWP." },
        { name: "Fountain / park", note: "B site. CTs delay; Ts plant and split retakers." },
        { name: "Bank / toilets", note: "A depth and rotates. Call when you leave B." },
      ],
      notes: [
        "CTs cannot full-rotate as fast as on Dust II. Delay is the hold.",
        "A T lurk in bathrooms punishes CTs who all run to B on the first sound.",
        "Learn the bomb plant positions that actually have cover from heaven.",
      ],
      image: header("Overpass B site in Counter-Strike 2"),
      seoKeywords: ["Overpass guide", "Overpass monster", "Overpass callouts"],
    },
    {
      slug: "anubis",
      name: "Anubis",
      difficulty: "Medium",
      tagline: "Water, mid, and a lot of post-plant angles that punish greedy peeks.",
      overview:
        "Anubis is about mid and water control. T-side should take space, then hit a site with numbers — not walk into e-box one at a time. CT-side needs someone who can fall from mid without donating a rifle, and a B player who respects the water timing.",
      stats: [
        { label: "Key space", value: "Mid + water" },
        { label: "T default", value: "Mid/water control into A or B" },
        { label: "CT hold", value: "Mid, water, A camera, B connector" },
      ],
      poi: [
        { name: "Mid", note: "Opens both sites. A pick here is worth more than a 1:40 execute." },
        { name: "Water", note: "B access. Sound and a flash. Don't dry-run it every round." },
        { name: "A main / camera", note: "A hit. Utility first; the site has a lot of post-plant depth." },
        { name: "E-box / connector", note: "B site fights. Trade, do not peek the same pixel twice." },
        { name: "Palace / temple", note: "Rotate and lurk space. Call it so your team does not 2v5." },
      ],
      notes: [
        "Post-plants win Anubis. Clear one angle at a time after the bomb is down.",
        "CTs: a molotov on water is delay, not a kill hunt.",
        "If mid is lost, play for a retake instead of re-peeking mid for ego.",
      ],
      image: header("Anubis mid in Counter-Strike 2"),
      seoKeywords: ["Anubis guide", "Anubis smokes", "Anubis callouts"],
    },
    {
      slug: "train",
      name: "Train",
      difficulty: "Hard",
      tagline: "Ivy, popdog, and a T-side that needs a real default — not five on A ramp.",
      overview:
        "Train rewards teams that can take ivy or popdog and then collapse. CT-side holds with utility and close trades. If your team cannot call ivy vs ladder vs T-main, pick Dust II until you can.",
      stats: [
        { label: "Key space", value: "Ivy + popdog + T main" },
        { label: "T default", value: "Ivy or popdog into a site hit" },
        { label: "CT hold", value: "Ivy, T main, B inner, rotator" },
      ],
      poi: [
        { name: "Ivy", note: "T default space. Smokes and a trade. Solo ivy is a donation." },
        { name: "Popdog", note: "Vertical B access. Sound cues matter." },
        { name: "T main / ladder", note: "A pressure. Don't all five walk the same line." },
        { name: "Inner / brown", note: "Site depth. Post-plant angles are nasty — clear with a teammate." },
        { name: "Connector / alley", note: "Rotates. Call them or you 3v5 a site." },
      ],
      notes: [
        "Train is a later map. Learn three others first.",
        "Utility on ivy is not optional on a full buy.",
        "CTs should not peek T-main every round for a highlight.",
      ],
      image: header("Train bombsite in Counter-Strike 2"),
      seoKeywords: ["Train guide", "Train ivy", "Train callouts"],
    },
  ],
  roles: [
    {
      slug: "igl",
      name: "IGL",
      role: "In-game leader",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Impact", value: "Calls > frags" },
        { label: "Aim floor", value: "Must still shoot" },
      ],
      kit: ["Readable rifle", "Utility for the execute you called", "Mic that is not a concert"],
      excerpt:
        "You decide the default, the execute, and the save. A quiet IGL is just a rifler with opinions after the round is already lost.",
      strengths: [
        "Stops five disconnected solo queues from running the same site twice",
        "Economy calls print more rounds than a 30-bomb with no mid-round",
        "Can hide a weak aimer on a useful role if the default is real",
      ],
      weaknesses: [
        "Calling and aiming at the same time is a skill — new IGLs drop both",
        "Overcalling every round into a scripted execute gets read after three demos",
      ],
      starterTips: [
        "Start as IGL in a five-stack, not in Premier with four randoms who mute you.",
        "Have two T defaults and one mid-round: 'we have mid, hit B' is a complete sentence.",
        "If you are losing, change the first contact — not just the site name.",
        "Let someone else lurk if you cannot watch the map and the angle.",
      ],
      image: hero("CS2 in-game leader calling a round"),
      seoKeywords: ["CS2 IGL", "how to IGL", "CS2 calls"],
    },
    {
      slug: "entry",
      name: "Entry",
      role: "First contact",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Job", value: "Space, not K/D" },
        { label: "Trade", value: "Must be traded" },
      ],
      kit: ["Rifle", "Flash that lands", "A teammate behind you"],
      excerpt:
        "You take the first fight so the next two players can trade. Dying with space taken is a win. Dying alone in a site is not.",
      strengths: [
        "Wins rounds that look lost on the scoreboard",
        "Forces CTs to use utility early",
        "Teaches you timings faster than lurking",
      ],
      weaknesses: [
        "Ego entries with no flash are free kills",
        "If nobody trades you, you are just going 4-18",
      ],
      starterTips: [
        "Do not entry a site unless two teammates are close enough to shoot the same second.",
        "Use the flash you bought. An entry with zero utility is a deathmatch spawn.",
        "After you die, still call: 'one palace, one connector' is the round.",
        "Play entry on Dust II and Mirage first — Inferno banana is a different job.",
      ],
      image: hero("CS2 entry fragger taking a site"),
      seoKeywords: ["CS2 entry", "entry fragger", "how to entry CS2"],
    },
    {
      slug: "awper",
      name: "AWPer",
      role: "Pick potential",
      difficulty: "Hard",
      beginnerRank: 4,
      tiers: [
        { label: "T-side", value: "Mid picks" },
        { label: "CT-side", value: "Hold + fall" },
      ],
      kit: ["AWP when the buy allows", "A rifle backup", "Angles you can leave"],
      excerpt:
        "You exist to win a round with one shot — and to not donate the AWP. Holding an angle you cannot fall from is how you go broke.",
      strengths: [
        "Opens mid on Mirage and Long on Dust II",
        "Stops executes if you hold the right line",
        "Forces the other team to waste utility on you",
      ],
      weaknesses: [
        "Missed shots on eco rounds lose more than a rifle spray",
        "No close-range plan = you die to the second player",
      ],
      starterTips: [
        "Learn one map's AWP angles before you AWP everywhere. Dust II mid and Long are the classroom.",
        "Buy a rifle if the team cannot afford to lose the AWP. Hero AWPs on force buys are ego.",
        "Peek with a teammate who can trade. An AWP is not a 1v5 button.",
        "Counter-strafe, then shoot. Moving AWP shots are a meme until they are not.",
      ],
      image: hero("CS2 AWPer holding mid"),
      seoKeywords: ["CS2 AWP", "AWPer guide", "CS2 sniper"],
    },
    {
      slug: "support",
      name: "Support",
      role: "Utility and trade",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "T-side", value: "Smokes + flashes for the entry" },
        { label: "CT-side", value: "Delay nades + info" },
      ],
      kit: ["Smokes, flashes, molotov", "A rifle you can spray", "A mic for footsteps"],
      excerpt:
        "The best first role. You throw the nade that makes the entry free, you trade, and you do not need to be the first kill every round.",
      strengths: [
        "Wins rounds without topping the scoreboard",
        "Teaches utility, which is the real CS2 skill",
        "Fits almost any five-stack",
      ],
      weaknesses: [
        "Boring if you only want highlights",
        "Bad lineups under pressure still lose the execute",
      ],
      starterTips: [
        "Learn one smoke and one flash that actually land on Dust II and Mirage. Pixel lineups can wait.",
        "Stand where you can trade the entry, not 40 meters behind filming.",
        "On CT, a molotov that delays 8 seconds is a round win.",
        "If you are last alive, you are now the lurk — stop throwing leftover nades into nowhere.",
      ],
      image: hero("CS2 support player throwing utility"),
      seoKeywords: ["CS2 support", "CS2 utility", "how to support CS2"],
    },
    {
      slug: "anchor",
      name: "Anchor / Lurk",
      role: "Site hold and timing",
      difficulty: "Medium",
      beginnerRank: 2,
      tiers: [
        { label: "CT", value: "Hold a site, fall, live" },
        { label: "T", value: "Lurk the opposite site" },
      ],
      kit: ["Close-range rifle or SMG on eco", "A delay nade", "Headphones"],
      excerpt:
        "On CT you own a site and you are allowed to die last, not first. On T you lurk the other site so rotates get punished.",
      strengths: [
        "Stops B rushes on Dust II if you play the door correctly",
        "Lurks win rounds when CTs over-rotate",
        "Teaches sound and timing",
      ],
      weaknesses: [
        "Hero peeks on a 1v5 hold throw the retake",
        "Lurking with no info is just AFK in a corner",
      ],
      starterTips: [
        "CT: play for the delay. One kill and a fall is a good B hold.",
        "Do not peek the same angle after they know you are there.",
        "T lurk: wait for the noise of the hit, then walk. Early lurk deaths waste the role.",
        "Call 'I am falling' so your IGL can set the retake.",
      ],
      image: hero("CS2 anchor holding a bombsite"),
      seoKeywords: ["CS2 anchor", "CS2 lurk", "how to hold site"],
    },
  ],
  strats: [
    {
      slug: "dust2-long-default",
      name: "Dust II Long Default",
      mapSlug: "dust-2",
      mapName: "Dust II",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "New five-stacks on T-side",
      duration: "Full round",
      excerpt:
        "Take Long with a smoke and a flash, plant A, and stop peeking CT spawn for a fifth kill.",
      steps: [
        "Two players go Long, one support smokes CT, one flashes over doors.",
        "Entry takes the first fight near the doors; the second player trades immediately.",
        "A third player holds mid or cat so CTs cannot walk into A for free.",
        "Plant for long or for pit depending on who is alive — then play the post-plant, do not hunt spawn.",
        "If Long is lost, do not re-peek. Rotate mid or go B with the remaining utility.",
      ],
      tips: [
        "A smoke that covers CT is worth more than a pixel lineup you miss.",
        "Save one flash for the actual take, not for T spawn.",
        "If you hear two CTs Long, you are not defaulting — you are fighting a stack. Consider B.",
      ],
      image: header("Dust II Long A take in CS2"),
      seoKeywords: ["Dust 2 long", "Dust II T side", "Dust 2 default"],
    },
    {
      slug: "mirage-mid-control",
      name: "Mirage Mid Control",
      mapSlug: "mirage",
      mapName: "Mirage",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "T-sides that keep running A executes into four players",
      duration: "First 40 seconds",
      excerpt:
        "Win window and connector first. The site hit is the second sentence of the round.",
      steps: [
        "One player contests mid with a teammate who can trade. Do not solo peek window.",
        "Support smokes window or top mid depending on the CT AWP. Call which one you threw.",
        "Once mid is yours, connector becomes the rotate. Take it or fake it.",
        "Collapse A from ramp + connector or B from apps + short — with numbers, not as two duos.",
        "If you lose the first mid duel, play a late default. Do not force a 1:50 palace walk.",
      ],
      tips: [
        "A mid pick is a round win condition. Treat it like a bombsite.",
        "Underpass is a path, not a hiding spot for the whole round.",
        "CTs who lose mid will stack a site. Lurk the other one.",
      ],
      image: header("Mirage mid window in CS2"),
      seoKeywords: ["Mirage mid control", "Mirage T default", "Mirage window"],
    },
    {
      slug: "inferno-banana-control",
      name: "Inferno Banana Control",
      mapSlug: "inferno",
      mapName: "Inferno",
      difficulty: "Medium",
      risk: "High",
      bestFor: "T-sides that die in banana every round",
      duration: "First 30–50 seconds",
      excerpt:
        "Utility first, then space. Banana is not a deathmatch lane.",
      steps: [
        "First wave: molotov or smoke the common CT hold, then a flash that your entry can peek with.",
        "Second wave: do not all five run banana. Leave an A lurk or a mid player.",
        "If CTs dump all utility, wait. The second take is often free.",
        "Once banana is yours, either hit B with a trade or fake B and go A through apps.",
        "If two teammates die in banana, the round is a retake later — stop peeking for the rifle.",
      ],
      tips: [
        "Close-range counter-strafe. Spraying from T-ramp into a molotov is not a take.",
        "A successful banana control can still plant A. The space is the prize.",
        "CTs: one player can fall to fountain. Two dead in banana is a lost B.",
      ],
      image: header("Inferno banana utility in CS2"),
      seoKeywords: ["Inferno banana", "Inferno T side", "Inferno molotov"],
    },
    {
      slug: "eco-round",
      name: "Eco and Force-Buy Plan",
      mapName: "Any map",
      difficulty: "Easy",
      risk: "High",
      bestFor: "Teams that force-buy into rifles and then eco twice",
      duration: "Full round",
      excerpt:
        "If you cannot buy rifles plus nades after a loss, save. A Deagle round is a gamble with a plan, not five disconnected peeks.",
      steps: [
        "IGL calls save, force, or buy before anyone autobuy. Autobuy is how you brick the half.",
        "On a save: pistols, armor if you can, and a stack on a close site. Play for a bomb plant or a stolen gun.",
        "On a force: pick one close angle (B tunnels, banana, apartments). Do not take a 30-meter rifle fight.",
        "If you win an eco, buy together next round. Do not have two rifles and three pistols.",
        "After a lost anti-eco, do not force again. Two poor buys in a row gift the half.",
      ],
      tips: [
        "Armor + Tec-9/Five-Seven in a doorway beats an AWP on an eco if you close the distance.",
        "Planting for a save round still helps the next buy. A plant is not nothing.",
        "CTs on eco: smoke a door and play together. Five 1v1s against rifles lose.",
      ],
      image: header("CS2 economy round buy menu"),
      seoKeywords: ["CS2 eco", "force buy", "CS2 economy"],
    },
    {
      slug: "ct-retake",
      name: "CT Retake Template",
      mapName: "Any map",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "CTs who rotate late and then peek one at a time",
      duration: "After the plant",
      excerpt:
        "Utility first, two players together, then the defuse. A retake is not five separate duels.",
      steps: [
        "Stop the lurk. Clear the path you will actually walk, or the last T kills the retake.",
        "Throw the smoke or molotov that breaks the post-plant angle you know they have.",
        "Two players swing the same angle. Solo hero peeks are how retakes die.",
        "Once you have a man advantage, you can play for time. Do not overpeek a 4v2.",
        "Defuse with a teammate covering. A naked defuse into an uncleared pit is a clip for them.",
      ],
      tips: [
        "Save a flash for the retake, not only for the first contact.",
        "If you are 2v4 after plant, you may be playing for weapons and time, not a miracle.",
        "Call who is defusing. Two people on the bomb and nobody watching is a classic throw.",
      ],
      image: header("CS2 CT retake after plant"),
      seoKeywords: ["CS2 retake", "how to retake", "CT side CS2"],
    },
    {
      slug: "anti-eco",
      name: "Anti-Eco Discipline",
      mapName: "Any map",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Full-buy rounds after you won the previous round",
      duration: "Full round",
      excerpt:
        "Armor and a rifle still lose to a stacked close angle. Clear close, do not run down mid as five solos.",
      steps: [
        "Assume they are stacked close: stairs, apartments, tunnels, banana.",
        "Let utility go first. A molotov into a common eco hold is cheap insurance.",
        "Trade. The first death on an anti-eco is often a Deagle swing — the second player must be there.",
        "Do not chase the last pistol into a site you have not cleared.",
        "If you lose the anti-eco, you still buy next round if the money is there. Do not panic-save a broken half.",
      ],
      tips: [
        "AWP on anti-eco is optional. A rifle in a close fight is often better.",
        "Keep one player from over-rotating so a lurk pistol does not steal a site.",
        "Winning 5-0 on the board does not mean you can ignore the next eco.",
      ],
      image: header("CS2 anti-eco round"),
      seoKeywords: ["CS2 anti-eco", "how to anti eco", "CS2 full buy"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "CS2 Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "What to play first, which maps to learn, and how to stop treating Premier like a tutorial.",
      seoKeywords: ["CS2 beginner", "how to play CS2", "CS2 first hours"],
      heroImage: hero("Counter-Strike 2 beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "CS2 is a round-based tactical shooter. Money carries between rounds, utility wins sites, and a saved rifle is often worth more than a heroic force-buy. You win by taking or holding a bombsite with teammates, not by topping a deathmatch scoreboard in a Premier match.",
        },
        {
          heading: "The first week",
          body: "Play Casual or Deathmatch until your crosshair stays at head height while you strafe. Learn Dust II, then Mirage, then Inferno. Call A, B, mid, and the obvious connectors. Premier is not where you learn to buy. If four teammates have rifles, do not eco a Deagle into a 5v5 rifle round unless you are last alive on a save.",
        },
        {
          heading: "Buy with the team",
          body: "The $4k rule of thumb: if a loss means you cannot afford a rifle plus nades, saving is usually correct. Two weak buys in a row gift the other half. Anti-ecos are not free — armor and a rifle still lose to stacked close angles.",
        },
        {
          heading: "Utility before lineups",
          body: "Throw one smoke that covers a door and one flash that your entry can actually use. Pixel-perfect executes you miss under pressure are worse than a simple smoke. Keep a nade for the site take, not only for the first 20 seconds of a default.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can explain a default, you stop peeking the same angle twice, you burst or tap past ~20 meters, and you can plant and defuse without opening the buy menu. Then add a role — support first, entry later, AWP last.",
        },
      ],
    },
    {
      slug: "economy-and-defaults",
      title: "CS2 Economy and Default Setups",
      category: "Fundamentals",
      readTime: "8 min",
      excerpt:
        "When to full buy, force, or save — and how T-side defaults actually get you a site without a scripted execute.",
      seoKeywords: ["CS2 economy", "CS2 default", "when to save CS2"],
      heroImage: header("CS2 buy round economy"),
      content: [
        {
          heading: "The $4k rule of thumb",
          body: "If the next round you cannot afford a rifle plus nades after a loss, saving is usually correct. A saved AK into a force-buy win prints more rounds than a starved Scout peek that donates the gun. Call the buy before anyone autobuys.",
        },
        {
          heading: "Anti-ecos are not free",
          body: "Armor and a rifle still lose to stacked close angles and unexpected Deagle swings. Clear close with a teammate. Do not run down mid as five disconnected solos. A molotov into a common eco hold is cheap insurance.",
        },
        {
          heading: "T-side default",
          body: "Spread, take map control, trade the first pick, then collapse. A default that wins mid on Mirage or banana on Inferno often plants without a YouTube execute. If the first contact dies and nobody trades, you do not have a default — you have a deathmatch.",
        },
        {
          heading: "CT rotations",
          body: "Leave someone who can delay with a smoke or molotov. A 5-man rotate that arrives after the plant is just a retake you did not have to play. Call when you leave a site so the remaining player is not surprised.",
        },
        {
          heading: "Force-buys",
          body: "A force is a close-range plan on one site, not five people taking 30-meter fights. If you lose a force, you are often poor for two rounds — so force when a plant or a map swing is realistic, not because you are tilted.",
        },
      ],
    },
    {
      slug: "utility-and-nades",
      title: "CS2 Utility: Smokes, Flashes, Molotovs",
      category: "Utility",
      readTime: "8 min",
      excerpt:
        "What to throw first, what to save, and why a door smoke beats a lineup you cannot hit in a real round.",
      seoKeywords: ["CS2 smokes", "CS2 flashes", "CS2 utility guide"],
      heroImage: header("CS2 smoke grenade on a bombsite"),
      content: [
        {
          heading: "Buy utility on purpose",
          body: "A rifle with no nades is a deathmatch gun. On a full buy, at least one smoke and one flash should exist on the team for the site you will actually hit. If five people buy only rifles, you will walk into an AWP.",
        },
        {
          heading: "Smokes",
          body: "Cover a door, a CT spawn peek, or a rotate. Volume and duration in CS2 still punish late walks. A smoke that lands is better than a pixel-perfect smoke you fumble. Practice two smokes per map you play in Premier.",
        },
        {
          heading: "Flashes",
          body: "Flash for the entry, not for yourself if you are the support. Pop flashes around a corner beat long-range throws that your teammate never peeks with. If you flash your own entry, you are the problem.",
        },
        {
          heading: "Molotovs and HE",
          body: "Molotovs deny a hold (banana, tunnels, a plant). HE is for clustered eco players and for finishing. Do not molotov a site you are about to walk through.",
        },
        {
          heading: "Save one nade",
          body: "The execute at 0:40 needs utility. If everything went out at 1:50, you are taking a site with guns only. Keep a flash or smoke for the plant or the retake.",
        },
      ],
    },
    {
      slug: "premier-and-practice",
      title: "CS2 Premier, Faceit, and Practice",
      category: "Ranked",
      readTime: "7 min",
      excerpt:
        "How to structure a session so Premier is not your only aim trainer.",
      seoKeywords: ["CS2 Premier", "CS2 Faceit", "CS2 practice routine"],
      heroImage: header("CS2 Premier matchmaking"),
      content: [
        {
          heading: "Warm up first",
          body: "Ten to twenty minutes of Deathmatch or a simple aim map before Premier. First-game rust is real. If you queue cold, you will peek like you are still in the menu.",
        },
        {
          heading: "Premier is a team mode",
          body: "You will get randoms. Play a useful role: support, anchor, or a simple entry. Do not IGL and AWP and lurk in the same match unless the lobby is actually listening. Mute griefers; do not mute info.",
        },
        {
          heading: "Map pool",
          body: "Queue maps you can call. Instant-leaving a map you 'don't play' is how you stay bad at it. Learn three well, then add a fourth. Ancient and Nuke wait until Dust II, Mirage, and Inferno are automatic.",
        },
        {
          heading: "Faceit and third-party",
          body: "Stricter anti-cheat and often better comms. The gunplay is the same. Your utility and defaults still matter more than the platform name in your bio.",
        },
        {
          heading: "Review one demo a week",
          body: "Watch a round you threw: the peek, the nade, the rotate. You do not need a 64-tick lecture. One bad habit per week is enough: same-angle re-peeks, no trade, or a force-buy that bricked the half.",
        },
      ],
    },
    {
      slug: "spray-and-movement",
      title: "CS2 Spray Control and Counter-Strafe",
      category: "Mechanics",
      readTime: "7 min",
      excerpt:
        "Why you lose mid-range duels, and the only movement habit that actually matters.",
      seoKeywords: ["CS2 spray", "counter strafe", "CS2 aim"],
      heroImage: header("CS2 spraying a rifle"),
      content: [
        {
          heading: "Stop moving before you shoot",
          body: "Counter-strafe: tap the opposite key so your accuracy resets, then shoot. Shooting while you still have velocity is how you lose a 'fair' duel. This is more important than any aim trainer playlist.",
        },
        {
          heading: "Range decides the trigger",
          body: "Close: spray. Mid: burst of 3–8, then reset. Long: tap or a very short burst. Spraying 30 bullets from mid-range on Dust II Long is a donation.",
        },
        {
          heading: "Crosshair placement",
          body: "Head height, pre-aimed at the common angle, not at the floor. If your crosshair is on the dirt when you swing, the first bullet is already late.",
        },
        {
          heading: "Recoil in CS2",
          body: "Patterns are learnable in a workshop map, but the real skill is resetting. If the first burst misses, stop, counter-strafe, burst again. Chasing a spray into the sky helps nobody.",
        },
        {
          heading: "Deathmatch with a purpose",
          body: "Play DM as counter-strafe practice, not as a knife-run. One rifle, headshots, reset between kills. FFA chaos teaches panic sprays.",
        },
      ],
    },
    {
      slug: "settings-and-performance",
      title: "CS2 Settings and Performance",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Stability in smokes, a mouse you can repeat, and overlays that steal rounds.",
      seoKeywords: ["CS2 settings", "CS2 FPS", "CS2 mouse"],
      heroImage: header("CS2 video settings"),
      content: [
        {
          heading: "Cap FPS to a number you hold",
          body: "Huge frame-time spikes in mid-round smokes lose more duels than a slightly lower max FPS. Cap to a stable number your GPU can hold on Dust II mid with two smokes down.",
        },
        {
          heading: "Mouse",
          body: "Raw input, no Windows acceleration. Most high-level players sit in a low-to-mid cm/360 so flicks stay readable. Copying a pro's eDPI without copying their mousepad is how you miss everything.",
        },
        {
          heading: "Overlays",
          body: "Turn off extra NVIDIA/AMD overlay and Discord hardware acceleration if you hitch when a smoke pops. CS2 already has enough particle work.",
        },
        {
          heading: "Audio",
          body: "Headphones. Footsteps and utility are the game. Music in the bomb timer is optional; music in the main menu during a round is not.",
        },
        {
          heading: "Launch options are not magic",
          body: "A clean install, updated GPU driver, and a wired connection beat a forum's 12 launch options. Change one setting at a time if you are debugging hitching.",
        },
      ],
    },
    {
      slug: "roles-and-comms",
      title: "CS2 Roles and Comms",
      category: "Team Play",
      readTime: "7 min",
      excerpt:
        "Who should entry, who should throw nades, and what to say when you die.",
      seoKeywords: ["CS2 roles", "CS2 comms", "CS2 IGL"],
      heroImage: hero("CS2 team communication"),
      content: [
        {
          heading: "Pick a job",
          body: "Support is the best first role. Entry needs a trade partner. AWPer needs angles you can leave. IGL needs a stack that listens. Anchor holds a site and dies last, not first. Playing all five jobs in one match is how you do none of them.",
        },
        {
          heading: "Comms when you die",
          body: "Number, position, utility used. 'One palace, no flash, AWP' is a round. 'He's there' is not. After you die, you are still on the team — stop reviewing your own peek in voice.",
        },
        {
          heading: "Mid-round",
          body: "If you win mid, say it and collapse. If you lose the first duel, say whether to save or to hit the other site. Silence after first contact is how you 2v5 a bombsite.",
        },
        {
          heading: "Don't overtalk",
          body: "Footsteps exist. Call, then be quiet enough to hear the lurk. IGL can talk more; everyone else should be shorter.",
        },
        {
          heading: "Randoms",
          body: "In Premier, be the person who throws the smoke and trades. You cannot IGL four mutes. You can still not peek the same angle twice.",
        },
      ],
    },
    {
      slug: "faq",
      title: "CS2 FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Free to play, Prime, maps, and why you keep losing aim duels.",
      seoKeywords: ["CS2 FAQ", "is CS2 free", "CS2 Prime"],
      content: [
        {
          heading: "Is CS2 free?",
          body: "Yes. Counter-Strike 2 is free to play on Steam. Prime Status is separate and affects matchmaking quality more than the core gunplay.",
        },
        {
          heading: "What should I play first?",
          body: "Deathmatch for mechanics, Casual or Premier only after you can buy, plant, and defuse without looking at the UI. Learn Dust II, Mirage, and Inferno first.",
        },
        {
          heading: "Why do I keep losing aim duels?",
          body: "Counter-strafe before you shoot, keep the crosshair at head height, and stop swinging the same angle twice. Aim trainers do not replace that.",
        },
        {
          heading: "Which maps matter?",
          body: "Dust II, Mirage, Inferno, Ancient, Nuke, Overpass, Anubis, and Train rotate through competitive pools. Learn three well before expanding.",
        },
        {
          heading: "Do I need Prime?",
          body: "For cleaner matchmaking, yes if you can. The gunplay is identical. Prime does not teach you smokes.",
        },
      ],
    },
  ],
};
