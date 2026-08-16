import localFont from "next/font/local";

export const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/fraunces-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/plexmono-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/plexmono-500.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-plexmono",
  display: "swap",
});

export const sourceSans = localFont({
  src: [
    { path: "./fonts/sourcesans-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/sourcesans-600.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-sourcesans",
  display: "swap",
});
