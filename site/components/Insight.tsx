import type { ReactNode } from "react";
import { Sparkle } from "./Primitives";

/** Khối "điểm chốt" — thẻ trắng bo 12, có dấu sao cam, chữ display cỡ vừa. */
export function Insight({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`card-shadow flex gap-4 rounded-card border p-6 sm:p-7 ${
        dark ? "border-white/10 bg-white/[0.04]" : "border-line bg-card"
      }`}
    >
      <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-frame bg-gradient-to-b from-accent-soft to-accent text-white">
        <Sparkle className="h-3.5 w-3.5" />
      </span>
      <p
        className={`max-w-[62ch] font-display text-[1.125rem] font-medium leading-[1.5] sm:text-[1.25rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/** Câu trích dẫn lớn trên nền tối. */
export function Statement({ children }: { children: ReactNode }) {
  return (
    <div className="gloss relative overflow-hidden rounded-card bg-ink p-7 sm:p-9">
      <div aria-hidden="true" className="dot-pattern pointer-events-none absolute inset-0 text-white/[0.07]" />
      <p className="relative max-w-[54ch] font-display text-[1.25rem] font-medium leading-[1.45] text-white sm:text-[1.5rem]">
        {children}
      </p>
    </div>
  );
}
