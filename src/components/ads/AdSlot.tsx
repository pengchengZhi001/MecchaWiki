import type { ReactNode } from "react";

type AdSlotProps = {
  children: ReactNode;
  className?: string;
  variant?: "inline" | "sidebar";
};

export function AdSlot({ children, className = "", variant = "inline" }: AdSlotProps) {
  const layout =
    variant === "sidebar"
      ? "flex justify-center"
      : "my-8 flex justify-center overflow-hidden";

  return (
    <aside className={`${layout} ${className}`.trim()} aria-hidden>
      {children}
    </aside>
  );
}
