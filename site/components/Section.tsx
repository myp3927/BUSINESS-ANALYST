import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  wide = false,
  noBorder = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  wide?: boolean;
  noBorder?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 md:py-24 ${
        noBorder ? "" : "border-t border-line"
      }`}
    >
      <div className={wide ? "mx-auto max-w-[1080px] px-6" : "mx-auto max-w-[840px] px-6"}>
        <Reveal>
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-teal-deep before:block before:h-px before:w-[22px] before:bg-teal-deep">
            {eyebrow}
          </p>
          <h2 className="text-balance font-display text-[clamp(1.6rem,1.1rem+2vw,2.35rem)] font-semibold leading-[1.12] text-ink">
            {title}
          </h2>
          {lede && (
            <p className="mt-5 max-w-[62ch] text-[1.12rem] text-ink-soft">
              {lede}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
