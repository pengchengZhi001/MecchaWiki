import type { ReactNode } from "react";
import ResponsiveAdStack from "./ResponsiveAdStack";

type SidebarAdsProps = {
  children?: ReactNode;
  className?: string;
};

/** Desktop right column: ads + optional widgets stick together below the header */
export function SidebarAds({ children, className = "" }: SidebarAdsProps) {
  return (
    <aside className={`self-stretch ${className}`.trim()}>
      <div className="space-y-6 lg:sticky lg:top-24 lg:z-10">
        <div className="space-y-4">
          <ResponsiveAdStack placement="sidebar" />
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
      <ResponsiveAdStack placement="inline" />
    </div>
  );
}
