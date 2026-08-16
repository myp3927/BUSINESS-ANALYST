import type { ReactNode } from "react";

/* ── Icon nhỏ ───────────────────────────────────────────── */

export function Sparkle({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 0l1.2 3.9c.2.6.6 1 1.2 1.2L13.3 6.3c.5.2.5.9 0 1.1L9.4 8.8c-.6.2-1 .6-1.2 1.2L7 14l-1.2-4c-.2-.6-.6-1-1.2-1.2L.7 7.4c-.5-.2-.5-.9 0-1.1l3.9-1.2c.6-.2 1-.6 1.2-1.2L7 0z" />
    </svg>
  );
}

export function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 4.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cross({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
    </svg>
  );
}

export function Half({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 2a6 6 0 010 12z" fill="currentColor" />
    </svg>
  );
}

export function Unknown({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M2 8h12" strokeLinecap="round" />
    </svg>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Eyebrow pill ───────────────────────────────────────── */

export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/10 bg-white/5 text-white/90"
      : "border-line bg-card text-ink card-shadow";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-eyebrow uppercase ${toneClass} ${className}`}
    >
      <Sparkle className={`h-3 w-3 ${tone === "dark" ? "text-accent-light" : "text-accent"}`} />
      {children}
    </span>
  );
}

/* ── Nút ────────────────────────────────────────────────── */

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 rounded-frame px-4 py-3 text-[0.875rem] font-medium no-underline transition-all duration-200";

const BTN_TONE = {
  accent: "gloss bg-accent text-white hover:brightness-105 active:translate-y-px",
  dark: "gloss bg-ink text-white hover:bg-[#1b1b18] active:translate-y-px",
  white: "card-shadow bg-white text-ink hover:bg-paper-raised active:translate-y-px",
  outline: "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-black/[0.03]",
  ghostDark: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
} as const;

export function Button({
  href,
  children,
  tone = "dark",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof BTN_TONE;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={`${BTN_BASE} ${BTN_TONE[tone]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

/* ── Ô icon vuông bo góc (kiểu Fluence) ─────────────────── */

export function IconTile({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "ink" | "muted";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-gradient-to-b from-accent-soft to-accent text-white"
      : tone === "ink"
        ? "bg-ink text-white"
        : "border border-line bg-paper-sunken text-ink-soft";
  return (
    <span className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-frame text-[0.8rem] font-medium ${toneClass}`}>
      {children}
    </span>
  );
}

/* ── Nhãn mono nhỏ ──────────────────────────────────────── */

export function Tag({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "accent" | "ink" | "outline";
}) {
  const toneClass = {
    muted: "bg-paper-sunken text-ink-soft",
    accent: "bg-accent text-white",
    ink: "bg-ink text-white",
    outline: "border border-line-strong text-ink-soft",
  }[tone];
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] ${toneClass}`}>
      {children}
    </span>
  );
}
