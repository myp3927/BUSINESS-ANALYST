"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "./Primitives";
import { EASE, viewportOnce } from "./motion";

/**
 * Khối zig-zag của Fluence: một bên chữ + checklist, một bên khối minh hoạ.
 * Bọc ngoài là thẻ nền sáng, viền mảnh, bo 16.
 */
export function SplitBlock({
  title,
  body,
  bullets = [],
  visual,
  reverse = false,
}: {
  title: string;
  body: ReactNode;
  bullets?: string[];
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: EASE }}
      className="card-shadow grid grid-cols-1 gap-6 overflow-hidden rounded-panel border border-line bg-paper-raised p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10"
    >
      <div className={`flex flex-col ${reverse ? "lg:order-2" : ""}`}>
        <h3 className="max-w-[20ch] text-balance font-display text-h3 font-medium text-ink">{title}</h3>
        <div className="mt-4 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink-soft">{body}</div>
        {bullets.length > 0 && (
          <ul className="mt-auto flex flex-col gap-3 pt-8">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }}
                className="flex items-center gap-3 text-[0.95rem] text-ink"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line-strong text-ink">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
      <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
    </motion.div>
  );
}
