"use client";

import Script from "next/script";
import { AdSlot } from "./AdSlot";

const CONTAINER_ID = "container-eb795b965a47dff8fa3e2e01c08bd774";

export default function NativeBanner() {
  return (
    <AdSlot>
      <div id={CONTAINER_ID} className="w-full max-w-2xl" />
      <Script
        id="native-banner-invoke"
        src="https://pl29903817.effectivecpmnetwork.com/eb795b965a47dff8fa3e2e01c08bd774/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
        async
      />
    </AdSlot>
  );
}
