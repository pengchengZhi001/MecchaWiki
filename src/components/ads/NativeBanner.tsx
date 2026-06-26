"use client";

import { useEffect, useRef } from "react";
import { AdSlot } from "./AdSlot";

const CONTAINER_ID = "container-eb795b965a47dff8fa3e2e01c08bd774";
const INVOKE_SRC =
  "https://pl29903817.effectivecpmnetwork.com/eb795b965a47dff8fa3e2e01c08bd774/invoke.js";

type NativeBannerProps = {
  sidebar?: boolean;
};

export default function NativeBanner({ sidebar = false }: NativeBannerProps) {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    const container = slot.querySelector<HTMLDivElement>(`#${CONTAINER_ID}`);
    if (!container) return;

    const script = document.createElement("script");
    script.src = INVOKE_SRC;
    script.async = false;
    script.setAttribute("data-cfasync", "false");
    slot.insertBefore(script, container);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  return (
    <AdSlot variant={sidebar ? "sidebar" : "inline"}>
      <div ref={slotRef} className={sidebar ? "w-full" : "w-full max-w-2xl"}>
        <div id={CONTAINER_ID} />
      </div>
    </AdSlot>
  );
}
