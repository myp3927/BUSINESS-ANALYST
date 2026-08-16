"use client";

import { motion } from "framer-motion";
import { EASE, viewportOnce } from "./motion";

const AS_IS = ["Thấy JD hấp dẫn", "Tự đoán độ phù hợp", "Dán CV + JD vào AI chat", "Lưu kết quả rải rác"];
const TO_BE = ["Thấy JD hấp dẫn", "Dán vào AnalyzeCV", "Nhận % + phân tích 6 nhóm", "Tự lưu lịch sử + quản lý đơn"];

function Lane({
  tag,
  steps,
  delay,
  active = false,
}: {
  tag: string;
  steps: string[];
  delay: number;
  active?: boolean;
}) {
  return (
    <div
      className={`card-shadow overflow-hidden rounded-card border ${
        active ? "border-accent/40 bg-card" : "border-line bg-paper-raised"
      }`}
    >
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
        <span
          className={`inline-flex w-fit flex-none rounded-full px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] ${
            active ? "bg-accent text-white" : "bg-paper-sunken text-ink-faint"
          }`}
        >
          {tag}
        </span>
        <ol className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: delay + i * 0.08, ease: EASE }}
              className="relative"
            >
              <div
                className={`flex h-full items-center rounded-frame border px-3 py-3 text-[0.82rem] leading-snug ${
                  active ? "border-accent/25 bg-accent-tint text-ink" : "border-line bg-paper-sunken text-ink-soft"
                }`}
              >
                {s}
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[11px] top-1/2 hidden -translate-y-1/2 font-mono text-[0.8rem] text-ink-faint lg:block"
                >
                  →
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function AsIsToBe() {
  return (
    <div className="flex flex-col gap-3">
      <Lane tag="As-is" steps={AS_IS} delay={0} />
      <Lane tag="To-be" steps={TO_BE} delay={0.2} active />
      <p className="mt-1 max-w-prose text-[0.9rem] text-ink-soft">
        4 bước rời rạc, tự đoán, lưu rải rác → gộp về <strong className="font-medium text-ink">1 luồng duy nhất</strong>:
        đánh giá xong là tự có lịch sử, không phải mở thêm tab nào khác.
      </p>
    </div>
  );
}
