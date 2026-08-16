"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion";

const LINKS = [
  { href: "#boi-canh", label: "Bối cảnh" },
  { href: "#vai-tro", label: "Vai trò" },
  { href: "#mo-hinh", label: "Mô hình" },
  { href: "#thi-truong", label: "Thị trường" },
  { href: "#roadmap", label: "Roadmap" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-8 w-8 flex-none items-center justify-center rounded-[7px] bg-white font-display text-[0.9rem] font-bold text-ink ${className}`}
      aria-hidden="true"
    >
      A
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2 py-4 sm:px-6">
      <motion.nav
        animate={{ maxWidth: scrolled ? 680 : 1240 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{ maxWidth: 1240, backgroundColor: scrolled ? "rgba(11,11,9,0.92)" : "rgba(11,11,9,0.32)" }}
        className="glass-edge pointer-events-auto mx-auto flex items-center gap-3 rounded-card p-2.5 backdrop-blur-md transition-shadow duration-500"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-frame px-1 py-0.5 no-underline"
          aria-label="Về đầu trang"
        >
          <Logo />
          <AnimatePresence initial={false}>
            {!scrolled && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="overflow-hidden whitespace-nowrap font-display text-[0.95rem] font-semibold text-white"
              >
                AnalyzeCV
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <ul className="mx-auto hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-frame px-3 py-2 text-[0.85rem] text-white/70 no-underline transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href="#lien-he"
            className="gloss rounded-frame bg-white px-4 py-2 text-[0.85rem] font-medium text-ink no-underline transition-colors hover:bg-paper"
          >
            Liên hệ
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Mở danh mục"
            className="flex h-9 w-9 items-center justify-center rounded-frame border border-white/15 text-white md:hidden"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d={open ? "M4 4l8 8M12 4l-8 8" : "M2.5 5h11M2.5 11h11"} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="pointer-events-auto mx-auto mt-2 flex max-w-container flex-col gap-1 rounded-card bg-night/95 p-3 backdrop-blur-md md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-frame px-3 py-2.5 text-[0.9rem] text-white/80 no-underline hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
