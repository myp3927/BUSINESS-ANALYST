import type { Metadata } from "next";
import { fraunces, plexMono, sourceSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnalyzeCV — Case Study",
  description:
    "Case study portfolio Business Analyst: hành trình xây AnalyzeCV từ nỗi đau cá nhân đến sản phẩm chạy thật.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧭</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${plexMono.variable} ${sourceSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
