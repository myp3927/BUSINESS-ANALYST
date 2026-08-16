"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#boi-canh", label: "Bối cảnh" },
  { href: "#vai-tro", label: "Vai trò" },
  { href: "#mo-hinh-cham-diem", label: "Mô hình" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#thi-truong", label: "Thị trường" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#ky-nang", label: "Kỹ năng" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line backdrop-blur-md transition-colors ${
        scrolled ? "bg-paper/90" : "bg-paper/60"
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-5 px-6 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-[0.82rem] font-medium tracking-[0.03em] text-ink no-underline"
        >
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-amber" />
          BA CASE STUDY — ANALYZECV
        </a>
        <ul className="hidden gap-5 overflow-x-auto whitespace-nowrap md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.74rem] uppercase tracking-[0.03em] text-ink-soft no-underline transition-colors hover:text-teal-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
