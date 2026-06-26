"use client";

import { useEffect, useRef } from "react";
import { AdSlot } from "./AdSlot";

const AD_KEY = "75859b5e491647da5e0678f32466e313";

export default function Banner728() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const optionsScript = document.createElement("script");
    optionsScript.text = `
      atOptions = {
        'key' : '${AD_KEY}',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    container.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.src = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;
    invokeScript.async = false;
    container.appendChild(invokeScript);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <AdSlot className="hidden md:flex">
      <div ref={containerRef} className="h-[90px] w-full max-w-[728px]" />
    </AdSlot>
  );
}
