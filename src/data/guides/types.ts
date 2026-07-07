export type QaImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GuideSection = {
  id?: string;
  heading: string;
  body: string;
  image?: QaImage;
};

export type GuideSource = {
  name: string;
  url: string;
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: GuideSection[];
  /** Optional hero image for the guide header. */
  heroImage?: QaImage;
  /** Extra search terms for page metadata — beyond default site keywords. */
  seoKeywords?: string[];
  /** External references used to write this guide — no unsourced claims. */
  sources?: GuideSource[];
};

export function wordCount(guide: Guide): number {
  return guide.content.reduce(
    (sum, s) => sum + s.body.split(/\s+/).filter(Boolean).length,
    0
  );
}
