import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { helpTopics } from "@/data/help";
import { helpTopicQuestionCount } from "@/data/help/types";

export const metadata: Metadata = createMetadata({
  title: "Help & FAQ — Real Player Questions Answered",
  description:
    "MECCHA CHAMELEON help center: download, multiplayer rooms, controls, painting, seeker tips, hider evasion, and iconic viral moments.",
  path: "/help",
  keywords: [
    "faq",
    "help",
    "how to download",
    "can't join room",
    "controls",
    "how to paint",
    "multiplayer",
  ],
});

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Help & FAQ"
        description="Answers to real player questions — download, rooms, controls, painting, connection fixes, seeker/hider tips, and viral moments. Every topic is searchable."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {helpTopics.map((topic) => (
          <Card
            key={topic.slug}
            href={`/help/${topic.slug}`}
            title={topic.title}
            description={topic.excerpt}
            badge={topic.category}
            badgeColor="bg-accent/10 text-accent ring-accent/30"
            footer={
              <span className="text-xs text-muted">
                {helpTopicQuestionCount(topic)} questions answered
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}
