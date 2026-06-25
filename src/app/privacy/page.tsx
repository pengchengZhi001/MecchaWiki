import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Meccha Wiki — what data we collect, cookies, third-party services, and your choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: June 25, 2026</p>

      <div className="prose prose-invert mt-8 max-w-none space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
          <p>
            Meccha Wiki ({`meccha.wiki`}) is an unofficial fan reference site for MECCHA
            CHAMELEON. This policy explains what information we may collect when you visit the
            site and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Server logs:</strong> Our hosting provider may record IP address, browser
              type, pages visited, and timestamps for security and performance.
            </li>
            <li>
              <strong>Local feedback:</strong> Spot accuracy buttons on detail pages store your
              choice only in your browser session — we do not send votes to our servers today.
            </li>
            <li>
              <strong>Analytics (if enabled):</strong> We may use privacy-focused analytics to
              understand traffic. If added, this section will name the provider and link to their
              policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Cookies &amp; advertising</h2>
          <p>
            The site may use essential cookies for basic functionality. If we display advertising
            (for example Google AdSense), ad partners may set cookies to serve relevant ads. You
            can manage cookies in your browser settings and opt out of personalized ads via your
            Google Ads settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Third-party links</h2>
          <p>
            We link to Steam Workshop, IGN, TheGamer, and other external sites. Those services
            have their own privacy policies — review them when you leave Meccha Wiki.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Children</h2>
          <p>
            Meccha Wiki is a general game guide site. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            Questions about this policy can be sent through the contact method listed on the site
            footer when available.
          </p>
        </section>
      </div>
    </div>
  );
}
