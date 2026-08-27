export type WikiGenre =
  | "tactical-fps"
  | "moba"
  | "survival"
  | "hero-shooter"
  | "battle-royale"
  | "extraction"
  | "sports"
  | "manager"
  | "rpg"
  | "roguelike"
  | "horror"
  | "sandbox"
  | "mmo"
  | "strategy"
  | "co-op"
  | "sim"
  | "platformer"
  | "social";

export type SteamWikiGame = {
  rank: number;
  slug: string;
  name: string;
  shortName: string;
  steamAppId: number;
  developer: string;
  publisher: string;
  genre: WikiGenre;
  genreLabel: string;
  freeToPlay: boolean;
  tagline: string;
  pitch: string;
  loop: string;
  firstMoves: string[];
  mistakes: string[];
  settingsNotes: string[];
  extra: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    sections: { heading: string; body: string }[];
  };
  faq: { q: string; a: string }[];
};

export type WikiGuide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  seoKeywords: string[];
  content: { heading: string; body: string }[];
};
