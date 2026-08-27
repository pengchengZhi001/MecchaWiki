import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 3405690;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const eaFc26Wiki: FullWiki = {
  slug: "ea-fc-26",
  hubs: { maps: "Modes", roles: "Jobs", strats: "Setups" },
  copy: {
    home: {
      strats: "One formation, jockey defending, and UT chemistry — not a 5-star skill montage.",
      roles: "Defend the box first. Timed finishing last.",
      maps: "Kick Off and Career before you rage-queue Champs.",
      guides: "Beginner path, defending, possession, tactics, Ultimate Team, and camera.",
    },
    pages: {
      maps: "Same physics, different patience. Learn Kick Off before Weekend League is a personality.",
      roles: "What the right stick is doing: jockey, recycle, overlap, finish, press.",
      strats: "Shape, chemistry, substitutions, and how not to bankrupt the club in week one.",
    },
  },
  maps: [
    {
      slug: "kick-off",
      name: "Kick Off",
      difficulty: "Easy",
      tagline: "The classroom: tackling, jockeying, and player-switch delay without a Champs timer.",
      overview:
        "Kick Off is where you should actually learn FC 26. Same physics as Ultimate Team, zero pack anxiety. Play both sides of a real club, feel the tackle window, and stop holding sprint on every touch. If defending feels 'scripted,' you are probably lunging. Jockey, contain, and tackle when the ball is exposed. Do this until one formation's defensive line is automatic — then Career or Rivals.",
      stats: [
        { label: "Play first", value: "Yes — before Rivals and Champs" },
        { label: "What you learn", value: "Jockey, switch delay, passing lanes" },
        { label: "Skip when", value: "You already have a formation you can defend in" },
      ],
      poi: [
        { name: "Your box", note: "Do not drag CBs out for a 1-bar tackle. Jockey the passing lane." },
        { name: "Halfway line", note: "Constant press from here with a high line is how you concede counters." },
        { name: "Wide channels", note: "Tired fullbacks are open wings. Sprint is a stamina tax." },
        { name: "Keeper", note: "Do not switch to the keeper for no reason. Claim crosses on purpose or leave it." },
        { name: "Camera", note: "Tele broadcast you can see the back line with, not a cinematic zoom." },
      ],
      notes: [
        "Close control and passing lanes beat 90-pace into a standing tackle.",
        "Pick one formation and learn when to drop the line. Tactics you never switch in-game are menu decoration.",
        "A wired controller matters more than a new camera pack. Bluetooth delay is real in this series.",
      ],
      image: header("EA FC 26 Kick Off match"),
      seoKeywords: ["FC 26 Kick Off", "EA FC 26 beginner", "how to defend FC 26"],
    },
    {
      slug: "career",
      name: "Career",
      difficulty: "Easy",
      tagline: "Clubs, transfers, and time — the mode that teaches patience Ultimate Team skips.",
      overview:
        "Career (manager or player) is the long game: tactics, rotation, and not playing cup-tied legs in a league match because you ignored the calendar. Same pitch as UT, different economy. Build a squad that fits one shape. Simulate cups you do not care about if you are learning. Transfers are not a reason to smash the tactic every January. If you only wanted cards, this is still the best place to learn a formation without a 12-year-old's custom tactics on the other side.",
      stats: [
        { label: "Best for", value: "Learning a club identity and a formation" },
        { label: "Trap", value: "Playing every fixture until stamina is a meme" },
        { label: "Vs UT", value: "No chemistry islands — just bad squad planning" },
      ],
      poi: [
        { name: "Tactics screen", note: "One build-up plan, one defensive plan. Roles (FC IQ) should match the players you bought." },
        { name: "Transfer window", note: "Buy the position you actually use. A third striker you never sub on is a spreadsheet." },
        { name: "Training / development", note: "Youth and minutes. Do not play a 16-year-old 90 minutes three times a week for fun." },
        { name: "Calendar", note: "Rotate. Tired fullbacks concede. This is the stamina lesson UT also needs." },
        { name: "Board objectives", note: "Play the save you signed up for. Ignore them only if you enjoy being sacked." },
      ],
      notes: [
        "Start here or Kick Off before Weekend League. You need to feel tackling without a rank attached.",
        "Player Career is fine for learning movement; Manager Career is better for tactics.",
        "Difficulty sliders exist. World Class with broken defending is a you problem, not a slider problem, until you can jockey.",
      ],
      image: header("EA FC 26 Career Mode tactics"),
      seoKeywords: ["FC 26 Career Mode", "EA FC 26 manager", "FC 26 transfers"],
    },
    {
      slug: "ultimate-team",
      name: "Ultimate Team",
      difficulty: "Medium",
      tagline: "Cards, chemistry, and modes — a playable 83 with links beats a 90-rated pile of islands.",
      overview:
        "Ultimate Team is the live service: Rivals, Champs, Squad Battles, evolutions, and the store. The pitch is still FC 26. Chemistry and PlayStyles matter, but they need a shape you can defend. Do not chase every promo in week one. Build a squad that links, pick one formation, and play Rivals until you can finish 20 games without 40-yard driven shots. Market flipping is a second hobby. FC Points are optional; they only speed cosmetics and pack gambling.",
      stats: [
        { label: "First squad", value: "Chemistry and a formation, not the highest OVR on Futbin" },
        { label: "Modes", value: "Rivals for reps, SB for PvE, Champs when you are stable" },
        { label: "Money", value: "Not required to play the modes" },
      ],
      poi: [
        { name: "Chemistry", note: "Links and manager league. Islands of 90s will feel worse than an 83 that passes." },
        { name: "PlayStyles", note: "They are real. They do not replace jockeying." },
        { name: "Evolutions / objectives", note: "Do them if they fit the squad. Do not rebuild every Tuesday." },
        { name: "Store", note: "Packs are gambling. Points speed that. They do not teach defending." },
        { name: "Tactics in UT", note: "Set them. Custom tactics you never change at 0-2 are still decoration." },
      ],
      notes: [
        "If you are new, play the game. Trading is not the tutorial.",
        "A playable squad with chemistry before chasing every promo card.",
        "Rage-selling the club after one bad bounce does not fix second-man press.",
      ],
      image: header("EA FC 26 Ultimate Team squad"),
      seoKeywords: ["FC 26 Ultimate Team", "FC 26 chemistry", "EA FC 26 UT"],
    },
    {
      slug: "rivals",
      name: "Rivals",
      difficulty: "Medium",
      tagline: "The online practice loop: rewards, checkpoints, and opponents who also skip jockeying.",
      overview:
        "Division Rivals is where most UT players should live. You get games, checkpoints, and rewards without the Champs weekend hostage situation. Play to learn one formation against humans. Stop at the checkpoint if you are tilting into through-ball spam. The other person is not 'scripted' every time you drag a CB out of the line. Treat Rivals as training with coins, not as proof you are ready for 20 Champs games.",
      stats: [
        { label: "Job", value: "Reps and rewards" },
        { label: "Stop", value: "When you start shooting from 40 yards out of spite" },
        { label: "Vs Champs", value: "Lower variance weekend — still online defending" },
      ],
      poi: [
        { name: "Checkpoints", note: "They exist so you can log off. Use them." },
        { name: "Disconnects / delay", note: "Wired connection. Wi-Fi plus Bluetooth pad is a skill issue you bought." },
        { name: "Opponent tactics", note: "If they park the bus, recycle. Forcing the same through ball is how you lose to a 5-back." },
        { name: "Pause", note: "Subs and tactic switch. Never switching is how legs die in the 70th." },
        { name: "Rewards", note: "Play the weekly window. Grinding 40 extra games of tilt is not extra skill." },
      ],
      notes: [
        "Rivals is practice. Champs is an exam. Do not mix them on a night you already lost four in a row.",
        "Mute messages if you need to. The pitch does not care about their club name.",
        "If defending feels bad, you are lunging. Jockey in Rivals until it sticks.",
      ],
      image: header("EA FC 26 Division Rivals"),
      seoKeywords: ["FC 26 Rivals", "Division Rivals", "FC 26 online"],
    },
    {
      slug: "champs",
      name: "Champs",
      difficulty: "Hard",
      tagline: "Weekend League: 20 games, your tilt, and why you should not rage-queue.",
      overview:
        "Champions / Weekend League is a block of games with better rewards and worse decision-making. Only queue when you can play the set without turning every match into a 40-yard shooter. Same defending as Kick Off. Same stamina. The difference is you will remember the bounce. Script narrative does not fix your second-man press. Stop at a rank you can live with. Ten good games beat twenty spite games.",
      stats: [
        { label: "When", value: "After Rivals feels boring, not after two Kick Off matches" },
        { label: "Hygiene", value: "Do not rage-queue. Walk away at 3 losses in a row" },
        { label: "Win condition", value: "Shape and composure, not a new red pick" },
      ],
      poi: [
        { name: "Quali / entry", note: "If the path exists on your patch, treat it as Rivals with a ticket. Still jockey." },
        { name: "Game 1–5", note: "Warm. If you are already screaming, play SB instead." },
        { name: "The bounce", note: "Quitting after one deflection is how you play worse game 8." },
        { name: "Subs window", note: "70th minute tired fullbacks are Champs concessions. Pause." },
        { name: "Last games", note: "Protect a rank. Ego for 11 wins when you have 9 is how you finish on 7." },
      ],
      notes: [
        "Champs only when you can play 20 games without tilting into 40-yard shots.",
        "Your UT squad will not save a high line you cannot defend.",
        "Record one loss: were you lunging, sprinting, or never switching? One habit a weekend.",
      ],
      image: header("EA FC 26 Weekend League Champs"),
      seoKeywords: ["FC 26 Champs", "Weekend League", "FC 26 FUT Champs"],
    },
    {
      slug: "squad-battles",
      name: "Squad Battles",
      difficulty: "Easy",
      tagline: "PvE Ultimate Team: objectives, fodder, and a place to test tactics without a message after.",
      overview:
        "Squad Battles is AI opponents on a timer. Use it for objectives, evolution matches, and trying a tactic you would not risk in Rivals. Legendary AI still punishes lunges and auto-pilot through balls. It will not teach you delay or human player-switch abuse as well as Rivals. If you only play SB, you will still get cooked online — but you will have coins and a formation you have at least seen.",
      stats: [
        { label: "Best for", value: "Objectives, evolutions, low-stress reps" },
        { label: "Not a substitute for", value: "Online defending vs humans" },
        { label: "Difficulty", value: "Raise it until you have to jockey, then stop ego-ing Legendary at 2am" },
      ],
      poi: [
        { name: "Featured squads", note: "Often the weekly objective. Read the requirement before you smash World Class 5-0 and miss the star." },
        { name: "Tactics test", note: "Try a new defensive approach here. Confirm it in Rivals after." },
        { name: "Bench", note: "Fitness and chem on SB still matter if you are doing a gauntlet of games." },
        { name: "Time", note: "A mode for 20 minutes. Not a reason to skip learning Kick Off." },
        { name: "Rewards", note: "Fodder is fodder. Do not build your identity around SB Elite if you want Champs." },
      ],
      notes: [
        "SB if you want PvE. Rivals if you want to get better at humans.",
        "AI keepers and tackling windows still reward composure.",
        "Use it to complete the unfun objective so Rivals can be actual practice.",
      ],
      image: header("EA FC 26 Squad Battles"),
      seoKeywords: ["FC 26 Squad Battles", "SB EA FC", "FC 26 PvE"],
    },
    {
      slug: "clubs",
      name: "Clubs",
      difficulty: "Medium",
      tagline: "Pro Clubs: one position, a drop-in circus, or a three-stack that actually tracks back.",
      overview:
        "Clubs is 11v11 (or drop-in) with created players. You play a position, not the whole team. That is the lesson: stay in your lane, track the runner, and do not hunt the ball as a CAM while your fullback is 3v2. A club with mics and a simple shape beats a drop-in of six strikers. Any-ball still exists. Your skill moves are not a formation.",
      stats: [
        { label: "Need", value: "A position and the discipline to stay there" },
        { label: "Drop-in", value: "Chaos — fine for fun, bad for learning shape" },
        { label: "Best", value: "A small club that defends" },
      ],
      poi: [
        { name: "Your role", note: "CB jockeys. Fullback does not become a winger for 90 minutes. ST makes runs, not 40-yard shots only." },
        { name: "Anyball / pass", note: "Call it. Silent through balls into two teammates is Clubs in one gif." },
        { name: "Drop-in matchmaking", note: "Expect no defense. Play Kick Off if you wanted a back line." },
        { name: "Virtual pro", note: "Build attributes for the job. A 99 finishing CB is a meme until you get cooked on the break." },
        { name: "Set pieces", note: "Mark. One person on the keeper. Do not all rush the ball." },
      ],
      notes: [
        "Learn defending in Kick Off so you are not the drop-in who never jockeys.",
        "A club that presses together is a tactic. Six people chasing is not.",
        "Microphone helps. Ping if you must. Running out of position in silence is the mode.",
      ],
      image: header("EA FC 26 Pro Clubs"),
      seoKeywords: ["FC 26 Clubs", "Pro Clubs", "EA FC 26 drop in"],
    },
    {
      slug: "rush",
      name: "Rush",
      difficulty: "Easy",
      tagline: "Small-sided chaos: faster games, still a back line, still not a reason to skip jockeying.",
      overview:
        "Rush is the 5v5 (or small-sided) playlist. Games are shorter, space is weirder, and people treat it like an arcade. Defending still matters. A high line in Rush without cover is the same counter you concede in 11s, just sooner. Use it to warm up or complete objectives. Do not let it replace learning a full-pitch formation — then wonder why Champs feels slow and cruel.",
      stats: [
        { label: "Length", value: "Short — good warm-up" },
        { label: "Transfer", value: "Finishing and 1v1s more than 11s shape" },
        { label: "Trap", value: "Only playing Rush, then queuing Champs" },
      ],
      poi: [
        { name: "Mini pitch", note: "Fewer hiding spots. Jockey still beats a lunge." },
        { name: "GK", note: "Even more tempting to switch. Still usually wrong." },
        { name: "Objectives", note: "EA will point you here. Fine. Then go back to 11s." },
        { name: "Teammates", note: "Fill a role. Four attackers is a Rush classic concession." },
        { name: "Stamina", note: "Small pitch, constant sprint. Analog sprint or you are a statue at 8 minutes." },
      ],
      notes: [
        "Fun mode. Not the only teacher.",
        "If you only have 15 minutes, Rush beats forcing a Champs game you will rage-quit.",
        "Skill moves work. Passing still wins.",
      ],
      image: header("EA FC 26 Rush 5v5"),
      seoKeywords: ["FC 26 Rush", "EA FC Rush", "FC 26 5v5"],
    },
  ],
  roles: [
    {
      slug: "jockey-defender",
      name: "Jockey Defender",
      role: "Contain the box",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Input", value: "Jockey / contain, then tackle when the ball is exposed" },
        { label: "Fail", value: "Lunging CBs and a 1-bar tackle in the D" },
      ],
      kit: ["Jockey button you can hold", "Second-man press as a spice, not a lifestyle", "A back line you can still see on camera"],
      excerpt:
        "The best first job. You keep the shape, you do not dive in, and you stop blaming the script for a tackle you lunged.",
      strengths: [
        "Wins more games than a 5-star skill move",
        "Transfers to every mode — Kick Off to Champs",
        "Teaches player-switch delay instead of panic switching to the keeper",
      ],
      weaknesses: [
        "Boring if you only wanted to film rabonas",
        "Overusing second-man press pulls the line to swiss cheese",
      ],
      starterTips: [
        "Jockey, contain, tackle when the ball is actually exposed. Lunging is why defending 'feels bad'.",
        "Do not drag a CB out to the wing for a hopeless slide.",
        "Let the keeper AI deal with the first ball unless you are claiming a cross on purpose.",
        "High line plus constant press is how you concede counters. Learn to drop the line.",
      ],
      image: hero("EA FC 26 jockey defending in the box"),
      seoKeywords: ["FC 26 defending", "how to jockey FC 26", "FC 26 tackle"],
    },
    {
      slug: "midfield-recycler",
      name: "Recycler",
      role: "Possession and patience",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Job", value: "Pass to the free man, not the highlight" },
        { label: "Fail", value: "Forced through balls into a 5-back" },
      ],
      kit: ["A formation with a six or an eight", "Close control instead of sprint on every touch", "A plan when they park the bus"],
      excerpt:
        "You keep the ball until a lane exists. Recycle possession instead of forcing through balls. 90-pace into a standing tackle is not attacking.",
      strengths: [
        "Beats low blocks that skill-move merchants bounce off",
        "Lowers turnovers that become counters",
        "Works even on an 83-chem squad",
      ],
      weaknesses: [
        "Slow if you refuse to ever switch play",
        "Passing for the sake of a 90% stat while never entering the box",
      ],
      starterTips: [
        "Holding sprint on every touch is the problem. Close control and passing lanes beat pace.",
        "If the through ball is not on, go back to the CB. That is not cowardice.",
        "Switch play when the weak side is empty. Five passes to the same winger is a tackle waiting.",
        "Timed finishing only if you can hit the prompt. Missed timings are open play for them.",
      ],
      image: hero("EA FC 26 midfield possession"),
      seoKeywords: ["FC 26 possession", "FC 26 passing", "how to attack FC 26"],
    },
    {
      slug: "fullback-wide",
      name: "Wide Overlap",
      role: "Fullbacks and wings",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Attack", value: "Overlap, cut back, do not cross every ball to the first man" },
        { label: "Defense", value: "Track back before legs die" },
      ],
      kit: ["Stamina on fullbacks", "A winger who can wait", "Subs at 70 if they have sprinted the whole half"],
      excerpt:
        "You use the wide channel without turning every attack into a hopeful cross. Tired fullbacks are open wings — yours and theirs.",
      strengths: [
        "Stretches a low block the recycler already created",
        "Cut-backs beat driven crosses into the keeper",
        "Teaches stamina, which Champs punishes",
      ],
      weaknesses: [
        "Overlapping as a CB because you panicked the stick",
        "Never tracking back after one good run",
      ],
      starterTips: [
        "Analog sprint. Fullbacks on always-sprint are dead at 60 minutes.",
        "Ignore stamina and you concede the counter you just created.",
        "Substitute before legs die. Pause is a tactic.",
        "A 5-star skiller on the wing still needs a cut-back sometimes.",
      ],
      image: hero("EA FC 26 wing overlap and cut-back"),
      seoKeywords: ["FC 26 wingers", "FC 26 fullbacks", "FC 26 cut back"],
    },
    {
      slug: "box-finisher",
      name: "Box Finisher",
      role: "Shots that are actually on",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Shot", value: "Box, near post / far post, not 40 yards" },
        { label: "Move", value: "Striker runs you triggered, not standing still" },
      ],
      kit: ["A striker with a real finishing PlayStyle if you are in UT", "Timed finishing off until you are consistent", "Patience from the recycler"],
      excerpt:
        "You take the shot the recycler built. Finesse from 35 yards every attack is how you go 22 shots 1 on target.",
      strengths: [
        "Converts possession into goals instead of highlight reels",
        "Teaches when to shoot first time vs take a touch",
        "Works in Rush and 11s",
      ],
      weaknesses: [
        "Rage 40-yard shots after a bounce",
        "Never making a run because you are stuck on the analog stick as CAM",
      ],
      starterTips: [
        "Turn on timed finishing only if you can hit the prompt. Otherwise it is a nerf you selected.",
        "Power shots have a place. Every shot as a power shot does not.",
        "If you are 0-2, a calm box finish beats a skill-move spiral.",
        "Player lock / runs if you use them — dummy runs still exist.",
      ],
      image: hero("EA FC 26 finishing in the box"),
      seoKeywords: ["FC 26 finishing", "timed finishing", "FC 26 shooting"],
    },
    {
      slug: "presser",
      name: "Presser",
      role: "High press and traps",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Need", value: "A midfield that can cover the space you leave" },
        { label: "Fail", value: "Constant press, high line, no legs, 4-0 at half" },
      ],
      kit: ["A press trigger you understand", "CBs who can run", "The humility to turn it off at 60 minutes"],
      excerpt:
        "You win the ball high — on purpose, for a stretch, with a plan to drop. Constant press with a high line is how you concede counters.",
      strengths: [
        "Punishes slow builders and bad first touches",
        "Creates the chances the finisher wants",
        "Looks like 'script' to people who only lunge",
      ],
      weaknesses: [
        "Stamina death and open wings",
        "Pressing as six individuals, not a trap",
      ],
      starterTips: [
        "Learn jockey defending first. A presser who cannot defend a counter is a 5-4 thriller you lose.",
        "Use team press in bursts, not for 90 minutes.",
        "If they beat the first press, drop the line. Ego offside traps into a through ball is Champs.",
        "Career and Kick Off are where you test this, not game 12 of Champs.",
      ],
      image: hero("EA FC 26 high press"),
      seoKeywords: ["FC 26 high press", "FC 26 tactics", "team press FC 26"],
    },
  ],
  strats: [
    {
      slug: "one-formation",
      name: "One Formation",
      mapSlug: "kick-off",
      mapName: "Kick Off",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Players who change shape every goal and never learn a line",
      duration: "A week of games",
      excerpt:
        "Pick one formation and learn when to drop the defensive line. Custom tactics you never switch in-game are menu decoration.",
      steps: [
        "Choose a simple shape (4-2-3-1, 4-3-3, 4-4-2 — one you can name the roles in).",
        "Set a build-up plan and a defensive plan. Know how to drop the line on the D-pad.",
        "Play Kick Off or Career until switching and jockeying in that shape is boring.",
        "Take it to Rivals. Do not invent a 5-back because you conceded once.",
        "Only then add a second tactic for when you are chasing or protecting a lead.",
      ],
      tips: [
        "FC IQ / player roles should match the humans in the shirt. A false 9 who cannot pass is a striker you mislabeled.",
        "Constant press with a high line is not a formation. It is a concession generator.",
        "UT: chemistry first, then this setup. A 90-rated island cannot hold a 4-3-3 you do not understand.",
      ],
      image: header("EA FC 26 formation and tactics"),
      seoKeywords: ["FC 26 formations", "FC 26 tactics", "best formation FC 26"],
    },
    {
      slug: "jockey-contain",
      name: "Jockey and Contain",
      mapSlug: "kick-off",
      mapName: "Kick Off",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Anyone who says defending feels scripted",
      duration: "Every defensive transition",
      excerpt:
        "Jockey, contain, tackle when the ball is exposed. Lunging is the bug; the patch is your right stick.",
      steps: [
        "On the turn, switch to the nearest logical defender — not the keeper, not the striker.",
        "Hold jockey. Cut the passing lane. Do not sprint-jockey into a skill move unless you mean it.",
        "Second-man press to shepherd, not to send both CBs to the corner flag.",
        "Tackle when the ball is free. A 1-bar lunge in the D is a penalty practice tool.",
        "If they beat you, recover the line. Chasing as a CB to the halfway line is the counter they wanted.",
      ],
      tips: [
        "Why defending feels bad: you are probably lunging.",
        "Let the keeper AI deal with the first ball unless you are claiming a cross on purpose.",
        "Practice in Kick Off until Rivals does not feel like a different game.",
      ],
      image: header("EA FC 26 contain defending"),
      seoKeywords: ["FC 26 jockey", "how to defend FC 26", "FC 26 second man press"],
    },
    {
      slug: "recycle-then-box",
      name: "Recycle Then Box",
      mapSlug: "rivals",
      mapName: "Rivals",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Through-ball merchants vs a parked bus",
      duration: "Until a lane opens",
      excerpt:
        "Keep the ball, switch play, enter the box, then shoot. Forced through balls into a 5-back are their tactic, not yours.",
      steps: [
        "First pass is safe. If the killer ball is not on, recycle to the six or the CBs.",
        "Switch the weak side once. Do not pass into the same crowded winger five times.",
        "Fullback overlap or a cut-back — not a first-man cross every time.",
        "Shot from a lane in the box. 40-yard driven shots are tilt, not a plan.",
        "If you lose it, you are already in a shape to jockey. That is the point of recycling.",
      ],
      tips: [
        "Holding sprint on every touch is how 90-pace dies to a 1-bar tackle.",
        "Timed finishing off until the prompt is consistent.",
        "Works in Career against low blocks the same way.",
      ],
      image: header("EA FC 26 recycling possession"),
      seoKeywords: ["FC 26 attacking", "FC 26 possession", "how to break a low block"],
    },
    {
      slug: "chemistry-squad",
      name: "Chemistry First Squad",
      mapSlug: "ultimate-team",
      mapName: "Ultimate Team",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Week-one promo chasers with 50 chemistry",
      duration: "Until the squad can actually pass",
      excerpt:
        "An 83-rated squad that links will outplay a 90-rated pile of islands. PlayStyles need on-pitch chemistry.",
      steps: [
        "Pick the formation you already learned in Kick Off.",
        "Fill it with players who link (league, nation, club) and a manager that helps.",
        "PlayStyles are a bonus on a connected squad, not a reason to start an island.",
        "Rivals until the team feels like a team. Then spend coins on the position you actually feel.",
        "Ignore the twelfth promo card that breaks three links for +1 OVR.",
      ],
      tips: [
        "If you are new, play the game. Market flipping is a second hobby.",
        "FC Points are not required. They speed packs, not defending.",
        "Evolutions that fit the shape are better than a random 91 you cannot chemistry.",
      ],
      image: header("EA FC 26 Ultimate Team chemistry"),
      seoKeywords: ["FC 26 chemistry", "FC 26 starter squad", "Ultimate Team chemistry"],
    },
    {
      slug: "stamina-subs",
      name: "Stamina and Subs",
      mapSlug: "champs",
      mapName: "Champs",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "People who ignore tired fullbacks and concede at 78 minutes",
      duration: "Minute 60–90",
      excerpt:
        "Substitute before legs die. Tired fullbacks are open wings. Pause is a tactic, not a shame.",
      steps: [
        "Glance at stamina at 55–60. Wide players and pressers go first.",
        "Pause, sub, switch to the defensive plan if you are protecting a lead.",
        "Do not bring on three attackers and a high line because you are 1-0 down at 80 — unless you can still defend the counter.",
        "Keep one sub for a CB or a six if someone is on a yellow and empty legs.",
        "In Career, rotate the calendar the same way. The lesson is identical.",
      ],
      tips: [
        "Analog sprint exists so you have legs at 80.",
        "Constant press for 90 minutes is a stamina suicide note.",
        "Champs losses at 85 are often fitness, not 'EA scripts the 85th'.",
      ],
      image: header("EA FC 26 substitutions and stamina"),
      seoKeywords: ["FC 26 substitutions", "FC 26 stamina", "when to sub FC 26"],
    },
    {
      slug: "champs-hygiene",
      name: "Champs Hygiene",
      mapSlug: "champs",
      mapName: "Champs",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Rage-queue artists who finish on 6 after being on 9",
      duration: "A weekend block",
      excerpt:
        "Do not rage-queue. Stop at a rank you can live with. Script narrative does not fix your second-man press.",
      steps: [
        "Only start the run when you can play a block. Two games before work is how you donate a weekend.",
        "After three ugly losses, stop. SB or Kick Off, not 'one more'.",
        "Protect a rank. Ego for two more wins is how 9 becomes 7.",
        "Review one goal you conceded: lunge, switch to keeper, or tired FB. One habit.",
        "Mute the opponent. The pitch does not need their club name.",
      ],
      tips: [
        "Champs only when you can play 20 games without tilting into 40-yard shots.",
        "Quitting after one bad bounce trains you to play worse.",
        "Rivals checkpoints exist so you can practice the same composure without a weekend timer.",
      ],
      image: header("EA FC 26 Weekend League hygiene"),
      seoKeywords: ["FC 26 Weekend League", "FC 26 tilt", "FUT Champs tips"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "FC 26 Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Kick Off first, one formation, and why Champs can wait until you can jockey.",
      seoKeywords: ["FC 26 beginner", "how to play FC 26", "EA FC 26 first hours"],
      heroImage: hero("EA FC 26 beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "FC 26 is the current EA football sim. Clubs, career, and Ultimate Team share the same physics, but they reward different patience. Most losses are defensive shape, not missing a 5-star skill move. You win by defending the box, keeping the ball, and substituting before legs die — not by rage-queueing Champs.",
        },
        {
          heading: "The first week",
          body: "Start in Kick Off or Career before Weekend League. You need to feel tackling, jockeying, and player-switch delay. Pick one formation and learn when to drop the defensive line. Constant press with a high line is how you concede counters.",
        },
        {
          heading: "Settings that matter",
          body: "Wired controller. Tele camera you can track the back line with. Analog sprint. Timed finishing only if you can hit the prompt. Bluetooth delay is real in this series.",
        },
        {
          heading: "Ultimate Team later",
          body: "Build a playable squad with chemistry before chasing every promo card. Rivals for practice. Champs when you can play a block without 40-yard spite shots.",
        },
        {
          heading: "What good looks like after a week",
          body: "You jockey instead of lunge, you recycle instead of forcing through balls, you sub tired fullbacks, and you stop switching to the keeper for no reason. Then Rivals.",
        },
      ],
    },
    {
      slug: "defending",
      title: "FC 26 Defending",
      category: "Defense",
      readTime: "8 min",
      excerpt:
        "Jockey, contain, player switch, and why lunging is the whole problem.",
      seoKeywords: ["FC 26 defending", "how to defend FC 26", "FC 26 jockey"],
      heroImage: header("EA FC 26 defensive line"),
      content: [
        {
          heading: "Why it feels bad",
          body: "You are probably lunging. Jockey, contain, and tackle when the ball is actually exposed. A 1-bar tackle in the D is a penalty workshop.",
        },
        {
          heading: "Shape",
          body: "Learn when to drop the defensive line. Constant press with a high line is how you concede counters. Second-man press is a tool, not a lifestyle — it pulls players out of the lane you needed.",
        },
        {
          heading: "Switching",
          body: "Switch to the nearest logical defender. Switching to the goalkeeper for no reason is a classic. Let the keeper AI deal with the first ball unless you are claiming a cross on purpose.",
        },
        {
          heading: "Stamina",
          body: "Tired fullbacks are open wings. Analog sprint. Substitute before legs die. Champs 85th-minute goals are often fitness.",
        },
        {
          heading: "Practice",
          body: "Kick Off until Rivals does not feel like a different defend button. Script narrative does not fix your second-man press.",
        },
      ],
    },
    {
      slug: "attacking",
      title: "FC 26 Attacking and Possession",
      category: "Attack",
      readTime: "8 min",
      excerpt:
        "Close control, recycle, cut-backs, and shots that are on target on purpose.",
      seoKeywords: ["FC 26 attacking", "FC 26 passing", "FC 26 finishing"],
      heroImage: header("EA FC 26 attacking in the box"),
      content: [
        {
          heading: "Stop sprinting every touch",
          body: "Holding sprint on every touch is why 90-pace dies to a standing tackle. Close control and passing lanes are the skill.",
        },
        {
          heading: "Recycle",
          body: "If the through ball is not on, go back. Switch the weak side. Forcing the same pass into a 5-back is their win condition.",
        },
        {
          heading: "Wide play",
          body: "Overlap, cut back, do not first-man cross every attack. Wingers still need a striker making a run.",
        },
        {
          heading: "Finishing",
          body: "Box shots. Timed finishing only if you can hit the prompt. 40-yard driven shots after a bounce are tilt, not a tactic.",
        },
        {
          heading: "Skill moves",
          body: "They are optional. A 5-star move that loses the ball at the corner flag is not more 'real football' than a pass.",
        },
      ],
    },
    {
      slug: "tactics",
      title: "FC 26 Tactics and Formations",
      category: "Tactics",
      readTime: "8 min",
      excerpt:
        "One shape, roles that match the players, and a plan you can actually switch to at 0-2.",
      seoKeywords: ["FC 26 tactics", "FC 26 formations", "FC IQ"],
      heroImage: header("EA FC 26 tactics screen"),
      content: [
        {
          heading: "One formation first",
          body: "Pick one and learn the defensive line. Changing shape every goal means you never learn either.",
        },
        {
          heading: "Build-up and defense",
          body: "Set a build-up plan and a defensive plan. Custom tactics that you never switch in-game are just menu decoration. Know the D-pad change for dropping the line or a press burst.",
        },
        {
          heading: "Roles",
          body: "FC IQ / roles should match the player. A wing-back who cannot run is not a wing-back because the menu said so.",
        },
        {
          heading: "Chasing a game",
          body: "Have a second plan for 1-0 down. Sending everyone forward with a high line and empty legs is how 1-0 becomes 1-3.",
        },
        {
          heading: "UT vs Career",
          body: "Same tactics ideas. UT adds chemistry. Career adds rotation. Neither replaces jockeying.",
        },
      ],
    },
    {
      slug: "ultimate-team-basics",
      title: "FC 26 Ultimate Team Basics",
      category: "Ultimate Team",
      readTime: "8 min",
      excerpt:
        "Chemistry, modes, and how not to bankrupt the club in week one.",
      seoKeywords: ["FC 26 Ultimate Team", "FC 26 chemistry", "FUT 26 beginner"],
      heroImage: header("EA FC 26 Ultimate Team menu"),
      content: [
        {
          heading: "Chemistry first",
          body: "A 83-rated squad that actually links will outplay a 90-rated pile of islands. PlayStyles matter, but they need on-pitch chemistry.",
        },
        {
          heading: "Modes",
          body: "Rivals for practice and rewards, Squad Battles if you want PvE, Champs only when you can play 20 games without tilting into 40-yard shots.",
        },
        {
          heading: "Trading vs playing",
          body: "If you are new, play the game. Market flipping is a second hobby.",
        },
        {
          heading: "Tactics",
          body: "Set a build-up plan and a defensive plan. Bring the formation you learned in Kick Off. Do not invent a new shape because a YouTuber packed a card.",
        },
        {
          heading: "FC Points",
          body: "You can play the modes without them. Points only speed cosmetics and pack gambling. They do not teach defending.",
        },
      ],
    },
    {
      slug: "career-guide",
      title: "FC 26 Career Mode",
      category: "Career",
      readTime: "7 min",
      excerpt:
        "Calendar, transfers, and a tactic you do not smash every January.",
      seoKeywords: ["FC 26 Career Mode", "FC 26 manager career", "FC 26 transfers"],
      heroImage: header("EA FC 26 Career Mode"),
      content: [
        {
          heading: "Identity",
          body: "Pick a club and a shape. Buy players who fit. A third striker who never plays is not depth, it is a wage.",
        },
        {
          heading: "Calendar",
          body: "Rotate. Simulate what you do not care about if you are learning. Playing every fixture until stamina is a joke is how league form dies.",
        },
        {
          heading: "Transfers",
          body: "Fill the hole on the pitch, not the highest-rated name on a list. Youth is a project. Do not play them 90 minutes three times a week.",
        },
        {
          heading: "Tactics",
          body: "Same as Kick Off. This is the mode where you can actually live with one formation for a season.",
        },
        {
          heading: "Vs Ultimate Team",
          body: "Career if you want clubs and transfers. UT if you want competitive online and card collecting. Both still need jockeying.",
        },
      ],
    },
    {
      slug: "settings-and-camera",
      title: "FC 26 Settings and Camera",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Wired pad, tele camera, analog sprint, and input lag over pretty grass.",
      seoKeywords: ["FC 26 settings", "FC 26 camera", "FC 26 controller"],
      heroImage: header("EA FC 26 settings and camera"),
      content: [
        {
          heading: "Controller",
          body: "Use a wired controller. Bluetooth delay is real in this series. Analog sprint. Timed finishing only if you can hit the prompt.",
        },
        {
          heading: "Camera",
          body: "Set camera to a tele broadcast you can track the back line with, not a cinematic zoom. If you cannot see your fullbacks, you cannot defend.",
        },
        {
          heading: "Calibration",
          body: "Turn off motion blur, cap FPS if you see tearing, and keep input lag low over pretty grass. The simulation is the product, not the stadium pack.",
        },
        {
          heading: "Switching",
          body: "Right-stick switching vs player-switch — pick what you can repeat. Panic switching to the keeper is a setting you can also just stop doing.",
        },
        {
          heading: "Online",
          body: "Wired internet. Rivals and Champs on Wi-Fi plus Bluetooth is a handicap stack.",
        },
      ],
    },
    {
      slug: "faq",
      title: "FC 26 FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Steam, Career vs UT, defending, and FC Points.",
      seoKeywords: ["FC 26 FAQ", "is FC 26 on Steam", "FC 26 Ultimate Team"],
      content: [
        {
          heading: "Is FC 26 on Steam?",
          body: "Yes. It is a paid annual sports title with optional Ultimate Team purchases.",
        },
        {
          heading: "Career or Ultimate Team?",
          body: "Career if you want clubs and transfers. UT if you want competitive online and card collecting. Kick Off first either way.",
        },
        {
          heading: "Why does defending feel bad?",
          body: "You are probably lunging. Jockey, contain, and tackle when the ball is actually exposed.",
        },
        {
          heading: "Do I need FC Points?",
          body: "No. You can play the modes without them. Points only speed cosmetics and pack gambling.",
        },
        {
          heading: "When do I play Champs?",
          body: "When you can play a block without rage-queueing. Rivals is the practice. Script stories do not replace subs and jockeying.",
        },
      ],
    },
  ],
};
