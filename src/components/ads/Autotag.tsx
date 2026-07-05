"use client";

import Script from "next/script";

const ZONE_ID = "uzaeciqxmo";

declare global {
  interface Window {
    aclib?: {
      runAutoTag: (options: { zoneId: string }) => void;
    };
  }
}

export default function Autotag() {
  return (
    <Script
      id="aclib"
      src="https://acscdn.com/script/aclib.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.aclib?.runAutoTag({ zoneId: ZONE_ID });
      }}
    />
  );
}
