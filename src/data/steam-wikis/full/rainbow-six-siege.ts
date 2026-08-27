import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 359550;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const siegeWiki: FullWiki = {
  slug: "rainbow-six-siege",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Drones, site setup, and executes — not a spawn-peek montage.",
      roles: "Anchor and hard breach first. Roam last.",
      maps: "Oregon and Clubhouse before you main a ranked ban you cannot call.",
      guides: "Beginner path, site, intel, operators, vertical play, and ranked.",
    },
    pages: {
      maps: "Bomb sites and destruction. Learn two maps well. The pool rotates; the drone habit does not.",
      roles: "Who drones, who opens the wall, who holds the plant. Five Ashs is a deathmatch.",
      strats: "What to reinforce, when to roam, and how an execute is not walking main.",
    },
  },
  maps: [
    {
      slug: "oregon",
      name: "Oregon",
      difficulty: "Easy",
      tagline: "The classroom: kids, dorms, basement — and callouts you can actually learn.",
      overview:
        "Oregon is the map newcomers should live on. Sites are readable, rotates are obvious once you die to them once, and vertical is real without being a 200-hour maze. Play kids or dorms first. Reinforce the site you are actually playing. Drone before you walk big tower. A spawn peek that dies is a 4v5 — roam with a way home. Call kids, dorms, meeting, tower, and basement before you invent Faceit nicknames.",
      stats: [
        { label: "Learn first", value: "Yes — with Clubhouse" },
        { label: "Sites", value: "Kids, dorms, kitchen/dining, basement" },
        { label: "Lesson", value: "Hatches and default cams" },
      ],
      poi: [
        { name: "Kids / dorms", note: "Attackers love the hatches. Defenders: rotate holes you can use, not a fortress that traps you." },
        { name: "Big tower", note: "Spawn peek bait. Drone it. Walking it blind is a highlight for them." },
        { name: "Meeting / white", note: "Connector space. Intel gadgets earn their pick." },
        { name: "Basement", note: "Vertical from above. Ignore floors and you hold one door forever." },
        { name: "Attic / rafters", note: "Roam with a clock. If you cannot get back for the plant, you are a 4v5." },
      ],
      notes: [
        "Play Situations and the newcomer path. Map knowledge is the real unlock, not operators.",
        "Drone before you enter. A dead drone is cheaper than a dead operator.",
        "Random walls on the wrong bomb are a vanity project.",
      ],
      image: header("Rainbow Six Siege Oregon"),
      seoKeywords: ["Siege Oregon", "Oregon Siege guide", "Oregon sites"],
    },
    {
      slug: "clubhouse",
      name: "Clubhouse",
      difficulty: "Easy",
      tagline: "Cash, church, bedroom — garage wall, and the map that teaches hard breach.",
      overview:
        "Clubhouse is the other classroom. Garage wall is why Thermite/Ace/Hibana exist. Cash/chapel and bedroom/gym are the sites people actually play. Attack that walks main without a drone is not a strategy. Defense that reinforces everything including their own rotate loses the retake. Learn garage, CCTV, church, and the hatch lines. Ranked will ban this map some seasons; the habits transfer.",
      stats: [
        { label: "Learn first", value: "Yes — garage wall is the tutorial" },
        { label: "Key wall", value: "Garage / CCTV — bring a hard breach" },
        { label: "Roam", value: "Bedroom and gym with a way back" },
      ],
      poi: [
        { name: "Garage", note: "The wall. Bandit/Kaid/Mute vs hard breach is the round. Play it on purpose." },
        { name: "Cash / church", note: "Default plant lines. Utility for the plant, not all spent on a fake." },
        { name: "CCTV / cash connector", note: "Rotate. Pretty fortresses that block your own rotate lose retakes." },
        { name: "Bedroom / gym", note: "Hatches. Vertical from above. One door hold is how you get nade-stacked." },
        { name: "Pool / strip", note: "Attack default. Drone roamers out before the five-man walk." },
      ],
      notes: [
        "Learn two attackers and two defenders with simple kits (Ash/Sledge, Mute/Kapkan) before gadget-heavy mains.",
        "Save a stun or breach for the execute. Using all utility on a default that never happens is a throw.",
        "Five people walking main is not a strategy.",
      ],
      image: header("Rainbow Six Siege Clubhouse"),
      seoKeywords: ["Siege Clubhouse", "Clubhouse garage", "Clubhouse sites"],
    },
    {
      slug: "bank",
      name: "Bank",
      difficulty: "Medium",
      tagline: "Open plaza, tight basement, and a map that punishes deathmatch peeks on the street.",
      overview:
        "Bank is long sightlines outside and a basement that is a different game. Attack that spawn-peeks every round on the plaza donates operators. Open garage and servers with utility; do not five-stack the front door. Defense: default cams, a rotate, and not roaming so far you never see the plant. Vertical into basement is the skill. Plywood is not cover.",
      stats: [
        { label: "Outside", value: "Long — drones and smokes" },
        { label: "Basement", value: "Hatches and vault lines" },
        { label: "Fail", value: "Same hallway after you shot the cams" },
      ],
      poi: [
        { name: "Plaza / front", note: "Spawn peek graveyard. Drone, smoke, change the line after you kill a cam." },
        { name: "Open area / servers", note: "Execute space. Hard breach and a plant with cover." },
        { name: "Basement / vault", note: "Vertical. Floors exist so you can stop holding one door." },
        { name: "Skylight / hatches", note: "The round if nobody looks up." },
        { name: "Archives / open stairs", note: "Roam with a clock. Get back for the plant." },
      ],
      notes: [
        "Shooting cameras then walking the same hallway. They know you are coming; change the line.",
        "Assume plywood is not cover. Destruction and pixel angles are why you die through walls.",
        "IQ, Nomad, Val, and Mute exist because information is a round win.",
      ],
      image: header("Rainbow Six Siege Bank"),
      seoKeywords: ["Siege Bank", "Bank Siege guide", "Bank basement"],
    },
    {
      slug: "chalet",
      name: "Chalet",
      difficulty: "Medium",
      tagline: "Snow, garage, and a map that is all hatches and window lines.",
      overview:
        "Chalet is windows, garage, and kitchen/trophy sites that live on vertical. Attack opens a line from the snow and the roof. Defense that only holds the door gets naded from above. Wine cellar and basement are hatch exams. Learn garage, kitchen, trophy, and the west main window. A dead drone is still cheaper than walking west main because you are bored.",
      stats: [
        { label: "Vertical", value: "High — hatches and floors" },
        { label: "Garage", value: "Hard breach job" },
        { label: "Windows", value: "Default plants and default deaths" },
      ],
      poi: [
        { name: "Kitchen / trophy", note: "Hatches. If you ignore them, you are playing a 1-door site." },
        { name: "Garage", note: "Wall and plant. Utility for the execute." },
        { name: "West main / solarium", note: "Drone roamers. Walking it is a Kapkan museum." },
        { name: "Master / office", note: "Roam. Clock. Get back." },
        { name: "Snow / drone holes", note: "Attack intel. Use it; do not peek the same pixel twice." },
      ],
      notes: [
        "Ignoring vertical play is how Chalet feels 'random'.",
        "Reinforce the site you are playing. Random garage walls on a kitchen round are a vanity project.",
        "Newcomer playlist still has this map in some seasons. The drone habit is the unlock.",
      ],
      image: header("Rainbow Six Siege Chalet"),
      seoKeywords: ["Siege Chalet", "Chalet Siege", "Chalet garage"],
    },
    {
      slug: "border",
      name: "Border",
      difficulty: "Medium",
      tagline: "Armory, customs, and a map of window lines you will peek once too often.",
      overview:
        "Border is windows and a compact building. Armory and customs are the sites. Attack that drones cameras then walks the same hall dies to the rotate. Defense: rotate holes that help you, not a maze that traps the retake. East stairs and terrace are default. Vertical is real on armory. Save utility for the plant on customs — the default you never take is how you run out of stuns.",
      stats: [
        { label: "Feel", value: "Tight — utility and drones over aim duels" },
        { label: "Sites", value: "Armory, customs, workshop, bathrooms" },
        { label: "Windows", value: "Assume they are held" },
      ],
      poi: [
        { name: "Armory / archives", note: "Hatches and a plant. Hard breach plus a cover smoke." },
        { name: "Customs", note: "Windows. Change the line after cams are gone." },
        { name: "East stairs / terrace", note: "Default attack. Drone the roam first." },
        { name: "Workshop", note: "Connectors. Mute and intel gadgets." },
        { name: "Fountain / outside", note: "Spawn peek bait. Do not make it your personality." },
      ],
      notes: [
        "A small operator pool: one wall denial, one intel, one entry, one support is enough to start ranked.",
        "Ban maps and ops with your stack. Solo queue still needs a drone habit.",
        "Terrorist Hunt / training is for recoil. Multiplayer is for drones and site.",
      ],
      image: header("Rainbow Six Siege Border"),
      seoKeywords: ["Siege Border", "Border Siege guide", "Border armory"],
    },
    {
      slug: "kafe",
      name: "Kafe Dostoyevsky",
      difficulty: "Hard",
      tagline: "Three floors of bakery and cigar: vertical until you respect the hatch.",
      overview:
        "Kafe is a vertical exam. Bakery, mining, cigar — every site has a floor problem. Attack that only walks the front door is content. Open hatches, play the floor, plant with utility. Defense that reinforces the wrong walls and blocks their own rotate loses the retake. Train stairs and red stairs are the map. If you cannot call 3F vs 2F, play Oregon until you can.",
      stats: [
        { label: "Vertical", value: "The whole map" },
        { label: "Sites", value: "Bakery, mining/fireplace, cigar/cocktail" },
        { label: "Lesson", value: "Hatches before hero peeks" },
      ],
      poi: [
        { name: "Bakery / 1F", note: "Hatches from 2F. Hold the floor or lose the plant." },
        { name: "Mining / fireplace", note: "Connectors and vertical. Rotate holes you can use." },
        { name: "Cigar / cocktail", note: "Top floor. Windows and a roof line. Drone." },
        { name: "Train / red stairs", note: "The rotate. Five people on one stair is a nade." },
        { name: "Piano / corridor", note: "Default walks. Change after you shoot the cam." },
      ],
      notes: [
        "Floors and hatches exist so you can stop holding one door.",
        "Pretty fortresses that block your own rotate lose retakes.",
        "Gadget-heavy mains wait until you can drone a 3F site without getting lost.",
      ],
      image: header("Rainbow Six Siege Kafe Dostoyevsky"),
      seoKeywords: ["Siege Kafe", "Kafe Dostoyevsky", "Kafe sites"],
    },
    {
      slug: "coastline",
      name: "Coastline",
      difficulty: "Medium",
      tagline: "Pool, kitchen, hookah — destruction you can see from spawn, and a map that loves drones.",
      overview:
        "Coastline is open, loud, and drone-friendly. Blue stairs, white stairs, pool, kitchen, hookah, billiards. Attack has too many windows; use them after a drone, not as a deathmatch. Defense: default cams, a roam that can get back, and not reinforcing the rotate. Penthouse and theater are vertical-adjacent. A spawn peek on the beach that dies is still a 4v5.",
      stats: [
        { label: "Intel", value: "Drones win more than flicks" },
        { label: "Sites", value: "Hookah/billiards, kitchen/service, theater/penthouse, blue/white" },
        { label: "Risk", value: "Windows from every angle" },
      ],
      poi: [
        { name: "Hookah / billiards", note: "Windows. Plant with cover utility. Five walking main is not a plan." },
        { name: "Kitchen / service", note: "Default. Clear roamers on blue/white first." },
        { name: "Pool / sunrise", note: "Attack spawn side. Drone the peek." },
        { name: "Theater / penthouse", note: "Vertical and hatches. Look up." },
        { name: "Blue / white stairs", note: "The rotate. Do not all hold one." },
      ],
      notes: [
        "Clear roamers, open a line, plant with cover utility.",
        "Bind drone and camera to keys you can hit while walking. Menu-ing mid-round is a free kill.",
        "Copied 4:3 without the FOV habit just shrinks intel. See the drone.",
      ],
      image: header("Rainbow Six Siege Coastline"),
      seoKeywords: ["Siege Coastline", "Coastline Siege", "Coastline hookah"],
    },
    {
      slug: "consulate",
      name: "Consulate",
      difficulty: "Hard",
      tagline: "Garage, piano, and a map that comes in and out of ranked — still worth learning for garage wall.",
      overview:
        "Consulate (including rework seasons) is garage, piano, and a lobby that punishes lazy drones. Hard breach on garage is the round the same way Clubhouse is. Yellow stairs, piano, and admin are callouts you need. If it is not in the current ranked pool, play it in quick match — the wall-denial vs hard-breach fight is Siege. Do not skip it because a YouTuber said the pool changed.",
      stats: [
        { label: "Pool", value: "Rotates — habits still transfer" },
        { label: "Garage", value: "Hard breach vs Bandit/Kaid/Mute" },
        { label: "Piano / lobby", value: "Default plants and default peeks" },
      ],
      poi: [
        { name: "Garage", note: "The wall. Bring the op, bring the counter, play the round on purpose." },
        { name: "Piano / meeting", note: "Site. Rotate and a cam on the plant." },
        { name: "Lobby / yellow", note: "Attack default. Drone roamers on the stairs." },
        { name: "Admin / visa", note: "Connectors. Intel ops." },
        { name: "Fountain / bus", note: "Outside. Spawn peeks are optional content, not a strategy." },
      ],
      notes: [
        "Ban maps and ops with your stack when it is in ranked.",
        "One wall denial, one intel, one entry, one support is enough.",
        "Destruction: assume the piano wall is not cover after the first nade.",
      ],
      image: header("Rainbow Six Siege Consulate"),
      seoKeywords: ["Siege Consulate", "Consulate garage", "Consulate Siege"],
    },
  ],
  roles: [
    {
      slug: "anchor",
      name: "Anchor",
      role: "Site hold",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Job", value: "Hold the plant, use the cam, die last not first" },
        { label: "Ops", value: "Mute, Kapkan, Lesion, Warden, Smoke" },
      ],
      kit: ["Site gadgets that actually see the plant", "A rotate hole you can use", "Headphones"],
      excerpt:
        "The best first defender job. You hold the site you reinforced. A spawn peek that dies is a 4v5 — that is not this role.",
      strengths: [
        "Teaches plant denial, which is the game",
        "Mute/Kapkan are simple kits before gadget-heavy mains",
        "Retakes need someone still alive on site",
      ],
      weaknesses: [
        "Holding a door while they plant from the hatch you ignored",
        "Reinforcing your own rotate shut",
      ],
      starterTips: [
        "Reinforce the site you are actually playing. Random walls on the wrong bomb are a vanity project.",
        "Default cams and a way to see the plant. Pretty fortresses that block your rotate lose retakes.",
        "Save a gadget for the execute, not only for the first 20 seconds of prep.",
        "Play Oregon and Clubhouse until site names are boring.",
      ],
      image: hero("Rainbow Six Siege defender holding site"),
      seoKeywords: ["Siege anchor", "Siege Mute", "Siege site hold"],
    },
    {
      slug: "hard-breach",
      name: "Hard Breach",
      role: "Open the wall",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Attack", value: "Thermite, Ace, Hibana — plus a Thatcher/Kali/Flores" },
        { label: "Fail", value: "No wall open, five walking main" },
      ],
      kit: ["A hard breacher", "Someone who clears Bandit/Mute/Kaid", "A drone on the wall"],
      excerpt:
        "The best first attacker job after 'I can drone.' Garage and Clubhouse exist because of you. Five people walking main is not a strategy.",
      strengths: [
        "Opens the round the deathmatch cannot",
        "Simple kits: Thermite + Thatcher is the classroom",
        "Every ranked map has a wall that needs this",
      ],
      weaknesses: [
        "Planting the charge with no drone and no cover",
        "Using all utility on a default plant that never happens",
      ],
      starterTips: [
        "Learn Ash/Sledge for entry later. Learn Thermite/Ace first if the wall is the round.",
        "Drone the wall. A dead drone is cheaper than a dead hard breacher.",
        "Save a stun or breach for the execute.",
        "If they are tricking the wall, wait or change the site plan. Ego-rushing the charge is a 4v5.",
      ],
      image: hero("Rainbow Six Siege hard breach garage"),
      seoKeywords: ["Siege Thermite", "Siege Ace", "Siege hard breach"],
    },
    {
      slug: "intel",
      name: "Intel",
      role: "Drones and cams",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Attack", value: "Drone the roam, then the plant" },
        { label: "Defense", value: "Valk, Mute, Pulse, Maestro — information is a round" },
      ],
      kit: ["Drone binds you can hit while walking", "Cams that see the plant", "IQ / Nomad / Valk as the pool grows"],
      excerpt:
        "You win rounds before the gunfight. Shooting cameras then walking the same hallway is how intel players get teammates killed.",
      strengths: [
        "A dead drone is cheaper than a dead operator",
        "IQ, Nomad, Val, and Mute exist because information is a round win",
        "Solo queue still needs a drone habit",
      ],
      weaknesses: [
        "Menu-ing mid-round is a free kill",
        "Never entering because you are 'the drone guy' for 2:30",
      ],
      starterTips: [
        "Drone before you enter. Bind drone and camera to keys you can hit while walking.",
        "After you shoot a cam, change the line. They know you are coming.",
        "A way to see the plant. Default cams plus one Valk cam is a round.",
        "Use a resolution you can actually see drones on. Copied 4:3 without the habit just shrinks intel.",
      ],
      image: hero("Rainbow Six Siege drone intel"),
      seoKeywords: ["Siege drones", "Siege Valkyrie", "Siege intel"],
    },
    {
      slug: "entry",
      name: "Entry",
      role: "First contact",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Job", value: "Space for the breach and the plant — with a drone" },
        { label: "Ops", value: "Ash, Sledge, Iana, Buck, Zofia" },
      ],
      kit: ["A simple entry op", "A drone that goes first", "A teammate who can trade"],
      excerpt:
        "You take the first gunfight so the wall can open. Entry with no drone is a deathmatch spawn. Dying with space taken is a win.",
      strengths: [
        "Clears roamers so the execute exists",
        "Ash/Sledge are the kits to learn before gadget-heavy mains",
        "Vertical entry (Buck/Sledge) is the next lesson",
      ],
      weaknesses: [
        "Spawn peeking every round as a personality",
        "No trade — then you are just first death",
      ],
      starterTips: [
        "Drone the room, then swing with a teammate. Solo hero peeks are a 4v5.",
        "Clear roamers, open a line, plant with cover utility.",
        "Thunt / training is for recoil. Multiplayer is for drones and site.",
        "If you are the only entry, you still need the hard breach alive. Do not take their drone path as a joke.",
      ],
      image: hero("Rainbow Six Siege entry fragger"),
      seoKeywords: ["Siege Ash", "Siege entry", "Siege Sledge"],
    },
    {
      slug: "roam",
      name: "Roam",
      role: "Time and flanks",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Job", value: "Waste time, get back for the plant" },
        { label: "Fail", value: "A spawn peek that dies is a 4v5" },
      ],
      kit: ["Vigil, Jager, Caveira, Oryx — after you can anchor", "A clock", "A rotate home"],
      excerpt:
        "You exist to delay, not to pad a highlight. Roaming so far you cannot get back for the plant is how sites fall in silence.",
      strengths: [
        "Forces attackers to drone and clear, which burns the clock",
        "Flanks win rounds that a 5-anchor cannot",
        "Teaches map, which is the real unlock",
      ],
      weaknesses: [
        "Spawn peek every round",
        "No way home — you are a spectator with a gun",
      ],
      starterTips: [
        "Anchor first. Roam when you can get back in 10 seconds or you are not roaming, you are lurking deathmatch.",
        "A spawn peek that dies is a 4v5. Make it rare.",
        "When you hear the plant, you are now an anchor. Run.",
        "Gadget-heavy roamers wait until Oregon callouts are automatic.",
      ],
      image: hero("Rainbow Six Siege roamer"),
      seoKeywords: ["Siege roam", "Siege Vigil", "Siege spawn peek"],
    },
  ],
  strats: [
    {
      slug: "drone-first",
      name: "Drone First",
      mapSlug: "oregon",
      mapName: "Oregon",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Attackers who walk big tower because they are bored",
      duration: "Prep + first 30 seconds",
      excerpt:
        "A dead drone is cheaper than a dead operator. Drone the roam, then the room, then walk.",
      steps: [
        "Prep: one drone on site, one on the roam path. Do not both sit in kids staring at a reinforced wall.",
        "Clear the spawn peek / tower / default window on a second drone if your first died. Change the line.",
        "Entry walks with a drone in front. The hard breach waits until the room is yellow or clear.",
        "If you shoot a cam, do not walk that hallway. They know.",
        "Leave a drone for the plant. Menu-ing mid-round is a free kill — binds.",
      ],
      tips: [
        "Play Situations and the newcomer path. Map knowledge is the real unlock.",
        "Bind drone to a key you can hit while walking.",
        "Works on every map. Oregon is just the classroom.",
      ],
      image: header("Rainbow Six Siege drone"),
      seoKeywords: ["Siege drone", "how to drone Siege", "Siege intel"],
    },
    {
      slug: "site-setup",
      name: "Site Setup",
      mapSlug: "clubhouse",
      mapName: "Clubhouse",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Teams that reinforce the wrong bomb and block their own rotate",
      duration: "Prep phase",
      excerpt:
        "Rotate holes, default cams, and a way to see the plant. Pretty fortresses that block your own rotate lose retakes.",
      steps: [
        "Confirm the site. Reinforce that site. Random walls on the other bomb are a vanity project.",
        "Open a rotate you can use. If you cannot walk from cash to CCTV, you will die in a box.",
        "Place gadgets that see the plant, not a hallway nobody plants in.",
        "Mute/Bandit/Kaid the wall that actually gets opened this round.",
        "One roam with a clock. Four anchors is legal. Five spawn peeks is not.",
      ],
      tips: [
        "Garage wall is the Clubhouse exam. Play the trick or the hold on purpose.",
        "Default cams plus one extra intel gadget is a round.",
        "Same idea on Oregon kids/dorms: hatches, then rotates.",
      ],
      image: header("Rainbow Six Siege site setup"),
      seoKeywords: ["Siege site setup", "Siege reinforcements", "Clubhouse setup"],
    },
    {
      slug: "execute",
      name: "Attack Execute",
      mapSlug: "clubhouse",
      mapName: "Clubhouse",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Five-stacks that walk main and wonder why the plant never happens",
      duration: "Last 45 seconds of a planned hit",
      excerpt:
        "Clear roamers, open a line, plant with cover utility. Five people walking main is not a strategy.",
      steps: [
        "Roamers cleared or pinned. Hard wall open or a real alternative (hatch, window).",
        "Smokes/stuns for the plant cover. Save them — using all utility on a fake is a throw.",
        "Two people plant-capable, one watching the rotate, one on the drone.",
        "If the first execute dies, reset. Trickling is how you donate the round.",
        "After plant: play the post-plant, do not hunt the last spawn peek.",
      ],
      tips: [
        "Thermite/Ace plus Thatcher/Kali is the garage sentence.",
        "Entry creates the space. They should not be the only one alive on the opposite side of the map.",
        "Bank plaza and Coastline windows: same execute, more smokes.",
      ],
      image: header("Rainbow Six Siege plant execute"),
      seoKeywords: ["Siege execute", "Siege plant", "how to attack Siege"],
    },
    {
      slug: "roam-clock",
      name: "Roam With a Clock",
      mapSlug: "oregon",
      mapName: "Oregon",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Roamers who spawn peek and spectate",
      duration: "Until 0:45, then site",
      excerpt:
        "Waste time, get back for the plant. A spawn peek that dies is a 4v5.",
      steps: [
        "Pick a roam that can reach site in ten seconds (attic, bedroom, not the spawn bush).",
        "One gunfight or a delay. Then fall. You are not a TDM hero.",
        "When you hear hard breach or a plant, you are an anchor. Run.",
        "If you get scanned and pinned, hide or die usefully near site — not in a lockout.",
        "Two roamers max unless you are a five-stack that practices. Five roamers is a vacant site.",
      ],
      tips: [
        "Roaming so far you cannot get back for the plant is the mistake in the pitch.",
        "Vigil/Caveira wait until you can do this on Oregon without getting lost.",
        "Attackers: drone the roam first. That is why this setup exists.",
      ],
      image: header("Rainbow Six Siege roam"),
      seoKeywords: ["Siege roam", "Siege spawn peek", "Siege roam timing"],
    },
    {
      slug: "vertical",
      name: "Vertical Play",
      mapSlug: "kafe",
      mapName: "Kafe Dostoyevsky",
      difficulty: "Hard",
      risk: "Medium",
      bestFor: "Teams that hold one door and die through the floor",
      duration: "The round",
      excerpt:
        "Floors and hatches exist so you can stop holding one door. Assume plywood is not cover.",
      steps: [
        "Attack: open the hatch or the floor line before the walk-in. Buck/Sledge/Ash shotgun is the kit.",
        "Defense: hear the floor. Mute the hatch. Play below/above, not only the door.",
        "Soft floors: assume they can see you. Move after the first nade.",
        "Plant from a line they cannot swing without crossing utility.",
        "If you do not know 2F vs 3F callouts, you are not ready to vertical this map. Oregon first.",
      ],
      tips: [
        "Why do I die through walls? Destruction and pixel angles. Plywood is not cover.",
        "Chalet kitchen and Bank basement are the same exam.",
        "Lower effects that hide bullet trails and gadget lasers if you are missing the hole you opened.",
      ],
      image: header("Rainbow Six Siege vertical play"),
      seoKeywords: ["Siege vertical", "Siege hatches", "Siege destruction"],
    },
    {
      slug: "ranked-pool",
      name: "Ranked Pool and Bans",
      mapName: "Ranked",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Solo queue that never drones and instalocks a banned op",
      duration: "Ban phase + the match",
      excerpt:
        "Ban maps and ops with your stack. Solo queue still needs a drone habit. A small flexible pool beats 40 operators you cannot play.",
      steps: [
        "Know two maps well. Ban the one your five cannot call, or the one you hate for a reason.",
        "Ban the op that deletes your only strat (a wall trick, a shield, a specific intel) — not a random main you dislike.",
        "In solo: still drone. Still reinforce the right site. Still fill hard breach.",
        "One wall denial, one intel, one entry, one support is enough to start ranked.",
        "If you lost because you walked the cam hallway, that is not a ban issue.",
      ],
      tips: [
        "The pool rotates. Oregon/Clubhouse habits transfer when Consulate comes back.",
        "The base game is free to play. Operators unlock through play or bundles. You do not need them all.",
        "Newcomer path first. Ranked is not the tutorial for Caveira.",
      ],
      image: header("Rainbow Six Siege ranked"),
      seoKeywords: ["Siege ranked", "Siege bans", "Siege operator pool"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Rainbow Six Siege Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Newcomer path, four operators, drones, and why spawn peeking is a 4v5.",
      seoKeywords: ["Siege beginner", "how to play Siege", "Siege newcomer"],
      heroImage: hero("Rainbow Six Siege beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Siege is a round-based attacker/defender FPS built on destruction and gadgets. You win by gathering intel and denying plants, not by running like a Call of Duty playlist. Drone or cam the site, execute or hold with utility, then clutch only after you used the gadgets you bought.",
        },
        {
          heading: "The first week",
          body: "Play Situations and the newcomer path. Map knowledge is the real unlock, not operators. Learn two attackers and two defenders with simple kits (Ash/Sledge, Mute/Kapkan) before gadget-heavy mains. Oregon and Clubhouse first.",
        },
        {
          heading: "Drones",
          body: "Drone before you enter. A dead drone is cheaper than a dead operator. Reinforce the site you are actually playing.",
        },
        {
          heading: "The 4v5",
          body: "A spawn peek that dies is a 4v5. Roaming so far you cannot get back for the plant is the same number.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can drone a room, hold a site without blocking your rotate, and save utility for the plant. Then Bank and vertical. Ranked after that.",
        },
      ],
    },
    {
      slug: "site-setup-and-intel",
      title: "Siege Site Setup and Intel",
      category: "Fundamentals",
      readTime: "8 min",
      excerpt:
        "What to reinforce, where to put gadgets, and how drones actually win rounds.",
      seoKeywords: ["Siege site setup", "Siege drones", "Siege reinforcements"],
      heroImage: header("Rainbow Six Siege reinforcements"),
      content: [
        {
          heading: "Site",
          body: "Rotate holes, default cams, and a way to see the plant. Pretty fortresses that block your own rotate lose retakes. Random walls on the wrong bomb are a vanity project.",
        },
        {
          heading: "Attack execute",
          body: "Clear roamers, open a line, plant with cover utility. Five people walking main is not a strategy.",
        },
        {
          heading: "Intel ops",
          body: "IQ, Nomad, Val, and Mute exist because information is a round win. Use them. Shooting cameras then walking the same hallway is how you die.",
        },
        {
          heading: "Prep phase",
          body: "This is half the round. If you spend it on a spawn peek cam, you already chose TDM.",
        },
        {
          heading: "Ranked",
          body: "Ban maps and ops with your stack. Solo queue still needs a drone habit.",
        },
      ],
    },
    {
      slug: "operators",
      title: "Siege Operators: A Small Pool",
      category: "Operators",
      readTime: "8 min",
      excerpt:
        "One wall denial, one intel, one entry, one support. You do not need forty mains.",
      seoKeywords: ["Siege operators", "best Siege ops for beginners", "Siege attacker defender"],
      heroImage: header("Rainbow Six Siege operator select"),
      content: [
        {
          heading: "How many do I need?",
          body: "A small, flexible pool. One wall denial, one intel, one entry, one support is enough to start ranked. The base game is free to play with operators unlocking through play or optional bundles.",
        },
        {
          heading: "Defense first",
          body: "Mute and Kapkan (or Lesion) teach site. Anchor before Vigil. Smoke when you can hear a plant.",
        },
        {
          heading: "Attack first",
          body: "Sledge or Ash to enter. Thermite or Ace to open. Thatcher or a hard-breach enable. Iana if you want a safer drone.",
        },
        {
          heading: "Gadget-heavy",
          body: "Wait until Oregon callouts are automatic. A bad Mira window is a gift. A bad Maverick hole is a death.",
        },
        {
          heading: "Bans",
          body: "Ban what deletes your only wall or your only intel. Not a streamer's pet hate every game.",
        },
      ],
    },
    {
      slug: "attack-and-plant",
      title: "Siege Attack: Walls, Utility, Plant",
      category: "Attack",
      readTime: "7 min",
      excerpt:
        "Open a line, save a stun, plant with cover. Deathmatch aim is the last sentence.",
      seoKeywords: ["Siege attack", "Siege plant", "Siege hard breach"],
      heroImage: header("Rainbow Six Siege attacking"),
      content: [
        {
          heading: "The wall",
          body: "Clubhouse garage, Consulate garage, Chalet garage — bring a hard breacher and someone who clears the trick. No wall, no round.",
        },
        {
          heading: "Utility",
          body: "Using all utility on a default plant that never happens is a throw. Save a stun or breach for the execute.",
        },
        {
          heading: "Roamers",
          body: "Clear them or pin them. Five walking main while a Caveira sits behind is content.",
        },
        {
          heading: "Plant",
          body: "Cover utility, a drone, two people who can plant. Then play post-plant. Hunting the last spawn is how you throw a 4v2.",
        },
        {
          heading: "Clutch",
          body: "Only after you used the gadgets you bought. A 1v3 with unused smokes is a homework fail.",
        },
      ],
    },
    {
      slug: "destruction",
      title: "Siege Destruction and Vertical Play",
      category: "Destruction",
      readTime: "7 min",
      excerpt:
        "Why you die through walls, and why hatches are the round.",
      seoKeywords: ["Siege destruction", "Siege vertical", "Siege hatches"],
      heroImage: header("Rainbow Six Siege destruction"),
      content: [
        {
          heading: "Why do I die through walls?",
          body: "Destruction and pixel angles. Assume plywood is not cover. Soft floors are windows you did not place.",
        },
        {
          heading: "Hatches",
          body: "Oregon kids, Clubhouse bedroom, Kafe bakery, Bank basement. If you do not play them, you are holding one door.",
        },
        {
          heading: "Attack vertical",
          body: "Buck, Sledge, Ash shotgun, grenades. Open the line before the walk-in.",
        },
        {
          heading: "Defense",
          body: "Mute hatches, hear the floor, do not stand on the pixel they already opened.",
        },
        {
          heading: "Visuals",
          body: "Lower effects that hide bullet trails and gadget lasers if you are missing utility. See the hole.",
        },
      ],
    },
    {
      slug: "ranked",
      title: "Siege Ranked",
      category: "Ranked",
      readTime: "7 min",
      excerpt:
        "Bans, a small pool, and solo queue that still drones.",
      seoKeywords: ["Siege ranked", "Siege bans", "Siege ranked guide"],
      heroImage: header("Rainbow Six Siege ranked"),
      content: [
        {
          heading: "When to queue",
          body: "After newcomer/quick match until you can drone and call two sites. Ranked is not Caveira school.",
        },
        {
          heading: "Bans",
          body: "Ban maps and ops with your stack. Solo: ban the map you cannot call, fill the role the lobby skipped.",
        },
        {
          heading: "Pool",
          body: "It rotates. Learn Oregon and Clubhouse so the next map is a dialect, not a new language.",
        },
        {
          heading: "Solo",
          body: "Still drone. Still reinforce the right site. Still bring hard breach. Instalock Ash and never drone is a placement match forever.",
        },
        {
          heading: "Tilt",
          body: "Thunt for recoil, not another ranked after four spawn-peek deaths. The 4v5 is you.",
        },
      ],
    },
    {
      slug: "settings",
      title: "Siege Settings and Binds",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "See drones, bind cams, and stop copying a 4:3 you cannot play.",
      seoKeywords: ["Siege settings", "Siege stretched", "Siege keybinds"],
      heroImage: header("Rainbow Six Siege settings"),
      content: [
        {
          heading: "Resolution",
          body: "Use a stretched or 16:9 resolution you can actually see drones on. Copied 4:3 without the FOV habit just shrinks intel.",
        },
        {
          heading: "Effects",
          body: "Lower effects that hide bullet trails and gadget lasers if you are missing utility.",
        },
        {
          heading: "Binds",
          body: "Bind drone and camera to keys you can hit while walking. Menu-ing mid-round is a free kill.",
        },
        {
          heading: "Recoil",
          body: "Thunt / training is for recoil. Multiplayer is for drones and site. Do not mix the homework.",
        },
        {
          heading: "Audio",
          body: "Footsteps and hatches. Music down. Vertical is an audio game.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Rainbow Six Siege FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "F2P, operator count, wallbangs, and Thunt vs ranked.",
      seoKeywords: ["Siege FAQ", "is Siege free", "Siege operators"],
      content: [
        {
          heading: "Is Siege free now?",
          body: "The base game is free to play on Steam with operators unlocking through play or optional bundles.",
        },
        {
          heading: "How many operators do I need?",
          body: "A small, flexible pool. One wall denial, one intel, one entry, one support is enough to start ranked.",
        },
        {
          heading: "Why do I die through walls?",
          body: "Destruction and pixel angles. Assume plywood is not cover.",
        },
        {
          heading: "Thunt or multiplayer?",
          body: "Terrorist Hunt / training is for recoil. Multiplayer is for drones and site.",
        },
        {
          heading: "What maps first?",
          body: "Oregon and Clubhouse. Then Bank. Vertical maps (Kafe, Chalet) after you can drone without getting lost.",
        },
      ],
    },
  ],
};
