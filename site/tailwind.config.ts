import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-sunken": "var(--paper-sunken)",
        "paper-raised": "var(--paper-raised)",
        card: "var(--card)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-tint": "var(--accent-tint)",
        night: "var(--night)",
        "night-line": "var(--night-line)",
        "night-soft": "var(--night-soft)",
        yes: "var(--yes)",
        half: "var(--half)",
        no: "var(--no)",
        unknown: "var(--unknown)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // thang chữ đo được từ Fluence
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
        h1: ["clamp(2.25rem, 1.4rem + 3.2vw, 3.5rem)", { lineHeight: "1.14", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.85rem, 1.2rem + 2.4vw, 2.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.4rem, 1.1rem + 1.1vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        h4: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        lede: ["1rem", { lineHeight: "1.625" }],
      },
      maxWidth: {
        container: "1280px",
        prose: "68ch",
      },
      borderRadius: {
        frame: "8px",
        card: "12px",
        panel: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
