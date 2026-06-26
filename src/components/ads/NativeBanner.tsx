"use client";

import { useEffect, useId, useRef } from "react";
import { AdSlot } from "./AdSlot";

const CONTAINER_ID = "container-eb795b965a47dff8fa3e2e01c08bd774";
const INVOKE_SRC =
  "https://pl29903817.effectivecpmnetwork.com/eb795b965a47dff8fa3e2e01c08bd774/invoke.js";

export default function NativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptId = useId().replace(/:/g, "");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = INVOKE_SRC;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [scriptId]);

  return (
    <AdSlot>
      <div ref={containerRef} id={CONTAINER_ID} className="w-full max-w-2xl" />
    </AdSlot>
  );
}
