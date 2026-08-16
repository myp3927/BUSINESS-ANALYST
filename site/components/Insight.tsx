import type { ReactNode } from "react";

export function Insight({ children }: { children: ReactNode }) {
  return (
    <div className="my-7 rounded-r-[10px] border-l-[3px] border-amber bg-paper-raised px-7 py-6">
      <p className="max-w-[56ch] font-display text-[1.14rem] font-semibold leading-[1.5] text-ink">
        {children}
      </p>
    </div>
  );
}

export function Statement({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-[10px] bg-teal-deep px-8 py-7 shadow-[0_1px_2px_rgba(21,43,39,.06),0_8px_24px_-12px_rgba(21,43,39,.18)] dark:border dark:border-line-strong dark:bg-paper-raised">
      <p className="max-w-[58ch] font-display text-[1.22rem] font-semibold leading-[1.48] text-[#F3F5EF] dark:text-ink">
        {children}
      </p>
    </div>
  );
}
