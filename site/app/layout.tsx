import type { Metadata } from "next";
import { display, mono, sans } from "./fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnalyzeCV — Case Study Business Analyst",
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
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans text-[1rem] leading-[1.625] antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
