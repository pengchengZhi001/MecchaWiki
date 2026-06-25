import type { HelpTopic } from "./help/types";
import { gettingStartedTopic } from "./help/getting-started";
import { multiplayerTopic } from "./help/multiplayer";
import { controlsTopic } from "./help/controls";
import { paintingTopic } from "./help/painting";
import { troubleshootingTopic } from "./help/troubleshooting";
import { seekerFaqTopic } from "./help/seeker-faq";
import { hiderFaqTopic } from "./help/hider-faq";
import { iconicMomentsTopic } from "./help/iconic-moments";

export type { HelpTopic, QaItem, QaImage } from "./help/types";

export const helpTopics: HelpTopic[] = [
  gettingStartedTopic,
  multiplayerTopic,
  controlsTopic,
  paintingTopic,
  troubleshootingTopic,
  hiderFaqTopic,
  seekerFaqTopic,
  iconicMomentsTopic,
];

export function getHelpTopicBySlug(slug: string): HelpTopic | undefined {
  return helpTopics.find((t) => t.slug === slug);
}

export function getAllHelpQuestions(): { topic: HelpTopic; item: HelpTopic["items"][number] }[] {
  return helpTopics.flatMap((topic) =>
    topic.items.map((item) => ({ topic, item }))
  );
}
