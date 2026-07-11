export const siteConfig = {
  name: "Meccha Wiki",
  tagline: "The fastest way to find the best hiding spots in Meccha Chameleon",
  description:
    "Win more rounds with 50+ guide-sourced hiding spots, survival strategies, camouflage tips, and map-specific tactics for Meccha Chameleon. Recommended by experienced players.",
  url: "https://meccha.wiki",
  locale: "en-US",
  author: "Meccha Wiki",
  contactEmail: "contact@meccha.wiki",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hidden-spots", label: "Hidden Spots" },
  { href: "/workshop-maps", label: "Workshop Maps" },
  { href: "/maps", label: "Maps" },
  { href: "/guides", label: "Guides" },
  { href: "/help", label: "Help & FAQ" },
] as const;

export const spotCategories = [
  { id: "best", label: "Best Hiding Spots", emoji: "🏆" },
  { id: "funny", label: "Funniest Spots", emoji: "😂" },
  { id: "impossible", label: "Impossible Spots", emoji: "💀" },
  { id: "community", label: "Community Picks", emoji: "🔥" },
] as const;

export type SpotCategoryId = (typeof spotCategories)[number]["id"];

export const spotSortOptions = [
  { id: "top-rated", label: "Top Rated" },
  { id: "newest", label: "Newest" },
  { id: "featured", label: "Featured" },
  { id: "funny", label: "Most Funny" },
] as const;

export type SpotSortId = (typeof spotSortOptions)[number]["id"];

export const workshopCategories = [
  { id: "funny", label: "Top Funny Maps" },
  { id: "horror", label: "Top Horror Maps" },
  { id: "competitive", label: "Top Competitive Maps" },
  { id: "new", label: "New This Week" },
] as const;

export type WorkshopCategoryId = (typeof workshopCategories)[number]["id"];

export const SPOTS_PER_PAGE = 12;
