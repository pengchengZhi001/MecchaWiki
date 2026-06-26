"use client";

import { useEffect, useRef } from "react";
import { AdSlot } from "./AdSlot";

const AD_KEY = "59bbbdea4fdb1cc26e1787b4cc0dc94e";

export default function Banner300() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const optionsScript = document.createElement("script");
    optionsScript.text = `
      atOptions = {
        'key' : '${AD_KEY}',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    container.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.src = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;
    invokeScript.async = true;
    container.appendChild(invokeScript);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <AdSlot>
      <div ref={containerRef} className="h-[250px] w-[300px] max-w-full" />
    </AdSlot>
  );
}
