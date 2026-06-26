"use client";

import { useEffect, useState } from "react";
import Banner300 from "./Banner300";
import NativeBanner from "./NativeBanner";

type ResponsiveAdStackProps = {
  /** Sidebar column on desktop (lg+); inline block below article on mobile */
  placement: "sidebar" | "inline";
};

function AdStack({ sidebar }: { sidebar: boolean }) {
  return (
    <>
      <Banner300 sidebar={sidebar} />
      <NativeBanner sidebar={sidebar} />
    </>
  );
}

export default function ResponsiveAdStack({ placement }: ResponsiveAdStackProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) return null;

  const show =
    placement === "sidebar" ? isDesktop : !isDesktop;

  if (!show) return null;

  return <AdStack sidebar={placement === "sidebar"} />;
}
