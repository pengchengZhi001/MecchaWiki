import type { SteamWikiGame, WikiGuide } from "./types";
import { steamWikiGames } from "./games";
import { getFullWiki } from "./full";

function readTimeFromSections(sections: { body: string }[]): string {
  const words = sections.reduce(
    (sum, s) => sum + s.body.split(/\s+/).filter(Boolean).length,
    0
  );
  const minutes = Math.max(4, Math.min(12, Math.round(words / 180)));
  return `${minutes} min`;
}

function beginnerGuide(game: SteamWikiGame): WikiGuide {
  const content = [
    {
      heading: `What ${game.shortName} actually is`,
      body: `${game.pitch} The loop you will repeat: ${game.loop}`,
    },
    {
      heading: "Your first session",
      body: game.firstMoves.join(" "),
    },
    {
      heading: "Mistakes that end runs",
      body: game.mistakes.join(" "),
    },
    {
      heading: "What 'good' looks like after a week",
      body: `You should be able to explain ${game.name}'s core loop in one sentence, recover from a bad session without rage-reinstalling, and know which mode or map is for learning versus for ego. If you are still lost, re-read the first-session steps instead of hopping to a random viral build.`,
    },
  ];
  return {
    slug: "beginner-guide",
    title: `${game.shortName} Beginner Guide`,
    category: "Getting Started",
    readTime: readTimeFromSections(content),
    excerpt: `A first-week plan for ${game.name}: how the loop works, what to do in session one, and the mistakes that waste the most time.`,
    seoKeywords: ["beginner guide", "how to start", "first hour", game.name],
    content,
  };
}

function tipsGuide(game: SteamWikiGame): WikiGuide {
  const content = game.mistakes.map((mistake, i) => ({
    heading: `Habit ${i + 1}: stop paying this tax`,
    body: `${mistake} Flip it: ${game.firstMoves[i] ?? game.firstMoves[0]}`,
  }));
  content.push({
    heading: "Keep a tiny notes file",
    body: `Write down one map, one loadout, or one setting that worked. ${game.shortName} players who improve fastest are not the ones with the most tabs open — they are the ones who stop repeating the same wipe.`,
  });
  return {
    slug: "tips-and-tricks",
    title: `${game.shortName} Tips and Tricks`,
    category: "Tips",
    readTime: readTimeFromSections(content),
    excerpt: `Practical ${game.name} habits: the taxes most new players keep paying, and what to do instead.`,
    seoKeywords: ["tips", "tricks", "guide", game.name],
    content,
  };
}

function settingsGuide(game: SteamWikiGame): WikiGuide {
  const content = [
    {
      heading: "Start with stability, not max settings",
      body: `A hitch in ${game.name} is a lost fight, a missed click, or a crash into a wall. Cap FPS to a number you can hold, turn off extra overlays, and use a wired connection for anything competitive.`,
    },
    ...game.settingsNotes.map((note, i) => ({
      heading: `Setup note ${i + 1}`,
      body: note,
    })),
    {
      heading: "Accessibility",
      body: `If motion, color, or audio mix is fighting you, use the in-game accessibility options first. ${game.shortName} is more fun when you can actually parse the screen.`,
    },
  ];
  return {
    slug: "settings-and-performance",
    title: `${game.shortName} Settings and Performance`,
    category: "PC Setup",
    readTime: readTimeFromSections(content),
    excerpt: `Settings that matter for ${game.name}: stability, audio, and the options that actually change how you play.`,
    seoKeywords: ["settings", "performance", "FPS", game.name],
    content,
  };
}

function extraGuide(game: SteamWikiGame): WikiGuide {
  const content = game.extra.sections;
  return {
    slug: game.extra.slug,
    title: game.extra.title,
    category: game.extra.category,
    readTime: readTimeFromSections(content),
    excerpt: game.extra.excerpt,
    seoKeywords: [game.extra.slug.replace(/-/g, " "), game.genreLabel, game.name],
    content,
  };
}

function faqGuide(game: SteamWikiGame): WikiGuide {
  const content = game.faq.map((item) => ({
    heading: item.q,
    body: item.a,
  }));
  return {
    slug: "faq",
    title: `${game.shortName} FAQ`,
    category: "FAQ",
    readTime: readTimeFromSections(content),
    excerpt: `Short answers to the questions people actually search before they play ${game.name}.`,
    seoKeywords: ["FAQ", "help", game.name],
    content,
  };
}

export function getGuidesForGame(game: SteamWikiGame): WikiGuide[] {
  const full = getFullWiki(game.slug);
  if (full) return full.guides;
  return [
    beginnerGuide(game),
    tipsGuide(game),
    extraGuide(game),
    settingsGuide(game),
    faqGuide(game),
  ];
}

export function getGuideForGame(
  slug: string,
  guideSlug: string
): { game: SteamWikiGame; guide: WikiGuide } | undefined {
  const game = steamWikiGames.find((g) => g.slug === slug);
  if (!game) return undefined;
  const guide = getGuidesForGame(game).find((g) => g.slug === guideSlug);
  if (!guide) return undefined;
  return { game, guide };
}
