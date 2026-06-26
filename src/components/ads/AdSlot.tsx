import type { ReactNode } from "react";

type AdSlotProps = {
  children: ReactNode;
  className?: string;
};

export function AdSlot({ children, className = "" }: AdSlotProps) {
  return (
    <aside
      className={`my-8 flex justify-center overflow-hidden ${className}`.trim()}
      aria-hidden
    >
      {children}
    </aside>
  );
}
