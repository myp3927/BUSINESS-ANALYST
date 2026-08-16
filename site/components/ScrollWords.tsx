"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "framer-motion";

/**
 * Hiệu ứng chữ ký của Fluence: câu văn được cắt thành từng từ,
 * mỗi từ sáng dần từ opacity .18 → 1 theo tiến độ cuộn qua khối chữ.
 * Tiến độ tính thủ công (scroll listener + rAF) để không phụ thuộc vào việc
 * trình duyệt chọn scroll container nào.
 * Khi người dùng bật "giảm chuyển động": mọi từ hiển thị đầy đủ, không mờ.
 */
function Word({
  children,
  progress,
  range,
  reduced,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduced: boolean;
}) {
  const opacity = useTransform(progress, range, reduced ? [1, 1] : [0.18, 1]);
  const blur = useTransform(
    progress,
    range,
    reduced ? ["blur(0px)", "blur(0px)"] : ["blur(4px)", "blur(0px)"],
  );
  return (
    <motion.span style={{ opacity, filter: blur }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export function ScrollWords({
  text,
  tone = "light",
  className = "",
}: {
  text: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const progress = useMotionValue(0);
  const words = text.split(" ");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 khi đỉnh khối chạm đáy màn hình · 1 khi đáy khối lên tới giữa màn hình
      const total = r.height + vh * 0.5;
      const travelled = vh - r.top;
      progress.set(Math.min(1, Math.max(0, travelled / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [progress]);

  return (
    <div ref={ref} className={className}>
      <p
        className={`max-w-[22ch] text-balance font-display text-h2 font-medium sm:max-w-[26ch] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {words.map((w, i) => {
          const start = (i / words.length) * 0.8;
          const end = Math.min(1, start + 0.8 / words.length + 0.12);
          return (
            <Word key={`${w}-${i}`} progress={progress} range={[start, end]} reduced={reduced}>
              {w}
            </Word>
          );
        })}
      </p>
    </div>
  );
}
