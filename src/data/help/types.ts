export type QaImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type QaItem = {
  id: string;
  question: string;
  /** Plain-text paragraphs for rendering and FAQ schema. */
  answer: string[];
  tags?: string[];
  image?: QaImage;
  relatedLink?: { href: string; label: string };
};

export type HelpTopic = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** Optional hero image for the topic page header. */
  heroImage?: QaImage;
  items: QaItem[];
};

export function helpTopicQuestionCount(topic: HelpTopic): number {
  return topic.items.length;
}
