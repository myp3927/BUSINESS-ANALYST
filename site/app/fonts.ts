import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Bộ ba font theo phân tích Fluence:
 * - display: sans hình học, weight 500 cho mọi tiêu đề (General Sans → Plus Jakarta Sans vì có dấu tiếng Việt)
 * - sans: sans trung tính cho đoạn văn
 * - mono: nhãn / eyebrow / số
 */
export const display = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
