export function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="15"
      height="15"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 10.5l3.8 3.8L16 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="15"
      height="15"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HalfMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="15"
      height="15"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 3a7 7 0 010 14z" fill="currentColor" />
    </svg>
  );
}

export function UnknownMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-[0.9rem] font-bold ${className}`} aria-hidden="true">
      ?
    </span>
  );
}
