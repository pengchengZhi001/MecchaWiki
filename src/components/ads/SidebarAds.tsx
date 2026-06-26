import type { ReactNode } from "react";
import Banner300 from "./Banner300";
import NativeBanner from "./NativeBanner";

function AdStack() {
  return (
    <>
      <Banner300 sidebar />
      <NativeBanner sidebar />
    </>
  );
}

type SidebarAdsProps = {
  children?: ReactNode;
  className?: string;
};

/** Desktop right column: ads + optional widgets stick together below the header */
export function SidebarAds({ children, className = "" }: SidebarAdsProps) {
  return (
    <aside className={`self-stretch ${className}`.trim()}>
      <div className="space-y-6 lg:sticky lg:top-24 lg:z-10">
        <div className="hidden space-y-4 lg:block">
          <AdStack />
        </div>
        {children}
      </div>
    </aside>
  );
}

/** Mobile / inline fallback below the article */
export function InlineAds() {
  return (
    <div className="space-y-4">
      <AdStack />
    </div>
  );
}
