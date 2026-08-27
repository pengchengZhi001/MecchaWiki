import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 570;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const dota2Wiki: FullWiki = {
  slug: "dota-2",
  hubs: { maps: "Lanes", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Lane equilibrium, smokes, Roshan, and high ground — not a kill montage.",
      roles: "Hard support first. Carry last.",
      maps: "Safe, mid, and off before you live in the jungle.",
      guides: "Beginner path, laning, items, vision, and ranked.",
    },
    pages: {
      maps: "One map, eight spaces. Learn the lane you are standing in before you roam the whole river.",
      roles: "Position 5 first. Position 1 when last-hitting and timings are automatic.",
      strats: "Pulls, runes, smokes, Roshan, and sieges — the jobs that actually end games.",
    },
  },
  maps: [
    {
      slug: "safelane",
      name: "Safe Lane",
      difficulty: "Easy",
      tagline: "The long lane: carry farm, support pulls, and a tower you should not donate.",
      overview:
        "Safe lane is the long lane — bottom for Radiant, top for Dire. Position 1 farms here with position 5. The job is last-hits, denies, and keeping the wave on your side of the river so the carry is not standing in kill range. If the offlaner is cutting behind your tower, you have already lost the lane plan — pull, stack, or rotate a hero. Call the tower, the small camp, the pull camp, and the river rune before you invent extra names.",
      stats: [
        { label: "Who lives here", value: "Pos 1 + pos 5" },
        { label: "Win condition", value: "Net worth at 10 / 20, not first blood" },
        { label: "Support job", value: "Pull, ward the offlane camp, TP when mid is ganked" },
      ],
      poi: [
        { name: "Tier 1 tower", note: "The farm insurance. Losing it at 6 minutes because you dove is how the carry jungles with no items." },
        { name: "Small / easy camp", note: "Pull to reset equilibrium. A pull that tanks the wave under tower is a gift to the offlaner." },
        { name: "Pull camp (hard camp)", note: "Double pull when the offlane is freezing. Practice the timing in a lobby before ranked." },
        { name: "River / bounty", note: "Bounty runes and the path the offlane four walks for a kill. Ward the high ground, not the lane brush you already see." },
        { name: "Jungle triangle", note: "Where the carry goes when the lane is dead. Stack for them; do not steal the camp they walked to." },
      ],
      notes: [
        "If the wave is under their tower, you are not farming — you are feeding. Pull or skip the next wave.",
        "Pos 5: buy Observer Wards on cooldown. A dead carry with a full inventory of bracers is still your fault if you never blocked the camp.",
        "Do not dive the offlaner under their tower at minute two unless the kill is free and you have a TP to cover mid.",
      ],
      image: header("Dota 2 safelane tower and pull camp"),
      seoKeywords: ["Dota 2 safelane", "safe lane pull", "carry lane Dota"],
    },
    {
      slug: "mid-lane",
      name: "Mid Lane",
      difficulty: "Medium",
      tagline: "Levels, runes, and a 1v1 that decides whether you gank or get ganked.",
      overview:
        "Mid is a solo lane that pays in experience. You last-hit, deny, and contest the river runes. A mid who never looks at the minimap is why supports have to sit in your lane. Power runes from 6:00, water runes early, bounty on the sides — the player who bottles a haste and actually uses it on a side lane wins more games than the one who sits mid for 20 minutes with a 3–0 scoreline. Call high ground, rune spots, and the two side ramps.",
      stats: [
        { label: "Who lives here", value: "Pos 2, sometimes a rotate at 6" },
        { label: "Win condition", value: "Level 6 timing + a successful gank or tower threat" },
        { label: "Items", value: "Bottle on most heroes; boots before a third bracer" },
      ],
      poi: [
        { name: "High ground ramp", note: "Where you get ganked. Ward the ramp, not the cliff you already have vision of from lane." },
        { name: "River runes", note: "Water early, power from 6:00. Missing every rune is a hidden 0–2." },
        { name: "Lotus pool", note: "Free regen if you walk. Do not die for a lotus into a smoke." },
        { name: "Side shop path", note: "Old muscle memory. The shop is gone — the path still exists for ganks." },
        { name: "T1 mid tower", note: "Take it when you have a wave and a teammate. Solo diving mid T1 is how you donate your Bottle." },
      ],
      notes: [
        "If you are losing the 1v1, ask for a pull or a smoke. Sitting at 20% HP in lane is not 'playing safe' — it is feeding XP.",
        "TP to a tower that is actually dying. Walking from mid to a dead T1 is a second death.",
        "A mid who never leaves after 6 is farming a losing map. One haste gank is the role.",
      ],
      image: header("Dota 2 mid lane river runes"),
      seoKeywords: ["Dota 2 mid", "mid lane runes", "Dota mid guide"],
    },
    {
      slug: "offlane",
      name: "Off Lane",
      difficulty: "Medium",
      tagline: "The short lane: soak XP, cut waves, and do not feed the enemy carry.",
      overview:
        "Offlane is the short lane — top for Radiant, bottom for Dire. Position 3 lives here, often with a 4. You are not trying to out-farm their carry. You are trying to not die, to soak levels, and to make their safelane uncomfortable with cuts, pulls, and pressure. If you go 0–6 by minute eight, the game is already on a timer. Call the large camp, the cut path behind their T1, and the river bounty.",
      stats: [
        { label: "Who lives here", value: "Pos 3 ± pos 4" },
        { label: "Win condition", value: "Levels + a usable ultimate, not CS equal to the carry" },
        { label: "Fail state", value: "Feeding the pos 1 two kills before 6" },
      ],
      poi: [
        { name: "Large camp", note: "Block it with a ward if you are the 5. Unblock it if you are the 3 who needs a pull." },
        { name: "Behind T1 cut", note: "Catch the wave so their carry has nothing. Do this when you will not die to their 4 and 5." },
        { name: "Tier 1 offlane tower", note: "Yours is expendable compared to the safelane T1. Do not die defending it 1v3." },
        { name: "Jungle between lanes", note: "Where you recover if the lane is impossible. Stack once; do not jungle for ten minutes as Tidehunter." },
        { name: "Bounty rune", note: "The 4 contests this. The 3 should not walk into fog for 40 gold at 3:00." },
      ],
      notes: [
        "Soak the range creep XP even if you cannot last-hit. Levels on offlane heroes are the item.",
        "If their 5 is pulling constantly, you are allowed to crash the wave and walk to the pull camp.",
        "Buy a cheap regen and a stick if they have spells. Fancy cores wait until you have a real level advantage.",
      ],
      image: header("Dota 2 offlane short lane"),
      seoKeywords: ["Dota 2 offlane", "offlane guide", "position 3 Dota"],
    },
    {
      slug: "jungle",
      name: "Jungle",
      difficulty: "Medium",
      tagline: "Stacks, neutrals, and the camps you should not steal from your carry.",
      overview:
        "The jungle is a farm overlay, not a fifth lane you pick in the draft. Small, medium, large, and ancient camps exist so cores can recover when a lane dies and so supports can pull. Neutral items drop on a timer. If you jungle from 0:00 on a hero that has a lane, you are throwing XP. If you farm the ancient camp at 8 minutes while a wave dies under your T1, you are also throwing. Call camp names and which side of the map you are on.",
      stats: [
        { label: "Who farms it", value: "Cores after a timing, supports only to pull or stack" },
        { label: "Stack timing", value: "Near :53–:55 depending on camp" },
        { label: "Steal rule", value: "Do not take the camp the pos 1 walked to" },
      ],
      poi: [
        { name: "Ancient camp", note: "For cores with cleave or a clear. Supports taking ancients at 12 minutes is a report waiting to happen." },
        { name: "Easy camp (pull)", note: "The safelane reset tool. Learn the pull before you learn a new hero." },
        { name: "Hard camp (offlane)", note: "Block with a ward as pos 5. The offlaner wants this camp to exist." },
        { name: "Triangle", note: "Safe jungle for the winning carry. Ward it when you take the enemy triangle." },
        { name: "Outpost jungle", note: "Wisdom runes spawn in the corners. Walking there 4v1 is how you donate a core." },
      ],
      notes: [
        "Stack for the hero who can clear. A stack the pos 5 cannot farm is still useful if the carry is 20 seconds away.",
        "Neutral item ticks are not a reason to miss a wave. Waves print more gold.",
        "If three cores are in one jungle, someone should be on a wave. The map has two side lanes for a reason.",
      ],
      image: header("Dota 2 jungle camps and stacking"),
      seoKeywords: ["Dota 2 jungle", "stack camps", "neutral items Dota"],
    },
    {
      slug: "river",
      name: "River",
      difficulty: "Medium",
      tagline: "Runes, smokes, and the fog where games actually start.",
      overview:
        "The river splits the map and holds the information war. Bounty runes, water runes, power runes, lotus pools, and the smoke paths between lanes all live here. Teams that never leave lane lose to teams that walk the river with a plan. Ward the high ground that sees the rune, not the river floor that expires in 30 seconds. Call which rune, which lotus, and whether you have smoke.",
      stats: [
        { label: "Power runes", value: "From 6:00, every two minutes" },
        { label: "Bounty", value: "Every three minutes — four spots" },
        { label: "Smoke", value: "Walk river fog, not the lane your courier uses" },
      ],
      poi: [
        { name: "Power rune spots", note: "One of two spawns. De-ward or you are ganking into a sentry." },
        { name: "Lotus pools", note: "Contest when you have numbers. Do not 1v3 a lotus." },
        { name: "Smoke paths", note: "From your jungle into their mid ramp, or from river into a side lane. Announce the smoke." },
        { name: "Wisdom corners", note: "Outpost jungle. Take them with a core nearby, not five supports walking in a line." },
        { name: "Twin / portal paths", note: "If the patch still has a portal, it is a rotate tool — not a suicide button into their T2." },
      ],
      notes: [
        "Missing every bounty is 200 gold you donated as a team. Supports should path through them.",
        "A haste rune used on a wave is better than a haste rune used to farm a small camp.",
        "If you see a smoke on the map, assume they are walking river. Do not stand mid high ground alone.",
      ],
      image: header("Dota 2 river runes and lotus pools"),
      seoKeywords: ["Dota 2 river", "power runes", "Dota 2 smoke"],
    },
    {
      slug: "roshan",
      name: "Roshan Pit",
      difficulty: "Hard",
      tagline: "Aegis is an objective. Contesting it blind is a teamfight you did not have to take.",
      overview:
        "Roshan lives in the pit in the river. The first Aegis is often the difference between a high-ground attempt and a wasted 30 minutes. You take Roshan when you have vision of the other team, buybacks available, and a reason to want Aegis — not because the pit is empty on your screen. Later Roshans drop more. Treat the pit like a bombsite: smoke in, ward the ramps, assign who tanks. Call pit, ramps, and whether you have detection.",
      stats: [
        { label: "First prize", value: "Aegis of the Immortal" },
        { label: "When to take", value: "After a won fight or when they cannot walk" },
        { label: "When not to", value: "No vision, no buyback, enemy cores missing" },
      ],
      poi: [
        { name: "Pit", note: "Roshan. Tank with a hero who can, not the pos 1 with no armor." },
        { name: "Radiant ramp", note: "Dire often contests from this side early. Ward it." },
        { name: "Dire ramp", note: "The other door. A smoke from this ramp is a classic wipe." },
        { name: "Behind pit / cliff", note: "Where observers live. De-ward before you commit 40 seconds of channel." },
        { name: "River approach", note: "The sound cue. If you hear them and you are 3 in pit, you are the Roshan." },
      ],
      notes: [
        "Aegis is for taking a building or winning the next fight — not for farming the triangle alone.",
        "If you cannot see three enemies, assume they are walking to pit.",
        "Cheese and later drops do not matter if you wipe for the first Aegis at 18 minutes with no buyback.",
      ],
      image: header("Dota 2 Roshan pit"),
      seoKeywords: ["Roshan Dota 2", "Aegis", "when to take Roshan"],
    },
    {
      slug: "high-ground",
      name: "High Ground",
      difficulty: "Hard",
      tagline: "Towers, glyph, and the wipe that throws a won game.",
      overview:
        "High ground is the enemy base: T3 towers, barracks, and the paths between them. Diving it without a creep wave, without detection, and without buybacks is how 20k leads disappear. Glyph exists to waste your smash. You siege with a wave, you chip a melee rax, you leave if the fight is bad. Call which rax, whether glyph is down, and who has buyback.",
      stats: [
        { label: "Need", value: "Wave + vision + Aegis or a won fight" },
        { label: "Leave condition", value: "Glyph used, two cores down, or no detection vs invis" },
        { label: "Win", value: "One rax, then reset — not five cores dead on the ramp" },
      ],
      poi: [
        { name: "T3 tower", note: "Takes a wave. Do not tank it as a support with no items." },
        { name: "Melee barracks", note: "The one that actually changes the game. Range rax is extra." },
        { name: "Ramps", note: "Where you get picked. Smoke and sentries before you walk up." },
        { name: "Fountain line", note: "The heal is real. Chasing into fountain is a highlight for them." },
        { name: "Shrines / base statues", note: "Heal and fight tools. Do not ignore them if the patch still has a base heal." },
      ],
      notes: [
        "One rax and a reset beats a greedy throne dive. Ancient last.",
        "If their cores have buyback and you do not, you are the ones high-grounding on a timer.",
        "Invis heroes on high ground need dust or sentries. Guessing is how the game extends 20 minutes.",
      ],
      image: header("Dota 2 high ground siege"),
      seoKeywords: ["Dota 2 high ground", "how to siege", "rax Dota"],
    },
    {
      slug: "outposts",
      name: "Outposts and Watchers",
      difficulty: "Easy",
      tagline: "Free XP, vision, and the map control people skip for a jungle camp.",
      overview:
        "Outposts grant team experience and vision when captured. Watchers are extra vision tools on a cooldown. Taking the enemy outpost after a won fight is often worth more than chasing one more kill into their T2. Defending your own outpost stops them from snowballing XP. Call which outpost and whether it is capturable yet.",
      stats: [
        { label: "Payoff", value: "Team XP + vision" },
        { label: "When", value: "After they become capturable — then after every won fight" },
        { label: "Fail", value: "Five people channeling while the other team smokes mid" },
      ],
      poi: [
        { name: "Your outpost", note: "Defend it if they are walking. A lost outpost is a hidden gold disadvantage." },
        { name: "Enemy outpost", note: "Take it when you have numbers. Do not 1v4 a channel." },
        { name: "Watchers", note: "Click them when you rotate. Free vision people forget exists." },
        { name: "Wisdom rune corners", note: "Near outpost jungle. Path a support through them on the timer." },
        { name: "T2 nearby", note: "Outpost control and T2 pressure travel together. Ward both." },
      ],
      notes: [
        "If a fight ends near an outpost, someone should be capturing while others pick up runes.",
        "Watchers expire. Re-click on a rotate; do not assume last fight's watcher still sees.",
        "XP from outposts is team-wide. It is not 'support farming' to take one.",
      ],
      image: header("Dota 2 outpost capture"),
      seoKeywords: ["Dota 2 outposts", "watchers", "wisdom rune"],
    },
  ],
  roles: [
    {
      slug: "hard-support",
      name: "Hard Support",
      role: "Position 5",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Lane", value: "Safelane pull and save" },
        { label: "Item priority", value: "Wards > boots > your 'core' item" },
      ],
      kit: ["Observer and Sentry Wards", "Town Portal Scroll always", "A save or a disable"],
      excerpt:
        "The best first role. You pull, you ward, you die so the carry does not, and you buy detection. KDA is not the scoreboard that matters.",
      strengths: [
        "Teaches the map: pulls, runes, smokes, and why towers exist",
        "A good 5 wins lanes that hero matchups cannot",
        "Fits almost any draft — Crystal Maiden, Lion, Shadow Shaman, Warlock",
      ],
      weaknesses: [
        "Boring if you only want rampage screenshots",
        "Starving yourself of boots forever means you never place the ward",
      ],
      starterTips: [
        "Pull the easy camp when the wave is pushing. Practice in a lobby until the timing is boring.",
        "Buy Observer Wards on cooldown. The stock sitting in the shop is a mistake with your name on it.",
        "Keep a TP. Walking back from a kill while mid T1 dies is how you lose the map.",
        "Start Crystal Maiden or Lion. Save the 'fun' roaming 5 until you can last-hit a pull.",
      ],
      image: hero("Dota 2 hard support placing Observer Wards"),
      seoKeywords: ["Dota 2 support", "position 5", "how to support Dota"],
    },
    {
      slug: "offlane",
      name: "Offlaner",
      role: "Position 3",
      difficulty: "Medium",
      beginnerRank: 2,
      tiers: [
        { label: "Lane", value: "Soak XP, do not feed" },
        { label: "Fight", value: "Initiation or aura — you start or you tank" },
      ],
      kit: ["Sticks and regen in lane", "A timing item (Blink, Aura, or BKB depending on hero)", "TP for the other T1"],
      excerpt:
        "You survive the short lane, hit a level timing, and become the reason teamfights have a front line. Feeding their carry two kills is the fail state.",
      strengths: [
        "Tidehunter, Underlord, Centaur teach the role without needing 300 CS",
        "A live offlaner with Blink wins fights the carry cannot start",
        "Cuts and pressure win maps without a highlight reel",
      ],
      weaknesses: [
        "Ego kills in lane throw the game faster than a poor carry",
        "Farming jungle for 15 minutes as a teamfight hero is a missing player",
      ],
      starterTips: [
        "If the lane is impossible, soak from fog and take a camp. 0–0–6 is better than 0–4–2.",
        "Buy a cheap regen. Fancy cores wait until you have levels.",
        "Your Blink or aura timing is the fight. Do not show in river 30 seconds before it.",
        "Tidehunter is the classroom. Learn Ravage range before you pick a greedy 3.",
      ],
      image: hero("Dota 2 offlaner initiating a fight"),
      seoKeywords: ["Dota 2 offlane", "position 3", "Tidehunter guide"],
    },
    {
      slug: "soft-support",
      name: "Soft Support",
      role: "Position 4",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Lane", value: "Disrupt the enemy safelane" },
        { label: "Map", value: "Smoke, stacks, rune fights" },
      ],
      kit: ["Wards still — you are not a core", "A roaming spell", "Smoke of Deceit on the clock"],
      excerpt:
        "You make the offlane livable and then you make the rest of the map unsafe. A 4 who farms the triangle at 12 minutes is a third core the draft did not ask for.",
      strengths: [
        "Ganks that actually use smoke win mid without the mid hero being better",
        "Can play active heroes: Earthshaker, Clockwerk, Tusk, Hoodwink",
        "Stacks and runes are your gold when the lane is over",
      ],
      weaknesses: [
        "Showing every 30 seconds in the same lane gets you killed and trains nothing",
        "Buying core items while the 5 has no boots throws vision",
      ],
      starterTips: [
        "Contest bounty runes. Path through them instead of walking lane forever.",
        "Smoke with the mid after 6. A 4 who never leaves offlane is a worse 5.",
        "Stack the ancient if your 3 or 1 can clear. One stack is a better 'farm' than a small camp.",
        "You still buy sentries. Dual support vision is the role.",
      ],
      image: hero("Dota 2 position 4 smoke gank"),
      seoKeywords: ["Dota 2 position 4", "soft support", "roaming support Dota"],
    },
    {
      slug: "mid",
      name: "Mid",
      role: "Position 2",
      difficulty: "Hard",
      beginnerRank: 4,
      tiers: [
        { label: "Lane", value: "CS + runes + not dying" },
        { label: "After 6", value: "Gank or take tower — pick one" },
      ],
      kit: ["Bottle on most heroes", "Boots before a third bracer", "A TP that you actually press"],
      excerpt:
        "You win a 1v1, then you spend that advantage on a tower or a side-lane kill. Sitting mid 3–0 while barracks fall is a KDA screenshot, not a win.",
      strengths: [
        "Levels come fast — your ultimate decides early fights",
        "Rune control is a second income stream",
        "A rotated mid saves a losing safelane",
      ],
      weaknesses: [
        "Every missed last-hit is louder in a 1v1",
        "No map awareness = you are the gank victim, not the ganker",
      ],
      starterTips: [
        "Learn last-hits in demo or New Player Mode until 50 CS at 6 feels late, not heroic.",
        "Bottle, then look at the rune timer. Missing every power rune is a hidden loss.",
        "When you hit 6, tell the 4 you are walking. A solo mid gank into a warded ramp is feeding.",
        "Start a simple mid (Dragon Knight, Viper, Zeus) before Invoker.",
      ],
      image: hero("Dota 2 mid laner contesting a rune"),
      seoKeywords: ["Dota 2 mid", "position 2", "how to mid Dota"],
    },
    {
      slug: "carry",
      name: "Carry",
      role: "Position 1",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Early", value: "Do not die, hit CS" },
        { label: "Mid", value: "A timing, then a building" },
      ],
      kit: ["Quelling Blade and a lane item", "A timing (BKB, Manta, Daedalus — hero dependent)", "Buyback gold after the first big item"],
      excerpt:
        "You farm until a timing, then you take an objective. Fighting every river skirmish at minute eight is how you stay a 4-slot forever.",
      strengths: [
        "Wins the game if the map is held until your item",
        "Juggernaut and Wraith King teach the loop without a 200-hour hero",
        "A disciplined 1 makes four other roles make sense",
      ],
      weaknesses: [
        "Feeding in lane deletes 15 minutes of support work",
        "Never grouping when you have BKB is how games last 60 minutes and still lose",
      ],
      starterTips: [
        "Last-hit under tower. If you cannot, you are not ready for ranked carry.",
        "Tell the team your timing. 'Battle Fury in 90 seconds' is a command to not 4v5.",
        "Take a tower or Roshan when the item completes. Jungle forever is not a plan.",
        "Buyback is a slot. Dying with no buyback on a won map is the classic throw.",
      ],
      image: hero("Dota 2 carry farming a timing item"),
      seoKeywords: ["Dota 2 carry", "position 1", "how to play carry"],
    },
  ],
  strats: [
    {
      slug: "safelane-pull",
      name: "Safelane Pull and Equilibrium",
      mapSlug: "safelane",
      mapName: "Safe Lane",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "New position 5s whose carry never last-hits",
      duration: "First 8 minutes",
      excerpt:
        "When the wave is past the river, pull the easy camp so the next wave meets on your side. The carry farms; the offlaner walks.",
      steps: [
        "If your creeps are pushing into their tower, leave the lane and aggro the small camp into the wave.",
        "Tank the pull so the camp dies to your creeps, not to you standing in the camp for no reason.",
        "If the offlaner is freezing, set up a double pull on the hard camp — practice this in a lobby first.",
        "Ward or block their large camp so they cannot pull as easily.",
        "After the reset, go back to denying and covering the carry. The pull is not a jungle farm session.",
      ],
      tips: [
        "A pull that leaves the wave under their tower made the lane worse. Reset again or skip a wave.",
        "The carry should last-hit the pulled creeps if they can reach. Do not steal the gold they walked for.",
        "If you get collapsed on at the camp, TP out or walk to tower. Dying on a pull is still dying.",
      ],
      image: header("Dota 2 safelane camp pull"),
      seoKeywords: ["Dota 2 pull", "lane equilibrium", "safelane support"],
    },
    {
      slug: "mid-rune-control",
      name: "Mid Rune Control",
      mapSlug: "mid-lane",
      mapName: "Mid Lane",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Mids who win lane and then never leave",
      duration: "Minute 6–16",
      excerpt:
        "Bottle the power rune, call the 4, and spend it on a side lane or a tower. A haste used to farm a small camp is a wasted rune.",
      steps: [
        "Track the 6:00 / every-two-minutes timer. Be walking to the river before the spawn, not after.",
        "Have a ward or a teammate so you are not 1v3 at the rune.",
        "Call which rune you got. Haste and invis are gank runes. Regen and DD can stay mid if the 1v1 is still live.",
        "Path through a side lane with the 4. Kill or force a TP — then leave. Do not chase into their jungle for 40 seconds.",
        "If the gank fails, take a wave or a bounty and go back. Standing in fog hoping is how you miss two more runes.",
      ],
      tips: [
        "Water runes at 2 and 4 fill the Bottle. Missing those is how you leave lane at 20% HP.",
        "A mid who TPs to a diving safelane is using the role. A mid who never TPs is a 1v1 bot.",
        "If you have no Bottle, you still walk the rune. The item is not the only way to contest.",
      ],
      image: header("Dota 2 mid power rune"),
      seoKeywords: ["Dota 2 runes", "mid gank", "power rune"],
    },
    {
      slug: "offlane-cut-wave",
      name: "Offlane Wave Cut",
      mapSlug: "offlane",
      mapName: "Off Lane",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Position 3s who are losing CS and feeding anyway",
      duration: "Minutes 3–10",
      excerpt:
        "Catch the wave behind their safelane tower so their carry has nothing to hit. Do this when you will not die to their 4 and 5.",
      steps: [
        "Push one wave into the tower so you have space, or leave lane when the wave is crashing anyway.",
        "Walk behind their T1 and take the next wave. Do not walk the same path every time.",
        "If their supports show on you, stop. A cut that is a 0–2 is not a cut.",
        "After you cut, you can pull their camp or rotate to a bounty. Do not stand behind the tower forever.",
        "Tell the 4 where you are. A 3 cutting and a 4 diving the carry at the same time is a 2v4 in two places.",
      ],
      tips: [
        "Heroes with a nuke or a tanky body cut better. A squishy 3 cutting into Lion + CM is feeding.",
        "The goal is to starve their 1, not to get last-hits equal to a carry.",
        "If their T1 is already down, cutting is often just walking into their jungle. Ward first.",
      ],
      image: header("Dota 2 offlane cutting a creep wave"),
      seoKeywords: ["Dota 2 cut creeps", "offlane cut", "wave cut"],
    },
    {
      slug: "smoke-gank",
      name: "Smoke Gank",
      mapSlug: "river",
      mapName: "River",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Teams that wander the river one by one",
      duration: "45–90 seconds",
      excerpt:
        "Five people (or three) click Smoke, walk fog, and hit one target. A smoke that breaks on a ward is a failed execute — de-ward first.",
      steps: [
        "Buy Smoke of Deceit. Supports should have it in inventory before the 'we should smoke' complaint in chat.",
        "De-ward the path you will walk. A sentry on the mid ramp is the whole plan.",
        "Smoke in your jungle or behind T1, not in the river they already see.",
        "Walk to one hero — usually mid or a farming carry — and use spells together. Do not split to two lanes.",
        "After the kill or the force-TP, take a tower, a bounty, or Roshan. The smoke was for an objective, not a KDA.",
      ],
      tips: [
        "Announce the smoke in voice. Silent smokes are how two people walk out of it.",
        "If smoke breaks early, leave. Forcing a 3v5 in river is worse than saving the cooldown.",
        "Do not smoke every two minutes into the same ward. Change the path.",
      ],
      image: header("Dota 2 Smoke of Deceit gank"),
      seoKeywords: ["Dota 2 smoke", "smoke gank", "Smoke of Deceit"],
    },
    {
      slug: "roshan-take",
      name: "Roshan Take",
      mapSlug: "roshan",
      mapName: "Roshan Pit",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Teams that win a fight and then farm jungle instead of Aegis",
      duration: "40–70 seconds in pit",
      excerpt:
        "Ward the ramps, check buybacks, tank with the right hero, and leave with Aegis for a building — not for a triangle camp.",
      steps: [
        "See at least three enemies or know they cannot walk. Missing cores means they are walking to you.",
        "Ward both ramps and de-ward the cliffs. Detection if they have invis.",
        "Assign who tanks Roshan. The pos 1 with no armor is not that person.",
        "If the other team shows, decide to fight outside pit or to cancel. Fighting in pit 3v5 is a wipe.",
        "Aegis goes on a hero who will hit a tower or start the next fight. Then you move to a T2 or high ground.",
      ],
      tips: [
        "Take Roshan after a won fight while they are dead. That is the free Aegis.",
        "Do not start pit at 19:50 if a power rune is about to spawn and nobody is covering river.",
        "Buyback on the Aegis carrier is optional; buyback on the rest of the team is not when you siege.",
      ],
      image: header("Dota 2 team taking Roshan"),
      seoKeywords: ["how to take Roshan", "Aegis Dota 2", "Roshan timing"],
    },
    {
      slug: "high-ground-siege",
      name: "High Ground Siege",
      mapSlug: "high-ground",
      mapName: "High Ground",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Teams that throw 20k leads on the ramp",
      duration: "One wave, then a reset",
      excerpt:
        "Bring a wave, chip a melee rax, respect glyph, and leave if two cores die. Throne last.",
      steps: [
        "Have a creep wave. No wave means you are tanking T3 with heroes.",
        "Smoke or vision the ramps. Sentries for invis. Dust in inventory, not in stash.",
        "Hit the tower, then melee barracks. One rax is a win. Greedy throne dives are how leads vanish.",
        "If they glyph, back up and wait. Standing in glyph is donating cooldowns.",
        "If two cores die, leave. Buyback defense on high ground is their win condition.",
      ],
      tips: [
        "Aegis is for this moment. Using Aegis to farm ancient stacks is a meme until it loses the game.",
        "Call who has buyback before you walk up. Silence here is a throw.",
        "Range rax is extra. Melee rax changes the creeps. Prioritize melee.",
      ],
      image: header("Dota 2 high ground barracks siege"),
      seoKeywords: ["Dota 2 high ground", "how to end Dota", "rax siege"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Dota 2 Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "What to play first, which role to learn, and why Turbo is not a substitute for last-hitting.",
      seoKeywords: ["Dota 2 beginner", "how to play Dota 2", "Dota 2 first hours"],
      heroImage: hero("Dota 2 beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Dota 2 is a five-versus-five MOBA. You win by destroying the Ancient, which means towers, barracks, and not throwing fights on high ground. Kills are a resource you spend on objectives. A 15–2 scoreline with no rax is a screenshot, not a win.",
        },
        {
          heading: "The first week",
          body: "Play New Player Mode and hero demos until you can last-hit under a tower and press every spell without opening the shop mid-fight. Then play unranked as position 5. Turbo is faster but hides last-hit timing and tower patterns — still do a few standard games. Do not queue ranked until you can buy a TP, pull a camp, and explain what a bounty rune is.",
        },
        {
          heading: "Tiny hero pool",
          body: "One carry (Juggernaut or Wraith King), one offlaner (Tidehunter), one support (Crystal Maiden or Lion). A 40-hero pool with 0–12 on each is how you stay in the tutorial forever. Learn the map on a simple hero.",
        },
        {
          heading: "The loop",
          body: "Lane until a timing, group for a tower or Roshan, then end with barracks. If your carry is 30 seconds from an item, take a wave or a stack instead of a river deathball. Town Portal scrolls are how you keep towers; walking back from a kill is how you lose two.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can pull the small camp, you buy wards as a support, you TP to a diving tower, and you stop diving high ground with no detection. Then add a second role — offlane before mid, mid before carry.",
        },
      ],
    },
    {
      slug: "laning-and-cs",
      title: "Dota 2 Laning and Last-Hits",
      category: "Fundamentals",
      readTime: "8 min",
      excerpt:
        "Equilibrium, denies, pulling, and why the range creep is the whole lane.",
      seoKeywords: ["Dota 2 last hitting", "lane equilibrium", "Dota 2 denies"],
      heroImage: header("Dota 2 last-hitting in lane"),
      content: [
        {
          heading: "Last-hits and denies",
          body: "You get gold for last-hits. You deny your own creeps so the enemy does not. The range creep is worth more experience — deny it, and do not let theirs die for free. If you cannot last-hit under your tower, practice in a demo until you can. Ranked will not teach it.",
        },
        {
          heading: "Equilibrium",
          body: "The wave should meet on your side of the river if you are the carry. If it is under their tower, you are not farming — you are standing in kill range. Supports pull to reset. Cores stop auto-attacking the wave when it is already winning.",
        },
        {
          heading: "Pulling",
          body: "Aggro a jungle camp into the lane wave so the next creep wave meets closer to your tower. Easy camp for a single pull; double pull on the hard camp when they freeze. A pull that tanks under the wrong tower made the lane worse.",
        },
        {
          heading: "When to leave lane",
          body: "After a tower dies, after a successful gank, or when the wave is dead and a stack is ready. Sitting in an empty lane while a power rune spawns is how mids lose the map. Supports leave to ward and stack; they do not AFK behind the carry for 15 minutes.",
        },
        {
          heading: "Harass vs CS",
          body: "A support who only right-clicks the offlaner and never pulls will still lose the lane if the wave is always under the enemy tower. Trade when the enemy goes for a last-hit. Do not trade your HP down to 20% for one deny.",
        },
      ],
    },
    {
      slug: "roles-and-farm",
      title: "Dota 2 Roles and Farm Priority",
      category: "Team Play",
      readTime: "8 min",
      excerpt:
        "Who gets the lane, who gets the stack, and why a fourth core item on a 4 is a missing ward.",
      seoKeywords: ["Dota 2 positions", "farm priority", "pos 1 to 5"],
      heroImage: header("Dota 2 role selection"),
      content: [
        {
          heading: "Positions are farm order",
          body: "Position 1 gets the safest farm. Position 2 gets mid. Position 3 soaks the hard lane. Positions 4 and 5 buy the vision and the saves. If four people need the same ancient stack, the draft already failed — or someone is playing the wrong role.",
        },
        {
          heading: "Pos 5 and 4",
          body: "Wards, pulls, smokes, TPs. Your items are Force, Glimmer, Mek, Boots — not a Battle Fury. If the shop has Observer Wards and you have gold for a damage item, buy the wards.",
        },
        {
          heading: "Pos 3",
          body: "Levels and a timing that starts fights. You can farm after the lane, but you should not disappear for 12 minutes while the team 4v5s. Blink, aura, or BKB — then you show.",
        },
        {
          heading: "Pos 2 and 1",
          body: "Mid spends an advantage on a tower or a gank. Carry hits a timing and then hits a building. A 1 who never groups with BKB and a 2 who never leaves mid are the same problem with different lanes.",
        },
        {
          heading: "Call the farm",
          body: "Say 'stack for me' or 'I need this wave.' Silent cores who ping their own jungle while a wave dies under T1 are why supports mute. Farm priority is a conversation, not a steal.",
        },
      ],
    },
    {
      slug: "items-and-timings",
      title: "Dota 2 Items and Timings",
      category: "Items",
      readTime: "8 min",
      excerpt:
        "Itemization is a counter-pick. Six damage items on a hero that needs BKB is a shopping list, not a build.",
      seoKeywords: ["Dota 2 items", "BKB", "item timings"],
      heroImage: header("Dota 2 item build and timings"),
      content: [
        {
          heading: "Build for the game",
          body: "If they have three stuns, BKB or a status-resist item is the damage item. If they have a lot of physical, armor. If they have invis, detection on a support is the item you 'forgot.' Guide builds are a start. The enemy draft is the real guide.",
        },
        {
          heading: "Timings",
          body: "An item is a timer. Battle Fury, Radiance, Blink, BKB — tell the team when it completes so they do not 4v5 for 90 seconds. When it completes, take a tower or Roshan. Farming a second jungle item immediately is how games stall.",
        },
        {
          heading: "Lane items",
          body: "Sticks, bracers, wraith bands, and regen win the first six minutes. Skipping them for a fast core is how you feed and delay the core anyway. Quelling Blade is not optional on most melee cores.",
        },
        {
          heading: "Support gold",
          body: "Boots, wand, a save or a Mek. Neutral items are extra. You do not need six slots. You need to be on the map with a TP.",
        },
        {
          heading: "Buyback",
          body: "After the first big item, cores should think about buyback gold before a risky fight. Dying with no buyback on high ground is the classic throw. Supports buy back if a rax is actually falling — not for a river bounty.",
        },
      ],
    },
    {
      slug: "vision-and-smoke",
      title: "Dota 2 Vision, Wards, and Smoke",
      category: "Map Control",
      readTime: "8 min",
      excerpt:
        "Observer Wards on cooldown, sentries for deward, smoke for a kill that becomes a tower.",
      seoKeywords: ["Dota 2 wards", "Observer Ward", "Smoke of Deceit"],
      heroImage: header("Dota 2 Observer Ward vision"),
      content: [
        {
          heading: "Observers",
          body: "Buy them when they are in stock. Place them on high ground that sees a rune, a camp, or a gank path — not in the lane you already have vision of. A ward that sees a smoke is worth more than a fourth damage item on a four-position.",
        },
        {
          heading: "Sentries and deward",
          body: "If your wards die instantly, they have sentries. Deward the obvious cliffs before you smoke. Detection for invis heroes is a team item: sentries, dust, gem later. Guessing is how you feed the same Riki for 30 minutes.",
        },
        {
          heading: "Smoke",
          body: "Click it in a safe spot, walk fog, hit one target, take an objective. A smoke that breaks on a ward is an execute you skipped the deward for. Announce it. Do not smoke as two people while three farm.",
        },
        {
          heading: "Watchers and outposts",
          body: "Click watchers on a rotate. Capture outposts after fights. These are free vision and XP that pubs skip for one more jungle camp.",
        },
        {
          heading: "Where not to ward",
          body: "The same cliff every game. The river floor that expires when a power rune spawns. Inside your own T2 when you are winning — that ward should be in their jungle.",
        },
      ],
    },
    {
      slug: "objectives-and-roshan",
      title: "Dota 2 Objectives: Towers, Roshan, Rax",
      category: "Macro",
      readTime: "7 min",
      excerpt:
        "Kills buy time to hit buildings. Aegis is for high ground, not for the triangle.",
      seoKeywords: ["Dota 2 objectives", "Roshan", "how to end a game"],
      heroImage: header("Dota 2 taking a tower after a fight"),
      content: [
        {
          heading: "Towers first",
          body: "After a kill, hit the nearest tower if a wave is there. Chasing into fog for a sixth kill is how the other team TPs in and you get nothing. T1s open the jungle. T2s open Roshan and high ground paths.",
        },
        {
          heading: "Roshan",
          body: "Take it when you won a fight or when they cannot walk. Ward the ramps. Aegis is for a building or the next fight. Later Roshans drop more — still not worth a wipe with no buyback.",
        },
        {
          heading: "High ground",
          body: "Wave, vision, detection, glyph respect, melee rax, leave if cores die. Throne last. A 20k lead is not a reason to five-man ramp without a creep wave.",
        },
        {
          heading: "When not to fight",
          body: "If your 1 is 30 seconds from BKB, take a stack or a wave. If they have buyback and you do not, do not take a 5v5 on their ramp. If a power rune is spawning and nobody is there, you are fighting the wrong objective.",
        },
        {
          heading: "Map before throne",
          body: "Rax on one lane, then another, then Ancient. Diving fountain for a rampage is how the Ancient lives another 20 minutes.",
        },
      ],
    },
    {
      slug: "settings-and-hotkeys",
      title: "Dota 2 Settings and Hotkeys",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Quick-cast, camera grip, minimap clicks, and the helpers you should turn off later.",
      seoKeywords: ["Dota 2 settings", "quick cast", "Dota 2 hotkeys"],
      heroImage: header("Dota 2 hotkey and camera settings"),
      content: [
        {
          heading: "Quick-cast vs normal-cast",
          body: "Enable quick-cast on targeted spells you never misclick. Keep normal-cast on skillshots until muscle memory exists. Misclicking a save on a creep is worse than being 50ms slower.",
        },
        {
          heading: "Camera",
          body: "Use a camera grip key and minimap click-move. Camera locked on your hero is why you miss smokes and incoming TPs. Edge pan or a middle-mouse hold — pick one and stop fighting the screen.",
        },
        {
          heading: "Range indicators and last-hit helper",
          body: "Turn them on while learning. Turn the last-hit helper off once your ears track the missile. Range indicators can stay; they are not a crutch the way the helper is.",
        },
        {
          heading: "Minimap",
          body: "Make it large enough to click. Alt-click runes, missing heroes, and items. A silent mid who never pings a missing is why the safelane dies.",
        },
        {
          heading: "Net and FPS",
          body: "A wired connection and a stable frame rate beat a fancy overlay. Turn off extra overlays if you hitch when five ultimates go off. Dota is already busy.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Dota 2 FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Free to play, ranked roles, Turbo, and why you keep feeding the first ten minutes.",
      seoKeywords: ["Dota 2 FAQ", "is Dota 2 free", "Dota 2 ranked"],
      content: [
        {
          heading: "Is Dota 2 free?",
          body: "Yes. Dota 2 is free to play on Steam. All heroes are available. Cosmetics are optional. The game is not hiding a pay-to-win item in the shop.",
        },
        {
          heading: "What should I play first?",
          body: "New Player Mode, then unranked position 5, then offlane. Carry and mid wait until last-hitting and TPs are automatic. Turbo is fine for hero feel, not for learning towers.",
        },
        {
          heading: "Why do I keep feeding?",
          body: "The wave is under their tower, you have no TP, and you are walking river alone. Pull, buy wards, stay with the carry or behind your T1. Feeding is usually a map mistake, not an aim mistake.",
        },
        {
          heading: "Should I use ranked roles?",
          body: "Yes once you know one role well. Queueing all five roles is how you get mid with zero mid games. Support queues faster; that is a feature if you are learning.",
        },
        {
          heading: "How long until I am 'good'?",
          body: "You will lose a lot. The goal after a month is: pull, ward, TP, take a tower after a kill, and not high-ground without a wave. MMR can wait.",
        },
      ],
    },
  ],
};
