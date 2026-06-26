"use client";

import Script from "next/script";
import { AdSlot } from "./AdSlot";

const AD_KEY = "75859b5e491647da5e0678f32466e313";

export default function Banner728() {
  return (
    <AdSlot className="hidden md:flex">
      <div className="h-[90px] w-full max-w-[728px]">
        <Script id="banner-728-atoptions" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '${AD_KEY}',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="banner-728-invoke"
          src={`https://www.highperformanceformat.com/${AD_KEY}/invoke.js`}
          strategy="afterInteractive"
        />
      </div>
    </AdSlot>
  );
}
