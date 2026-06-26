"use client";

import Script from "next/script";
import { AdSlot } from "./AdSlot";

const AD_KEY = "59bbbdea4fdb1cc26e1787b4cc0dc94e";

export default function Banner300() {
  return (
    <AdSlot>
      <div className="h-[250px] w-[300px] max-w-full">
        <Script id="banner-300-atoptions" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '${AD_KEY}',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="banner-300-invoke"
          src={`https://www.highperformanceformat.com/${AD_KEY}/invoke.js`}
          strategy="afterInteractive"
        />
      </div>
    </AdSlot>
  );
}
