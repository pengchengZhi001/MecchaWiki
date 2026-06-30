import type { ReactNode } from "react";

type AdSlotProps = {
  children: ReactNode;
  className?: string;
  variant?: "inline" | "sidebar";
};

export function AdSlot({ children, className = "", variant = "inline" }: AdSlotProps) {
  const layout =
    variant === "sidebar"
      ? "flex w-full max-w-full justify-center overflow-hidden"
      : "my-8 flex w-full max-w-full justify-center overflow-hidden";

  return (
    <aside className={`${layout} ${className}`.trim()} aria-hidden>
      {children}
    </aside>
  );
}