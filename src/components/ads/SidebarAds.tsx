import type { ReactNode } from "react";

type SidebarAdsProps = {
  children?: ReactNode;
  className?: string;
};

/** Desktop right column: optional widgets stick below the header */
export function SidebarAds({ children, className = "" }: SidebarAdsProps) {
  if (!children) return null;

  return (
    <aside className={`self-stretch ${className}`.trim()}>
      <div className="space-y-6 lg:sticky lg:top-24 lg:z-10">{children}</div>
    </aside>
  );
}
