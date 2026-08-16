import type { ReactNode } from "react";

/**
 * Băng chạy ngang vô tận — Fluence dùng ở Trust Bar và Integrations.
 * Hai mép fade bằng gradient trùng màu nền (không dùng mask), tạm dừng khi hover.
 */
export function Marquee({
  children,
  direction = "left",
  duration = 34,
  fadeColor = "var(--paper)",
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  fadeColor?: string;
  className?: string;
}) {
  return (
    <div className={`marquee relative overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        data-direction={direction}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center gap-3 pr-3">{children}</div>
        <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
          {children}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28"
        style={{ background: `linear-gradient(90deg, ${fadeColor} 20%, transparent 100%)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28"
        style={{ background: `linear-gradient(270deg, ${fadeColor} 20%, transparent 100%)` }}
      />
    </div>
  );
}
