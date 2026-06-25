import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Meccha Wiki disclaimer — unofficial fan site, editorial ratings, trademarks, and affiliate links.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-2 text-sm text-muted">Last updated: June 25, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Unofficial fan site</h2>
          <p className="mt-2">
            Meccha Wiki is not affiliated with, endorsed by, or sponsored by lemorion_1224 or
            any official MECCHA CHAMELEON publisher. Game names, logos, and screenshots are
            trademarks of their respective owners and are used here for identification and
            commentary under fair use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Editorial ratings</h2>
          <p className="mt-2">
            Hiding spot &ldquo;editorial ratings&rdquo; (shown as X/100) are guide-based
            estimates compiled from sources such as TheGamer, IGN, and community references.
            They are <strong>not</strong> live match statistics or aggregated player votes unless
            explicitly stated otherwise on a future feature page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Workshop &amp; Steam data</h2>
          <p className="mt-2">
            Steam Workshop subscription counts and preview images are synced from public Steam
            data when possible. Counts change over time; always confirm on the official Steam
            listing before subscribing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Images</h2>
          <p className="mt-2">
            Spot screenshots are sourced from IGN wiki assets, community guides, and official
            Steam store media where noted. When a spot-specific image is unavailable, we may use
            a map overview screenshot — see each spot page for attribution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">No warranty</h2>
          <p className="mt-2">
            Guides and spot listings are provided &ldquo;as is.&rdquo; Map geometry, balance, and
            spot viability can change after game patches. Test spots yourself before relying on
            them in competitive lobbies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Related policies</h2>
          <p className="mt-2">
            See our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>{" "}
            for data handling practices.
          </p>
        </section>
      </div>
    </div>
  );
}
