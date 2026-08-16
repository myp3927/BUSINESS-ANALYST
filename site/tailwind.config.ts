import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-raised": "var(--paper-raised)",
        "paper-sunken": "var(--paper-sunken)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        teal: "var(--teal)",
        "teal-deep": "var(--teal-deep)",
        "teal-tint": "var(--teal-tint)",
        amber: "var(--amber)",
        "amber-tint": "var(--amber-tint)",
        good: "var(--good)",
        "good-tint": "var(--good-tint)",
        bad: "var(--bad)",
        "bad-tint": "var(--bad-tint)",
        "neutral-mark": "var(--neutral-mark)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-plexmono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sourcesans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
